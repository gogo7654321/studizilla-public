
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, where, getDocs, collectionGroup } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { BookCopy, User as UserIcon, Loader2, Search as SearchIcon, FolderKanban, Wrench, LayoutDashboard, LifeBuoy, Settings, BrainCircuit, Globe } from 'lucide-react';
import { courses } from '@/lib/courses';
import { CourseIcon } from './CourseIcon';
import { Button } from '@/components/ui/button';

type Deck = {
    id: string;
    title: string;
    cardCount: number;
    ownerId: string;
};

type UserProfile = {
    uid: string;
    username: string;
    displayName: string | null;
};

type PageResult = {
    name: string;
    href: string;
    icon: React.ElementType;
    category: string;
};

const mainPages: PageResult[] = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, category: 'Navigation' },
    { name: 'Flashcards', href: '/flashcards', icon: BookCopy, category: 'Navigation' },
    { name: 'Courses', href: '/classes', icon: FolderKanban, category: 'Navigation' },
    { name: 'Profile', href: '/profile', icon: UserIcon, category: 'Navigation' },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings, category: 'Navigation' },
    { name: 'Support', href: '/support', icon: LifeBuoy, category: 'Navigation' },
];

const toolPages: PageResult[] = [
    { name: 'AI Tools Hub', href: '/tools', icon: Wrench, category: 'Tools' },
    { name: 'Notes-to-Flashcards', href: '/flashcards', icon: BrainCircuit, category: 'Tools' },
];

export function CommandMenu() {
  const router = useRouter();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // State to hold all searchable data
  const [allDecks, setAllDecks] = useState<Deck[]>([]);
  const [allUsers, setAllUsers] = useState<UserProfile[]>([]);
  const [allCourses] = useState(courses.filter(c => !c.comingSoon));
  const [allPages] = useState([...mainPages, ...toolPages]);
  
  // State for filtered results
  const [filteredDecks, setFilteredDecks] = useState<Deck[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<typeof courses>([]);
  const [filteredPages, setFilteredPages] = useState<PageResult[]>([]);

  // Open the command menu on Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Fetch all data once when the menu is opened
  useEffect(() => {
    const fetchAllData = async () => {
      if (open && allDecks.length === 0 && allUsers.length === 0) { // Only fetch if not already loaded
        setIsLoading(true);
        const deckMap = new Map<string, Deck>();
        const userMap = new Map<string, UserProfile>();

        // 1. Fetch all public decks
        const publicDecksQuery = query(collectionGroup(db, 'flashcardDecks'), where('isPublic', '==', true));
        const publicDecksSnap = await getDocs(publicDecksQuery);
        publicDecksSnap.forEach(doc => {
            const data = doc.data();
            deckMap.set(doc.id, {
                id: doc.id,
                title: data.title,
                cardCount: data.cards?.length || 0,
                ownerId: data.ownerId,
            });
        });

        // 2. Fetch current user's private decks
        if (user) {
            const userDecksQuery = query(collection(db, 'users', user.uid, 'flashcardDecks'));
            const userDecksSnap = await getDocs(userDecksQuery);
            userDecksSnap.forEach(doc => {
                if (!deckMap.has(doc.id)) { // Avoid duplicates
                    const data = doc.data();
                    deckMap.set(doc.id, {
                        id: doc.id,
                        title: data.title,
                        cardCount: data.cards?.length || 0,
                        ownerId: data.ownerId,
                    });
                }
            });
        }
        
        // 3. Fetch all users
        const usersQuery = query(collection(db, 'users'));
        const usersSnap = await getDocs(usersQuery);
        usersSnap.forEach(doc => {
            const data = doc.data();
            userMap.set(doc.id, {
                uid: doc.id,
                username: data.username,
                displayName: data.displayName || data.firstName,
            });
        });

        setAllDecks(Array.from(deckMap.values()));
        setAllUsers(Array.from(userMap.values()));
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [open, user, allDecks.length, allUsers.length]);


  // Perform filtering when search term changes
  useEffect(() => {
    if (!searchTerm.trim()) {
        setFilteredDecks([]);
        setFilteredUsers([]);
        setFilteredCourses([]);
        setFilteredPages([]);
        return;
    }

    const lowerTerm = searchTerm.toLowerCase();

    // Filter Decks
    setFilteredDecks(
        allDecks.filter(deck => deck.title && deck.title.toLowerCase().includes(lowerTerm)).slice(0, 10)
    );

    // Filter Users - Robustly
    setFilteredUsers(
        allUsers.filter(u => {
            if (u.uid === user?.uid) return false; // Exclude current user
            const hasDisplayNameMatch = u.displayName && u.displayName.toLowerCase().includes(lowerTerm);
            const hasUsernameMatch = u.username && u.username.toLowerCase().includes(lowerTerm);
            return hasDisplayNameMatch || hasUsernameMatch;
        }).slice(0, 5)
    );


    // Filter Courses
    setFilteredCourses(
        allCourses.filter(course =>
            course.name.toLowerCase().includes(lowerTerm) ||
            course.subject.toLowerCase().includes(lowerTerm) ||
            course.abbreviations?.some(abbr => abbr.toLowerCase().includes(lowerTerm))
        ).slice(0, 5)
    );

    // Filter Pages
    setFilteredPages(
        allPages.filter(page =>
            page.name.toLowerCase().includes(lowerTerm) ||
            page.category.toLowerCase().includes(lowerTerm)
        )
    );
  }, [searchTerm, allDecks, allUsers, allCourses, allPages, user]);


  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
        <div className="w-full flex-1">
             <Button
                variant="outline"
                className="w-full justify-start text-sm text-muted-foreground"
                onClick={() => setOpen(true)}
            >
                <SearchIcon className="mr-2 h-4 w-4" />
                <span className="inline-flex">Search everything...</span>
                <kbd className="pointer-events-none ml-auto hidden h-6 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-xs font-medium opacity-100 sm:flex">
                <span className="text-base">⌘</span>K
                </kbd>
            </Button>
        </div>
       
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput 
                placeholder="Search decks, courses, users, tools..." 
                value={searchTerm}
                onValueChange={setSearchTerm}
            />
            <CommandList>
                {isLoading ? (
                    <div className="flex items-center justify-center p-4">
                        <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                ) : (
                    <>
                        <CommandEmpty>No results found.</CommandEmpty>
                        {(filteredPages.length > 0 || filteredCourses.length > 0 || filteredDecks.length > 0 || filteredUsers.length > 0) ? null : (
                          <CommandGroup heading="Suggestions">
                              {mainPages.slice(0, 5).map(page => (
                                  <CommandItem
                                      key={`suggestion-${page.href}`}
                                      value={`suggestion-${page.href}`}
                                      onSelect={() => runCommand(() => router.push(page.href))}
                                  >
                                      <page.icon className="mr-2 h-4 w-4" />
                                      <span>{page.name}</span>
                                  </CommandItem>
                              ))}
                          </CommandGroup>
                        )}
                        {filteredPages.length > 0 && (
                             <CommandGroup heading="Pages & Tools">
                                {filteredPages.map(page => (
                                    <CommandItem
                                        key={page.href}
                                        value={`page-${page.href}`}
                                        onSelect={() => runCommand(() => router.push(page.href))}
                                    >
                                        <page.icon className="mr-2 h-4 w-4" />
                                        <span>{page.name}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                        {filteredCourses.length > 0 && (
                            <CommandGroup heading="Courses">
                                {filteredCourses.map(course => (
                                    <CommandItem
                                        key={course.id}
                                        value={`course-${course.id}`}
                                        onSelect={() => runCommand(() => router.push(`/classes/${course.slug}`))}
                                    >
                                        <CourseIcon iconName={course.icon} className="mr-2 h-4 w-4" />
                                        <span>{course.name}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                        {filteredDecks.length > 0 && (
                            <CommandGroup heading="Decks">
                                {filteredDecks.map(deck => (
                                    <CommandItem
                                        key={deck.id}
                                        value={`deck-${deck.id}`}
                                        onSelect={() => runCommand(() => router.push(`/resources/flashcards/study/${deck.id}`))}
                                    >
                                        <BookCopy className="mr-2 h-4 w-4" />
                                        <span>{deck.title}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                        {filteredUsers.length > 0 && (
                            <CommandGroup heading="Users">
                                {filteredUsers.map(u => (
                                    <CommandItem
                                        key={u.uid}
                                        value={`user-${u.uid}`}
                                        onSelect={() => runCommand(() => router.push(`/profile/${u.username}`))}
                                    >
                                        <UserIcon className="mr-2 h-4 w-4" />
                                        <span>{u.displayName || u.username}</span>
                                        <span className="ml-2 text-xs text-muted-foreground">@{u.username}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        )}
                    </>
                )}
            </CommandList>
        </CommandDialog>
    </>
  );
}
