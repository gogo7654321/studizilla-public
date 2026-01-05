
'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AceMascot } from './AceMascot';

export function WelcomePopup({ name, onClose }: { name: string; onClose: () => void }) {
    return (
        <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="sm:max-w-md text-center solid-dialog">
                <DialogHeader className="items-center">
                <AceMascot className="h-20 w-20 mb-2" />
                <DialogTitle className="font-headline text-2xl">Welcome to Studizilla, {name}!</DialogTitle>
                <DialogDescription className="text-base">
                    We’re glad you’re here — let’s make studying actually work for you 💪.
                </DialogDescription>
                </DialogHeader>
                <Button onClick={onClose}>Let's Go!</Button>
            </DialogContent>
        </Dialog>
    );
}
