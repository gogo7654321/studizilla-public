
'use client';

import React, { useState, useEffect, createContext, useContext, ReactNode, Suspense } from 'react';
import { useParams, useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { doc, onSnapshot, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2, BookCopy, Tags, Bot, Gamepad2, BrainCircuit, Pencil, User as UserIcon, ArrowLeft, History, Flag, CheckCircle2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Deck, DeckProgress } from './page';
import { Button } from '@/components/ui/button';
import type { CourseDeck } from '@/lib/course-deck-schema';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppearance } from '@/contexts/AppearanceContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import dynamic from 'next/dynamic';
import { courses } from '@/lib/courses';
import { setDoc, Timestamp } from 'firebase/firestore';

const ReportDeckDialog = dynamic(() => import('./ReportDeckDialog').then(mod => mod.ReportDeckDialog), { ssr: false });


// 1. Create a Context to share deck data
type StudyDeckContextType = {
    deck: Deck;
    progress: DeckProgress;
    isLoading: boolean;
};

const StudyDeckContext = createContext<StudyDeckContextType | null>(null);

export const useStudyDeck = () => {
    const context = useContext(StudyDeckContext);
    if (!context) {
        throw new Error("useStudyDeck must be used within a StudyDeckProvider");
    }
    return context;
};

// 2. The Layout becomes the Provider
function StudyLayout({ children }: { children: React.ReactNode }) {
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();
    const { user, isLoading: isAuthLoading } = useAuth();
    const { toast } = useToast();
    const { customTheme, showBackgroundInStudy } = useAppearance();

    const [deck, setDeck] = useState<Deck | null>(null);
    const [progress, setProgress] = useState<DeckProgress>({});
    const [isLoading, setIsLoading] = useState(true);
    const [isReportDeckOpen, setIsReportDeckOpen] = useState(false);
    const [averageRating, setAverageRating] = useState(0);
    const [totalRatings, setTotalRatings] = useState(0);
    
    const deckId = params.deckId as string;

    useEffect(() => {
        if (isAuthLoading) return;
        if (!deckId) {
            router.push('/flashcards');
            return;
        }

        setIsLoading(true);

        // Fetch deck from courseDecks collection
        const fetchDeck = async () => {
            try {
                const courseDeckRef = doc(db, 'courseDecks', deckId);
                const courseDeckSnap = await getDoc(courseDeckRef);
                
                if (courseDeckSnap.exists()) {
                    const deckData = courseDeckSnap.data() as CourseDeck;
                    
                    // Load rating data
                    const totalRatings = deckData.ratingsCount || 0;
                    const totalSum = deckData.ratingsSum || 0;
                    setTotalRatings(totalRatings);
                    setAverageRating(totalRatings > 0 ? totalSum / totalRatings : 0);
                    
                    // Determine if this is a Studizilla official deck
                    const isOfficialDeck = !deckData.ownerId || deckData.ownerId === 'course' || deckData.ownerId === 'studizilla-official';
                    
                    setDeck({
                        id: courseDeckSnap.id,
                        title: deckData.title || 'Untitled Deck',
                        description: deckData.description || '',
                        hashtags: deckData.hashtags || '',
                        courseId: deckData.courseId,
                        cards: deckData.cards || [],
                        ownerId: isOfficialDeck ? 'studizilla-official' : (deckData.ownerId || 'studizilla-official'),
                        ownerName: isOfficialDeck ? 'Studizilla Official' : (deckData.ownerName || 'Studizilla Official'),
                        ownerPhotoURL: isOfficialDeck ? '/images/logo/studizilla-official-avatar.png' : (deckData.ownerPhotoURL || '/images/logo/studizilla-official-avatar.png'),
                        ownerUsername: isOfficialDeck ? 'studizilla' : (deckData.ownerUsername || 'studizilla'),
                        studyDefaults: deckData.studyDefaults || { answerWith: 'definition', flipDirection: 'horizontal' },
                    });
                    
                    if (user) {
                        // Track recently opened deck
                        const recentDeckRef = doc(db, 'users', user.uid, 'recentlyOpenedDecks', courseDeckSnap.id);
                        await setDoc(recentDeckRef, {
                            deckId: courseDeckSnap.id,
                            title: deckData.title || 'Untitled Deck',
                            cardCount: deckData.cards?.length || 0,
                            lastOpened: Timestamp.now(),
                            masteryLevel: 0, // Will be calculated from progress if needed
                        }, { merge: true });
                        
                        const progressDocRef = doc(db, 'users', user.uid, 'deckProgress', deckId);
                        const unsubscribeProgress = onSnapshot(progressDocRef, (progressSnap) => {
                            setProgress(progressSnap.exists() ? (progressSnap.data() as DeckProgress) : {});
                        });
                        return { success: true, unsubscribe: unsubscribeProgress };
                    } else {
                        setProgress({});
                    }
                    return { success: true };
                }
                
                // Deck not found
                return { success: false };
            } catch (error) {
                console.error('Error fetching deck:', error);
                return { success: false };
            }
        };

        let unsubscribe: (() => void) | null | undefined = null;
        const loadData = async () => {
            const result = await fetchDeck();

            if (!result.success) {
                toast({
                    title: 'Deck Not Found',
                    description: 'This flashcard deck does not exist or is not published yet.',
                    duration: 5000,
                });
                router.push('/flashcards');
            }

            unsubscribe = result.unsubscribe;
            setIsLoading(false);
        };
        
        loadData();

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };

    }, [user, isAuthLoading, deckId, router, toast]);

    if (isLoading || isAuthLoading || !deck) {
        return (
            <div className="flex h-full w-full items-center justify-center p-8">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        );
    }

    const showThemedBackground = showBackgroundInStudy && customTheme?.hasFullScreenBackground;
    const isOwner = user?.uid === deck.ownerId;
    
    const navItems = [
        { name: 'Flashcards', value: `/resources/flashcards/study/${deck.id}/flashcards`, icon: BookCopy, key: 'flashcards' },
        { name: 'Deep Dive', value: `/resources/flashcards/study/${deck.id}/deep-dive`, icon: BrainCircuit, key: 'deep-dive' },
        { name: 'Match', value: `/resources/flashcards/study/${deck.id}/match`, icon: Gamepad2, key: 'match' },
        { name: 'Test', value: `/resources/flashcards/study/${deck.id}/test`, icon: Bot, key: 'test', disabled: false },
        { name: 'Spaced', value: `/resources/flashcards/study/${deck.id}/spaced`, icon: History, key: 'spaced', disabled: true },
    ];
    
    const activeTabKey = navItems.find(item => pathname.endsWith(item.key))?.key || 'flashcards';
    
    return (
        <StudyDeckContext.Provider value={{ deck, progress, isLoading }}>
           <div className={cn("h-full flex flex-col", showThemedBackground && "p-4 md:p-6")}>
                <div className={cn("h-full flex flex-col", showThemedBackground && "bg-card/80 backdrop-blur-sm rounded-2xl")}>
                    <header className={cn("flex-shrink-0 p-6")}>
                        <Button variant="ghost" asChild className="mb-4 -ml-4">
                            <Link href={'/flashcards'} className="flex items-center">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Flashcards
                            </Link>
                        </Button>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="font-headline text-3xl md:text-4xl font-bold">{deck.title}</h1>
                                {totalRatings > 0 && (
                                    <div className="flex items-center gap-1 text-sm">
                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{averageRating.toFixed(1)}</span>
                                        <span className="text-muted-foreground">({totalRatings})</span>
                                    </div>
                                )}
                                {user && (
                                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => setIsReportDeckOpen(true)}>
                                        <Flag className="h-4 w-4"/>
                                    </Button>
                                )}
                            </div>
                            {deck.description && (
                                <p className="mt-2 text-lg text-muted-foreground max-w-3xl">{deck.description}</p>
                            )}
                            <div className="mt-4 flex flex-wrap items-center gap-4">
                                {deck.ownerId && deck.ownerUsername && deck.ownerUsername !== 'anonymous' ? (
                                    <Link href={`/profile/${deck.ownerUsername}`} className="flex items-center gap-2 hover:bg-accent/50 p-1 rounded-md transition-colors">
                                        <div className="relative">
                                            {deck.ownerUsername === 'studizilla' ? (
                                                <>
                                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse blur-sm opacity-50" />
                                                    <Avatar className="h-6 w-6 relative z-10 ring-2 ring-white dark:ring-gray-900">
                                                        <AvatarImage src={deck.ownerPhotoURL || undefined} alt={deck.ownerName} />
                                                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs">
                                                            <UserIcon className="h-3 w-3" />
                                                        </AvatarFallback>
                                                    </Avatar>
                                                </>
                                            ) : (
                                                <Avatar className="h-6 w-6">
                                                    <AvatarImage src={deck.ownerPhotoURL || undefined} alt={deck.ownerName} />
                                                    <AvatarFallback><UserIcon className="h-4 w-4" /></AvatarFallback>
                                                </Avatar>
                                            )}
                                        </div>
                                        <span className="text-sm font-medium flex items-center gap-1">
                                            @{deck.ownerUsername}
                                            {deck.ownerId === 'studizilla-official' && (
                                                <CheckCircle2 className="h-4 w-4 text-blue-500 fill-blue-500" />
                                            )}
                                        </span>
                                    </Link>
                                ) : deck.ownerId === 'course' || deck.ownerId === 'studizilla-official' ? (
                                    <Link href="/profile/studizilla" className="flex items-center gap-2 hover:bg-accent/50 p-1 rounded-md transition-colors">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse blur-sm opacity-50" />
                                            <Avatar className="h-6 w-6 relative z-10 ring-2 ring-white dark:ring-gray-900">
                                                <AvatarImage src="/images/logo/studizilla-official-avatar.png" alt="Studizilla Official" />
                                                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-xs">
                                                    <UserIcon className="h-3 w-3" />
                                                </AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <span className="text-sm font-medium flex items-center gap-1">
                                            Studizilla Official
                                            <CheckCircle2 className="h-4 w-4 text-blue-500 fill-blue-500" />
                                        </span>
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-2 p-1">
                                        <Avatar className="h-6 w-6">
                                            <AvatarFallback><UserIcon className="h-4 w-4" /></AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm font-medium text-muted-foreground">Deleted User</span>
                                    </div>
                                )}
                                {isOwner && (
                                    <Button variant="outline" size="sm" asChild>
                                        <Link href={`/resources/flashcards/create?deckId=${deck.id}`}>
                                            <Pencil className="mr-2 h-4 w-4" /> Edit
                                        </Link>
                                    </Button>
                                )}
                                <Badge variant="outline" className="text-sm py-1 px-3">
                                    <BookCopy className="mr-2 h-4 w-4"/>
                                    {deck.cards.length} {deck.cards.length === 1 ? 'Card' : 'Cards'}
                                </Badge>
                                {deck.courseId && (
                                    <Badge variant="default" className="text-sm py-1 px-3">
                                        {deck.courseId === 'general' ? 'General' : (courses.find(c => c.id === deck.courseId)?.name || 'Unknown Course')}
                                    </Badge>
                                )}
                                {deck.hashtags && (
                                    <div className="flex flex-wrap items-center gap-2">
                                        <Tags className="h-5 w-5 text-muted-foreground" />
                                        {deck.hashtags.split(' ').filter(Boolean).map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </header>

                    <main className="flex-grow min-h-0 px-6 pb-6">
                        <div className="h-full">
                            <Tabs value={activeTabKey} onValueChange={(value) => {
                                const newPath = navItems.find(item => item.key === value)?.value;
                                if (newPath) router.push(newPath);
                            }} className="w-full">
                                <TabsList className="grid w-full grid-cols-5">
                                    {navItems.map(item => (
                                    <TabsTrigger key={item.key} value={item.key} disabled={item.disabled} asChild={!item.disabled}>
                                        {item.disabled ? (
                                        <span className="flex items-center gap-2">{item.icon && <item.icon className="h-4 w-4" />} {item.name}</span>
                                        ) : (
                                        <Link href={item.value} className="flex items-center gap-2">{item.icon && <item.icon className="h-4 w-4" />} {item.name}</Link>
                                        )}
                                    </TabsTrigger>
                                    ))}
                                </TabsList>
                            </Tabs>
                            <Card className="mt-4 data-[state=active]:animate-in data-[state=active]:fade-in-90 data-[state=active]:slide-in-from-bottom-4">
                               <CardContent className="p-6">
                                {children}
                               </CardContent>
                            </Card>
                        </div>
                    </main>
                </div>
                {user && isReportDeckOpen && (
                    <ReportDeckDialog 
                        isOpen={isReportDeckOpen}
                        onClose={() => setIsReportDeckOpen(false)}
                        deck={deck}
                    />
                )}
            </div>
        </StudyDeckContext.Provider>
    );
}

export default function StudyDeckLayoutWithSuspense({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div className="flex h-full w-full items-center justify-center p-8"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>}>
            <StudyLayout>{children}</StudyLayout>
        </Suspense>
    )
}
