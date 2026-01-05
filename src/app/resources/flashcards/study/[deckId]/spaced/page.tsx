

'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { History } from 'lucide-react';

const ComingSoonContent = ({ title, description, icon: Icon }: { title: string, description: string, icon: React.ElementType }) => (
    <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] p-8">
        <Icon className="h-16 w-16 text-primary mb-4" />
        <h3 className="font-headline text-2xl font-bold">{title}</h3>
        <p className="mt-2 max-w-md text-muted-foreground">{description}</p>
        <Button variant="outline" className="mt-6" disabled>Coming Soon</Button>
    </div>
);

export default function SpacedRepetitionPage() {
    return (
        <ComingSoonContent 
            title="Spaced Repetition" 
            description="This feature is coming soon! Our algorithm will schedule reviews at the perfect intervals to move cards into your long-term memory, ensuring you're ready for test day."
            icon={History}
        />
    );
}
