
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
import { updateRequestStatus } from './actions';
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
import { cn } from '@/lib/utils';

type RequestStatus = 'pending' | 'approved' | 'denied';

type TakedownRequest = {
  id: string;
  username: string;
  reason: string;
  links: string;
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

export function TakedownRequests() {
    const [requests, setRequests] = useState<TakedownRequest[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const q = query(collection(db, 'takedownRequests'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedRequests: TakedownRequest[] = [];
            querySnapshot.forEach((doc) => {
                fetchedRequests.push({ id: doc.id, ...doc.data() } as TakedownRequest);
            });
            setRequests(fetchedRequests);
            setIsLoading(false);
        }, (error) => {
            console.error("Error fetching takedown requests:", error);
            setIsLoading(false);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Could not load moderation queue.'
            });
        });

        return () => unsubscribe();
    }, [toast]);

    const handleAction = async (id: string, newStatus: 'approved' | 'denied') => {
        try {
            await updateRequestStatus(id, newStatus);
            toast({
                title: `Request ${newStatus}`,
                description: `The request has been updated successfully.`
            });
        } catch (error: any) {
            console.error("Error updating takedown request:", error);
             toast({
                variant: 'destructive',
                title: 'Action Failed',
                description: error.message || 'Could not update the request status.'
            });
        }
    }

    return (
        <Card className="rounded-2xl">
            <CardHeader>
                <CardTitle>Takedown Request Queue</CardTitle>
                <CardDescription>All submitted content removal requests are listed below in real-time.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[600px] border rounded-xl">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        </div>
                    ) : requests.length === 0 ? (
                            <div className="flex items-center justify-center h-full">
                            <p className="text-muted-foreground">The takedown queue is empty. Great job!</p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Reported By</TableHead>
                                    <TableHead>Reason</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {requests.map(req => (
                                    <TableRow key={req.id}>
                                        <TableCell className="font-medium">
                                            {req.createdAt ? format(req.createdAt.toDate(), 'PPp') : '...'}
                                        </TableCell>
                                        <TableCell>{req.username}</TableCell>
                                        <TableCell className="capitalize max-w-xs truncate">{req.reason}</TableCell>
                                        <TableCell>
                                            <Badge variant={statusVariant[req.status]}>
                                                {statusText[req.status]}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right space-x-2">
                                                <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="outline" size="sm">View Links</Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Reported Links</AlertDialogTitle>
                                                        <AlertDialogDescription>The following links were submitted for removal. Please review them carefully before taking action.</AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <div className="bg-secondary rounded-xl p-4 my-4 max-h-60 overflow-y-auto">
                                                        <pre className="text-sm whitespace-pre-wrap font-mono break-all">{req.links}</pre>
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
