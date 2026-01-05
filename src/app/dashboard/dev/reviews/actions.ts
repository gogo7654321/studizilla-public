
'use server';

import { db } from '@/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

/**
 * Updates the status of a review document.
 * This action no longer updates or deletes the review content itself,
 * focusing only on changing the status for moderation tracking.
 * @param reviewId The ID of the review to update.
 * @param newStatus The new status to set ('approved' or 'rejected').
 */
export async function updateReviewStatus(reviewId: string, newStatus: 'approved' | 'rejected') {
    try {
        if (!reviewId || !newStatus) {
            throw new Error("Review ID and new status are required.");
        }
        
        const reviewDocRef = doc(db, 'reviews', reviewId);

        await updateDoc(reviewDocRef, {
            status: newStatus,
            updatedAt: new Date(),
        });
        
        console.log(`✅ Review ${reviewId} has been ${newStatus}`);
        
        return { success: true, message: `Review ${newStatus} successfully` };
    } catch (error: any) {
        console.error("❌ Error updating review status:", error);
        
        // Provide more specific error messages
        if (error.code === 'permission-denied') {
            throw new Error('Permission denied. Check Firestore security rules.');
        } else if (error.code === 'not-found') {
            throw new Error('Review not found in database.');
        } else {
            throw new Error(`Failed to update review: ${error.message || 'Unknown error'}`);
        }
    }
}
