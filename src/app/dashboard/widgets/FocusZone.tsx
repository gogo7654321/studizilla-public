'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

type TimerMode = 'work' | 'break';

export function FocusZone() {
  const { user } = useAuth();
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load settings from Firestore
  useEffect(() => {
    if (!user) return;

    const loadSettings = async () => {
      const settingsRef = doc(db, 'users', user.uid);
      const settingsSnap = await getDoc(settingsRef);
      
      if (settingsSnap.exists() && settingsSnap.data().focusZoneSettings) {
        const settings = settingsSnap.data().focusZoneSettings;
        setWorkDuration(settings.workDuration || 25);
        setBreakDuration(settings.breakDuration || 5);
        setTimeLeft((settings.workDuration || 25) * 60);
      }
    };

    loadSettings();
  }, [user]);

  // Save settings to Firestore
  const saveSettings = useCallback(async () => {
    if (!user) return;

    const settingsRef = doc(db, 'users', user.uid);
    await setDoc(
      settingsRef,
      {
        focusZoneSettings: {
          workDuration,
          breakDuration,
        },
      },
      { merge: true }
    );
  }, [user, workDuration, breakDuration]);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    
    // Play notification sound
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }

    // Show notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Focus Zone', {
        body: mode === 'work' ? 'Great work! Time for a break.' : 'Break over! Ready to focus?',
        icon: '/images/logo/ace-mascot.png',
      });
    }

    // Switch modes
    if (mode === 'work') {
      setSessionsCompleted((prev) => prev + 1);
      setMode('break');
      setTimeLeft(breakDuration * 60);
    } else {
      setMode('work');
      setTimeLeft(workDuration * 60);
    }
  };

  const toggleTimer = () => {
    if (!isRunning && 'Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMode('work');
    setTimeLeft(workDuration * 60);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = mode === 'work' 
    ? ((workDuration * 60 - timeLeft) / (workDuration * 60)) * 100
    : ((breakDuration * 60 - timeLeft) / (breakDuration * 60)) * 100;

  if (!user) {
    return (
      <Card className="h-full flex flex-col">
        <CardHeader className="pl-10 pb-3">
          <CardTitle className="font-headline">Focus Zone</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col items-center justify-center text-center py-4">
          <div className="w-32 h-32 rounded-full border-4 border-muted flex items-center justify-center mb-3">
            <span className="text-2xl font-bold text-muted-foreground">25:00</span>
          </div>
          <p className="font-semibold text-sm text-muted-foreground mb-1">Sign in to use Pomodoro Timer</p>
          <p className="text-xs text-muted-foreground mb-3">Stay focused with timed study sessions.</p>
          <Button asChild variant="default" size="sm">
            <Link href="/auth">Sign In</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pl-10 pb-2 flex flex-row items-center justify-between">
        <CardTitle className="font-headline">Focus Zone</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Focus Zone Settings</DialogTitle>
              <DialogDescription>Customize your work and break durations</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Work Duration (minutes)</Label>
                <Input
                  type="number"
                  min="1"
                  max="60"
                  value={workDuration}
                  onChange={(e) => setWorkDuration(Number(e.target.value))}
                />
              </div>
              <div className="space-y-2">
                <Label>Break Duration (minutes)</Label>
                <Input
                  type="number"
                  min="1"
                  max="30"
                  value={breakDuration}
                  onChange={(e) => setBreakDuration(Number(e.target.value))}
                />
              </div>
              <Button onClick={saveSettings} className="w-full">
                Save Settings
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center py-3">
        <div className="relative w-full max-w-[200px] aspect-square mb-4">
          {/* Circular progress */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              className="text-muted"
              opacity="0.2"
            />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className={cn(
                'transition-all duration-500',
                mode === 'work' ? 'text-primary' : 'text-green-500'
              )}
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
            />
          </svg>
          
          {/* Timer display */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold font-mono mb-1">
              {formatTime(timeLeft)}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">
              {mode === 'work' ? 'Focus Time' : 'Break Time'}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <Button
            size="default"
            onClick={toggleTimer}
            className="rounded-full h-11 w-11"
          >
            {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
          </Button>
          <Button
            size="default"
            variant="outline"
            onClick={resetTimer}
            className="rounded-full h-11 w-11"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Sessions counter */}
        <div className="mt-4 text-center">
          <div className="text-xl font-bold">{sessionsCompleted}</div>
          <div className="text-xs text-muted-foreground">Sessions Completed</div>
        </div>

        {/* Hidden audio element */}
        <audio ref={audioRef} src="/timer_sounds/digital-alarm.mp3" preload="auto" />
      </CardContent>
    </Card>
  );
}
