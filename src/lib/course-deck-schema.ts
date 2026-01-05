/**
 * Course Flashcard Deck Schema
 * Separate deck entities for course content that can be studied independently
 */

import { z } from 'zod';

export const CourseDeckCardSchema = z.object({
  id: z.string(),
  term: z.string().min(1, "Term is required"),
  definition: z.string().min(1, "Definition is required"),
  image: z.string().optional(),
  hint: z.string().optional(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string())
});

export type CourseDeckCard = z.infer<typeof CourseDeckCardSchema>;

export const CourseDeckSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Deck title is required"),
  description: z.string().optional(),
  courseId: z.string(), // References the course (e.g., "ap_chemistry")
  unitNumber: z.number().optional(), // Which unit this deck belongs to (1-indexed)
  unitId: z.string().optional(), // Unit ID reference
  cards: z.array(CourseDeckCardSchema).default([]),
  isPublic: z.boolean().default(false),
  order: z.number().default(0),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  // Study settings
  studyDefaults: z.object({
    answerWith: z.enum(['term', 'definition']).default('definition'),
    flipDirection: z.enum(['horizontal', 'vertical']).default('horizontal')
  }).optional()
});

export type CourseDeck = z.infer<typeof CourseDeckSchema>;

export function createEmptyCourseDeck(courseId: string, unitId?: string, unitNumber?: number): CourseDeck {
  return {
    id: crypto.randomUUID(),
    title: 'Untitled Deck',
    description: '',
    courseId,
    unitId,
    unitNumber,
    cards: [],
    isPublic: false,
    order: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}
