'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import './dashboard.css';

import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';

// Import widgets
import { ClassProgress } from './widgets/ClassProgress';
import { Schedule } from './widgets/Schedule';
import { TodoList } from './widgets/TodoList';
import { DailyGoals } from './widgets/DailyGoals';
import { FocusZone } from './widgets/FocusZone';
import { FlashcardsWidget } from './widgets/FlashcardsWidget';
import { QuickTools } from './widgets/QuickTools';

const ResponsiveGridLayout = WidthProvider(Responsive);

const componentMap = {
  classProgress: ClassProgress,
  schedule: Schedule,
  todoList: TodoList,
  dailyGoals: DailyGoals,
  focusZone: FocusZone,
  flashcardsWidget: FlashcardsWidget,
  quickTools: QuickTools,
};

type LayoutItem = { 
  i: string; 
  x: number; 
  y: number; 
  w: number; 
  h: number; 
  minW?: number; 
  minH?: number; 
  maxW?: number; 
  maxH?: number;
};

type Layouts = { [key: string]: LayoutItem[] };

const defaultLayouts: Layouts = {
  lg: [
    { i: 'classProgress', x: 0, y: 0, w: 4, h: 10, minW: 4, minH: 8 },
    { i: 'schedule', x: 0, y: 10, w: 4, h: 12, minW: 4, minH: 8 },
    { i: 'flashcardsWidget', x: 4, y: 0, w: 4, h: 12, minW: 4, minH: 8 },
    { i: 'todoList', x: 8, y: 0, w: 4, h: 8, minW: 3, minH: 6 },
    { i: 'dailyGoals', x: 8, y: 8, w: 4, h: 14, minW: 3, minH: 6 },
    { i: 'focusZone', x: 4, y: 12, w: 4, h: 10, minW: 3, minH: 8 },
    { i: 'quickTools', x: 0, y: 22, w: 12, h: 8, minW: 6, minH: 6 },
  ],
  md: [
    { i: 'classProgress', x: 0, y: 0, w: 12, h: 10 },
    { i: 'schedule', x: 6, y: 10, w: 6, h: 12 },
    { i: 'flashcardsWidget', x: 0, y: 10, w: 6, h: 12 },
    { i: 'todoList', x: 0, y: 22, w: 6, h: 9 },
    { i: 'dailyGoals', x: 6, y: 22, w: 6, h: 9 },
    { i: 'focusZone', x: 0, y: 31, w: 12, h: 12 },
    { i: 'quickTools', x: 0, y: 43, w: 12, h: 8 },
  ],
  sm: [
    { i: 'classProgress', x: 0, y: 0, w: 6, h: 10 },
    { i: 'flashcardsWidget', x: 0, y: 10, w: 6, h: 12 },
    { i: 'schedule', x: 0, y: 22, w: 6, h: 12 },
    { i: 'todoList', x: 0, y: 34, w: 6, h: 9 },
    { i: 'dailyGoals', x: 0, y: 43, w: 6, h: 9 },
    { i: 'focusZone', x: 0, y: 52, w: 6, h: 12 },
    { i: 'quickTools', x: 0, y: 64, w: 6, h: 8 },
  ],
  xs: [
    { i: 'classProgress', x: 0, y: 0, w: 4, h: 10 },
    { i: 'flashcardsWidget', x: 0, y: 10, w: 4, h: 12 },
    { i: 'schedule', x: 0, y: 22, w: 4, h: 12 },
    { i: 'todoList', x: 0, y: 34, w: 4, h: 9 },
    { i: 'dailyGoals', x: 0, y: 43, w: 4, h: 9 },
    { i: 'focusZone', x: 0, y: 52, w: 4, h: 12 },
    { i: 'quickTools', x: 0, y: 64, w: 4, h: 8 },
  ],
  xxs: [
    { i: 'classProgress', x: 0, y: 0, w: 2, h: 10 },
    { i: 'flashcardsWidget', x: 0, y: 10, w: 2, h: 12 },
    { i: 'schedule', x: 0, y: 22, w: 2, h: 12 },
    { i: 'todoList', x: 0, y: 34, w: 2, h: 9 },
    { i: 'dailyGoals', x: 0, y: 43, w: 2, h: 9 },
    { i: 'focusZone', x: 0, y: 52, w: 2, h: 12 },
    { i: 'quickTools', x: 0, y: 64, w: 2, h: 8 },
  ],
};

// Clean layout helper functions
const cleanLayout = (layout: LayoutItem[] | undefined): LayoutItem[] => {
  if (!layout) return [];
  return layout.map(({ i, x, y, w, h }) => ({ i, x, y, w, h }));
};

const cleanAllLayouts = (layouts: Layouts): Layouts => {
  const cleaned: Layouts = {};
  for (const breakpoint in layouts) {
    if (Object.prototype.hasOwnProperty.call(layouts, breakpoint)) {
      cleaned[breakpoint] = cleanLayout(layouts[breakpoint]);
    }
  }
  return cleaned;
};

export default function DashboardPageClient() {
  const { user, isLoading } = useAuth();
  const [layouts, setLayouts] = useState<Layouts>(defaultLayouts);
  const [isLayoutInitialized, setIsLayoutInitialized] = useState(false);

  // Load saved layouts from Firestore
  useEffect(() => {
    if (user) {
      const layoutDocRef = doc(db, 'users', user.uid);
      const unsubscribe = onSnapshot(layoutDocRef, (docSnap) => {
        if (docSnap.exists() && docSnap.data().dashboardLayouts) {
          const savedLayouts = docSnap.data().dashboardLayouts;
          const defaultKeys = defaultLayouts.lg.map(item => item.i);
          const savedKeys = savedLayouts.lg?.map((item: LayoutItem) => item.i) || [];
          const allKeysPresent = defaultKeys.every(key => savedKeys.includes(key));

          if (savedLayouts.lg && savedKeys.length === defaultKeys.length && allKeysPresent) {
            setLayouts(savedLayouts);
          }
        }
        if (!isLayoutInitialized) {
          setIsLayoutInitialized(true);
        }
      });

      return () => unsubscribe();
    } else if (!isLoading) {
      setIsLayoutInitialized(true);
    }
  }, [user, isLoading, isLayoutInitialized]);

  // Save layout changes to Firestore
  const handleLayoutChange = useCallback((layout: LayoutItem[], allLayouts: Layouts) => {
    if (!isLayoutInitialized || !user) return;

    const cleanedLayouts = cleanAllLayouts(allLayouts);
    setLayouts(cleanedLayouts);

    const layoutDocRef = doc(db, 'users', user.uid);
    setDoc(layoutDocRef, { dashboardLayouts: cleanedLayouts }, { merge: true }).catch(err => {
      console.error('Failed to save layout:', err);
    });
  }, [isLayoutInitialized, user]);

  if (isLoading || !isLayoutInitialized) {
    return (
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="p-4 md:p-8 pt-6">
      <ResponsiveGridLayout
        layouts={layouts}
        onLayoutChange={handleLayoutChange}
        breakpoints={{ lg: 1200, md: 1000, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        margin={[24, 24]}
        containerPadding={[0, 0]}
        draggableHandle=".drag-handle"
        isResizable={true}
      >
        {layouts.lg.map((item) => {
          const Component = componentMap[item.i as keyof typeof componentMap];
          return (
            <div key={item.i} className="grid-card-wrapper">
              <div className="drag-handle" />
              <Component />
            </div>
          );
        })}
      </ResponsiveGridLayout>
    </div>
  );
}
