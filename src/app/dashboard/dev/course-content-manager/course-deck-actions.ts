/**
 * Client-side functions for managing course flashcard decks
 * These decks are separate from user-created decks and belong to course content
 * 
 * Note: These are client-side functions, not server actions
 * They require the user to be authenticated and have dev permissions
 */

import { db } from '@/lib/firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import type { CourseDeck, CourseDeckCard } from '@/lib/course-deck-schema';

// ==================== GET DECKS ====================

export async function getCourseDecks(courseId: string): Promise<CourseDeck[]> {
  try {
    const decksRef = collection(db, 'courseDecks');
    const q = query(
      decksRef,
      where('courseId', '==', courseId),
      orderBy('unitNumber', 'asc'),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseDeck));
  } catch (error: any) {
    console.error('Error fetching course decks:', error);
    throw new Error(`Failed to fetch course decks: ${error.message}`);
  }
}

export async function getCourseDeck(deckId: string): Promise<CourseDeck | null> {
  try {
    const deckRef = doc(db, 'courseDecks', deckId);
    const deckSnap = await getDoc(deckRef);
    if (!deckSnap.exists()) return null;
    return { ...deckSnap.data(), id: deckSnap.id } as CourseDeck;
  } catch (error: any) {
    console.error('Error fetching course deck:', error);
    throw new Error(`Failed to fetch course deck: ${error.message}`);
  }
}

export async function getUnitDecks(courseId: string, unitId: string): Promise<CourseDeck[]> {
  try {
    const decksRef = collection(db, 'courseDecks');
    const q = query(
      decksRef,
      where('courseId', '==', courseId),
      where('unitId', '==', unitId),
      orderBy('order', 'asc')
    );
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({ 
      ...doc.data(), 
      id: doc.id 
    } as CourseDeck));
  } catch (error: any) {
    console.error('Error fetching unit decks:', error);
    throw new Error(`Failed to fetch unit decks: ${error.message}`);
  }
}

// ==================== CREATE/UPDATE/DELETE DECKS ====================

export async function createCourseDeck(deck: Omit<CourseDeck, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const deckData = {
      ...deck,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    const docRef = await addDoc(collection(db, 'courseDecks'), deckData);
    return docRef.id;
  } catch (error: any) {
    console.error('Error creating course deck:', error);
    throw new Error(`Failed to create course deck: ${error.message}`);
  }
}

export async function updateCourseDeck(deckId: string, updates: Partial<CourseDeck>): Promise<void> {
  try {
    const deckRef = doc(db, 'courseDecks', deckId);
    await updateDoc(deckRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error updating course deck:', error);
    throw new Error(`Failed to update course deck: ${error.message}`);
  }
}

export async function deleteCourseDeck(deckId: string): Promise<void> {
  try {
    const deckRef = doc(db, 'courseDecks', deckId);
    await deleteDoc(deckRef);
  } catch (error: any) {
    console.error('Error deleting course deck:', error);
    throw new Error(`Failed to delete course deck: ${error.message}`);
  }
}

// ==================== MANAGE CARDS ====================

export async function addCardToDeck(deckId: string, card: CourseDeckCard): Promise<void> {
  try {
    const deckRef = doc(db, 'courseDecks', deckId);
    const deckSnap = await getDoc(deckRef);
    if (!deckSnap.exists()) throw new Error('Deck not found');
    
    const deck = deckSnap.data() as CourseDeck;
    deck.cards.push(card);
    
    await updateDoc(deckRef, {
      cards: deck.cards,
      updatedAt: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error adding card to deck:', error);
    throw new Error(`Failed to add card to deck: ${error.message}`);
  }
}

export async function updateCardInDeck(deckId: string, cardId: string, updates: Partial<CourseDeckCard>): Promise<void> {
  try {
    const deckRef = doc(db, 'courseDecks', deckId);
    const deckSnap = await getDoc(deckRef);
    if (!deckSnap.exists()) throw new Error('Deck not found');
    
    const deck = deckSnap.data() as CourseDeck;
    const cardIndex = deck.cards.findIndex(c => c.id === cardId);
    if (cardIndex === -1) throw new Error('Card not found');
    
    deck.cards[cardIndex] = {
      ...deck.cards[cardIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    await updateDoc(deckRef, {
      cards: deck.cards,
      updatedAt: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error updating card in deck:', error);
    throw new Error(`Failed to update card in deck: ${error.message}`);
  }
}

export async function deleteCardFromDeck(deckId: string, cardId: string): Promise<void> {
  try {
    const deckRef = doc(db, 'courseDecks', deckId);
    const deckSnap = await getDoc(deckRef);
    if (!deckSnap.exists()) throw new Error('Deck not found');
    
    const deck = deckSnap.data() as CourseDeck;
    deck.cards = deck.cards.filter(c => c.id !== cardId);
    
    await updateDoc(deckRef, {
      cards: deck.cards,
      updatedAt: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Error deleting card from deck:', error);
    throw new Error(`Failed to delete card from deck: ${error.message}`);
  }
}
