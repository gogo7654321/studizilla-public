/**
 * Client-side Firestore actions for Course Materials
 * Each material is stored as a separate document in the courseMaterials collection
 */

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy, writeBatch } from 'firebase/firestore';
import type { CourseMaterial } from '@/lib/course-materials-schema';

// ==================== GET MATERIALS ====================

export async function getCourseMaterials(courseId: string): Promise<CourseMaterial[]> {
  try {
    const materialsRef = collection(db, 'courseMaterials');
    const q = query(
      materialsRef,
      where('courseId', '==', courseId),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseMaterial));
  } catch (error: any) {
    console.error('Error fetching course materials:', error);
    throw new Error(`Failed to fetch course materials: ${error.message}`);
  }
}

export async function getUnitMaterials(courseId: string, unitId: string): Promise<CourseMaterial[]> {
  try {
    const materialsRef = collection(db, 'courseMaterials');
    const q = query(
      materialsRef,
      where('courseId', '==', courseId),
      where('unitId', '==', unitId),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseMaterial));
  } catch (error: any) {
    console.error('Error fetching unit materials:', error);
    throw new Error(`Failed to fetch unit materials: ${error.message}`);
  }
}

export async function getGlobalMaterials(courseId: string): Promise<CourseMaterial[]> {
  try {
    const materialsRef = collection(db, 'courseMaterials');
    const q = query(
      materialsRef,
      where('courseId', '==', courseId),
      where('unitId', '==', null),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseMaterial));
  } catch (error: any) {
    console.error('Error fetching global materials:', error);
    throw new Error(`Failed to fetch global materials: ${error.message}`);
  }
}

export async function getMaterial(materialId: string): Promise<CourseMaterial | null> {
  try {
    const materialRef = doc(db, 'courseMaterials', materialId);
    const materialSnap = await getDoc(materialRef);
    if (!materialSnap.exists()) return null;
    return { ...materialSnap.data(), id: materialSnap.id } as CourseMaterial;
  } catch (error: any) {
    console.error('Error fetching material:', error);
    throw new Error(`Failed to fetch material: ${error.message}`);
  }
}

// ==================== CREATE/UPDATE/DELETE MATERIALS ====================

export async function createMaterial(material: Omit<CourseMaterial, 'id' | 'uploadedAt'>): Promise<string> {
  try {
    const materialData = {
      ...material,
      uploadedAt: new Date().toISOString()
    };
    const docRef = await addDoc(collection(db, 'courseMaterials'), materialData);
    console.log('Created material:', docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error('Error creating material:', error);
    throw new Error(`Failed to create material: ${error.message}`);
  }
}

export async function updateMaterial(materialId: string, updates: Partial<CourseMaterial>): Promise<void> {
  try {
    const materialRef = doc(db, 'courseMaterials', materialId);
    await updateDoc(materialRef, updates);
    console.log('Updated material:', materialId);
  } catch (error: any) {
    console.error('Error updating material:', error);
    throw new Error(`Failed to update material: ${error.message}`);
  }
}

export async function deleteMaterial(materialId: string): Promise<void> {
  try {
    const materialRef = doc(db, 'courseMaterials', materialId);
    await deleteDoc(materialRef);
    console.log('Deleted material:', materialId);
  } catch (error: any) {
    console.error('Error deleting material:', error);
    throw new Error(`Failed to delete material: ${error.message}`);
  }
}

// ==================== BATCH OPERATIONS ====================

export async function batchCreateMaterials(materials: Omit<CourseMaterial, 'id' | 'uploadedAt'>[]): Promise<string[]> {
  try {
    const batch = writeBatch(db);
    const ids: string[] = [];
    const materialsRef = collection(db, 'courseMaterials');

    for (const material of materials) {
      const docRef = doc(materialsRef);
      ids.push(docRef.id);
      batch.set(docRef, {
        ...material,
        uploadedAt: new Date().toISOString()
      });
    }

    await batch.commit();
    console.log('Batch created materials:', ids.length);
    return ids;
  } catch (error: any) {
    console.error('Error batch creating materials:', error);
    throw new Error(`Failed to batch create materials: ${error.message}`);
  }
}

export async function batchUpdateMaterials(updates: { id: string; data: Partial<CourseMaterial> }[]): Promise<void> {
  try {
    const batch = writeBatch(db);

    for (const update of updates) {
      const materialRef = doc(db, 'courseMaterials', update.id);
      batch.update(materialRef, update.data);
    }

    await batch.commit();
    console.log('Batch updated materials:', updates.length);
  } catch (error: any) {
    console.error('Error batch updating materials:', error);
    throw new Error(`Failed to batch update materials: ${error.message}`);
  }
}

export async function batchDeleteMaterials(materialIds: string[]): Promise<void> {
  try {
    const batch = writeBatch(db);

    for (const id of materialIds) {
      const materialRef = doc(db, 'courseMaterials', id);
      batch.delete(materialRef);
    }

    await batch.commit();
    console.log('Batch deleted materials:', materialIds.length);
  } catch (error: any) {
    console.error('Error batch deleting materials:', error);
    throw new Error(`Failed to batch delete materials: ${error.message}`);
  }
}
