'use client';

import React, { useEffect, Suspense } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import './dashboard-sidebar.css';

const DashboardHeader = dynamic(() => import('./components/DashboardHeader').then(mod => ({ default: mod.DashboardHeader })), {
  ssr: false,
  loading: () => <div className="h-28 p-4 md:p-8" />
});

const DashboardSidebar = dynamic(() => import('./components/DashboardSidebar').then(mod => ({ default: mod.DashboardSidebar })), {
  ssr: false,
  loading: () => <div className="w-16" />
});

const StarryNightBackground = dynamic(() => import('@/components/backgrounds/StarryNightBackground').then(mod => ({ default: mod.StarryNightBackground })), {
  ssr: false,
  loading: () => null
});

const ThemeAttributionNotice = dynamic(() => import('@/components/ThemeAttributionNotice').then(mod => ({ default: mod.ThemeAttributionNotice })), {
  ssr: false,
  loading: () => null
});

const GuestBanner = dynamic(() => import('@/components/GuestBanner').then(mod => ({ default: mod.GuestBanner })), {
  ssr: false,
  loading: () => null
});

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  const isFlashcardsPage = pathname?.startsWith('/flashcards');

  return (
    <>
      {!user && <GuestBanner />}
      <StarryNightBackground />
      <SidebarProvider defaultOpen={false}>
        <Sidebar collapsible="icon" variant="sidebar" className="border-r">
          <DashboardSidebar />
        </Sidebar>
        <SidebarInset>
          <div className="dashboard-scope flex min-h-screen w-full flex-col">
            {!isFlashcardsPage && (
              <header className="p-4 md:p-8 pb-0 md:pb-0">
                <DashboardHeader />
              </header>
            )}
            <main className="flex-1">
              {children}
            </main>
          </div>
        </SidebarInset>
      </SidebarProvider>
      <ThemeAttributionNotice />
    </>
  );
}
