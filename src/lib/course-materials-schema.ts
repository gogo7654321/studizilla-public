/**
 * Schema for Course Materials Collection
 * Each material is a separate document in Firestore
 */

import { z } from 'zod';

export const MaterialTypeSchema = z.enum(['pdf', 'video', 'link', 'image', 'other']);

export const CourseMaterialSchema = z.object({
  id: z.string(),
  courseId: z.string(),
  unitId: z.string().optional(), // Optional - if not set, it's a global material
  name: z.string().min(1, "Material name is required"),
  type: MaterialTypeSchema,
  url: z.string().url(),
  description: z.string().optional(),
  uploadedAt: z.date().or(z.string()),
  fileSize: z.number().optional(), // in bytes
  thumbnailUrl: z.string().optional(),
  isPublished: z.boolean().default(false),
  order: z.number().default(0)
});

export type CourseMaterial = z.infer<typeof CourseMaterialSchema>;
export type MaterialType = z.infer<typeof MaterialTypeSchema>;

export const createEmptyMaterial = (courseId: string, unitId?: string): Partial<CourseMaterial> => ({
  id: crypto.randomUUID(),
  courseId,
  unitId,
  name: '',
  type: 'pdf',
  url: '',
  description: '',
  isPublished: false,
  order: 0,
  uploadedAt: new Date()
});
