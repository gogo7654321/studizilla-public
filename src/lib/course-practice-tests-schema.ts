/**
 * Schema for Course Practice Tests Collection
 * Each practice test is a separate document in Firestore
 */

import { z } from 'zod';

export const CoursePracticeTestSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  title: z.string().min(1, "Test title is required"),
  description: z.string().optional(),
  type: z.enum(['practice-exam', 'unit-test', 'quiz', 'diagnostic']).default('quiz'),
  questionIds: z.array(z.string()), // References to questions in courseQuestions collection
  timeLimit: z.number().optional(), // in minutes
  passingScore: z.number().optional(), // percentage
  isPublished: z.boolean().default(false),
  order: z.number().default(0),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type CoursePracticeTest = z.infer<typeof CoursePracticeTestSchema>;

export const createEmptyPracticeTest = (courseId: string): Partial<CoursePracticeTest> => ({
  id: crypto.randomUUID(),
  courseId,
  title: '',
  description: '',
  type: 'quiz',
  questionIds: [],
  isPublished: false,
  order: 0,
  createdAt: new Date(),
  updatedAt: new Date()
});
