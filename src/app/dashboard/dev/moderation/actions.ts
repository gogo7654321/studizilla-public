

'use server';

import { adminDb } from '@/lib/firebase-server';
import { doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';

type RequestStatus = 'approved' | 'denied';

export async function updateRequestStatus(requestId: string, newStatus: RequestStatus) {
    if (!requestId || !newStatus) {
        throw new Error("Request ID and new status are required.");
    }
    
    const requestDocRef = doc(adminDb, 'takedownRequests', requestId);

    try {
        await updateDoc(requestDocRef, {
            status: newStatus
        });
    } catch (error) {
        console.error("Error updating takedown request status:", error);
        throw new Error("Failed to update request status.");
    }
}

export async function updateDeckReportStatus(reportId: string, newStatus: RequestStatus) {
    if (!reportId || !newStatus) {
        throw new Error("Report ID and new status are required.");
    }
    
    const reportDocRef = doc(adminDb, 'deckReports', reportId);

    try {
        await updateDoc(reportDocRef, {
            status: newStatus,
            reviewedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error updating deck report status:", error);
        throw new Error("Failed to update card report status.");
    }
}

export async function updateCardReportStatus(reportId: string, newStatus: RequestStatus) {
    if (!reportId || !newStatus) {
        throw new Error("Report ID and new status are required.");
    }
    
    const reportDocRef = doc(adminDb, 'cardReports', reportId);

    try {
        await updateDoc(reportDocRef, {
            status: newStatus,
            reviewedAt: serverTimestamp(),
        });
    } catch (error) {
        console.error("Error updating card report status:", error);
        throw new Error("Failed to update card report status.");
    }
}

export async function takeActionOnDeck(deckId: string, ownerId: string, action: 'delete' | 'unpublish') {
    if (!deckId || !ownerId || !action) {
        throw new Error("Deck ID, Owner ID, and action are required.");
    }
    
    const deckDocRef = doc(adminDb, `users/${ownerId}/flashcardDecks`, deckId);
    
    try {
        if (action === 'delete') {
            await updateDoc(deckDocRef, { status: 'archived', isPublic: false });
        } else if (action === 'unpublish') {
            await updateDoc(deckDocRef, { isPublic: false, status: 'draft' });
        }
    } catch (error) {
        console.error(`Error taking action '${action}' on deck:`, error);
        throw new Error(`Failed to ${action} deck.`);
    }
}

export async function getDeckForModeration(deckId: string, ownerId: string) {
    if (!deckId || !ownerId) {
        return null;
    }
    
    const deckDocRef = doc(adminDb, `users/${ownerId}/flashcardDecks`, deckId);
    const deckSnap = await getDoc(deckDocRef);
    
    if (!deckSnap.exists()) {
        return null;
    }
    
    const data = deckSnap.data();
    return {
        id: deckSnap.id,
        title: data?.title || 'Untitled',
        cards: data?.cards || [],
    };
}
