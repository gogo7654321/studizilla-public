
'use server';

import { adminDb } from '@/lib/firebase-server';
import { FieldValue } from 'firebase-admin/firestore';

type NewUserData = {
    uid: string;
    email: string | null;
    username: string;
    displayName: string | null;
    photoURL: string | null;
    recaptchaToken: string;
}

/**
 * Verifies a reCAPTCHA v2 token with Google's API.
 * @param token The token from the client-side reCAPTCHA widget.
 * @returns {Promise<boolean>} True if the token is valid, false otherwise.
 */
async function verifyRecaptcha(token: string): Promise<boolean> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
        console.error("RECAPTCHA_SECRET_KEY is not set in environment variables.");
        return false;
    }

    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    try {
        const response = await fetch(verificationUrl, {
            method: 'POST',
        });
        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error("reCAPTCHA verification request failed:", error);
        return false;
    }
}


/**
 * Securely creates the necessary Firestore documents for a new user.
 * This is called from the client-side sign-up process.
 * It now includes a check to ensure the username is unique before creation
 * and verifies the reCAPTCHA token.
 * @param data The new user's data from Firebase Auth and the reCAPTCHA token.
 * @throws Will throw an error if the username is already taken or reCAPTCHA fails.
 */
export async function createNewUserDocuments(data: NewUserData) {
    const { recaptchaToken, ...userData } = data;

    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
        throw new Error("reCAPTCHA verification failed. Please try again.");
    }

    const userDocRef = adminDb.collection('users').doc(userData.uid);
    const usernameDocRef = adminDb.collection('usernames').doc(userData.username.toLowerCase());

    const usernameDoc = await usernameDocRef.get();
    if (usernameDoc.exists) {
        throw new Error("This username is already taken. Please choose another one.");
    }

    const batch = adminDb.batch();

    // Set the main user document
    batch.set(userDocRef, {
        email: userData.email,
        username: userData.username,
        usernameLower: userData.username.toLowerCase(),
        displayName: userData.displayName, // Initially set from username
        displayNameLower: (userData.displayName || '').toLowerCase(),
        photoURL: userData.photoURL,
        bio: '',
        createdAt: FieldValue.serverTimestamp(),
        hasCompletedOnboarding: false,
        isPrivate: false,
        privacySettings: {
            showStreak: true,
            showCourses: true,
            showDecks: true,
            showActivity: true,
        },
    });

    // Set the username document for uniqueness checks
    batch.set(usernameDocRef, {
        uid: userData.uid,
    });

    // Create welcome notification
    const notificationsRef = userDocRef.collection('settings').doc('notifications');
    batch.set(notificationsRef, {
        items: [
            {
                id: 'welcome',
                title: `Welcome to Studizilla, ${userData.displayName.split(' ')[0]}! 🎉`,
                message: 'We\'re excited to have you here! Start by exploring our courses, creating your first flashcard deck, or checking out the study tools. If you need any help, don\'t hesitate to reach out!',
                type: 'system',
                read: false,
                createdAt: FieldValue.serverTimestamp(),
            }
        ]
    });
    
    await batch.commit();
}


/**
 * Securely retrieves the email address for a given username.
 * This function runs on the server with admin privileges.
 * @param username The username to look up.
 * @returns The user's email address or null if not found.
 */
export async function getEmailForUsername(username: string): Promise<string | null> {
    if (!username) {
        return null;
    }

    try {
        const usernameLower = username.toLowerCase();
        const usernameDocRef = adminDb.collection('usernames').doc(usernameLower);
        const usernameDoc = await usernameDocRef.get();

        if (usernameDoc.exists) {
            const uid = usernameDoc.data()?.uid;
            if (!uid) return null;

            const userDocRef = adminDb.collection('users').doc(uid);
            const userDoc = await userDocRef.get();

            return userDoc.exists() ? userDoc.data()?.email || null : null;
        }
        
        // Fallback for usernames that may not have a document in the `usernames` collection.
        // This is a more robust way to handle legacy data or inconsistencies.
        const usersQuery = adminDb.collection('users').where('usernameLower', '==', usernameLower).limit(1);
        const usersSnapshot = await usersQuery.get();
        if (!usersSnapshot.empty) {
            const userDoc = usersSnapshot.docs[0];
            return userDoc.data()?.email || null;
        }


        return null;
    } catch (error) {
        console.error("Error fetching email for username:", error);
        // Return null to avoid leaking information about server errors.
        return null;
    }
}
