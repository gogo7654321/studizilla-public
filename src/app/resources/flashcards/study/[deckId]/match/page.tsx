
'use client';

import React from 'react';
import { useStudyDeck } from '../layout';
import { Loader2 } from 'lucide-react';
import { MatchingGamePlayer } from '../../../components/MatchingGamePlayer';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MatchingGamePage() {
    const { deck, progress, isLoading } = useStudyDeck();
    const { user } = useAuth();

    if (isLoading) {
        return <div className="flex h-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>
    }

    if (!user) {
         return (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] p-8">
                <h3 className="font-headline text-2xl font-bold">Log In to Play Match</h3>
                <p className="mt-2 max-w-md text-muted-foreground">Sign up or log in to access this fun study mode and compete for the best time.</p>
                <Button asChild className="mt-6">
                    <Link href="/auth">Log In / Sign Up</Link>
                </Button>
            </div>
        );
    }
    
    return <MatchingGamePlayer deck={deck} initialProgress={progress} />;
}
