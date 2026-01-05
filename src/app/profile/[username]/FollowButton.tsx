'use client';

import React, { useState, useTransition } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Loader2, UserPlus, UserCheck } from 'lucide-react';
import { toggleFollowUser } from '../actions';
import { useToast } from '@/hooks/use-toast';
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

interface FollowButtonProps {
  profileOwnerId: string;
  initialFollowingState: boolean;
  onFollowStateChange: (isFollowing: boolean) => void;
}

export function FollowButton({
  profileOwnerId,
  initialFollowingState,
  onFollowStateChange,
}: FollowButtonProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isFollowing, setIsFollowing] = useState(initialFollowingState);
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    if (!user) {
      toast({
        title: 'Login Required',
        description: 'You must be logged in to follow users.',
      });
      return;
    }

    startTransition(async () => {
      const result = await toggleFollowUser(user.uid, profileOwnerId, true);
      if (result.success) {
        setIsFollowing(true);
        onFollowStateChange(true);
        toast({ title: 'Following!' });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error,
        });
      }
    });
  };

  const handleUnfollow = () => {
    if (!user) return;
    
    startTransition(async () => {
      const result = await toggleFollowUser(user.uid, profileOwnerId, false);
      if (result.success) {
        setIsFollowing(false);
        onFollowStateChange(false);
        toast({ title: 'Unfollowed' });
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error,
        });
      }
    });
  };

  if (!user || user.uid === profileOwnerId) {
    return null;
  }

  if (isFollowing) {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="secondary" disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <UserCheck className="mr-2 h-4 w-4" />
            )}
            Following
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unfollow this user?</AlertDialogTitle>
            <AlertDialogDescription>
              You can always follow them again later.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleUnfollow}>Unfollow</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

  return (
    <Button onClick={handleFollow} disabled={isPending}>
      {isPending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <UserPlus className="mr-2 h-4 w-4" />
      )}
      Follow
    </Button>
  );
}
