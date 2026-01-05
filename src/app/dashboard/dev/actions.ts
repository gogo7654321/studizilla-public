
'use server';

import { adminDb } from '@/lib/firebase-server';
import { getDocs, collection, writeBatch } from 'firebase-admin/firestore';


/**
 * Deletes all messages from the dev_chat collection.
 * This is a destructive action and should be used with caution.
 */
export async function clearDevChatAction() {
    const messagesCollectionRef = collection(adminDb, 'dev_chat');
    
    try {
        const querySnapshot = await getDocs(messagesCollectionRef);
        const batch = writeBatch(adminDb);

        if (querySnapshot.empty) {
            return { success: true, message: 'Chat is already empty.' };
        }

        querySnapshot.forEach(doc => {
            batch.delete(doc.ref);
        });

        await batch.commit();

        return { success: true, message: 'Dev chat history has been cleared.' };

    } catch (error) {
        console.error("Error clearing dev chat:", error);
        throw new Error("Failed to clear chat history.");
    }
}
