
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Loader2 } from 'lucide-react';
import { MathRenderer } from '@/components/MathRenderer';
import type { FullCourse } from '@/lib/courseUtils';

type CourseProgressData = {
  progress: number;
  xp: number;
  timeSpent: number;
  completedUnits: string[];
};

export function CourseProgressClient({ course }: { course: FullCourse }) {
  const { user } = useAuth();
  const [progressData, setProgressData] = useState<CourseProgressData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Effect for fetching user progress (only if user is logged in)
  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const allProgress = docSnap.data().courseProgress || {};
          setProgressData(allProgress[course.id] || { progress: 0, xp: 0, timeSpent: 0, completedUnits: [] });
        }
        setIsLoading(false);
      }, (error) => {
        console.error("Error fetching user progress:", error);
        setIsLoading(false);
      });
      return unsubscribe;
    } else {
      setIsLoading(false); // Not logged in, no progress to fetch
    }
  }, [user, course.id]);

  if (!course.units || course.units.length === 0) {
      return (
        <div className="text-center py-10 text-muted-foreground italic">
            Course content for this subject is being developed and will be available soon.
        </div>
      )
  }

  return (
    <>
      {user && (
        <div className="mt-2">
            {isLoading ? (
                 <div className="flex justify-center items-center py-2"><Loader2 className="h-6 w-6 animate-spin" /></div>
            ) : (
                <>
                    <p className="text-sm text-muted-foreground">Your Progress: {progressData?.progress || 0}%</p>
                    <Progress value={progressData?.progress || 0} className="w-full mt-1" />
                </>
            )}
        </div>
      )}
      <Accordion type="single" collapsible className="w-full" defaultValue={course.units[0]?.title}>
        {course.units.map((unit) => (
          <AccordionItem key={unit.title} value={unit.title}>
            <AccordionTrigger className="font-bold text-lg hover:no-underline flex-1">
              <div className="flex justify-between w-full pr-4 items-center">
                  <span>{unit.title}</span>
                  <span className="text-sm font-medium text-muted-foreground">{unit.examWeight}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="prose dark:prose-invert max-w-none">
              <div className="text-muted-foreground mb-4">
                  <MathRenderer content={unit.description} />
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
