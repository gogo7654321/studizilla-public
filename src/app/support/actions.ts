
'use server';

import { adminDb } from '@/lib/firebase-server';
import { FieldValue } from 'firebase-admin/firestore';
import { headers } from 'next/headers';

export type SupportRequestData = {
    uid: string;
    name: string;
    email: string;
    category: 'account' | 'technical' | 'feedback' | 'content-error' | 'other';
    priority: 'low' | 'medium' | 'high' | 'suggestion';
    description: string;
    photoURL?: string | null;
}

const categoryStyles: Record<SupportRequestData['category'], string> = {
    account: 'background-color:#E9D5FF; color:#5B21B6; border:1px solid #C4B5FD;', // Purple
    technical: 'background-color:#DBEAFE; color:#1D4ED8; border:1px solid #93C5FD;', // Blue
    feedback: 'background-color:#FCE7F3; color:#9D174D; border:1px solid #F9A8D4;', // Pink
    'content-error': 'background-color:#FEF3C7; color:#B45309; border:1px solid #FCD34D;', // Amber
    other: 'background-color:#F3F4F6; color:#374151; border:1px solid #D1D5DB;', // Gray
};

const priorityStyles: Record<SupportRequestData['priority'], string> = {
    high: 'background-color:#FEE2E2; color:#B91C1C; border:1px solid #FCA5A5;', // Red
    medium: 'background-color:#FEF9C3; color:#A16207; border:1px solid #FDE047;', // Yellow
    low: 'background-color:#E0E7FF; color:#3730A3; border:1px solid #A5B4FC;', // Indigo
    suggestion: 'background-color:#E0F2F1; color:#004D40; border:1px solid #80CBC4;', // Teal
};

export async function submitSupportRequest(data: SupportRequestData) {
    if (!data.uid) {
        throw new Error("User ID is required to submit a support request.");
    }

    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'N/A';
    const city = headersList.get('x-vercel-ip-city') || 'N/A';
    const country = headersList.get('x-vercel-ip-country') || 'N/A';
    const location = country !== 'N/A' ? `${city}, ${country}` : 'N/A';
    
    const chatDocRef = adminDb.collection('supportChats').doc(data.uid);
    const messagesCollectionRef = chatDocRef.collection('messages');

    try {
        const firestoreData = {
            category: data.category,
            priority: data.priority,
            description: data.description, // Keep the raw description for filtering/data
            status: 'unread',
            lastMessage: "New support request created.",
            userName: data.name,
            userEmail: data.email,
            userPhotoURL: data.photoURL || null,
            hasUnreadUserMessages: true,
            agentOnline: false,
            lastMessageTimestamp: FieldValue.serverTimestamp(),
            ipAddress: ip,
            location: location,
        };

        // Create the initial chat document
        await chatDocRef.set(firestoreData, { merge: true });

        // Create the formatted first message
        const formattedFirstMessage = `
<div style="font-family: sans-serif; font-size: 14px; color: #333;">
    <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600; border-bottom: 1px solid #eee; padding-bottom: 8px;">New Support Request</h3>
    <div style="display: grid; grid-template-columns: 100px 1fr; gap: 8px;">
        <strong style="color: #555;">Name:</strong>      <span>${data.name}</span>
        <strong style="color: #555;">Email:</strong>     <span>${data.email}</span>
        <strong style="color: #555;">Category:</strong>  <span><span style="padding: 2px 8px; border-radius: 99px; font-size: 12px; font-weight: 500; ${categoryStyles[data.category]}">${data.category.replace('-', ' ')}</span></span>
        <strong style="color: #555;">Priority:</strong>  <span><span style="padding: 2px 8px; border-radius: 99px; font-size: 12px; font-weight: 500; ${priorityStyles[data.priority]}">${data.priority}</span></span>
    </div>
    <div style="margin-top: 16px;">
        <strong style="color: #555; display: block; margin-bottom: 4px;">Description:</strong>
        <p style="margin: 0; padding: 8px; background-color: #f9f9f9; border-radius: 4px; border: 1px solid #eee; white-space: pre-wrap;">${data.description}</p>
    </div>
</div>
        `.trim();

        // Add the first message to the messages subcollection
        await messagesCollectionRef.add({
            text: formattedFirstMessage,
            authorId: 'system', // Mark as a system message
            authorName: 'System',
            authorPhotoURL: null,
            timestamp: FieldValue.serverTimestamp(),
        });
        
    } catch (error) {
        console.error('Error submitting support request:', error);
        throw new Error('Could not submit your support request. Please try again later.');
    }
}
