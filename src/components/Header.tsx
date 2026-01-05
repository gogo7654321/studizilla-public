
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, LayoutDashboard, User as UserIcon, LogIn, Home, Settings, BookCopy, Rocket } from "lucide-react";
import { AceMascot } from "./AceMascot";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth, db } from "@/lib/firebase";
import { signOut, type User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { Skeleton } from "./ui/skeleton";
import { Separator } from "./ui/separator";
import { logUserAction } from "@/lib/logging";


const mainRoutes = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
  { name: "Courses", href: "/classes" },
  { name: "Tools", href: "/tools" },
  { name: "Support", href: "/support" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const pathname = usePathname();
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [activePath, setActivePath] = useState('');
  
  // Check if we're on the home page - home page should not use dashboard theme
  const isHomePage = pathname === '/';

  // Hydration error fix: Set active path only on client-side after mount
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleLogout = async () => {
    await logUserAction(user ? { uid: user.uid, email: user.email } : null, 'logout');
    await signOut(auth);
    setIsOpen(false); // Close sheet on logout
    router.push("/auth");
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIsActive = (href: string) => {
    if (!activePath) return false;
    if (href === '/') return activePath === '/';
    return activePath.startsWith(href);
  };
  
  return (
    <header
      data-home-page={isHomePage}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        navbarScrolled ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href={user ? '/dashboard' : '/'} className="flex items-center gap-2 font-bold font-headline text-lg">
          <AceMascot className="h-8 w-8" />
          <span>Studizilla</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {mainRoutes.map((route) => (
              <NavigationMenuItem key={route.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={route.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      handleIsActive(route.href) && "text-primary"
                    )}
                  >
                    {route.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
           <Button asChild size="sm" className="hidden md:flex bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <Link href="/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
          </Button>
          <UserNav user={user} isLoading={isLoading} onLogout={handleLogout} />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader className="text-left">
                    <SheetTitle>
                        <Link href={user ? '/dashboard' : '/'} onClick={() => setIsOpen(false)} className="flex items-center gap-2 font-bold font-headline text-lg">
                            <AceMascot className="h-8 w-8" />
                            <span>Studizilla</span>
                        </Link>
                    </SheetTitle>
                    <SheetDescription>
                        Navigate to any of our pages from here.
                    </SheetDescription>
                </SheetHeader>
               <div className="flex h-full flex-col pt-6">
                 <div className="flex-1">
                    <nav className="grid gap-2">
                      <Link
                          href="/dashboard"
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary py-2",
                            pathname.startsWith('/dashboard') || pathname.startsWith('/guest-dashboard') ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          Dashboard
                        </Link>
                      {mainRoutes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary py-2",
                            handleIsActive(route.href) ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          {route.name}
                        </Link>
                      ))}
                    </nav>
                 </div>
                 <div className="mt-auto">
                    <Separator className="my-4" />
                    {isLoading ? (
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="w-full space-y-2">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-3 w-32" />
                            </div>
                        </div>
                    ) : user ? (
                        <div className="flex flex-col gap-4">
                             <div className="flex items-center gap-3">
                                <Avatar className="h-10 w-10">
                                  <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                                  <AvatarFallback>
                                    {user.email?.charAt(0).toUpperCase() || <UserIcon/>}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="overflow-hidden flex-1">
                                    <p className="font-semibold text-sm truncate">{user.displayName || <>Studizilla Student</>}</p>
                                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                                </div>
                            </div>
                            <Button variant="outline" onClick={handleLogout}>
                                <LogOut className="mr-2" />
                                Log Out
                            </Button>
                        </div>
                    ) : (
                         <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                            <Link href="/auth">Log In / Sign Up</Link>
                        </Button>
                    )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function UserNav({ user, isLoading, onLogout }: { user: User | null, isLoading: boolean, onLogout: () => void }) {
  const router = useRouter();
  const [username, setUsername] = React.useState<string | null>(null);

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
  
  if (isLoading) {
    return <Skeleton className="h-10 w-24 rounded-lg hidden md:block" />;
  }
  
  const profileHref = username ? `/profile/${username}` : '/profile';

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full hidden md:flex">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
              <AvatarFallback>
                {user.email?.charAt(0).toUpperCase() || <UserIcon/>}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.displayName}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => router.push('/dashboard')}>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push(profileHref)}>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/dashboard/settings')}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={onLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button asChild size="sm" variant="outline" className="hidden md:flex">
        <Link href="/auth">
            <LogIn className="mr-2 h-4 w-4" />
            Log In
        </Link>
    </Button>
  );
}
