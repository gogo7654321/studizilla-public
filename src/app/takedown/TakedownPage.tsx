

'use client';

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { submitTakedownRequest } from './actions';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';

const takedownSchema = z.object({
  username: z.string().min(1, 'Username is required.'),
  reason: z.enum(['copyright', 'explicit', 'other'], {
    required_error: 'You must select a reason for the report.',
  }),
  otherReason: z.string().optional(),
  links: z.string().min(1, 'Please provide at least one link.').min(10, 'Please provide a valid link.'),
}).refine((data) => {
    if (data.reason === 'other') {
        return !!data.otherReason && data.otherReason.trim().length > 0;
    }
    return true;
}, {
    message: 'Please specify your reason.',
    path: ['otherReason'],
});


type TakedownFormValues = z.infer<typeof takedownSchema>;

export default function TakedownPageClient() {
    const { toast } = useToast();
    const [isPending, startTransition] = useTransition();

    const form = useForm<TakedownFormValues>({
        resolver: zodResolver(takedownSchema),
        defaultValues: {
            username: '',
            links: '',
        },
    });

    const watchReason = form.watch('reason');

    const onSubmit = (data: TakedownFormValues) => {
        startTransition(async () => {
            try {
                // If the reason is 'other', use the custom reason text. Otherwise, use the selected reason.
                const finalReason = data.reason === 'other' ? data.otherReason : data.reason;

                await submitTakedownRequest({
                    username: data.username,
                    reason: finalReason as string, // Cast to string as it might be custom
                    links: data.links,
                });

                toast({
                    title: 'Request Submitted',
                    description: 'Thank you. We have received your request and will review it shortly.',
                });
                form.reset();
            } catch (error) {
                toast({
                    variant: 'destructive',
                    title: 'Submission Failed',
                    description: 'An error occurred. Please try again.',
                });
            }
        });
    };

  return (
    <div className="bg-secondary/50 py-12 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-3xl">Request File Removal</CardTitle>
                <CardDescription>
                    We’re committed to making sure Studizilla remains a safe & fair space for everyone. Please use this form to request removal of any file on Studizilla. We’ll review each request before taking any action. This form is subject to the Studizilla <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> & <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>What's your Studizilla username? *</Label>
                                    <FormControl>
                                        <Input placeholder="e.g. ace_student_123" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <FormField
                             control={form.control}
                             name="reason"
                             render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <Label>What reason are you reporting these files for? *</Label>
                                    <FormControl>
                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl><RadioGroupItem value="copyright" /></FormControl>
                                                <Label className="font-normal">Copyright Violation</Label>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl><RadioGroupItem value="explicit" /></FormControl>
                                                <Label className="font-normal">Explicit / Inappropriate Content</Label>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl><RadioGroupItem value="other" /></FormControl>
                                                <Label className="font-normal">Other (Please specify)</Label>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                             )}
                        />

                        {watchReason === 'other' && (
                            <FormField
                                control={form.control}
                                name="otherReason"
                                render={({ field }) => (
                                    <FormItem className="animate-in fade-in-50 duration-300">
                                        <Label>Please specify your reason</Label>
                                        <FormControl>
                                            <Input placeholder="Enter your reason..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                        <FormField
                             control={form.control}
                             name="links"
                             render={({ field }) => (
                                <FormItem>
                                    <Label>Please provide the links to the files you would like to request for removal *</Label>
                                    <FormControl>
                                        <Textarea placeholder="Please provide one link per line..." rows={5} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="text-right">
                            <Button type="submit" disabled={isPending}>
                                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Submit Request
                            </Button>
                        </div>
                        
                        <p className="text-xs text-center text-muted-foreground pt-4">
                            Please do not submit sensitive information like passwords through this form. If you believe a form is being used maliciously, please contact our support team directly.
                        </p>
                    </form>
                </Form>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}

    