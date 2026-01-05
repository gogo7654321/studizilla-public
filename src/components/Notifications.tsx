
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Bell, Info, Edit2, Check, ExternalLink } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot, orderBy, limit, doc, updateDoc, getDoc, writeBatch, collectionGroup } from 'firebase/firestore';
import type { Timestamp } from 'firebase/firestore';
import { formatDistanceToNow } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from './ui/scroll-area';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Skeleton } from './ui/skeleton';

type Notification = {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'update' | 'warning';
  isRead: boolean;
  createdAt: Timestamp;
  link?: string;
  isGlobal?: boolean;
};

const getSeenNotifications = (): string[] => {
    if (typeof window === 'undefined') return [];
    try {
        const seen = localStorage.getItem('seenGlobalNotifications');
        return seen ? JSON.parse(seen) : [];
    } catch (e) {
        return [];
    }
};

const addSeenNotification = (id: string) => {
    if (typeof window === 'undefined') return;
    const seen = getSeenNotifications();
    if (!seen.includes(id)) {
        localStorage.setItem('seenGlobalNotifications', JSON.stringify([...seen, id]));
    }
};


export function Notifications() {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [personalNotifications, setPersonalNotifications] = useState<Notification[]>([]);
    const [globalNotifications, setGlobalNotifications] = useState<Notification[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setIsLoading(false);
            return;
        }
        setIsLoading(true);

        // Listener for personal notifications
        const personalNotifsQuery = query(collection(db, 'users', user.uid, 'notifications'), orderBy('createdAt', 'desc'), limit(20));
        const unsubPersonal = onSnapshot(personalNotifsQuery, (snapshot) => {
            const fetched: Notification[] = [];
            snapshot.forEach(doc => {
                fetched.push({ id: doc.id, ...doc.data() } as Notification);
            });
            setPersonalNotifications(fetched);
        });
        
        // Listener for global notifications
        const globalNotifsQuery = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'), limit(10));
        const unsubGlobal = onSnapshot(globalNotifsQuery, (snapshot) => {
            const fetched: Notification[] = [];
            snapshot.forEach(doc => {
                fetched.push({ id: doc.id, ...doc.data() } as Notification);
            });
            setGlobalNotifications(fetched);
        });

        setIsLoading(false);
        return () => {
            unsubPersonal();
            unsubGlobal();
        };

    }, [user]);

    const combinedNotifications = useMemo(() => {
        const seenGlobalIds = new Set(getSeenNotifications());
        const allNotifications = [
            ...personalNotifications,
            ...globalNotifications.map(n => ({...n, isRead: seenGlobalIds.has(n.id) }))
        ].sort((a, b) => (b.createdAt?.toMillis() || 0) - (a.createdAt?.toMillis() || 0));
        return allNotifications;
    }, [personalNotifications, globalNotifications]);

    const unreadCount = useMemo(() => {
        return combinedNotifications.filter(n => !n.isRead).length;
    }, [combinedNotifications]);

    const markAsRead = async (notification: Notification) => {
        if (!user || notification.isRead) return;

        if (notification.isGlobal) {
            addSeenNotification(notification.id);
            // Force a re-render to update the UI
            setGlobalNotifications(prev => [...prev]);
        } else {
            const notifDocRef = doc(db, 'users', user.uid, 'notifications', notification.id);
            await updateDoc(notifDocRef, { isRead: true });
        }
    };

    const markAllAsRead = async () => {
        if (!user || unreadCount === 0) return;

        const batch = writeBatch(db);
        const seenGlobalIds = getSeenNotifications();
        
        // Mark all personal notifications as read
        personalNotifications.forEach(n => {
            if (!n.isRead) {
                const notifDocRef = doc(db, 'users', user.uid, 'notifications', n.id);
                batch.update(notifDocRef, { isRead: true });
            }
        });
        
        // Mark all global notifications as seen in local storage
        globalNotifications.forEach(n => {
            if (!seenGlobalIds.includes(n.id)) {
                seenGlobalIds.push(n.id);
            }
        });
        localStorage.setItem('seenGlobalNotifications', JSON.stringify(seenGlobalIds));
        
        await batch.commit();

        // Force UI update
        setGlobalNotifications(prev => [...prev]);
    };

    const icons = {
        info: <Info className="h-5 w-5 text-blue-500" />,
        update: <Edit2 className="h-5 w-5 text-green-500" />,
        warning: <Bell className="h-5 w-5 text-orange-500" />,
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-9 w-9">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                        <span className="absolute top-1 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
                            {unreadCount > 9 ? '9+' : unreadCount}
                        </span>
                    )}
                    <span className="sr-only">Notifications</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 md:w-96 solid-popover" align="end">
                <DropdownMenuLabel className="flex justify-between items-center">
                    Notifications
                    {unreadCount > 0 && <Button variant="link" className="p-0 h-auto text-xs" onClick={markAllAsRead}>Mark all as read</Button>}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ScrollArea className="h-[400px]">
                    {isLoading ? (
                         <div className="p-4 space-y-4">
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                            <Skeleton className="h-12 w-full" />
                        </div>
                    ) : combinedNotifications.length === 0 ? (
                        <div className="text-center text-muted-foreground p-8">
                            <Bell className="mx-auto h-10 w-10 mb-2" />
                            <p className="font-semibold">No notifications</p>
                            <p className="text-sm">You're all caught up!</p>
                        </div>
                    ) : (
                        combinedNotifications.map((notif) => (
                            <DropdownMenuItem key={notif.id} className={cn("flex items-start gap-3 p-3 text-wrap h-auto", !notif.isRead && 'bg-primary/5')} onSelect={() => markAsRead(notif)}>
                                <div className="mt-1">
                                    {icons[notif.type] || <Info className="h-5 w-5 text-muted-foreground" />}
                                </div>
                                <div className="flex-1 space-y-1">
                                    <p className="font-semibold text-sm leading-tight">{notif.title}</p>
                                    <div className="text-xs text-muted-foreground prose prose-sm dark:prose-invert" dangerouslySetInnerHTML={{__html: notif.message}}/>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-muted-foreground pt-1">
                                            {notif.createdAt ? formatDistanceToNow(notif.createdAt.toDate(), { addSuffix: true }) : 'Just now'}
                                        </p>
                                        {notif.link && (
                                            <Button variant="link" size="sm" asChild className="p-0 h-auto -my-1 -mr-2">
                                                <Link href={notif.link} onClick={() => setIsOpen(false)}>
                                                    View <ExternalLink className="ml-1 h-3 w-3"/>
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                                {!notif.isRead && <div className="h-2 w-2 rounded-full bg-primary mt-2 self-start" />}
                            </DropdownMenuItem>
                        ))
                    )}
                </ScrollArea>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
