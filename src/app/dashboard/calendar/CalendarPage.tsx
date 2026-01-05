'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import '../dashboard.css';


import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import {
  format as formatDate,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isToday,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
  add,
  getDay,
  getDate,
  getMonth,
  isAfter,
  differenceInWeeks,
  parseISO,
} from 'date-fns';
import { ChevronLeft, ChevronRight, PlusCircle, Calendar as CalendarDays, Settings, Loader2, Save, Trash2 } from 'lucide-react';
import { FaApple } from 'react-icons/fa';
import { SiCanvas } from 'react-icons/si';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  Timestamp,
  setDoc,
  arrayUnion,
  writeBatch,
} from 'firebase/firestore';
import { TimezoneSelect } from '@/components/TimezoneSelect';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { EventFormBody, eventFormSchema, type EventFormData, type CalendarEvent, type RecurrenceRule } from './EventForm';
import { createEventWithAI } from './actions';
import { Input } from '@/components/ui/input';
import { Sparkles } from 'lucide-react';

type CalendarSettings = {
    dateFormat: string;
    timeFormat: '12h' | '24h';
    weekStartsOn: 0 | 1;
    timezone: string;
    googleCalendar?: {
        connected: boolean;
    };
};

// grab timezone from browser, fallback to UTC if something breaks
function getBrowserTimezone() {
    if (typeof window === 'undefined') return 'UTC';
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (e) {
        console.warn('Could not detect timezone, defaulting to UTC.');
        return 'UTC';
    }
}

// TODO: maybe move this to a config file?
const defaultSettingsData: CalendarSettings = {
    dateFormat: "MMMM d, yyyy",
    timeFormat: '12h',
    weekStartsOn: 1,
    timezone: getBrowserTimezone(),
    googleCalendar: {
        connected: false
    }
};

const settingsFormSchema = z.object({
    dateFormat: z.string(),
    timeFormat: z.enum(['12h', '24h']),
    weekStartsOn: z.coerce.number().min(0).max(1),
    timezone: z.string().min(1, 'Timezone is required.'),
});

type SettingsFormData = z.infer<typeof settingsFormSchema>;


// event colors - pretty self explanatory
const colorMap = {
  blue: { bg: 'bg-blue-500', name: 'Due Date' },
  green: { bg: 'bg-green-500', name: 'Extracurricular' },
  red: { bg: 'bg-red-500', name: 'Exam' },
  purple: { bg: 'bg-purple-500', name: 'Meeting' },
  orange: { bg: 'bg-orange-500', name: 'Personal' },
};

// converts time string to minutes for sorting
function parseTime(timeStr: string): number {
  if(!timeStr || timeStr === 'All Day') return -1; //all day goes first
  let normalizedTime = timeStr.toUpperCase().replace(/\./g, '');
  const modifierMatch = normalizedTime.match(/([AP]M)/);
  let modifier = modifierMatch ? modifierMatch[0] : '';
  
  const timePart = normalizedTime.replace(modifier, '').trim();
  let parts = timePart.split(':');
  const hourStr = parts[0];
  const minuteStr = parts[1];
  
  let hours = parseInt(hourStr, 10);
  let minutes = minuteStr ? parseInt(minuteStr, 10) : 0;

  if (isNaN(hours) || isNaN(minutes)) {
    return 9999; // bad times go to the end
  }

  // handle 12hr format conversion
  if (modifier === 'PM' && hours !== 12) {
    hours += 12;
  } else if (modifier === 'AM' && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

const ResponsiveGridLayout = WidthProvider(Responsive);
// layout types for the grid system
type LayoutItem = { i: string; x: number; y: number; w: number; h: number; minW?: number, minH?: number, maxW?: number, maxH?: number };
type Layouts = { [key: string]: LayoutItem[] };

const defaultLayouts: Layouts = {
    lg: [
      { i: 'calendar', x: 0, y: 0, w: 8, h: 19, minH: 8, minW: 6 },
      { i: 'eventOverview', x: 8, y: 0, w: 4, h: 19, minH: 6, minW: 3 },
    ],
    md: [
      { i: 'calendar', x: 0, y: 0, w: 6, h: 12, minH: 8, minW: 5 },
      { i: 'eventOverview', x: 6, y: 0, w: 4, h: 12, minH: 6, minW: 3 },
    ],
    sm: [
      { i: 'calendar', x: 0, y: 0, w: 6, h: 10, minH: 8, minW: 4 },
      { i: 'eventOverview', x: 0, y: 10, w: 6, h: 8, minH: 6, minW: 4 },
    ],
    xs: [
      { i: 'calendar', x: 0, y: 0, w: 4, h: 9, minH: 8, minW: 4 },
      { i: 'eventOverview', x: 0, y: 9, w: 4, h: 7, minH: 6, minW: 2 },
    ],
    xxs: [
       { i: 'calendar', x: 0, y: 0, w: 2, h: 8, minH: 8, minW: 2 },
       { i: 'eventOverview', x: 0, y: 8, w: 2, h: 7, minH: 6, minW: 2 },
    ],
  };

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,36.596,44,31.1,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
);

// strip out extra props from layout items before saving
function cleanLayout(layout: LayoutItem[] | undefined): LayoutItem[] {
    if (!layout) return [];
    let cleaned = [];
    for(let i = 0; i < layout.length; i++) {
        const item = layout[i];
        cleaned.push({ i: item.i, x: item.x, y: item.y, w: item.w, h: item.h });
    }
    return cleaned;
}
  
const cleanAllLayouts = (layouts: Layouts): Layouts => {
    const cleaned: Layouts = {};
    for (const breakpoint in layouts) {
        if (layouts.hasOwnProperty(breakpoint)) {
            cleaned[breakpoint] = cleanLayout(layouts[breakpoint as keyof Layouts]);
        }
    }
    return cleaned;
}

export default function CalendarPageClient() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const { toast } = useToast();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  let [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isAiDialogOpen, setIsAiDialogOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  let [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [aiInput, setAiInput] = useState('');
  const [isAiCreating, setIsAiCreating] = useState(false);

  const [layouts, setLayouts] = React.useState<Layouts>(defaultLayouts);
  const [isLayoutInitialized, setIsLayoutInitialized] = React.useState(false);

  const [settings, setSettings] = useState<CalendarSettings>(defaultSettingsData);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);

  const settingsForm = useForm<SettingsFormData>({
    resolver: zodResolver(settingsFormSchema),
    values: settings,
  });

  // load user settings from firestore
  useEffect(() => {
    if(user){
      const userDocRef = doc(db, 'users', user.uid);
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if(docSnap.exists() && docSnap.data().calendarSettings) {
          let settingsData = docSnap.data().calendarSettings;
          const fetchedSettings = { ...defaultSettingsData, ...settingsData };
          setSettings(fetchedSettings);
          settingsForm.reset(fetchedSettings);
        } else {
            setSettings(defaultSettingsData);
            settingsForm.reset(defaultSettingsData);
        }
      });
      return () => unsubscribe();
    } else {
        setSettings(defaultSettingsData);
        settingsForm.reset(defaultSettingsData);
    }
  }, [user, settingsForm]);

  // sync layouts from db
  React.useEffect(() => {
    if (user) {
        const layoutDocRef = doc(db, 'users', user.uid);
        const unsubscribe = onSnapshot(layoutDocRef, (docSnap) => {
            if (docSnap.exists() && docSnap.data().calendarLayouts) {
                setLayouts(docSnap.data().calendarLayouts);
            }
            if (!isLayoutInitialized) {
                setIsLayoutInitialized(true);
            }
        });
        return () => unsubscribe();
    } else {
        setIsLayoutInitialized(true);
    }
  }, [user, isLayoutInitialized]);

  const onLayoutChange = useCallback((layout: LayoutItem[], allLayouts: Layouts) => {
    if (!isLayoutInitialized || !user) return;
    
    const cleanedLayouts = cleanAllLayouts(allLayouts);
    setLayouts(cleanedLayouts);
    
    const layoutDocRef = doc(db, 'users', user.uid);
    setDoc(layoutDocRef, { calendarLayouts: cleanedLayouts }, { merge: true }).catch(err => {
      console.error("Failed to save layout:", err);
    });
  }, [isLayoutInitialized, user]);

  const eventForm = useForm<EventFormData>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: { title: '', date: new Date(), isAllDay: false, hour: '12', minute: '00', period: 'PM', color: 'blue', location: '', notes: '', recurrenceType: 'none', recurrenceInterval: "1", recurrenceDays: [] },
  });

  // listen for event changes
  useEffect(() => {
    if (!user) {
      setEvents([]);
      return;
    }

    const eventsCollectionRef = collection(db, 'users', user.uid, 'events');
    const q = query(eventsCollectionRef);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let fetchedEvents: CalendarEvent[] = [];
      querySnapshot.forEach((docSnap) => {
        const data = docSnap.data();
        let eventDate;
        if(data.date instanceof Timestamp) {
          eventDate = data.date.toDate();
        } else {
          eventDate = new Date();
        }

        fetchedEvents.push({
          id: docSnap.id,
          title: data.title,
          date: eventDate,
          time: data.time,
          color: data.color,
          location: data.location,
          notes: data.notes,
          recurrenceRule: data.recurrenceRule,
          exceptions: data.exceptions,
          googleEventId: data.googleEventId,
        });
      });
      setEvents(fetchedEvents);
    });

    return () => unsubscribe();
  }, [user]);

  useEffect(() => {
    if(selectedEvent) {
      let isAllDay = selectedEvent.time === 'All Day';
      let timeParts = selectedEvent.time.match(/(\d+):(\d+)\s(AM|PM)/);
      let hour = '12', minute = '00', period = 'PM';
      if(timeParts) {
        hour = timeParts[1];
        minute = timeParts[2];
        period = timeParts[3];
      }

      eventForm.reset({
        title: selectedEvent.title,
        date: selectedEvent.date,
        isAllDay: isAllDay,
        hour: hour,
        minute: minute,
        period: period as 'AM' | 'PM',
        color: selectedEvent.color,
        location: selectedEvent.location || '',
        notes: selectedEvent.notes || '',
        recurrenceType: selectedEvent.recurrenceRule?.type || 'none',
        recurrenceInterval: String(selectedEvent.recurrenceRule?.interval || 1),
        recurrenceDays: selectedEvent.recurrenceRule?.days || [],
      });
    } else {
        eventForm.reset({ title: '', date: new Date(), isAllDay: false, hour: '12', minute: '00', period: 'PM', color: 'blue', location: '', notes: '', recurrenceType: 'none', recurrenceInterval: "1", recurrenceDays: [] })
    }
  }, [selectedEvent, eventForm]);
  
  const weekStartsOn = settings.weekStartsOn;
  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);
  const firstDayOfCalendar = startOfWeek(firstDayOfMonth, { weekStartsOn });
  const lastDayOfCalendar = endOfWeek(lastDayOfMonth, { weekStartsOn });

  const days = eachDayOfInterval({
    start: firstDayOfCalendar,
    end: lastDayOfCalendar,
  });

  let weekdays = eachDayOfInterval({
    start: firstDayOfCalendar,
    end: add(firstDayOfCalendar, { days: 6 }),
  });
  weekdays = weekdays.map(day => formatDate(day, 'E'));

  // figure out which events show on which days (handles recurring events)
  // TODO: this could probably be optimized
  const generatedEvents = useMemo(() => {
    let occurrences = new Map<string, CalendarEvent[]>();
    if(events.length === 0) return occurrences;
  
    days.forEach(day => {
      let dayKey = formatDate(day, 'yyyy-MM-dd');
      let dayEvents: CalendarEvent[] = [];
  
      events.forEach(event => {
        let eventStartDate = event.date;
        let exceptions = event.exceptions?.map(ts => ts.toDate()) || [];

        //skip if this occurrence was deleted
        let isException = exceptions.some(exDate => isSameDay(day, exDate));
        if(isException) {
          return;
        }
  
        if(isAfter(day, eventStartDate) || isSameDay(day, eventStartDate)) {
          let rule = event.recurrenceRule;
          let happensToday = false;
  
          //one-time events
          if(!rule || rule.type === 'none') {
            if(isSameDay(day, eventStartDate)) {
              happensToday = true;
            }
          } else {
            //recurring event logic
            switch(rule.type) {
              case 'daily':
                happensToday = true;
                break;
              case 'weekly':
                let dayOfWeek = getDay(day);
                if(dayOfWeek === getDay(eventStartDate)) {
                  happensToday = true;
                }
                break;
              case 'monthly':
                let dateOfMonth = getDate(day);
                if(dateOfMonth === getDate(eventStartDate)) {
                  happensToday = true;
                }
                break;
              case 'yearly':
                let month = getMonth(day);
                let date = getDate(day);
                if(month === getMonth(eventStartDate) && date === getDate(eventStartDate)) {
                  happensToday = true;
                }
                break;
              case 'custom':
                if (rule.days?.includes(getDay(day))) {
                  const weeksDiff = differenceInWeeks(day, eventStartDate, { weekStartsOn: settings.weekStartsOn });
                  if (weeksDiff % (rule.interval || 1) === 0) {
                    happensToday = true;
                  }
                }
                break;
            }
          }
  
          if (happensToday) {
            dayEvents.push({ ...event, date: day });
          }
        }
      });
      if (dayEvents.length > 0) {
        occurrences.set(dayKey, dayEvents.sort((a,b) => parseTime(a.time) - parseTime(b.time)));
      }
    });
  
    return occurrences;
  }, [events, days, settings.weekStartsOn]);

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }
  function today() {
    const now = new Date();
    setCurrentMonth(now);
  }

  async function onAddSubmit(data: EventFormData) {
    if (!user) return;
    let time;
    if(data.isAllDay) {
      time = 'All Day';
    } else {
      time = `${data.hour}:${data.minute} ${data.period}`;
    }

    let recurrenceRule: RecurrenceRule = {
        type: data.recurrenceType,
    };
    if(data.recurrenceType === 'custom') {
        recurrenceRule.interval = parseInt(data.recurrenceInterval || '1', 10);
        recurrenceRule.days = data.recurrenceDays;
    }

    const eventsRef = collection(db, 'users', user.uid, 'events');
    await addDoc(eventsRef, { ...data, time, recurrenceRule });
    eventForm.reset({ title: '', date: new Date(), isAllDay: false, hour: '12', minute: '00', period: 'PM', color: 'blue', location: '', notes: '', recurrenceType: 'none', recurrenceInterval: "1", recurrenceDays: [] });
    setIsAddDialogOpen(false);
  }

  // ai quick add handler
  const handleAiCreate = async () => {
    let input = aiInput.trim();
    if(!input || !user) return;
    
    setIsAiCreating(true);
    try {
      let result = await createEventWithAI(input, user.uid);
      setAiInput('');
      setIsAiDialogOpen(false);
      toast({
        title: "Event created!",
        description: `Added "${result.title}" to your calendar.`,
      });
    } catch (error: any) {
      console.error('AI create error:', error);
      toast({
        variant: "destructive",
        title: "Couldn't create event",
        description: error?.message || "Try describing it differently.",
      });
    } finally {
      setIsAiCreating(false);
    }
  };

  async function onEditSubmit(data: EventFormData) {
    if (!user || !selectedEvent) return;
    let time = data.isAllDay ? 'All Day' : `${data.hour}:${data.minute} ${data.period}`;
    const eventDocRef = doc(db, 'users', user.uid, 'events', selectedEvent.id);

    let recurrenceRule: RecurrenceRule = {
        type: data.recurrenceType,
    };
    if(data.recurrenceType === 'custom') {
        recurrenceRule.interval = parseInt(data.recurrenceInterval || '1', 10);
        recurrenceRule.days = data.recurrenceDays;
    }

    await updateDoc(eventDocRef, { ...data, time, recurrenceRule });
    toast({
        title: "Event Updated",
        description: "Your changes have been saved successfully.",
    });
  }

  async function onDeleteThisOccurrence() {
    if (!user) return;
    if (!selectedEvent) return;
    const eventDocRef = doc(db, 'users', user.uid, 'events', selectedEvent.id);
    const exceptionDate = Timestamp.fromDate(selectedEvent.date);
    await updateDoc(eventDocRef, {
        exceptions: arrayUnion(exceptionDate)
    });
    setIsDeleteConfirmOpen(false);
    setSelectedEvent(null);
  }

  async function onDeleteAllOccurrences() {
    if (!user || !selectedEvent) return;
    const eventDocRef = doc(db, 'users', user.uid, 'events', selectedEvent.id);
    await deleteDoc(eventDocRef);
    setIsDeleteConfirmOpen(false);
    setSelectedEvent(null);
  }

  async function saveSettings(newSettings: CalendarSettings) {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    await setDoc(userDocRef, { calendarSettings: newSettings }, { merge: true });
  }
  
  async function handleSaveSettings(data: SettingsFormData) {
      if (!user) return;
      const updatedSettings = { ...settings, ...data };
      await saveSettings(updatedSettings);
      setIsSettingsOpen(false);
  }

  //import events from google calendar
  const handleImport = async (token?: string) => {
    if(!user) return;
    setIsImporting(true);

    try {
        let accessToken = token;
        if(!accessToken) {
            //need to get oauth token first
            const provider = new GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/calendar.readonly');
            provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly');
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            accessToken = credential?.accessToken;
        }
        
        if (!accessToken) {
            throw new Error("Could not retrieve access token from Google.");
        }

        let calendarListResponse = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        if(!calendarListResponse.ok) {
            const errorData = await calendarListResponse.json();
            console.error("Google Calendar API Error:", errorData);
            const errorMessage = errorData.error?.message || calendarListResponse.statusText;
            throw new Error(`Failed to fetch calendar list. Reason: ${errorMessage}. Ensure the Google Calendar API is enabled in your Google Cloud project.`);
        }
        const calendarListData = await calendarListResponse.json();
        const calendars = calendarListData.items;

        const allEventsPromises = calendars.map((calendar: any) => 
            fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendar.id)}/events?maxResults=100`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            }).then(res => res.json())
        );

        let allEventsResults = await Promise.all(allEventsPromises);
        let googleEvents = allEventsResults.flatMap(result => result.items || []);

        let eventsCollection = collection(db, 'users', user.uid, 'events');
        let existingGoogleEventIds = new Set(
            events.filter(e => e.googleEventId).map(e => e.googleEventId)
        );

        const batch = writeBatch(db);
        let importedCount = 0;

        googleEvents.forEach((gEvent: any) => {
            if(gEvent.status === 'cancelled') return;
            if(!gEvent.id) return;
            if(!existingGoogleEventIds.has(gEvent.id)) {
                let eventDate: Date;
                let eventTime = "All Day";

                if (gEvent.start.dateTime) {
                    eventDate = parseISO(gEvent.start.dateTime);
                    eventTime = formatDate(eventDate, "h:mm a");
                } else if (gEvent.start.date) {
                    eventDate = new Date(gEvent.start.date);
                } else {
                    return;
                }

                const newEvent = {
                    title: gEvent.summary || "Untitled Event",
                    date: Timestamp.fromDate(eventDate),
                    time: eventTime,
                    color: "purple",
                    location: gEvent.location || "",
                    notes: gEvent.description || "",
                    recurrenceRule: { type: 'none' },
                    googleEventId: gEvent.id,
                };
                const newEventRef = doc(eventsCollection);
                batch.set(newEventRef, newEvent);
                importedCount++;
            }
        });

        if (importedCount > 0) {
            await batch.commit();
            toast({
                title: "Import Successful",
                description: `Successfully imported ${importedCount} new events.`,
            });
        } else {
             toast({
                title: "No New Events",
                description: "Your calendar is already up to date.",
            });
        }

    } catch (error: any) {
        console.error("Google Calendar import error:", error);
        toast({
            variant: "destructive",
            title: "Import Failed",
            description: error.message || "An error occurred during the import.",
        });
    } finally {
        setIsImporting(false);
    }
  };

  const handleConnectAndSync = async () => {
    if(!user) return;
    setIsConnecting(true);

    try {
        let provider = new GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/calendar.readonly');
        provider.addScope('https://www.googleapis.com/auth/calendar.events.readonly');
        
        let result = await signInWithPopup(auth, provider);
        let credential = GoogleAuthProvider.credentialFromResult(result);
        
        await saveSettings({ ...settings, googleCalendar: { connected: true } });
        
        toast({
            title: "Success!",
            description: "Google Calendar connected. Importing your events now...",
        });

        await handleImport(credential?.accessToken);

    } catch (error: any) {
        console.error("Google Calendar connect error:", error);
        toast({
            variant: "destructive",
            title: "Connection Failed",
            description: error.message || "An error occurred while connecting. Check the browser console for details.",
        });
    } finally {
        setIsConnecting(false);
    }
  };

  async function handleGoogleDisconnect() {
    let newSettings = { ...settings };
    newSettings.googleCalendar = { connected: false };
    await saveSettings(newSettings);
  }

  if (isAuthLoading) {
    return <div className="flex h-[calc(100vh-8rem)] items-center justify-center"><Loader2 className="h-12 w-12 animate-spin" /></div>;
  }
  
  if (!user) {
    return (
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please sign in to access your calendar.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-8">
        <ResponsiveGridLayout
            layouts={layouts}
            onLayoutChange={onLayoutChange}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            margin={[24, 24]}
            draggableHandle=".drag-handle"
        >
          <div key="calendar" className="grid-card-wrapper">
            <div className="drag-handle"></div>
            <Card className="shadow-lg rounded-2xl flex flex-col h-full">
              <CardHeader className="px-6 py-4 border-b">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                          <h1 className="font-headline text-3xl font-bold">Calendar</h1>
                          <p className="text-muted-foreground">Manage your due dates, exams, and extracurriculars.</p>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                          <Button variant="outline" size="icon" onClick={prevMonth}><ChevronLeft /></Button>
                          <Button variant="outline" onClick={today} size="sm">Today</Button>
                          <Button variant="outline" size="icon" onClick={nextMonth}><ChevronRight /></Button>
                          <h2 className="text-lg font-semibold whitespace-nowrap min-w-fit text-center">{formatDate(currentMonth, 'MMMM yyyy')}</h2>
                      </div>
                  </div>
                  <div className="mt-4 flex justify-end items-center gap-2">
                      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                        <DialogTrigger asChild>
                            <Button variant="outline" size="icon"><Settings className="h-5 w-5" /></Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Calendar Settings</DialogTitle>
                                <DialogDescription>Customize your calendar view. Settings are saved automatically.</DialogDescription>
                            </DialogHeader>
                            <Form {...settingsForm}>
                                <form onSubmit={settingsForm.handleSubmit(handleSaveSettings)} className="space-y-4 pt-2">
                                    <FormField
                                        control={settingsForm.control}
                                        name="weekStartsOn"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Week Starts On</FormLabel>
                                                <Select onValueChange={(val) => field.onChange(parseInt(val))} value={String(field.value)}>
                                                    <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="0">Sunday</SelectItem>
                                                        <SelectItem value="1">Monday</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={settingsForm.control}
                                        name="dateFormat"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Date Format</FormLabel>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="MMMM d, yyyy">Month D, YYYY (e.g., June 25, 2026)</SelectItem>
                                                        <SelectItem value="MM/dd/yyyy">MM/DD/YYYY (e.g., 06/25/2026)</SelectItem>
                                                        <SelectItem value="dd/MM/yyyy">DD/MM/YYYY (e.g., 25/06/2026)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                     <FormField
                                        control={settingsForm.control}
                                        name="timezone"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel>Timezone</FormLabel>
                                                <TimezoneSelect
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <DialogFooter>
                                        <Button type="submit">Save & Close</Button>
                                    </DialogFooter>
                                </form>
                            </Form>
                            <Separator className="my-4" />
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-base font-semibold leading-none">Integrations</h3>
                                    <p className="text-sm text-muted-foreground">Sync events from your favorite calendars.</p>
                                </div>
                                <div className="space-y-3 pt-2">
                                    <div className="relative">
                                        <Button className="w-full justify-start pl-4" variant="outline" disabled>
                                            <GoogleIcon className="mr-3 h-5 w-5" />
                                            Connect with Google
                                        </Button>
                                        <Badge variant="outline" className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none font-semibold">
                                            Coming Soon
                                        </Badge>
                                    </div>
                                    <div className="relative">
                                        <Button className="w-full justify-start pl-4" variant="outline" disabled>
                                            <FaApple className="mr-3 h-5 w-5" />
                                            Connect with Apple
                                        </Button>
                                        <Badge variant="outline" className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none font-semibold">
                                            Coming Soon
                                        </Badge>
                                    </div>
                                    <div className="relative">
                                        <Button className="w-full justify-start pl-4" variant="outline" disabled>
                                            <SiCanvas className="mr-3 h-5 w-5" />
                                            Connect with Canvas
                                        </Button>
                                        <Badge variant="outline" className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none font-semibold">
                                            Coming Soon
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                      </Dialog>
                      <Dialog open={isAiDialogOpen} onOpenChange={setIsAiDialogOpen}>
                          <DialogTrigger asChild>
                              <Button variant="outline"><Sparkles className="mr-2 h-4 w-4" /> Quick Add</Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                              <DialogTitle>Quick Add Event</DialogTitle>
                              <DialogDescription>Just describe your event naturally.</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <Input
                                  placeholder="e.g., tennis tryouts Jan 26th after school"
                                  value={aiInput}
                                  onChange={(e) => setAiInput(e.target.value)}
                                  onKeyDown={(e) => e.key === 'Enter' && !isAiCreating && handleAiCreate()}
                                  disabled={isAiCreating}
                                  className="text-base"
                                  autoFocus
                                />
                                <DialogFooter className="sm:justify-end">
                                  <DialogClose asChild>
                                    <Button type="button" variant="ghost" disabled={isAiCreating}>Cancel</Button>
                                  </DialogClose>
                                  <Button
                                    onClick={handleAiCreate}
                                    disabled={!aiInput.trim() || isAiCreating}
                                  >
                                    {isAiCreating ? (
                                      <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Creating...
                                      </>
                                    ) : (
                                      'Create Event'
                                    )}
                                  </Button>
                                </DialogFooter>
                              </div>
                          </DialogContent>
                      </Dialog>
                      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                          <DialogTrigger asChild>
                              <Button><PlusCircle className="mr-2 h-5 w-5" /> Add Event</Button>
                          </DialogTrigger>
                          <DialogContent>
                              <DialogHeader>
                              <DialogTitle>Add a New Event</DialogTitle>
                              <DialogDescription>Fill out the details for your new calendar event.</DialogDescription>
                              </DialogHeader>
                              <Form {...eventForm}>
                                <form onSubmit={eventForm.handleSubmit(onAddSubmit)} className="space-y-4">
                                  <EventFormBody form={eventForm} />
                                  <DialogFooter>
                                      <DialogClose asChild><Button type="button" variant="ghost">Cancel</Button></DialogClose>
                                      <Button type="submit">Save Event</Button>
                                  </DialogFooter>
                                </form>
                              </Form>
                          </DialogContent>
                      </Dialog>
                  </div>
              </CardHeader>
              
              <CardContent className="flex-1 p-0 flex flex-col min-h-0 overflow-hidden">
                <div className="grid grid-cols-7 border-b flex-shrink-0">
                  {weekdays.map((day) => (
                    <div
                      key={day}
                      className="text-center font-bold py-2 text-sm text-muted-foreground border-r last:border-r-0"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="flex-1 overflow-y-auto min-h-0">
                    <div className="grid grid-cols-7 h-full">
                      {days.map((day) => {
                        const dayEvents = generatedEvents.get(formatDate(day, 'yyyy-MM-dd')) || [];
                        return (
                          <div
                            key={day.toString()}
                            onClick={() => {
                                if (dayEvents.length > 0) {
                                    setSelectedEvent(dayEvents[0])
                                } else {
                                    setSelectedEvent(null);
                                    eventForm.setValue('date', day);
                                    setIsAddDialogOpen(true);
                                }
                            }}
                            className={cn(
                              "border-b border-r p-2 flex flex-col relative min-h-24 cursor-pointer hover:bg-secondary/50 transition-colors",
                              !isSameMonth(day, currentMonth) && "bg-secondary/30 text-muted-foreground/70",
                              "[&:nth-child(7n)]:border-r-0"
                            )}
                          >
                            <span
                              className={cn(
                                "font-semibold text-sm self-start h-6 w-6 flex items-center justify-start mb-1",
                                isToday(day) && "bg-primary text-primary-foreground rounded-full justify-center"
                              )}
                            >
                              {formatDate(day, 'd')}
                            </span>
                            <div className="flex-grow space-y-1 overflow-y-auto -mx-1 px-1 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                              {dayEvents.map((event) => (
                                <div
                                  key={event.id}
                                  onClick={(e) => { e.stopPropagation(); setSelectedEvent(event); }}
                                  className={cn(
                                    "text-xs text-white p-1 rounded-md cursor-pointer hover:opacity-80 flex flex-col gap-1 shadow-sm truncate",
                                    colorMap[event.color].bg
                                  )}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-semibold truncate flex-1">{event.title}</span>
                                    <span className="opacity-90 whitespace-nowrap ml-1 text-[10px]">{event.time}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div key="eventOverview" className="grid-card-wrapper">
              <div className="drag-handle"></div>
                {selectedEvent ? (
                     <Card className="shadow-lg rounded-2xl h-full flex flex-col">
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <span className={cn("mt-1.5 h-3 w-3 rounded-full shrink-0", colorMap[selectedEvent.color].bg)}></span>
                                <div>
                                    <CardTitle>Event Details</CardTitle>
                                    <CardDescription>{formatDate(selectedEvent.date, `EEEE, ${settings.dateFormat}`)} at {selectedEvent.time}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                         <CardContent className="flex-grow overflow-y-auto pr-2">
                            <Form {...eventForm}>
                                <form onSubmit={eventForm.handleSubmit(onEditSubmit)} className="space-y-4">
                                    <EventFormBody form={eventForm} />
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter className="justify-between">
                            <AlertDialog open={isDeleteConfirmOpen} onOpenChange={setIsDeleteConfirmOpen}>
                                <AlertDialogTrigger asChild>
                                    <Button type="button" variant="destructive">
                                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    {selectedEvent?.recurrenceRule && selectedEvent.recurrenceRule.type !== 'none' ? (
                                        <>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Delete Recurring Event</AlertDialogTitle>
                                                <AlertDialogDescription>Do you want to delete only this instance or the entire series?</AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter className="sm:justify-start gap-2 pt-2">
                                                <AlertDialogAction onClick={onDeleteThisOccurrence} className={buttonVariants({ variant: "destructive" })}>Delete This Event Only</AlertDialogAction>
                                                <AlertDialogAction onClick={onDeleteAllOccurrences} className={buttonVariants({ variant: "destructive" })}>Delete All Future Events</AlertDialogAction>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            </AlertDialogFooter>
                                        </>
                                    ) : (
                                        <>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>This action cannot be undone. This will permanently delete this event.</AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={onDeleteAllOccurrences} className={buttonVariants({ variant: "destructive" })}>Delete</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </>
                                    )}
                                </AlertDialogContent>
                            </AlertDialog>
                            <Button onClick={eventForm.handleSubmit(onEditSubmit)}>
                                <Save className="mr-2 h-4 w-4" /> Save Changes
                            </Button>
                        </CardFooter>
                     </Card>
                ) : (
                    <Card className="shadow-lg rounded-2xl h-full flex flex-col">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base">Legend</CardTitle>
                            <CardDescription className="text-xs">Event categories</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-1.5 pb-3">
                            {Object.entries(colorMap).map(([color, { name, bg }]) => (
                                <div key={color} className="flex items-center gap-2 p-1.5 rounded-md hover:bg-secondary/50 transition-colors">
                                    <span className={cn("h-3 w-3 rounded-full shrink-0", bg)}></span>
                                    <span className="text-sm">{name}</span>
                                </div>
                            ))}
                        </CardContent>
                        <CardContent className="pt-0 mt-auto pb-6">
                            <Separator className="mb-4" />
                            <div className="text-center text-muted-foreground">
                                <CalendarDays className="mx-auto h-10 w-10 opacity-50 mb-3" />
                                <p className="text-sm font-medium mb-1">No Event Selected</p>
                                <p className="text-xs">Click on an event to view details or click an empty day to add one.</p>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </ResponsiveGridLayout>
    </div>
  );
}
