'use server';

import { adminDb, adminAuth } from '@/lib/firebase-server';

export async function deleteUserAccountAction(uid: string): Promise<{ success: boolean; error?: string }> {
  if (!uid) {
    return { success: false, error: 'User ID is required.' };
  }

  try {
    // Delete user auth
    await adminAuth.deleteUser(uid);
    
    // Delete user document from users collection
    // NOTE: We deliberately do NOT delete data from courseDecks collection.
    // Flashcards and resources created by this user will remain available
    // for other users to study, but will show "Deleted User" as the creator.
    await adminDb.collection('users').doc(uid).delete();
    
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting account:', error);
    return { success: false, error: 'An error occurred while deleting your account.' };
  }
}

export async function disconnectGoogleProvider(uid: string): Promise<{ success: boolean; error?: string }> {
  if (!uid) {
    return { success: false, error: 'User not authenticated.' };
  }

  try {
    const userRecord = await adminAuth.getUser(uid);
    const hasPasswordProvider = userRecord.providerData.some(
      (provider) => provider.providerId === 'password'
    );

    if (userRecord.providerData.length > 1 || hasPasswordProvider) {
      // It's safe to unlink
      await adminAuth.updateUser(uid, {
        providersToUnlink: ['google.com'],
      });
      return { success: true };
    } else {
      // This is their only sign-in method
      return {
        success: false,
        error: 'Cannot disconnect your only sign-in method. Please set a password first.',
      };
    }
  } catch (error: any) {
    console.error('Error disconnecting Google provider:', error);
    return { success: false, error: 'An unexpected server error occurred.' };
  }
}
