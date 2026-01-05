'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CourseIcon } from '@/components/CourseIcon';
import { Loader2, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { courses as allCourses } from '@/lib/courses';
import type { Course } from '@/lib/courses';

export function ClassProgress() {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const userCourseIds = data.addedCourses || [];
        const userCourses = allCourses.filter(c => userCourseIds.includes(c.id));
        setCourses(userCourses);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (isLoading) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10">
          <CardTitle className="font-headline">My Courses</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (courses.length === 0) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10">
          <CardTitle className="font-headline">My Courses</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center text-center py-12">
          <BookOpen className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="font-semibold text-lg text-muted-foreground">{user ? 'No courses added yet!' : 'Preview Mode'}</p>
          <p className="text-sm text-muted-foreground mt-1">
            {user ? 'Visit the courses page to add courses to your dashboard.' : 'Sign in to add courses and track your progress.'}
          </p>
          <Button asChild variant="default" className="mt-4">
            <Link href={user ? "/classes" : "/auth"}>{user ? 'Browse Courses' : 'Sign In'}</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pl-10">
        <CardTitle className="font-headline">My Courses</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/classes/${course.slug}`}
                className="block group"
              >
                <div className="rounded-xl border bg-card p-4 transition-all duration-200 hover:shadow-md hover:border-primary">
                  <div className="flex items-start gap-3">
                    <CourseIcon iconName={course.icon} className="h-10 w-10 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                        {course.name}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-2">{course.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
