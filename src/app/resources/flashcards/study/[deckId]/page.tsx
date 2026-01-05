
// The root page for a study deck now redirects to the "flashcards" mode by default.
// All content is handled by the layout and the specific page components like flashcards/page.tsx.
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { getCourseDeck } from '@/app/dashboard/dev/course-content-manager/course-deck-actions';

export type FlashcardData = {
  id: string; // Changed from number to string for courseDecks compatibility
  term: string;
  definition: string;
  hint: string;
};

export type CardProgress = {
    status: 'new' | 'learning' | 'almostDone' | 'mastered';
    starred: boolean;
};

export type DeckProgress = {
    [cardId: string]: CardProgress;
};

// This is the full deck object with private and public details combined.
export type Deck = {
    id: string;
    title: string;
    description: string;
    hashtags?: string;
    courseId?: string | null;
    cards: FlashcardData[];
    ownerId: string;
    ownerName: string;
    ownerPhotoURL?: string | null;
    ownerUsername: string;
    studyDefaults?: {
        answerWith: 'term' | 'definition';
        flipDirection: 'horizontal' | 'vertical';
    }
};

type StudyPageProps = {
    params: Promise<{ deckId: string }>;
};

export async function generateMetadata({ params }: StudyPageProps): Promise<Metadata> {
    const { deckId } = await params;
    
    try {
        const deck = await getCourseDeck(deckId);
        
        if (!deck) {
            return {
                title: 'Deck Not Found',
            };
        }
        
        return {
            title: deck.title,
            description: deck.description || `Study ${deck.title} with flashcards, quizzes, and more on Studizilla.`,
            openGraph: {
                title: deck.title,
                description: deck.description || `Study ${deck.title} with flashcards, quizzes, and more on Studizilla.`,
            },
        };
    } catch (error) {
        return {
            title: 'Study Deck',
        };
    }
}

export default async function StudyDeckRootPage({ params }: StudyPageProps) {
    const { deckId } = await params;
    redirect(`/resources/flashcards/study/${deckId}/flashcards`);
}
