'use client';

import React, { useState, useEffect } from "react";
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
  ExternalLink,
  GraduationCap,
  CreditCard,
  HelpCircle,
  Clock
} from 'lucide-react';
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { doc, onSnapshot, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toggleCourseAction } from "../actions";
import type { FullCourse } from '@/lib/courseUtils';
import type { CourseContent } from '@/lib/course-content-schema';
import type { CourseDeck } from '@/lib/course-deck-schema';
import type { CourseStudyGuide } from '@/lib/course-study-guides-schema';
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCourseDecks } from '@/app/dashboard/dev/course-content-manager/course-deck-actions';

export function CoursePageClient({ course }: { course: FullCourse }) {
    const { user } = useAuth();
    const { toast } = useToast();
    const [isAdded, setIsAdded] = useState(false);
    const [isToggling, setIsToggling] = useState(false);
    const [courseContent, setCourseContent] = useState<CourseContent | null>(null);
    const [courseDecks, setCourseDecks] = useState<CourseDeck[]>([]);
    const [studyGuides, setStudyGuides] = useState<CourseStudyGuide[]>([]);
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
                
                // Fetch course decks
                try {
                    const decks = await getCourseDecks(course.id);
                    setCourseDecks(decks);
                } catch (deckError) {
                    console.error('Error fetching course decks:', deckError);
                    setCourseDecks([]);
                }
                
                // Fetch study guides from courseStudyGuides collection
                try {
                    const guidesRef = collection(db, 'courseStudyGuides');
                    const q = query(
                        guidesRef, 
                        where('courseId', '==', course.id),
                        where('isPublished', '==', true)
                    );
                    const guidesSnap = await getDocs(q);
                    const guides: CourseStudyGuide[] = [];
                    guidesSnap.forEach((doc) => {
                        guides.push({ ...doc.data(), id: doc.id } as CourseStudyGuide);
                    });
                    setStudyGuides(guides);
                } catch (guideError) {
                    console.error('Error fetching study guides:', guideError);
                    setStudyGuides([]);
                }
            } catch (error) {
                console.error('Error fetching course content:', error);
            } finally {
                setIsLoadingContent(false);
            }
        }
        fetchContent();
    }, [course.id]);

    // Check if course is in user's list
    useEffect(() => {
        if (!user) {
            setIsAdded(false);
            return;
        }

        const userCoursesRef = doc(db, "users", user.uid);
        const unsubscribe = onSnapshot(userCoursesRef, (doc) => {
            if (doc.exists()) {
                const data = doc.data();
                const courses = data.addedCourses || [];
                setIsAdded(courses.includes(course.id));
            }
        });

        return () => unsubscribe();
    }, [user, course.id]);

    const handleToggleCourse = async () => {
        if (!user) return;
        
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
                description: "Failed to update course. Please try again.",
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
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-2xl">
                  <CourseIcon iconName={course.icon} className="h-12 w-12 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-1">
                    {course.name}
                  </h1>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
              </div>
              <div className="flex gap-3">
                {user && !course.comingSoon && (
                  <Button onClick={handleToggleCourse} disabled={isToggling} size="lg">
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <Link href={`/classes/${course.slug}/content?tab=practice`}>
                <Card className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-blue-500 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="bg-blue-500/10 p-4 rounded-xl">
                      <HelpCircle className="h-8 w-8 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Practice Questions</h3>
                      <p className="text-xs text-muted-foreground">MCQs & FRQs</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href={studyGuides.length > 0 ? `/resources/study-guide/${studyGuides[0]?.id}` : `/resources?tab=study-guides`}>
                <Card className={`cursor-pointer hover:shadow-xl transition-all border-2 hover:border-green-500 h-full ${studyGuides.length === 0 ? 'opacity-60' : ''}`}>
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="bg-green-500/10 p-4 rounded-xl">
                      <BookOpen className="h-8 w-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Study Guides</h3>
                      <p className="text-xs text-muted-foreground">{studyGuides.length} guide{studyGuides.length !== 1 ? 's' : ''}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link href={`/flashcards?course=${course.id}`}>
                <Card className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-pink-500 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="bg-pink-500/10 p-4 rounded-xl">
                      <CreditCard className="h-8 w-8 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Flashcards</h3>
                      <p className="text-xs text-muted-foreground">{courseDecks.length} decks</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Card className="cursor-pointer hover:shadow-xl transition-all border-2 opacity-60">
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="bg-purple-500/10 p-4 rounded-xl">
                    <TestTube className="h-8 w-8 text-purple-500" />
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
                    <div className="bg-orange-500/10 p-4 rounded-xl">
                      <Calculator className="h-8 w-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">Score Calculator</h3>
                      <p className="text-xs text-muted-foreground">Find out how to get a 5</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-8">
            {/* Study Materials Section */}
            {courseContent?.globalMaterials && courseContent.globalMaterials.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="h-6 w-6 text-purple-500" />
                  Study Materials
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courseContent.globalMaterials.map((material) => (
                    <a key={material.id} href={material.url} target="_blank" rel="noopener noreferrer">
                      <Card className="hover:shadow-lg transition-all border-2 hover:border-purple-500 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3">
                            <FileText className="h-6 w-6 text-purple-500 shrink-0" />
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

            {/* Study Guides Section - from courseStudyGuides collection */}
            {studyGuides.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-blue-500" />
                    Study Guides
                  </h2>
                  <Link href={`/resources?tab=study-guides`}>
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {studyGuides.slice(0, 6).map((guide) => (
                    <Link key={guide.id} href={`/resources/study-guide/${guide.id}`}>
                      <Card className="hover:shadow-lg transition-all border-2 hover:border-blue-500 h-full">
                        <CardContent className="p-5">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant="outline" 
                                className={
                                  guide.difficulty === 'beginner' ? 'bg-green-500/10 text-green-600 border-green-500/30' :
                                  guide.difficulty === 'advanced' ? 'bg-red-500/10 text-red-600 border-red-500/30' :
                                  'bg-yellow-500/10 text-yellow-600 border-yellow-500/30'
                                }
                              >
                                {guide.difficulty}
                              </Badge>
                              {guide.estimatedTime && (
                                <Badge variant="outline" className="text-muted-foreground">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {guide.estimatedTime}
                                </Badge>
                              )}
                            </div>
                            <h3 className="font-semibold line-clamp-2">{guide.title}</h3>
                            {guide.description && (
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {guide.description}
                              </p>
                            )}
                            {guide.tags && guide.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1">
                                {guide.tags.slice(0, 3).map((tag, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                {studyGuides.length > 6 && (
                  <div className="text-center mt-4">
                    <Link href={`/resources?tab=study-guides`}>
                      <Button variant="outline">
                        View All {studyGuides.length} Study Guides
                      </Button>
                    </Link>
                  </div>
                )}
              </section>
            )}

            {/* Units Section */}
            {publishedUnits.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Course Units</h2>
                <div className="space-y-6">
                  {publishedUnits.map((unit, index) => {
                    const unitDeckCount = courseDecks.filter(d => d.unitId === unit.id).length;
                    const unitCardCount = courseDecks
                      .filter(d => d.unitId === unit.id)
                      .reduce((sum, d) => sum + d.cards.length, 0);
                    
                    return (
                      <Card key={unit.id} className="border-2">
                        <CardHeader className="bg-muted/30">
                          <CardTitle className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="text-lg">{unit.title}</h3>
                                {unit.description && (
                                  <p className="text-sm font-normal text-muted-foreground mt-1">{unit.description}</p>
                                )}
                              </div>
                            </div>
                            {/* Quick Action Buttons */}
                            <div className="flex gap-2">
                              {unitCardCount > 0 && unitDeckCount === 1 && (
                                <Link href={`/resources/flashcards/study/${courseDecks.find(d => d.unitId === unit.id)?.id}`}>
                                  <Button variant="outline" size="sm">
                                    <CreditCard className="h-4 w-4 mr-2" />
                                    Study Flashcards ({unitCardCount} cards)
                                  </Button>
                                </Link>
                              )}
                              {unitCardCount > 0 && unitDeckCount > 1 && (
                                <Link href={`/classes/${course.slug}/content?tab=flashcards&unit=${unit.id}`}>
                                  <Button variant="outline" size="sm">
                                    <CreditCard className="h-4 w-4 mr-2" />
                                    View {unitDeckCount} Decks ({unitCardCount} cards)
                                  </Button>
                                </Link>
                              )}
                            {unit.questions && unit.questions.length > 0 && (
                              <Link href={`/classes/${course.slug}/content?tab=practice&unit=${unit.id}`}>
                                <Button variant="outline" size="sm">
                                  <HelpCircle className="h-4 w-4 mr-2" />
                                  Practice Test ({unit.questions.length})
                                </Button>
                              </Link>
                            )}
                          </div>
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
                                          <FileText className="h-5 w-5 text-purple-500 shrink-0" />
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
                          {unitCardCount > 0 && unitDeckCount === 1 && (
                            <div>
                              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                                <CreditCard className="h-4 w-4" />
                                Flashcards
                              </h3>
                              <Link href={`/resources/flashcards/study/${courseDecks.find(d => d.unitId === unit.id)?.id}`}>
                                <Card className="hover:shadow-lg transition-all border-2 hover:border-green-500">
                                  <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-3">
                                        <div className="bg-green-500/10 p-2 rounded-lg">
                                          <CreditCard className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-sm">Study {unitCardCount} Cards</h4>
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
                          {unitCardCount > 0 && unitDeckCount > 1 && (
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
                                        <div className="bg-green-500/10 p-2 rounded-lg">
                                          <CreditCard className="h-5 w-5 text-green-500" />
                                        </div>
                                        <div>
                                          <h4 className="font-semibold text-sm">Study {unitDeckCount} Deck{unitDeckCount !== 1 ? 's' : ''} ({unitCardCount} Cards)</h4>
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
                        </div>
                      </CardContent>
                    </Card>
                  );
                  })}
                </div>
              </section>
            )}

            {/* View More Content Button */}
            {!isLoadingContent && courseContent && (
              <div className="text-center py-8">
                <Link href={`/classes/${course.slug}/content`}>
                  <Button size="lg" className="shadow-lg">
                    <BookOpen className="mr-2 h-5 w-5" />
                    View All Course Content
                  </Button>
                </Link>
              </div>
            )}

            {/* FAQ Section */}
            {(courseContent?.faqs && courseContent.faqs.filter(faq => faq.isPublished).length > 0) || (course.exam_breakdown && course.exam_breakdown.length > 0) ? (
              <section className="mt-12">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-2">
                      Common questions about {course.name}
                    </p>
                  </div>
                  <Link href="/support">
                    <Button variant="outline" className="gap-2">
                      <HelpCircle className="h-4 w-4" />
                      Need More Help? Live Support
                    </Button>
                  </Link>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                  {/* Custom FAQs from course content - Only show published */}
                  {courseContent?.faqs && courseContent.faqs
                    .filter(faq => faq.isPublished)
                    .sort((a, b) => (a.order || 0) - (b.order || 0))
                    .map((faq) => (
                      <Card key={faq.id}>
                        <AccordionItem value={faq.id} className="border-none">
                          <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground whitespace-pre-wrap">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </Card>
                    ))
                  }

                  {/* Default Exam Format FAQ */}
                  {course.exam_breakdown && course.exam_breakdown.length > 0 && (
                    <Card>
                      <AccordionItem value="format" className="border-none">
                        <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline">
                          What is the {course.name} exam format?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="space-y-3">
                            {course.exam_breakdown.map((section, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border">
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
                    </Card>
                  )}
                </Accordion>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    );
}
