'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';

/**
 * This page redirects users to their own profile page.
 * /profile -> /profile/[username]
 */
export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading || !user) {
      return;
    }

    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data()?.username) {
        router.replace(`/profile/${docSnap.data().username}`);
      } else {
        // If username doesn't exist, redirect to settings
        router.replace('/dashboard/settings');
      }
    });

    return () => unsubscribe();
  }, [user, isLoading, router]);

  // If there's no user after loading, redirect to auth
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/auth');
    }
  }, [user, isLoading, router]);

  return (
    <div className="flex h-[calc(100vh-8rem)] items-center justify-center p-8">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
    </div>
  );
}
