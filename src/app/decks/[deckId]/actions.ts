
'use server';

import { adminDb } from '@/lib/firebase-server';
// FlashcardData type definition
export interface FlashcardData {
  id: string;
  term: string;
  definition: string;
  imageUrl?: string;
  termImageUrl?: string;
  definitionImageUrl?: string;
}
import { courses } from '@/lib/courses';

export type PublicDeckDetails = {
    id: string;
    title: string;
    description: string;
    hashtags?: string;
    courseId?: string | null;
    cards: FlashcardData[];
    ownerId: string;
    ownerName: string;
    ownerPhotoURL?: string | null;
    ownerUsername: string;
};

export async function getPublicDeck(deckId: string): Promise<PublicDeckDetails | null> {
    if (!deckId) {
        return null;
    }

    // A collection group query is the most efficient way to find a public deck
    // across all users' subcollections.
    const decksCollectionGroup = adminDb.collectionGroup('flashcardDecks');
    const query = decksCollectionGroup.where('isPublic', '==', true);
    
    // We can't query by document ID in a collection group query directly,
    // so we have to filter in memory. This is not ideal for performance
    // at massive scale, but it's the most reliable way to find a public deck
    // without knowing its owner.
    const querySnapshot = await query.get();

    let deckDocSnap: FirebaseFirestore.DocumentSnapshot | null = null;
    
    querySnapshot.forEach(doc => {
        if (doc.id === deckId) {
            deckDocSnap = doc;
        }
    });

    if (!deckDocSnap || !deckDocSnap.exists) {
        return null; // The deck was not found or is not public.
    }
    
    const deckData = deckDocSnap.data();
    if (!deckData) {
        return null;
    }
    
    let ownerUsername = 'anonymous';
    if(deckData.ownerId) {
        try {
            const ownerDoc = await adminDb.collection('users').doc(deckData.ownerId).get();
            if(ownerDoc.exists()) {
                ownerUsername = ownerDoc.data()?.username || 'anonymous';
            }
        } catch(e) {
            console.error("Could not fetch owner username for public deck:", e);
        }
    }

    return {
        id: deckDocSnap.id,
        title: deckData.title || 'Untitled Deck',
        description: deckData.description || '',
        hashtags: deckData.hashtags || '',
        courseId: deckData.courseId,
        cards: deckData.cards || [],
        ownerId: deckData.ownerId,
        ownerName: deckData.ownerName || 'Anonymous',
        ownerPhotoURL: deckData.ownerPhotoURL || null,
        ownerUsername: ownerUsername,
    };
}
