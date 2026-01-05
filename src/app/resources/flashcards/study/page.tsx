
// This page is a fallback. Users should be redirected to a specific deck.
// Redirects to the main flashcards page if no deck is specified.
import { redirect } from 'next/navigation';

export default function StudyRootPage() {
  redirect('/flashcards');
}
