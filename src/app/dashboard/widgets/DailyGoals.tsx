'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlusCircle, Trash2, Target } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { startOfDay, endOfDay } from 'date-fns';
import { cn } from '@/lib/utils';

type Goal = {
  id: string;
  text: string;
  completed: boolean;
};

export function DailyGoals() {
  const { user } = useAuth();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState('');

  useEffect(() => {
    if (!user) return;

    const goalsRef = collection(db, 'users', user.uid, 'goals');
    const today = new Date();
    const q = query(
      goalsRef,
      where('date', '>=', Timestamp.fromDate(startOfDay(today))),
      where('date', '<=', Timestamp.fromDate(endOfDay(today)))
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const loadedGoals: Goal[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        loadedGoals.push({
          id: doc.id,
          text: data.text,
          completed: data.completed || false,
        });
      });
      setGoals(loadedGoals);
    });

    return () => unsubscribe();
  }, [user]);

  const addGoal = async () => {
    if (!user || !newGoal.trim()) return;

    const goalsRef = collection(db, 'users', user.uid, 'goals');
    await addDoc(goalsRef, {
      text: newGoal.trim(),
      completed: false,
      date: Timestamp.fromDate(new Date()),
      createdAt: serverTimestamp(),
    });

    setNewGoal('');
  };

  const toggleGoal = async (goalId: string, completed: boolean) => {
    if (!user) return;
    const goalRef = doc(db, 'users', user.uid, 'goals', goalId);
    await updateDoc(goalRef, { completed: !completed });
  };

  const deleteGoal = async (goalId: string) => {
    if (!user) return;
    const goalRef = doc(db, 'users', user.uid, 'goals', goalId);
    await deleteDoc(goalRef);
  };

  if (!user) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10">
          <CardTitle className="font-headline">Daily Goals</CardTitle>
          <CardDescription>Preview Mode</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center text-center py-12">
          <Target className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="font-semibold text-lg text-muted-foreground">Sign in to set goals</p>
          <p className="text-sm text-muted-foreground mt-1">Set and achieve daily study goals.</p>
          <Button asChild variant="default" className="mt-4">
            <Link href="/auth">Sign In</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  const completedCount = goals.filter((g) => g.completed).length;
  const totalCount = goals.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pl-10">
        <CardTitle className="font-headline">Daily Goals</CardTitle>
        <CardDescription>
          {totalCount > 0 ? `${completedCount}/${totalCount} completed (${progressPercent}%)` : 'Set your daily goals'}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-0 space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Add a daily goal..."
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addGoal()}
            className="flex-1"
          />
          <Button onClick={addGoal} size="icon">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </div>

        {goals.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <Target className="h-10 w-10 text-muted-foreground mb-3" />
            <p className="text-sm text-muted-foreground">No goals set yet!</p>
            <p className="text-xs text-muted-foreground mt-1">Add some goals to track your progress today.</p>
          </div>
        ) : (
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-2">
              {goals.map((goal) => (
                <div
                  key={goal.id}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-lg border transition-all',
                    goal.completed && 'opacity-50 bg-primary/5'
                  )}
                >
                  <Checkbox
                    checked={goal.completed}
                    onCheckedChange={() => toggleGoal(goal.id, goal.completed)}
                  />
                  <p className={cn('flex-1 text-sm font-medium', goal.completed && 'line-through')}>
                    {goal.text}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteGoal(goal.id)}
                    className="shrink-0 h-8 w-8"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
