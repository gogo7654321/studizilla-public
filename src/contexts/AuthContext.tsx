
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AuthContext = createContext<AuthContextType>({ 
    user: null, 
    isLoading: true,
    setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      
      if (user) {
        await checkAndUpdateStreak(user.uid);
        await updateUserOnlineStatus(user.uid, true);
      }
      
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Track online/offline status and activity
  useEffect(() => {
    if (!user) return;

    const updateActivity = async () => {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          lastActivityDate: serverTimestamp(),
          isOnline: true
        });
      } catch (error) {
        console.error('Error updating activity:', error);
      }
    };

    // Update activity immediately
    updateActivity();

    // Update activity every 5 minutes while user is active
    const activityInterval = setInterval(updateActivity, 5 * 60 * 1000);

    // Set user as offline when they leave/close tab
    const handleBeforeUnload = async () => {
      await updateUserOnlineStatus(user.uid, false);
    };

    // Handle visibility change (tab hidden/visible)
    const handleVisibilityChange = async () => {
      if (document.hidden) {
        await updateUserOnlineStatus(user.uid, false);
      } else {
        await updateActivity();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(activityInterval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      // Set offline when component unmounts
      updateUserOnlineStatus(user.uid, false);
    };
  }, [user]);

  const updateUserOnlineStatus = async (userId: string, isOnline: boolean) => {
    try {
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        isOnline,
        lastActivityDate: serverTimestamp()
      });
    } catch (error) {
      console.error('Error updating online status:', error);
    }
  };

  const checkAndUpdateStreak = async (userId: string) => {
    try {
      const userRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userRef);
      
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      if (!userDoc.exists()) {
        // New user - initialize streak
        await setDoc(userRef, {
          streak: 1,
          lastAccessDate: today.toISOString(),
          createdAt: serverTimestamp()
        }, { merge: true });
        
        toast({
          title: '🔥 Streak Started!',
          description: 'Welcome! Your daily streak has begun. Come back tomorrow to keep it going!',
        });
        return;
      }
      
      const userData = userDoc.data();
      const lastAccess = userData?.lastAccessDate ? new Date(userData.lastAccessDate) : null;
      const currentStreak = userData?.streak || 0;
      
      if (!lastAccess) {
        // User exists but no streak data - initialize
        await updateDoc(userRef, {
          streak: 1,
          lastAccessDate: today.toISOString()
        });
        
        toast({
          title: '🔥 Streak Started!',
          description: 'Your daily streak has begun!',
        });
        return;
      }
      
      const lastAccessDate = new Date(lastAccess.getFullYear(), lastAccess.getMonth(), lastAccess.getDate());
      const daysDifference = Math.floor((today.getTime() - lastAccessDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysDifference === 0) {
        // Same day - no update needed
        return;
      } else if (daysDifference === 1) {
        // Next day - increment streak
        const newStreak = currentStreak + 1;
        await updateDoc(userRef, {
          streak: newStreak,
          lastAccessDate: today.toISOString()
        });
        
        toast({
          title: `🔥 Streak: ${newStreak} Days!`,
          description: `Amazing! You've maintained your streak for ${newStreak} ${newStreak === 1 ? 'day' : 'days'}!`,
        });
      } else {
        // Missed a day - reset streak
        await updateDoc(userRef, {
          streak: 1,
          lastAccessDate: today.toISOString()
        });
        
        if (currentStreak > 1) {
          toast({
            variant: 'destructive',
            title: '💔 Streak Reset',
            description: `You missed a day. Your ${currentStreak}-day streak has been reset. Start fresh today!`,
          });
        }
      }
    } catch (error) {
      console.error('Error updating streak:', error);
    }
  };

  const value = useMemo(() => ({
    user,
    isLoading,
    setUser
  }), [user, isLoading]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
