'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { toggleFollowUser } from '@/app/profile/actions';
import { useToast } from '@/hooks/use-toast';

const STUDIZILLA_UID = 'studizilla-official';
const STUDIZILLA_USERNAME = 'studizilla';

export function FollowStudizillaBanner() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setIsLoading(false);
      return;
    }

    const checkFollowStatus = async () => {
      try {
        // Check if user is following Studizilla
        const followingRef = doc(db, 'users', user.uid, 'following', STUDIZILLA_UID);
        const followingDoc = await getDoc(followingRef);
        setIsFollowing(followingDoc.exists());

        // Check if banner was dismissed
        const dismissedRef = doc(db, 'users', user.uid, 'settings', 'ui-preferences');
        const dismissedDoc = await getDoc(dismissedRef);
        if (dismissedDoc.exists()) {
          setIsDismissed(dismissedDoc.data()?.dismissedStudizillaBanner === true);
        }
      } catch (error) {
        console.error('Error checking follow status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkFollowStatus();
  }, [user]);

  const handleFollow = async () => {
    if (!user) return;

    try {
      const result = await toggleFollowUser(user.uid, STUDIZILLA_UID, true);
      if (result.success) {
        setIsFollowing(true);
        toast({
          title: 'Success!',
          description: 'You are now following Studizilla Official! 🎉',
        });
        // Auto-dismiss after following
        setTimeout(() => handleDismiss(), 2000);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error || 'Failed to follow account.',
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An unexpected error occurred.',
      });
    }
  };

  const handleDismiss = async () => {
    if (!user) return;

    try {
      const dismissedRef = doc(db, 'users', user.uid, 'settings', 'ui-preferences');
      await setDoc(dismissedRef, { dismissedStudizillaBanner: true }, { merge: true });
      setIsDismissed(true);
    } catch (error) {
      console.error('Error dismissing banner:', error);
    }
  };

  // Don't show if: not logged in, already following, dismissed, or still loading
  if (!user || isFollowing || isDismissed || isLoading) {
    return null;
  }

  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border-purple-300/30 dark:border-purple-700/30">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-8 w-8"
        onClick={handleDismiss}
      >
        <X className="h-4 w-4" />
      </Button>
      
      <div className="p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse blur-md opacity-50" />
          <Avatar className="h-16 w-16 border-2 border-white dark:border-gray-900 relative z-10">
            <AvatarImage src="/images/logo/studizilla-official-avatar.png" alt="Studizilla Official" />
            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <Sparkles className="h-8 w-8" />
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Content */}
        <div className="flex-grow text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <h3 className="font-semibold text-lg">Follow Studizilla Official</h3>
            <CheckCircle2 className="h-5 w-5 text-blue-500 fill-blue-500" />
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Get updates on new study materials, features, and tips to ace your exams! 
            <Link href={`/profile/${STUDIZILLA_USERNAME}`} className="text-primary hover:underline ml-1">
              View Profile
            </Link>
          </p>
        </div>

        {/* Action Button */}
        <Button
          onClick={handleFollow}
          className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Follow
        </Button>
      </div>
    </Card>
  );
}
