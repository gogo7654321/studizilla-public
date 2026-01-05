'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import '../dashboard/dashboard-sidebar.css';

const DashboardSidebar = dynamic(() => import('../dashboard/components/DashboardSidebar').then(mod => ({ default: mod.DashboardSidebar })), {
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

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StarryNightBackground />
      <SidebarProvider defaultOpen={false}>
        <Sidebar collapsible="icon" variant="sidebar" className="border-r">
          <DashboardSidebar />
        </Sidebar>
        <SidebarInset>
          <div className="dashboard-scope flex min-h-screen w-full flex-col">
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
