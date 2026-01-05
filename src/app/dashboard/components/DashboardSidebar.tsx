'use client';

import * as React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  BookCopy,
  Calendar,
  Settings,
  LifeBuoy,
  LogOut,
  User as UserIcon,
  FolderKanban,
  Sparkles,
  Home,
  Wrench,
  Library,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { AceMascot } from '@/components/AceMascot';
import { useAuth } from '@/contexts/AuthContext';
import { auth, db } from '@/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { isDev } from '@/lib/authUtils';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/resources', label: 'Resources', icon: Library },
  { href: '/classes', label: 'Classes', icon: FolderKanban },
  { href: '/tools', label: 'Tools', icon: Sparkles },
  { href: '/dashboard/calendar', label: 'Calendar', icon: Calendar },
  { href: '/profile', label: 'Profile', icon: UserIcon, separator: true },
  { href: '/', label: 'Return Home', icon: Home },
  { href: '/support', label: 'Support', icon: LifeBuoy, separator: true },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';  const [username, setUsername] = React.useState<string | null>(null);
  const isDeveloper = isDev(user);

  React.useEffect(() => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().username) {
        setUsername(docSnap.data().username);
      }
    });
    return () => unsubscribe();
  }, [user]);

  const handleLogout = async () => {
    if (!user) return;
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <SidebarHeader className="border-b-[4px] px-4 py-3 mb-6" data-sidebar="header">
        <div className="flex items-center gap-3" data-logo-container>
          {/* Icon - always visible */}
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0" data-logo-icon>
            <AceMascot className="h-7 w-7" />
          </div>
          {/* Text - hide when collapsed */}
          <div className="flex flex-col min-w-0 flex-1 transition-all duration-300" data-logo-text>
            <div className="font-bold text-xl font-headline truncate whitespace-nowrap">Studizilla</div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu className="px-2 py-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            const isReturnHome = item.href === '/';

            return (
              <React.Fragment key={item.href}>
                {item.separator && <Separator className="my-2" />}
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={!isReturnHome && active}
                    disabled={item.disabled}
                    className={cn(
                      !isReturnHome && active && "bg-primary text-primary-foreground hover:bg-primary/90",
                      isReturnHome && "border-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5"
                    )}
                  >
                    <Link href={item.disabled ? '#' : item.href}>
                      <Icon className={cn(isReturnHome && "text-primary")} />
                      <span className={cn(isReturnHome && "font-semibold")}>{item.label}</span>
                      {item.badge && <Badge variant="secondary" className="ml-auto">{item.badge}</Badge>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </React.Fragment>
            );
          })}
          
          <Separator className="my-2" />
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="text-red-600 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              <LogOut />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {isDeveloper && (
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild 
                isActive={pathname?.startsWith('/dashboard/dev')}
                className={cn(
                  pathname?.startsWith('/dashboard/dev') && "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                <Link href="/dashboard/dev">
                  <Wrench />
                  <span>Dev Portal</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t-[4px] mt-4" data-sidebar="footer">
        <div className="flex items-center gap-3 w-full rounded-lg p-2">
          <Avatar className="h-10 w-10 shrink-0">
            <AvatarImage src={user?.photoURL || undefined} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left overflow-hidden transition-all duration-200">
            <div className="font-medium text-sm truncate whitespace-nowrap">
              {user?.displayName || username || 'User'}
            </div>
            <div className="text-xs text-muted-foreground truncate whitespace-nowrap">
              {user?.email}
            </div>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
}
