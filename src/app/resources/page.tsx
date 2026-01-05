'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Library, 
  BookOpen, 
  CreditCard, 
  FileQuestion, 
  Search,
  Clock,
  GraduationCap,
  ChevronRight,
  Loader2,
  User,
  History,
  Star,
  FolderOpen,
  Sparkles,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { courses } from '@/lib/courses';
import { collection, query, where, getDocs, orderBy, limit, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import type { CourseStudyGuide } from '@/lib/course-study-guides-schema';
import FlashcardsBrowsePage from './flashcards/FlashcardsPage';
import { MathRenderer } from '@/components/MathRenderer';

// Types
interface StudyGuideWithCourse extends CourseStudyGuide {
  courseName: string;
  courseSlug: string;
}

interface RecentDeck {
  id: string;
  title: string;
  description?: string;
  cardCount: number;
  courseName?: string;
  lastOpened?: Date;
}

interface UserDeck {
  id: string;
  title: string;
  description?: string;
  cards: any[];
  courseId?: string;
  courseName?: string;
  isPublic?: boolean;
}

export default function ResourcesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user } = useAuth();
  const initialTab = searchParams.get('tab') || 'my-resources';
  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Study guides state
  const [studyGuides, setStudyGuides] = useState<StudyGuideWithCourse[]>([]);
  const [isLoadingGuides, setIsLoadingGuides] = useState(true);
  
  // My Resources state
  const [recentDecks, setRecentDecks] = useState<RecentDeck[]>([]);
  const [userDecks, setUserDecks] = useState<UserDeck[]>([]);
  const [isLoadingMyResources, setIsLoadingMyResources] = useState(true);

  // Update URL when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(`/resources?tab=${value}`, { scroll: false });
  };

  // Fetch user's resources (recently opened decks, owned decks)
  useEffect(() => {
    async function fetchMyResources() {
      if (!user) {
        setIsLoadingMyResources(false);
        return;
      }
      
      try {
        setIsLoadingMyResources(true);
        
        // Fetch recently opened decks
        const recentDecksRef = collection(db, 'users', user.uid, 'recentlyOpenedDecks');
        const recentQuery = query(recentDecksRef, orderBy('lastOpened', 'desc'), limit(10));
        const recentSnapshot = await getDocs(recentQuery);
        
        const recentDecksList: RecentDeck[] = [];
        for (const recentDoc of recentSnapshot.docs) {
          const recentData = recentDoc.data();
          try {
            const deckRef = doc(db, 'courseDecks', recentData.deckId);
            const deckSnap = await getDoc(deckRef);
            if (deckSnap.exists()) {
              const deckData = deckSnap.data();
              const course = deckData.courseId ? courses.find(c => c.id === deckData.courseId) : null;
              recentDecksList.push({
                id: deckSnap.id,
                title: deckData.title,
                description: deckData.description,
                cardCount: deckData.cards?.length || 0,
                courseName: course?.name || 'Personal',
                lastOpened: recentData.lastOpened?.toDate()
              });
            }
          } catch (err) {
            console.error('Error loading recent deck:', err);
          }
        }
        setRecentDecks(recentDecksList);
        
        // Fetch user's own decks
        const userDecksRef = collection(db, 'courseDecks');
        const userDecksQuery = query(userDecksRef, where('ownerId', '==', user.uid));
        const userDecksSnapshot = await getDocs(userDecksQuery);
        
        const userDecksList: UserDeck[] = userDecksSnapshot.docs
          .filter(doc => !doc.data().trashedAt)
          .map(doc => {
            const data = doc.data();
            const course = data.courseId ? courses.find(c => c.id === data.courseId) : null;
            return {
              id: doc.id,
              title: data.title,
              description: data.description,
              cards: data.cards || [],
              courseId: data.courseId,
              courseName: course?.name || 'Personal',
              isPublic: data.isPublic !== false
            };
          });
        setUserDecks(userDecksList);
        
      } catch (error) {
        console.error('Error fetching my resources:', error);
      } finally {
        setIsLoadingMyResources(false);
      }
    }
    
    fetchMyResources();
  }, [user]);

  // Fetch all published study guides
  useEffect(() => {
    async function fetchStudyGuides() {
      try {
        setIsLoadingGuides(true);
        const guidesRef = collection(db, 'courseStudyGuides');
        const q = query(guidesRef, where('isPublished', '==', true));
        const snapshot = await getDocs(q);
        
        const guides: StudyGuideWithCourse[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data() as CourseStudyGuide;
          const course = courses.find(c => c.id === data.courseId);
          if (course) {
            guides.push({
              ...data,
              id: doc.id,
              courseName: course.name,
              courseSlug: course.slug
            });
          }
        });
        
        // Sort by course name, then by title
        guides.sort((a, b) => {
          const courseCompare = a.courseName.localeCompare(b.courseName);
          if (courseCompare !== 0) return courseCompare;
          return a.title.localeCompare(b.title);
        });
        
        setStudyGuides(guides);
      } catch (error) {
        console.error('Error fetching study guides:', error);
      } finally {
        setIsLoadingGuides(false);
      }
    }
    
    fetchStudyGuides();
  }, []);

  // Filter guides by search
  const filteredGuides = studyGuides.filter(guide => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      guide.title.toLowerCase().includes(q) ||
      guide.description?.toLowerCase().includes(q) ||
      guide.courseName.toLowerCase().includes(q) ||
      guide.tags?.some(tag => tag.toLowerCase().includes(q))
    );
  });

  // Helper to determine sort order for a guide
  const getGuideSortOrder = (guide: StudyGuideWithCourse): { priority: number; unitNumber: number } => {
    const idLower = guide.id.toLowerCase();
    const titleLower = guide.title.toLowerCase();
    
    // Final review comes first (priority 0)
    if (idLower.includes('final-review') || titleLower.includes('final review')) {
      return { priority: 0, unitNumber: 0 };
    }
    
    // Units come next (priority 1), sorted by unit number
    const unitMatch = idLower.match(/unit-(\d+)/) || titleLower.match(/unit\s*(\d+)/);
    if (unitMatch) {
      return { priority: 1, unitNumber: parseInt(unitMatch[1], 10) };
    }
    
    // Everything else comes last (priority 2)
    return { priority: 2, unitNumber: 0 };
  };

  // Group guides by course
  const guidesByCourse = filteredGuides.reduce((acc, guide) => {
    if (!acc[guide.courseId]) {
      acc[guide.courseId] = {
        courseName: guide.courseName,
        courseSlug: guide.courseSlug,
        guides: []
      };
    }
    acc[guide.courseId].guides.push(guide);
    return acc;
  }, {} as Record<string, { courseName: string; courseSlug: string; guides: StudyGuideWithCourse[] }>);

  // Sort guides within each course: final review first, then units in order, then others
  Object.values(guidesByCourse).forEach(course => {
    course.guides.sort((a, b) => {
      const orderA = getGuideSortOrder(a);
      const orderB = getGuideSortOrder(b);
      
      if (orderA.priority !== orderB.priority) {
        return orderA.priority - orderB.priority;
      }
      // If both are units, sort by unit number
      if (orderA.priority === 1) {
        return orderA.unitNumber - orderB.unitNumber;
      }
      // Otherwise, maintain alphabetical order
      return a.title.localeCompare(b.title);
    });
  });

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'beginner': return 'bg-green-500/10 text-green-600 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/10 text-red-600 border-red-500/30';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 md:px-8 lg:px-12 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-4 rounded-2xl">
              <Library className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-headline">Resources</h1>
              <p className="text-muted-foreground">Your study materials, flashcards, and practice tests</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid h-12">
            <TabsTrigger value="my-resources" className="flex items-center gap-2 px-4">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">My Resources</span>
              <span className="sm:hidden">Mine</span>
            </TabsTrigger>
            <TabsTrigger value="study-guides" className="flex items-center gap-2 px-4">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Study Guides</span>
              <span className="sm:hidden">Guides</span>
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center gap-2 px-4">
              <CreditCard className="h-4 w-4" />
              <span>Flashcards</span>
            </TabsTrigger>
            <TabsTrigger value="practice-tests" className="flex items-center gap-2 px-4">
              <FileQuestion className="h-4 w-4" />
              <span className="hidden sm:inline">Practice Tests</span>
              <span className="sm:hidden">Tests</span>
            </TabsTrigger>
          </TabsList>

          {/* My Resources Tab */}
          <TabsContent value="my-resources" className="space-y-8">
            {!user ? (
              <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
                <CardContent className="py-16 text-center">
                  <User className="h-16 w-16 mx-auto mb-4 text-purple-500" />
                  <h2 className="text-2xl font-bold mb-2">Sign In to Access Your Resources</h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Create and save flashcard decks, track your progress, and access your study materials from anywhere.
                  </p>
                  <Button onClick={() => router.push('/auth')} size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500">
                    Sign In
                  </Button>
                </CardContent>
              </Card>
            ) : isLoadingMyResources ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <>
                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3">
                  <Button onClick={() => router.push('/resources?tab=flashcards')} variant="outline" className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create Deck
                  </Button>
                  <Button onClick={() => router.push('/tools/notes-to-flashcards')} variant="outline" className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    AI Generate
                  </Button>
                </div>

                {/* Recently Opened */}
                {recentDecks.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <History className="h-5 w-5 text-muted-foreground" />
                      <h2 className="text-xl font-semibold">Recently Studied</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {recentDecks.map((deck) => (
                        <Link key={deck.id} href={`/resources/flashcards/study/${deck.id}/flashcards`}>
                          <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-purple-500 cursor-pointer group">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between mb-1">
                                <Badge variant="outline" className="text-xs">
                                  {deck.courseName}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  {deck.cardCount} cards
                                </Badge>
                              </div>
                              <CardTitle className="text-base line-clamp-2 group-hover:text-purple-500 transition-colors">
                                {deck.title}
                              </CardTitle>
                              {deck.description && (
                                <CardDescription className="line-clamp-2 text-sm">
                                  {deck.description}
                                </CardDescription>
                              )}
                            </CardHeader>
                            <CardContent className="pt-0">
                              {deck.lastOpened && (
                                <p className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {new Date(deck.lastOpened).toLocaleDateString()}
                                </p>
                              )}
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* My Decks */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <FolderOpen className="h-5 w-5 text-muted-foreground" />
                    <h2 className="text-xl font-semibold">My Flashcard Decks</h2>
                    <Badge variant="secondary">{userDecks.length}</Badge>
                  </div>
                  {userDecks.length === 0 ? (
                    <Card className="border-dashed">
                      <CardContent className="py-12 text-center text-muted-foreground">
                        <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="font-medium">No decks created yet</p>
                        <p className="text-sm mt-1">Create your first flashcard deck to get started!</p>
                        <Button 
                          onClick={() => router.push('/resources?tab=flashcards')} 
                          variant="outline" 
                          className="mt-4"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Create Deck
                        </Button>
                      </CardContent>
                    </Card>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {userDecks.map((deck) => (
                        <Link key={deck.id} href={`/resources/flashcards/study/${deck.id}/flashcards`}>
                          <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-green-500 cursor-pointer group">
                            <CardHeader className="pb-2">
                              <div className="flex items-center justify-between mb-1">
                                <Badge variant="outline" className="text-xs">
                                  {deck.courseName}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  {deck.cards.length} cards
                                </Badge>
                              </div>
                              <CardTitle className="text-base line-clamp-2 group-hover:text-green-500 transition-colors">
                                {deck.title}
                              </CardTitle>
                              {deck.description && (
                                <CardDescription className="line-clamp-2 text-sm">
                                  {deck.description}
                                </CardDescription>
                              )}
                            </CardHeader>
                            <CardContent className="pt-0">
                              <div className="flex items-center gap-2">
                                {deck.isPublic ? (
                                  <Badge variant="outline" className="text-xs text-green-600 border-green-500/30">
                                    Public
                                  </Badge>
                                ) : (
                                  <Badge variant="outline" className="text-xs text-gray-500">
                                    Private
                                  </Badge>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Empty state if no content at all */}
                {recentDecks.length === 0 && userDecks.length === 0 && (
                  <Card className="bg-gradient-to-br from-gray-500/5 to-gray-500/10 border-gray-500/20">
                    <CardContent className="py-16 text-center">
                      <GraduationCap className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h2 className="text-xl font-bold mb-2">Start Your Learning Journey</h2>
                      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                        Browse flashcard decks, study guides, and practice tests to begin studying.
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                        <Button onClick={() => handleTabChange('flashcards')} variant="outline">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Browse Flashcards
                        </Button>
                        <Button onClick={() => handleTabChange('study-guides')} variant="outline">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Study Guides
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </TabsContent>

          {/* Study Guides Tab */}
          <TabsContent value="study-guides" className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search study guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Stats */}
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>{filteredGuides.length} study guide{filteredGuides.length !== 1 ? 's' : ''}</span>
              <span>•</span>
              <span>{Object.keys(guidesByCourse).length} course{Object.keys(guidesByCourse).length !== 1 ? 's' : ''}</span>
            </div>

            {/* Loading */}
            {isLoadingGuides ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : filteredGuides.length === 0 ? (
              <Card>
                <CardContent className="py-20 text-center text-muted-foreground">
                  <GraduationCap className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">No study guides found</p>
                  <p className="text-sm">Check back soon for new content!</p>
                </CardContent>
              </Card>
            ) : (
              /* Guides by Course */
              <div className="space-y-8">
                {Object.entries(guidesByCourse).map(([courseId, { courseName, courseSlug, guides }]) => (
                  <div key={courseId}>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold">{courseName}</h2>
                      <Link href={`/classes/${courseSlug}`}>
                        <Button variant="ghost" size="sm">
                          View Course <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {guides.map((guide) => (
                        <Link key={guide.id} href={`/resources/study-guide/${guide.id}`}>
                          <Card className="h-full hover:shadow-lg transition-all border-2 hover:border-blue-500 cursor-pointer">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className={getDifficultyColor(guide.difficulty)}>
                                  {guide.difficulty}
                                </Badge>
                                {guide.estimatedTime && (
                                  <Badge variant="outline" className="text-muted-foreground">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {guide.estimatedTime}
                                  </Badge>
                                )}
                              </div>
                              <CardTitle className="text-base line-clamp-2">{guide.title}</CardTitle>
                              {guide.description && (
                                <CardDescription className="line-clamp-2">{guide.description}</CardDescription>
                              )}
                            </CardHeader>
                            <CardContent className="pt-0">
                              {guide.tags && guide.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                  {guide.tags.slice(0, 3).map((tag, idx) => (
                                    <Badge key={idx} variant="secondary" className="text-xs">
                                      #{tag}
                                    </Badge>
                                  ))}
                                  {guide.tags.length > 3 && (
                                    <Badge variant="secondary" className="text-xs">
                                      +{guide.tags.length - 3}
                                    </Badge>
                                  )}
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Flashcards Tab - Embedded full flashcards functionality (browse only) */}
          <TabsContent value="flashcards" className="space-y-6">
            <Suspense fallback={
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            }>
              <FlashcardsBrowsePage browseOnly />
            </Suspense>
          </TabsContent>

          {/* Practice Tests Tab */}
          <TabsContent value="practice-tests" className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
              <CardContent className="py-12 text-center">
                <FileQuestion className="h-16 w-16 mx-auto mb-4 text-blue-500" />
                <h2 className="text-2xl font-bold mb-2">Practice Tests</h2>
                <p className="text-muted-foreground mb-6">
                  Test your knowledge with MCQs and FRQs from your courses
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-w-6xl mx-auto mt-8">
                  {courses.filter(c => c.slug.startsWith('ap-')).slice(0, 12).map((course) => (
                    <Link key={course.id} href={`/classes/${course.slug}/content?tab=practice`}>
                      <Card className="hover:shadow-lg transition-all hover:border-blue-500 cursor-pointer h-full">
                        <CardContent className="p-4 text-center">
                          <h3 className="font-semibold text-sm line-clamp-2">{course.name}</h3>
                          <p className="text-xs text-muted-foreground mt-1">Practice</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                <Link href="/classes" className="mt-6 inline-block">
                  <Button variant="outline">
                    View All Courses <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
