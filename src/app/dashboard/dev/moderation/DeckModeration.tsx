
'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import type { Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, ExternalLink, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { updateDeckReportStatus } from './actions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from 'next/link';

type RequestStatus = 'pending' | 'approved' | 'denied';

type DeckReport = {
  id: string;
  reporter: { uid: string; name: string };
  deck: { id: string; title: string; ownerId: string; ownerName: string };
  reason: 'inaccurate' | 'inappropriate' | 'spam' | 'copyright' | 'other';
  details?: string;
  status: RequestStatus;
  createdAt: Timestamp;
};

const statusVariant: Record<RequestStatus, 'default' | 'secondary' | 'destructive'> = {
    pending: 'default',
    approved: 'secondary',
    denied: 'destructive',
};

const statusText: Record<RequestStatus, string> = {
    pending: 'Pending Review',
    approved: 'Removal Approved',
    denied: 'Request Denied',
};

export function DeckModeration() {
    const [reports, setReports] = useState<DeckReport[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const q = query(collection(db, 'deckReports'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedReports: DeckReport[] = [];
            querySnapshot.forEach((doc) => {
                fetchedReports.push({ id: doc.id, ...doc.data() } as DeckReport);
            });
            setReports(fetchedReports);
            setIsLoading(false);
        }, (error) => {
            console.error("Error fetching deck reports:", error);
            setIsLoading(false);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not load deck moderation queue.'
            });
        });

        return () => unsubscribe();
    }, [toast]);

    const handleAction = async (id: string, newStatus: 'approved' | 'denied') => {
        try {
            await updateDeckReportStatus(id, newStatus);
            toast({
                title: `Report ${newStatus}`,
                description: `The report has been updated successfully.`
            });
        } catch (error: any) {
            console.error("Error updating deck report:", error);
             toast({
                variant: 'destructive',
                title: 'Action Failed',
                description: error.message || 'Could not update the report status.'
            });
        }
    }

    return (
        <Card className="rounded-2xl">
            <CardHeader>
                <CardTitle>Deck Report Queue</CardTitle>
                <CardDescription>Review and manage user-submitted reports on entire flashcard decks.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[600px] border rounded-xl">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        </div>
                    ) : reports.length === 0 ? (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-muted-foreground">No deck reports found. Great job!</p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Reported Deck</TableHead>
                                    <TableHead>Reason</TableHead>
                                    <TableHead>Reported By</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {reports.map(req => (
                                    <TableRow key={req.id}>
                                        <TableCell className="font-medium text-xs">
                                            {req.createdAt ? format(req.createdAt.toDate(), 'PPp') : '...'}
                                        </TableCell>
                                        <TableCell>
                                            <Link href={`/dashboard/ace-os/study/${req.deck.id}`} target="_blank" className="font-semibold text-sm hover:underline">{req.deck.title}</Link>
                                            <p className="text-xs text-muted-foreground">by {req.deck.ownerName}</p>
                                        </TableCell>
                                        <TableCell className="capitalize">{req.reason}</TableCell>
                                        <TableCell>{req.reporter.name}</TableCell>
                                        <TableCell>
                                            <Badge variant={statusVariant[req.status]}>
                                                {statusText[req.status]}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right space-x-2">
                                             <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="outline" size="sm">Details</Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Report Details</AlertDialogTitle>
                                                        <AlertDialogDescription>Deck: <Link href={`/dashboard/ace-os/study/${req.deck.id}`} target="_blank" className="underline">{req.deck.title}</Link></AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <div className="bg-secondary rounded-xl p-4 my-4 space-y-2">
                                                      <p className="text-sm"><strong>Reporter:</strong> {req.reporter.name} ({req.reporter.uid})</p>
                                                      <p className="text-sm"><strong>Deck Owner:</strong> {req.deck.ownerName} ({req.deck.ownerId})</p>
                                                      <p className="text-sm"><strong>Reason:</strong> <span className="capitalize">{req.reason}</span></p>
                                                      <div>
                                                        <p className="text-sm font-semibold">User-provided Details:</p>
                                                        <p className="text-sm text-muted-foreground italic">{req.details || 'No additional details provided.'}</p>
                                                      </div>
                                                    </div>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Close</AlertDialogCancel>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                             </AlertDialog>
                                            <Button 
                                                variant="secondary" 
                                                size="icon"
                                                onClick={() => handleAction(req.id, 'approved')}
                                                disabled={req.status !== 'pending'}
                                            >
                                                <Check className="h-4 w-4" />
                                            </Button>
                                            <Button 
                                                variant="destructive" 
                                                size="icon"
                                                onClick={() => handleAction(req.id, 'denied')}
                                                disabled={req.status !== 'pending'}
                                            >
                                                <X className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </ScrollArea>
            </CardContent>
        </Card>
    );
}
