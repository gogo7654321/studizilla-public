

'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FileWarning, ShieldAlert, FileSearch } from 'lucide-react';
import { TakedownRequests } from './TakedownRequests';
import { DeckModeration } from './DeckModeration';
import { CardModeration } from './CardModeration';

export default function ModerationPage() {
    return (
        <div className="p-8 space-y-6">
            <header className="border-l-4 border-red-500 pl-4 bg-red-500/5 py-3 rounded-r-lg">
                <h1 className="font-headline text-4xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    MODERATION CENTER
                </h1>
                <p className="text-muted-foreground mt-1 text-sm font-mono">
                    Review and manage user-submitted content reports
                </p>
            </header>
            
            <Tabs defaultValue="deck-reports" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-card/50 p-1">
                    <TabsTrigger value="deck-reports" className="font-mono text-sm data-[state=active]:bg-red-500/20">
                        <FileWarning className="mr-2 h-4 w-4" /> Deck Reports
                    </TabsTrigger>
                     <TabsTrigger value="card-reports" className="font-mono text-sm data-[state=active]:bg-orange-500/20">
                        <FileSearch className="mr-2 h-4 w-4" /> Card Reports
                    </TabsTrigger>
                    <TabsTrigger value="takedown-requests" className="font-mono text-sm data-[state=active]:bg-yellow-500/20">
                        <ShieldAlert className="mr-2 h-4 w-4" /> Takedowns
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="deck-reports" className="mt-6">
                    <DeckModeration />
                </TabsContent>
                <TabsContent value="card-reports" className="mt-6">
                    <CardModeration />
                </TabsContent>
                <TabsContent value="takedown-requests" className="mt-6">
                    <TakedownRequests />
                </TabsContent>
            </Tabs>
        </div>
    );
}
