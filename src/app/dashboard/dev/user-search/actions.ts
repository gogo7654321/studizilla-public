
'use server';

import { adminDb } from '@/lib/firebase-server';
import { collection, query, getDocs, doc, updateDoc, DocumentData, Timestamp } from 'firebase-admin/firestore';
import { courses } from '@/lib/courses';
import { THEME_PRESETS } from '@/lib/themes';


export type SearchedUser = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  username: string;
  usernameLower: string;
  firstName: string;
  createdAt: string | null;
  isPrivate: boolean;
  isOnline?: boolean;
  lastActivityDate?: string | null;
  streak?: number;
  courses?: { id: string; name: string; icon: string; }[];
  theme?: string;
  [key: string]: any; // For all other data
};

// Helper to safely serialize Firestore data, converting Timestamps
const serializeFirestoreDoc = (docData: DocumentData): Record<string, any> => {
    if (!docData) return {};
    const serialized: Record<string, any> = {};
    for (const key in docData) {
        const value = docData[key];
        if (value instanceof Timestamp) {
            serialized[key] = value.toDate().toISOString();
        } else if (value && typeof value === 'object' && !Array.isArray(value)) {
            // Recursively serialize nested objects
            serialized[key] = serializeFirestoreDoc(value);
        } else {
            serialized[key] = value;
        }
    }
    return serialized;
};

export async function getAllUsers(): Promise<SearchedUser[]> {
  try {
    const usersCollection = adminDb.collection('users');
    const querySnapshot = await usersCollection.get();
    const results: SearchedUser[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();

    // Get Course names from IDs
    const addedCourseIds: string[] = data.addedCourses || [];
    const addedCourses = addedCourseIds
        .map(id => courses.find(c => c.id === id))
        .filter(c => c)
        .map(c => ({ id: c!.id, name: c!.name, icon: c!.icon }));

    // Get Theme name from ID
    let themeName = "Default";
    if(data.appearance?.customThemeRef?.id) {
        const theme = THEME_PRESETS.find(p => p.id === data.appearance.customThemeRef.id);
        if (theme) {
            if (data.appearance.customThemeRef.selectedVariantId && theme.variants) {
                const variant = theme.variants.find(v => v.id === data.appearance.customThemeRef.selectedVariantId);
                themeName = variant ? `${theme.name} (${variant.name})` : theme.name;
            } else {
                themeName = theme.name;
            }
        }
    } else if (data.appearance?.accessibilityTheme && data.appearance.accessibilityTheme !== 'default') {
        themeName = `Accessibility: ${data.appearance.accessibilityTheme}`;
    }

    results.push({
      uid: doc.id,
      email: data.email || null,
      displayName: data.displayName || null, 
      photoURL: data.photoURL || null,
      username: data.username || 'N/A',
      usernameLower: data.usernameLower || '',
      firstName: data.firstName || 'N/A',
      createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : null,
      isPrivate: data.isPrivate ?? false,
      isOnline: data.isOnline ?? false,
      lastActivityDate: data.lastActivityDate instanceof Timestamp ? data.lastActivityDate.toDate().toISOString() : null,
      streak: data.streak || 0,
      courses: addedCourses,
      theme: themeName,
      ...serializeFirestoreDoc(data),
    });
  });
  return results;
  } catch (error: any) {
    console.error('Error fetching users:', error);
    // Return empty array with error info instead of throwing
    if (error.message?.includes('default credentials')) {
      throw new Error('Firebase Admin credentials not configured. Please set up FIREBASE_SERVICE_ACCOUNT environment variable or run in a Google Cloud environment.');
    }
    throw error;
  }
}

export async function updateUserData(uid: string, dataToUpdate: Record<string, any>): Promise<{ success: boolean; error?: string }> {
    if (!uid) {
        return { success: false, error: 'User ID is required.' };
    }

    try {
        const userDocRef = doc(adminDb, 'users', uid);
        await updateDoc(userDocRef, dataToUpdate);
        return { success: true };
    } catch (error: any) {
        console.error("Error updating user data:", error);
        return { success: false, error: error.message || 'An unknown error occurred.' };
    }
}
