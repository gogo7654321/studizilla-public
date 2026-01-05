
import { z } from 'zod';

const ExamSectionSchema = z.object({
  section: z.string().describe("The name of the exam section (e.g., 'Multiple Choice', 'Free Response')."),
  questions: z.union([z.string(), z.number()]).describe("The number of questions in this section."),
  time: z.string().describe("The time allotted for this section (e.g., '1 hour 30 minutes')."),
  weight: z.string().describe("The percentage weight of this section on the total exam score (e.g., '50%').")
});

const UnitSchema = z.object({
  title: z.string().describe("The full title of the unit (e.g., 'Unit 1: The Living World: Ecosystems')."),
  description: z.string().describe("A brief, one-sentence summary of what the unit covers."),
  examWeight: z.union([z.string(), z.number()]).describe("The recommended weighting for this unit on the AP Exam (e.g., '6-8%' or 8).")
});

export const CourseDetailsSchema = z.object({
  description: z.string().describe("A detailed, engaging, and SEO-friendly description of the course, outlining what students will learn. Around 2-3 sentences."),
  exam_breakdown: z.array(ExamSectionSchema).describe("An array of objects detailing each section of the official AP exam."),
  units: z.array(UnitSchema).describe("A complete list of all official units for the course as defined by the College Board.")
});

export type CourseDetails = z.infer<typeof CourseDetailsSchema>;
