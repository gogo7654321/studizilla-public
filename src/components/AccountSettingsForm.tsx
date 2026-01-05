
'use client';

import React, { useState, useEffect, useRef, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import { db, auth, storage } from '@/lib/firebase';
import { doc, onSnapshot, updateDoc, getDocs, query, collection, where, writeBatch } from 'firebase/firestore';
import { updateProfile, sendPasswordResetEmail, signOut, unlink, GoogleAuthProvider, EmailAuthProvider, reauthenticateWithPopup } from 'firebase/auth';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertCircle, User as UserIcon, Download, Trash2, Edit2, Camera, Save, ExternalLink, Flame, BookCopy, FolderKanban, Lock } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
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
} from "@/components/ui/alert-dialog";
import { useRouter } from 'next/navigation';
import { submitSupportRequest } from '@/app/support/actions';
import { cn } from '@/lib/utils';
import { deleteUserAccountAction, disconnectGoogleProvider } from '@/app/api/account/actions';
import { updateProfileImages, updatePrivacySettings, updateProfilePrivacy } from '@/app/profile/actions';
import Link from 'next/link';
import { Switch } from './ui/switch';
import { ImageCropperDialog } from './ImageCropperDialog';

type PrivacySettingsType = {
  showStreak: boolean;
  showCourses: boolean;
  showDecks: boolean;
  showActivity: boolean;
  showTheme: boolean;
};

const accountSchema = z.object({
  firstName: z.string().min(1, 'First name is required.'),
  username: z.string().min(3, 'Username must be at least 3 characters.').regex(/^[a-zA-Z0-9_.-]+$/, 'Username can only contain letters, numbers, underscores, dots, and hyphens.'),
});

type AccountFormValues = z.infer<typeof accountSchema>;

function PrivacySettings() {
    const { user } = useAuth();
    const { toast } = useToast();
    const [settings, setSettings] = useState<PrivacySettingsType>({
        showStreak: true,
        showCourses: true,
        showDecks: true,
        showActivity: true,
        showTheme: true,
    });
    const [isPrivate, setIsPrivate] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            setIsLoading(false);
            return;
        }
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
            if (doc.exists()) {
                const data = doc.data();
                setSettings(prev => ({ ...prev, ...data.privacySettings }));
                setIsPrivate(data.isPrivate || false);
            }
            setIsLoading(false);
        });
        return () => unsub();
    }, [user]);

    const handleToggle = async (key: keyof PrivacySettingsType) => {
        if (!user) return;
        const newSettings = { ...settings, [key]: !settings[key] };
        setSettings(newSettings); // Optimistic update

        try {result = await updatePrivacySettings(user.uid, { [key]: newSettings[key] });
            if (result.success) {
                toast({
                    title: "Privacy Setting Updated",
                });
            } else {
                throw new Error(result.error);
            }
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: "Error updating settings",
                description: error.message,
            });
            // Revert on error
            setSettings(settings);
        }
    };

    const handlePrivacyToggle = async (checked: boolean) => {
        if (!user) return;
        setIsPrivate(checked); // Optimistic update

        try {
            const result = await updateProfilePrivacy(user.uid, checked);
            if (result.success) {
                toast({
                    title: checked ? "Profile is now private" : "Profile is now public",
                });
            } else {
                throw new Error(result.error);
            }
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: "Error updating profile privacy",
                description: error.message,
            });
            // Revert on error
            setIsPrivate(!checked);
        }
    };
    
    if (isLoading) {
      return <div className="space-y-4 pt-4"><div className="flex justify-center items-center h-48"><Loader2 className="h-6 w-6 animate-spin" /></div></div>
    }

    return (
        <div className="space-y-4">
             <h3 className="text-lg font-semibold">Privacy Settings</h3>
             <p className="text-sm text-muted-foreground -mt-2">Control what other users can see on your public profile.</p>
            <div className="flex items-center justify-between rounded-lg border p-3 bg-secondary/30">
                <div>
                    <Label htmlFor="profile-privacy" className="flex items-center gap-2 font-semibold"><Lock className="h-4 w-4"/>Private Profile</Label>
                    <p className="text-xs text-muted-foreground mt-1">When enabled, only you can view your profile</p>
                </div>
                <Switch id="profile-privacy" checked={isPrivate} onCheckedChange={handlePrivacyToggle} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
                <Label htmlFor="show-streak" className="flex items-center gap-2"><Flame className="h-4 w-4"/>Show Streak</Label>
                <Switch id="show-streak" checked={settings.showStreak} onCheckedChange={() => handleToggle('showStreak')} disabled={isPrivate} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
                <Label htmlFor="show-courses" className="flex items-center gap-2"><FolderKanban className="h-4 w-4"/>Show Courses</Label>
                <Switch id="show-courses" checked={settings.showCourses} onCheckedChange={() => handleToggle('showCourses')} disabled={isPrivate} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
                <Label htmlFor="show-decks" className="flex items-center gap-2"><BookCopy className="h-4 w-4"/>Show Public Decks</Label>
                <Switch id="show-decks" checked={settings.showDecks} onCheckedChange={() => handleToggle('showDecks')} disabled={isPrivate} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
                <Label htmlFor="show-activity" className="flex items-center gap-2"><UserIcon className="h-4 w-4"/>Show Recent Activity</Label>
                <Switch id="show-activity" checked={settings.showActivity} onCheckedChange={() => handleToggle('showActivity')} disabled={isPrivate} />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
                <Label htmlFor="show-theme" className="flex items-center gap-2">🎨 Show Current Theme</Label>
                <Switch id="show-theme" checked={settings.showTheme} onCheckedChange={() => handleToggle('showTheme')} disabled={isPrivate} />
            </div>
        </div>
    );
}

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,36.596,44,31.1,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
  );

export function AccountSettingsForm() {
  const { user, setUser } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [isRequestingData, setIsRequestingData] = useState(false);
  const [deleteInput, setDeleteInput] = useState('');
  const [usernameForDeletion, setUsernameForDeletion] = useState('');
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);

  const bannerInputRef = useRef<HTMLInputElement>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [isUploadingBanner, startBannerUpload] = useTransition();
  const [isUploadingAvatar, startAvatarUpload] = useTransition();

  const [cropperOpen, setCropperOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const [cropType, setCropType] = useState<'avatar' | 'banner'>('avatar');

  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      firstName: '',
      username: '',
    },
  });

  const isGoogleProvider = user?.providerData.some(p => p.providerId === 'google.com');

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, 'users', user.uid);
      
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        const userData = docSnap.exists() ? docSnap.data() : {};
        const currentUsername = userData.username || '';
        setUsernameForDeletion(currentUsername);
        setBannerUrl(userData.bannerURL || null);
        
        form.reset({
          firstName: auth.currentUser?.displayName || '',
          username: currentUsername,
        });
      });
      return () => unsubscribe();
    }
  }, [user, form]); 
  
  const onSubmit = async (data: AccountFormValues) => {
    if (!user) return;
    setIsSaving(true);
    setError(null);
    
    // Check if username is being changed
    const isUsernameChanged = usernameForDeletion && data.username.toLowerCase() !== usernameForDeletion.toLowerCase();
    
    if (isUsernameChanged || !usernameForDeletion) {
        // Check if new username is available
        const usernamesRef = collection(db, "usernames");
        const q = query(usernamesRef, where("usernameLower", "==", data.username.toLowerCase()));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            form.setError("username", { type: "manual", message: "This username is already taken." });
            setIsSaving(false);
            return;
        }
    }
    
    try {
      if (data.firstName !== user.displayName) {
        await updateProfile(auth.currentUser!, { displayName: data.firstName });
        setUser(prev => prev ? ({ ...prev, displayName: data.firstName }) : null);
      }
      
      const userDocRef = doc(db, 'users', user.uid);
      const batch = writeBatch(db);

      batch.update(userDocRef, {
        displayName: data.firstName,
        username: data.username,
        usernameLower: data.username.toLowerCase(),
      });

      // Only update username collection if username changed and old username exists
      if (usernameForDeletion && data.username.toLowerCase() !== usernameForDeletion.toLowerCase()) {
        const usernameDocRef = doc(db, 'usernames', usernameForDeletion.toLowerCase());
        const newUsernameDocRef = doc(db, 'usernames', data.username.toLowerCase());
        batch.delete(usernameDocRef);
        batch.set(newUsernameDocRef, { uid: user.uid, usernameLower: data.username.toLowerCase() });
      } else if (!usernameForDeletion) {
        // First time setting username
        const newUsernameDocRef = doc(db, 'usernames', data.username.toLowerCase());
        batch.set(newUsernameDocRef, { uid: user.uid, usernameLower: data.username.toLowerCase() });
      }

      await batch.commit();

      toast({ title: 'Success!', description: 'Your account details have been updated.' });

    } catch (err: any) {
      setError(err.message || "An unknown error occurred.");
    } finally {
      setIsSaving(false);
    }
  };


  const validateFile = (file: File): string | null => {
    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return 'Image must be less than 5MB';
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return 'Only JPG, PNG, WEBP, and GIF images are supported';
    }

    return null;
  };

  const handleFileSelect = (imageType: 'avatar' | 'banner', file: File) => {
    if (!user || !file) return;

    // Validate file
    const error = validateFile(file);
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Invalid File',
        description: error,
      });
      return;
    }

    // Create preview URL and open cropper
    const reader = new FileReader();
    reader.onload = () => {
      setImageToCrop(reader.result as string);
      setCropType(imageType);
      setCropperOpen(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = async (croppedBlob: Blob) => {
    if (!user) return;

    const action = cropType === 'avatar' ? startAvatarUpload : startBannerUpload;

    action(async () => {
      const formData = new FormData();
      formData.append('image', croppedBlob, `${cropType}.jpg`);
      formData.append('imageType', cropType);
      formData.append('uid', user.uid);

      try {
        const result = await updateProfileImages(formData);
        if (result.success) {
          toast({
            title: 'Success!',
            description: `${cropType === 'avatar' ? 'Profile picture' : 'Banner'} updated.`,
          });
          setCropperOpen(false);
          setImageToCrop(null);
          
          // Force immediate refresh with cache bust
          window.location.reload();
        } else {
          throw new Error(result.error);
        }
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Upload Failed',
          description: error.message || 'Could not update your image.',
        });
      }
    });
  };

  const handlePasswordReset = async () => {
    if (!user?.email) return;
    try {
      const actionCodeSettings = {
        url: `${window.location.origin}/dashboard/settings`,
        handleCodeInApp: false,
      };
      await sendPasswordResetEmail(auth, user.email, actionCodeSettings);
      toast({ title: 'Password Reset Email Sent', description: 'Check your inbox for a link to reset your password.' });
    } catch (err) {
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to send password reset email.' });
    }
  };

  const handleDeleteAccount = async () => {
    // Deletion logic... (omitted for brevity)
  };

  const handleDataRequest = async () => {
    // Data request logic... (omitted for brevity)
  };

  const handleGoogleDisconnect = async () => {
    if (!user) return;
    
    try {
        const result = await disconnectGoogleProvider(user.uid);
        if (result.success) {
            toast({ title: 'Success', description: 'Your Google account has been disconnected.' });
        } else {
            toast({ variant: 'destructive', title: 'Error', description: result.error });
        }
    } catch (error: any) {
        console.error("Disconnect error:", error);
        toast({ variant: 'destructive', title: 'Error', description: 'An unexpected error occurred.' });
    }
  }


  if (!user) return null;

  return (
    <div className="space-y-8">
      {/* Image Cropper Dialog */}
      {imageToCrop && (
        <ImageCropperDialog
          open={cropperOpen}
          onOpenChange={setCropperOpen}
          imageSrc={imageToCrop}
          onCropComplete={handleCropComplete}
          aspect={cropType === 'avatar' ? 1 : 3}
          imageType={cropType}
          isUploading={cropType === 'avatar' ? isUploadingAvatar : isUploadingBanner}
        />
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-lg font-semibold">Profile & Appearance</h3>
            <div 
                className="h-32 bg-gradient-to-br from-primary via-secondary to-accent relative bg-cover bg-center group/banner rounded-lg"
                style={{ backgroundImage: bannerUrl ? `url(${bannerUrl})` : undefined }}
            >
                <input type="file" ref={bannerInputRef} onChange={(e) => e.target.files && handleFileSelect('banner', e.target.files[0])} accept="image/jpeg,image/jpg,image/png,image/webp,image/gif" className="hidden" />
                <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="absolute top-2 left-2 z-10 opacity-0 group-hover/banner:opacity-100 transition-opacity"
                    onClick={() => bannerInputRef.current?.click()}
                    aria-label="Change banner image"
                    disabled={isUploadingBanner}
                >
                    {isUploadingBanner ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Camera className="mr-2 h-4 w-4" />}
                    Edit Banner
                </Button>
            </div>
             <div className="relative -mt-12 ml-6 w-fit">
                <input type="file" ref={avatarInputRef} onChange={(e) => e.target.files && handleFileSelect('avatar', e.target.files[0])} accept="image/jpeg,image/jpg,image/png,image/webp,image/gif" className="hidden" />
                <button
                    type="button"
                    className="relative group/avatar rounded-full"
                    onClick={() => avatarInputRef.current?.click()}
                    disabled={isUploadingAvatar}
                >
                     <Avatar className="h-20 w-20 border-4 border-card shadow-md">
                        <AvatarImage src={user.photoURL || undefined} />
                        <AvatarFallback className="text-3xl"><UserIcon /></AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center text-white opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                        {isUploadingAvatar ? <Loader2 className="h-6 w-6 animate-spin" /> : <Camera className="h-6 w-6" />}
                    </div>
                </button>
            </div>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" /><AlertTitle>Update Failed</AlertTitle><AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <FormField control={form.control} name="firstName" render={({ field }) => (
              <FormItem><FormLabel>Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="username" render={({ field }) => (
              <FormItem><FormLabel>Username</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <div className="flex justify-between items-center">
            <Button asChild variant="link" className="p-0 h-auto">
                <Link href={`/profile/${form.watch('username') || usernameForDeletion}`}>
                    <ExternalLink className="mr-2 h-4 w-4" /> View Public Profile
                </Link>
            </Button>
            <Button type="submit" disabled={isSaving || !form.formState.isDirty}>
              {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />} Save Changes
            </Button>
          </div>
        </form>
      </Form>

      <Separator />
        
      <PrivacySettings />

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Account Security</h3>
        
        {isGoogleProvider && (
            <div className="flex items-center justify-between rounded-lg border p-3 bg-secondary/30">
                <div className="flex items-center gap-2">
                    <GoogleIcon className="mr-1 h-5 w-5" />
                    <p className="text-sm font-medium">Connected to Google</p>
                </div>
                 <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="bg-background">Disconnect</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Disconnect Google Account?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This will remove your ability to sign in with Google. If you don't have a password set, you may be locked out.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleGoogleDisconnect} className={buttonVariants({ variant: "destructive" })}>
                                Disconnect
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        )}
        
        <div>
            <Label>Email</Label>
            <div className="flex items-center justify-between rounded-lg border p-3 mt-1">
                <p className="text-sm font-medium">{user.email}</p>
            </div>
             {isGoogleProvider && (
              <p className="text-xs text-muted-foreground mt-2">Your email is managed by your Google account.</p>
             )}
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3">
          <div>
            <p className="text-sm font-medium">Password</p>
            <p className="text-xs text-muted-foreground mt-1">
              {isGoogleProvider
                ? "Set a password to enable disconnecting your Google account."
                : "It's a good idea to use a strong password."
              }
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={handlePasswordReset}>
            Set / Reset Password
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Your Data</h3>
        <div className="flex items-center justify-between rounded-lg border p-3">
          <div>
            <p className="text-sm font-medium">Request your data</p>
            <p className="text-xs text-muted-foreground">Request a copy of all your data via a support ticket.</p>
          </div>
          <Button variant="outline" size="sm" onClick={handleDataRequest} disabled={isRequestingData}>
            {isRequestingData ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
            Request
          </Button>
        </div>
      </div>

      <Separator />
      
      <div className="space-y-3 rounded-lg border border-destructive/50 p-4">
        <h3 className="text-lg font-semibold text-destructive">Delete Account</h3>
        <p className="text-sm text-destructive/90">
            This action is permanent and cannot be undone. All your data, including decks, progress, and settings, will be deleted.
        </p>
        <AlertDialog onOpenChange={() => setDeleteInput('')}>
          <AlertDialogTrigger asChild>
            <Button variant="destructive"><Trash2 className="mr-2 h-4 w-4" />Delete My Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account and all associated data. To confirm, please type <strong>DELETE</strong> in the box below.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="py-2">
                <Label htmlFor="delete-confirm" className="sr-only">Confirm Deletion</Label>
                <Input 
                    id="delete-confirm"
                    value={deleteInput}
                    onChange={(e) => setDeleteInput(e.target.value)}
                    placeholder="Type DELETE to confirm"
                />
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction 
                onClick={handleDeleteAccount} 
                className={cn(buttonVariants({ variant: 'destructive' }), "bg-destructive hover:bg-destructive/90")}
                disabled={deleteInput !== 'DELETE'}
              >
                Yes, Delete My Account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
