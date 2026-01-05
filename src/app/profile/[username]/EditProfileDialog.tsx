'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import type { PublicUserProfile } from '../actions';
import { updateUserProfile } from '../actions';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

const profileSchema = z.object({
  displayName: z.string().min(1, 'Name is required.').max(50, 'Name must be 50 characters or less.'),
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters.')
    .max(30, 'Username must be 30 characters or less.')
    .regex(/^[a-zA-Z0-9_.-]+$/, 'Username can only contain letters, numbers, underscores, dots, and hyphens.'),
  bio: z.string().max(500, 'Bio must be 500 characters or less.').optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface EditProfileDialogProps {
  profile: PublicUserProfile;
  children: React.ReactNode;
}

export function EditProfileDialog({ profile, children }: EditProfileDialogProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: profile.displayName,
      username: profile.username,
      bio: profile.bio || '',
    },
  });

  const onSubmit = async (data: ProfileFormValues) => {
    if (!user) return;

    setIsSaving(true);
    try {
      const result = await updateUserProfile({
        uid: user.uid,
        displayName: data.displayName,
        username: data.username,
        bio: data.bio,
      });

      if (result.success) {
        toast({
          title: 'Success!',
          description: 'Your profile has been updated.',
        });
        setIsOpen(false);
        
        // If username changed, redirect to new profile URL
        if (data.username !== profile.username) {
          router.push(`/profile/${data.username}`);
        } else {
          router.refresh();
        }
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: result.error || 'Failed to update profile.',
        });
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Update your profile information. This will be visible to other users.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="displayName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Display Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your unique username. Can contain letters, numbers, underscores, dots, and hyphens.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about yourself..."
                      className="resize-none"
                      rows={4}
                      maxLength={500}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    {field.value?.length || 0}/500 characters
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSaving}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSaving || !form.formState.isDirty}>
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
