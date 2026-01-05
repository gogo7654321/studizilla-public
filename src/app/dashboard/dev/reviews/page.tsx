
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy, doc, updateDoc } from 'firebase/firestore';
import type { Timestamp } from 'firebase/firestore';
import { format, subDays } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Check, X, Star, User as UserIcon, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';

type RequestStatus = 'pending' | 'approved' | 'rejected';

type Review = {
  id: string;
  uid: string;
  name: string;
  photoURL: string;
  rating: number;
  title: string;
  review: string;
  location?: string;
  status: RequestStatus;
  createdAt: Timestamp;
};

const statusVariant: Record<RequestStatus, 'default' | 'secondary' | 'destructive'> = {
    pending: 'default',
    approved: 'secondary',
    rejected: 'destructive',
};

function ViewReviewDialog({ review }: { review: Review; }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">View Details</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{review.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                            <Star key={star} className={cn("h-5 w-5", star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")} />
                        ))}
                    </div>
                    <div className="space-y-1">
                        <Label>Author</Label>
                        <p className="text-sm">{review.name}</p>
                    </div>
                     <div className="space-y-1">
                        <Label>Review Text</Label>
                        <p className="text-sm text-muted-foreground p-2 bg-secondary/50 rounded-md">{review.review}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function ReviewsPage() {
    const [allReviews, setAllReviews] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
        
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const fetchedReviews: Review[] = [];
            querySnapshot.forEach((doc) => {
                fetchedReviews.push({ id: doc.id, ...doc.data() } as Review);
            });
            setAllReviews(fetchedReviews);
            setIsLoading(false);
        }, (error) => {
            console.error("Error fetching reviews:", error);
            setIsLoading(false);
            toast({ variant: 'destructive', title: 'Error', description: 'Could not load review submissions.' });
        });

        return () => unsubscribe();
    }, [toast]);
    
    const { pendingReviews, approvedReviews, recentRejectedReviews } = useMemo(() => {
        const oneDayAgo = subDays(new Date(), 1);
        const pending: Review[] = [];
        const approved: Review[] = [];
        const recentRejected: Review[] = [];

        allReviews.forEach(review => {
            if (review.status === 'pending') {
                pending.push(review);
            } else if (review.status === 'approved') {
                approved.push(review);
            } else if (review.status === 'rejected' && review.createdAt.toDate() > oneDayAgo) {
                recentRejected.push(review);
            }
        });
        return { pendingReviews: pending, approvedReviews: approved, recentRejectedReviews: recentRejected };
    }, [allReviews]);

    const handleUpdateStatus = async (id: string, newStatus: RequestStatus) => {
        if (newStatus === 'pending') {
            toast({ variant: 'destructive', title: 'Invalid Status', description: 'Cannot set status to pending.' });
            return;
        }

        try {
            const reviewDocRef = doc(db, 'reviews', id);
            await updateDoc(reviewDocRef, {
                status: newStatus,
                updatedAt: new Date(),
            });
            
            toast({ 
                title: 'Review Status Updated', 
                description: `The review has been marked as ${newStatus}.` 
            });
        } catch (error: any) {
            console.error("❌ Error updating review status:", error);
            toast({ 
                variant: 'destructive', 
                title: 'Update Failed', 
                description: error.message || 'Could not update the review status. Check Firestore security rules.' 
            });
        }
    };

    const renderReviewTable = (reviews: Review[], title: string, description: string) => (
        <Card className="rounded-2xl">
            <CardHeader><CardTitle>{title}</CardTitle><CardDescription>{description}</CardDescription></CardHeader>
            <CardContent>
                <ScrollArea className="h-[600px] border rounded-xl">
                    {reviews.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center p-4">
                            <Check className="h-12 w-12 text-green-500 mb-4" />
                            <h3 className="font-semibold text-lg">Queue Clear!</h3>
                            <p className="text-muted-foreground">There are no reviews in this category.</p>
                        </div>
                    ) : (
                        <Table>
                            <TableHeader><TableRow><TableHead>Author</TableHead><TableHead>Review</TableHead><TableHead>Rating</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {reviews.map(req => (
                                    <TableRow key={req.id}>
                                        <TableCell><div className="flex items-center gap-3"><Avatar className="h-9 w-9"><AvatarImage src={req.photoURL || undefined} /><AvatarFallback><UserIcon /></AvatarFallback></Avatar><div><p className="font-medium">{req.name || 'N/A'}</p></div></div></TableCell>
                                        <TableCell><p className="font-semibold max-w-xs truncate">{req.title}</p></TableCell>
                                        <TableCell><div className="flex items-center gap-0.5">{[...Array(5)].map((_, i) => (<Star key={i} className={cn("h-4 w-4", i < req.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")} />))}</div></TableCell>
                                        <TableCell>{req.createdAt ? format(req.createdAt.toDate(), 'PP') : '...'}</TableCell>
                                        <TableCell><Badge variant={statusVariant[req.status]} className="capitalize">{req.status}</Badge></TableCell>
                                        <TableCell className="text-right space-x-1">
                                            <ViewReviewDialog review={req} />
                                            {req.status === 'pending' && <>
                                                <Button variant="secondary" size="sm" onClick={() => handleUpdateStatus(req.id, 'approved')}><ThumbsUp className="mr-2 h-4 w-4" />Approve</Button>
                                                <Button variant="outline" size="sm" onClick={() => handleUpdateStatus(req.id, 'rejected')}><ThumbsDown className="mr-2 h-4 w-4" />Reject</Button>
                                            </>}
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

    return (
        <div className="p-8 space-y-8">
            <header>
                <h1 className="font-headline text-4xl font-bold flex items-center gap-3"><Star /> Reviews Inbox</h1>
                <p className="text-muted-foreground mt-2 text-lg">Review and approve user-submitted reviews for the landing page.</p>
            </header>
            
            {isLoading ? (
                <div className="flex items-center justify-center h-96"><Loader2 className="h-12 w-12 animate-spin text-muted-foreground" /></div>
            ) : (
                <div className="grid grid-cols-1 gap-8">
                    {renderReviewTable(pendingReviews, "Pending Reviews", "New submissions waiting for approval.")}
                    {renderReviewTable([...approvedReviews, ...recentRejectedReviews], "Moderated Reviews", "Approved reviews and rejections from the last 24 hours.")}
                </div>
            )}
        </div>
    );
}
