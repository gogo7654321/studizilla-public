
'use server';

import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export type TakedownRequestData = {
    username: string;
    reason: string;
    links: string;
}

export async function submitTakedownRequest(data: TakedownRequestData) {
    try {
        await addDoc(collection(db, 'takedownRequests'), {
            ...data,
            status: 'pending', // Initial status
            createdAt: serverTimestamp(),
        });
    } catch (error) {
        console.error('Error submitting takedown request:', error);
        throw new Error('Could not submit request. Please try again later.');
    }
}
