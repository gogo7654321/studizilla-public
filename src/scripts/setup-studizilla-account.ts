/**
 * Setup Script for Studizilla Official Account
 * 
 * This script creates the official Studizilla account that will be used for:
 * - Official course materials
 * - System announcements
 * - Featured content
 * 
 * Run this once to set up the account:
 * npx tsx src/scripts/setup-studizilla-account.ts
 */

import { adminDb, adminAuth } from '@/lib/firebase-server';
import { FieldValue } from 'firebase-admin/firestore';

// Fixed UID for Studizilla official account
const STUDIZILLA_UID = 'studizilla-official';
const STUDIZILLA_USERNAME = 'studizilla';
const STUDIZILLA_EMAIL = 'official@studizilla.com';

async function setupStudizillaAccount() {
  console.log('🚀 Setting up Studizilla Official Account...\n');

  try {
    // Step 1: Create Firebase Auth user (if it doesn't exist)
    console.log('📝 Creating Firebase Auth user...');
    let authUser;
    try {
      authUser = await adminAuth.getUser(STUDIZILLA_UID);
      console.log('✓ Auth user already exists');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        authUser = await adminAuth.createUser({
          uid: STUDIZILLA_UID,
          email: STUDIZILLA_EMAIL,
          displayName: 'Studizilla Official',
          photoURL: '/images/logo/studizilla-official-avatar.png',
          emailVerified: true,
        });
        console.log('✓ Auth user created');
      } else {
        throw error;
      }
    }

    // Step 2: Create Firestore user document
    console.log('\n📝 Creating Firestore user document...');
    const userDocRef = adminDb.collection('users').doc(STUDIZILLA_UID);
    const userDoc = await userDocRef.get();

    if (!userDoc.exists) {
      await userDocRef.set({
        uid: STUDIZILLA_UID,
        username: STUDIZILLA_USERNAME,
        displayName: 'Studizilla Official',
        email: STUDIZILLA_EMAIL,
        photoURL: '/images/logo/studizilla-official-avatar.png',
        bannerURL: '/images/logo/studizilla-official-banner.svg',
        bio: '🎓 Your AI-powered study companion | Official Studizilla account providing curated course materials, study guides, and resources to help you ace your exams!',
        theme: 'sakura',
        isPrivate: false,
        isOfficial: true, // Special flag for official account
        badges: ['official', 'verified', 'educator'],
        streak: 0,
        followerCount: 0,
        followingCount: 0,
        publicDecks: [],
        addedCourses: [],
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
        privacySettings: {
          showStreak: true,
          showCourses: true,
          showDecks: true,
          showActivity: true,
          showTheme: true,
        },
      });
      console.log('✓ Firestore user document created');
    } else {
      console.log('✓ Firestore user document already exists');
    }

    // Step 3: Create username mapping
    console.log('\n📝 Creating username mapping...');
    const usernameDocRef = adminDb.collection('usernames').doc(STUDIZILLA_USERNAME);
    const usernameDoc = await usernameDocRef.get();

    if (!usernameDoc.exists) {
      await usernameDocRef.set({
        uid: STUDIZILLA_UID,
        createdAt: FieldValue.serverTimestamp(),
      });
      console.log('✓ Username mapping created');
    } else {
      console.log('✓ Username mapping already exists');
    }

    // Step 4: Create empty followers/following subcollections (for structure)
    console.log('\n📝 Initializing social subcollections...');
    const followersRef = adminDb.collection('users').doc(STUDIZILLA_UID).collection('followers');
    const followingRef = adminDb.collection('users').doc(STUDIZILLA_UID).collection('following');
    console.log('✓ Social subcollections ready');

    console.log('\n✅ Studizilla Official Account setup complete!\n');
    console.log('Account Details:');
    console.log('---------------');
    console.log(`UID: ${STUDIZILLA_UID}`);
    console.log(`Username: @${STUDIZILLA_USERNAME}`);
    console.log(`Email: ${STUDIZILLA_EMAIL}`);
    console.log(`Profile URL: /profile/${STUDIZILLA_USERNAME}`);
    console.log('\n📋 Next Steps:');
    console.log('1. Add official avatar and banner images to /public/images/logo/');
    console.log('2. Run migration script to update existing course decks');
    console.log('3. Update signup flow to auto-follow this account');
    console.log('4. Test the profile page\n');

  } catch (error) {
    console.error('❌ Error setting up Studizilla account:', error);
    throw error;
  }
}

// Run the setup
setupStudizillaAccount()
  .then(() => {
    console.log('🎉 Setup completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Setup failed:', error);
    process.exit(1);
  });
