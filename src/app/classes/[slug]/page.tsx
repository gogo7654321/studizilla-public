import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/lib/courseUtils";
import { Metadata, ResolvingMetadata } from 'next';
import { CoursePageClient } from './CoursePageClient';
import type { FullCourse } from '@/lib/courseUtils';

type CoursePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: CoursePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  
  if (!course) {
    return {
      title: 'Course Not Found',
    }
  }

  const description = course.description || `Explore ${course.name} on Studizilla. Access study guides, practice tests, and more.`;

  return {
    title: course.name,
    description: description,
  }
}


export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Create a FullCourse object with empty arrays for dynamic data
  const fullCourse: FullCourse = {
    ...course,
    exam_breakdown: [],
    units: [],
  };

  return <CoursePageClient course={fullCourse} />;
}
