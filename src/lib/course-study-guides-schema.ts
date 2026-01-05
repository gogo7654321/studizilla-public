/**
 * Schema for Course Study Guides Collection
 * Each study guide is a separate document in Firestore
 */

import { z } from 'zod';

export const CourseStudyGuideSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  title: z.string().min(1, "Guide title is required"),
  description: z.string().optional(),
  content: z.string(), // Rich text HTML
  coverImage: z.string().optional(),
  estimatedTime: z.string().optional(), // e.g., "30 minutes"
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
  tags: z.array(z.string()).default([]),
  isPublished: z.boolean().default(false),
  order: z.number().default(0),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type CourseStudyGuide = z.infer<typeof CourseStudyGuideSchema>;

export const createEmptyStudyGuide = (courseId: string): Partial<CourseStudyGuide> => ({
  id: crypto.randomUUID(),
  courseId,
  title: '',
  description: '',
  content: '',
  difficulty: 'intermediate',
  tags: [],
  isPublished: false,
  order: 0,
  createdAt: new Date(),
  updatedAt: new Date()
});
