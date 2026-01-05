/**
 * Client-side Firestore actions for Course Study Guides
 * Each study guide is stored as a separate document in the courseStudyGuides collection
 */

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, writeBatch } from 'firebase/firestore';
import type { CourseStudyGuide } from '@/lib/course-study-guides-schema';

// ==================== GET STUDY GUIDES ====================

export async function getCourseStudyGuides(courseId: string): Promise<CourseStudyGuide[]> {
  try {
    const guidesRef = collection(db, 'courseStudyGuides');
    const q = query(
      guidesRef,
      where('courseId', '==', courseId),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseStudyGuide));
  } catch (error: any) {
    console.error('Error fetching course study guides:', error);
    throw new Error(`Failed to fetch course study guides: ${error.message}`);
  }
}

export async function getStudyGuide(guideId: string): Promise<CourseStudyGuide | null> {
  try {
    const guideRef = doc(db, 'courseStudyGuides', guideId);
    const guideSnap = await getDoc(guideRef);
    if (!guideSnap.exists()) return null;
    return { ...guideSnap.data(), id: guideSnap.id } as CourseStudyGuide;
  } catch (error: any) {
    console.error('Error fetching study guide:', error);
    throw new Error(`Failed to fetch study guide: ${error.message}`);
  }
}

// ==================== CREATE/UPDATE/DELETE STUDY GUIDES ====================

export async function createStudyGuide(guide: Omit<CourseStudyGuide, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const guideData = {
      ...guide,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const docRef = await addDoc(collection(db, 'courseStudyGuides'), guideData);
    console.log('Created study guide:', docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error('Error creating study guide:', error);
    throw new Error(`Failed to create study guide: ${error.message}`);
  }
}

export async function updateStudyGuide(guideId: string, updates: Partial<CourseStudyGuide>): Promise<void> {
  try {
    const guideRef = doc(db, 'courseStudyGuides', guideId);
    await updateDoc(guideRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    console.log('Updated study guide:', guideId);
  } catch (error: any) {
    console.error('Error updating study guide:', error);
    throw new Error(`Failed to update study guide: ${error.message}`);
  }
}

export async function deleteStudyGuide(guideId: string): Promise<void> {
  try {
    const guideRef = doc(db, 'courseStudyGuides', guideId);
    await deleteDoc(guideRef);
    console.log('Deleted study guide:', guideId);
  } catch (error: any) {
    console.error('Error deleting study guide:', error);
    throw new Error(`Failed to delete study guide: ${error.message}`);
  }
}

// ==================== BATCH OPERATIONS ====================

export async function batchCreateStudyGuides(guides: Omit<CourseStudyGuide, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<string[]> {
  try {
    const batch = writeBatch(db);
    const ids: string[] = [];
    const guidesRef = collection(db, 'courseStudyGuides');

    for (const guide of guides) {
      const docRef = doc(guidesRef);
      ids.push(docRef.id);
      batch.set(docRef, {
        ...guide,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }

    await batch.commit();
    console.log('Batch created study guides:', ids.length);
    return ids;
  } catch (error: any) {
    console.error('Error batch creating study guides:', error);
    throw new Error(`Failed to batch create study guides: ${error.message}`);
  }
}

export async function batchUpdateStudyGuides(updates: { id: string; data: Partial<CourseStudyGuide> }[]): Promise<void> {
  try {
    const batch = writeBatch(db);

    for (const update of updates) {
      const guideRef = doc(db, 'courseStudyGuides', update.id);
      batch.update(guideRef, {
        ...update.data,
        updatedAt: new Date().toISOString()
      });
    }

    await batch.commit();
    console.log('Batch updated study guides:', updates.length);
  } catch (error: any) {
    console.error('Error batch updating study guides:', error);
    throw new Error(`Failed to batch update study guides: ${error.message}`);
  }
}

export async function batchDeleteStudyGuides(guideIds: string[]): Promise<void> {
  try {
    const batch = writeBatch(db);

    for (const id of guideIds) {
      const guideRef = doc(db, 'courseStudyGuides', id);
      batch.delete(guideRef);
    }

    await batch.commit();
    console.log('Batch deleted study guides:', guideIds.length);
  } catch (error: any) {
    console.error('Error batch deleting study guides:', error);
    throw new Error(`Failed to batch delete study guides: ${error.message}`);
  }
}
