
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PartyPopper, LogIn, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GuestBanner() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-primary/10 border-b border-primary/20 text-primary-foreground p-3">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3">
                    <PartyPopper className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-primary">You're in Guest Mode!</h3>
                        <p className="text-sm font-medium text-primary/80">
                            Feel free to explore. Your progress won't be saved.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    <Button asChild size="sm" className={cn("w-full sm:w-auto flex-shrink-0 font-semibold", "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity")}>
                        <Link href="/auth">
                            <LogIn className="mr-2 h-4 w-4" />
                            Sign Up to Save
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="secondary" className="w-full sm:w-auto flex-shrink-0">
                         <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Exit Guest Mode
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
