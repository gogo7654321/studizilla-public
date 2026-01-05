
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Settings,
  Sun,
  Moon,
  MoveHorizontal,
  Palette,
  Bell,
  User,
  Wrench,
  Sparkles,
  RefreshCw,
  Loader2,
  Lock,
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useTheme } from 'next-themes';
import { useAppearance } from '@/contexts/AppearanceContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AccountSettingsForm } from './AccountSettingsForm';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';
import { Separator } from './ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { resetLayoutsToDefault } from '@/app/dashboard/actions';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type AccessibilityTheme = "default" | "protanopia" | "deuteranopia" | "tritanopia";
type SidebarPosition = "left" | "right" | "top" | "bottom";

export function SettingsDialog({ trigger }: { trigger: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const { 
    theme: accessibilityTheme, 
    setTheme: setAccessibilityTheme,
    sidebarPosition,
    setSidebarPosition,
    customTheme,
    resetCustomTheme,
  } = useAppearance();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isResetConfirmOpen, setIsResetConfirmOpen] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = useState(false);

  const handleResetLayouts = async () => {
    if (!user) {
        toast({ variant: "destructive", title: "You must be logged in."});
        return;
    }
    setIsResetting(true);
    try {
        const result = await resetLayoutsToDefault(user.uid);
        if (result.success) {
            toast({
                title: "Layouts Reset!",
                description: "The page will now reload to apply the changes.",
            });
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } else {
            throw new Error(result.error);
        }
    } catch (error: any) {
        toast({ variant: "destructive", title: "Error", description: error.message });
        setIsResetting(false);
    } finally {
        // We don't set resetting to false on success because the page will reload.
        setIsResetConfirmOpen(false);
    }
  };


  return (
    <>
      <Dialog open={isSettingsDialogOpen} onOpenChange={setIsSettingsDialogOpen}>
        <DialogTrigger asChild onClick={() => setIsSettingsDialogOpen(true)}>{trigger}</DialogTrigger>
        <DialogContent className="settings-dialog-content max-w-2xl h-full sm:h-auto sm:max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Manage your account and appearance settings. Your preferences are saved automatically.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="appearance" className="flex-1 flex flex-col min-h-0 pt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="appearance"><Palette className="mr-2 h-4 w-4" />Appearance</TabsTrigger>
              <TabsTrigger value="account"><User className="mr-2 h-4 w-4" />Account</TabsTrigger>
              <TabsTrigger value="notifications" disabled><Bell className="mr-2 h-4 w-4" />Notifications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="appearance" className="flex-1 overflow-auto mt-4 ring-offset-0 focus-visible:ring-0">
                <ScrollArea className="h-full pr-4">
                    <div className="space-y-6">
                        <div className={cn("rounded-lg border p-4 transition-all", customTheme && "bg-muted/30 opacity-70 cursor-not-allowed")}>
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label className={cn("text-base flex items-center gap-2", customTheme && "text-muted-foreground")}>
                                      <Sun className="h-4 w-4 hidden dark:inline-block" /><Moon className="h-4 w-4 inline-block dark:hidden" />
                                       Dark Mode
                                    </Label>
                                    <p className={cn("text-sm text-muted-foreground", customTheme && "text-xs")}>
                                        {customTheme
                                        ? `Disabled while the "${customTheme.name}" theme is active.`
                                        : "Toggle between light and dark themes."}
                                    </p>
                                </div>
                                <Switch
                                    checked={theme === 'dark'}
                                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                                    disabled={!!customTheme}
                                />
                            </div>
                            {customTheme && (
                              <div className="mt-3 text-right">
                                  <Button size="sm" variant="outline" onClick={resetCustomTheme} className="bg-background cursor-pointer opacity-100">
                                      Reset to Default
                                  </Button>
                              </div>
                            )}
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <Label className="text-base flex items-center gap-2"><MoveHorizontal className="h-4 w-4" /> Sidebar Position</Label>
                                <p className="text-sm text-muted-foreground">Choose where the dashboard sidebar appears.</p>
                            </div>
                            <Select value={sidebarPosition} onValueChange={(v) => setSidebarPosition(v as SidebarPosition)}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="left">Left</SelectItem>
                                    <SelectItem value="right">Right</SelectItem>
                                    <SelectItem value="top">Top</SelectItem>
                                    <SelectItem value="bottom">Bottom</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="rounded-lg border p-4">
                            <div className="space-y-1">
                                <Label className="text-base flex items-center gap-2"><Palette className="h-4 w-4" /> Colorblind Mode</Label>
                                <p className="text-sm text-muted-foreground">Adjust colors for better visibility.</p>
                            </div>
                            <RadioGroup
                                value={accessibilityTheme}
                                onValueChange={(value) => setAccessibilityTheme(value as AccessibilityTheme)}
                                className="grid sm:grid-cols-2 gap-4 pt-4"
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1" className="font-normal">Default</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="protanopia" id="r2" />
                                    <Label htmlFor="r2" className="font-normal">Protanopia (Red-Blind)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="deuteranopia" id="r3" />
                                    <Label htmlFor="r3" className="font-normal">Deuteranopia (Green-Blind)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="tritanopia" id="r4" />
                                    <Label htmlFor="r4" className="font-normal">Tritanopia (Blue-Yellow-Blind)</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="rounded-lg border p-4">
                            <div className="flex items-center justify-between">
                               <div className="space-y-0.5">
                                  <Label className="text-base flex items-center gap-2"><RefreshCw className="h-4 w-4" /> Reset Layouts</Label>
                                  <p className="text-sm text-muted-foreground">Restore all widget positions to their defaults.</p>
                              </div>
                              <Button variant="destructive" onClick={() => setIsResetConfirmOpen(true)}>Reset</Button>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
             </TabsContent>
             <TabsContent value="account" className="flex-1 flex flex-col mt-4 ring-offset-0 focus-visible:ring-0 min-h-0">
                <div className="px-1 pb-4 flex flex-col sm:flex-row gap-2">
                    <Button asChild className="w-full">
                        <Link href="/dashboard/settings">
                            <Settings className="mr-2 h-4 w-4" /> Manage Account
                        </Link>
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                        <Link href="/profile">
                            <Sparkles className="mr-2 h-4 w-4" /> Edit Profile
                        </Link>
                    </Button>
                </div>
                <Separator className="mb-4" />
                <div className="flex-1 overflow-auto">
                    <ScrollArea className="h-full pr-4">
                        <AccountSettingsForm />
                    </ScrollArea>
                </div>
             </TabsContent>
             <TabsContent value="notifications" className="mt-4">
                 <div className="text-center py-16 text-muted-foreground">
                    <Wrench className="mx-auto h-12 w-12" />
                    <h3 className="mt-4 text-lg font-semibold">Notification Controls Coming Soon</h3>
                    <p className="mt-1 text-sm">Soon you'll be able to manage your email and push notifications here.</p>
                </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
      <AlertDialog open={isResetConfirmOpen} onOpenChange={setIsResetConfirmOpen}>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This will reset the positions and sizes of all widgets on your dashboard and calendar pages to their original state. This action cannot be undone.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleResetLayouts} disabled={isResetting} className={buttonVariants({variant: "destructive"})}>
                    {isResetting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Yes, Reset Layouts
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
