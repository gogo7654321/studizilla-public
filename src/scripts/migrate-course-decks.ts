/**
 * Migration Script: Update Course Decks to Studizilla Official Account
 * 
 * This script updates all existing course decks with ownerId='course' 
 * to use the official Studizilla account instead.
 * 
 * Run this after setting up the Studizilla account:
 * npx tsx src/scripts/migrate-course-decks.ts
 */

import { adminDb } from '@/lib/firebase-server';

const STUDIZILLA_UID = 'studizilla-official';
const STUDIZILLA_USERNAME = 'studizilla';
const STUDIZILLA_DISPLAY_NAME = 'Studizilla Official';
const STUDIZILLA_PHOTO_URL = '/images/logo/studizilla-official-avatar.png';

async function migrateCourseDecksToBatch() {
  console.log('🔄 Starting course decks migration...\n');

  try {
    // Query all decks with ownerId='course'
    const decksRef = adminDb.collection('courseDecks');
    const snapshot = await decksRef.where('ownerId', '==', 'course').get();

    if (snapshot.empty) {
      console.log('✓ No decks found with ownerId="course"');
      return;
    }

    console.log(`📦 Found ${snapshot.size} decks to migrate\n`);

    // Process in batches of 500 (Firestore limit)
    const batchSize = 500;
    let batch = adminDb.batch();
    let count = 0;
    let totalUpdated = 0;

    for (const doc of snapshot.docs) {
      const deckRef = decksRef.doc(doc.id);
      
      batch.update(deckRef, {
        ownerId: STUDIZILLA_UID,
        ownerName: STUDIZILLA_DISPLAY_NAME,
        ownerUsername: STUDIZILLA_USERNAME,
        ownerPhotoURL: STUDIZILLA_PHOTO_URL,
        updatedAt: new Date(),
      });

      count++;
      totalUpdated++;

      // Commit batch every 500 operations
      if (count >= batchSize) {
        await batch.commit();
        console.log(`✓ Committed batch of ${count} updates (${totalUpdated}/${snapshot.size})`);
        batch = adminDb.batch();
        count = 0;
      }
    }

    // Commit remaining updates
    if (count > 0) {
      await batch.commit();
      console.log(`✓ Committed final batch of ${count} updates`);
    }

    console.log(`\n✅ Migration complete! Updated ${totalUpdated} decks\n`);

  } catch (error) {
    console.error('❌ Migration failed:', error);
    throw error;
  }
}

// Run the migration
migrateCourseDecksToBatch()
  .then(() => {
    console.log('🎉 Migration completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Migration failed:', error);
    process.exit(1);
  });
