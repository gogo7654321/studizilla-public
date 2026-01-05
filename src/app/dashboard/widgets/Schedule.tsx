'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot, updateDoc, doc, Timestamp } from 'firebase/firestore';
import { startOfDay, endOfDay, format } from 'date-fns';
import { useState, useEffect } from 'react';
import { Loader2, Calendar } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ScheduleEvent = {
  id: string;
  title: string;
  time: string;
  color: string;
  completed?: boolean;
};

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  pink: 'bg-pink-500',
  default: 'bg-gray-500',
};

export function Schedule() {
  const { user } = useAuth();
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    const eventsRef = collection(db, 'users', user.uid, 'events');
    const today = new Date();
    const q = query(
      eventsRef,
      where('date', '>=', Timestamp.fromDate(startOfDay(today))),
      where('date', '<=', Timestamp.fromDate(endOfDay(today)))
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedEvents: ScheduleEvent[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        loadedEvents.push({
          id: doc.id,
          title: data.title,
          time: data.time,
          color: data.color || 'default',
          completed: data.completed || false,
        });
      });

      // Sort by time
      loadedEvents.sort((a, b) => {
        const timeA = parseTime(a.time);
        const timeB = parseTime(b.time);
        return timeA - timeB;
      });

      setEvents(loadedEvents);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const parseTime = (timeStr: string): number => {
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return 0;
    
    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const meridiem = match[3].toUpperCase();
    
    if (meridiem === 'PM' && hours !== 12) hours += 12;
    if (meridiem === 'AM' && hours === 12) hours = 0;
    
    return hours * 60 + minutes;
  };

  const handleToggleComplete = async (eventId: string, completed: boolean) => {
    if (!user) return;
    const eventRef = doc(db, 'users', user.uid, 'events', eventId);
    await updateDoc(eventRef, { completed: !completed });
  };

  if (isLoading) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10">
          <CardTitle className="font-headline">Today's Schedule</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </CardContent>
      </Card>
    );
  }

  if (events.length === 0) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10">
          <CardTitle className="font-headline">Today's Schedule</CardTitle>
          <CardDescription>{format(new Date(), 'EEEE, MMMM d')}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center text-center py-12">
          <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="font-semibold text-lg text-muted-foreground">No events today!</p>
          <p className="text-sm text-muted-foreground mt-1">Enjoy your free time or add some tasks.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pl-10">
        <CardTitle className="font-headline">Today's Schedule</CardTitle>
        <CardDescription>{format(new Date(), 'EEEE, MMMM d')}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-3">
            {events.map((event) => (
              <div
                key={event.id}
                className={cn(
                  'flex items-center gap-3 p-3 rounded-lg border transition-all',
                  event.completed && 'opacity-50'
                )}
              >
                <Checkbox
                  checked={event.completed}
                  onCheckedChange={() => handleToggleComplete(event.id, event.completed || false)}
                />
                <div className={cn('w-1 h-10 rounded-full', colorClasses[event.color])} />
                <div className="flex-1 min-w-0">
                  <p className={cn('font-medium text-sm', event.completed && 'line-through')}>
                    {event.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
