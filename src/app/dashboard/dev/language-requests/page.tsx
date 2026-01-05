
'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy, doc, updateDoc } from 'firebase/firestore';
import type { Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Check, Archive, Languages } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type RequestStatus = 'pending' | 'completed' | 'denied';

type LanguageRequest = {
  id: string;
  requestedLanguage: string;
  userEmail: string | null;
  userName: string | null;
  status: RequestStatus;
  createdAt: Timestamp;
};

const statusVariant: Record<RequestStatus, 'default' | 'secondary' | 'destructive'> = {
    pending: 'default',
    completed: 'secondary',
    denied: 'destructive',
};

export default function LanguageRequestsPage() {
    const [requests, setRequests] = useState<LanguageRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const q = query(collection(db, 'languageRequests'), orderBy('createdAt', 'desc'));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedRequests: LanguageRequest[] = [];
            querySnapshot.forEach((doc) => {
                fetchedRequests.push({ id: doc.id, ...doc.data() } as LanguageRequest);
            });
            setRequests(fetchedRequests);
            setIsLoading(false);
        }, (error) => {
            console.error("Error fetching language requests:", error);
            setIsLoading(false);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not load language requests.'
            });
        });

        return () => unsubscribe();
    }, [toast]);

    const handleUpdateRequest = async (id: string, newStatus: RequestStatus) => {
        const requestDocRef = doc(db, 'languageRequests', id);
        try {
            await updateDoc(requestDocRef, { status: newStatus });
            toast({
                title: 'Request Updated',
                description: `The request has been marked as ${newStatus}.`,
            });
        } catch (error) {
            console.error("Error updating request status:", error);
            toast({
                variant: 'destructive',
                title: 'Update Failed',
                description: 'Could not update the request status.',
            });
        }
    };

    return (
        <div className="p-8 space-y-8">
            <header>
                <h1 className="font-headline text-4xl font-bold flex items-center gap-3"><Languages /> Language Requests</h1>
                <p className="text-muted-foreground mt-2 text-lg">Review and manage user-submitted language requests for the AI generator.</p>
            </header>
            <Card className="rounded-2xl">
                <CardHeader>
                    <CardTitle>Request Queue</CardTitle>
                    <CardDescription>
                        All submitted language requests are listed below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[600px] border rounded-xl">
                        {isLoading ? (
                            <div className="flex items-center justify-center h-full">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                            </div>
                        ) : requests.length === 0 ? (
                             <div className="flex flex-col items-center justify-center h-full text-center p-4">
                                <Check className="h-12 w-12 text-green-500 mb-4" />
                                <h3 className="font-semibold text-lg">All caught up!</h3>
                                <p className="text-muted-foreground">There are no pending language requests.</p>
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Requested Language</TableHead>
                                        <TableHead>User</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {requests.map(req => (
                                        <TableRow key={req.id}>
                                            <TableCell className="font-semibold">{req.requestedLanguage}</TableCell>
                                            <TableCell>
                                                <div>
                                                    <p className="font-medium">{req.userName || 'N/A'}</p>
                                                    <p className="text-xs text-muted-foreground">{req.userEmail}</p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {req.createdAt ? format(req.createdAt.toDate(), 'PPp') : '...'}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={statusVariant[req.status]} className="capitalize">
                                                    {req.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right space-x-2">
                                                <Button 
                                                    variant="secondary" 
                                                    size="sm"
                                                    onClick={() => handleUpdateRequest(req.id, 'completed')}
                                                    disabled={req.status !== 'pending'}
                                                >
                                                    <Check className="mr-2 h-4 w-4" /> Mark as Done
                                                </Button>
                                                <Button 
                                                    variant="outline" 
                                                    size="sm"
                                                    onClick={() => handleUpdateRequest(req.id, 'denied')}
                                                    disabled={req.status !== 'pending'}
                                                >
                                                     <Archive className="mr-2 h-4 w-4" /> Archive
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
        </div>
    );
}
