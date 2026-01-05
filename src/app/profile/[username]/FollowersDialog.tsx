'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { User as UserIcon, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { getUserFollowers, getUserFollowing, type UserPreview } from '../actions';

interface FollowersDialogProps {
  userId: string;
  username: string;
  type: 'followers' | 'following';
  children: React.ReactNode;
}

export function FollowersDialog({ userId, username, type, children }: FollowersDialogProps) {
  const [users, setUsers] = useState<UserPreview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen && users.length === 0) {
      loadUsers();
    }
  }, [isOpen]);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const result = type === 'followers' 
        ? await getUserFollowers(userId, 50)
        : await getUserFollowing(userId, 50);
      
      setUsers(result.users);
      setHasMore(result.hasMore);
    } catch (error) {
      console.error(`Error loading ${type}:`, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {type === 'followers' ? 'Followers' : 'Following'}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-96">
          <div className="space-y-2 pr-4">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : users.length > 0 ? (
              users.map((user) => (
                <Link
                  key={user.uid}
                  href={`/profile/${user.username}`}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <Avatar>
                    <AvatarImage src={user.photoURL || undefined} alt={user.displayName} />
                    <AvatarFallback>
                      <UserIcon className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{user.displayName}</p>
                    <p className="text-sm text-muted-foreground truncate">@{user.username}</p>
                    {user.bio && (
                      <p className="text-xs text-muted-foreground line-clamp-1">{user.bio}</p>
                    )}
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-sm text-muted-foreground text-center py-12">
                No {type} yet.
              </p>
            )}
            {hasMore && (
              <p className="text-xs text-muted-foreground text-center py-2">
                Showing first 50 users
              </p>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
