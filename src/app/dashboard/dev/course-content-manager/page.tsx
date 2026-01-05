'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Loader2, 
  BookOpen, 
  Layers, 
  HelpCircle, 
  CreditCard, 
  FileText, 
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  RefreshCw,
  ClipboardCheck
} from 'lucide-react';
import { courses } from '@/lib/courses';
import { CourseIcon } from '@/components/CourseIcon';
import { motion, AnimatePresence } from 'framer-motion';
import type { CourseContent } from '@/lib/course-content-schema';
import { getCourseContent, initializeCourseContent } from './actions';
import { getCourseDecks } from './course-deck-actions';
import type { CourseDeck } from '@/lib/course-deck-schema';
import { getCourseQuestions } from './course-questions-actions';
import type { CourseQuestion } from '@/lib/course-questions-schema';
import { getCourseMaterials } from './course-materials-actions';
import type { CourseMaterial } from '@/lib/course-materials-schema';
import { getCourseStudyGuides } from './course-study-guides-actions';
import type { CourseStudyGuide } from '@/lib/course-study-guides-schema';
import { getCourseFAQs } from './course-faq-actions';
import type { CourseFAQ } from '@/lib/course-faq-schema';

// Import tab components (we'll create these next)
import { MetadataTab } from './tabs/MetadataTab';
import { UnitsTab } from './tabs/UnitsTab';
import { QuestionsTab } from './tabs/QuestionsTab';
import { FlashcardsTab } from './tabs/FlashcardsTab';
import { MaterialsTab } from './tabs/MaterialsTab';
import { StudyGuidesTab } from './tabs/StudyGuidesTab';
import { FAQTab } from './tabs/FAQTab';

export default function CourseContentManagerPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Load from localStorage on mount
  const [selectedCourseId, setSelectedCourseId] = useState<string>('');
  const [courseContent, setCourseContent] = useState<CourseContent | null>(null);
  const [courseDecks, setCourseDecks] = useState<CourseDeck[]>([]);
  const [courseQuestions, setCourseQuestions] = useState<CourseQuestion[]>([]);
  const [courseMaterials, setCourseMaterials] = useState<CourseMaterial[]>([]);
  const [courseStudyGuides, setCourseStudyGuides] = useState<CourseStudyGuide[]>([]);
  const [courseFAQs, setCourseFAQs] = useState<CourseFAQ[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('metadata');

  // Load saved state from localStorage on mount
  useEffect(() => {
    const savedCourseId = localStorage.getItem('courseContentManager.selectedCourse');
    const savedTab = localStorage.getItem('courseContentManager.activeTab');
    
    if (savedCourseId) {
      setSelectedCourseId(savedCourseId);
    }
    if (savedTab) {
      setActiveTab(savedTab);
    }
  }, []);

  // Save to localStorage when course or tab changes
  useEffect(() => {
    if (selectedCourseId) {
      localStorage.setItem('courseContentManager.selectedCourse', selectedCourseId);
    }
  }, [selectedCourseId]);

  useEffect(() => {
    localStorage.setItem('courseContentManager.activeTab', activeTab);
  }, [activeTab]);

  const selectedCourse = useMemo(() => courses.find(c => c.id === selectedCourseId), [selectedCourseId]);

  // Fetch course content when a course is selected
  const fetchContent = useCallback(async (courseId: string) => {
    if (!courseId) {
      setCourseContent(null);
      setCourseDecks([]);
      setCourseQuestions([]);
      setCourseMaterials([]);
      setCourseStudyGuides([]);
      setCourseFAQs([]);
      return;
    }

    setIsLoading(true);
    try {
      console.log('Fetching content for course:', courseId);
      const content = await getCourseContent(courseId);
      
      // Load data from all separate collections in parallel
      const [decks, questions, materials, studyGuides, faqs] = await Promise.allSettled([
        getCourseDecks(courseId),
        getCourseQuestions(courseId),
        getCourseMaterials(courseId),
        getCourseStudyGuides(courseId),
        getCourseFAQs(courseId)
      ]);

      // Set data with error handling for each collection
      setCourseDecks(decks.status === 'fulfilled' ? decks.value : []);
      setCourseQuestions(questions.status === 'fulfilled' ? questions.value : []);
      setCourseMaterials(materials.status === 'fulfilled' ? materials.value : []);
      setCourseStudyGuides(studyGuides.status === 'fulfilled' ? studyGuides.value : []);
      setCourseFAQs(faqs.status === 'fulfilled' ? faqs.value : []);

      // Log any failures
      if (decks.status === 'rejected') console.error('Failed to load decks:', decks.reason);
      if (questions.status === 'rejected') console.error('Failed to load questions:', questions.reason);
      if (materials.status === 'rejected') console.error('Failed to load materials:', materials.reason);
      if (studyGuides.status === 'rejected') console.error('Failed to load study guides:', studyGuides.reason);
      if (faqs.status === 'rejected') console.error('Failed to load FAQs:', faqs.reason);
      
      if (!content) {
        // Initialize if doesn't exist
        console.log('No content found, initializing...');
        const course = courses.find(c => c.id === courseId);
        if (course) {
          try {
            await initializeCourseContent(courseId, {
              id: course.id,
              slug: course.slug,
              name: course.name,
              description: course.description,
              subject: course.subject,
              examDate: course.examDate,
              icon: course.icon,
              examBreakdown: [],
              isHonors: course.name.includes('Honors'),
              prerequisites: [],
              tags: [],
              updatedAt: new Date().toISOString()
            });
            
            console.log('Course initialized, fetching again...');
            const newContent = await getCourseContent(courseId);
            setCourseContent(newContent);
            toast({ title: "Course Initialized ✨", description: "Created new course content structure." });
          } catch (initError: any) {
            console.error('Initialization error:', initError);
            toast({ 
              variant: 'destructive', 
              title: 'Initialization Failed', 
              description: initError.message || 'Could not initialize course content.'
            });
          }
        } else {
          toast({ variant: 'destructive', title: 'Error', description: 'Course not found in courses list.' });
        }
      } else {
        console.log('Content loaded successfully');
        setCourseContent(content);
      }
    } catch (error: any) {
      console.error('Fetch error:', error);
      toast({ 
        variant: 'destructive', 
        title: 'Failed to Fetch', 
        description: error.message || 'Could not load course content.'
      });
      setCourseContent(null);
      setCourseDecks([]);
      setCourseQuestions([]);
      setCourseMaterials([]);
      setCourseStudyGuides([]);
      setCourseFAQs([]);
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchContent(selectedCourseId);
  }, [selectedCourseId, fetchContent]);

  // Refresh callback for tabs (accepts optional courseId for compatibility)
  const handleRefresh = useCallback((courseIdParam?: string) => {
    const idToUse = courseIdParam || selectedCourseId;
    if (idToUse) {
      fetchContent(idToUse);
    }
  }, [selectedCourseId, fetchContent]);

  const stats = courseContent?.stats;
  const totalUnits = courseContent?.units?.length || 0;
  const totalStudyGuides = courseStudyGuides.length;
  const totalFAQs = courseFAQs.length;
  const totalQuestions = courseQuestions.length;
  const totalFlashcards = courseDecks.reduce((sum, deck) => sum + deck.cards.length, 0);
  const totalMaterials = courseMaterials.length;

  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="font-headline text-5xl font-bold flex items-center gap-3 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <Sparkles className="h-10 w-10 text-purple-500" />
              Course Content Manager
            </h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Build comprehensive course content: units, questions, flashcards, materials & more
            </p>
          </div>
          {selectedCourseId && (
            <Button
              onClick={() => fetchContent(selectedCourseId)}
              variant="outline"
              size="sm"
              disabled={isLoading}
              className="gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh Data
            </Button>
          )}
        </div>

        {/* Course Selector */}
        <Card className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border-2">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-sm font-medium mb-2 block">Select Course</label>
                <Select value={selectedCourseId} onValueChange={setSelectedCourseId}>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Choose a course to edit..." />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        <div className="flex items-center gap-3">
                          <CourseIcon iconName={course.icon} className="h-5 w-5" />
                          <span>{course.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCourse && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-lg border border-primary/20"
                >
                  <CourseIcon iconName={selectedCourse.icon} className="h-8 w-8" />
                  <div>
                    <p className="text-sm text-muted-foreground">Editing</p>
                    <p className="font-semibold text-lg">{selectedCourse.name}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.header>

      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}

      {/* Stats Overview */}
      {!isLoading && courseContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <Layers className="h-8 w-8 text-blue-500 mb-2" />
              <p className="text-3xl font-bold">{totalUnits}</p>
              <p className="text-sm text-muted-foreground">Units</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <HelpCircle className="h-8 w-8 text-purple-500 mb-2" />
              <p className="text-3xl font-bold">{totalQuestions}</p>
              <p className="text-sm text-muted-foreground">Questions</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 border-pink-500/20">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <CreditCard className="h-8 w-8 text-pink-500 mb-2" />
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold">{courseDecks.length}</p>
                <p className="text-lg text-muted-foreground">decks</p>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {totalFlashcards} cards total
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <FileText className="h-8 w-8 text-green-500 mb-2" />
              <p className="text-3xl font-bold">{totalMaterials}</p>
              <p className="text-sm text-muted-foreground">Materials</p>
            </CardContent>
          </Card>

          {/* STUDY GUIDES STAT - DO NOT DUPLICATE */}
          <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <GraduationCap className="h-8 w-8 text-orange-500 mb-2" />
              <p className="text-3xl font-bold">{totalStudyGuides}</p>
              <p className="text-sm text-muted-foreground">Study Guides</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-cyan-500/20">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <CheckCircle2 className="h-8 w-8 text-cyan-500 mb-2" />
              <p className="text-3xl font-bold">{courseContent.units.filter(u => u.isPublished).length}</p>
              <p className="text-sm text-muted-foreground">Published</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border-indigo-500/20">
            <CardContent className="p-4 flex flex-col items-center text-center">
              <HelpCircle className="h-8 w-8 text-indigo-500 mb-2" />
              <p className="text-3xl font-bold">{totalFAQs}</p>
              <p className="text-sm text-muted-foreground">FAQs</p>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Main Content Tabs */}
      {!isLoading && courseContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 h-auto gap-2 bg-muted/30 p-2">
              <TabsTrigger value="metadata" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-500">
                <BookOpen className="h-4 w-4 mr-2" />
                Course Info
              </TabsTrigger>
              <TabsTrigger value="units" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-500">
                <Layers className="h-4 w-4 mr-2" />
                Units
              </TabsTrigger>
              <TabsTrigger value="questions" className="data-[state=active]:bg-pink-500/20 data-[state=active]:text-pink-500">
                <HelpCircle className="h-4 w-4 mr-2" />
                Questions
              </TabsTrigger>
              <TabsTrigger value="flashcards" className="data-[state=active]:bg-green-500/20 data-[state=active]:text-green-500">
                <CreditCard className="h-4 w-4 mr-2" />
                Flashcards
              </TabsTrigger>
              <TabsTrigger value="materials" className="data-[state=active]:bg-orange-500/20 data-[state=active]:text-orange-500">
                <FileText className="h-4 w-4 mr-2" />
                Materials
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-500">
                <GraduationCap className="h-4 w-4 mr-2" />
                Study Guides
              </TabsTrigger>
              <TabsTrigger value="faq" className="data-[state=active]:bg-indigo-500/20 data-[state=active]:text-indigo-500">
                <HelpCircle className="h-4 w-4 mr-2" />
                FAQ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="metadata" className="space-y-4">
              <MetadataTab courseId={selectedCourseId} content={courseContent} onUpdate={handleRefresh} />
            </TabsContent>

            <TabsContent value="units" className="space-y-4">
              <UnitsTab courseId={selectedCourseId} content={courseContent} onUpdate={handleRefresh} />
            </TabsContent>

            <TabsContent value="questions" className="space-y-4">
              <QuestionsTab 
                courseId={selectedCourseId} 
                content={courseContent} 
                questions={courseQuestions}
                onUpdate={handleRefresh} 
              />
            </TabsContent>

            <TabsContent value="flashcards" className="space-y-4">
              <FlashcardsTab courseId={selectedCourseId} content={courseContent} onUpdate={handleRefresh} />
            </TabsContent>

            <TabsContent value="materials" className="space-y-4">
              <MaterialsTab 
                courseId={selectedCourseId} 
                content={courseContent} 
                materials={courseMaterials}
                onUpdate={handleRefresh} 
              />
            </TabsContent>

            <TabsContent value="guides" className="space-y-4">
              <StudyGuidesTab 
                courseId={selectedCourseId} 
                content={courseContent} 
                studyGuides={courseStudyGuides}
                onUpdate={handleRefresh} 
              />
            </TabsContent>

            <TabsContent value="faq" className="space-y-4">
              <FAQTab 
                courseId={selectedCourseId}
                faqs={courseFAQs} 
                onUpdate={handleRefresh} 
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      )}

      {/* Empty State */}
      {!isLoading && !selectedCourseId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div className="h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
            <BookOpen className="h-16 w-16 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold mb-2">No Course Selected</h2>
          <p className="text-muted-foreground max-w-md">
            Select a course from the dropdown above to start managing its content, units, questions, and more.
          </p>
        </motion.div>
      )}
    </div>
  );
}
