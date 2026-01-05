
'use server';

import { adminDb } from '@/lib/firebase-server';
import { FieldValue } from 'firebase-admin/firestore';
import { doc, setDoc, getDoc } from 'firebase/firestore';

/**
 * Toggles a course in a user's 'addedCourses' array in Firestore.
 * Adds the course if it's not there, removes it if it is.
 * @param uid The user's ID.
 * @param courseId The ID of the course to toggle.
 */
export async function toggleCourseAction(uid: string, courseId: string) {
  if (!uid || !courseId) {
    throw new Error('User ID and Course ID are required.');
  }

  const userDocRef = adminDb.collection('users').doc(uid);

  try {
    const userDoc = await userDocRef.get();
    if (!userDoc.exists) {
      // If user doc doesn't exist, create it with the course
      await userDocRef.set({ addedCourses: [courseId] }, { merge: true });
      return;
    }

    const userData = userDoc.data();
    const currentCourses: string[] = userData?.addedCourses || [];

    if (currentCourses.includes(courseId)) {
      // Remove the course
      await userDocRef.update({
        addedCourses: FieldValue.arrayRemove(courseId),
      });
    } else {
      // Add the course
      await userDocRef.update({
        addedCourses: FieldValue.arrayUnion(courseId),
      });
    }
  } catch (error) {
    console.error('Error toggling course:', error);
    throw new Error('Could not update your course list.');
  }
}

export async function listCourseMaterials(courseId: string): Promise<{ name: string; url: string; }[]> {
  // This function is now unused on the client but kept for potential server-side use.
  // The implementation remains the same.
  try {
    const { getStorage } = await import('firebase-admin/storage');
    const bucket = getStorage().bucket();
    const [files] = await bucket.getFiles({ prefix: `course-materials/${courseId}/` });
    
    const materials = files.map(file => ({
      name: file.name.split('/').pop() || 'Unnamed File',
      url: file.publicUrl(),
    }));

    return materials.filter(material => !material.name.endsWith('_$folder$'));
  } catch (error) {
    console.error("Error listing course materials:", error);
    return [];
  }
}

export async function uploadCourseMaterial(formData: FormData): Promise<{ success: boolean; error?: string }> {
    const { getStorage } = await import('firebase-admin/storage');
    const file = formData.get('file') as File;
    const courseId = formData.get('courseId') as string;
    const userId = formData.get('userId') as string;
    
    if (!file || !courseId || !userId) {
      return { success: false, error: 'Missing required data.' };
    }
    
    const bucket = getStorage().bucket();
    const filePath = `course-materials/${courseId}/${file.name}`;
    const bucketFile = bucket.file(filePath);
  
    try {
      const buffer = Buffer.from(await file.arrayBuffer());
      await bucketFile.save(buffer, {
        metadata: { contentType: file.type },
      });
      await bucketFile.makePublic();
  
      return { success: true };
    } catch (error: any) {
      console.error("Error uploading material:", error);
      return { success: false, error: 'Failed to upload file. Please check server permissions.' };
    }
}

export async function deleteCourseMaterial(courseId: string, fileName: string, userId: string): Promise<{ success: boolean; error?: string }> {
    const { getStorage } = await import('firebase-admin/storage');
    if (!courseId || !fileName || !userId) {
        return { success: false, error: 'Missing required data.' };
    }
    
    const bucket = getStorage().bucket();
    const filePath = `course-materials/${courseId}/${fileName}`;
    const file = bucket.file(filePath);

    try {
        await file.delete();
        return { success: true };
    } catch (error: any) {
        console.error(`Error deleting material: ${filePath}`, error);
        return { success: false, error: `Failed to delete file. It may have already been removed.` };
    }
}

export async function updateCourseContentAction(unitId: string, htmlContent: string) {
    if (!unitId) {
        throw new Error('Unit ID is required.');
    }
    
    try {
        const contentDocRef = adminDb.collection('courseContent').doc(unitId);
        await adminDb.runTransaction(async (transaction) => {
            transaction.set(contentDocRef, { htmlContent }, { merge: true });
        });
    } catch (error) {
        console.error("Error updating course content:", error);
        throw new Error("Failed to save content to Firestore. Check Firestore rules and permissions.");
    }
}
