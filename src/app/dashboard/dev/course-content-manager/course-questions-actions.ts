/**
 * Client-side Firestore actions for Course Questions
 * Each question is stored as a separate document in the courseQuestions collection
 */

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, writeBatch } from 'firebase/firestore';
import type { CourseQuestion } from '@/lib/course-questions-schema';

// ==================== GET QUESTIONS ====================

export async function getCourseQuestions(courseId: string): Promise<CourseQuestion[]> {
  try {
    const questionsRef = collection(db, 'courseQuestions');
    const q = query(
      questionsRef,
      where('courseId', '==', courseId),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseQuestion));
  } catch (error: any) {
    console.error('Error fetching course questions:', error);
    throw new Error(`Failed to fetch course questions: ${error.message}`);
  }
}

export async function getUnitQuestions(courseId: string, unitId: string): Promise<CourseQuestion[]> {
  try {
    const questionsRef = collection(db, 'courseQuestions');
    const q = query(
      questionsRef,
      where('courseId', '==', courseId),
      where('unitId', '==', unitId),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseQuestion));
  } catch (error: any) {
    console.error('Error fetching unit questions:', error);
    throw new Error(`Failed to fetch unit questions: ${error.message}`);
  }
}

export async function getQuestion(questionId: string): Promise<CourseQuestion | null> {
  try {
    const questionRef = doc(db, 'courseQuestions', questionId);
    const questionSnap = await getDoc(questionRef);
    if (!questionSnap.exists()) return null;
    return { ...questionSnap.data(), id: questionSnap.id } as CourseQuestion;
  } catch (error: any) {
    console.error('Error fetching question:', error);
    throw new Error(`Failed to fetch question: ${error.message}`);
  }
}

// ==================== CREATE/UPDATE/DELETE QUESTIONS ====================

export async function createQuestion(question: Omit<CourseQuestion, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const questionData = {
      ...question,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const docRef = await addDoc(collection(db, 'courseQuestions'), questionData);
    console.log('Created question:', docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error('Error creating question:', error);
    throw new Error(`Failed to create question: ${error.message}`);
  }
}

export async function updateQuestion(questionId: string, updates: Partial<CourseQuestion>): Promise<void> {
  try {
    const questionRef = doc(db, 'courseQuestions', questionId);
    await updateDoc(questionRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    console.log('Updated question:', questionId);
  } catch (error: any) {
    console.error('Error updating question:', error);
    throw new Error(`Failed to update question: ${error.message}`);
  }
}

export async function deleteQuestion(questionId: string): Promise<void> {
  try {
    const questionRef = doc(db, 'courseQuestions', questionId);
    await deleteDoc(questionRef);
    console.log('Deleted question:', questionId);
  } catch (error: any) {
    console.error('Error deleting question:', error);
    throw new Error(`Failed to delete question: ${error.message}`);
  }
}

// ==================== BATCH OPERATIONS ====================

export async function batchCreateQuestions(questions: Omit<CourseQuestion, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<string[]> {
  try {
    const batch = writeBatch(db);
    const ids: string[] = [];
    const questionsRef = collection(db, 'courseQuestions');

    for (const question of questions) {
      const docRef = doc(questionsRef);
      ids.push(docRef.id);
      
      // Remove undefined fields to avoid Firestore errors
      const cleanedQuestion = Object.fromEntries(
        Object.entries({
          ...question,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }).filter(([_, value]) => value !== undefined)
      );
      
      batch.set(docRef, cleanedQuestion);
    }

    await batch.commit();
    console.log('Batch created questions:', ids.length);
    return ids;
  } catch (error: any) {
    console.error('Error batch creating questions:', error);
    throw new Error(`Failed to batch create questions: ${error.message}`);
  }
}

export async function batchUpdateQuestions(updates: { id: string; data: Partial<CourseQuestion> }[]): Promise<void> {
  try {
    const batch = writeBatch(db);

    for (const update of updates) {
      const questionRef = doc(db, 'courseQuestions', update.id);
      batch.update(questionRef, {
        ...update.data,
        updatedAt: new Date().toISOString()
      });
    }

    await batch.commit();
    console.log('Batch updated questions:', updates.length);
  } catch (error: any) {
    console.error('Error batch updating questions:', error);
    throw new Error(`Failed to batch update questions: ${error.message}`);
  }
}

export async function batchDeleteQuestions(questionIds: string[]): Promise<void> {
  try {
    const batch = writeBatch(db);

    for (const id of questionIds) {
      const questionRef = doc(db, 'courseQuestions', id);
      batch.delete(questionRef);
    }

    await batch.commit();
    console.log('Batch deleted questions:', questionIds.length);
  } catch (error: any) {
    console.error('Error batch deleting questions:', error);
    throw new Error(`Failed to batch delete questions: ${error.message}`);
  }
}
