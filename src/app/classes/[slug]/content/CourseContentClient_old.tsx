'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  GraduationCap, 
  FileText, 
  CreditCard, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Target,
  CheckCircle2,
  Play,
  ExternalLink,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';
import { CourseIcon } from '@/components/CourseIcon';
import type { Course } from '@/lib/courses';
import type { CourseContent, Unit, Question, Flashcard, Material, StudyGuide } from '@/lib/course-content-schema';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

interface CourseContentClientProps {
  course: Course;
  content: CourseContent;
}

export function CourseContentClient({ course, content }: CourseContentClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  // Get published units only
  const publishedUnits = content.units.filter(unit => unit.isPublished);

  // Calculate stats
  const totalFlashcards = publishedUnits.reduce((sum, unit) => sum + unit.flashcards.length, 0);
  const totalQuestions = publishedUnits.reduce((sum, unit) => sum + unit.questions.length, 0);
  const totalMaterials = publishedUnits.reduce((sum, unit) => sum + unit.materials.length, 0) + content.globalMaterials.length;
  const totalGuides = content.studyGuides.length;

  const toggleFlip = (cardId: string) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(cardId)) {
      newFlipped.delete(cardId);
    } else {
      newFlipped.add(cardId);
    }
    setFlippedCards(newFlipped);
  };

  // Get all questions from all units for Practice tab
  const allQuestions = publishedUnits.flatMap(unit => 
    unit.questions.map(q => ({ ...q, unitTitle: unit.title }))
  );

  // Filter questions
  const filteredQuestions = allQuestions.filter(q => {
    const matchesSearch = searchQuery === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    const matchesType = selectedType === 'all' || q.type === selectedType;
    return matchesSearch && matchesDifficulty && matchesType;
  });

  // Get all flashcards
  const allFlashcards = publishedUnits.flatMap(unit =>
    unit.flashcards.map(f => ({ ...f, unitTitle: unit.title }))
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href={`/classes/${course.slug}`} 
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-4 transition-colors group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {course.name}
          </Link>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-2xl shadow-lg">
                <CourseIcon iconName={course.icon} className="h-12 w-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  Course Content
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400">{course.name}</p>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-4 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <BookOpen className="h-6 w-6 mb-2 opacity-90" />
                  <p className="text-3xl font-bold mb-1">{publishedUnits.length}</p>
                  <p className="text-sm opacity-90">Units</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-4 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <CreditCard className="h-6 w-6 mb-2 opacity-90" />
                  <p className="text-3xl font-bold mb-1">{totalFlashcards}</p>
                  <p className="text-sm opacity-90">Flashcards</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 p-4 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <HelpCircle className="h-6 w-6 mb-2 opacity-90" />
                  <p className="text-3xl font-bold mb-1">{totalQuestions}</p>
                  <p className="text-sm opacity-90">Questions</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-4 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
                <div className="relative">
                  <GraduationCap className="h-6 w-6 mb-2 opacity-90" />
                  <p className="text-3xl font-bold mb-1">{totalGuides}</p>
                  <p className="text-sm opacity-90">Guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 h-auto gap-2 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <TabsTrigger value="overview" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg transition-all">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="units" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white rounded-lg transition-all">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Units</span>
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-cyan-600 data-[state=active]:text-white rounded-lg transition-all">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Practice</span>
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white rounded-lg transition-all">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Flashcards</span>
            </TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white rounded-lg transition-all">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Materials</span>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center justify-center gap-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-600 data-[state=active]:text-white rounded-lg transition-all">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Guides</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="border-2 border-purple-200 dark:border-purple-800 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {course.description}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-2 border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-500 text-white p-2 rounded-lg">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-purple-600">{publishedUnits.length}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Units</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Complete topic coverage</p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-2 border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-500 text-white p-2 rounded-lg">
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-green-600">{totalFlashcards}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Flashcards</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Study & memorize</p>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-2 border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500 text-white p-2 rounded-lg">
                        <HelpCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-blue-600">{totalQuestions}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Questions</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500">Practice & test</p>
                  </div>
                </div>

                {content.metadata?.examDate && (
                  <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-orange-600" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-gray-100">Exam Date</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(content.metadata.examDate).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Units Tab */}
          <TabsContent value="units" className="space-y-4">
            {publishedUnits.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">No units published yet. Check back soon!</p>
                </CardContent>
              </Card>
            ) : (
              <Accordion type="multiple" className="space-y-4">
                {publishedUnits.map((unit, index) => (
                  <Card key={unit.id} className="border-2 overflow-hidden">
                    <AccordionItem value={unit.id} className="border-0">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-center gap-4 text-left w-full">
                          <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{unit.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{unit.description}</p>
                            <div className="flex gap-3 mt-2 text-xs text-gray-500">
                              {unit.examWeight && (
                                <span className="flex items-center gap-1">
                                  <Target className="h-3 w-3" />
                                  {unit.examWeight}
                                </span>
                              )}
                              {unit.completionEstimate && (
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {unit.completionEstimate}
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                <CreditCard className="h-3 w-3" />
                                {unit.flashcards.length} cards
                              </span>
                              <span className="flex items-center gap-1">
                                <HelpCircle className="h-3 w-3" />
                                {unit.questions.length} questions
                              </span>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="mt-4 space-y-4">
                          {unit.content && (
                            <div className="prose dark:prose-invert max-w-none p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                              <div className="whitespace-pre-wrap">{unit.content}</div>
                            </div>
                          )}
                          
                          {unit.materials.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                Unit Materials
                              </h4>
                              <div className="grid gap-2">
                                {unit.materials.map(material => (
                                  <a
                                    key={material.id}
                                    href={material.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors"
                                  >
                                    <FileText className="h-4 w-4 text-blue-600" />
                                    <span className="flex-1">{material.name}</span>
                                    <ExternalLink className="h-4 w-4 text-gray-400" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                ))}
              </Accordion>
            )}
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-4">
            {/* Filters */}
            <Card className="p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <Input
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Difficulty</label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="all">All</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="all">All Types</option>
                    <option value="multiple-choice">Multiple Choice</option>
                    <option value="free-response">Free Response</option>
                    <option value="true-false">True/False</option>
                  </select>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Showing {filteredQuestions.length} of {allQuestions.length} questions
              </p>
            </Card>

            {/* Questions */}
            <div className="space-y-3">
              {filteredQuestions.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <HelpCircle className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">No questions match your filters</p>
                  </CardContent>
                </Card>
              ) : (
                filteredQuestions.map((q, idx) => (
                  <Card key={q.id} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex gap-2 mb-2">
                            <Badge variant={
                              q.difficulty === 'easy' ? 'default' : 
                              q.difficulty === 'hard' ? 'destructive' : 
                              'secondary'
                            }>
                              {q.difficulty}
                            </Badge>
                            <Badge variant="outline">{q.type}</Badge>
                            <Badge variant="outline">{q.points} pts</Badge>
                            <Badge variant="secondary">{q.unitTitle}</Badge>
                          </div>
                          <p className="font-medium text-lg mb-3">{q.question}</p>
                          
                          {q.type === 'multiple-choice' && q.options && (
                            <div className="space-y-2 mb-3">
                              {q.options.map((opt, optIdx) => (
                                <div 
                                  key={optIdx}
                                  className={`p-3 rounded-lg border ${
                                    optIdx.toString() === q.correctAnswer 
                                      ? 'bg-green-50 dark:bg-green-900/20 border-green-500' 
                                      : 'bg-gray-50 dark:bg-gray-800'
                                  }`}
                                >
                                  <span className="font-medium">{String.fromCharCode(65 + optIdx)}) </span>
                                  {opt}
                                  {optIdx.toString() === q.correctAnswer && (
                                    <CheckCircle2 className="inline-block ml-2 h-4 w-4 text-green-600" />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {q.explanation && (
                            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <p className="text-sm">
                                <span className="font-semibold">Explanation: </span>
                                {q.explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Flashcards Tab */}
          <TabsContent value="flashcards" className="space-y-4">
            {allFlashcards.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <CreditCard className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">No flashcards available yet</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allFlashcards.map((card) => (
                  <div
                    key={card.id}
                    className="relative group cursor-pointer"
                    onClick={() => toggleFlip(card.id)}
                  >
                    <div className={`relative h-48 transition-all duration-500 transform-gpu ${
                      flippedCards.has(card.id) ? '[transform:rotateY(180deg)]' : ''
                    }`} style={{ transformStyle: 'preserve-3d' }}>
                      {/* Front */}
                      <Card className="absolute inset-0 border-2 border-purple-200 dark:border-purple-800 [backface-visibility:hidden]">
                        <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                          <Badge className="mb-3">{card.unitTitle}</Badge>
                          <p className="font-bold text-lg">{card.term}</p>
                          <p className="text-xs text-muted-foreground mt-2">Click to reveal</p>
                        </CardContent>
                      </Card>
                      
                      {/* Back */}
                      <Card className="absolute inset-0 border-2 border-blue-200 dark:border-blue-800 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                          <p className="text-sm">{card.definition}</p>
                          {card.image && (
                            <img src={card.image} alt={card.term} className="mt-3 max-h-20 rounded" />
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials" className="space-y-4">
            {content.globalMaterials.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-purple-600" />
                  Course Materials
                </h3>
                <div className="grid gap-3">
                  {content.globalMaterials.map(material => (
                    <a
                      key={material.id}
                      href={material.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="border-2 hover:border-blue-500 transition-all hover:shadow-lg">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-lg p-3">
                            <FileText className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {material.name}
                            </h4>
                            {material.description && (
                              <p className="text-sm text-muted-foreground">
                                {material.description}
                              </p>
                            )}
                            <Badge variant="outline" className="mt-1">{material.type}</Badge>
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {publishedUnits.some(u => u.materials.length > 0) && (
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Unit-Specific Materials
                </h3>
                <Accordion type="multiple" className="space-y-3">
                  {publishedUnits.filter(u => u.materials.length > 0).map(unit => (
                    <AccordionItem key={unit.id} value={unit.id}>
                      <Card>
                        <AccordionTrigger className="px-4 py-3 hover:no-underline">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold">{unit.title}</span>
                            <Badge variant="outline">{unit.materials.length} materials</Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="space-y-2">
                            {unit.materials.map(material => (
                              <a
                                key={material.id}
                                href={material.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <FileText className="h-4 w-4 text-blue-600" />
                                <span className="flex-1">{material.name}</span>
                                <Badge variant="outline" className="text-xs">{material.type}</Badge>
                                <ExternalLink className="h-4 w-4 text-gray-400" />
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </Card>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {content.globalMaterials.length === 0 && !publishedUnits.some(u => u.materials.length > 0) && (
              <Card>
                <CardContent className="p-12 text-center">
                  <FileText className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">No materials available yet</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Study Guides Tab */}
          <TabsContent value="guides" className="space-y-4">
            {totalGuides === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <GraduationCap className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600">No study guides available yet</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {content.studyGuides.map(guide => (
                  <Card key={guide.id} className="border-2 hover:border-purple-500 transition-all overflow-hidden">
                    {guide.coverImage && (
                      <div className="h-32 bg-gradient-to-br from-purple-500 to-blue-500 overflow-hidden">
                        <img 
                          src={guide.coverImage} 
                          alt={guide.title}
                          className="w-full h-full object-cover opacity-50"
                        />
                      </div>
                    )}
                    <CardHeader className={!guide.coverImage ? 'bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20' : ''}>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-lg">{guide.title}</CardTitle>
                        <Badge variant={
                          guide.difficulty === 'beginner' ? 'default' :
                          guide.difficulty === 'advanced' ? 'destructive' :
                          'secondary'
                        }>
                          {guide.difficulty}
                        </Badge>
                      </div>
                      {guide.description && (
                        <CardDescription>{guide.description}</CardDescription>
                      )}
                      <div className="flex gap-2 mt-2">
                        {guide.estimatedTime && (
                          <Badge variant="outline" className="text-xs">
                            <Clock className="h-3 w-3 mr-1" />
                            {guide.estimatedTime}
                          </Badge>
                        )}
                        {guide.tags && guide.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="prose dark:prose-invert max-w-none text-sm">
                        <div className="whitespace-pre-wrap line-clamp-6">
                          {guide.content}
                        </div>
                      </div>
                      <Button className="w-full mt-4" variant="outline">
                        Read Full Guide
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
