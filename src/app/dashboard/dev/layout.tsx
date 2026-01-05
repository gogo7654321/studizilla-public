

'use client';

import { DevSidebar } from '@/app/dashboard/dev/DevSidebar';
import { useAuth } from '@/contexts/AuthContext';
import React, { useLayoutEffect, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { notFound, usePathname } from 'next/navigation';
import { isDev } from '@/lib/authUtils';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { StarryNightBackground } from '@/components/backgrounds/StarryNightBackground';
import { ThemeAttributionNotice } from '@/components/ThemeAttributionNotice';

function DevPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // This effect applies the 'war room' theme ONLY on the main dev dashboard page.
  useLayoutEffect(() => {
    const html = document.documentElement;
    const isWarRoomPage = pathname === '/dashboard/dev';

    if (isWarRoomPage) {
        html.setAttribute('data-theme-id', 'dev-portal');
        document.body.classList.add('dev-portal-scope');
    }

    // Cleanup function to remove theme when navigating away or unmounting
    return () => {
      if (isWarRoomPage) {
        html.removeAttribute('data-theme-id');
        document.body.classList.remove('dev-portal-scope');
      }
    };
  }, [pathname]);


  return (
    <>
      <DevSidebar />
      <main className="pl-16">
        {children}
      </main>
      <ThemeAttributionNotice />
    </>
  );
}

export default function ProtectedDevLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  
  useEffect(() => {
    if (!user || !isDev(user)) return;

    const chatDocRef = doc(db, 'supportChats', user.uid);
    setDoc(chatDocRef, { agentOnline: true }, { merge: true });
  }, [user]);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isDev(user)) {
    notFound();
  }

  return (
    <DevPortalLayout>
      {children}
    </DevPortalLayout>
  );
}
