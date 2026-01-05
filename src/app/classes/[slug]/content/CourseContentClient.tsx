'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Clock,
  Target,
  CheckCircle2,
  ExternalLink,
  Search,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { CourseIcon } from '@/components/CourseIcon';
import type { Course } from '@/lib/courses';
import type { CourseContent, Unit, Question, Flashcard, Material, StudyGuide } from '@/lib/course-content-schema';
import type { CourseDeck } from '@/lib/course-deck-schema';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { MathRenderer } from '@/components/MathRenderer';
import { ContentRenderer } from '@/components/ContentRenderer';

interface CourseContentClientProps {
  course: Course;
  content: CourseContent;
  courseDecks: CourseDeck[];
}

export function CourseContentClient({ course, content, courseDecks }: CourseContentClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  // Get published units only
  const publishedUnits = content.units.filter(unit => unit.isPublished);

  // Calculate stats - use courseDecks instead of unit.flashcards
  const totalFlashcards = courseDecks.reduce((sum, deck) => sum + deck.cards.length, 0);
  const totalQuestions = publishedUnits.reduce((sum, unit) => sum + unit.questions.length, 0);
  const totalMaterials = publishedUnits.reduce((sum, unit) => sum + unit.materials.length, 0) + content.globalMaterials.length;
  const totalGuides = content.studyGuides.length;

  // Filter questions
  const allQuestions = publishedUnits.flatMap(unit =>
    unit.questions.map(q => ({ ...q, unitTitle: unit.title }))
  );
  
  const filteredQuestions = allQuestions.filter(q => {
    const matchesSearch = !searchQuery || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    const matchesType = selectedType === 'all' || q.type === selectedType;
    return matchesSearch && matchesDifficulty && matchesType;
  });

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Simple Header */}
        <div className="mb-8">
          <Link 
            href={`/classes/${course.slug}`} 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {course.name}
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-2xl">
              <CourseIcon iconName={course.icon} className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Course Content</h1>
              <p className="text-muted-foreground">{course.name}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{publishedUnits.length}</p>
                    <p className="text-xs text-muted-foreground">Units</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/10 p-2 rounded-lg">
                    <CreditCard className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{totalFlashcards}</p>
                    <p className="text-xs text-muted-foreground">Flashcards</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/10 p-2 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{totalQuestions}</p>
                    <p className="text-xs text-muted-foreground">Questions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500/10 p-2 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{totalGuides}</p>
                    <p className="text-xs text-muted-foreground">Guides</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 bg-card border-2">
            <TabsTrigger value="overview">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="units">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Units</span>
            </TabsTrigger>
            <TabsTrigger value="practice">
              <HelpCircle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Practice</span>
            </TabsTrigger>
            <TabsTrigger value="flashcards">
              <CreditCard className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Flashcards</span>
            </TabsTrigger>
            <TabsTrigger value="materials">
              <FileText className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Materials</span>
            </TabsTrigger>
            <TabsTrigger value="guides">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Guides</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Course Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                
                {content.metadata?.examDate && (
                  <div className="flex items-center gap-2 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <div>
                      <p className="font-semibold text-sm">Exam Date</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(content.metadata.examDate).toLocaleDateString('en-US', { 
                          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {publishedUnits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Units</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {publishedUnits.map((unit, index) => {
                      const unitDeckCount = courseDecks.filter(d => d.unitId === unit.id).length;
                      const unitCardCount = courseDecks
                        .filter(d => d.unitId === unit.id)
                        .reduce((sum, d) => sum + d.cards.length, 0);
                      
                      return (
                        <div key={unit.id} className="flex items-center gap-3 p-3 rounded-lg border">
                          <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold">{unit.title}</p>
                            <p className="text-xs text-muted-foreground">
                              {unitDeckCount} deck{unitDeckCount !== 1 ? 's' : ''} ({unitCardCount} cards) • {unit.questions.length} questions
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Units Tab */}
          <TabsContent value="units" className="space-y-4">
            {publishedUnits.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No units published yet</p>
                </CardContent>
              </Card>
            ) : (
              <Accordion type="single" collapsible className="space-y-4">
                {publishedUnits.map((unit, index) => {
                  const unitDeckCount = courseDecks.filter(d => d.unitId === unit.id).length;
                  const unitCardCount = courseDecks
                    .filter(d => d.unitId === unit.id)
                    .reduce((sum, d) => sum + d.cards.length, 0);
                  
                  return (
                    <Card key={unit.id}>
                      <AccordionItem value={unit.id} className="border-none">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center gap-4 text-left w-full">
                            <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{unit.title}</h3>
                              <p className="text-sm text-muted-foreground">{unit.description}</p>
                              <div className="flex gap-3 mt-2 text-xs text-muted-foreground">
                                {unit.examWeight && <span>Weight: {unit.examWeight}</span>}
                                {unit.completionEstimate && <span>Time: {unit.completionEstimate}</span>}
                                <span>{unitDeckCount} deck{unitDeckCount !== 1 ? 's' : ''} ({unitCardCount} cards)</span>
                                <span>{unit.questions.length} questions</span>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="mt-4 space-y-4">
                          {unit.content && (
                            <div className="prose dark:prose-invert max-w-none p-4 bg-muted/50 rounded-lg">
                              <div className="whitespace-pre-wrap">{unit.content}</div>
                            </div>
                          )}
                          
                          {unit.materials.length > 0 && (
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <FileText className="h-4 w-4" />
                                Materials
                              </h4>
                              <div className="grid gap-2">
                                {unit.materials.map(material => (
                                  <a
                                    key={material.id}
                                    href={material.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary transition-colors"
                                  >
                                    <FileText className="h-4 w-4 text-primary" />
                                    <span className="flex-1">{material.name}</span>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                );
                })}
              </Accordion>
            )}
          </TabsContent>

          {/* Practice Tab */}
          <TabsContent value="practice" className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search questions..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Difficulty</label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="w-full px-3 py-2 rounded-md border bg-background"
                    >
                      <option value="all">All Difficulties</option>
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
                      className="w-full px-3 py-2 rounded-md border bg-background"
                    >
                      <option value="all">All Types</option>
                      <option value="multiple-choice">Multiple Choice</option>
                      <option value="free-response">Free Response</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {filteredQuestions.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <HelpCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No questions match your filters</p>
                </CardContent>
              </Card>
            ) : (
              filteredQuestions.map((q, idx) => (
                <Card key={q.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex gap-2 mb-2 flex-wrap">
                          <Badge variant={q.difficulty === 'easy' ? 'default' : q.difficulty === 'hard' ? 'destructive' : 'secondary'}>
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
                                    ? 'bg-green-500/10 border-green-500/20' 
                                    : 'bg-muted/50'
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
                          <div className="mt-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
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
          </TabsContent>

          {/* Flashcards Tab */}
          <TabsContent value="flashcards" className="space-y-4">
            {courseDecks.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No flashcard decks available</p>
                </CardContent>
              </Card>
            ) : (
              <Accordion type="multiple" className="space-y-4">
                {courseDecks
                  .sort((a, b) => a.order - b.order)
                  .map((deck) => {
                    const unit = publishedUnits.find(u => u.id === deck.unitId);
                    return (
                      <AccordionItem 
                        key={deck.id} 
                        value={deck.id}
                        className="border rounded-lg bg-card hover:bg-accent/5 transition-colors"
                      >
                        <AccordionTrigger className="px-6 hover:no-underline">
                          <div className="flex items-center justify-between w-full pr-4">
                            <div className="flex items-center gap-3 text-left">
                              <CreditCard className="h-5 w-5 text-primary" />
                              <div>
                                <h3 className="font-semibold text-lg">{deck.title}</h3>
                                {deck.description && (
                                  <p className="text-sm text-muted-foreground">{deck.description}</p>
                                )}
                                {unit && (
                                  <Badge variant="outline" className="mt-1">
                                    Unit {deck.unitNumber}: {unit.title}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">
                                {deck.cards.length} card{deck.cards.length !== 1 ? 's' : ''}
                              </Badge>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="mb-4 flex justify-end">
                            <Link href={`/resources/flashcards/study/${deck.id}`}>
                              <Button className="bg-green-600 hover:bg-green-700">
                                <Sparkles className="h-4 w-4 mr-2" />
                                Study This Deck
                              </Button>
                            </Link>
                          </div>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            {deck.cards.map((card) => (
                              <div
                                key={card.id}
                                className="relative group cursor-pointer"
                                onClick={() => toggleFlip(`${deck.id}-${card.id}`)}
                              >
                                <div className={`relative h-48 transition-all duration-500 transform-gpu ${
                                  flippedCards.has(`${deck.id}-${card.id}`) ? '[transform:rotateY(180deg)]' : ''
                                }`} style={{ transformStyle: 'preserve-3d' }}>
                                  {/* Front */}
                                  <Card className="absolute inset-0 border-2 [backface-visibility:hidden]">
                                    <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                                      <Badge className="mb-3">{deck.title}</Badge>
                                      <div className="font-bold text-lg">
                                        <MathRenderer content={card.term} />
                                      </div>
                                      <p className="text-xs text-muted-foreground mt-2">Click to reveal</p>
                                    </CardContent>
                                  </Card>
                                  
                                  {/* Back */}
                                  <Card className="absolute inset-0 border-2 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                                      <div className="text-sm">
                                        <MathRenderer content={card.definition} />
                                      </div>
                                      {card.image && (
                                        <img src={card.image} alt={card.term} className="mt-3 max-h-20 rounded" />
                                      )}
                                    </CardContent>
                                  </Card>
                                </div>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
              </Accordion>
            )}
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials" className="space-y-6">
            {content.globalMaterials.length > 0 && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Course Materials</h3>
                <div className="grid gap-3">
                  {content.globalMaterials.map(material => (
                    <a
                      key={material.id}
                      href={material.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="hover:border-primary transition-colors">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold group-hover:text-primary transition-colors">
                              {material.name}
                            </h4>
                            {material.description && (
                              <p className="text-sm text-muted-foreground">{material.description}</p>
                            )}
                            <Badge variant="outline" className="mt-1">{material.type}</Badge>
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {publishedUnits.some(u => u.materials.length > 0) && (
              <div>
                <h3 className="font-semibold text-lg mb-3">Unit Materials</h3>
                <Accordion type="single" collapsible className="space-y-3">
                  {publishedUnits.filter(u => u.materials.length > 0).map(unit => (
                    <Card key={unit.id}>
                      <AccordionItem value={unit.id} className="border-none">
                        <AccordionTrigger className="px-4 py-3 hover:no-underline">
                          <span className="font-semibold">{unit.title}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                          <div className="space-y-2">
                            {unit.materials.map(material => (
                              <a
                                key={material.id}
                                href={material.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 p-3 rounded-lg border hover:border-primary transition-colors"
                              >
                                <FileText className="h-4 w-4 text-primary" />
                                <span className="flex-1">{material.name}</span>
                                <ExternalLink className="h-4 w-4 text-muted-foreground" />
                              </a>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Card>
                  ))}
                </Accordion>
              </div>
            )}
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides" className="space-y-4">
            {content.studyGuides.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">No study guides available</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {content.studyGuides.map(guide => (
                  <Card key={guide.id} className="overflow-hidden">
                    {guide.coverImage && (
                      <img 
                        src={guide.coverImage} 
                        alt={guide.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl">{guide.title}</CardTitle>
                        {guide.difficulty && (
                          <Badge variant={
                            guide.difficulty === 'beginner' ? 'default' :
                            guide.difficulty === 'intermediate' ? 'secondary' : 
                            'destructive'
                          }>
                            {guide.difficulty}
                          </Badge>
                        )}
                      </div>
                      {guide.description && (
                        <p className="text-sm text-muted-foreground mt-2">{guide.description}</p>
                      )}
                      {guide.estimatedTime && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{guide.estimatedTime}</span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent>
                      <div className="prose dark:prose-invert max-w-none">
                        <ContentRenderer content={guide.content} />
                      </div>
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
