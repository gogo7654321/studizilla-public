'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Search, User as UserIcon, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { searchUsers, type UserPreview } from '../actions';
import { useDebounce } from '@/hooks/use-debounce';

export default function SearchUsersPage() {
  const { user, isLoading: authLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<UserPreview[]>([]);
  const [isSearching, startTransition] = useTransition();
  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedQuery.length >= 2) {
      startTransition(async () => {
        const results = await searchUsers(debouncedQuery);
        setSearchResults(results);
      });
    } else {
      setSearchResults([]);
    }
  }, [debouncedQuery]);

  if (authLoading) {
    return (
      <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-secondary/30 min-h-screen">
      <div className="container mx-auto p-4 md:p-8 max-w-4xl py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-6 w-6" />
              Search Users
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by username or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {isSearching && (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            )}

            {!isSearching && searchQuery.length >= 2 && searchResults.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No users found matching "{searchQuery}"
              </p>
            )}

            {!isSearching && searchResults.length > 0 && (
              <div className="space-y-3">
                {searchResults.map((searchUser) => (
                  <Link
                    key={searchUser.uid}
                    href={`/profile/${searchUser.username}`}
                    className="flex items-center gap-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={searchUser.photoURL || undefined} alt={searchUser.displayName} />
                      <AvatarFallback>
                        <UserIcon className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold truncate">{searchUser.displayName}</p>
                      <p className="text-sm text-muted-foreground truncate">@{searchUser.username}</p>
                      {searchUser.bio && (
                        <p className="text-sm text-muted-foreground line-clamp-1 mt-1">
                          {searchUser.bio}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {searchQuery.length > 0 && searchQuery.length < 2 && (
              <p className="text-center text-muted-foreground py-8">
                Type at least 2 characters to search
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
