

'use server';

import { adminDb } from '@/lib/firebase-server';
import { FieldValue } from 'firebase-admin/firestore';

export type GameHistoryEntry = {
    date: number; // Store as timestamp
    pairs: number;
    time: number;
    moves: number;
};

export type DeepDiveHistoryEntry = {
    date: number; // Store as timestamp
    duration: number; // in seconds
    roundLength: number;
    correct: number;
    incorrect: number;
    questionTypes: string[];
    correctQuestionIds: number[];
    incorrectQuestionIds: number[];
}

/**
 * Saves a new match game history entry for a user and deck.
 * It keeps a rolling log of the last 10 games.
 * @param uid The user's ID.
 * @param deckId The deck ID the game was played on.
 * @param newEntry The new game history entry to add.
 */
export async function saveMatchHistoryAction(uid: string, deckId: string, newEntry: GameHistoryEntry) {
    if (!uid || !deckId) {
        throw new Error('User ID and Deck ID are required.');
    }

    const userDocRef = adminDb.collection('users').doc(uid);

    try {
        const userDoc = await userDocRef.get();
        const userData = userDoc.data();
        
        const allHistory = userData?.matchGameHistory || {};
        const deckHistory: GameHistoryEntry[] = allHistory[deckId] || [];

        // Add the new entry and keep only the last 10
        const updatedHistory = [newEntry, ...deckHistory].slice(0, 10);
        
        await userDocRef.set({
            matchGameHistory: {
                ...allHistory,
                [deckId]: updatedHistory,
            }
        }, { merge: true });

    } catch (error) {
        console.error('Error saving match history:', error);
        // We don't throw here to avoid interrupting the user's game flow
        // for a non-critical background save.
    }
}

/**
 * Saves a new Deep Dive session history entry for a user and deck.
 * It keeps a rolling log of the last 10 sessions.
 * @param uid The user's ID.
 * @param deckId The deck ID the session was for.
 * @param newEntry The new session history entry to add.
 */
export async function saveDeepDiveHistoryAction(uid: string, deckId: string, newEntry: DeepDiveHistoryEntry) {
    if (!uid || !deckId) {
        throw new Error('User ID and Deck ID are required.');
    }

    const userDocRef = adminDb.collection('users').doc(uid);

    try {
        const userDoc = await userDocRef.get();
        const userData = userDoc.data();
        
        const allHistory = userData?.deepDiveHistory || {};
        const deckHistory: DeepDiveHistoryEntry[] = allHistory[deckId] || [];

        // Add the new entry and keep only the last 10
        const updatedHistory = [newEntry, ...deckHistory].slice(0, 10);
        
        await userDocRef.set({
            deepDiveHistory: {
                ...allHistory,
                [deckId]: updatedHistory,
            }
        }, { merge: true });

    } catch (error) {
        console.error('Error saving deep dive history:', error);
    }
}


export type DeckReportData = {
    reporter: { uid: string, name: string };
    deck: { id: string, title: string, ownerId: string, ownerName: string };
    reason: 'inaccurate' | 'inappropriate' | 'spam' | 'copyright' | 'other';
    details?: string;
};

/**
 * Submits a report for a specific flashcard deck.
 * @param data The report data.
 */
export async function submitDeckReportAction(data: DeckReportData) {
    if (!data.reporter.uid || !data.deck.id || !data.reason) {
        throw new Error("Missing required report data.");
    }
    
    const report = {
        ...data,
        status: 'pending',
        createdAt: FieldValue.serverTimestamp(),
    };
    
    await adminDb.collection('deckReports').add(report);
}
