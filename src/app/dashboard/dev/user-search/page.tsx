'use client';

import React, { useState, useEffect, useMemo, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { getAllUsers, updateUserData, type SearchedUser } from './actions';
import { Loader2, Search, Save, User as UserIcon, Flame, Palette, Globe, BadgeCheck, XCircle, MessageCircle, Calendar, Mail, Hash, Lock, Unlock, Image as ImageIcon, Trash2 } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { CourseIcon } from '@/components/CourseIcon';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

function UserStats({ user }: { user: SearchedUser }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Card className="bg-gradient-to-br from-green-500/10 to-green-600/10 border-green-500/20">
                <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                        <div className={cn("w-3 h-3 rounded-full", user.isOnline ? "bg-green-500 animate-pulse" : "bg-gray-400")}></div>
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-semibold text-sm">{user.isOnline ? 'Online' : 'Offline'}</span>
                            <span className="text-xs text-muted-foreground truncate">
                                {user.lastActivityDate ? formatDistanceToNow(new Date(user.lastActivityDate), { addSuffix: true }) : 'Never'}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500/10 to-red-600/10 border-orange-500/20">
                <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                        <Flame className="h-5 w-5 text-orange-500 shrink-0" />
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-semibold text-sm">{user.streak || 0} Days</span>
                            <span className="text-xs text-muted-foreground">Streak</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-500/20">
                <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                        <Palette className="h-5 w-5 text-purple-500 shrink-0" />
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-semibold text-sm truncate">{user.theme || 'Default'}</span>
                            <span className="text-xs text-muted-foreground">Theme</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className={cn("bg-gradient-to-br border-opacity-20", user.isPrivate ? "from-red-500/10 to-red-600/10 border-red-500/20" : "from-blue-500/10 to-blue-600/10 border-blue-500/20")}>
                <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                        {user.isPrivate ? <Lock className="h-5 w-5 text-red-500 shrink-0"/> : <Unlock className="h-5 w-5 text-blue-500 shrink-0"/>}
                        <div className="flex flex-col flex-1 min-w-0">
                            <span className="font-semibold text-sm">{user.isPrivate ? 'Private' : 'Public'}</span>
                            <span className="text-xs text-muted-foreground">Profile</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

function UserDataEditor({ user, onSave }: { user: SearchedUser; onSave: (uid: string, data: Record<string, any>) => void }) {
    const [userData, setUserData] = useState(user);
    const [jsonError, setJsonError] = useState<string | null>(null);
    const [isSaving, startSaveTransition] = useTransition();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    useEffect(() => {
        setUserData(user);
    }, [user]);

    const handleInputChange = (field: keyof SearchedUser, value: any) => {
        setUserData(prev => ({ ...prev, [field]: value }));
    };

    const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const rawJson = e.target.value;
        try {
            const parsed = JSON.parse(rawJson);
            setUserData(prev => ({ ...prev, ...parsed }));
            setJsonError(null);
        } catch (error) {
            setJsonError('Invalid JSON format.');
        }
    };
    
    const handleSave = () => {
        startSaveTransition(() => {
            const { uid, email, photoURL, createdAt, displayName, ...dataToUpdate } = userData;
            onSave(uid, dataToUpdate);
        });
    };

    const rawData = { ...userData };
    delete rawData.uid;
    delete rawData.email;
    delete rawData.photoURL;
    delete rawData.createdAt;
    delete rawData.displayName;

    return (
        <div className="space-y-6 pt-4">
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                    <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
                
                <TabsContent value="profile" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Basic Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input 
                                        id="firstName" 
                                        value={userData.firstName || ''} 
                                        onChange={(e) => handleInputChange('firstName', e.target.value)} 
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="username">Username</Label>
                                    <div className="relative">
                                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="username" 
                                            value={userData.username || ''} 
                                            onChange={(e) => handleInputChange('username', e.target.value)}
                                            className="pl-9"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <Label htmlFor="email">Email (Read-only)</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input 
                                        id="email" 
                                        value={userData.email || ''} 
                                        disabled 
                                        className="pl-9 bg-muted"
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="bannerURL">Banner URL</Label>
                                <div className="relative">
                                    <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input 
                                        id="bannerURL" 
                                        value={userData.bannerURL || ''} 
                                        onChange={(e) => handleInputChange('bannerURL', e.target.value)}
                                        className="pl-9"
                                        placeholder="https://..."
                                    />
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="age">Age</Label>
                                <Input 
                                    id="age" 
                                    type="number" 
                                    value={userData.age || ''} 
                                    onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {user.courses && user.courses.length > 0 && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Enrolled Courses ({user.courses.length})</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {user.courses.map(course => (
                                        <div key={course.id} className="flex items-center gap-2 p-2 bg-secondary rounded-lg text-sm">
                                            <CourseIcon iconName={course.icon} className="h-5 w-5 shrink-0" />
                                            <span className="font-medium truncate">{course.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>

                <TabsContent value="settings" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Account Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Private Profile</Label>
                                    <p className="text-sm text-muted-foreground">Hide profile from public view</p>
                                </div>
                                <Switch 
                                    checked={userData.isPrivate || false}
                                    onCheckedChange={(checked) => handleInputChange('isPrivate', checked)}
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Online Status (Manual Override)</Label>
                                    <p className="text-sm text-muted-foreground">Force online/offline status</p>
                                </div>
                                <Switch 
                                    checked={userData.isOnline || false}
                                    onCheckedChange={(checked) => handleInputChange('isOnline', checked)}
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Completed Onboarding</Label>
                                    <p className="text-sm text-muted-foreground">User has finished setup</p>
                                </div>
                                <Switch 
                                    checked={userData.hasCompletedOnboarding || false}
                                    onCheckedChange={(checked) => handleInputChange('hasCompletedOnboarding', checked)}
                                />
                            </div>
                            <Separator />
                            <div>
                                <Label htmlFor="streak">Streak (Days)</Label>
                                <Input 
                                    id="streak" 
                                    type="number" 
                                    value={userData.streak || 0} 
                                    onChange={(e) => handleInputChange('streak', parseInt(e.target.value) || 0)}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="advanced" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Raw Firestore Document</CardTitle>
                            <CardDescription>
                                Direct JSON editor for all user data. Changes here override everything else.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Textarea
                                value={JSON.stringify(rawData, null, 2)}
                                onChange={handleJsonChange}
                                rows={20}
                                className="font-mono text-xs bg-secondary/50"
                            />
                            {jsonError && <p className="text-sm text-destructive">{jsonError}</p>}
                        </CardContent>
                    </Card>

                    <Card className="border-destructive">
                        <CardHeader>
                            <CardTitle className="text-lg text-destructive">Danger Zone</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button 
                                variant="destructive" 
                                onClick={() => setDeleteDialogOpen(true)}
                                className="w-full"
                            >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete User Account
                            </Button>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            
            <div className="flex justify-end gap-2 pt-4 border-t">
                <Button variant="outline" onClick={() => setUserData(user)}>
                    Reset Changes
                </Button>
                <Button onClick={handleSave} disabled={isSaving || !!jsonError}>
                    {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    Save All Changes
                </Button>
            </div>

            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Delete User Account?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete the user&apos;s account and all associated data.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
                        <Button variant="destructive" onClick={() => {
                            // TODO: Implement user deletion
                            setDeleteDialogOpen(false);
                        }}>
                            Confirm Deletion
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default function UserSearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allUsers, setAllUsers] = useState<SearchedUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [credentialsError, setCredentialsError] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const fetchUsers = React.useCallback(async () => {
      try {
        const users = await getAllUsers();
        setAllUsers(users);
        setCredentialsError(false);
      } catch (error: any) {
        console.error("Failed to load users:", error);
        
        if (error.message?.includes('credentials') || error.message?.includes('Firebase Admin')) {
          setCredentialsError(true);
          toast({
            variant: 'destructive',
            title: 'Firebase Admin Not Configured',
            description: 'Firebase Admin SDK credentials are required for this feature.',
          });
        } else {
          toast({
            variant: 'destructive',
            title: 'Failed to load users',
            description: error.message || 'Could not fetch user list. Please check console and permissions.',
          });
        }
      } finally {
        setIsLoading(false);
      }
    }, [toast]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) {
      return allUsers;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    
    return allUsers.filter(user =>
      Object.values(user).some(value =>
        String(value).toLowerCase().includes(lowercasedTerm)
      )
    );
  }, [searchTerm, allUsers]);

  const handleSaveUserData = async (uid: string, data: Record<string, any>) => {
    try {
        const result = await updateUserData(uid, data);
        if (result.success) {
          toast({ title: "Success!", description: "User data has been updated." });
          fetchUsers();
        } else {
          throw new Error(result.error);
        }
    } catch (error: any) {
        console.error("Failed to save user data:", error);
        toast({ variant: 'destructive', title: "Update Failed", description: error.message });
    }
  };

  return (
    <div className="p-4 md:p-8 space-y-6 h-screen flex flex-col">
      <header>
        <h1 className="font-headline text-4xl font-bold">User Management Portal</h1>
        <p className="text-muted-foreground mt-2 text-lg">Search, view, and edit user accounts with full admin access</p>
      </header>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email, username, UID..."
                className="pl-10"
                disabled={isLoading}
              />
            </div>
            <Badge variant="secondary" className="px-3 py-2">
              {filteredUsers.length} {filteredUsers.length === 1 ? 'user' : 'users'}
            </Badge>
          </div>
        </CardContent>
      </Card>
      
      {isLoading ? (
         <div className="flex-grow flex justify-center items-center">
            <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />
        </div>
      ) : credentialsError ? (
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <XCircle className="h-5 w-5" />
              Firebase Admin Credentials Required
            </CardTitle>
            <CardDescription>
              This feature requires Firebase Admin SDK credentials to be configured.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Setup Instructions:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Go to <a href="https://console.firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Firebase Console</a></li>
                <li>Select your project → Project Settings → Service Accounts</li>
                <li>Click &quot;Generate new private key&quot; and download the JSON file</li>
                <li>Set the <code className="bg-muted px-1 rounded">FIREBASE_SERVICE_ACCOUNT</code> environment variable with the JSON content</li>
                <li>Restart the development server</li>
              </ol>
            </div>
            <div className="bg-muted p-3 rounded-md">
              <p className="text-xs font-mono">
                FIREBASE_SERVICE_ACCOUNT=&apos;&#123;&quot;type&quot;:&quot;service_account&quot;,...&#125;&apos;
              </p>
            </div>
            <Button onClick={() => fetchUsers()} variant="outline">
              Retry Connection
            </Button>
          </CardContent>
        </Card>
      ) : (
        <ScrollArea className="flex-grow">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {filteredUsers.length > 0 ? filteredUsers.map((user) => (
              <AccordionItem value={user.uid} key={user.uid} className="border rounded-lg bg-card shadow-sm">
                 <AccordionTrigger className="p-4 hover:no-underline hover:bg-accent/50">
                     <div className="flex items-center gap-4 flex-1 text-left">
                        <Avatar className="h-12 w-12 border-2">
                            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || 'User'}/>
                            <AvatarFallback className="bg-primary/10"><UserIcon className="h-6 w-6" /></AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-lg">{user.firstName || user.username || 'Unknown'}</h4>
                                {user.isOnline && <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{user.username ? `@${user.username}` : 'No username'}</span>
                                <span>•</span>
                                <span className="truncate">{user.email}</span>
                            </div>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={(e) => { 
                                e.stopPropagation(); 
                                router.push(`/dashboard/dev/support-chat?userId=${user.uid}`); 
                            }}
                        >
                            <MessageCircle className="h-5 w-5" />
                        </Button>
                     </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-2 space-y-4">
                    <UserStats user={user} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="space-y-1">
                            <Label className="text-muted-foreground">User ID</Label>
                            <p className="font-mono text-xs bg-secondary/50 p-2 rounded break-all">{user.uid}</p>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-muted-foreground">Joined</Label>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <p>{user.createdAt ? format(new Date(user.createdAt), 'PPpp') : 'N/A'}</p>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <Label className="text-muted-foreground">Last Activity</Label>
                            <p>{user.lastActivityDate ? format(new Date(user.lastActivityDate), 'PPpp') : 'Never'}</p>
                        </div>
                    </div>
                    
                    <Separator />
                    
                    <UserDataEditor user={user} onSave={handleSaveUserData} />
                </AccordionContent>
              </AccordionItem>
            )) : (
              <div className="text-center py-10 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>No users found matching &quot;{searchTerm}&quot;.</p>
              </div>
            )}
          </Accordion>
        </ScrollArea>
      )}
    </div>
  );
}
