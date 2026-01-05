import { notFound } from 'next/navigation';
import { getCourseBySlug } from '@/lib/courseUtils';
import { CourseContentWrapper } from './CourseContentWrapper';

type ContentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CourseContentPage({ params }: ContentPageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  
  if (!course) {
    notFound();
  }

  return <CourseContentWrapper course={course} />;
}
