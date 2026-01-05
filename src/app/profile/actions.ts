'use server';

import { adminDb, adminAuth } from '@/lib/firebase-server';
import { getStorage } from 'firebase-admin/storage';
import { FieldValue, FieldPath } from 'firebase-admin/firestore';
import type { Course } from '@/lib/courses';
import { courses } from '@/lib/courses';

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type PublicDeck = {
  id: string;
  title: string;
  description: string;
  cardCount: number;
  courseId: string | null;
};

export type PrivacySettings = {
  showStreak: boolean;
  showCourses: boolean;
  showDecks: boolean;
  showActivity: boolean;
  showTheme: boolean;
};

export type UserPreview = {
  uid: string;
  username: string;
  displayName: string;
  photoURL: string | null;
  bio?: string;
};

export type PublicUserProfile = {
  uid: string;
  username: string;
  displayName: string;
  photoURL: string | null;
  bannerURL: string | null;
  bio: string;
  theme: string;
  isPrivate: boolean;
  streak: number;
  followerCount: number;
  followingCount: number;
  isFollowedByCurrentUser: boolean;
  publicDecks: PublicDeck[];
  addedCourses: Course[];
  privacySettings: PrivacySettings;
  recentlyStudiedDecks: PublicDeck[];
  createdAt: Date;
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

async function getCurrentUserId(): Promise<string | null> {
  try {
    const { cookies } = await import('next/headers');
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;
    if (!sessionCookie) return null;
    
    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
    return decodedClaims.uid;
  } catch {
    return null;
  }
}

// ============================================================================
// PROFILE RETRIEVAL
// ============================================================================

export async function getUserProfileByUsername(
  username: string,
  currentUserId: string | null = null
): Promise<PublicUserProfile | null> {
  if (!username) return null;

  // Get current user if not provided
  if (!currentUserId) {
    currentUserId = await getCurrentUserId();
  }

  // Find user by username
  const usernameLower = username.toLowerCase();
  const usernameDocRef = adminDb.collection('usernames').doc(usernameLower);
  const usernameSnap = await usernameDocRef.get();

  if (!usernameSnap.exists) {
    console.warn(`Username '${usernameLower}' not found`);
    return null;
  }

  const uid = usernameSnap.data()!.uid;
  const userDocRef = adminDb.collection('users').doc(uid);
  const userSnap = await userDocRef.get();

  if (!userSnap.exists) {
    return null;
  }

  const userData = userSnap.data()!;

  // Get auth user metadata for creation date
  let createdAt: Date;
  try {
    const authUser = await adminAuth.getUser(uid);
    createdAt = new Date(authUser.metadata.creationTime);
  } catch (error) {
    console.error('Failed to get auth user metadata:', error);
    createdAt = userData.createdAt?.toDate() || new Date();
  }

  // Check if profile is private
  if (userData.isPrivate === true && currentUserId !== uid) {
    return {
      uid,
      username: userData.username,
      displayName: userData.displayName || userData.firstName || 'User',
      photoURL: userData.photoURL || null,
      bannerURL: userData.bannerURL || null,
      bio: '',
      theme: '',
      isPrivate: true,
      streak: 0,
      followerCount: 0,
      followingCount: 0,
      isFollowedByCurrentUser: false,
      publicDecks: [],
      addedCourses: [],
      privacySettings: {
        showStreak: false,
        showCourses: false,
        showDecks: false,
        showActivity: false,
        showTheme: false,
      },
      recentlyStudiedDecks: [],
      createdAt,
    };
  }

  // Check if current user follows this profile
  let isFollowedByCurrentUser = false;
  if (currentUserId) {
    const followDocRef = adminDb
      .collection('users')
      .doc(currentUserId)
      .collection('following')
      .doc(uid);
    const followDoc = await followDocRef.get();
    isFollowedByCurrentUser = followDoc.exists;
  }

  // Get follower/following counts
  const followersSnap = await adminDb
    .collection('users')
    .doc(uid)
    .collection('followers')
    .count()
    .get();
  
  const followingSnap = await adminDb
    .collection('users')
    .doc(uid)
    .collection('following')
    .count()
    .get();

  const followerCount = followersSnap.data().count;
  const followingCount = followingSnap.data().count;

  // Default privacy settings
  const defaultPrivacySettings: PrivacySettings = {
    showStreak: true,
    showCourses: true,
    showDecks: true,
    showActivity: true,
    showTheme: true,
  };
  const privacySettings = { ...defaultPrivacySettings, ...(userData.privacySettings || {}) };

  // Fetch public decks
  const decksRef = adminDb.collection('courseDecks');
  const publicDecksSnap = await decksRef
    .where('ownerId', '==', uid)
    .where('isPublic', '==', true)
    .limit(20)
    .get();

  const publicDecks: PublicDeck[] = publicDecksSnap.docs.map(deckDoc => {
    const d = deckDoc.data();
    return {
      id: deckDoc.id,
      title: d.title,
      description: d.description,
      cardCount: d.cards?.length || 0,
      courseId: d.courseId || null,
    };
  });

  // Fetch recently studied decks
  const progressRef = adminDb.collection('users').doc(uid).collection('deckProgress');
  const recentProgressSnap = await progressRef
    .orderBy('lastStudied', 'desc')
    .limit(5)
    .get();

  const recentlyStudiedDecks: PublicDeck[] = [];
  if (!recentProgressSnap.empty) {
    const recentDeckIds = recentProgressSnap.docs.map(doc => doc.id);
    const recentDeckDocs = await Promise.all(
      recentDeckIds.map(deckId => decksRef.doc(deckId).get())
    );

    recentDeckDocs.forEach(deckDoc => {
      if (deckDoc.exists) {
        const d = deckDoc.data()!;
        if (d.isPublic) {
          recentlyStudiedDecks.push({
            id: deckDoc.id,
            title: d.title,
            description: d.description,
            cardCount: d.cards?.length || 0,
            courseId: d.courseId || null,
          });
        }
      }
    });
  }

  // Get added courses
  const addedCourseIds: string[] = userData.addedCourses || [];
  const addedCoursesData: Course[] = addedCourseIds
    .map(id => courses.find(c => c.id === id))
    .filter((c): c is Course => !!c);

  return {
    uid,
    username: userData.username || '',
    displayName: userData.displayName || userData.firstName || 'User',
    photoURL: userData.photoURL || null,
    bannerURL: userData.bannerURL || null,
    bio: userData.bio || '',
    theme: userData.theme || '',
    isPrivate: userData.isPrivate || false,
    streak: userData.streak || 0,
    followerCount,
    followingCount,
    isFollowedByCurrentUser,
    publicDecks,
    addedCourses: addedCoursesData,
    privacySettings,
    recentlyStudiedDecks,
    createdAt, // Use the auth creation time fetched above
  };
}

// ============================================================================
// FOLLOW/UNFOLLOW SYSTEM
// ============================================================================

export async function toggleFollowUser(
  currentUserId: string,
  targetUserId: string,
  follow: boolean
): Promise<{ success: boolean; error?: string }> {
  if (!currentUserId || !targetUserId) {
    return { success: false, error: 'User IDs are required.' };
  }

  if (currentUserId === targetUserId) {
    return { success: false, error: 'You cannot follow yourself.' };
  }

  try {
    const currentUserDocRef = adminDb.collection('users').doc(currentUserId);
    const targetUserDocRef = adminDb.collection('users').doc(targetUserId);

    // Check if target user exists
    const targetUserDoc = await targetUserDocRef.get();
    if (!targetUserDoc.exists) {
      return { success: false, error: 'User not found.' };
    }

    if (follow) {
      // Create follow relationship using subcollections
      const followDocRef = currentUserDocRef.collection('following').doc(targetUserId);
      const followerDocRef = targetUserDocRef.collection('followers').doc(currentUserId);

      const batch = adminDb.batch();
      
      batch.set(followDocRef, {
        followedAt: FieldValue.serverTimestamp(),
        username: targetUserDoc.data()?.username || '',
        displayName: targetUserDoc.data()?.displayName || '',
        photoURL: targetUserDoc.data()?.photoURL || null,
      });

      const currentUserDoc = await currentUserDocRef.get();
      batch.set(followerDocRef, {
        followedAt: FieldValue.serverTimestamp(),
        username: currentUserDoc.data()?.username || '',
        displayName: currentUserDoc.data()?.displayName || '',
        photoURL: currentUserDoc.data()?.photoURL || null,
      });

      await batch.commit();
    } else {
      // Remove follow relationship
      const followDocRef = currentUserDocRef.collection('following').doc(targetUserId);
      const followerDocRef = targetUserDocRef.collection('followers').doc(currentUserId);

      const batch = adminDb.batch();
      batch.delete(followDocRef);
      batch.delete(followerDocRef);
      await batch.commit();
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error toggling follow:', error);
    return { success: false, error: 'An error occurred while updating follow status.' };
  }
}

// ============================================================================
// GET FOLLOWERS/FOLLOWING LISTS
// ============================================================================

export async function getUserFollowers(
  userId: string,
  limit: number = 50,
  startAfter?: string
): Promise<{ users: UserPreview[]; hasMore: boolean }> {
  try {
    let query = adminDb
      .collection('users')
      .doc(userId)
      .collection('followers')
      .orderBy('followedAt', 'desc')
      .limit(limit + 1);

    if (startAfter) {
      const startAfterDoc = await adminDb
        .collection('users')
        .doc(userId)
        .collection('followers')
        .doc(startAfter)
        .get();
      if (startAfterDoc.exists) {
        query = query.startAfter(startAfterDoc);
      }
    }

    const snapshot = await query.get();
    const hasMore = snapshot.docs.length > limit;
    const docs = hasMore ? snapshot.docs.slice(0, limit) : snapshot.docs;

    const users: UserPreview[] = docs.map(doc => {
      const data = doc.data();
      return {
        uid: doc.id,
        username: data.username || 'user',
        displayName: data.displayName || 'User',
        photoURL: data.photoURL || null,
        bio: data.bio || '',
      };
    });

    return { users, hasMore };
  } catch (error) {
    console.error('Error fetching followers:', error);
    return { users: [], hasMore: false };
  }
}

export async function getUserFollowing(
  userId: string,
  limit: number = 50,
  startAfter?: string
): Promise<{ users: UserPreview[]; hasMore: boolean }> {
  try {
    let query = adminDb
      .collection('users')
      .doc(userId)
      .collection('following')
      .orderBy('followedAt', 'desc')
      .limit(limit + 1);

    if (startAfter) {
      const startAfterDoc = await adminDb
        .collection('users')
        .doc(userId)
        .collection('following')
        .doc(startAfter)
        .get();
      if (startAfterDoc.exists) {
        query = query.startAfter(startAfterDoc);
      }
    }

    const snapshot = await query.get();
    const hasMore = snapshot.docs.length > limit;
    const docs = hasMore ? snapshot.docs.slice(0, limit) : snapshot.docs;

    const users: UserPreview[] = docs.map(doc => {
      const data = doc.data();
      return {
        uid: doc.id,
        username: data.username || 'user',
        displayName: data.displayName || 'User',
        photoURL: data.photoURL || null,
        bio: data.bio || '',
      };
    });

    return { users, hasMore };
  } catch (error) {
    console.error('Error fetching following:', error);
    return { users: [], hasMore: false };
  }
}

// ============================================================================
// PROFILE IMAGE UPLOADS
// ============================================================================

export async function updateProfileImages(
  formData: FormData
): Promise<{ success: boolean; error?: string; url?: string }> {
  const image = formData.get('image') as File;
  const imageType = formData.get('imageType') as 'avatar' | 'banner';
  const uid = formData.get('uid') as string;

  if (!image || !imageType || !uid) {
    return { success: false, error: 'Missing required data for image upload.' };
  }

  // STRICT SERVER-SIDE VALIDATION - NO BYPASSES
  // Validate file size (max 5MB)
  if (image.size > 5 * 1024 * 1024) {
    return { success: false, error: 'Image must be less than 5MB.' };
  }

  // Validate file type - STRICTLY ENFORCE
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
  if (!allowedTypes.includes(image.type)) {
    return { success: false, error: 'Invalid image type. Only JPG, PNG, WEBP, and GIF are allowed.' };
  }

  // Additional check: validate file signature (magic bytes) to prevent MIME type spoofing
  const buffer = Buffer.from(await image.arrayBuffer());
  const isValidImage = await validateImageSignature(buffer, image.type);
  if (!isValidImage) {
    return { success: false, error: 'Invalid image file. File may be corrupted or not a real image.' };
  }

  const bucket = getStorage().bucket();
  const filePath = `profile/${imageType}s/${uid}/${Date.now()}_${image.name}`;
  const file = bucket.file(filePath);

  try {
    // Get user document to find old image URL
    const userDocRef = adminDb.collection('users').doc(uid);
    const userDoc = await userDocRef.get();
    const userData = userDoc.data();

    let oldImageUrl: string | null = null;
    if (imageType === 'avatar') {
      oldImageUrl = userData?.photoURL || null;
    } else if (imageType === 'banner') {
      oldImageUrl = userData?.bannerURL || null;
    }

    // Upload new image
    await file.save(buffer, {
      metadata: { contentType: image.type },
    });

    // Make the file public
    await file.makePublic();
    const publicUrl = file.publicUrl();

    // Update database
    let updateData: Record<string, any> = {};
    if (imageType === 'avatar') {
      updateData.photoURL = publicUrl;
      await adminAuth.updateUser(uid, { photoURL: publicUrl });
    } else if (imageType === 'banner') {
      updateData.bannerURL = publicUrl;
    }

    await userDocRef.update(updateData);

    // Delete old image from storage (if exists and is from our bucket)
    if (oldImageUrl) {
      try {
        // Extract file path from URL if it's from our storage bucket
        const bucketName = bucket.name;
        if (oldImageUrl.includes(bucketName)) {
          // Parse the file path from the URL
          const urlParts = oldImageUrl.split(`${bucketName}/`);
          if (urlParts.length > 1) {
            const oldFilePath = decodeURIComponent(urlParts[1].split('?')[0]);
            const oldFile = bucket.file(oldFilePath);
            
            // Check if file exists before deleting
            const [exists] = await oldFile.exists();
            if (exists) {
              await oldFile.delete();
              console.log(`Deleted old ${imageType} image: ${oldFilePath}`);
            }
          }
        }
      } catch (deleteError) {
        // Log but don't fail the upload if deletion fails
        console.error(`Failed to delete old ${imageType} image:`, deleteError);
      }
    }

    return { success: true, url: publicUrl };
  } catch (error: any) {
    console.error(`Failed to upload ${imageType} for UID ${uid}:`, error);
    return { success: false, error: `Server error during ${imageType} upload.` };
  }
}

/**
 * Validates image file signature (magic bytes) to prevent MIME type spoofing
 */
async function validateImageSignature(buffer: Buffer, mimeType: string): Promise<boolean> {
  if (buffer.length < 12) return false;

  // Check magic bytes for each supported format
  const signatures: Record<string, (buf: Buffer) => boolean> = {
    'image/jpeg': (buf) => buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF,
    'image/jpg': (buf) => buf[0] === 0xFF && buf[1] === 0xD8 && buf[2] === 0xFF,
    'image/png': (buf) => buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47,
    'image/gif': (buf) => buf[0] === 0x47 && buf[1] === 0x49 && buf[2] === 0x46,
    'image/webp': (buf) => {
      // WebP: RIFF....WEBP
      return buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46 &&
             buf[8] === 0x57 && buf[9] === 0x45 && buf[10] === 0x42 && buf[11] === 0x50;
    },
  };

  const validator = signatures[mimeType];
  return validator ? validator(buffer) : false;
}

// ============================================================================
// PROFILE UPDATES
// ============================================================================

export async function updateUserProfile(data: {
  uid: string;
  displayName?: string;
  bio?: string;
  username?: string;
}): Promise<{ success: boolean; error?: string }> {
  const { uid, displayName, bio, username } = data;

  if (!uid) {
    return { success: false, error: 'User ID is required.' };
  }

  try {
    const userDocRef = adminDb.collection('users').doc(uid);
    const updateData: Record<string, any> = {};

    if (displayName !== undefined) {
      updateData.displayName = displayName;
      updateData.displayNameLower = displayName.toLowerCase();
      await adminAuth.updateUser(uid, { displayName });
    }

    if (bio !== undefined) {
      if (bio.length > 500) {
        return { success: false, error: 'Bio must be 500 characters or less.' };
      }
      updateData.bio = bio;
    }

    if (username !== undefined) {
      // Validate username
      if (username.length < 3) {
        return { success: false, error: 'Username must be at least 3 characters.' };
      }
      if (!/^[a-zA-Z0-9_.-]+$/.test(username)) {
        return { success: false, error: 'Username can only contain letters, numbers, underscores, dots, and hyphens.' };
      }

      const usernameLower = username.toLowerCase();
      const currentUserDoc = await userDocRef.get();
      const currentUsername = currentUserDoc.data()?.username || '';

      // Check if username is changing
      if (usernameLower !== currentUsername.toLowerCase()) {
        // Check if username is available
        const usernameDocRef = adminDb.collection('usernames').doc(usernameLower);
        const usernameDoc = await usernameDocRef.get();

        if (usernameDoc.exists) {
          return { success: false, error: 'Username is already taken.' };
        }

        // Update username
        const batch = adminDb.batch();
        batch.update(userDocRef, { username, usernameLower });
        batch.set(usernameDocRef, { uid });
        
        // Delete old username document
        if (currentUsername) {
          const oldUsernameDocRef = adminDb.collection('usernames').doc(currentUsername.toLowerCase());
          batch.delete(oldUsernameDocRef);
        }

        await batch.commit();
      }
    } else if (Object.keys(updateData).length > 0) {
      await userDocRef.update(updateData);
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error updating user profile:', error);
    return { success: false, error: 'An error occurred while updating your profile.' };
  }
}

// ============================================================================
// PRIVACY SETTINGS
// ============================================================================

export async function updatePrivacySettings(
  uid: string,
  settings: Partial<PrivacySettings>
): Promise<{ success: boolean; error?: string }> {
  if (!uid) {
    return { success: false, error: 'User ID is required.' };
  }

  try {
    const userDocRef = adminDb.collection('users').doc(uid);
    const updateData: Record<string, any> = {};

    Object.keys(settings).forEach(key => {
      updateData[`privacySettings.${key}`] = settings[key as keyof PrivacySettings];
    });

    await userDocRef.update(updateData);
    return { success: true };
  } catch (error: any) {
    console.error('Error updating privacy settings:', error);
    return { success: false, error: 'An error occurred while updating privacy settings.' };
  }
}

export async function updateProfilePrivacy(
  uid: string,
  isPrivate: boolean
): Promise<{ success: boolean; error?: string }> {
  if (!uid) {
    return { success: false, error: 'User ID is required.' };
  }

  try {
    const userDocRef = adminDb.collection('users').doc(uid);
    await userDocRef.update({ isPrivate });
    return { success: true };
  } catch (error: any) {
    console.error('Error updating profile privacy:', error);
    return { success: false, error: 'An error occurred while updating profile privacy.' };
  }
}

// ============================================================================
// SEARCH USERS
// ============================================================================

export async function searchUsers(
  query: string,
  limit: number = 20
): Promise<UserPreview[]> {
  if (!query || query.length < 2) {
    return [];
  }

  try {
    const queryLower = query.toLowerCase();
    
    // Search by username
    const usernameResults = await adminDb
      .collection('users')
      .where('usernameLower', '>=', queryLower)
      .where('usernameLower', '<=', queryLower + '\uf8ff')
      .where('isPrivate', '==', false)
      .limit(limit)
      .get();

    // Search by display name
    const displayNameResults = await adminDb
      .collection('users')
      .where('displayNameLower', '>=', queryLower)
      .where('displayNameLower', '<=', queryLower + '\uf8ff')
      .where('isPrivate', '==', false)
      .limit(limit)
      .get();

    const userMap = new Map<string, UserPreview>();

    [...usernameResults.docs, ...displayNameResults.docs].forEach(doc => {
      if (!userMap.has(doc.id)) {
        const data = doc.data();
        userMap.set(doc.id, {
          uid: doc.id,
          username: data.username || 'user',
          displayName: data.displayName || 'User',
          photoURL: data.photoURL || null,
          bio: data.bio || '',
        });
      }
    });

    return Array.from(userMap.values()).slice(0, limit);
  } catch (error) {
    console.error('Error searching users:', error);
    return [];
  }
}
