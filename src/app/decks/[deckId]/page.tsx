import { redirect } from 'next/navigation';

// This page is now deprecated in favor of the unified study page.
export default function DeckPage({ params }: { params: { deckId: string }}) {
  redirect(`/resources/flashcards/study/${params.deckId}`);
}
