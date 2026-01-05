'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { Flame, Clock, Bell, X, Info, Edit2, AlertTriangle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { doc, onSnapshot, collection, query, where, orderBy, updateDoc, arrayUnion, arrayRemove, getDocs } from 'firebase/firestore';
import { WeatherWidget } from './WeatherWidget';
import { format } from 'date-fns';
import { AceMascot } from '@/components/AceMascot';
import { Button } from '@/components/ui/button';
import { DashboardCustomizer } from './DashboardCustomizer';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const motivationalQuotes = [
  "Success is the sum of small efforts, repeated day in and day out.",
  "The expert in anything was once a beginner.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Don't watch the clock; do what it does. Keep going.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big and dare to fail.",
  "You don't have to be perfect to be amazing.",
  "Little by little, a little becomes a lot.",
  "Don't let what you cannot do interfere with what you can do.",
  "Great things never come from comfort zones.",
  "Your only limit is your mind.",
  "Make today so awesome that yesterday gets jealous.",
  "Focus on progress, not perfection.",
  "The best way to predict the future is to create it.",
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "Be the hardest worker in the room.",
  "What you learn today will shape your tomorrow.",
  "Study now, shine later.",
  "A little progress each day adds up to big results.",
  "Mistakes are proof you are trying.",
  "Education is the most powerful weapon you can use to change the world.",
  "Nothing will work unless you do.",
];

export function DashboardHeader() {
  const { user } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [streakCount, setStreakCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [userCreatedAt, setUserCreatedAt] = useState<any>(null);
  const [dismissedGlobalNotifs, setDismissedGlobalNotifs] = useState<string[]>([]);
  const [quote] = useState(() => 
    motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  );

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Load user data (streak, creation date, dismissed notifications)
  useEffect(() => {
    if (!user) return;

    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setStreakCount(data.streak || 0);
        if (data.createdAt) {
          setUserCreatedAt(data.createdAt);
        }
        setDismissedGlobalNotifs(data.dismissedGlobalNotifications || []);
      }
    });

    return () => unsubscribe();
  }, [user]);

  // Load personal and global notifications
  useEffect(() => {
    if (!user) return;

    console.log('Loading notifications for user:', user.uid);

    const notificationsRef = doc(db, 'users', user.uid, 'settings', 'notifications');
    const unsubscribe = onSnapshot(notificationsRef, async (docSnap) => {
      const personalNotifs = docSnap.exists() ? (docSnap.data().items || []) : [];
      console.log('Personal notifications:', personalNotifs.length);

      // Load global notifications
      try {
        const globalNotificationsRef = collection(db, 'notifications');
        const globalQuery = query(
          globalNotificationsRef,
          where('isGlobal', '==', true),
          orderBy('createdAt', 'desc')
        );

        const globalSnapshot = await getDocs(globalQuery);
        console.log('Total global notifications:', globalSnapshot.docs.length);
        
        const globalNotifs = globalSnapshot.docs
          .filter(doc => {
            const docData = doc.data();
            console.log('Checking notification:', doc.id, docData);
            
            // Filter: not dismissed
            if (dismissedGlobalNotifs.includes(doc.id)) {
              console.log('Notification dismissed:', doc.id);
              return false;
            }
            
            // Filter: only show if created after user signup (if userCreatedAt exists)
            if (userCreatedAt) {
              const notifCreatedAt = docData.createdAt;
              if (notifCreatedAt && notifCreatedAt.seconds < userCreatedAt.seconds) {
                console.log('Notification too old:', doc.id);
                return false;
              }
            }
            
            return true;
          })
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
            isGlobal: true,
            read: false
          }));

        console.log('Filtered global notifications:', globalNotifs.length);

        const allNotifs = [...personalNotifs, ...globalNotifs].sort((a, b) => {
          const aTime = a.createdAt?.seconds || 0;
          const bTime = b.createdAt?.seconds || 0;
          return bTime - aTime;
        });

        console.log('Total notifications to display:', allNotifs.length);
        setNotifications(allNotifs);
        setUnreadCount(allNotifs.filter((n: any) => !n.read).length);
      } catch (error) {
        console.error('Error loading global notifications:', error);
        setNotifications(personalNotifs);
        setUnreadCount(personalNotifs.filter((n: any) => !n.read).length);
      }
    });

    return () => unsubscribe();
  }, [user, userCreatedAt, dismissedGlobalNotifs]);

  const handleDeleteNotification = async (notificationId: string, isGlobal: boolean) => {
    if (!user) return;

    try {
      if (isGlobal) {
        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
          dismissedGlobalNotifications: arrayUnion(notificationId)
        });
      } else {
        const notificationsRef = doc(db, 'users', user.uid, 'settings', 'notifications');
        const updatedNotifs = notifications.filter(n => n.id !== notificationId && !n.isGlobal);
        await updateDoc(notificationsRef, {
          items: updatedNotifs
        });
      }
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  return (
    <div className="space-y-4">
      {/* Compact single row layout */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold font-headline truncate">
            Welcome back{user?.displayName ? `, ${user.displayName.split(' ')[0]}` : ''}!
          </h1>
          <p className="text-sm text-muted-foreground italic mt-1 line-clamp-1">
            "{quote}"
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          {/* Streak Counter */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-gradient-to-r from-orange-500/10 to-red-500/10">
            <Flame className="h-5 w-5 text-orange-500" />
            <div>
              <div className="text-lg font-bold leading-none">{streakCount}</div>
              <div className="text-xs text-muted-foreground">day streak</div>
            </div>
          </div>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="relative h-11 w-11">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {notifications.length > 0 ? (
                <>
                  {notifications.slice(0, 5).map((notif, index) => {
                    const getIcon = () => {
                      if (notif.type === 'info') return <Info className="h-4 w-4 text-blue-500" />;
                      if (notif.type === 'update') return <Edit2 className="h-4 w-4 text-green-500" />;
                      if (notif.type === 'warning') return <AlertTriangle className="h-4 w-4 text-orange-500" />;
                      return <Bell className="h-4 w-4 text-primary" />;
                    };

                    return (
                      <div key={notif.id || index} className="flex items-start gap-2 p-3 border-b last:border-b-0 group relative">
                        <div className="shrink-0 mt-0.5">
                          {getIcon()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm">{notif.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-2">
                            {notif.message?.replace(/<[^>]*>/g, '') || notif.message}
                          </div>
                          {notif.createdAt && (
                            <div className="text-xs text-muted-foreground mt-1">
                              {new Date(notif.createdAt.seconds * 1000).toLocaleString()}
                            </div>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteNotification(notif.id, notif.isGlobal);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="p-8 text-center text-sm text-muted-foreground">
                  No new notifications
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Current Time/Date */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border bg-card/50 backdrop-blur">
            <Clock className="h-5 w-5 text-primary" />
            <div>
              <div className="text-sm font-medium leading-none">{format(currentTime, 'h:mm a')}</div>
              <div className="text-xs text-muted-foreground">{format(currentTime, 'EEE, MMM d')}</div>
            </div>
          </div>

          {/* Weather Widget */}
          <WeatherWidget />

          {/* Theme Customizer */}
          <DashboardCustomizer />

          {/* Ace Mascot */}
          <div className="hidden lg:block">
            <AceMascot className="h-12 w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
