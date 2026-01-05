'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookCopy, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot, orderBy, limit } from 'firebase/firestore';
import { Progress } from '@/components/ui/progress';

type Deck = {
  id: string;
  title: string;
  cardCount: number;
  masteryLevel: number;
  lastStudied?: Date;
};

export function FlashcardsWidget() {
  const { user } = useAuth();
  const [decks, setDecks] = useState<Deck[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    const recentDecksRef = collection(db, 'users', user.uid, 'recentlyOpenedDecks');
    const q = query(recentDecksRef, orderBy('lastOpened', 'desc'), limit(20));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedDecks: Deck[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        loadedDecks.push({
          id: data.deckId || doc.id,
          title: data.title || 'Untitled Deck',
          cardCount: data.cardCount || 0,
          masteryLevel: data.masteryLevel || 0,
          lastStudied: data.lastOpened?.toDate(),
        });
      });
      setDecks(loadedDecks);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (isLoading) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10">
          <CardTitle className="font-headline">Continue Studying</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (decks.length === 0) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10">
          <CardTitle className="font-headline">Continue Studying</CardTitle>
          <CardDescription>Pick up where you left off</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center text-center py-12">
          <BookCopy className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="font-semibold text-lg text-muted-foreground">{user ? 'No decks studied yet!' : 'Preview Mode'}</p>
          <p className="text-sm text-muted-foreground mt-1">{user ? 'Start a study session to see your progress here.' : 'Sign in to track your flashcard progress.'}</p>
          <Button asChild variant="default" className="mt-4">
            <Link href={user ? "/resources?tab=flashcards" : "/auth"}>{user ? 'Go to Flashcards' : 'Sign In'}</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pl-10">
        <CardTitle className="font-headline">Continue Studying</CardTitle>
        <CardDescription>Pick up where you left off</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-3">
            {decks.map((deck) => (
              <Link
                key={deck.id}
                href={`/resources/flashcards/study/${deck.id}/flashcards`}
                className="block group"
              >
                <div className="rounded-xl border bg-card p-4 transition-all duration-200 hover:shadow-md hover:border-primary">
                  <h4 className="font-bold text-sm truncate group-hover:text-primary transition-colors">
                    {deck.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">{deck.cardCount} cards</p>
                  <div className="mt-3 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">Mastery</span>
                      <span className="font-medium">{deck.masteryLevel}%</span>
                    </div>
                    <Progress value={deck.masteryLevel} className="h-2" />
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
