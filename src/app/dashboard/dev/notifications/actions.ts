
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { marked } from 'marked';

type NotificationData = {
    title: string;
    message: string;
    type: 'info' | 'update' | 'warning';
    link?: string;
    sentBy: string;
}

/**
 * Sends a global notification by creating a document in the root 'notifications' collection.
 * This is a scalable approach to broadcast messages to all users.
 * @param data The notification data.
 */
export async function sendGlobalNotificationAction(data: NotificationData) {
    if (!data.title || !data.message) {
        throw new Error('Title and message are required.');
    }
    
    try {
        // Convert markdown to HTML for the message body
        const messageHtml = await marked.parse(data.message);

        const notificationsCollectionRef = collection(db, 'notifications');
        
        await addDoc(notificationsCollectionRef, {
            title: data.title,
            message: messageHtml,
            type: data.type,
            link: data.link || null,
            createdAt: serverTimestamp(),
            sentBy: data.sentBy,
            isGlobal: true,
        });

        return { success: true };
    } catch (error: any) {
        console.error("Error sending global notification:", error);
        throw new Error(`Failed to send notification: ${error.message || 'Unknown error'}`);
    }
}

/**
 * Edit an existing global notification - updates for all users
 * @param notificationId The ID of the notification to edit
 * @param data The updated notification data
 */
export async function editGlobalNotificationAction(notificationId: string, data: NotificationData) {
    if (!data.title || !data.message) {
        throw new Error('Title and message are required.');
    }
    
    try {
        // Convert markdown to HTML for the message body
        const messageHtml = await marked.parse(data.message);

        const notificationRef = doc(db, 'notifications', notificationId);
        
        await updateDoc(notificationRef, {
            title: data.title,
            message: messageHtml,
            type: data.type,
            link: data.link || null,
            updatedAt: serverTimestamp(),
            updatedBy: data.sentBy,
        });

        return { success: true };
    } catch (error: any) {
        console.error("Error updating global notification:", error);
        throw new Error(`Failed to update notification: ${error.message || 'Unknown error'}`);
    }
}

/**
 * Delete a global notification - removes for all users
 * @param notificationId The ID of the notification to delete
 */
export async function deleteGlobalNotificationAction(notificationId: string) {
    try {
        const notificationRef = doc(db, 'notifications', notificationId);
        await deleteDoc(notificationRef);
        return { success: true };
    } catch (error: any) {
        console.error("Error deleting global notification:", error);
        throw new Error(`Failed to delete notification: ${error.message || 'Unknown error'}`);
    }
}
