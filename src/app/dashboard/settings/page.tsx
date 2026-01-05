

'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, HelpCircle, MessageSquare, ArrowLeft } from 'lucide-react';
import { AccountSettingsForm } from '@/components/AccountSettingsForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SettingsDialog } from '@/components/SettingsDialog';

export default function SettingsPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex h-[calc(100vh-8rem)] items-center justify-center p-8"><Loader2 className="h-12 w-12 animate-spin text-primary"/></div>;
  }
  
  if (!user) {
    return null;
  }

  return (
    <div className="bg-secondary/30">
        <div className="container mx-auto p-4 md:p-8 space-y-8 max-w-3xl py-12">
            <header>
                <Button variant="ghost" asChild className="mb-2 -ml-4">
                    <Link href="/dashboard">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </Button>
                <h1 className="font-headline text-4xl font-bold">Account Settings</h1>
                <p className="text-muted-foreground mt-2 text-lg">Manage your account information, security, and data.</p>
            </header>
            <AccountSettingsForm />

            <Card>
                <CardHeader>
                    <CardTitle>Need Assistance?</CardTitle>
                    <CardDescription>
                        If you're having trouble or have questions, we're here to help.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="w-full" variant="outline">
                        <Link href="/support">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Contact Support
                        </Link>
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                        <Link href="/faq">
                             <HelpCircle className="mr-2 h-4 w-4" />
                            View FAQ
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
