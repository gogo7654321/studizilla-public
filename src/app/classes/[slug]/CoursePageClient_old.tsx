
'use client';

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseIcon } from "@/components/CourseIcon";
import { CountdownTimer } from "./CountdownTimer";
import { HonorsExamSetter } from "./HonorsExamSetter";
import { 
  TestTube, 
  PlusCircle, 
  Check, 
  Loader2, 
  BookOpen, 
  FileText,
  Calculator,
  Play,
  ExternalLink,
  GraduationCap,
  CreditCard,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { doc, onSnapshot, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toggleCourseAction } from "../actions";
import type { FullCourse } from '@/lib/courseUtils';
import type { CourseContent } from '@/lib/course-content-schema';
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export function CoursePageClient({ course }: { course: FullCourse }) {
    const { user } = useAuth();
    const { toast } = useToast();
    const [isAdded, setIsAdded] = useState(false);
    const [isToggling, setIsToggling] = useState(false);
    const [courseContent, setCourseContent] = useState<CourseContent | null>(null);
    const [isLoadingContent, setIsLoadingContent] = useState(true);

    // Fetch course content
    useEffect(() => {
        async function fetchContent() {
            try {
                const docRef = doc(db, 'courseContent', course.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setCourseContent(docSnap.data() as CourseContent);
                }
            } catch (error) {
                console.error('Error fetching course content:', error);
            } finally {
                setIsLoadingContent(false);
            }
        }
        fetchContent();
    }, [course.id]);

    useEffect(() => {
        if (!user) return;
        const userDocRef = doc(db, 'users', user.uid);
        const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
            if (docSnap.exists()) {
                const addedCourses = docSnap.data().addedCourses || [];
                setIsAdded(addedCourses.includes(course.id));
            }
        });
        return () => unsubscribe();
    }, [user, course.id]);
    
    if (!course) {
      notFound();
    }
    
    const handleToggleCourse = async () => {
        if (!user) {
            toast({ title: "Please log in to add courses." });
            return;
        }
        setIsToggling(true);
        try {
            await toggleCourseAction(user.uid, course.id);
            toast({
                title: isAdded ? "Course Removed" : "Course Added!",
                description: isAdded ? `${course.name} has been removed from your dashboard.` : `${course.name} has been added to your dashboard.`,
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: "Error",
                description: "Could not update your courses. Please try again.",
            });
        } finally {
            setIsToggling(false);
        }
    };
    
    const isHonors = course.name.includes("Honors");
    const publishedUnits = courseContent?.units.filter(u => u.isPublished) || [];
  
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-7xl">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-2xl shadow-lg">
                  <CourseIcon iconName={course.icon} className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1">
                    {course.name}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400">{course.description}</p>
                </div>
              </div>
              <div className="flex gap-3">
                {user && !course.comingSoon && (
                  <Button onClick={handleToggleCourse} disabled={isToggling} size="lg" className="shadow-lg">
                      {isToggling ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : isAdded ? (
                          <Check className="mr-2 h-5 w-5" />
                      ) : (
                          <PlusCircle className="mr-2 h-5 w-5" />
                      )}
                      {isAdded ? "Added" : "Add to Dashboard"}
                  </Button>
                )}
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              {isHonors ? (
                <HonorsExamSetter course={course} />
              ) : (
                <CountdownTimer examDate={course.examDate} />
              )}
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <Link href={`/classes/${course.slug}/content?tab=practice`}>
                <Card className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-blue-500 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl">
                      <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Multiple Choice Practice</h3>
                      <p className="text-xs text-muted-foreground">Free AP questions</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href={`/classes/${course.slug}/content?tab=practice`}>
                <Card className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-green-500 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl">
                      <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Free Response Practice</h3>
                      <p className="text-xs text-muted-foreground">FRQ questions</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Card className="cursor-pointer hover:shadow-xl transition-all border-2 opacity-60">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl">
                    <TestTube className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Mock Exam</h3>
                    <p className="text-xs text-muted-foreground">Coming soon</p>
                  </div>
                </CardContent>
              </Card>

              <Link href={`/classes/${course.slug}/score-calculator`}>
                <Card className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-orange-500 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-xl">
                      <Calculator className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">AP Score Calculator</h3>
                      <p className="text-xs text-muted-foreground">Find out how to get a 5</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            {/* Cram Sheets Section */}
            {courseContent?.globalMaterials && courseContent.globalMaterials.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-purple-600" />
                  Study Materials
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courseContent.globalMaterials.map((material) => (
                    <a key={material.id} href={material.url} target="_blank" rel="noopener noreferrer">
                      <Card className="hover:shadow-lg transition-all border-2 hover:border-purple-500 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3">
                            <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400 shrink-0" />
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold mb-2 line-clamp-2">{material.name}</h3>
                              {material.description && (
                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                  {material.description}
                                </p>
                              )}
                              <Button size="sm" variant="outline" className="w-full">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Material
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Study Guides Section */}
            {courseContent?.studyGuides && courseContent.studyGuides.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                  Study Guides
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {courseContent.studyGuides.map((guide) => (
                    <Link key={guide.id} href={`/classes/${course.slug}/content?tab=guides`}>
                      <Card className="hover:shadow-lg transition-all border-2 hover:border-blue-500">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3">
                            {guide.coverImage ? (
                              <img 
                                src={guide.coverImage} 
                                alt={guide.title}
                                className="w-16 h-16 object-cover rounded-lg"
                              />
                            ) : (
                              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                              </div>
                            )}
                            <div className="flex-1">
                              <h3 className="font-semibold mb-2">{guide.title}</h3>
                              {guide.description && (
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                  {guide.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Units Section */}
            {publishedUnits.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Course Units</h2>
                <div className="space-y-6">
                  {publishedUnits.map((unit, index) => (
                    <Card key={unit.id} className="border-2">
                      <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10">
                        <CardTitle className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <span>{unit.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          {/* Unit Materials */}
                          {unit.materials && unit.materials.length > 0 && (
                            <div>
                              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                Materials
                              </h3>
                              <div className="grid md:grid-cols-2 gap-3">
                                {unit.materials.map((material) => (
                                  <a key={material.id} href={material.url} target="_blank" rel="noopener noreferrer">
                                    <Card className="hover:shadow-lg transition-all border hover:border-purple-500">
                                      <CardContent className="p-4">
                                        <div className="flex items-start gap-3">
                                          <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400 shrink-0" />
                                          <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-sm mb-1 line-clamp-1">{material.name}</h4>
                                            {material.description && (
                                              <p className="text-xs text-muted-foreground line-clamp-2">
                                                {material.description}
                                              </p>
                                            )}
                                          </div>
                                          <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Flashcards */}
                          {unit.flashcards && unit.flashcards.length > 0 && (
                            <div>
                              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                                <CreditCard className="h-4 w-4" />
                                Flashcards
                              </h3>
                              <Link href={`/classes/${course.slug}/content?tab=flashcards&unit=${unit.id}`}>
                                <Card className="hover:shadow-lg transition-all border-2 hover:border-green-500">
                                  <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                                          <CreditCard className="h-5 w-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-sm">Study {unit.flashcards.length} Flashcards</h4>
                                          <p className="text-xs text-muted-foreground">Review key concepts</p>
                                        </div>
                                      </div>
                                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                  </CardContent>
                                </Card>
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Practice Section */}
                        {unit.questions && unit.questions.length > 0 && (
                          <div>
                            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                              <HelpCircle className="h-4 w-4" />
                              Practice
                            </h3>
                            <Link href={`/classes/${course.slug}/content?tab=practice&unit=${unit.id}`}>
                              <Button variant="outline" className="w-full justify-between">
                                <span>Practice with {unit.questions.length} questions</span>
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* View More Content Button */}
            {!isLoadingContent && courseContent && (
              <div className="text-center py-8">
                <Link href={`/classes/${course.slug}/content`}>
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg">
                    <BookOpen className="mr-2 h-5 w-5" />
                    View All Course Content
                  </Button>
                </Link>
              </div>
            )}

            {/* FAQ Section */}
            {course.exam_breakdown && course.exam_breakdown.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Question & Answer</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  If you have any other questions - please get in touch
                </p>
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="format">
                    <AccordionTrigger className="text-left font-semibold">
                      What is the {course.name} exam format?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      <div className="space-y-3">
                        {course.exam_breakdown.map((section, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <span className="font-medium">{section.section}</span>
                            <div className="flex gap-4 text-sm">
                              <span>{section.questions}</span>
                              <span>{section.time}</span>
                              <span className="font-semibold">{section.weight}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="study">
                    <AccordionTrigger className="text-left font-semibold">
                      How do I study for {course.name}?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      Start by reviewing the course content, working through practice questions, and using flashcards. 
                      Take advantage of our study guides and practice tests to reinforce your understanding.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="units">
                    <AccordionTrigger className="text-left font-semibold">
                      What units are on {course.name}?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      The course covers {publishedUnits.length} major units. Check out the course content section above 
                      to see all units with their study materials and practice questions.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="what">
                    <AccordionTrigger className="text-left font-semibold">
                      What is {course.name}?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                      {course.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </section>
            )}
          </div>
        </div>
      </div>
    );
}
