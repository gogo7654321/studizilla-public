'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Sparkles, GraduationCap, Users, BookOpen, Trophy, Heart, ArrowRight, Zap, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { collection, query, where, getDocs, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { courses } from '@/lib/courses';
import type { CourseDeck } from '@/lib/course-deck-schema';

interface DeckData {
  id: string;
  title: string;
  description: string;
  courseId?: string;
  courseName?: string;
  cardCount: number;
}

export function StudizillaStaticProfile() {
  const [decks, setDecks] = useState<DeckData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const observerTarget = React.useRef<HTMLDivElement>(null);

  const loadMoreDecks = async (isInitial = false) => {
    if (!hasMore && !isInitial) return;

    try {
      const decksRef = collection(db, 'courseDecks');
      let q;
      
      if (isInitial || !lastVisible) {
        q = query(
          decksRef,
          orderBy('createdAt', 'desc'),
          limit(12)
        );
      } else {
        q = query(
          decksRef,
          orderBy('createdAt', 'desc'),
          startAfter(lastVisible),
          limit(12)
        );
      }
      
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        setHasMore(false);
        return;
      }

      const decksData: DeckData[] = snapshot.docs
        .filter(doc => {
          const data = doc.data() as CourseDeck;
          return !data.ownerId || data.ownerId === 'course' || data.ownerId === 'studizilla-official';
        })
        .map(doc => {
          const data = doc.data() as CourseDeck;
          const course = courses.find(c => c.id === data.courseId);
          
          return {
            id: doc.id,
            title: data.title || 'Untitled Deck',
            description: data.description || '',
            courseId: data.courseId,
            courseName: course?.name || 'General',
            cardCount: data.cards?.length || 0,
          };
        });

      if (isInitial) {
        setDecks(decksData);
      } else {
        setDecks(prev => [...prev, ...decksData]);
      }

      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      setHasMore(snapshot.docs.length === 12);
    } catch (error) {
      console.error('Error fetching decks:', error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMoreDecks(true);
  }, []);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreDecks();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoading]);

  return (
    <div className="min-h-screen">
      {/* Epic Banner Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 animate-gradient-x" />
        <div className="absolute inset-0 bg-[url('/images/theme/sakura-pattern.png')] opacity-20" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-float"
              style={{
                width: Math.random() * 30 + 10 + 'px',
                height: Math.random() * 30 + 10 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>

        {/* Official Badge Overlay */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className="bg-white/20 backdrop-blur-md text-white border-white/40 text-sm px-3 py-1">
            <CheckCircle2 className="mr-1 h-4 w-4" />
            Official Account
          </Badge>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-primary/20 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar with special effects */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse blur-xl opacity-50" />
              <Avatar className="h-32 w-32 border-4 border-white dark:border-gray-900 shadow-2xl relative z-10">
                <AvatarImage src="/images/logo/studizilla-official-avatar.png" alt="Studizilla Official" />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-3xl">
                  <Sparkles className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name and Bio */}
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="font-headline text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Studizilla Official
                </h1>
                <CheckCircle2 className="h-8 w-8 text-blue-500 fill-blue-500" />
              </div>
              
              <p className="text-xl text-muted-foreground mb-3">@studizilla</p>
              
              <p className="text-lg mb-4 max-w-2xl leading-relaxed">
                🎓 Your AI-powered study companion | Official Studizilla account providing curated course materials, study guides, and resources to help you ace your exams!
              </p>

              {/* Special Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-pink-500">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Official Account
                </Badge>
                <Badge variant="default" className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Verified
                </Badge>
                <Badge variant="default" className="bg-gradient-to-r from-green-500 to-emerald-500">
                  <GraduationCap className="mr-1 h-3 w-3" />
                  Educator
                </Badge>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{decks.length}</span>
                  <span className="text-muted-foreground">Study Sets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{new Set(decks.map(d => d.courseId)).size}</span>
                  <span className="text-muted-foreground">Courses</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{decks.reduce((sum, d) => sum + d.cardCount, 0).toLocaleString()}</span>
                  <span className="text-muted-foreground">Cards</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Message Section */}
        <Card className="mt-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-300/30 dark:border-purple-700/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              Welcome to Studizilla!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-lg">
              We&apos;re here to help you succeed in your studies with AI-powered tools, curated course materials, and a supportive community.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card/50">
                <BookOpen className="h-8 w-8 text-purple-500 mb-2" />
                <h3 className="font-semibold mb-1">Study Materials</h3>
                <p className="text-sm text-muted-foreground">Curated flashcard decks and resources</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card/50">
                <Sparkles className="h-8 w-8 text-pink-500 mb-2" />
                <h3 className="font-semibold mb-1">AI Tools</h3>
                <p className="text-sm text-muted-foreground">Generate decks from your notes</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card/50">
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <h3 className="font-semibold mb-1">Community</h3>
                <p className="text-sm text-muted-foreground">Connect with fellow students</p>
              </div>
            </div>
            <div className="flex gap-2 pt-4">
              <Button asChild>
                <Link href="/resources?tab=flashcards">Browse Study Sets</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/classes">Explore Courses</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Official Study Sets Section */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-3xl font-bold flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-primary" />
              Official Study Sets
            </h2>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {decks.length} Decks
            </Badge>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4 mb-2" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-muted rounded mb-2" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : decks.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">No study sets available yet.</p>
                <p className="text-sm text-muted-foreground">Check back soon for more content!</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {decks.map((deck) => (
                <Card key={deck.id} className="hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                        {deck.title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {deck.courseName}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {deck.cardCount} cards
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {deck.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {deck.description}
                      </p>
                    )}
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={`/resources/flashcards/study/${deck.id}/flashcards`}>
                        Study Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Loading indicator */}
          {!isLoading && hasMore && (
            <div ref={observerTarget} className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {/* End of list message */}
          {!isLoading && !hasMore && decks.length > 0 && (
            <div className="text-center py-8 text-muted-foreground">
              You've reached the end of our study sets! 🎉
            </div>
          )}
        </div>
      </div>

      {/* Add floating animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
