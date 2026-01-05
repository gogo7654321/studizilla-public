'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query as firestoreQuery, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Search, CreditCard } from 'lucide-react';
import Link from 'next/link';
import type { CourseDeck } from '@/lib/course-deck-schema';
import { courses } from '@/lib/courses';
import { MathRenderer } from '@/components/MathRenderer';

interface DeckWithCourse extends CourseDeck {
  courseName?: string;
  courseSlug?: string;
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [results, setResults] = useState<DeckWithCourse[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery);
    }
  }, [initialQuery]);

  async function handleSearch(query: string = searchQuery) {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setHasSearched(true);
    
    try {
      const decksRef = collection(db, 'courseDecks');
      const searchQuery = firestoreQuery(
        decksRef,
        where('isPublic', '==', true),
        orderBy('createdAt', 'desc'),
        limit(50)
      );
      
      const snapshot = await getDocs(searchQuery);
      const allDecks = snapshot.docs.map(doc => {
        const data = doc.data() as CourseDeck;
        const course = courses.find(c => c.id === data.courseId);
        
        return {
          ...data,
          id: doc.id,
          courseName: course?.name,
          courseSlug: course?.slug
        } as DeckWithCourse;
      });
      
      // Client-side filtering for better search
      const searchLower = query.toLowerCase();
      const filtered = allDecks.filter(deck => 
        deck.title.toLowerCase().includes(searchLower) ||
        deck.description?.toLowerCase().includes(searchLower) ||
        deck.courseName?.toLowerCase().includes(searchLower) ||
        deck.cards.some(card => 
          card.term.toLowerCase().includes(searchLower) ||
          card.definition.toLowerCase().includes(searchLower)
        )
      );
      
      setResults(filtered);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Search Flashcards
          </h1>
          
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for decks, terms, or courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button 
              onClick={() => handleSearch()} 
              disabled={isSearching || !searchQuery.trim()}
              size="lg"
            >
              {isSearching ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Search'}
            </Button>
          </div>
        </div>

        {isSearching && (
          <div className="flex justify-center py-12">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}

        {!isSearching && hasSearched && results.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try different keywords or browse all decks on the <Link href="/resources?tab=flashcards" className="text-primary underline">Resources page</Link>
              </p>
            </CardContent>
          </Card>
        )}

        {!isSearching && results.length > 0 && (
          <div>
            <p className="text-sm text-muted-foreground mb-4">
              Found {results.length} deck{results.length !== 1 ? 's' : ''}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((deck) => (
                <Link key={deck.id} href={`/resources/flashcards/study/${deck.id}/flashcards`}>
                  <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline" className="mb-2">
                          {deck.courseName || 'Unknown Course'}
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

        {!hasSearched && !isSearching && (
          <Card>
            <CardContent className="p-12 text-center">
              <CreditCard className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Search for flashcard decks</h3>
              <p className="text-muted-foreground mb-4">
                Enter a term, concept, or course name to find relevant flashcard decks
              </p>
              <Link href="/resources?tab=flashcards">
                <Button variant="outline">Browse All Decks</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        </div>
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}
