
'use client';

import * as React from "react";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import {
  Home,
  Users,
  MessageSquareWarning,
  Inbox,
  TestTube2,
  LogOut,
  User as UserIcon,
  BookCopy,
  MessageCircle,
  ShieldAlert,
  Database,
  Languages,
  Star,
  FileWarning,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { AceMascot } from '@/components/AceMascot';
import { useAuth } from '@/contexts/AuthContext';
import { auth, db } from '@/lib/firebase';
import { collection, query, where, onSnapshot, doc } from "firebase/firestore";
import type { User } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { isDev } from '@/lib/authUtils';
import { Badge } from "@/components/ui/badge";

const devMenuItems = [
  { href: '/dashboard/dev', label: 'War Room', icon: Home, countKey: null },
  { href: '/dashboard/dev/support-chat', label: 'Support Chat', icon: MessageCircle, countKey: 'support' },
  { href: '/dashboard/dev/user-search', label: 'User Search', icon: Users, countKey: null },
  { href: '/dashboard/dev/content-loader', label: 'Content Loader', icon: Database, countKey: null },
  { href: '/dashboard/dev/reviews', label: 'Reviews Inbox', icon: Star, countKey: 'reviews' },
  { href: '/dashboard/dev/language-requests', label: 'Language Requests', icon: Languages, countKey: 'language' },
  { href: '/dashboard/dev/moderation', label: 'Moderation', icon: MessageSquareWarning, countKey: 'moderation' },
  { href: '/dashboard/dev/feedback', label: 'Feedback Inbox', icon: Inbox, countKey: null },
  { href: '/dashboard/dev/logs', label: 'Logs & System Tools', icon: TestTube2, countKey: null },
];

export function DevSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const isDeveloper = isDev(user);
  const [counts, setCounts] = React.useState({
    support: 0,
    language: 0,
    reviews: 0,
    moderation: 0,
  });

  React.useEffect(() => {
    if (!isDeveloper) return;
    
    const queries = {
      support: query(collection(db, "supportChats"), where("hasUnreadUserMessages", "==", true)),
      language: query(collection(db, "languageRequests"), where("status", "==", "pending")),
      reviews: query(collection(db, "reviews"), where("status", "==", "pending")),
      moderation: query(collection(db, "cardReports"), where("status", "==", "pending")),
    };

    const unsubscribers = Object.entries(queries).map(([key, q]) => {
      return onSnapshot(q, (snapshot) => {
        setCounts(prev => ({ ...prev, [key]: snapshot.size }));
      });
    });

    return () => unsubscribers.forEach(unsub => unsub());
  }, [isDeveloper]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const handleIsActive = (href: string) => {
    if (href === '/dashboard/dev') {
      return pathname === '/dashboard/dev';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <SidebarHeader>
        <a href="/landing" className="flex items-center gap-2">
          <AceMascot className="w-8 h-8 flex-shrink-0" />
          <span className="font-bold text-lg whitespace-nowrap transition-opacity duration-500 group-data-[state=collapsed]:opacity-0">
            Studizilla
          </span>
        </a>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {devMenuItems.map((item) => {
            const count = item.countKey ? counts[item.countKey as keyof typeof counts] : 0;
            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  href={item.href}
                  isActive={handleIsActive(item.href)}
                  asChild
                  tooltip={item.label as string}
                  className="flex justify-between"
                >
                  <a href={item.href}>
                    <div className="flex items-center gap-2">
                        <item.icon />
                        <span>{item.label}</span>
                    </div>
                    {count > 0 && (
                        <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center transition-all duration-500 group-data-[state=collapsed]:opacity-0">
                          {count}
                        </Badge>
                    )}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard" tooltip="Exit Dev Portal" asChild>
              <a href="/dashboard">
                <BookCopy />
                <span>Student Dashboard</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleLogout} tooltip="Logout">
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <Separator className="my-2" />
        {user && <UserInfo user={user} />}
      </SidebarFooter>
    </>
  );
}

function UserInfo({ user }: { user: User }) {
  const { state } = useSidebar();
  const [username, setUsername] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists() && docSnap.data().username) {
            setUsername(docSnap.data().username);
        } else {
            setUsername(null);
        }
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <div
      data-state={state}
      className={cn(
        "flex items-center rounded-lg mt-2 transition-all duration-500",
        "data-[state=expanded]:p-2"
      )}
    >
      <Avatar
        data-state={state}
        className={cn(
          'flex-shrink-0 transition-all duration-500',
          'data-[state=expanded]:h-10 data-[state=expanded]:w-10',
          'data-[state=collapsed]:h-8 data-[state=collapsed]:w-8'
        )}
      >
        <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'} />
        <AvatarFallback>{user.email?.charAt(0).toUpperCase() || <UserIcon />}</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          'overflow-hidden transition-all duration-500',
          'data-[state=collapsed]:w-0 data-[state=collapsed]:opacity-0',
          'data-[state=expanded]:ml-4'
        )}
      >
        <p className="font-semibold text-sm truncate whitespace-nowrap">{user.displayName || 'Studizilla Developer'}</p>
        <p className="text-xs text-muted-foreground truncate whitespace-nowrap">{username ? `@${username}` : (user.email || 'No username')}</p>
      </div>
    </div>
  );
}
