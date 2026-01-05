'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Sparkles, GraduationCap, Users, BookOpen, Trophy, Heart } from 'lucide-react';
import { FollowButton } from './FollowButton';
import type { PublicUserProfile } from '../actions';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface StudizillaProfileProps {
  profile: PublicUserProfile;
}

export function StudizillaProfile({ profile }: StudizillaProfileProps) {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Epic Banner Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 animate-gradient-x" />
        <div className="absolute inset-0 bg-[url('/images/theme/sakura-pattern.png')] opacity-20" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-float"
              style={{
                width: Math.random() * 30 + 10 + 'px',
                height: Math.random() * 30 + 10 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>

        {/* Official Badge Overlay */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className="bg-white/20 backdrop-blur-md text-white border-white/40 text-sm px-3 py-1">
            <CheckCircle2 className="mr-1 h-4 w-4" />
            Official Account
          </Badge>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="max-w-5xl mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-primary/20 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Avatar with special effects */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse blur-xl opacity-50" />
              <Avatar className="h-32 w-32 border-4 border-white dark:border-gray-900 shadow-2xl relative z-10">
                <AvatarImage src={profile.photoURL || undefined} alt={profile.displayName} />
                <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-3xl">
                  <Sparkles className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name and Bio */}
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="font-headline text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {profile.displayName}
                </h1>
                <CheckCircle2 className="h-8 w-8 text-blue-500 fill-blue-500" />
              </div>
              
              <p className="text-xl text-muted-foreground mb-3">@{profile.username}</p>
              
              {profile.bio && (
                <p className="text-lg mb-4 max-w-2xl leading-relaxed">{profile.bio}</p>
              )}

              {/* Special Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="default" className="bg-gradient-to-r from-purple-500 to-pink-500">
                  <Sparkles className="mr-1 h-3 w-3" />
                  Official Account
                </Badge>
                <Badge variant="default" className="bg-gradient-to-r from-blue-500 to-cyan-500">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Verified
                </Badge>
                <Badge variant="default" className="bg-gradient-to-r from-green-500 to-emerald-500">
                  <GraduationCap className="mr-1 h-3 w-3" />
                  Educator
                </Badge>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{profile.followerCount.toLocaleString()}</span>
                  <span className="text-muted-foreground">Followers</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{profile.publicDecks.length}</span>
                  <span className="text-muted-foreground">Study Sets</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">{profile.addedCourses.length}</span>
                  <span className="text-muted-foreground">Courses</span>
                </div>
              </div>

              {/* Follow Button */}
              {user && (
                <FollowButton
                  profileOwnerId={profile.uid}
                  currentUserId={user.uid}
                />
              )}
            </div>
          </div>
        </div>

        {/* Special Message Section */}
        <Card className="mt-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-300/30 dark:border-purple-700/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              Welcome to Studizilla!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-lg">
              We&apos;re here to help you succeed in your studies with AI-powered tools, curated course materials, and a supportive community.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card/50">
                <BookOpen className="h-8 w-8 text-purple-500 mb-2" />
                <h3 className="font-semibold mb-1">Study Materials</h3>
                <p className="text-sm text-muted-foreground">Curated flashcard decks and resources</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card/50">
                <Sparkles className="h-8 w-8 text-pink-500 mb-2" />
                <h3 className="font-semibold mb-1">AI Tools</h3>
                <p className="text-sm text-muted-foreground">Generate decks from your notes</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-card/50">
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <h3 className="font-semibold mb-1">Community</h3>
                <p className="text-sm text-muted-foreground">Connect with fellow students</p>
              </div>
            </div>
            <div className="flex gap-2 pt-4">
              <Button asChild>
                <Link href="/resources?tab=flashcards">Browse Study Sets</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/classes">Explore Courses</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Content Sections - Study Sets, etc. */}
        <div className="mt-8 space-y-6">
          {profile.publicDecks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Official Study Sets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Browse our collection of {profile.publicDecks.length} curated study sets on the{' '}
                  <Link href="/resources?tab=flashcards" className="text-primary hover:underline">
                    Resources page
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Add floating animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
}
