
'use server';

import { adminDb } from '@/lib/firebase-server';
import { getStorage } from 'firebase-admin/storage';
import { doc, setDoc } from 'firebase/firestore';

export async function listCourseMaterials(courseId: string): Promise<{ name: string; url: string; }[]> {
  try {
    const bucket = getStorage().bucket();
    const [files] = await bucket.getFiles({ prefix: `course-materials/${courseId}/` });
    
    const materials = files.map(file => ({
      name: file.name.split('/').pop() || 'Unnamed File',
      url: file.publicUrl(),
    }));

    // Filter out folder placeholders
    return materials.filter(material => !material.name.endsWith('_$folder$'));
  } catch (error) {
    console.error("Error listing course materials:", error);
    return [];
  }
}

export async function uploadCourseMaterial(formData: FormData): Promise<{ success: boolean; error?: string }> {
  const file = formData.get('file') as File;
  const courseId = formData.get('courseId') as string;
  const userId = formData.get('userId') as string;
  
  if (!file || !courseId || !userId) {
    return { success: false, error: 'Missing required data.' };
  }
  
  // Note: Firestore rules will handle the final permission check.
  // This server action assumes the client has already verified dev status for UI purposes.

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
    if (!courseId || !fileName || !userId) {
        return { success: false, error: 'Missing required data.' };
    }
    
    // Note: Firestore rules will handle the final permission check.

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

/**
 * DEPRECATED: This action is no longer used as unit content is now stored in static files.
 * The Course Details Generator tool in the dev portal should be used to update course content.
 */
export async function updateCourseContentAction(unitId: string, htmlContent: string) {
    console.warn("DEPRECATED: updateCourseContentAction is no longer in use.");
    return;
}
