'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { courses as allCourses } from '@/lib/courses';
import type { Course } from '@/lib/courses';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CourseIcon } from '@/components/CourseIcon';
import { Loader2, BookOpen, BookMarked, FileText, GraduationCap, Lightbulb, Calendar, ExternalLink, Grid3x3, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

export default function MyClassesPage() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setEnrolledCourses([]);
      setIsLoading(false);
      return;
    }

    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        const userCourseIds = data.addedCourses || [];
        const userCourses = allCourses.filter(c => userCourseIds.includes(c.id));
        setEnrolledCourses(userCourses);
      } else {
        setEnrolledCourses([]);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (isAuthLoading || isLoading) {
    return (
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please sign in to view your classes.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/auth">Sign In</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (enrolledCourses.length === 0) {
    return (
      <div className="w-full mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="rounded-full bg-primary/10 p-6 mb-6">
            <BookOpen className="h-16 w-16 text-primary" />
          </div>
          <h1 className="font-headline text-4xl font-bold mb-4">No Classes Yet</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Start your learning journey by browsing and adding courses to your dashboard.
          </p>
          <Button asChild size="lg">
            <Link href="/classes">
              <Grid3x3 className="mr-2 h-5 w-5" />
              Browse All Courses
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto px-4 md:px-8 py-8">
      <div className="mb-8">
        <h1 className="font-headline text-4xl font-bold mb-2">My Classes</h1>
        <p className="text-muted-foreground text-lg">
          Quick access to all your enrolled courses and resources.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {enrolledCourses.map((course) => {
          const isComingSoon = course.comingSoon;
          const examDate = course.examDate ? new Date(course.examDate) : null;
          const isHonors = course.name.includes('Honors');

          return (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <CourseIcon iconName={course.icon} className="h-16 w-16" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-2xl mb-2 line-clamp-2">{course.name}</CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary">{course.subject}</Badge>
                      {isComingSoon && <Badge variant="outline">Coming Soon</Badge>}
                      {!isHonors && examDate && (
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          Exam: {format(examDate, 'MMM d, yyyy')}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-3 line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Quick Resources</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="justify-start h-auto py-3"
                      disabled={isComingSoon}
                    >
                      <Link href={`/classes/${course.slug}`}>
                        <BookOpen className="mr-2 h-4 w-4 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">Course Overview</div>
                          <div className="text-xs text-muted-foreground">View units & content</div>
                        </div>
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="justify-start h-auto py-3"
                      disabled={isComingSoon}
                    >
                      <Link href={`/classes/${course.slug}#flashcards`}>
                        <BookMarked className="mr-2 h-4 w-4 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">Flashcards</div>
                          <div className="text-xs text-muted-foreground">Study key terms</div>
                        </div>
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="justify-start h-auto py-3"
                      disabled={isComingSoon}
                    >
                      <Link href={`/classes/${course.slug}#study-guides`}>
                        <FileText className="mr-2 h-4 w-4 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">Study Guides</div>
                          <div className="text-xs text-muted-foreground">Review materials</div>
                        </div>
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="justify-start h-auto py-3"
                      disabled={isComingSoon}
                    >
                      <Link href={`/classes/${course.slug}#practice-tests`}>
                        <GraduationCap className="mr-2 h-4 w-4 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">Practice Tests</div>
                          <div className="text-xs text-muted-foreground">Test your knowledge</div>
                        </div>
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="justify-start h-auto py-3"
                      disabled={isComingSoon}
                    >
                      <Link href={`/classes/${course.slug}#questions`}>
                        <Lightbulb className="mr-2 h-4 w-4 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">Practice Questions</div>
                          <div className="text-xs text-muted-foreground">MCQ practice</div>
                        </div>
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="default"
                      className="justify-start h-auto py-3 sm:col-span-2"
                      disabled={isComingSoon}
                    >
                      <Link href={`/classes/${course.slug}`}>
                        <ExternalLink className="mr-2 h-4 w-4 shrink-0" />
                        <div className="text-left">
                          <div className="font-semibold text-sm">View Full Course</div>
                          <div className="text-xs opacity-90">Access all resources</div>
                        </div>
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Want to add more courses?</CardTitle>
          <CardDescription>
            Explore our full catalog of AP® and Honors courses to expand your learning.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/classes">
              <PlusCircle className="mr-2 h-5 w-5" />
              Browse All Courses
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
