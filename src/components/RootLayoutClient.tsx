
'use client';

import React, { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

const StarryNightBackground = dynamic(() => import('@/components/backgrounds/StarryNightBackground').then(mod => ({ default: mod.StarryNightBackground })), {
  ssr: false,
  loading: () => null
});

const ThemeAttributionNotice = dynamic(() => import('./ThemeAttributionNotice').then(mod => ({ default: mod.ThemeAttributionNotice })), {
  ssr: false,
  loading: () => null
});

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { user } = useAuth();

    const isTestPage = pathname?.startsWith('/tools/practice-test/results');
    const isDashboardRoute = pathname?.startsWith('/dashboard');
    const isDevPortal = pathname?.startsWith('/dashboard/dev');
    const isHomePage = pathname === '/';
    const isFlashcardsPage = pathname?.startsWith('/flashcards');
    const isResourcesPage = pathname?.startsWith('/resources');

    // Test pages render bare
    if (isTestPage) {
        return <>{children}</>;
    }

    // Dashboard routes use their own layout system
    if (isDashboardRoute) {
        return <>{children}</>;
    }

    // Flashcards pages render without header/footer
    if (isFlashcardsPage) {
        return (
            <div className="flex min-h-screen flex-col">
                <StarryNightBackground />
                <main className="flex-1">{children}</main>
                <ThemeAttributionNotice />
            </div>
        );
    }

    // Resources pages hide header/footer for signed-in users (they have sidebar)
    if (isResourcesPage && user) {
        return <>{children}</>;
    }

    // All other routes get the standard layout
    return (
        <div className="flex min-h-screen flex-col">
            {/* Don't show dashboard theme animations on home page */}
            {!isHomePage && <StarryNightBackground />}
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ThemeAttributionNotice />
        </div>
    );
}
