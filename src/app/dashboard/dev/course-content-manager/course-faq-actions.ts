/**
 * Client-side Firestore actions for Course FAQs
 * Each FAQ is stored as a separate document in the courseFAQs collection
 */

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, writeBatch } from 'firebase/firestore';
import type { CourseFAQ } from '@/lib/course-faq-schema';

// ==================== GET FAQs ====================

export async function getCourseFAQs(courseId: string): Promise<CourseFAQ[]> {
  try {
    const faqsRef = collection(db, 'courseFAQs');
    const q = query(
      faqsRef,
      where('courseId', '==', courseId),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseFAQ));
  } catch (error: any) {
    console.error('Error fetching course FAQs:', error);
    throw new Error(`Failed to fetch course FAQs: ${error.message}`);
  }
}

export async function getFAQ(faqId: string): Promise<CourseFAQ | null> {
  try {
    const faqRef = doc(db, 'courseFAQs', faqId);
    const faqSnap = await getDoc(faqRef);
    if (!faqSnap.exists()) return null;
    return { ...faqSnap.data(), id: faqSnap.id } as CourseFAQ;
  } catch (error: any) {
    console.error('Error fetching FAQ:', error);
    throw new Error(`Failed to fetch FAQ: ${error.message}`);
  }
}

// ==================== CREATE/UPDATE/DELETE FAQs ====================

export async function createFAQ(faq: Omit<CourseFAQ, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const faqData = {
      ...faq,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const docRef = await addDoc(collection(db, 'courseFAQs'), faqData);
    console.log('Created FAQ:', docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error('Error creating FAQ:', error);
    throw new Error(`Failed to create FAQ: ${error.message}`);
  }
}

export async function updateFAQ(faqId: string, updates: Partial<CourseFAQ>): Promise<void> {
  try {
    const faqRef = doc(db, 'courseFAQs', faqId);
    await updateDoc(faqRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    console.log('Updated FAQ:', faqId);
  } catch (error: any) {
    console.error('Error updating FAQ:', error);
    throw new Error(`Failed to update FAQ: ${error.message}`);
  }
}

export async function deleteFAQ(faqId: string): Promise<void> {
  try {
    const faqRef = doc(db, 'courseFAQs', faqId);
    await deleteDoc(faqRef);
    console.log('Deleted FAQ:', faqId);
  } catch (error: any) {
    console.error('Error deleting FAQ:', error);
    throw new Error(`Failed to delete FAQ: ${error.message}`);
  }
}

// ==================== BATCH OPERATIONS ====================

export async function batchDeleteFAQs(faqIds: string[]): Promise<void> {
  if (faqIds.length === 0) return;
  
  try {
    const batch = writeBatch(db);
    faqIds.forEach(id => {
      const faqRef = doc(db, 'courseFAQs', id);
      batch.delete(faqRef);
    });
    await batch.commit();
    console.log(`Batch deleted ${faqIds.length} FAQs`);
  } catch (error: any) {
    console.error('Error batch deleting FAQs:', error);
    throw new Error(`Failed to batch delete FAQs: ${error.message}`);
  }
}

export async function batchUpdateFAQs(updates: { id: string; data: Partial<CourseFAQ> }[]): Promise<void> {
  if (updates.length === 0) return;
  
  try {
    const batch = writeBatch(db);
    const timestamp = new Date().toISOString();
    
    updates.forEach(({ id, data }) => {
      const faqRef = doc(db, 'courseFAQs', id);
      batch.update(faqRef, {
        ...data,
        updatedAt: timestamp
      });
    });
    
    await batch.commit();
    console.log(`Batch updated ${updates.length} FAQs`);
  } catch (error: any) {
    console.error('Error batch updating FAQs:', error);
    throw new Error(`Failed to batch update FAQs: ${error.message}`);
  }
}

// ==================== BULK CREATE ====================

export async function bulkCreateFAQs(faqs: Omit<CourseFAQ, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<string[]> {
  if (faqs.length === 0) return [];
  
  try {
    const ids: string[] = [];
    const timestamp = new Date().toISOString();
    
    for (const faq of faqs) {
      const faqData = {
        ...faq,
        createdAt: timestamp,
        updatedAt: timestamp
      };
      const docRef = await addDoc(collection(db, 'courseFAQs'), faqData);
      ids.push(docRef.id);
    }
    
    console.log(`Bulk created ${ids.length} FAQs`);
    return ids;
  } catch (error: any) {
    console.error('Error bulk creating FAQs:', error);
    throw new Error(`Failed to bulk create FAQs: ${error.message}`);
  }
}
