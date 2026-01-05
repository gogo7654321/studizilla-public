
'use server';

import { adminDb, adminStorage } from '@/lib/firebase-server';
import { FieldValue } from 'firebase-admin/firestore';
import type { UserRecord } from 'firebase-admin/auth';
import { isDev } from '@/lib/authUtils';

/**
 * A simple, serializable object representing a user for server actions.
 */
type SimpleUser = {
    uid: string;
    displayName: string | null;
    photoURL: string | null;
}

/**
 * Safely converts Firestore data to plain objects, handling timestamps and circular references
 */
function safeSerializeFirestoreData(data: any, seen = new WeakSet()): any {
    if (data === null || typeof data !== 'object') {
        return data;
    }

    // Prevent circular references
    if (seen.has(data)) {
        return '[Circular Reference]';
    }
    seen.add(data);

    // Handle Firestore Timestamps
    if (data && typeof data === 'object' && 
        data.hasOwnProperty('seconds') && data.hasOwnProperty('nanoseconds')) {
        return new Date(data.seconds * 1000).toISOString();
    }

    // Handle arrays
    if (Array.isArray(data)) {
        return data.map(item => safeSerializeFirestoreData(item, seen));
    }

    // Handle objects
    const result: any = {};
    for (const [key, value] of Object.entries(data)) {
        try {
            result[key] = safeSerializeFirestoreData(value, seen);
        } catch (error) {
            result[key] = '[Serialization Error]';
        }
    }

    return result;
}

/**
 * Adds a system message to a chat thread.
 * @param userId - The ID of the user's chat to add the message to.
 * @param text - The content of the system message.
 */
async function addSystemMessage(userId: string, text: string) {
    try {
        const chatDocRef = adminDb.collection('supportChats').doc(userId);
        const messagesCollection = chatDocRef.collection('messages');
        await messagesCollection.add({
            text,
            authorId: 'system',
            authorName: 'System',
            timestamp: FieldValue.serverTimestamp(),
        });
    } catch (error) {
        console.error('Error adding system message:', error);
        throw error;
    }
}

/**
 * Posts a reply from a support agent to a user's chat.
 * @param agent - A simple object with the agent's info.
 * @param userId - The ID of the user receiving the reply.
 * @param message - The message content to post.
 */
export async function postAgentReplyAction(agent: SimpleUser, userId: string, message: string) {
    if (!userId || !message.trim()) {
      throw new Error("User ID and message are required.");
    }
    if (!agent || !agent.uid) {
        throw new Error("Agent information is missing.");
    }

    try {
        const chatDocRef = adminDb.collection('supportChats').doc(userId);
        const userDocRef = adminDb.collection('users').doc(userId);
        const messagesCollection = chatDocRef.collection('messages');

        // Check if a chat document exists, if not, create it
        const chatDoc = await chatDocRef.get();
        if (!chatDoc.exists) {
            const userDoc = await userDocRef.get();
            if (!userDoc.exists) {
                throw new Error("Target user does not exist.");
            }
            const userData = userDoc.data()!;
            await chatDocRef.set({
                lastMessage: message,
                lastMessageTimestamp: FieldValue.serverTimestamp(),
                userEmail: userData.email,
                userName: userData.displayName || userData.firstName,
                userPhotoURL: userData.photoURL || null,
                status: 'open',
                agentOnline: true,
                hasUnreadUserMessages: false,
                priority: 'medium',
                category: 'other',
                description: 'Chat initiated by support agent.'
            }, { merge: true });
            await addSystemMessage(userId, 'A support agent has started this chat.');
        }


        await messagesCollection.add({
            text: message,
            authorId: agent.uid,
            authorName: agent.displayName || 'Support Agent',
            authorPhotoURL: agent.photoURL,
            timestamp: FieldValue.serverTimestamp(),
        });

        await chatDocRef.update({
            lastMessage: message,
            lastMessageTimestamp: FieldValue.serverTimestamp(),
            agentOnline: true,
            hasUnreadUserMessages: false,
            status: 'open', // Ensure chat is open when agent replies
        });
    } catch (error) {
        console.error('Error posting agent reply:', error);
        throw error;
    }
}

/**
 * Marks a support chat as 'resolved'.
 * @param userId - The ID of the user's chat to close.
 */
export async function closeChatAction(userId: string) {
    if (!userId) throw new Error("User ID is required.");
    
    try {
        const chatDocRef = adminDb.collection('supportChats').doc(userId);
        const chatDoc = await chatDocRef.get();
        if (!chatDoc.exists) throw new Error("Chat not found.");

        await chatDocRef.update({ status: 'resolved' });
        await addSystemMessage(userId, 'An agent has marked this chat as resolved.');
    } catch (error) {
        console.error('Error closing chat:', error);
        throw error;
    }
}

/**
 * Reopens a resolved support chat.
 * @param userId - The ID of the user's chat to reopen.
 */
export async function reopenChatAction(userId: string) {
    if (!userId) throw new Error("User ID is required.");
    
    try {
        const chatDocRef = adminDb.collection('supportChats').doc(userId);
        const chatDoc = await chatDocRef.get();
        if (!chatDoc.exists) throw new Error("Chat not found.");

        await chatDocRef.update({ status: 'open' });
        await addSystemMessage(userId, 'An agent has re-opened this chat.');
    } catch (error) {
        console.error('Error reopening chat:', error);
        throw error;
    }
}

/**
 * Deletes a support chat and all its messages permanently.
 * @param userId - The ID of the user's chat to delete.
 */
export async function deleteChatAndMessagesAction(userId: string) {
    if (!userId) throw new Error("User ID is required.");
    
    try {
        const chatDocRef = adminDb.collection('supportChats').doc(userId);
        const chatDoc = await chatDocRef.get();
        if (!chatDoc.exists) throw new Error("Chat not found.");

        // Delete all messages in the subcollection
        const messagesCollectionRef = chatDocRef.collection('messages');
        const messagesSnapshot = await messagesCollectionRef.get();
        
        if (messagesSnapshot.size > 0) {
            const batch = adminDb.batch();
            messagesSnapshot.forEach(docSnapshot => {
                batch.delete(docSnapshot.ref);
            });
            await batch.commit();
        }
        
        // Delete attachments from Firebase Storage
        const bucket = adminStorage.bucket();
        const folderPath = `support-attachments/${userId}/`;
        await bucket.deleteFiles({ prefix: folderPath });

        // Finally, delete the chat document itself
        await chatDocRef.delete();
    } catch (error) {
        console.error('Error deleting chat and messages:', error);
        throw error;
    }
}

/**
 * Fetches and returns a user's data from Firestore.
 * @param userId - The ID of the user whose data is being requested.
 * @returns The user's document data.
 */
export async function requestUserDataAction(userId: string) {
    if (!userId) throw new Error("User ID is required.");

    try {
        const userDocRef = adminDb.collection('users').doc(userId);
        const userDocSnap = await userDocRef.get();
        if (!userDocSnap.exists) throw new Error("User data not found in Firestore.");

        const userData = userDocSnap.data();
        return safeSerializeFirestoreData(userData);
    } catch (error) {
        console.error('Error requesting user data:', error);
        throw error;
    }
}

/**
 * Uploads a file attachment to a support chat.
 * @param formData - The form data containing the file and chat details.
 */
export async function uploadSupportAttachmentAction(formData: FormData) {
    const file = formData.get('file') as File;
    const authorId = formData.get('authorId') as string;
    const authorName = formData.get('authorName') as string;
    const chatId = formData.get('chatId') as string;
    const authorPhotoURL = formData.get('authorPhotoURL') as string;

    if (!file || !authorId || !chatId) {
        throw new Error('Missing required data for file upload.');
    }

    const bucket = adminStorage.bucket();
    const filePath = `support-attachments/${chatId}/${Date.now()}_${file.name}`;
    const fileUpload = bucket.file(filePath);

    try {
        const buffer = Buffer.from(await file.arrayBuffer());
        await fileUpload.save(buffer, {
            metadata: { contentType: file.type },
        });

        // The file is not public by default. We need to get a signed URL.
        const [url] = await fileUpload.getSignedUrl({
            action: 'read',
            expires: '03-09-2491' // A very long time from now
        });

        const chatDocRef = adminDb.collection('supportChats').doc(chatId);
        const messagesCollectionRef = chatDocRef.collection('messages');
        
        const messageText = `Attachment: <a href="${url}" target="_blank" rel="noopener noreferrer" class="underline text-blue-500 hover:text-blue-700">${file.name}</a>`;

        await messagesCollectionRef.add({
            text: messageText,
            authorId: authorId,
            authorName: authorName,
            authorPhotoURL: authorPhotoURL,
            timestamp: FieldValue.serverTimestamp(),
            isAttachment: true,
        });

        await chatDocRef.update({
            lastMessage: `📎 ${file.name}`,
            lastMessageTimestamp: FieldValue.serverTimestamp(),
        });

        return { success: true };
    } catch (error) {
        console.error('Error uploading support attachment:', error);
        throw new Error('Failed to upload attachment.');
    }
}
