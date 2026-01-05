'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, orderBy, doc, getDoc, onSnapshot, deleteDoc, updateDoc, limit, addDoc, Timestamp, startAfter } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  BookOpen,
  CreditCard,
  Search,
  Loader2,
  GraduationCap,
  TrendingUp,
  Clock,
  Plus,
  Sparkles,
  Trash2,
  Globe,
  History,
  X,
  Star
} from 'lucide-react';
import Link from 'next/link';
import type { CourseDeck } from '@/lib/course-deck-schema';
import type { Course } from '@/lib/courses';
import { courses } from '@/lib/courses';
import { MathRenderer } from '@/components/MathRenderer';
import { FlashcardsGrid } from './FlashcardsGrid';

interface DeckWithCourse extends CourseDeck {
  courseName?: string;
  courseSlug?: string;
  isPersonal?: boolean;
  owner?: string;
}

interface UserDeck {
  id: string;
  title: string;
  description?: string;
  cards: Array<{ term: string; definition: string; id: string }>;
  createdAt: any;
  owner: string;
}

interface FlashcardsHomePageProps {
  browseOnly?: boolean;
}

export default function FlashcardsHomePage({ browseOnly = false }: FlashcardsHomePageProps) {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseFromUrl = searchParams.get('course');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [allDecks, setAllDecks] = useState<DeckWithCourse[]>([]);
  const [userDecks, setUserDecks] = useState<DeckWithCourse[]>([]);
  const [userClasses, setUserClasses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'my-decks' | 'browse'>(() => {
    // If browseOnly mode, always start with browse tab
    if (browseOnly) return 'browse';
    // Load saved tab from localStorage
    if (typeof window !== 'undefined') {
      const savedTab = localStorage.getItem('flashcardsActiveTab');
      if (savedTab === 'my-decks' || savedTab === 'browse') {
        return savedTab;
      }
    }
    return 'browse';
  });
  const [isCreatingFolder, setIsCreatingFolder] = useState(false);
  const [folders, setFolders] = useState<Array<{id: string; name: string; deckIds: string[]}>>([]);
  const [trashedDecks, setTrashedDecks] = useState<DeckWithCourse[]>([]);
  const [showTrash, setShowTrash] = useState(false);
  const [browseSearchQuery, setBrowseSearchQuery] = useState('');
  const [allPublicDecks, setAllPublicDecks] = useState<DeckWithCourse[]>([]);
  const [hasMoreBrowseDecks, setHasMoreBrowseDecks] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);
  const lastDocRef = useRef<any>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [recentlyOpenedDecks, setRecentlyOpenedDecks] = useState<DeckWithCourse[]>([]);

  // Save active tab to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('flashcardsActiveTab', activeTab);
    }
  }, [activeTab]);

  // Handle course URL parameter - set search query to course name
  useEffect(() => {
    if (courseFromUrl) {
      const course = courses.find(c => c.id === courseFromUrl);
      if (course) {
        setBrowseSearchQuery(course.name);
      }
    }
  }, [courseFromUrl]);

  // Load recent searches from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('flashcardRecentSearches');
      if (saved) {
        setRecentSearches(JSON.parse(saved));
      }
    }
  }, []);

  // Save search to recent searches
  const saveRecentSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) return;
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('flashcardRecentSearches', JSON.stringify(updated));
    }
  };

  // Delete a recent search
  const deleteRecentSearch = (searchTerm: string) => {
    const updated = recentSearches.filter(s => s !== searchTerm);
    setRecentSearches(updated);
    if (typeof window !== 'undefined') {
      localStorage.setItem('flashcardRecentSearches', JSON.stringify(updated));
    }
  };

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        
        // Only load data for the active tab to improve performance
        if (activeTab === 'browse') {
          // Browse tab: Load all decks but filter to public on client-side
          const decksRef = collection(db, 'courseDecks');
          const publicDecksQuery = query(
            decksRef,
            orderBy('createdAt', 'desc'),
            limit(30)
          );
          
          const publicSnapshot = await getDocs(publicDecksQuery);
          lastDocRef.current = publicSnapshot.docs[publicSnapshot.docs.length - 1];
          const allDecksRaw = publicSnapshot.docs
            .map(doc => {
              const data = doc.data() as CourseDeck;
              const course = courses.find(c => c.id === data.courseId);
              
              return {
                id: doc.id,
                title: data.title,
                description: data.description,
                cards: data.cards || [],
                courseName: course?.name,
                courseSlug: course?.slug,
                isPersonal: data.ownerId !== 'course' && data.ownerId !== 'studizilla-official' && !!data.ownerId,
                ownerId: data.ownerId,
                ownerName: data.ownerName,
                courseId: data.courseId,
                isPublic: data.isPublic,
                ratingsCount: data.ratingsCount || 0,
                ratingsSum: data.ratingsSum || 0
              } as DeckWithCourse;
            })
            .filter(deck => !deck.trashedAt && deck.isPublic !== false);
          
          setAllPublicDecks(allDecksRaw);
          setHasMoreBrowseDecks(publicSnapshot.docs.length >= 30);
        } else if (activeTab === 'my-decks' && user) {
          // My Decks tab: Only load user's decks
          const decksRef = collection(db, 'courseDecks');
          const userDecksQuery = query(
            decksRef,
            where('ownerId', '==', user.uid)
          );
          const userDecksSnapshot = await getDocs(userDecksQuery);
          const userDecksData = userDecksSnapshot.docs.map(doc => {
            const data = doc.data() as any;
            const course = data.courseId ? courses.find(c => c.id === data.courseId) : null;
            return {
              id: doc.id,
              title: data.title,
              description: data.description,
              cards: data.cards || [],
              isPublic: data.isPublic !== false,
              isPersonal: true,
              owner: user.uid,
              courseId: data.courseId || 'general',
              courseName: course?.name || 'Personal',
              trashedAt: data.trashedAt
            } as DeckWithCourse & { trashedAt?: any };
          });

          // Split into active and trashed
          const activeDecksList: DeckWithCourse[] = [];
          const trashedDecksList: DeckWithCourse[] = [];
          const fifteenDaysAgo = new Date();
          fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);

          for (const deck of userDecksData) {
            if (deck.trashedAt) {
              const trashedDate = deck.trashedAt.toDate();
              if (trashedDate < fifteenDaysAgo) {
                await deleteDoc(doc(db, 'courseDecks', deck.id));
              } else {
                trashedDecksList.push(deck);
              }
            } else {
              activeDecksList.push(deck);
            }
          }

          setUserDecks(activeDecksList);
          setTrashedDecks(trashedDecksList);

          // Load recently opened decks with error handling
          try {
            const recentDecksRef = collection(db, 'users', user.uid, 'recentlyOpenedDecks');
            const recentDecksQuery = query(recentDecksRef, orderBy('lastOpened', 'desc'), limit(20));
            const recentDecksSnapshot = await getDocs(recentDecksQuery);
            
            const recentDecksList: DeckWithCourse[] = [];
            const deckFetchPromises = recentDecksSnapshot.docs.map(async (recentDoc) => {
              try {
                const recentData = recentDoc.data();
                const deckRef = doc(db, 'courseDecks', recentData.deckId);
                const deckSnap = await getDoc(deckRef);
                
                if (deckSnap.exists()) {
                  const deckData = deckSnap.data() as any;
                  const course = deckData.courseId ? courses.find(c => c.id === deckData.courseId) : null;
                  return {
                    id: deckSnap.id,
                    title: deckData.title,
                    description: deckData.description,
                    cards: deckData.cards || [],
                    isPublic: deckData.isPublic !== false,
                    isPersonal: deckData.ownerId === user.uid,
                    ownerId: deckData.ownerId,
                    ownerName: deckData.ownerName,
                    courseId: deckData.courseId || 'general',
                    courseName: course?.name || 'Personal',
                    ratingsCount: deckData.ratingsCount || 0,
                    ratingsSum: deckData.ratingsSum || 0
                  };
                }
              } catch (err) {
                console.error('Error loading recent deck:', err);
                return null;
              }
            });
            
            const results = await Promise.all(deckFetchPromises);
            const validDecks = results.filter((deck): deck is DeckWithCourse => deck !== null);
            setRecentlyOpenedDecks(validDecks);
          } catch (err) {
            console.error('Error loading recently opened decks:', err);
            setRecentlyOpenedDecks([]);
          }

          // Load folders for my-decks tab
          const foldersRef = collection(db, 'users', user.uid, 'flashcardFolders');
          const unsubscribeFolders = onSnapshot(foldersRef, (snapshot) => {
            const foldersData = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            })) as Array<{id: string; name: string; deckIds: string[]}>;
            setFolders(foldersData);
          });

          return () => {
            unsubscribeFolders();
          };
        } else {
          // All tab: Load public course decks only (lightweight)
          const decksRef = collection(db, 'courseDecks');
          const publicDecksQuery = query(
            decksRef,
            where('ownerId', '==', 'course'),
            orderBy('createdAt', 'desc'),
            limit(50)
          );
          
          const publicSnapshot = await getDocs(publicDecksQuery);
          const publicOnlyDecks = publicSnapshot.docs
            .map(doc => {
              const data = doc.data() as CourseDeck;
              const course = courses.find(c => c.id === data.courseId);
              
              return {
                id: doc.id,
                title: data.title,
                description: data.description,
                cards: [],
                courseName: course?.name,
                courseSlug: course?.slug,
                isPersonal: false,
                courseId: data.courseId,
                isPublic: data.isPublic
              } as DeckWithCourse;
            })
            .filter(deck => !deck.trashedAt);
          
          setAllDecks(publicOnlyDecks);

          // Load user's decks for "all" tab if logged in
          if (user) {
            const userDecksQuery = query(
              decksRef,
              where('ownerId', '==', user.uid),
              limit(20)
            );
            const userDecksSnapshot = await getDocs(userDecksQuery);
            const userDecksData = userDecksSnapshot.docs
              .filter(doc => !doc.data().trashedAt)
              .map(doc => {
                const data = doc.data() as any;
                const course = data.courseId ? courses.find(c => c.id === data.courseId) : null;
                return {
                  id: doc.id,
                  title: data.title,
                  description: data.description,
                  cards: data.cards || [],
                  isPublic: data.isPublic !== false,
                  isPersonal: true,
                  owner: user.uid,
                  courseId: data.courseId || 'general',
                  courseName: course?.name || 'Personal'
                } as DeckWithCourse;
              });
            
            setUserDecks(userDecksData);
          }
        }

        // Load user classes only when needed
        if (user && activeTab === 'all') {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserClasses(userData.enrolledClasses || []);
          }
        }
      } catch (error) {
        console.error('Error loading decks:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [user, activeTab]);

  // Load more decks function
  const loadMoreDecks = async () => {
    if (isLoadingMore || !hasMoreBrowseDecks || !lastDocRef.current) return;
    
    setIsLoadingMore(true);
    try {
      const decksRef = collection(db, 'courseDecks');
      const nextQuery = query(
        decksRef,
        orderBy('createdAt', 'desc'),
        limit(30),
        startAfter(lastDocRef.current)
      );
      
      const nextSnapshot = await getDocs(nextQuery);
      
      if (nextSnapshot.docs.length === 0) {
        setHasMoreBrowseDecks(false);
        return;
      }
      
      lastDocRef.current = nextSnapshot.docs[nextSnapshot.docs.length - 1];
      
      const newDecks = nextSnapshot.docs
        .map(doc => {
          const data = doc.data() as CourseDeck;
          const course = courses.find(c => c.id === data.courseId);
          
          return {
            id: doc.id,
            title: data.title,
            description: data.description,
            cards: data.cards || [],
            courseName: course?.name,
            courseSlug: course?.slug,
            isPersonal: data.ownerId !== 'course' && data.ownerId !== 'studizilla-official' && !!data.ownerId,
            ownerId: data.ownerId,
            ownerName: data.ownerName,
            courseId: data.courseId,
            isPublic: data.isPublic,
            ratingsCount: data.ratingsCount || 0,
            ratingsSum: data.ratingsSum || 0
          } as DeckWithCourse;
        })
        .filter(deck => !deck.trashedAt && deck.isPublic !== false);
      
      setAllPublicDecks(prev => [...prev, ...newDecks]);
      setHasMoreBrowseDecks(nextSnapshot.docs.length >= 30);
    } catch (error) {
      console.error('Error loading more decks:', error);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // Infinite scroll observer for Browse Public tab
  useEffect(() => {
    if (activeTab !== 'browse' || !hasMoreBrowseDecks || isLoading || isLoadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreDecks();
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [activeTab, hasMoreBrowseDecks, isLoading, isLoadingMore]);

  const filteredDecks = allDecks.filter(deck => {
    if (!searchQuery) {
      const matchesCourse = selectedCourse === 'all' || deck.courseId === selectedCourse;
      return matchesCourse;
    }

    const query = searchQuery.toLowerCase();
    const deckData = deck as any;
    
    // Search in basic fields
    const matchesTitle = deck.title.toLowerCase().includes(query);
    const matchesDescription = deck.description?.toLowerCase().includes(query);
    const matchesCourseName = deck.courseName?.toLowerCase().includes(query);
    
    // Search in tags/hashtags
    const matchesTags = deckData.tags?.some((tag: string) => tag.toLowerCase().includes(query));
    const matchesHashtags = deckData.hashtags?.toLowerCase().includes(query);
    
    // Search in owner name
    const matchesOwner = deckData.ownerName?.toLowerCase().includes(query);
    
    // Search in card content (terms and definitions)
    const matchesCards = deck.cards?.some((card: any) => 
      card.term?.toLowerCase().includes(query) || 
      card.definition?.toLowerCase().includes(query)
    );
    
    // Search by card count (e.g., "5 cards", "10", etc.)
    const cardCount = deck.cards?.length || 0;
    const matchesCardCount = query.match(/\d+/) && cardCount.toString().includes(query.match(/\d+/)?.[0] || '');
    
    // Search by date (e.g., "2024", "december", "dec")
    let matchesDate = false;
    if (deckData.createdAt) {
      try {
        const date = deckData.createdAt.toDate ? deckData.createdAt.toDate() : new Date(deckData.createdAt);
        const dateStr = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toLowerCase();
        matchesDate = dateStr.includes(query);
      } catch (e) {}
    }
    
    const matchesSearch = matchesTitle || matchesDescription || matchesCourseName || 
                         matchesTags || matchesHashtags || matchesOwner || matchesCards || 
                         matchesCardCount || matchesDate;
    
    const matchesCourse = selectedCourse === 'all' || deck.courseId === selectedCourse;
    
    return matchesSearch && matchesCourse;
  });

  const filteredUserDecks = userDecks.filter(deck => {
    if (!searchQuery) return true;

    const query = searchQuery.toLowerCase();
    const deckData = deck as any;
    
    // Search in basic fields
    const matchesTitle = deck.title.toLowerCase().includes(query);
    const matchesDescription = deck.description?.toLowerCase().includes(query);
    const matchesCourseName = deck.courseName?.toLowerCase().includes(query);
    
    // Search in tags/hashtags
    const matchesTags = deckData.tags?.some((tag: string) => tag.toLowerCase().includes(query));
    const matchesHashtags = deckData.hashtags?.toLowerCase().includes(query);
    
    // Search in owner name
    const matchesOwner = deckData.ownerName?.toLowerCase().includes(query);
    
    // Search in card content
    const matchesCards = deck.cards?.some((card: any) => 
      card.term?.toLowerCase().includes(query) || 
      card.definition?.toLowerCase().includes(query)
    );
    
    // Search by card count
    const cardCount = deck.cards?.length || 0;
    const matchesCardCount = query.match(/\d+/) && cardCount.toString().includes(query.match(/\d+/)?.[0] || '');
    
    // Search by date
    let matchesDate = false;
    if (deckData.createdAt) {
      try {
        const date = deckData.createdAt.toDate ? deckData.createdAt.toDate() : new Date(deckData.createdAt);
        const dateStr = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toLowerCase();
        matchesDate = dateStr.includes(query);
      } catch (e) {}
    }
    
    return matchesTitle || matchesDescription || matchesCourseName || 
           matchesTags || matchesHashtags || matchesOwner || matchesCards || 
           matchesCardCount || matchesDate;
  });

  const suggestedDecks = allDecks.filter(deck => 
    userClasses.includes(deck.courseId)
  ).slice(0, 6);

  const courseDecksCount = courses.map(course => ({
    course,
    count: allDecks.filter(d => d.courseId === course.id).length
  })).filter(c => c.count > 0);

  const totalCards = allDecks.reduce((sum, deck) => sum + deck.cards.length, 0);
  const userTotalCards = userDecks.reduce((sum, deck) => sum + (deck.cards?.length || 0), 0);

  // Filter browse decks by search query
  const filteredBrowseDecks = allPublicDecks.filter(deck => {
    if (!browseSearchQuery) return true;

    const query = browseSearchQuery.toLowerCase();
    const deckData = deck as any;
    
    // Search in basic fields
    const matchesTitle = deck.title.toLowerCase().includes(query);
    const matchesDescription = deck.description?.toLowerCase().includes(query);
    const matchesCourseName = deck.courseName?.toLowerCase().includes(query);
    
    // Search in tags/hashtags
    const matchesTags = deckData.tags?.some((tag: string) => tag.toLowerCase().includes(query));
    const matchesHashtags = deckData.hashtags?.toLowerCase().includes(query);
    
    // Search in owner name
    const matchesOwner = deckData.ownerName?.toLowerCase().includes(query);
    
    // Search in card content
    const matchesCards = deck.cards?.some((card: any) => 
      card.term?.toLowerCase().includes(query) || 
      card.definition?.toLowerCase().includes(query)
    );
    
    // Search by card count
    const cardCount = deck.cards?.length || 0;
    const matchesCardCount = query.match(/\d+/) && cardCount.toString().includes(query.match(/\d+/)?.[0] || '');
    
    // Search by date
    let matchesDate = false;
    if (deckData.createdAt) {
      try {
        const date = deckData.createdAt.toDate ? deckData.createdAt.toDate() : new Date(deckData.createdAt);
        const dateStr = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).toLowerCase();
        matchesDate = dateStr.includes(query);
      } catch (e) {}
    }
    
    return matchesTitle || matchesDescription || matchesCourseName || 
           matchesTags || matchesHashtags || matchesOwner || matchesCards || 
           matchesCardCount || matchesDate;
  });

  if (authLoading || isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-secondary/30">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // Prepare display decks with smart ordering
  let displayDecks = activeTab === 'my-decks' ? filteredUserDecks : 
                     activeTab === 'browse' ? filteredBrowseDecks :
                     [...filteredUserDecks, ...filteredDecks];
  
  // When not searching, apply smart ordering
  if (activeTab === 'browse' && !browseSearchQuery) {
    // Shuffle for variety
    displayDecks = [...displayDecks].sort(() => Math.random() - 0.5);
    
    // Prioritize enrolled courses at the top
    if (user && userClasses.length > 0) {
      const enrolledDecks = displayDecks.filter(d => userClasses.includes(d.courseId));
      const otherDecks = displayDecks.filter(d => !userClasses.includes(d.courseId));
      displayDecks = [...enrolledDecks, ...otherDecks];
    }
  } else if ((activeTab === 'all' || activeTab === 'my-decks') && !searchQuery) {
    // Shuffle for variety
    displayDecks = [...displayDecks].sort(() => Math.random() - 0.5);
    
    // Prioritize enrolled courses at the top for 'all' tab
    if (activeTab === 'all' && user && userClasses.length > 0) {
      const enrolledDecks = displayDecks.filter(d => userClasses.includes(d.courseId));
      const otherDecks = displayDecks.filter(d => !userClasses.includes(d.courseId));
      displayDecks = [...enrolledDecks, ...otherDecks];
    }
  }

  return (
    <div className={browseOnly ? '' : 'min-h-screen bg-secondary/30'}>
      <div className={browseOnly ? '' : 'w-full mx-auto px-4 md:px-8 py-8'}>
        {/* Modern Header - Hide in browseOnly mode */}
        {!browseOnly && (
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Flashcards</h1>
          </div>
        )}

        {/* Action Buttons - Hide in browseOnly mode */}
        {!browseOnly && (
          <div className="mb-8 flex items-center justify-end gap-3">
            {user && trashedDecks.length > 0 && (
              <Button 
                onClick={() => setShowTrash(true)} 
                size="lg" 
                variant="outline" 
                className="gap-2 relative"
              >
                <Trash2 className="h-5 w-5" />
                Trash
                {trashedDecks.length > 0 && (
                  <Badge variant="destructive" className="ml-1">
                    {trashedDecks.length}
                  </Badge>
                )}
              </Button>
            )}
            {user && (
              <Button onClick={() => setIsCreatingFolder(true)} size="lg" variant="outline" className="gap-2">
                <Plus className="h-5 w-5" />
                Create Folder
              </Button>
            )}
            {user ? (
              <Button onClick={() => router.push('/dashboard')} size="lg" className="gap-2">
                <Plus className="h-5 w-5" />
                Create Deck
              </Button>
            ) : (
              <Button onClick={() => router.push('/auth')} size="lg" className="gap-2">
                Sign In to Create
              </Button>
            )}
          </div>
        )}

        {/* Tabs - Hide in browseOnly mode */}
        {!browseOnly && (
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="my-decks" disabled={!user}>My Decks</TabsTrigger>
              <TabsTrigger value="browse" className="relative data-[state=inactive]:bg-gradient-to-r data-[state=inactive]:from-primary/20 data-[state=inactive]:to-primary/10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Globe className="mr-2 h-4 w-4" />
                Browse Public
              </TabsTrigger>
            </TabsList>
          </Tabs>
        )}

        {/* Search and Filter */}
        {activeTab === 'browse' ? (
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search all public flashcard decks..."
                value={browseSearchQuery}
                onChange={(e) => setBrowseSearchQuery(e.target.value)}
                onFocus={() => setShowRecentSearches(true)}
                onBlur={() => setTimeout(() => setShowRecentSearches(false), 200)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && browseSearchQuery.trim()) {
                    saveRecentSearch(browseSearchQuery);
                    setShowRecentSearches(false);
                  }
                }}
                className="pl-10 h-12 text-base"
              />
              {showRecentSearches && recentSearches.length > 0 && (
                <Card className="absolute top-full mt-2 w-full z-10 shadow-lg">
                  <CardContent className="p-2">
                    {recentSearches.map((search, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between px-3 py-2 hover:bg-accent rounded-md group cursor-pointer"
                        onClick={() => {
                          setBrowseSearchQuery(search);
                          setShowRecentSearches(false);
                        }}
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <History className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{search}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteRecentSearch(search);
                          }}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {browseSearchQuery ? (
                <><span className="font-medium">{filteredBrowseDecks.length}</span> {filteredBrowseDecks.length === 1 ? 'result' : 'results'} • </>
              ) : null}
              <span className="font-medium">{filteredBrowseDecks.reduce((sum, d) => sum + (d.cards?.length || 0), 0)}</span> total cards
              {!browseSearchQuery && <> • <span className="font-medium">{filteredBrowseDecks.length}</span> public {filteredBrowseDecks.length === 1 ? 'deck' : 'decks'}</>}
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search decks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              {activeTab !== 'my-decks' && (
                <select
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="px-4 py-2 rounded-md border bg-background"
                >
                <option value="all">All Courses</option>
                {courseDecksCount.map(({ course }) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            )}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {searchQuery ? (
                <><span className="font-medium">{displayDecks.length}</span> {displayDecks.length === 1 ? 'result' : 'results'} • </>
              ) : null}
              <span className="font-medium">{displayDecks.reduce((sum, d) => sum + (d.cards?.length || 0), 0)}</span> total cards
              {!searchQuery && <> • <span className="font-medium">{displayDecks.length}</span> {displayDecks.length === 1 ? 'deck' : 'decks'}</>}
            </div>
          </div>
        )}

        {/* Continue Studying Section - My Decks Tab Only */}
        {activeTab === 'my-decks' && recentlyOpenedDecks.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Continue Studying</h2>
            <ScrollArea className="w-full">
              <div className="flex gap-4 pb-4">
                {recentlyOpenedDecks.slice(0, 12).map((deck) => {
                  const course = courses.find(c => c.id === deck.courseId);
                  const courseName = deck.courseName || course?.name || 'General';
                  const courseIcon = course?.icon;
                  const averageRating = (deck.ratingsCount && deck.ratingsCount > 0) 
                    ? (deck.ratingsSum || 0) / deck.ratingsCount 
                    : 0;
                  
                  return (
                    <Link
                      key={deck.id}
                      href={`/resources/flashcards/study/${deck.id}/flashcards`}
                      className="flex-shrink-0 w-64"
                    >
                      <Card className="h-full hover:shadow-lg transition-all hover:border-primary group">
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-2 mb-2">
                            {courseIcon && (
                              <img src={courseIcon} alt={courseName} className="w-4 h-4 object-contain" />
                            )}
                            <Badge variant="secondary" className="text-xs">
                              {courseName}
                            </Badge>
                          </div>
                          <CardTitle className="text-base font-bold line-clamp-2 group-hover:text-primary transition-colors">
                            {deck.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                            <span>{deck.cards?.length || 0} cards</span>
                            {deck.ratingsCount && deck.ratingsCount > 0 && (
                              <>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  <span>{averageRating.toFixed(1)}</span>
                                </div>
                              </>
                            )}
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        )}

        {/* My Owned Decks Section Header */}
        {activeTab === 'my-decks' && recentlyOpenedDecks.length > 0 && (
          <h2 className="text-2xl font-bold mb-4">My Decks</h2>
        )}

        {/* Decks Grid */}
        {displayDecks.length === 0 ? (
          <Card className="bg-card">
            <CardContent className="p-12 text-center">
              <CreditCard className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No decks found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery || browseSearchQuery ? 'Try a different search term' : 
                 activeTab === 'my-decks' ? 'Create your first deck to get started!' : 
                 user ? 'Check back later for new content' : 'No public decks available yet. Sign in to create your own!'}
              </p>
              {activeTab === 'my-decks' && user && (
                <Button onClick={() => router.push('/dashboard')}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Your First Deck
                </Button>
              )}
              {activeTab === 'browse' && !user && (
                <Button onClick={() => router.push('/auth')}>
                  Sign In to Create Decks
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <FlashcardsGrid 
            decks={displayDecks} 
            folders={folders}
            onFoldersChange={setFolders}
            isCreatingFolder={isCreatingFolder}
            onCreateFolderChange={setIsCreatingFolder}
            isBrowseMode={activeTab === 'browse'}
            onDeckTrashed={(deckId) => {
              // Move deck from userDecks to trashedDecks
              const deck = userDecks.find(d => d.id === deckId);
              if (deck) {
                setUserDecks(prev => prev.filter(d => d.id !== deckId));
                setTrashedDecks(prev => [...prev, { ...deck, trashedAt: { toDate: () => new Date() } } as any]);
              }
            }}
          />
        )}

        {/* Infinite Scroll Observer Target for Browse Tab */}
        {activeTab === 'browse' && hasMoreBrowseDecks && displayDecks.length > 0 && (
          <div ref={observerTarget} className="h-20 flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {/* Suggested Decks Section */}
        {user && suggestedDecks.length > 0 && activeTab === 'all' && (
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Suggested For You</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Based on your enrolled classes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedDecks.map((deck) => (
                <Link key={deck.id} href={`/resources/flashcards/study/${deck.id}/flashcards`}>
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group bg-card border-primary/20">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="mb-2 border-primary text-primary">
                          {deck.courseName}
                        </Badge>
                        <Badge variant="secondary">
                          {deck.cards.length} cards
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">
                        {deck.title}
                      </CardTitle>
                      {deck.description && (
                        <CardDescription className="line-clamp-2">
                          {deck.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      {deck.cards.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-muted-foreground">Preview:</p>
                          <div className="p-3 bg-muted/50 rounded-lg border">
                            <p className="text-sm font-medium mb-1 line-clamp-1">
                              <MathRenderer content={deck.cards[0].term} />
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              <MathRenderer content={deck.cards[0].definition} />
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Trash Dialog */}
      <Dialog open={showTrash} onOpenChange={setShowTrash}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trash2 className="h-5 w-5" />
              Trash ({trashedDecks.length})
            </DialogTitle>
            <DialogDescription>
              Items in trash will be permanently deleted after 15 days
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 mt-4">
            {trashedDecks.map((deck) => {
              const daysRemaining = deck.trashedAt 
                ? Math.max(0, 15 - Math.floor((new Date().getTime() - deck.trashedAt.toDate().getTime()) / (1000 * 60 * 60 * 24)))
                : 0;
              
              return (
                <Card key={deck.id} className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{deck.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {deck.cards?.length || 0} cards • Deletes in {daysRemaining} days
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={async () => {
                          if (!user) return;
                          try {
                            const deckRef = doc(db, 'courseDecks', deck.id);
                            await updateDoc(deckRef, {
                              trashedAt: null
                            });
                            const userDecksRef = collection(db, 'courseDecks');
                            const q = query(userDecksRef, where('ownerId', '==', user.uid));
                            const snapshot = await getDocs(q);
                            const userDecksData = snapshot.docs.map(d => {
                              const data = d.data() as any;
                              return {
                                id: d.id,
                                title: data.title,
                                description: data.description,
                                cards: data.cards || [],
                                isPublic: false,
                                isPersonal: true,
                                owner: user.uid,
                                courseId: 'general',
                                courseName: 'Personal',
                                trashedAt: data.trashedAt
                              };
                            });
                            const active = userDecksData.filter((d: any) => !d.trashedAt);
                            const trashed = userDecksData.filter((d: any) => d.trashedAt);
                            setUserDecks(active);
                            setTrashedDecks(trashed);
                          } catch (error) {
                            console.error('Error restoring deck:', error);
                          }
                        }}
                      >
                        Restore
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={async () => {
                          if (!user || !confirm('Permanently delete this deck? This cannot be undone.')) return;
                          try {
                            const deckRef = doc(db, 'courseDecks', deck.id);
                            await deleteDoc(deckRef);
                            setTrashedDecks(prev => prev.filter(d => d.id !== deck.id));
                          } catch (error) {
                            console.error('Error permanently deleting deck:', error);
                          }
                        }}
                      >
                        Delete Forever
                      </Button>
                    </div>
                  </div>
                </Card>
              );
            })}
            {trashedDecks.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                Trash is empty
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
