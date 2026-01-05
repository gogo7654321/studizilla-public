
'use client';

import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { AceMascot } from '@/components/AceMascot';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, AlertCircle, CheckCircle, ShieldAlert, Eye, EyeOff } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Checkbox } from '@/components/ui/checkbox';
import { logUserAction } from '@/lib/logging';
import { debounce } from 'lodash';
import { isProfane } from '@/lib/profanity';
import { getEmailForUsername, createNewUserDocuments } from './actions';
import { ReCaptchaCheckbox } from '@/components/ReCaptchaCheckbox';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const signUpSchema = z
  .object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters.' }).regex(/^[a-zA-Z0-9_.-]+$/, { message: 'Username can only contain letters, numbers, dots, and hyphens.' }).refine(name => !isProfane(name), {
      message: 'Please choose a more appropriate username.',
    }),
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z.string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter." })
      .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter." })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ['confirmPassword'],
  });

const loginSchema = z.object({
  emailOrUsername: z.string().min(1, { message: 'Email or Username is required' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;
type LoginFormValues = z.infer<typeof loginSchema>;

type Strength = {
    score: number; // 0 to 4
    text: string;
    color: string;
};

const checkPasswordStrength = (password: string): Strength => {
    if (!password) return { score: 0, text: '', color: '' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    switch (score) {
        case 1: return { score: 1, text: 'Weak', color: 'bg-red-500' };
        case 2: return { score: 2, text: 'Fair', color: 'bg-yellow-500' };
        case 3: return { score: 3, text: 'Good', color: 'bg-lime-500' };
        case 4: return { score: 4, text: 'Strong', color: 'bg-green-500' };
        default: return { score: 0, text: 'Too short', color: 'bg-red-500' };
    }
};

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,36.596,44,31.1,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
  );

function AuthPageComponent() {
  const [error, setError] = useState<string | null>(null);
  const [reauthMessage, setReauthMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [rememberMe, setRememberMe] = useState(false);
  const [loginCaptchaToken, setLoginCaptchaToken] = useState<string | null>(null);
  const [signupCaptchaToken, setSignupCaptchaToken] = useState<string | null>(null);


  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Username validation state
  const [isCheckingUsername, setIsCheckingUsername] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<Strength>({ score: 0, text: '', color: '' });

  // Forgot Password State
  const [isResetDialogOpen, setIsResetDialogOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetError, setResetError] = useState<string | null>(null);
  const [resetSuccess, setResetSuccess] = useState<string | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  const handleRedirect = useCallback(() => {
    const redirectPath = localStorage.getItem('redirectAfterLogin');
    localStorage.removeItem('redirectAfterLogin');
    router.push(redirectPath || '/dashboard');
  }, [router]);

  useEffect(() => {
    const reauthReason = searchParams.get('reauth');
    if (reauthReason === 'delete') {
      setReauthMessage("For your security, please log in again to confirm account deletion.");
    }
  }, [searchParams]);

  const signUpForm = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { username: '', email: '', password: '', confirmPassword: '' },
    mode: 'onBlur',
  });

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { emailOrUsername: '', password: '' },
  });

  const passwordValue = signUpForm.watch('password');
  useEffect(() => {
    setPasswordStrength(checkPasswordStrength(passwordValue));
  }, [passwordValue]);


  const checkUsername = useCallback(
    debounce(async (username: string) => {
      if (username.length < 3) {
        setUsernameAvailable(null);
        return;
      }
      setIsCheckingUsername(true);
      try {
        const usernameDocRef = doc(db, 'usernames', username.toLowerCase());
        const docSnap = await getDoc(usernameDocRef);
        setUsernameAvailable(!docSnap.exists());
      } catch (e) {
        console.error("Error checking username", e);
        setUsernameAvailable(null);
      } finally {
        setIsCheckingUsername(false);
      }
    }, 500),
    []
  );

  const handleSignUp = async (values: SignUpFormValues) => {
    setIsLoading(true);
    setError(null);
    signUpForm.clearErrors();

    if (!signupCaptchaToken) {
        setError("Please complete the reCAPTCHA verification.");
        setIsLoading(false);
        return;
    }

    if (usernameAvailable === false) {
        signUpForm.setError("username", { type: "manual", message: "This username is already taken." });
        setIsLoading(false);
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        
        await updateProfile(user, { displayName: values.username });
        
        // Create user documents in background
        createNewUserDocuments({
            uid: user.uid,
            email: user.email,
            username: values.username,
            displayName: values.username, 
            photoURL: user.photoURL,
            recaptchaToken: signupCaptchaToken,
        }).catch(err => console.error('Error creating user docs:', err));

        // Log action in background
        logUserAction({ uid: user.uid, email: user.email }, 'signup').catch(err => console.error('Error logging action:', err));
        
        router.push('/auth/onboarding');
    } catch (err: any) {
      console.error('Sign up error:', err);
      if (err.code === 'auth/email-already-in-use') {
        signUpForm.setError("email", { type: "manual", message: "An account with this email address already exists." });
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (values: LoginFormValues) => {
    setIsLoading(true);
    setError(null);
    let emailToLogin = values.emailOrUsername;

    if (!loginCaptchaToken) {
        setError("Please complete the reCAPTCHA verification.");
        setIsLoading(false);
        return;
    }

    try {
      // If the input doesn't look like an email, assume it's a username
      if (!emailToLogin.includes('@')) {
        const foundEmail = await getEmailForUsername(emailToLogin);
        if (foundEmail) {
            emailToLogin = foundEmail;
        }
      }

      // Now, proceed with the login using the determined email address or the original input
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, emailToLogin, values.password);
      
      // Log action in background
      logUserAction({ uid: userCredential.user.uid, email: userCredential.user.email }, 'login').catch(err => console.error('Error logging action:', err));
      
      handleRedirect();

    } catch (err: any) {
      console.error('Login error:', err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
         setError('Invalid credentials. Please check your email/username and password.');
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const additionalInfo = getAdditionalUserInfo(result);

        if (additionalInfo?.isNewUser) {
            const defaultUsername = user.email?.split('@')[0] || `user_${user.uid.substring(0,6)}`;
            
            // Create user documents - don't wait for server action
            createNewUserDocuments({
                uid: user.uid,
                email: user.email,
                username: defaultUsername,
                displayName: user.displayName,
                photoURL: user.photoURL,
                recaptchaToken: 'google_signin', // Bypass reCAPTCHA for Google sign-in
            }).catch(err => console.error('Error creating user docs:', err));
            
            // Log action in background
            logUserAction({ uid: user.uid, email: user.email }, 'signup').catch(err => console.error('Error logging action:', err));
            
            router.push('/auth/onboarding');
        } else {
            // Update photo in Firestore directly (fast)
            const userDocRef = doc(db, 'users', user.uid);
            updateDoc(userDocRef, { photoURL: user.photoURL }).catch(err => console.error('Error updating photo:', err));
            
            // Log action in background
            logUserAction({ uid: user.uid, email: user.email }, 'login_google').catch(err => console.error('Error logging action:', err));
            
            handleRedirect();
        }
    } catch (err: any) {
        console.error('Google sign in error:', err);
        if (err.code !== 'auth/popup-closed-by-user') {
          setError(err.message || "An error occurred during Google Sign-In.");
        }
    } finally {
        setIsLoading(false);
    }
  };


  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setResetError("Please enter your email address.");
      return;
    }
    setIsResetting(true);
    setResetError(null);
    setResetSuccess(null);
    try {
      const actionCodeSettings = {
        url: `${window.location.origin}/dashboard/settings`,
        handleCodeInApp: false,
      };
      await sendPasswordResetEmail(auth, resetEmail, actionCodeSettings);
      setResetSuccess("Password reset link sent! Check your inbox (and your spam folder).");
    } catch (err: any) {
      console.error('Password reset error:', err);
      setError(err.message);
    } finally {
      setIsResetting(false);
    }
  };


  return (
    <>
      <Dialog open={isResetDialogOpen} onOpenChange={(open) => {
          if (!open) {
            setResetError(null);
            setResetSuccess(null);
            setResetEmail('');
          }
          setIsResetDialogOpen(open);
      }}>
        <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            {reauthMessage && (
                <Alert variant="default" className="mt-4 border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 [&>svg]:text-yellow-500">
                    <ShieldAlert className="h-4 w-4" />
                    <AlertTitle className="text-yellow-800 dark:text-yellow-200">Re-authentication Required</AlertTitle>
                    <AlertDescription className="text-yellow-700 dark:text-yellow-300">
                        {reauthMessage}
                    </AlertDescription>
                </Alert>
            )}

            {error && (
            <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
            )}

            <TabsContent value="login" className="mt-4">
            <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
                <div className="space-y-2">
                <Label htmlFor="login-email-username">Email or Username</Label>
                <Input id="login-email-username" type="text" placeholder="you@example.com or student" autoComplete="username email" {...loginForm.register('emailOrUsername')} />
                {loginForm.formState.errors.emailOrUsername && <p className="text-sm text-destructive">{loginForm.formState.errors.emailOrUsername.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                        <Input
                            id="login-password"
                            type={showLoginPassword ? 'text' : 'password'}
                            autoComplete="current-password"
                            {...loginForm.register('password')}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                            onClick={() => setShowLoginPassword(!showLoginPassword)}
                        >
                            {showLoginPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">Toggle password visibility</span>
                        </Button>
                    </div>
                    {loginForm.formState.errors.password && <p className="text-sm text-destructive">{loginForm.formState.errors.password.message}</p>}
                </div>
                <div className="flex items-center gap-3">
                <Checkbox id="remember-me" checked={rememberMe} onCheckedChange={(checked) => setRememberMe(checked as boolean)} className="h-5 w-5" />
                <Label htmlFor="remember-me" className="text-sm font-normal cursor-pointer -translate-y-px">Remember me</Label>
                </div>
                 <ReCaptchaCheckbox onChange={setLoginCaptchaToken} />
                <Button type="submit" className="w-full" disabled={isLoading || !loginCaptchaToken}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Log In
                </Button>
                <div className="text-center">
                    <DialogTrigger asChild>
                        <Button variant="link" type="button" size="sm" className="h-auto p-0 text-sm font-normal text-muted-foreground">
                            Forgot password?
                        </Button>
                    </DialogTrigger>
                </div>
            </form>
            </TabsContent>

            <TabsContent value="signup" className="mt-4">
            <form onSubmit={signUpForm.handleSubmit(handleSignUp)} className="space-y-4">
                <div className="space-y-2">
                <Label htmlFor="signup-username">Username</Label>
                <div className="relative">
                    <Input
                        id="signup-username"
                        type="text"
                        placeholder="ace_student"
                        autoComplete="username"
                        {...signUpForm.register('username', {
                            onChange: (e) => {
                                checkUsername(e.target.value);
                                signUpForm.clearErrors("username");
                            }
                        })}
                    />
                    {isCheckingUsername && <Loader2 className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin" />}
                </div>
                {signUpForm.formState.errors.username && <p className="text-sm text-destructive mt-1">{signUpForm.formState.errors.username.message}</p>}
                {!signUpForm.formState.errors.username && usernameAvailable === false && <p className="text-sm text-destructive mt-1">This username is already taken.</p>}
                {!signUpForm.formState.errors.username && usernameAvailable === true && <p className="text-sm text-green-600 mt-1">Username is available!</p>}
                </div>
                <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="you@example.com" autoComplete="email" {...signUpForm.register('email')} />
                    {signUpForm.formState.errors.email && <p className="text-sm text-destructive">{signUpForm.formState.errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                        <Input
                            id="signup-password"
                            type={showSignUpPassword ? 'text' : 'password'}
                            autoComplete="new-password"
                            {...signUpForm.register('password')}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                            onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                        >
                            {showSignUpPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">Toggle password visibility</span>
                        </Button>
                    </div>
                     {passwordValue && (
                        <div className="mt-2 space-y-1">
                            <Progress value={passwordStrength.score * 25} className={cn("h-1", passwordStrength.color)} />
                            <p className="text-xs font-medium" style={{ color: `var(--${passwordStrength.color})` }}>
                                {passwordStrength.text}
                            </p>
                        </div>
                    )}
                    {signUpForm.formState.errors.password && <p className="text-sm text-destructive">{signUpForm.formState.errors.password.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <div className="relative">
                        <Input
                            id="confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            autoComplete="new-password"
                            {...signUpForm.register('confirmPassword')}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">Toggle password visibility</span>
                        </Button>
                    </div>
                    {signUpForm.formState.errors.confirmPassword && <p className="text-sm text-destructive">{signUpForm.formState.errors.confirmPassword.message}</p>}
                </div>
                 <ReCaptchaCheckbox onChange={setSignupCaptchaToken} />
                <Button type="submit" className="w-full" disabled={isLoading || isCheckingUsername || usernameAvailable === false || !signupCaptchaToken}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Create Account
                </Button>
            </form>
            </TabsContent>
        </Tabs>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Reset Your Password</DialogTitle>
                <DialogDescription>
                    Enter your email address and we'll send you a link to reset your password.
                </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-2">
                {resetError && <Alert variant="destructive"><AlertCircle className="h-4 w-4" /><AlertTitle>Error</AlertTitle><AlertDescription>{resetError}</AlertDescription></Alert>}
                {resetSuccess && (
                <div className="flex items-center gap-2 rounded-md border border-transparent bg-secondary p-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-sm text-secondary-foreground">{resetSuccess}</p>
                </div>
                )}
                
                {!resetSuccess && (
                        <div className="space-y-2">
                        <Label htmlFor="reset-email">Email</Label>
                        <Input 
                            id="reset-email" 
                            type="email" 
                            placeholder="you@example.com"
                            value={resetEmail}
                            onChange={(e) => {
                                setResetEmail(e.target.value)
                                setResetError(null)
                            }}
                        />
                    </div>
                )}
            </div>
            {!resetSuccess ? (
                <DialogFooter>
                    <Button type="button" variant="ghost" onClick={() => setIsResetDialogOpen(false)}>Cancel</Button>
                    <Button onClick={handlePasswordReset} disabled={isResetting}>
                        {isResetting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Send Reset Link
                    </Button>
                </DialogFooter>
            ) : (
                <DialogFooter>
                    <Button type="button" onClick={() => setIsResetDialogOpen(false)}>Close</Button>
                </DialogFooter>
            )}
        </DialogContent>
      </Dialog>
        <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
        </div>
        </div>

        <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <GoogleIcon className="mr-2 h-5 w-5" />}
            Google
        </Button>
    </>
  );
}

export default function AuthPage() {
    return (
        <Suspense fallback={<div className="flex justify-center items-center h-full"><Loader2 className="h-8 w-8 animate-spin" /></div>}>
            <AuthPageComponent />
        </Suspense>
    )
}

    