/**
 * Unified Course Content Schema for Studizilla
 * This replaces the fragmented approach with a comprehensive content management system
 */

import { z } from 'zod';

// ==================== FLASHCARDS ====================
export const FlashcardSchema = z.object({
  id: z.string(),
  term: z.string().min(1, "Term is required"),
  definition: z.string().min(1, "Definition is required"),
  image: z.string().optional(),
  deckName: z.string().optional(), // Group flashcards into named decks within a unit
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type Flashcard = z.infer<typeof FlashcardSchema>;

// ==================== QUESTIONS ====================
export const QuestionTypeSchema = z.enum(['multiple-choice', 'free-response', 'true-false']);

export const QuestionSchema = z.object({
  id: z.string(),
  type: QuestionTypeSchema,
  question: z.string().min(1, "Question text is required"),
  // For multiple-choice and true-false
  options: z.array(z.string()).optional(),
  correctAnswer: z.string().optional(), // Index for MCQ/TF, or key points for FRQ
  // For free-response
  sampleAnswer: z.string().optional(),
  rubric: z.string().optional(),
  // Meta
  explanation: z.string().optional(),
  difficulty: z.enum(['easy', 'medium', 'hard']).default('medium'),
  tags: z.array(z.string()).default([]),
  points: z.number().default(1),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type Question = z.infer<typeof QuestionSchema>;
export type QuestionType = z.infer<typeof QuestionTypeSchema>;

// ==================== MATERIALS ====================
export const MaterialTypeSchema = z.enum(['pdf', 'video', 'link', 'image', 'other']);

export const MaterialSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Material name is required"),
  type: MaterialTypeSchema,
  url: z.string().url(),
  description: z.string().optional(),
  uploadedAt: z.date().or(z.string()),
  fileSize: z.number().optional(), // in bytes
  thumbnailUrl: z.string().optional()
});

export type Material = z.infer<typeof MaterialSchema>;
export type MaterialType = z.infer<typeof MaterialTypeSchema>;

// ==================== STUDY GUIDES ====================
export const StudyGuideSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Guide title is required"),
  description: z.string().optional(),
  content: z.string(), // Rich text HTML
  coverImage: z.string().optional(),
  estimatedTime: z.string().optional(), // e.g., "30 minutes"
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
  tags: z.array(z.string()).default([]),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type StudyGuide = z.infer<typeof StudyGuideSchema>;

// ==================== FAQ ====================
export const FAQItemSchema = z.object({
  id: z.string(),
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
  order: z.number().default(0),
  category: z.string().optional(),
  isPublished: z.boolean().default(false),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type FAQItem = z.infer<typeof FAQItemSchema>;

// ==================== UNITS ====================
// NOTE: Questions and Materials are now stored in separate collections (courseQuestions, courseMaterials)
// Flashcards remain in the courseDecks collection
export const UnitSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Unit title is required"),
  description: z.string().min(1, "Unit description is required"),
  examWeight: z.union([z.string(), z.number()]).optional(), // e.g., "8-10%" or 8
  order: z.number().default(0),
  // Content
  content: z.string().optional(), // Rich text HTML for detailed explanations
  // Meta
  isPublished: z.boolean().default(false),
  completionEstimate: z.string().optional(), // e.g., "2-3 hours"
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type Unit = z.infer<typeof UnitSchema>;

// ==================== PRACTICE TESTS ====================
export const PracticeTestSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Test title is required"),
  description: z.string().optional(),
  type: z.enum(['practice-exam', 'unit-test', 'quiz', 'diagnostic']).default('quiz'),
  questions: z.array(QuestionSchema),
  timeLimit: z.number().optional(), // in minutes
  passingScore: z.number().optional(), // percentage
  isPublished: z.boolean().default(false),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type PracticeTest = z.infer<typeof PracticeTestSchema>;

// ==================== EXAM BREAKDOWN ====================
export const ExamSectionSchema = z.object({
  section: z.string(),
  questions: z.union([z.string(), z.number()]),
  time: z.string(),
  weight: z.string()
});

export type ExamSection = z.infer<typeof ExamSectionSchema>;

// ==================== COURSE METADATA ====================
export const CourseMetadataSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  subject: z.string(),
  examDate: z.string().optional(),
  icon: z.string(),
  examBreakdown: z.array(ExamSectionSchema).default([]),
  isHonors: z.boolean().default(false),
  prerequisites: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  updatedAt: z.date().or(z.string())
});

export type CourseMetadata = z.infer<typeof CourseMetadataSchema>;

// ==================== FULL COURSE CONTENT ====================
// NOTE: Questions, Materials, Study Guides, and Practice Tests are now stored in separate collections
// This document only contains metadata, units (with basic structure), and FAQs
export const CourseContentSchema = z.object({
  metadata: CourseMetadataSchema,
  units: z.array(UnitSchema).default([]),
  faqs: z.array(FAQItemSchema).default([]), // Frequently Asked Questions
  // Stats - calculated from separate collections
  stats: z.object({
    totalFlashcards: z.number().default(0),
    totalQuestions: z.number().default(0),
    totalStudyTime: z.string().optional(),
    lastUpdated: z.date().or(z.string())
  }).optional()
});

export type CourseContent = z.infer<typeof CourseContentSchema>;

// ==================== HELPERS ====================
export const createEmptyUnit = (order: number = 0): Partial<Unit> => ({
  id: crypto.randomUUID(),
  title: '',
  description: '',
  order,
  content: '',
  isPublished: false,
  createdAt: new Date(),
  updatedAt: new Date()
});

// NOTE: Other helper functions (createEmptyFlashcard, createEmptyQuestion, etc.)
// have been moved to their respective schema files:
// - course-deck-schema.ts for flashcards
// - course-questions-schema.ts for questions
// - course-materials-schema.ts for materials
// - course-study-guides-schema.ts for study guides
// - course-practice-tests-schema.ts for practice tests


export const createEmptyFAQ = (): Partial<FAQItem> => ({
  id: crypto.randomUUID(),
  question: '',
  answer: '',
  order: 0,
  isPublished: false,
  createdAt: new Date(),
  updatedAt: new Date()
});
