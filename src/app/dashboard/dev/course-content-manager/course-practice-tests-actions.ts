/**
 * Client-side Firestore actions for Course Practice Tests
 * Each practice test is stored as a separate document in the coursePracticeTests collection
 */

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, writeBatch } from 'firebase/firestore';
import type { CoursePracticeTest } from '@/lib/course-practice-tests-schema';

// ==================== GET PRACTICE TESTS ====================

export async function getCoursePracticeTests(courseId: string): Promise<CoursePracticeTest[]> {
  try {
    const testsRef = collection(db, 'coursePracticeTests');
    const q = query(
      testsRef,
      where('courseId', '==', courseId),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CoursePracticeTest));
  } catch (error: any) {
    console.error('Error fetching course practice tests:', error);
    throw new Error(`Failed to fetch course practice tests: ${error.message}`);
  }
}

export async function getPracticeTest(testId: string): Promise<CoursePracticeTest | null> {
  try {
    const testRef = doc(db, 'coursePracticeTests', testId);
    const testSnap = await getDoc(testRef);
    if (!testSnap.exists()) return null;
    return { ...testSnap.data(), id: testSnap.id } as CoursePracticeTest;
  } catch (error: any) {
    console.error('Error fetching practice test:', error);
    throw new Error(`Failed to fetch practice test: ${error.message}`);
  }
}

// ==================== CREATE/UPDATE/DELETE PRACTICE TESTS ====================

export async function createPracticeTest(test: Omit<CoursePracticeTest, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const testData = {
      ...test,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const docRef = await addDoc(collection(db, 'coursePracticeTests'), testData);
    console.log('Created practice test:', docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error('Error creating practice test:', error);
    throw new Error(`Failed to create practice test: ${error.message}`);
  }
}

export async function updatePracticeTest(testId: string, updates: Partial<CoursePracticeTest>): Promise<void> {
  try {
    const testRef = doc(db, 'coursePracticeTests', testId);
    await updateDoc(testRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    console.log('Updated practice test:', testId);
  } catch (error: any) {
    console.error('Error updating practice test:', error);
    throw new Error(`Failed to update practice test: ${error.message}`);
  }
}

export async function deletePracticeTest(testId: string): Promise<void> {
  try {
    const testRef = doc(db, 'coursePracticeTests', testId);
    await deleteDoc(testRef);
    console.log('Deleted practice test:', testId);
  } catch (error: any) {
    console.error('Error deleting practice test:', error);
    throw new Error(`Failed to delete practice test: ${error.message}`);
  }
}

// ==================== BATCH OPERATIONS ====================

export async function batchCreatePracticeTests(tests: Omit<CoursePracticeTest, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<string[]> {
  try {
    const batch = writeBatch(db);
    const ids: string[] = [];
    const testsRef = collection(db, 'coursePracticeTests');

    for (const test of tests) {
      const docRef = doc(testsRef);
      ids.push(docRef.id);
      batch.set(docRef, {
        ...test,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }

    await batch.commit();
    console.log('Batch created practice tests:', ids.length);
    return ids;
  } catch (error: any) {
    console.error('Error batch creating practice tests:', error);
    throw new Error(`Failed to batch create practice tests: ${error.message}`);
  }
}

export async function batchUpdatePracticeTests(updates: { id: string; data: Partial<CoursePracticeTest> }[]): Promise<void> {
  try {
    const batch = writeBatch(db);

    for (const update of updates) {
      const testRef = doc(db, 'coursePracticeTests', update.id);
      batch.update(testRef, {
        ...update.data,
        updatedAt: new Date().toISOString()
      });
    }

    await batch.commit();
    console.log('Batch updated practice tests:', updates.length);
  } catch (error: any) {
    console.error('Error batch updating practice tests:', error);
    throw new Error(`Failed to batch update practice tests: ${error.message}`);
  }
}

export async function batchDeletePracticeTests(testIds: string[]): Promise<void> {
  try {
    const batch = writeBatch(db);

    for (const id of testIds) {
      const testRef = doc(db, 'coursePracticeTests', id);
      batch.delete(testRef);
    }

    await batch.commit();
    console.log('Batch deleted practice tests:', testIds.length);
  } catch (error: any) {
    console.error('Error batch deleting practice tests:', error);
    throw new Error(`Failed to batch delete practice tests: ${error.message}`);
  }
}
