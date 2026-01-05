/**
 * Schema for Course Questions Collection
 * Each question is a separate document in Firestore
 */

import { z } from 'zod';

export const QuestionTypeSchema = z.enum(['multiple-choice', 'free-response', 'true-false']);

export const CourseQuestionSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  unitId: z.string(), // References the unit this question belongs to
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
  isPublished: z.boolean().default(false),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type CourseQuestion = z.infer<typeof CourseQuestionSchema>;
export type QuestionType = z.infer<typeof QuestionTypeSchema>;

export const createEmptyQuestion = (courseId: string, unitId: string, type: QuestionType = 'multiple-choice'): Partial<CourseQuestion> => ({
  id: crypto.randomUUID(),
  courseId,
  unitId,
  type,
  question: '',
  options: type === 'multiple-choice' ? ['', '', '', ''] : type === 'true-false' ? ['True', 'False'] : undefined,
  correctAnswer: '',
  explanation: '',
  difficulty: 'medium',
  tags: [],
  points: 1,
  isPublished: false,
  createdAt: new Date(),
  updatedAt: new Date()
});
