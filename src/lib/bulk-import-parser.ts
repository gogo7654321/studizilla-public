/**
 * INDUSTRIAL-STRENGTH Bulk Import Parser for Course Content
 * Handles messy real-world data with robust delimiters
 * 
 * DELIMITERS (chosen to avoid conflicts):
 * - Unit separator: :::UNIT:::
 * - Question separator: :::Q:::
 * - Flashcard separator: :::CARD:::
 * - Field separator: ::=
 * - Multi-value separator: ;;
 * 
 * These symbols are extremely unlikely to appear in normal academic content
 */

import type { Unit, Question, Flashcard, Material, StudyGuide, QuestionType, FAQItem } from './course-content-schema';

// ==================== ROBUST UNITS PARSER ====================

export function parseUnits(text: string): Partial<Unit>[] {
  const units: Partial<Unit>[] = [];
  
  // Split by unit separator
  const unitBlocks = text.split(/:::UNIT:::/i).filter(b => b.trim());
  
  for (const block of unitBlocks) {
    const unit: Partial<Unit> = {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      flashcards: [],
      questions: [],
      materials: [],
      isPublished: false,
      order: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Extract fields using ::= delimiter
    const titleMatch = block.match(/title::=([^]*?)(?=\w+::=|$)/i);
    const descMatch = block.match(/desc::=([^]*?)(?=\w+::=|$)/i);
    const weightMatch = block.match(/weight::=([^]*?)(?=\w+::=|$)/i);
    const timeMatch = block.match(/time::=([^]*?)(?=\w+::=|$)/i);
    const contentMatch = block.match(/content::=([^]*?)(?=\w+::=|$)/i);
    const publishMatch = block.match(/publish::=([^]*?)(?=\w+::=|$)/i);
    
    if (titleMatch) unit.title = titleMatch[1].trim();
    if (descMatch) unit.description = descMatch[1].trim();
    if (weightMatch) unit.examWeight = weightMatch[1].trim();
    if (timeMatch) unit.completionEstimate = timeMatch[1].trim();
    if (contentMatch) unit.content = contentMatch[1].trim();
    if (publishMatch) unit.isPublished = publishMatch[1].trim().toLowerCase() === 'true' || publishMatch[1].trim() === '1';
    
    if (unit.title) {
      units.push(unit);
    }
  }
  
  return units;
}

// ==================== ROBUST QUESTIONS PARSER ====================

export interface QuestionWithUnit extends Partial<Question> {
  unitNumber?: number;
}

export function parseQuestions(text: string): Partial<Question>[] {
  const questions: Partial<Question>[] = [];
  
  // Split by question separator
  const questionBlocks = text.split(/:::Q:::/i).filter(b => b.trim());
  
  for (const block of questionBlocks) {
    const question: Partial<Question> = {
      id: crypto.randomUUID(),
      type: 'multiple-choice',
      question: '',
      options: [],
      correctAnswer: '',
      explanation: '',
      difficulty: 'medium',
      tags: [],
      points: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Extract fields
    const qMatch = block.match(/q::=([^]*?)(?=\w+::=|$)/i);
    const typeMatch = block.match(/type::=([^]*?)(?=\w+::=|$)/i);
    const optionsMatch = block.match(/options::=([^]*?)(?=\w+::=|$)/i);
    const correctMatch = block.match(/correct::=([^]*?)(?=\w+::=|$)/i);
    const explanationMatch = block.match(/explain::=([^]*?)(?=\w+::=|$)/i);
    const difficultyMatch = block.match(/diff::=([^]*?)(?=\w+::=|$)/i);
    const pointsMatch = block.match(/points::=([^]*?)(?=\w+::=|$)/i);
    const tagsMatch = block.match(/tags::=([^]*?)(?=\w+::=|$)/i);
    const sampleMatch = block.match(/sample::=([^]*?)(?=\w+::=|$)/i);
    const rubricMatch = block.match(/rubric::=([^]*?)(?=\w+::=|$)/i);
    const imgMatch = block.match(/img::=([^]*?)(?=\w+::=|$)/i);
    
    if (qMatch) question.question = qMatch[1].trim();
    if (imgMatch) (question as any).image = imgMatch[1].trim();
    
    // Type
    if (typeMatch) {
      const t = typeMatch[1].trim().toLowerCase();
      if (t === 'mcq' || t === 'mc' || t === 'multiple-choice' || t === 'multiplechoice') {
        question.type = 'multiple-choice';
      } else if (t === 'frq' || t === 'fr' || t === 'free-response' || t === 'freeresponse' || t === 'essay') {
        question.type = 'free-response';
      } else if (t === 'tf' || t === 't/f' || t === 'true-false' || t === 'truefalse' || t === 'boolean') {
        question.type = 'true-false';
        question.options = ['True', 'False'];
      }
    }
    
    // Options (split by ;;)
    if (optionsMatch && question.type !== 'free-response') {
      const opts = optionsMatch[1].split(';;').map(o => o.trim()).filter(o => o);
      question.options = opts;
      
      // If true-false but options provided, override
      if (question.type === 'true-false' && opts.length === 2) {
        question.options = opts;
      }
    }
    
    // Correct answer
    if (correctMatch) {
      const ans = correctMatch[1].trim();
      // For MCQ, convert letter to index if needed
      if (question.type === 'multiple-choice') {
        if (ans.length === 1 && /[A-Za-z]/.test(ans)) {
          question.correctAnswer = (ans.toUpperCase().charCodeAt(0) - 65).toString();
        } else if (/^\d+$/.test(ans)) {
          question.correctAnswer = ans;
        } else {
          // Try to find matching option
          const index = question.options?.indexOf(ans);
          question.correctAnswer = index !== -1 && index !== undefined ? index.toString() : ans;
        }
      } else {
        question.correctAnswer = ans;
      }
    }
    
    if (explanationMatch) question.explanation = explanationMatch[1].trim();
    
    // Difficulty
    if (difficultyMatch) {
      const diff = difficultyMatch[1].trim().toLowerCase();
      if (diff === 'easy' || diff === 'e' || diff === '1') question.difficulty = 'easy';
      else if (diff === 'medium' || diff === 'med' || diff === 'm' || diff === '2') question.difficulty = 'medium';
      else if (diff === 'hard' || diff === 'h' || diff === 'difficult' || diff === '3') question.difficulty = 'hard';
    }
    
    if (pointsMatch) question.points = parseInt(pointsMatch[1].trim()) || 1;
    
    if (tagsMatch) {
      const tags = tagsMatch[1].split(';;').map(t => t.trim()).filter(t => t);
      question.tags = tags;
    }
    
    if (sampleMatch) question.sampleAnswer = sampleMatch[1].trim();
    if (rubricMatch) question.rubric = rubricMatch[1].trim();
    
    if (question.question) {
      questions.push(question);
    }
  }
  
  return questions;
}

// Enhanced questions parser with unit detection
export function parseQuestionsWithUnits(text: string): QuestionWithUnit[] {
  const questions: QuestionWithUnit[] = [];
  
  const questionBlocks = text.split(/:::Q:::/i).filter(b => b.trim());
  
  for (const block of questionBlocks) {
    const question: QuestionWithUnit = {
      id: crypto.randomUUID(),
      type: 'multiple-choice',
      question: '',
      options: [],
      correctAnswer: '',
      explanation: '',
      difficulty: 'medium',
      tags: [],
      points: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Helper function to extract field value
    const extractField = (fieldName: string): string | null => {
      const regex = new RegExp(`${fieldName}::=([\\s\\S]*?)(?=(?:unit|type|q|options|correct|explain|diff|points|tags|sample|rubric|img)::=|$)`, 'i');
      const match = block.match(regex);
      return match ? match[1].trim() : null;
    };
    
    // Extract unit number
    const unitValue = extractField('unit');
    if (unitValue) {
      question.unitNumber = parseInt(unitValue);
    }
    
    // Extract all fields
    const qValue = extractField('q');
    const typeValue = extractField('type');
    const optionsValue = extractField('options');
    const correctValue = extractField('correct');
    const explainValue = extractField('explain');
    const diffValue = extractField('diff');
    const pointsValue = extractField('points');
    const tagsValue = extractField('tags');
    const sampleValue = extractField('sample');
    const rubricValue = extractField('rubric');
    
    if (qValue) question.question = qValue;
    
    // Type parsing - support tfq, tf, t/f formats
    if (typeValue) {
      const t = typeValue.toLowerCase();
      if (t === 'mcq' || t === 'mc' || t === 'multiple-choice') {
        question.type = 'multiple-choice';
      } else if (t === 'frq' || t === 'fr' || t === 'free-response') {
        question.type = 'free-response';
      } else if (t === 'tfq' || t === 'tf' || t === 't/f' || t === 'true-false') {
        question.type = 'true-false';
        question.options = ['True', 'False'];
      }
    }
    
    // Options
    if (optionsValue && question.type !== 'free-response') {
      const opts = optionsValue.split(';;').map(o => o.trim()).filter(o => o);
      question.options = opts;
    }
    
    // Correct answer
    if (correctValue) {
      const ans = correctValue;
      if (question.type === 'multiple-choice') {
        if (ans.length === 1 && /[A-Za-z]/.test(ans)) {
          question.correctAnswer = (ans.toUpperCase().charCodeAt(0) - 65).toString();
        } else if (/^\d+$/.test(ans)) {
          question.correctAnswer = ans;
        } else {
          const index = question.options?.indexOf(ans);
          question.correctAnswer = index !== -1 && index !== undefined ? index.toString() : ans;
        }
      } else {
        question.correctAnswer = ans;
      }
    }
    
    if (explainValue) question.explanation = explainValue;
    
    // Difficulty
    if (diffValue) {
      const diff = diffValue.toLowerCase();
      if (diff === 'easy') question.difficulty = 'easy';
      else if (diff === 'medium' || diff === 'med') question.difficulty = 'medium';
      else if (diff === 'hard') question.difficulty = 'hard';
    }
    
    if (pointsValue) question.points = parseInt(pointsValue) || 1;
    
    if (tagsValue) {
      question.tags = tagsValue.split(';;').map(t => t.trim()).filter(t => t);
    }
    
    if (sampleValue) question.sampleAnswer = sampleValue;
    if (rubricValue) question.rubric = rubricValue;
    
    if (question.question) {
      questions.push(question);
    }
  }
  
  return questions;
}

// ==================== ROBUST FLASHCARDS PARSER ====================

export function parseFlashcards(text: string): Partial<Flashcard>[] {
  const flashcards: Partial<Flashcard>[] = [];
  
  // Split by flashcard separator
  const cardBlocks = text.split(/:::CARD:::/i).filter(b => b.trim());
  
  for (const block of cardBlocks) {
    const flashcard: Partial<Flashcard> = {
      id: crypto.randomUUID(),
      term: '',
      definition: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    // Extract fields
    const termMatch = block.match(/term::=([^]*?)(?=\w+::=|$)/i);
    const defMatch = block.match(/def::=([^]*?)(?=\w+::=|$)/i);
    const imageMatch = block.match(/img::=([^]*?)(?=\w+::=|$)/i);
    
    if (termMatch) flashcard.term = termMatch[1].trim();
    if (defMatch) flashcard.definition = defMatch[1].trim();
    if (imageMatch) flashcard.image = imageMatch[1].trim();
    
    if (flashcard.term && flashcard.definition) {
      flashcards.push(flashcard);
    }
  }
  
  return flashcards;
}

// ==================== ADVANCED FLASHCARD DECK PARSER ====================

export interface FlashcardDeck {
  unitNumber: number;
  deckTitle: string;
  deckDescription?: string;
  flashcards: Partial<Flashcard>[];
}

export function parseFlashcardDecks(text: string): FlashcardDeck[] {
  const decks: FlashcardDeck[] = [];
  
  // Split by deck separator
  const deckBlocks = text.split(/:::DECK:::/i).filter(b => b.trim());
  
  for (const block of deckBlocks) {
    // Extract deck metadata - match until next field OR :::CARD::: (handles whitespace/newlines)
    const unitMatch = block.match(/unit::=(\d+)/i);
    const titleMatch = block.match(/title::=([\s\S]+?)(?=\n\s*(?:desc::=|:::CARD:::)|$)/i);
    const descMatch = block.match(/desc::=([\s\S]+?)(?=\n\s*:::CARD:::|$)/i);
    
    if (!unitMatch || !titleMatch) {
      console.warn('Deck missing unit or title, skipping');
      continue;
    }
    
    const unitNumber = parseInt(unitMatch[1]);
    const deckTitle = titleMatch[1].trim();
    const deckDescription = descMatch ? descMatch[1].trim() : undefined;
    
    if (isNaN(unitNumber) || !deckTitle) {
      console.warn('Invalid unit number or title, skipping deck');
      continue;
    }
    
    // Extract flashcards within this deck
    const flashcards: Partial<Flashcard>[] = [];
    const cardBlocks = block.split(/:::CARD:::/i).slice(1); // Skip first part (deck metadata)
    
    for (const cardBlock of cardBlocks) {
      if (!cardBlock.trim()) continue;
      
      const flashcard: Partial<Flashcard> = {
        id: crypto.randomUUID(),
        term: '',
        definition: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      // Match term/def/img fields - handle newlines and whitespace
      const termMatch = cardBlock.match(/term::=([\s\S]+?)(?=\n\s*(?:def::=|img::=|:::CARD:::|:::DECK:::)|$)/i);
      const defMatch = cardBlock.match(/def::=([\s\S]+?)(?=\n\s*(?:img::=|:::CARD:::|:::DECK:::)|$)/i);
      const imageMatch = cardBlock.match(/img::=([\s\S]+?)(?=\n\s*(?::::CARD:::|:::DECK:::)|$)/i);
      
      if (termMatch) flashcard.term = termMatch[1].trim();
      if (defMatch) flashcard.definition = defMatch[1].trim();
      if (imageMatch) flashcard.image = imageMatch[1].trim();
      
      if (flashcard.term && flashcard.definition) {
        flashcards.push(flashcard);
      }
    }
    
    if (flashcards.length > 0) {
      decks.push({
        unitNumber,
        deckTitle,
        deckDescription,
        flashcards
      });
    }
  }
  
  return decks;
}

// ==================== MATERIALS PARSER ====================

export interface MaterialWithUnit extends Partial<Material> {
  unitNumber?: number; // Added unit support like flashcards
}

export function parseMaterials(text: string): Partial<Material>[] {
  const materials: Partial<Material>[] = [];
  
  // Split by material separator
  const materialBlocks = text.split(/:::MAT:::/i).filter(b => b.trim());
  
  for (const block of materialBlocks) {
    const material: Partial<Material> = {
      id: crypto.randomUUID(),
      name: '',
      type: 'pdf',
      url: '',
      uploadedAt: new Date().toISOString()
    };
    
    const nameMatch = block.match(/name::=([^]*?)(?=\s+\w+::=|$)/i);
    const urlMatch = block.match(/url::=([^]*?)(?=\s+\w+::=|$)/i);
    const typeMatch = block.match(/type::=([^]*?)(?=\s+\w+::=|$)/i);
    const descMatch = block.match(/desc::=([^]*?)(?=\s+\w+::=|$)/i);
    
    if (nameMatch) material.name = nameMatch[1].trim();
    if (urlMatch) material.url = urlMatch[1].trim();
    if (descMatch) material.description = descMatch[1].trim();
    
    if (typeMatch) {
      const t = typeMatch[1].trim().toLowerCase();
      if (t === 'pdf' || t === 'video' || t === 'link' || t === 'image' || t === 'other') {
        material.type = t as any;
      }
    }
    
    if (material.name && material.url) {
      materials.push(material);
    }
  }
  
  return materials;
}

// Enhanced materials parser with unit detection
export function parseMaterialsWithUnits(text: string): MaterialWithUnit[] {
  const materials: MaterialWithUnit[] = [];
  
  const materialBlocks = text.split(/:::MAT:::/i).filter(b => b.trim());
  
  for (const block of materialBlocks) {
    const material: MaterialWithUnit = {
      id: crypto.randomUUID(),
      name: '',
      type: 'pdf',
      url: '',
      uploadedAt: new Date().toISOString()
    };
    
    const unitMatch = block.match(/unit::=(\d+|global)/i);
    const nameMatch = block.match(/name::=([^]*?)(?=\s+\w+::=|$)/i);
    const urlMatch = block.match(/url::=([^]*?)(?=\s+\w+::=|$)/i);
    const typeMatch = block.match(/type::=([^]*?)(?=\s+\w+::=|$)/i);
    const descMatch = block.match(/desc::=([^]*?)(?=\s+\w+::=|$)/i);
    
    if (unitMatch) {
      const unitValue = unitMatch[1].trim().toLowerCase();
      material.unitNumber = unitValue === 'global' ? 0 : parseInt(unitValue);
    }
    
    if (nameMatch) material.name = nameMatch[1].trim();
    if (urlMatch) material.url = urlMatch[1].trim();
    if (descMatch) material.description = descMatch[1].trim();
    
    if (typeMatch) {
      const t = typeMatch[1].trim().toLowerCase();
      if (t === 'pdf' || t === 'video' || t === 'link' || t === 'image' || t === 'other') {
        material.type = t as any;
      }
    }
    
    if (material.name && material.url) {
      materials.push(material);
    }
  }
  
  return materials;
}

// ==================== STUDY GUIDES PARSER ====================

export interface StudyGuideWithUnit extends Partial<StudyGuide> {
  unitNumber?: number;
}

export function parseStudyGuides(text: string): Partial<StudyGuide>[] {
  const guides: Partial<StudyGuide>[] = [];
  
  const guideBlocks = text.split(/:::GUIDE:::/i).filter(b => b.trim());
  
  for (const block of guideBlocks) {
    const guide: Partial<StudyGuide> = {
      id: crypto.randomUUID(),
      title: '',
      content: '',
      difficulty: 'intermediate',
      tags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const titleMatch = block.match(/title::=([^]*?)(?=\w+::=|$)/i);
    const descMatch = block.match(/desc::=([^]*?)(?=\w+::=|$)/i);
    const contentMatch = block.match(/content::=([^]*?)(?=\w+::=|$)/i);
    const diffMatch = block.match(/diff::=([^]*?)(?=\w+::=|$)/i);
    const timeMatch = block.match(/time::=([^]*?)(?=\w+::=|$)/i);
    const tagsMatch = block.match(/tags::=([^]*?)(?=\w+::=|$)/i);
    const imgMatch = block.match(/img::=([^]*?)(?=\w+::=|$)/i);
    
    if (titleMatch) guide.title = titleMatch[1].trim();
    if (descMatch) guide.description = descMatch[1].trim();
    if (contentMatch) guide.content = contentMatch[1].trim();
    if (timeMatch) guide.estimatedTime = timeMatch[1].trim();
    if (imgMatch) guide.coverImage = imgMatch[1].trim();
    
    if (diffMatch) {
      const d = diffMatch[1].trim().toLowerCase();
      if (d === 'beginner' || d === 'easy') guide.difficulty = 'beginner';
      else if (d === 'intermediate' || d === 'medium') guide.difficulty = 'intermediate';
      else if (d === 'advanced' || d === 'hard') guide.difficulty = 'advanced';
    }
    
    if (tagsMatch) {
      guide.tags = tagsMatch[1].split(';;').map(t => t.trim()).filter(t => t);
    }
    
    if (guide.title && guide.content) {
      guides.push(guide);
    }
  }
  
  return guides;
}

// Enhanced study guides parser with unit detection
export function parseStudyGuidesWithUnits(text: string): StudyGuideWithUnit[] {
  const guides: StudyGuideWithUnit[] = [];
  
  // Handle empty or invalid input
  if (!text || typeof text !== 'string') {
    return guides;
  }
  
  // Normalize line endings and trim
  const normalizedText = text.replace(/\r\n/g, '\n').trim();
  
  // Split by guide separator (case-insensitive, handle various formats)
  const guideBlocks = normalizedText.split(/:::GUIDE:::/i).filter(b => b.trim());
  
  for (const block of guideBlocks) {
    try {
      const guide: StudyGuideWithUnit = {
        id: crypto.randomUUID(),
        title: '',
        content: '',
        difficulty: 'intermediate',
        tags: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      
      // Match fields with support for emojis and special characters
      // Use [\s\S] to match any character including newlines, emojis, special chars
      const unitMatch = block.match(/unit::=(\d+|global)/i);
      const titleMatch = block.match(/title::=([^\n]+)/i);
      const descMatch = block.match(/desc::=([^\n]+)/i);
      const diffMatch = block.match(/diff::=([^\n]+)/i);
      const timeMatch = block.match(/time::=([^\n]+)/i);
      const tagsMatch = block.match(/tags::=([^\n]+)/i);
      const imgMatch = block.match(/img::=([^\n]+)/i);
      // Content is everything after content::= (can be multiline)
      const contentMatch = block.match(/content::=([\s\S]+?)$/i);
      
      if (unitMatch) {
        const unitValue = unitMatch[1].trim().toLowerCase();
        guide.unitNumber = unitValue === 'global' ? 0 : parseInt(unitValue);
      }
      
      // Safely extract and trim values, preserving emojis and special characters
      if (titleMatch) guide.title = titleMatch[1].trim();
      if (descMatch) guide.description = descMatch[1].trim();
      if (contentMatch) guide.content = contentMatch[1].trim();
      if (timeMatch) guide.estimatedTime = timeMatch[1].trim();
      if (imgMatch) guide.coverImage = imgMatch[1].trim();
      
      if (diffMatch) {
        const d = diffMatch[1].trim().toLowerCase();
        if (d === 'beginner' || d === 'easy') guide.difficulty = 'beginner';
        else if (d === 'intermediate' || d === 'medium') guide.difficulty = 'intermediate';
        else if (d === 'advanced' || d === 'hard') guide.difficulty = 'advanced';
      }
      
      if (tagsMatch) {
        // Split tags by ;; and handle emojis in tags
        guide.tags = tagsMatch[1].split(';;').map(t => t.trim()).filter(t => t);
      }
      
      // Only add guides with required fields
      if (guide.title && guide.content) {
        guides.push(guide);
      }
    } catch (error) {
      // Skip malformed blocks but continue parsing
      console.warn('Skipping malformed study guide block:', error);
      continue;
    }
  }
  
  return guides;
}

// ==================== VALIDATION ====================

export function validateUnits(units: Partial<Unit>[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  units.forEach((unit, index) => {
    if (!unit.title) errors.push(`Unit ${index + 1}: Missing title::= field`);
    if (!unit.description) errors.push(`Unit ${index + 1}: Missing desc::= field`);
  });
  
  return { valid: errors.length === 0, errors };
}

export function validateQuestions(questions: Partial<Question>[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  questions.forEach((q, index) => {
    if (!q.question) errors.push(`Question ${index + 1}: Missing q::= field`);
    if (q.type === 'multiple-choice' && (!q.options || q.options.length < 2)) {
      errors.push(`Question ${index + 1}: Multiple choice needs at least 2 options (use options::=)`);
    }
    if (!q.correctAnswer) errors.push(`Question ${index + 1}: Missing correct::= field`);
  });
  
  return { valid: errors.length === 0, errors };
}

export function validateFlashcards(flashcards: Partial<Flashcard>[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  flashcards.forEach((f, index) => {
    if (!f.term) errors.push(`Flashcard ${index + 1}: Missing term::= field`);
    if (!f.definition) errors.push(`Flashcard ${index + 1}: Missing def::= field`);
  });
  
  return { valid: errors.length === 0, errors };
}

export function validateMaterials(materials: Partial<Material>[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  materials.forEach((m, index) => {
    if (!m.name) errors.push(`Material ${index + 1}: Missing name::= field`);
    if (!m.url) errors.push(`Material ${index + 1}: Missing url::= field`);
  });
  
  return { valid: errors.length === 0, errors };
}

export function validateStudyGuides(guides: Partial<StudyGuide>[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  guides.forEach((g, index) => {
    if (!g.title) errors.push(`Guide ${index + 1}: Missing title::= field`);
    if (!g.content) errors.push(`Guide ${index + 1}: Missing content::= field`);
  });
  
  return { valid: errors.length === 0, errors };
}

// ==================== FORMAT EXAMPLES ====================

export const UNIT_FORMAT_GUIDE = `UNITS BULK IMPORT SYNTAX
========================

Separator: :::UNIT:::
Fields use ::= delimiter
No spaces needed around delimiters

EXAMPLE:
:::UNIT:::
title::=Unit 1: Introduction to Biology
desc::=This unit covers the fundamental principles of biology, including cell structure, DNA, and basic genetics.
weight::=8-10%
time::=2-3 hours
publish::=true
content::=Biology is the study of life. In this unit, we'll explore cells, which are the basic building blocks of all living organisms. We'll learn about DNA, the molecule that carries genetic information, and how it's passed from parents to offspring. Key topics include: cell membrane structure, organelles like mitochondria and ribosomes, and the central dogma of molecular biology.

:::UNIT:::
title::=Unit 2: Cell Division and Genetics
desc::=Explore mitosis, meiosis, and Mendelian genetics
weight::=12-15%
time::=3-4 hours
content::=Cell division occurs through two main processes: mitosis (for growth and repair) and meiosis (for reproduction). Mendel's experiments with pea plants revealed the basic principles of heredity.`;

export const QUESTION_FORMAT_GUIDE = `QUESTIONS BULK IMPORT SYNTAX
============================

Separator: :::Q:::
Fields use ::= delimiter
Options separated by ;;
Unit: Add unit::=NUMBER for auto-assignment

TYPES: mcq, frq, tf

FORMATTING IN QUESTIONS:
- Images: img::=https://example.com/diagram.jpg
- LaTeX Math: Use $inline$ or $$block$$
- Tables: Use | for columns, --- for header separator

MULTIPLE CHOICE EXAMPLE:
:::Q:::
unit::=1
type::=mcq
q::=What is the powerhouse of the cell?
img::=https://example.com/cell-diagram.jpg
options::=Nucleus;;Mitochondria;;Ribosome;;Endoplasmic reticulum
correct::=B
diff::=easy
explain::=Mitochondria produce ATP through cellular respiration, providing energy for the cell.
tags::=biology;;cells;;energy
points::=1

FREE RESPONSE EXAMPLE:
:::Q:::
unit::=2
type::=frq
q::=Explain the process of photosynthesis and its importance to life on Earth. Include the chemical equation and describe both light-dependent and light-independent reactions.
correct::=Photosynthesis converts light energy into chemical energy. 6CO2 + 6H2O + light → C6H12O6 + 6O2. Light reactions produce ATP and NADPH, dark reactions use these to make glucose.
sample::=In the light-dependent reactions occurring in the thylakoid membranes, chlorophyll absorbs photons...
rubric::=1pt: Correct equation, 1pt: Light reactions explained, 1pt: Calvin cycle explained, 1pt: Importance to ecosystems
diff::=hard
points::=4
tags::=photosynthesis;;plants;;biochemistry

TRUE/FALSE EXAMPLE:
:::Q:::
unit::=1
type::=tf
q::=DNA replication occurs during the S phase of the cell cycle.
correct::=True
diff::=medium
explain::=The S phase (Synthesis phase) is when DNA replication occurs.

TIPS:
✓ Add unit::=NUMBER to assign to specific unit
✓ Auto-parsing detects units automatically!
✓ No dropdowns, no selections - just paste!`;

export const FLASHCARD_FORMAT_GUIDE = `FLASHCARDS BULK IMPORT SYNTAX
==============================

METHOD 1: ADVANCED - Multiple Decks with Units
-----------------------------------------------
Separator: :::DECK::: (for each deck)
Fields: unit::= (unit number), title::= (deck name), desc::= (optional description)
Cards within deck: :::CARD::: term::= def::= img::= (optional)

IMAGE SUPPORT - Like Quizlet!
Add img::= to any flashcard to include an image on the card
Works with both term and definition - perfect for visual learning!

EXAMPLE - Create multiple decks with images:
:::DECK:::
unit::=1
title::=Cell Structure Basics
desc::=Essential cell organelles and their functions
:::CARD:::
term::=Mitochondria
def::=The powerhouse of the cell; organelle responsible for producing ATP through cellular respiration
img::=https://example.com/mitochondria-diagram.jpg
:::CARD:::
term::=Nucleus
def::=Control center of the cell; contains DNA and regulates gene expression
img::=https://example.com/nucleus-labeled.png
:::CARD:::
term::=Endoplasmic Reticulum
def::=Network of membranes for protein and lipid synthesis; rough ER has ribosomes, smooth ER doesn't
img::=https://example.com/er-diagram.jpg

:::DECK:::
unit::=1
title::=Cell Membrane Transport
desc::=How substances move across cell membranes
:::CARD:::
term::=Diffusion
def::=Movement of molecules from high to low concentration without energy input
img::=https://example.com/diffusion-animation.gif
:::CARD:::
term::=Active Transport
def::=Movement against concentration gradient using ATP energy (e.g., sodium-potassium pump)
img::=https://example.com/active-transport.jpg

:::DECK:::
unit::=2
title::=Photosynthesis Key Terms
desc::=Important concepts for understanding photosynthesis
:::CARD:::
term::=Chloroplast
def::=Organelle where photosynthesis occurs; contains chlorophyll
img::=https://example.com/chloroplast-structure.png
:::CARD:::
term::=Light-Dependent Reactions
def::=First stage of photosynthesis; occurs in thylakoid membranes, produces ATP and NADPH
img::=https://example.com/light-reactions-diagram.jpg
:::CARD:::
term::=Calvin Cycle
def::=Light-independent reactions; uses ATP and NADPH to fix CO2 into glucose
img::=https://example.com/calvin-cycle-steps.png

TIPS:
✓ Images are OPTIONAL but highly recommended for visual subjects!
✓ Use clear, labeled diagrams from reliable sources
✓ Supports jpg, png, gif, svg, webp formats
✓ Images display on the flashcard just like Quizlet
✓ Always use :::DECK::: to organize flashcards into named decks
✓ You can create multiple decks across multiple units in one import
✓ Each deck must specify unit number, title, and contain at least one :::CARD:::
`;


export const MATERIAL_FORMAT_GUIDE = `MATERIALS BULK IMPORT SYNTAX
============================

Separator: :::MAT:::
Fields use ::= delimiter
Types: pdf, video, link, image, other
Unit: Add unit::=NUMBER or unit::=global

EXAMPLE:
:::MAT:::
unit::=1
name::=Chapter 3 Study Guide
type::=pdf
url::=https://drive.google.com/file/d/abc123/view
desc::=Comprehensive study guide covering cellular respiration and photosynthesis

:::MAT:::
unit::=2
name::=Crash Course Biology: DNA
type::=video
url::=https://youtube.com/watch?v=xyz789
desc::=Great video explaining DNA structure and replication

:::MAT:::
unit::=global
name::=Interactive Cell Diagram
type::=link
url::=https://celldiagram.interactive.com
desc::=Click on different organelles to learn their functions

TIPS:
✓ Add unit::=NUMBER to assign to specific unit
✓ Use unit::=global for materials available across all units
✓ Auto-parsing detects unit numbers automatically!
✓ No manual selection needed - just paste and go!`;

export const STUDYGUIDE_FORMAT_GUIDE = `STUDY GUIDES BULK IMPORT SYNTAX
================================

Separator: :::GUIDE:::
Fields use ::= delimiter
Difficulty: beginner, intermediate, advanced
Unit: Add unit::=NUMBER or unit::=global

CONTENT FORMATTING (Markdown-style):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Headers:
  # Big Heading        → Large primary heading (or ALL CAPS text)
  ## Medium Heading    → Medium heading
  ### Small Heading    → Small heading

Lists:
  - Bullet point       → Bulleted list item
  * Another bullet     → Also works
  1. Numbered item     → Numbered list
  2) Another number    → Also works

Tables (Markdown format):
  | Column 1 | Column 2 | Column 3 |
  |----------|----------|----------|
  | Cell 1   | Cell 2   | Cell 3   |
  | Data A   | Data B   | Data C   |

Images:
  ![alt text](https://example.com/image.jpg)
  OR just paste URL:
  https://example.com/image.jpg

Special Callouts:
  Formula: E = mc^2    → Highlighted blue box
  Definition: ...      → Highlighted blue box
  Equation: ...        → Highlighted blue box

Math (LaTeX):
  Inline: $x^2 + y^2 = r^2$
  Block:  $$\\int_0^\\infty e^{-x} dx$$

EXAMPLE:
:::GUIDE:::
unit::=1
title::=Cell Structure Mastery Guide
desc::=Everything you need to ace your cell biology exam
diff::=intermediate
time::=45 minutes
tags::=cells;;biology;;exam-prep
img::=https://example.com/cover.jpg
content::=
# CELL STRUCTURE OVERVIEW
The cell is the basic unit of life. Here's what you need to know:

## PLASMA MEMBRANE
- Phospholipid bilayer with embedded proteins
- Controls what enters/exits the cell
- Selectively permeable

## ORGANELLES COMPARISON:
| Organelle | Function | Energy |
|-----------|----------|--------|
| Mitochondria | ATP production | Yes |
| Nucleus | DNA storage | No |
| Ribosome | Protein synthesis | No |

![Cell Diagram](https://example.com/cell-diagram.png)

### STUDY TIPS:
- Draw and label a cell diagram from memory
- Use mnemonics: "My Ribosomes Really Generate Energy" 
* Practice with flashcards for organelle functions

Formula: Surface Area to Volume Ratio = $\\frac{SA}{V}$

## COMMON EXAM QUESTIONS:
Q: Compare prokaryotic and eukaryotic cells
A: Prokaryotes lack membrane-bound organelles and nucleus...

TIPS:
✓ Headers auto-format (# or ALL CAPS)
✓ Bullets (-,*,•) auto-indent
✓ Tables render as formatted tables
✓ Images auto-display
✓ LaTeX math auto-renders
✓ Add unit::=NUMBER to assign to specific unit
✓ Use unit::=global for guides available across all units`;


// ==================== ALTERNATIVE FORMAT: CSV-LIKE ====================

// For flashcards: "term | definition | image_url"
export function parseFlashcardsSimple(text: string): Partial<Flashcard>[] {
  const flashcards: Partial<Flashcard>[] = [];
  const lines = text.split('\n').filter(l => l.trim());
  
  for (const line of lines) {
    const parts = line.split('|').map(p => p.trim());
    if (parts.length >= 2) {
      flashcards.push({
        id: crypto.randomUUID(),
        term: parts[0],
        definition: parts[1],
        image: parts[2] || undefined,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
  }
  
  return flashcards;
}

// ==================== FAQ PARSING ====================

export function parseFAQs(text: string): Partial<FAQItem>[] {
  const faqs: Partial<FAQItem>[] = [];
  
  const faqBlocks = text.split(/:::FAQ:::/i).filter(b => b.trim());
  
  for (const block of faqBlocks) {
    const faq: Partial<FAQItem> = {
      id: crypto.randomUUID(),
      question: '',
      answer: '',
      order: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const questionMatch = block.match(/q::=([^]*?)(?=\w+::=|$)/i);
    const answerMatch = block.match(/a::=([^]*?)(?=\w+::=|$)/i);
    const categoryMatch = block.match(/cat::=([^]*?)(?=\w+::=|$)/i);
    const orderMatch = block.match(/order::=([^]*?)(?=\w+::=|$)/i);
    
    if (questionMatch) faq.question = questionMatch[1].trim();
    if (answerMatch) faq.answer = answerMatch[1].trim();
    if (categoryMatch) faq.category = categoryMatch[1].trim();
    if (orderMatch) {
      const orderNum = parseInt(orderMatch[1].trim());
      if (!isNaN(orderNum)) faq.order = orderNum;
    }
    
    if (faq.question && faq.answer) {
      faqs.push(faq);
    }
  }
  
  return faqs;
}

export function validateFAQs(faqs: Partial<FAQItem>[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  faqs.forEach((faq, index) => {
    if (!faq.question) errors.push(`FAQ ${index + 1}: Missing q::= field`);
    if (!faq.answer) errors.push(`FAQ ${index + 1}: Missing a::= field`);
  });
  
  return { valid: errors.length === 0, errors };
}

export const FAQ_FORMAT_GUIDE = `FAQ BULK IMPORT SYNTAX
================================

Separator: :::FAQ:::
Fields use ::= delimiter
Optional: cat::= (category), order::= (number)

EXAMPLE:
:::FAQ:::
q::=How long is the AP Chemistry exam?
a::=The AP Chemistry exam is 3 hours and 15 minutes long. It consists of two sections: Section I (Multiple Choice) is 90 minutes with 60 questions, and Section II (Free Response) is 105 minutes with 7 questions.
cat::=Exam Format
order::=1

:::FAQ:::
q::=What topics are covered in AP Chemistry?
a::=AP Chemistry covers: Atomic Structure & Properties, Molecular & Ionic Compound Structure, Intermolecular Forces, Chemical Reactions, Kinetics, Thermodynamics, Equilibrium, Acids & Bases, and Applications of Thermodynamics. The course emphasizes quantitative problem-solving and laboratory work.
cat::=Course Content
order::=2

:::FAQ:::
q::=Is a calculator allowed on the AP Chemistry exam?
a::=Yes, calculators are allowed on BOTH sections of the AP Chemistry exam. The College Board provides a list of approved calculators. Scientific or graphing calculators are recommended for dealing with logarithms, exponentials, and complex calculations.
order::=3

QUICK TIPS:
- Each FAQ starts with :::FAQ:::
- q::= for the question
- a::= for the answer (can be multiple paragraphs)
- cat::= for optional category (like "Exam Format", "Study Tips")
- order::= for custom ordering (lower numbers appear first)
- Leave blank lines for readability in answers
`;
