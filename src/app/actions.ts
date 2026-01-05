
'use server';

import { adminDb } from '@/lib/firebase-server';
import { FieldValue } from 'firebase-admin/firestore';

export type ReviewData = {
    uid: string;
    name: string;
    photoURL: string;
    rating: number;
    title: string;
    review: string;
}

export async function submitReviewAction(data: ReviewData) {
     if (!data.uid) {
        throw new Error("You must be logged in to submit a review.");
    }
    if (!data.title || !data.review || !data.rating) {
        throw new Error("Rating, title, and review text cannot be empty.");
    }
    
    try {
        const reviewsCollectionRef = adminDb.collection('reviews');
        await reviewsCollectionRef.add({
            ...data,
            status: 'pending',
            createdAt: FieldValue.serverTimestamp(),
        });
    } catch (error) {
        console.error("Error submitting review:", error);
        throw new Error("Could not submit your review at this time.");
    }
}

export async function getApprovedReviews(): Promise<ReviewData[]> {
    try {
        // Check if we have valid credentials before making the call
        if (!process.env.FIREBASE_SERVICE_ACCOUNT && process.env.NODE_ENV === 'development') {
            console.log('Firebase Admin credentials not configured, returning empty reviews');
            return [];
        }
        
        const reviewsSnapshot = await adminDb.collection('reviews')
            .where('status', '==', 'approved')
            .orderBy('createdAt', 'desc')
            .get();
        
        if (reviewsSnapshot.empty) {
            return [];
        }

        return reviewsSnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                uid: data.uid,
                name: data.name,
                photoURL: data.photoURL,
                rating: data.rating,
                title: data.title,
                review: data.review,
            }
        });
    } catch (error) {
        console.error("Error fetching approved reviews:", error);
        // In a production scenario, you might want to return static data as a fallback.
        return [];
    }
}

