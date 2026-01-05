// Client-side Firestore actions for Course Content Manager
// Using client SDK - Firestore rules enforce dev-only access

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import type { 
  CourseContent, 
  CourseMetadata, 
  Unit, 
  Question, 
  Flashcard, 
  Material, 
  StudyGuide,
  PracticeTest 
} from '@/lib/course-content-schema';

// ==================== COURSE CONTENT ====================

export async function getCourseContent(courseId: string): Promise<CourseContent | null> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      console.log(`No course content found for ${courseId}, will initialize`);
      return null;
    }
    
    const data = docSnap.data() as CourseContent;
    console.log(`Fetched course content for ${courseId}:`, {
      units: data.units?.length || 0,
      flashcards: data.stats?.totalFlashcards || 0,
      questions: data.stats?.totalQuestions || 0
    });
    return data;
  } catch (error: any) {
    console.error('Error fetching course content:', error);
    throw new Error(`Failed to fetch course content: ${error.message}`);
  }
}

export async function updateCourseContent(courseId: string, content: CourseContent): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    await setDoc(docRef, content, { merge: true });
  } catch (error: any) {
    console.error('Error updating course content:', error);
    throw new Error(`Failed to update course content: ${error.message}`);
  }
}

export async function initializeCourseContent(courseId: string, metadata: CourseMetadata): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    
    // Check if already exists
    const existing = await getDoc(docRef);
    if (existing.exists()) {
      console.log(`Course content already exists for ${courseId}, skipping initialization`);
      return;
    }
    
    const initialContent: CourseContent = {
      metadata,
      units: [],
      practiceTests: [],
      studyGuides: [],
      globalMaterials: [],
      stats: {
        totalFlashcards: 0,
        totalQuestions: 0,
        lastUpdated: new Date().toISOString()
      }
    };
    
    await setDoc(docRef, initialContent);
    console.log(`Initialized course content for ${courseId}`);
  } catch (error: any) {
    console.error('Error initializing course content:', error);
    throw new Error(`Failed to initialize course content: ${error.message}`);
  }
}

// ==================== METADATA ====================

export async function updateCourseMetadata(courseId: string, metadata: CourseMetadata): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    await updateDoc(docRef, { 
      metadata,
      'stats.lastUpdated': new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error updating course metadata:', error);
    throw new Error(`Failed to update course metadata: ${error.message}`);
  }
}

// ==================== UNITS ====================

export async function addUnit(courseId: string, unit: Unit): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    content.units.push(unit);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error adding unit:', error);
    throw new Error(`Failed to add unit: ${error.message}`);
  }
}

export async function updateUnit(courseId: string, unitId: string, updatedUnit: Partial<Unit>): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const unitIndex = content.units.findIndex(u => u.id === unitId);
    if (unitIndex === -1) throw new Error('Unit not found');
    
    content.units[unitIndex] = { ...content.units[unitIndex], ...updatedUnit, updatedAt: new Date().toISOString() };
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error updating unit:', error);
    throw new Error(`Failed to update unit: ${error.message}`);
  }
}

export async function deleteUnit(courseId: string, unitId: string): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    content.units = content.units.filter(u => u.id !== unitId);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error deleting unit:', error);
    throw new Error(`Failed to delete unit: ${error.message}`);
  }
}

export async function reorderUnits(courseId: string, unitIds: string[]): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const reorderedUnits = unitIds.map((id, index) => {
      const unit = content.units.find(u => u.id === id);
      if (!unit) throw new Error(`Unit ${id} not found`);
      return { ...unit, order: index };
    });
    
    content.units = reorderedUnits;
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error reordering units:', error);
    throw new Error(`Failed to reorder units: ${error.message}`);
  }
}

// ==================== FLASHCARDS ====================

export async function addFlashcardToUnit(courseId: string, unitId: string, flashcard: Flashcard): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const unit = content.units.find(u => u.id === unitId);
    if (!unit) throw new Error('Unit not found');
    
    unit.flashcards.push(flashcard);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.totalFlashcards = (content.stats.totalFlashcards || 0) + 1;
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error adding flashcard:', error);
    throw new Error(`Failed to add flashcard: ${error.message}`);
  }
}

export async function updateFlashcard(courseId: string, unitId: string, flashcardId: string, updates: Partial<Flashcard>): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const unit = content.units.find(u => u.id === unitId);
    if (!unit) throw new Error('Unit not found');
    
    const cardIndex = unit.flashcards.findIndex(f => f.id === flashcardId);
    if (cardIndex === -1) throw new Error('Flashcard not found');
    
    unit.flashcards[cardIndex] = { ...unit.flashcards[cardIndex], ...updates, updatedAt: new Date().toISOString() };
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error updating flashcard:', error);
    throw new Error(`Failed to update flashcard: ${error.message}`);
  }
}

export async function deleteFlashcard(courseId: string, unitId: string, flashcardId: string): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const unit = content.units.find(u => u.id === unitId);
    if (!unit) throw new Error('Unit not found');
    
    unit.flashcards = unit.flashcards.filter(f => f.id !== flashcardId);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.totalFlashcards = Math.max(0, (content.stats.totalFlashcards || 0) - 1);
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error deleting flashcard:', error);
    throw new Error(`Failed to delete flashcard: ${error.message}`);
  }
}

// ==================== QUESTIONS ====================

export async function addQuestionToUnit(courseId: string, unitId: string, question: Question): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const unit = content.units.find(u => u.id === unitId);
    if (!unit) throw new Error('Unit not found');
    
    unit.questions.push(question);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.totalQuestions = (content.stats.totalQuestions || 0) + 1;
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error adding question:', error);
    throw new Error(`Failed to add question: ${error.message}`);
  }
}

export async function updateQuestion(courseId: string, unitId: string, questionId: string, updates: Partial<Question>): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const unit = content.units.find(u => u.id === unitId);
    if (!unit) throw new Error('Unit not found');
    
    const qIndex = unit.questions.findIndex(q => q.id === questionId);
    if (qIndex === -1) throw new Error('Question not found');
    
    unit.questions[qIndex] = { ...unit.questions[qIndex], ...updates, updatedAt: new Date().toISOString() };
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error updating question:', error);
    throw new Error(`Failed to update question: ${error.message}`);
  }
}

export async function deleteQuestion(courseId: string, unitId: string, questionId: string): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const unit = content.units.find(u => u.id === unitId);
    if (!unit) throw new Error('Unit not found');
    
    unit.questions = unit.questions.filter(q => q.id !== questionId);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.totalQuestions = Math.max(0, (content.stats.totalQuestions || 0) - 1);
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error deleting question:', error);
    throw new Error(`Failed to delete question: ${error.message}`);
  }
}

// ==================== MATERIALS ====================

export async function addMaterialToUnit(courseId: string, unitId: string, material: Material): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const unit = content.units.find(u => u.id === unitId);
    if (!unit) throw new Error('Unit not found');
    
    unit.materials.push(material);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      units: content.units,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error adding material:', error);
    throw new Error(`Failed to add material: ${error.message}`);
  }
}

export async function addGlobalMaterial(courseId: string, material: Material): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    content.globalMaterials.push(material);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      globalMaterials: content.globalMaterials,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error adding global material:', error);
    throw new Error(`Failed to add global material: ${error.message}`);
  }
}

export async function deleteMaterial(courseId: string, unitId: string | null, materialId: string): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    if (unitId) {
      const unit = content.units.find(u => u.id === unitId);
      if (!unit) throw new Error('Unit not found');
      unit.materials = unit.materials.filter(m => m.id !== materialId);
      await updateDoc(docRef, { units: content.units, 'stats.lastUpdated': new Date().toISOString() });
    } else {
      content.globalMaterials = content.globalMaterials.filter(m => m.id !== materialId);
      await updateDoc(docRef, { globalMaterials: content.globalMaterials, 'stats.lastUpdated': new Date().toISOString() });
    }
  } catch (error: any) {
    console.error('Error deleting material:', error);
    throw new Error(`Failed to delete material: ${error.message}`);
  }
}

export async function updateMaterial(courseId: string, unitId: string, materialId: string, updates: Partial<Material>): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    if (unitId === 'global') {
      const materialIndex = content.globalMaterials.findIndex(m => m.id === materialId);
      if (materialIndex === -1) throw new Error('Material not found');
      content.globalMaterials[materialIndex] = { ...content.globalMaterials[materialIndex], ...updates };
      await updateDoc(docRef, { globalMaterials: content.globalMaterials, 'stats.lastUpdated': new Date().toISOString() });
    } else {
      const unit = content.units.find(u => u.id === unitId);
      if (!unit) throw new Error('Unit not found');
      const materialIndex = unit.materials.findIndex(m => m.id === materialId);
      if (materialIndex === -1) throw new Error('Material not found');
      unit.materials[materialIndex] = { ...unit.materials[materialIndex], ...updates };
      await updateDoc(docRef, { units: content.units, 'stats.lastUpdated': new Date().toISOString() });
    }
  } catch (error: any) {
    console.error('Error updating material:', error);
    throw new Error(`Failed to update material: ${error.message}`);
  }
}

// ==================== STUDY GUIDES ====================

export async function addStudyGuide(courseId: string, guide: StudyGuide): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    content.studyGuides.push(guide);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      studyGuides: content.studyGuides,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error adding study guide:', error);
    throw new Error(`Failed to add study guide: ${error.message}`);
  }
}

export async function updateStudyGuide(courseId: string, guideId: string, updates: Partial<StudyGuide>): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const guideIndex = content.studyGuides.findIndex(g => g.id === guideId);
    if (guideIndex === -1) throw new Error('Study guide not found');
    
    content.studyGuides[guideIndex] = { ...content.studyGuides[guideIndex], ...updates, updatedAt: new Date().toISOString() };
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      studyGuides: content.studyGuides,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error updating study guide:', error);
    throw new Error(`Failed to update study guide: ${error.message}`);
  }
}

export async function deleteStudyGuide(courseId: string, guideId: string): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    content.studyGuides = content.studyGuides.filter(g => g.id !== guideId);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      studyGuides: content.studyGuides,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error deleting study guide:', error);
    throw new Error(`Failed to delete study guide: ${error.message}`);
  }
}

// ==================== PRACTICE TESTS ====================

export async function addPracticeTest(courseId: string, test: PracticeTest): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    content.practiceTests.push(test);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      practiceTests: content.practiceTests,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error adding practice test:', error);
    throw new Error(`Failed to add practice test: ${error.message}`);
  }
}

export async function updatePracticeTest(courseId: string, testId: string, updates: Partial<PracticeTest>): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    const testIndex = content.practiceTests.findIndex(t => t.id === testId);
    if (testIndex === -1) throw new Error('Practice test not found');
    
    content.practiceTests[testIndex] = { ...content.practiceTests[testIndex], ...updates, updatedAt: new Date().toISOString() };
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      practiceTests: content.practiceTests,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error updating practice test:', error);
    throw new Error(`Failed to update practice test: ${error.message}`);
  }
}

export async function deletePracticeTest(courseId: string, testId: string): Promise<void> {
  try {
    const docRef = doc(db, 'courseContent', courseId);
    const docSnap = await getDoc(docRef);
    const content = docSnap.data() as CourseContent;
    
    content.practiceTests = content.practiceTests.filter(t => t.id !== testId);
    content.stats = content.stats || { totalFlashcards: 0, totalQuestions: 0, lastUpdated: new Date().toISOString() };
    content.stats.lastUpdated = new Date().toISOString();
    
    await updateDoc(docRef, { 
      practiceTests: content.practiceTests,
      stats: content.stats
    });
  } catch (error: any) {
    console.error('Error deleting practice test:', error);
    throw new Error(`Failed to delete practice test: ${error.message}`);
  }
}
