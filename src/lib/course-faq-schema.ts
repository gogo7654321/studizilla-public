/**
 * Schema for FAQ items stored in the courseFAQs collection
 * Each FAQ is stored as a separate document
 */

import { z } from 'zod';

export const CourseFAQSchema = z.object({
  id: z.string(),
  courseId: z.string().min(1, "Course ID is required"),
  question: z.string().min(1, "Question is required"),
  answer: z.string().min(1, "Answer is required"),
  order: z.number().default(0),
  category: z.string().optional(),
  isPublished: z.boolean().default(false),
  createdAt: z.string(),
  updatedAt: z.string()
});

export type CourseFAQ = z.infer<typeof CourseFAQSchema>;

export const createEmptyFAQ = (courseId: string, order: number = 0): Partial<CourseFAQ> => ({
  courseId,
  question: '',
  answer: '',
  order,
  category: '',
  isPublished: false
});
