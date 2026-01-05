
'use client';

import React, { useState, useTransition, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAuth } from '@/contexts/AuthContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { LifeBuoy, Loader2, Send, Lightbulb } from "lucide-react";
import { SupportChat } from "./SupportChat";
import { useToast } from '@/hooks/use-toast';
import { submitSupportRequest } from './actions';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Link from 'next/link';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const faqItems = [
    {
        question: "How do I reset my password?",
        answer: "You can reset your password by going to the login page and clicking the 'Forgot Password?' link. You will receive an email with instructions on how to reset your password."
    },
    {
        question: "How do I change my subscription plan?",
        answer: "Currently, Studizilla is completely free! We do not have any subscription plans. All features are available to all registered users."
    },
    {
        question: "Where can I find my created flashcard decks?",
        answer: "All of your created decks can be found in the 'Flashcards' section. You can organize, edit, and study your decks from there."
    },
    {
        question: "Is there a mobile app?",
        answer: "A dedicated mobile app for iOS and Android is currently under development and will be released soon. In the meantime, our website is fully responsive and works great on mobile browsers."
    },
    {
        question: "How does the AI essay grader work?",
        answer: "Our AI essay grader analyzes your writing based on the official AP rubrics. It provides feedback on your thesis, evidence, reasoning, and style. This feature is coming soon!"
    }
];

const supportSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  category: z.enum(['account', 'technical', 'feedback', 'content-error', 'other'], {
    required_error: 'Please select a category.',
  }),
  priority: z.enum(['low', 'medium', 'high', 'suggestion'], {
    required_error: 'Please select a priority level.',
  }),
  description: z.string().min(20, { message: 'Please describe your issue in at least 20 characters.' }).max(2000),
});

type SupportFormValues = z.infer<typeof supportSchema>;

const categoryHelpLinks: Record<string, { text: string; href: string }> = {
    account: {
        text: 'For account issues, you might find an answer in our',
        href: '/faq',
    },
    technical: {
        text: 'Having a technical problem? Check our',
        href: '/faq',
    },
    'content-error': {
        text: 'Spotted an error in our content? You might find info in our',
        href: '/faq',
    }
};

export default function SupportPageClient() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const [hasActiveChat, setHasActiveChat] = useState(false);
  const [isCheckingChat, setIsCheckingChat] = useState(true);
  const [isSubmitting, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<SupportFormValues>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      name: user?.displayName || '',
      email: user?.email || '',
      category: undefined, // Start with no category selected
      priority: 'medium',
      description: '',
    },
  });

  const selectedCategory = form.watch('category');
  const helpLinkData = selectedCategory ? categoryHelpLinks[selectedCategory] : null;
  
  // Set form values once user is loaded
  React.useEffect(() => {
    if (user) {
      form.reset({
        name: user.displayName || '',
        email: user.email || '',
        category: undefined,
        priority: 'medium',
        description: '',
      });
    }
  }, [user, form]);
  
  // Check for active chat session
  useEffect(() => {
    if (user) {
      const chatDocRef = doc(db, 'supportChats', user.uid);
      const unsubscribe = onSnapshot(chatDocRef, (doc) => {
        setHasActiveChat(doc.exists());
        setIsCheckingChat(false);
      });
      return () => unsubscribe();
    } else {
      setIsCheckingChat(false);
    }
  }, [user]);
  
  const onSubmit = (data: SupportFormValues) => {
    if (!user) return;

    startTransition(async () => {
        try {
            await submitSupportRequest({
                uid: user.uid,
                ...data,
                photoURL: user.photoURL
            });
            toast({
                title: 'Support Request Sent',
                description: "We've received your request and will get back to you soon.",
            });
            setHasActiveChat(true);
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Submission Failed',
                description: 'Could not submit your support request. Please try again.',
            });
        }
    });
  };
  
  const renderContent = () => {
    if (isAuthLoading || isCheckingChat) {
      return (
        <div className="flex justify-center items-center h-96">
          <Loader2 className="h-12 w-12 animate-spin" />
        </div>
      );
    }

    if (!user) {
      return (
        <Card className="text-center">
          <CardHeader>
            <CardTitle>Log In to Access Support</CardTitle>
            <CardDescription>You need to be logged in to create a support ticket or view your conversations.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
                <Link href="/auth">Log In / Sign Up</Link>
            </Button>
          </CardContent>
        </Card>
      );
    }
    
    // Authenticated users can always access chat
    if (hasActiveChat) {
      return <SupportChat />;
    }

    // Render the form for authenticated users
    return (
        <Card>
            <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Fill out the form below to start a live chat with our support team, or email us directly at team@studizilla.com.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem><FormLabel>Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                             <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem><FormLabel>Email Address</FormLabel><FormControl><Input {...field} disabled /></FormControl><FormMessage /></FormItem>
                            )} />
                       </div>
                       <div className="space-y-4">
                             <FormField control={form.control} name="category" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Select a reason..."/></SelectTrigger></FormControl>
                                        <SelectContent>
                                            <SelectItem value="account">Account & Login</SelectItem>
                                            <SelectItem value="technical">Technical Issue / Bug Report</SelectItem>
                                            <SelectItem value="content-error">Content Error</SelectItem>
                                            <SelectItem value="feedback">Feature Suggestion / Feedback</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                             )} />
                             {helpLinkData && (
                                <Alert className="animate-in fade-in-50 duration-500">
                                    <Lightbulb className="h-4 w-4" />
                                    <AlertDescription>
                                        {helpLinkData.text}{' '}
                                        <Link href={helpLinkData.href} className="font-semibold underline hover:text-primary">
                                            FAQ page.
                                        </Link>
                                    </AlertDescription>
                                </Alert>
                             )}
                        </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <FormField control={form.control} name="priority" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Priority <span className="text-muted-foreground">(be honest)</span></FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Select priority..." /></SelectTrigger></FormControl>
                                        <SelectContent>
                                            <SelectItem value="low">Low - General Question</SelectItem>
                                            <SelectItem value="medium">Medium - Something's not working</SelectItem>
                                            <SelectItem value="high">High - I can't access my account</SelectItem>
                                            <SelectItem value="suggestion">Suggestion / Feedback</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                             )} />
                        </div>
                        <FormField control={form.control} name="description" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Please describe your issue</FormLabel>
                                <FormControl><Textarea rows={6} {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <div className="text-right">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                                Submit Request
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
  };

  return (
    <div className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <header className="text-center max-w-3xl mx-auto">
          <LifeBuoy className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
            Support Center
          </h1>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Hello! How can we help you today? Use our live chat below or email us at{' '}
            <a href="mailto:team@studizilla.com" className="font-semibold underline hover:text-primary">
              team@studizilla.com
            </a>
          </p>
        </header>

        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                 {renderContent()}
            </div>
            <div className="lg:col-span-1">
                 <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <Card className="bg-card">
                    <CardHeader>
                        <CardTitle>Top Questions</CardTitle>
                        <CardDescription>Find quick answers here, or visit our full <Link href="/faq" className="underline hover:text-primary">FAQ page</Link>.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </section>
      </div>
    </div>
  );
}
