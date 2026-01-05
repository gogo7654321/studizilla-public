
'use client';
import { redirect } from 'next/navigation';

export default function DeprecatedPracticeTestPage() {
    redirect('/flashcards');
    return null;
}
