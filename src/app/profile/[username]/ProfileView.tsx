'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { PublicUserProfile } from '../actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FollowButton } from './FollowButton';
import { ProfileHeader } from './ProfileHeader';
import { EditProfileDialog } from './EditProfileDialog';
import { FollowersDialog } from './FollowersDialog';
import {
  User as UserIcon,
  Lock,
  Flame,
  Code,
  BookCopy,
  FolderKanban,
  Settings,
  Calendar,
} from 'lucide-react';
import { CourseIcon } from '@/components/CourseIcon';
import Link from 'next/link';
import { format } from 'date-fns';

interface ProfileViewProps {
  initialProfile: PublicUserProfile;
}

export function ProfileView({ initialProfile }: ProfileViewProps) {
  const { user: currentUser } = useAuth();
  const [profile, setProfile] = useState(initialProfile);
  const [followerCount, setFollowerCount] = useState(initialProfile.followerCount);
  const [followingCount, setFollowingCount] = useState(initialProfile.followingCount);
  const [isFollowing, setIsFollowing] = useState(initialProfile.isFollowedByCurrentUser);

  const isOwnProfile = profile.uid === currentUser?.uid;
  const isDevUser = ['ace'].includes(profile.username);

  // Listen to real-time profile updates
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'users', profile.uid), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setProfile(prev => ({
          ...prev,
          displayName: data.displayName || prev.displayName,
          photoURL: data.photoURL || null,
          bannerURL: data.bannerURL || null,
          bio: data.bio || '',
          theme: data.theme || '',
          streak: data.streak || 0,
          isPrivate: data.isPrivate || false,
          privacySettings: {
            ...prev.privacySettings,
            ...data.privacySettings,
          },
        }));
      }
    });
    return () => unsub();
  }, [profile.uid]);

  // Listen to follower/following counts
  useEffect(() => {
    if (!currentUser) return;

    const followDocRef = doc(db, 'users', currentUser.uid, 'following', profile.uid);
    const unsub = onSnapshot(followDocRef, (doc) => {
      setIsFollowing(doc.exists());
    });

    return () => unsub();
  }, [currentUser, profile.uid]);

  const handleFollowChange = (newFollowState: boolean) => {
    setIsFollowing(newFollowState);
    setFollowerCount(prev => newFollowState ? prev + 1 : Math.max(0, prev - 1));
  };

  if (profile.isPrivate && !isOwnProfile) {
    return (
      <div className="bg-secondary/30 min-h-screen">
        <div className="container mx-auto p-4 md:p-8 max-w-4xl py-12">
          <Card className="text-center py-12">
            <CardContent className="space-y-4">
              <Lock className="h-16 w-16 mx-auto text-muted-foreground" />
              <h2 className="text-2xl font-bold">This Profile is Private</h2>
              <p className="text-muted-foreground">
                {profile.displayName} has chosen to make their profile private.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Banner Section - Full Width */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {profile.bannerURL ? (
          <img
            src={profile.bannerURL}
            alt="Profile Banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5" />
        )}
      </div>

      {/* Profile Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar with upload overlay */}
            <ProfileHeader profile={profile} />

            {/* Name and Info */}
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">{profile.displayName}</h1>
              </div>
              
              <p className="text-xl text-muted-foreground mb-3">@{profile.username}</p>
              
              {profile.bio && (
                <p className="text-lg mb-4 max-w-2xl leading-relaxed">{profile.bio}</p>
              )}

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.privacySettings.showStreak && (
                  <Badge variant="destructive" className="text-sm py-1 px-3">
                    <Flame className="mr-2 h-4 w-4" />
                    {profile.streak}-Day Streak
                  </Badge>
                )}
                {profile.privacySettings.showTheme && profile.theme && (
                  <Badge variant="secondary" className="text-sm py-1 px-3">
                    🎨 {profile.theme.charAt(0).toUpperCase() + profile.theme.slice(1)} Theme
                  </Badge>
                )}
                {isDevUser && (
                  <Badge className="text-sm py-1 px-3 bg-indigo-500 hover:bg-indigo-600">
                    <Code className="mr-2 h-4 w-4" />
                    Developer
                  </Badge>
                )}
                <Badge variant="outline" className="text-sm">
                  <Calendar className="mr-2 h-3 w-3" />
                  Joined {format(profile.createdAt, 'MMMM yyyy')}
                </Badge>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-4">
                <FollowersDialog
                  userId={profile.uid}
                  username={profile.username}
                  type="followers"
                >
                  <button className="flex items-center gap-2 hover:underline">
                    <UserIcon className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{followerCount}</span>
                    <span className="text-muted-foreground">Followers</span>
                  </button>
                </FollowersDialog>
                
                <FollowersDialog
                  userId={profile.uid}
                  username={profile.username}
                  type="following"
                >
                  <button className="flex items-center gap-2 hover:underline">
                    <UserIcon className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{followingCount}</span>
                    <span className="text-muted-foreground">Following</span>
                  </button>
                </FollowersDialog>

                {profile.privacySettings.showDecks && (
                  <div className="flex items-center gap-2">
                    <BookCopy className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{profile.publicDecks.length}</span>
                    <span className="text-muted-foreground">Study Sets</span>
                  </div>
                )}

                {profile.privacySettings.showCourses && (
                  <div className="flex items-center gap-2">
                    <FolderKanban className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">{profile.addedCourses.length}</span>
                    <span className="text-muted-foreground">Courses</span>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              {isOwnProfile ? (
                <EditProfileDialog profile={profile}>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </EditProfileDialog>
              ) : currentUser ? (
                <FollowButton
                  profileOwnerId={profile.uid}
                  initialFollowingState={isFollowing}
                  onFollowStateChange={handleFollowChange}
                />
              ) : null}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Public Decks */}
            {profile.privacySettings.showDecks && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookCopy className="h-5 w-5" />
                    Public Decks
                  </CardTitle>
                  <CardDescription>
                    Study decks created by {profile.displayName}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {profile.publicDecks.length > 0 ? (
                    <div className="space-y-3">
                      {profile.publicDecks.map(deck => (
                        <Link
                          key={deck.id}
                          href={`/decks/${deck.id}`}
                          className="block p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                        >
                          <h3 className="font-semibold">{deck.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {deck.description}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {deck.cardCount} cards
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-8">
                      No public decks yet.
                    </p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Recently Studied */}
            {profile.privacySettings.showActivity && profile.recentlyStudiedDecks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookCopy className="h-5 w-5" />
                    Recently Studied
                  </CardTitle>
                  <CardDescription>Recently accessed decks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {profile.recentlyStudiedDecks.map(deck => (
                      <Link
                        key={deck.id}
                        href={`/decks/${deck.id}`}
                        className="block p-4 rounded-lg border hover:bg-accent/50 transition-colors"
                      >
                        <h3 className="font-semibold">{deck.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {deck.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Courses */}
            {profile.privacySettings.showCourses && profile.addedCourses.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FolderKanban className="h-5 w-5" />
                    Courses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {profile.addedCourses.map(course => (
                      <Link
                        key={course.id}
                        href={`/dashboard/courses/${course.id}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors"
                      >
                        <CourseIcon iconName={course.icon || 'ApDefaultIcon'} className="h-8 w-8 shrink-0" />
                        <span className="text-sm font-medium line-clamp-2">{course.name}</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
