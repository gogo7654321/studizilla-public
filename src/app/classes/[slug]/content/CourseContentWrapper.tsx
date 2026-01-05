'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import type { Course } from '@/lib/courses';
import type { CourseContent } from '@/lib/course-content-schema';
import type { CourseDeck } from '@/lib/course-deck-schema';
import { CourseContentClient } from './CourseContentClient';
import { Button } from '@/components/ui/button';
import { BookOpen, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { getCourseDecks } from '@/app/dashboard/dev/course-content-manager/course-deck-actions';

interface CourseContentWrapperProps {
  course: Course;
}

export function CourseContentWrapper({ course }: CourseContentWrapperProps) {
  const [content, setContent] = useState<CourseContent | null>(null);
  const [courseDecks, setCourseDecks] = useState<CourseDeck[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        console.log(`[CourseContentWrapper] Fetching content for courseId: "${course.id}"`);
        
        // Fetch course content
        const docRef = doc(db, 'courseContent', course.id);
        const docSnap = await getDoc(docRef);
        
        if (!docSnap.exists()) {
          console.log(`[CourseContentWrapper] No document found for courseId: ${course.id}`);
          setContent(null);
        } else {
          const data = docSnap.data() as CourseContent;
          console.log(`[CourseContentWrapper] Found content:`, {
            units: data.units?.length || 0,
            questions: data.units?.reduce((sum, u) => sum + (u.questions?.length || 0), 0) || 0,
            flashcards: data.units?.reduce((sum, u) => sum + (u.flashcards?.length || 0), 0) || 0,
            studyGuides: data.studyGuides?.length || 0,
            globalMaterials: data.globalMaterials?.length || 0
          });
          setContent(data);
        }

        // Fetch course decks
        try {
          const decks = await getCourseDecks(course.id);
          console.log(`[CourseContentWrapper] Found ${decks.length} course decks`);
          setCourseDecks(decks);
        } catch (deckError) {
          console.error('[CourseContentWrapper] Error fetching course decks:', deckError);
          // Don't fail the whole page if decks fail to load
          setCourseDecks([]);
        }
      } catch (err: any) {
        console.error('[CourseContentWrapper] Error fetching content:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, [course.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-purple-600" />
          <p className="text-lg text-gray-600 dark:text-gray-400">Loading course content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md mx-auto text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-red-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-red-600">Error Loading Content</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <Link href={`/classes/${course.slug}`}>
            <Button variant="outline">← Back to Course Page</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md mx-auto text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-purple-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Content Coming Soon!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Course content for <span className="font-semibold">{course.name}</span> is being prepared and will be available soon.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              💡 <strong>Tip:</strong> Want to add content? Go to Dashboard → Dev Tools → Course Content Manager
            </p>
          </div>
          <Link href={`/classes/${course.slug}`} className="mt-6 inline-block">
            <Button variant="outline">← Back to Course Page</Button>
          </Link>
        </div>
      </div>
    );
  }

  return <CourseContentClient course={course} content={content} courseDecks={courseDecks} />;
}
