
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { AceMascot } from '@/components/AceMascot';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' })
      .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter.' })
      .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter.' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
      .regex(/[^A-Za-z0-9]/, { message: 'Password must contain at least one special character.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

function ResetPasswordComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get('oobCode');

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const checkCode = async () => {
      if (!oobCode) {
        setError('Invalid or missing reset code. Please request a new password reset link.');
        setIsLoading(false);
        return;
      }
      try {
        await verifyPasswordResetCode(auth, oobCode);
        setIsCodeValid(true);
      } catch (err: any) {
        setError('Invalid or expired password reset link. Please request a new one.');
      } finally {
        setIsLoading(false);
      }
    };
    checkCode();
  }, [oobCode]);

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  });

  const handleResetPassword = async (values: ResetPasswordFormValues) => {
    if (!oobCode) {
        setError('Invalid action code.');
        return;
    }
    setIsSubmitting(true);
    setError(null);
    try {
      await confirmPasswordReset(auth, oobCode, values.password);
      setSuccess('Your password has been reset successfully! You will be redirected to the login page shortly.');
      setTimeout(() => {
        router.push('/auth');
      }, 3000);
    } catch (err: any) {
      console.error('Password reset error:', err);
      setError('Failed to reset password. The link may have expired. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
        <Card className="w-full max-w-md shadow-2xl rounded-2xl border-2 bg-card/95 backdrop-blur">
            <CardHeader className="text-center space-y-2">
                 <AceMascot className="mx-auto h-20 w-20" />
                 <CardTitle className="font-headline text-3xl mt-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Verifying Link</CardTitle>
                 <CardDescription>Please wait while we verify your reset link...</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center py-10">
                <Loader2 className="mr-2 h-8 w-8 animate-spin text-primary" />
            </CardContent>
        </Card>
    );
  }
  
  if (!isCodeValid || error) {
     return (
        <Card className="w-full max-w-md shadow-2xl rounded-2xl border-2 bg-card/95 backdrop-blur">
            <CardHeader className="text-center space-y-2">
                 <AceMascot className="mx-auto h-20 w-20" />
                 <CardTitle className="font-headline text-3xl mt-4">Link Invalid</CardTitle>
                 <CardDescription>This password reset link is no longer valid</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
                <div className="space-y-2">
                    <Button asChild className="w-full" size="lg">
                        <Link href="/auth">Return to Login</Link>
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">You can request a new password reset link from the login page</p>
                </div>
            </CardContent>
        </Card>
    );
  }

  if (success) {
      return (
        <Card className="w-full max-w-md shadow-2xl rounded-2xl border-2 bg-card/95 backdrop-blur">
            <CardHeader className="text-center space-y-2">
                 <div className="mx-auto h-20 w-20 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                 </div>
                 <CardTitle className="font-headline text-3xl mt-4 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">Success!</CardTitle>
                 <CardDescription>Your password has been updated</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Alert className="border-green-500/50 bg-green-500/10">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertDescription className="text-foreground">{success}</AlertDescription>
                </Alert>
                <div className="flex justify-center">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    <p className="ml-2 text-sm text-muted-foreground">Redirecting to login...</p>
                </div>
            </CardContent>
        </Card>
      )
  }


  return (
    <Card className="w-full max-w-md shadow-2xl rounded-2xl border-2 bg-card/95 backdrop-blur">
      <CardHeader className="text-center space-y-2">
        <AceMascot className="mx-auto h-20 w-20" />
        <CardTitle className="font-headline text-3xl mt-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Reset Your Password</CardTitle>
        <CardDescription>Enter and confirm your new password below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(handleResetPassword)} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <div className="relative">
                    <Input id="password" type={showPassword ? 'text' : 'password'} {...form.register('password')} className="pr-10" />
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">Toggle password visibility</span>
                    </Button>
                </div>
                {form.formState.errors.password && <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>}
            </div>
            <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                 <div className="relative">
                    <Input id="confirm-password" type={showConfirmPassword ? 'text' : 'password'} {...form.register('confirmPassword')} className="pr-10" />
                     <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground hover:text-foreground"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">Toggle password visibility</span>
                    </Button>
                </div>
                {form.formState.errors.confirmPassword && <p className="text-sm text-destructive">{form.formState.errors.confirmPassword.message}</p>}
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? 'Saving...' : 'Save New Password'}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">
                Password must be at least 8 characters with uppercase, lowercase, number, and special character
            </p>
        </form>
      </CardContent>
    </Card>
  );
}

export default function ResetPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
            <Suspense fallback={
                <Card className="w-full max-w-md shadow-2xl rounded-2xl border-2">
                    <CardHeader className="text-center">
                         <AceMascot className="mx-auto h-16 w-16" />
                         <CardTitle className="font-headline text-3xl mt-4">Loading</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center items-center py-10">
                        <Loader2 className="mr-2 h-8 w-8 animate-spin text-primary" />
                        <p>Please wait...</p>
                    </CardContent>
                </Card>
            }>
                <ResetPasswordComponent />
            </Suspense>
        </div>
    )
}
