
import admin from 'firebase-admin';
import type { Auth } from 'firebase-admin/auth';
import type { Firestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface FirebaseAdminServices {
  app: admin.app.App;
  auth: Auth;
  db: Firestore;
  storage: ReturnType<typeof getStorage>;
}

const ADMIN_KEY = Symbol.for('firebase-admin-sdk');

function initializeAdmin(): FirebaseAdminServices {
  // If the app is already initialized, return the existing services.
  if (admin.apps.length > 0 && admin.apps[0]) {
    return {
      app: admin.apps[0],
      auth: getAuth(admin.apps[0]),
      db: getFirestore(admin.apps[0]),
      storage: getStorage(admin.apps[0]),
    };
  }
  
  // Try to get credentials, fallback to application default
  let credential;
  try {
    // First try service account from environment
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      credential = admin.credential.cert(serviceAccount);
    } else {
      // Fallback to application default (works in Cloud environments)
      credential = admin.credential.applicationDefault();
    }
  } catch (error) {
    console.warn('Firebase Admin: No credentials found, using development mode with limited functionality');
    console.error('Credential error:', error);
    // In development without credentials, initialize with minimal config
    // This allows the app to run but admin features won't work
  }
  
  const app = admin.initializeApp({
    credential: credential || undefined,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  });

  return {
    app,
    auth: getAuth(app),
    db: getFirestore(app),
    storage: getStorage(app),
  };
}

const globalWithAdmin = global as typeof global & {
  [ADMIN_KEY]?: FirebaseAdminServices;
};

if (!globalWithAdmin[ADMIN_KEY]) {
  globalWithAdmin[ADMIN_KEY] = initializeAdmin();
}

export const { auth: adminAuth, db: adminDb, storage: adminStorage } = globalWithAdmin[ADMIN_KEY]!;

// This file no longer exports the getGenerativeModel function.
// All AI calls should go through the Genkit toolkit defined in src/ai/genkit.ts.
