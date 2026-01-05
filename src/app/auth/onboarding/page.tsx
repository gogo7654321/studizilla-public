

'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { db, auth } from '@/lib/firebase';
import { doc, updateDoc, getDoc, setDoc, arrayUnion, collection, getCountFromServer } from 'firebase/firestore';
import { updateProfile } from 'firebase/auth';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AceMascot } from '@/components/AceMascot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Loader2, Users, School, Pencil, Instagram, Youtube, MessageSquare, Search, Check, PartyPopper } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';
import { courses } from '@/lib/courses';
import { CourseIcon } from '@/components/CourseIcon';
import { ScrollArea } from '@/components/ui/scroll-area';
import { isProfane } from '@/lib/profanity';
import '@/app/classes/courses.css';
import Confetti from 'react-confetti';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const stepOneSchema = z.object({
  firstName: z.string().min(1, 'First name is required').refine(name => !isProfane(name), {
    message: 'Please use appropriate language for your name.',
  }),
  age: z.number().min(5, "You must be at least 5 years old.").max(90, "It's never too late to learn! Please select a valid age."),
});

const stepTwoSchema = z.object({
  heardFrom: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Please select at least one source.",
  }),
  heardFromOther: z.string().optional(),
  features: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Please select at least one feature.",
  }),
});

type StepOneData = z.infer<typeof stepOneSchema>;
type StepTwoData = z.infer<typeof stepTwoSchema>;

const featuresList = [
    { id: 'ai-tools', label: 'AI Study Tools' },
    { id: 'flashcards', label: 'Flashcard Creation & Study' },
    { id: 'dashboard', label: 'Dashboard & Progress Tracking' },
    { id: 'courses', label: 'AP® & Honors Course Content' },
    { id: 'community', label: 'Community & Support' },
];

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.74-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
    </svg>
);

const heardFromOptions = [
    { value: 'teacher', label: 'Teacher', Icon: School },
    { value: 'friend', label: 'Friend', Icon: Users },
    { value: 'youtube', label: 'YouTube', Icon: (props: SVGProps<SVGSVGElement>) => <Youtube color="#FF0000" {...props} /> },
    { value: 'tiktok', label: 'TikTok', Icon: TikTokIcon },
    { value: 'instagram', label: 'Instagram', Icon: (props: SVGProps<SVGSVGElement>) => <Instagram color="#E4405F" {...props} /> },
    { value: 'other', label: 'Other', Icon: MessageSquare },
];


export default function OnboardingPage() {
  const { user, isLoading: isAuthLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [onboardingData, setOnboardingData] = useState<Partial<StepOneData & StepTwoData>>({});
  const [username, setUsername] = useState('');
  const [isLoadingUsername, setIsLoadingUsername] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);

  // --- Step 3 State ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourses, setSelectedCourses] = useState<Set<string>>(new Set());

  const formStepOne = useForm<StepOneData>({ 
    resolver: zodResolver(stepOneSchema),
    defaultValues: { age: 16 },
  });
  const formStepTwo = useForm<StepTwoData>({ resolver: zodResolver(stepTwoSchema), defaultValues: { features: [], heardFrom: [] } });

  const ageValue = formStepOne.watch('age');
  const heardFromValues = formStepTwo.watch('heardFrom');

  useEffect(() => {
    if (!isAuthLoading && !user) {
      router.replace('/auth');
    }
  }, [user, isAuthLoading, router]);
  
   useEffect(() => {
    if (user) {
        setIsLoadingUsername(true);
        const userDocRef = doc(db, 'users', user.uid);
        getDoc(userDocRef).then(docSnap => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                setUsername(data.username || '');
                if (user.displayName && !formStepOne.getValues('firstName')) {
                    formStepOne.setValue('firstName', user.displayName.split(' ')[0]);
                }
            }
            setIsLoadingUsername(false);
        }).catch(() => setIsLoadingUsername(false));
    } else {
        setIsLoadingUsername(false);
    }
  }, [user, formStepOne]);


  const handleStepOneSubmit = (data: StepOneData) => {
    setOnboardingData(prev => ({ ...prev, ...data }));
    setStep(2);
  };

  const handleStepTwoSubmit = (data: StepTwoData) => {
    setOnboardingData(prev => ({ ...prev, ...data }));
    setStep(3);
  };

  const handleFinishOnboarding = async () => {
    setIsSubmitting(true);
    const finalData = onboardingData as StepOneData & StepTwoData;
    
    if (!user) {
        toast({ variant: 'destructive', title: 'Error', description: 'User not found. Please log in again.' });
        setIsSubmitting(false);
        return;
    }

    try {
        const usersCollectionRef = collection(db, 'users');
        const countSnapshot = await getCountFromServer(usersCollectionRef);
        const userCount = countSnapshot.data().count;

        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: finalData.firstName });
        }
        
        const userDocRef = doc(db, 'users', user.uid);
        let heardFromFinal = finalData.heardFrom;
        if (finalData.heardFrom.includes('other') && finalData.heardFromOther) {
            heardFromFinal = [...finalData.heardFrom.filter(h => h !== 'other'), `Other: ${finalData.heardFromOther}`];
        }
        
        await updateDoc(userDocRef, {
            firstName: finalData.firstName,
            age: finalData.age,
            onboardingSurvey: {
                heardFrom: heardFromFinal,
                featuresOfInterest: finalData.features
            },
            hasCompletedOnboarding: true,
            addedCourses: arrayUnion(...Array.from(selectedCourses)),
        });

        const redirectPath = localStorage.getItem('redirectAfterLogin');
        localStorage.removeItem('redirectAfterLogin');
        
        if (userCount === 99) { // This new user makes 100
             setShowCelebration(true);
        } else if (!redirectPath || redirectPath === '/auth/onboarding') {
          localStorage.setItem('showWelcomePopup', 'true');
           router.push('/dashboard');
        } else {
            router.push(redirectPath);
        }

    } catch (error: any) {
        console.error("Onboarding submission error:", error);
        toast({ variant: 'destructive', title: 'Error', description: 'Could not save your information. Please try again.' });
        setIsSubmitting(false);
    }
  };
  
  const filteredCourses = useMemo(() => {
    if (!searchTerm.trim()) return courses;
    
    const searchLower = searchTerm.toLowerCase();
    return courses.filter(course =>
      course.name.toLowerCase().includes(searchLower) ||
      course.description.toLowerCase().includes(searchLower) ||
      course.subject.toLowerCase().includes(searchLower)
    );
  }, [searchTerm]);

  const handleToggleCourse = (courseId: string) => {
    setSelectedCourses(prev => {
        const newSet = new Set(prev);
        if (newSet.has(courseId)) {
            newSet.delete(courseId);
        } else {
            newSet.add(courseId);
        }
        return newSet;
    });
  };

  if (isAuthLoading || !user || isLoadingUsername) {
    return <div className="flex h-full items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }
  
  if (showCelebration) {
    return (
      <>
        <Confetti recycle={false} numberOfPieces={400} />
        <Dialog open={true} onOpenChange={() => {}}>
            <DialogContent>
                <DialogHeader className="text-center items-center">
                    <PartyPopper className="h-16 w-16 text-primary" />
                    <DialogTitle className="text-3xl font-bold font-headline">Congratulations!</DialogTitle>
                    <DialogDescription className="text-base">
                        You're the 100th user to join Studizilla! To celebrate, we've got a special prize for you.
                    </DialogDescription>
                </DialogHeader>
                <div className="text-center py-4">
                    <p>Click the button below to open a support chat and claim your reward!</p>
                    <Button asChild className="mt-4">
                        <Link href="/support">Claim My Prize</Link>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary/30 p-4">
        <Card className="w-full max-w-lg shadow-2xl rounded-2xl">
        <CardHeader>
            <div className="flex justify-between items-center mb-4">
                <AceMascot className="h-12 w-12" />
                <div className="text-right">
                    <p className="font-semibold text-muted-foreground">Step {step} of 3</p>
                    <Progress value={(step / 3) * 100} className="w-32 mt-1" />
                </div>
            </div>
            <CardTitle className="font-headline text-3xl">Welcome to Studizilla!</CardTitle>
            <CardDescription>Let's get your account set up, @{username}.</CardDescription>
        </CardHeader>
        <CardContent>
            {step === 1 && (
            <form onSubmit={formStepOne.handleSubmit(handleStepOneSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" {...formStepOne.register('firstName')} />
                  {formStepOne.formState.errors.firstName && <p className="text-destructive text-sm mt-1">{formStepOne.formState.errors.firstName.message}</p>}
                </div>
                
                <Controller
                  name="age"
                  control={formStepOne.control}
                  render={({ field }) => (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="age">Age</Label>
                        <span className="font-bold text-lg text-primary">{ageValue}</span>
                      </div>
                      <Slider
                        id="age"
                        min={5}
                        max={90}
                        step={1}
                        value={[field.value]}
                        onValueChange={(vals) => field.onChange(vals[0])}
                      />
                      {formStepOne.formState.errors.age && (
                        <p className="text-destructive text-sm mt-1">{formStepOne.formState.errors.age.message}</p>
                      )}
                    </div>
                  )}
                />
                <Button type="submit" className="w-full">Next</Button>
            </form>
            )}
            {step === 2 && (
            <form onSubmit={formStepTwo.handleSubmit(handleStepTwoSubmit)} className="space-y-6">
                <div>
                    <Label>How did you hear about us? (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        {heardFromOptions.map(({ value, label, Icon }) => (
                           <Controller
                                key={value}
                                name="heardFrom"
                                control={formStepTwo.control}
                                render={({ field }) => (
                                     <Label
                                        htmlFor={`heard-${value}`}
                                        className={cn(
                                            "flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors hover:bg-accent/50",
                                            field.value?.includes(value) && "bg-accent border-primary"
                                        )}
                                    >
                                        <Checkbox
                                            id={`heard-${value}`}
                                            checked={field.value?.includes(value)}
                                            onCheckedChange={(checked) => {
                                                return checked
                                                    ? field.onChange([...(field.value || []), value])
                                                    : field.onChange(field.value?.filter((v: string) => v !== value));
                                            }}
                                            className="h-5 w-5"
                                        />
                                        <Icon className={cn("h-6 w-6 shrink-0", value !== 'tiktok' && 'text-foreground')} />
                                        <span className="font-medium text-sm">{label}</span>
                                    </Label>
                                )}
                           />
                        ))}
                    </div>
                    {formStepTwo.formState.errors.heardFrom && <p className="text-destructive text-sm mt-1">{formStepTwo.formState.errors.heardFrom.message}</p>}
                    {heardFromValues?.includes('other') && (
                        <div className="pt-2 animate-in fade-in duration-300">
                            <Label htmlFor="heardFromOther">Please specify</Label>
                            <div className="flex items-center gap-2 mt-1">
                                <Pencil className="h-5 w-5 text-muted-foreground" />
                                <Input placeholder="..." {...formStepTwo.register('heardFromOther')} />
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <Label>What are you here for? (Select all that apply)</Label>
                    {featuresList.map(item => (
                        <Controller
                            key={item.id}
                            name="features"
                            control={formStepTwo.control}
                            render={({ field }) => (
                            <div className="flex items-center space-x-2 mt-2">
                                    <Checkbox
                                        id={item.id}
                                        onCheckedChange={(checked) => {
                                            return checked
                                                ? field.onChange([...(field.value || []), item.id])
                                                : field.onChange(field.value?.filter(v => v !== item.id))
                                        }}
                                        checked={field.value?.includes(item.id)}
                                    />
                                    <Label htmlFor={item.id} className="font-normal">{item.label}</Label>
                                </div>
                            )}
                        />
                    ))}
                    {formStepTwo.formState.errors.features && <p className="text-destructive text-sm mt-1">{formStepTwo.formState.errors.features.message}</p>}
                </div>
                <div className="flex justify-between">
                    <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
                    <Button type="submit">Next</Button>
                </div>
            </form>
            )}
            {step === 3 && (
                <div className="space-y-4">
                    <div className="space-y-1 text-center">
                        <Label className="text-lg font-semibold">Add Your Courses</Label>
                        <p className="text-sm text-muted-foreground">Select the AP® & Honors courses you're taking.</p>
                    </div>
                    <div className="relative">
                        <Search className="search-icon" size={20} />
                        <Input
                            type="text"
                            className="search-input !h-12 onboarding-search"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <ScrollArea className="h-[400px] border rounded-lg p-2">
                         <div className="grid grid-cols-1 gap-2">
                            {filteredCourses.map(course => (
                                <button
                                    key={course.id}
                                    onClick={() => handleToggleCourse(course.id)}
                                    className={cn(
                                        "w-full text-left p-3 rounded-lg border transition-all flex items-center justify-between gap-3",
                                        selectedCourses.has(course.id) 
                                            ? "bg-primary/10 border-primary"
                                            : "hover:bg-accent/50"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <CourseIcon iconName={course.icon} className="h-8 w-8" />
                                        <div>
                                            <p className="font-semibold">{course.name}</p>
                                            <p className="text-xs text-muted-foreground">{course.subject}</p>
                                        </div>
                                    </div>
                                    {selectedCourses.has(course.id) && <Check className="h-5 w-5 text-primary" />}
                                </button>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="flex justify-between">
                        <Button type="button" variant="ghost" onClick={() => setStep(2)}>Back</Button>
                        <Button onClick={handleFinishOnboarding} disabled={isSubmitting}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Finish Setup
                        </Button>
                    </div>
                </div>
            )}
        </CardContent>
        </Card>
    </div>
  );
}
