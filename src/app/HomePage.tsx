
'use client';

import './homepage.css';
import { useEffect, useState, useTransition } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import { Loader2, ArrowRight, BookCopy, LayoutDashboard, Sparkles, AlertTriangle, Zap, Brain, Rocket, TrendingUp, Users, Trophy, X, Star } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { auth } from '@/lib/firebase';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import dynamic from 'next/dynamic';

// Dynamic imports for heavy components
const AceMascot = dynamic(() => import('@/components/AceMascot').then(mod => ({ default: mod.AceMascot })), { ssr: false });
const FloatingParticles = dynamic(() => import('@/components/landing/FloatingParticles').then(mod => ({ default: mod.FloatingParticles })), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/landing/ScrollEffects').then(mod => ({ default: mod.ScrollProgress })), { ssr: false });
const ParallaxText = dynamic(() => import('@/components/landing/ScrollEffects').then(mod => ({ default: mod.ParallaxText })));
const MagneticButton = dynamic(() => import('@/components/landing/MagneticButton').then(mod => ({ default: mod.MagneticButton })));
const TestimonialCarousel = dynamic(() => import('@/components/landing/TestimonialCarousel').then(mod => ({ default: mod.TestimonialCarousel })));
const StudizillaCalculator = dynamic(() => import('@/components/landing/StudizillaCalculator').then(mod => ({ default: mod.StudizillaCalculator })));
const FaqSection = dynamic(() => import('./landing/FaqSection').then(mod => ({ default: mod.FaqSection })));
const FeatureComparison = dynamic(() => import('@/components/FeatureComparison').then(mod => ({ default: mod.FeatureComparison })));

import { testimonials as testimonialsData, type Testimonial } from '@/lib/testimonials';


const shuffleArray = (array: any[]) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export default function HomePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [guestNotes, setGuestNotes] = useState('');
  const [shuffledTestimonials, setShuffledTestimonials] = useState<Testimonial[]>([]);
  const [isPending, startTransition] = useTransition();

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  useEffect(() => {
    // Exclude the featured testimonials from the main homepage shuffle
    const featuredNames = ["Adam K.", "Mann P.", "Gabe R."];
    const filteredTestimonials = testimonialsData.filter(t => !featuredNames.includes(t.name));
    setShuffledTestimonials(shuffleArray(filteredTestimonials));
  }, []);


  const handleGuestGenerate = () => {
    if (guestNotes.trim().length < 20) {
        toast({
            variant: 'destructive',
            title: 'More Notes Needed',
            description: 'Please provide at least 20 characters of notes to generate flashcards.',
        });
        return;
    }
        
    startTransition(async () => {
      try {
        if (user) {
            toast({
              title: 'Generating Your Deck...',
              description: "The AI is working its magic. This may take a moment.",
            });
            // Dynamically import to avoid loading genkit on initial page load
            const { processNotesAndCreateDeck } = await import('@/app/app/ai/actions');
            const newDeckId = await processNotesAndCreateDeck(user.uid, { prompt: guestNotes, model: 'googleai/gemini-2.5-flash' });
            toast({
              title: "Deck Created Successfully!",
              description: "Redirecting you to the editor to review your new deck.",
            });
            router.push(`/resources/flashcards/create?deckId=${newDeckId}`);
        } else {
            localStorage.setItem('pendingNotesForGeneration', guestNotes);
            toast({
                title: 'Log In to Continue',
                description: 'Sign up or log in, and we\'ll create your flashcard deck instantly!',
            });
            router.push('/auth');
        }
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Generation Failed',
          description: error.message || 'Could not create deck.',
        });
      }
    });
  };
  
  const handleGsiLoad = () => {
    if (user || isLoading) return;

    if (window.google) {
        window.google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            callback: handleCredentialResponse,
            prompt_parent_id: 'one-tap-container',
        });
        window.google.accounts.id.prompt((notification) => {
             if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                console.log('Google One Tap prompt was not displayed.');
            }
        });
    }
  };

  const handleCredentialResponse = async (response: any) => {
      try {
        const credential = GoogleAuthProvider.credential(response.credential);
        await signInWithCredential(auth, credential);
        toast({
          title: 'Welcome!',
          description: 'You have been signed in successfully.',
        });
        router.push('/dashboard');
      } catch (error) {
        console.error("Google One Tap sign-in error:", error);
        toast({
          variant: 'destructive',
          title: 'Sign-in Failed',
          description: 'Could not sign you in with Google. Please try again.',
        });
      }
    };


  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <ScrollProgress />
      <FloatingParticles />
      
      <Script 
        src="https://accounts.google.com/gsi/client" 
        strategy="lazyOnload"
        onLoad={handleGsiLoad}
      />

      {/* Hero Section - Magnetic & Floating */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div id="one-tap-container" className="absolute top-4 right-4"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              y: [0, -15, 0],
            }}
            transition={{
              scale: { type: "spring", stiffness: 260, damping: 20, duration: 1 },
              rotate: { type: "spring", stiffness: 260, damping: 20, duration: 1 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="mb-8 inline-block"
          >
            <AceMascot className="h-32 w-32 drop-shadow-2xl" />
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #7c3aed, #a855f7, #ec4899, #a855f7, #7c3aed)',
                backgroundSize: '300% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              Study Smarter,
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ec4899, #f472b6, #a855f7, #f472b6, #ec4899)',
                backgroundSize: '300% 100%',
              }}
              animate={{
                backgroundPosition: ['100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              Not Harder
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your all-in-one AI-powered study platform. Flashcards, calendar, and tools designed for{' '}
            <span className="text-primary font-bold">AP & Honors students</span> who want to ace their exams.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MagneticButton href={user ? "/dashboard" : "/auth"} variant="default" size="lg">
              {user ? "Go to Dashboard" : "Get Started Free"}
              <Rocket className="ml-2 h-5 w-5" />
            </MagneticButton>
            <MagneticButton href="/classes" variant="outline" size="lg">
              Browse Courses
              <BookCopy className="ml-2 h-5 w-5" />
            </MagneticButton>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                5000+
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">Students</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                100K+
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">Flashcards</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                95%
              </motion.div>
              <div className="text-sm text-muted-foreground mt-1">Pass Rate</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Beta Banner */}
      <motion.div
        className="bg-yellow-100 border-y border-yellow-200 text-yellow-900 p-4 text-center text-sm font-medium dark:bg-yellow-900/30 dark:border-yellow-700/30 dark:text-yellow-300"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 max-w-4xl mx-auto">
          <AlertTriangle className="h-5 w-5 animate-pulse" />
          <p>
            Studizilla is currently in beta. The full version is expected to launch in{' '}
            <span className="font-bold">January 2026</span>.
          </p>
        </div>
      </motion.div>

      {/* Features Section - Morphing Cards */}
      <section className="py-24 px-4 relative">
        <ParallaxText speed={0.5}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                Everything You Need,
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                  All in One Place
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Studizilla combines powerful AI, intuitive design, and proven study techniques into one seamless experience.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Interactive Demo Card */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, type: "spring" }}
                whileHover={{ scale: 1.02, rotateX: 5 }}
              >
                <Card className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/20 overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
                  <CardHeader className="text-center relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    />
                    <div className="relative z-10">
                      <motion.div
                        className="inline-block p-4 bg-background rounded-2xl mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <LayoutDashboard className="h-12 w-12 text-primary" />
                      </motion.div>
                      <CardTitle className="text-3xl font-bold">Experience the Full Dashboard</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        Try a fully interactive demo with real features. No sign-up required.
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center pb-8 relative z-10">
                    <MagneticButton href="/guest-dashboard" variant="default" size="lg">
                      Launch Live Demo
                      <Zap className="ml-2 h-5 w-5" />
                    </MagneticButton>
                  </CardContent>
                </Card>
              </motion.div>

              {/* AI Tools Card */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.03, rotateY: 5 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/30">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold">AI-Powered Study Tools</CardTitle>
                    <CardDescription className="text-base">
                      Turn notes into flashcards instantly. Get explanations for tough concepts. Generate practice tests.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Label htmlFor="guest-notes" className="text-sm font-semibold">
                      Try it now - Paste your notes:
                    </Label>
                    <Textarea
                      id="guest-notes"
                      placeholder="e.g., The Krebs cycle is a series of chemical reactions..."
                      value={guestNotes}
                      onChange={(e) => setGuestNotes(e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                    <Button
                      onClick={handleGuestGenerate}
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-purple-500 transition-all duration-300"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                      )}
                      {user ? 'Create My Deck!' : 'Generate (Login Required)'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Flashcards Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.03, rotateY: -5 }}
              >
                <Card className="h-full border-2 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl group">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-primary flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300"
                    >
                      <BookCopy className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold">Flashcards & Imports</CardTitle>
                    <CardDescription>
                      Your central hub for all study materials.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { icon: Sparkles, text: 'Create decks from scratch', available: true },
                      { icon: BookCopy, text: 'Import from Text or CSV', available: true },
                      { logo: '/images/logo/quizlet.webp', text: 'Import from Quizlet', available: false },
                      { logo: '/images/logo/knowt.png', text: 'Import from Knowt', available: false },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className={cn(
                          'flex items-center gap-3 p-2 rounded-lg transition-colors',
                          item.available ? 'hover:bg-primary/5' : 'opacity-50'
                        )}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: item.available ? 1 : 0.5, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.icon ? (
                          <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <Image
                            src={item.logo!}
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5 flex-shrink-0"
                          />
                        )}
                        <span className="text-sm font-medium">
                          {item.text} {!item.available && '(Soon)'}
                        </span>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </ParallaxText>
      </section>

      {/* By The Numbers - Animated Stats */}
      <section className="py-24 px-4 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #7c3aed 1px, transparent 1px), linear-gradient(to bottom, #7c3aed 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                By The Numbers
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Our impact speaks for itself</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '5000+', label: 'Active Students', icon: Users, color: 'from-blue-500 to-cyan-500' },
              { value: '100K+', label: 'Flashcards Created', icon: BookCopy, color: 'from-purple-500 to-pink-500' },
              { value: '95%', label: 'Pass Rate', icon: Trophy, color: 'from-green-500 to-emerald-500' },
              { value: '4.9★', label: 'Average Rating', icon: Sparkles, color: 'from-yellow-500 to-orange-500' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-40`}
                  animate={{
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur relative">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="mb-4 inline-block"
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                    >
                      <div className={`p-4 rounded-full bg-gradient-to-br ${stat.color} inline-block shadow-lg`}>
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>
                    <h3 className={`text-4xl sm:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                      {stat.value}
                    </h3>
                    <p className="text-sm text-muted-foreground font-semibold">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-24 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Get started in 3 simple steps</p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 hidden lg:block" />

            <div className="space-y-16">
              {[
                {
                  step: '01',
                  title: 'Sign Up & Customize',
                  description: 'Create your free account and personalize your dashboard with themes, colors, and widgets. Make it yours!',
                  icon: LayoutDashboard,
                  side: 'left',
                },
                {
                  step: '02',
                  title: 'Create or Import',
                  description: 'Upload your notes and let our AI generate flashcards instantly, or create them manually with our easy-to-use editor.',
                  icon: Sparkles,
                  side: 'right',
                },
                {
                  step: '03',
                  title: 'Study & Ace',
                  description: 'Use our proven study modes like Deep Dive, Matching, and Practice Tests to master your material and crush your exams.',
                  icon: Trophy,
                  side: 'left',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-8 ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`flex-1 ${item.side === 'right' ? 'lg:text-right' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <Card className="border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur">
                        <CardContent className="p-8">
                          <div className="text-6xl font-black text-primary/20 mb-4">{item.step}</div>
                          <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                            <item.icon className="h-6 w-6 text-primary" />
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <motion.div
                    className="hidden lg:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg" />
                  </motion.div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories - Before/After */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                Real Results
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">See how students transformed their grades</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Martinez', subject: 'AP Biology', before: '72%', after: '94%', improvement: '+22%', course: 'AP Bio' },
              { name: 'Jake Thompson', subject: 'AP Calculus BC', before: '68%', after: '91%', improvement: '+23%', course: 'AP Calc' },
              { name: 'Maya Patel', subject: 'AP US History', before: '75%', after: '96%', improvement: '+21%', course: 'APUSH' },
              { name: 'Chris Anderson', subject: 'AP Chemistry', before: '65%', after: '89%', improvement: '+24%', course: 'AP Chem' },
              { name: 'Emma Williams', subject: 'AP English Lang', before: '78%', after: '95%', improvement: '+17%', course: 'AP Lang' },
              { name: 'David Chen', subject: 'AP Physics', before: '70%', after: '92%', improvement: '+22%', course: 'AP Physics' },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden group bg-card/80 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="font-bold text-lg">{story.name}</h4>
                        <p className="text-sm text-muted-foreground">{story.subject}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold">
                        {story.improvement}
                      </span>
                    </div>

                    <div className="flex items-center justify-around mb-4">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-2">Before</p>
                        <div className="text-3xl font-black text-red-400">{story.before}</div>
                      </div>
                      <ArrowRight className="h-8 w-8 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-2">After</p>
                        <div className="text-3xl font-black text-green-400">
                          {story.after}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground text-center">
                        Used Studizilla for <span className="text-primary font-semibold">{story.course}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-4">Join them on their success journey</p>
            <MagneticButton href="/auth" variant="default" size="lg">
              Start Your Transformation
              <TrendingUp className="ml-2 h-5 w-5" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* AI-Powered Features Showcase */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                Powered by AI
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Next-gen study tools at your fingertips</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Smart Flashcard Generation',
                description: 'Upload any notes and watch our AI instantly create comprehensive flashcards with key terms, definitions, and concepts.',
                features: ['Understands context', 'Extracts key concepts', 'Generates in seconds'],
                icon: Sparkles,
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Intelligent Grading',
                description: 'Our AI understands typos and spelling variations, so you can focus on learning concepts rather than perfect spelling.',
                features: ['Typo detection', 'Context-aware', 'Fair assessment'],
                icon: Brain,
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Practice Test Creator',
                description: 'Generate full-length practice exams tailored to your course material, complete with multiple choice, short answer, and essay questions.',
                features: ['Course-specific', 'Multiple formats', 'Instant feedback'],
                icon: AlertTriangle,
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Essay Grader',
                description: 'Get instant, rubric-aligned feedback on your practice essays. Improve your writing before the real exam.',
                features: ['Rubric-based', 'Detailed feedback', 'Improvement tips'],
                icon: Zap,
                gradient: 'from-yellow-500 to-orange-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {feature.features.map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeatureComparison />

      {/* Why Choose Studizilla - Interactive Comparison */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                Why Choose Studizilla?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">We're different from the rest</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Traditional Study Apps',
                icon: X,
                color: 'from-red-500 to-orange-500',
                features: [
                  { text: 'Generic flashcards', available: false },
                  { text: 'Basic study modes', available: false },
                  { text: 'No customization', available: false },
                  { text: 'Hidden behind paywall', available: false },
                  { text: 'No AI assistance', available: false },
                ],
              },
              {
                title: 'Studizilla',
                icon: Trophy,
                color: 'from-primary to-pink-500',
                highlight: true,
                features: [
                  { text: 'AP & Honors specific', available: true },
                  { text: 'Advanced study modes', available: true },
                  { text: 'Full customization', available: true },
                  { text: '100% free core features', available: true },
                  { text: 'AI-powered everything', available: true },
                ],
              },
              {
                title: 'Old School Methods',
                icon: X,
                color: 'from-gray-500 to-gray-600',
                features: [
                  { text: 'Paper flashcards', available: false },
                  { text: 'Time-consuming', available: false },
                  { text: 'No analytics', available: false },
                  { text: 'Easy to lose', available: false },
                  { text: 'No smart grading', available: false },
                ],
              },
            ].map((column, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: column.highlight ? 0.95 : 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: column.highlight ? 1.05 : 1.02, y: column.highlight ? -10 : -5 }}
                className="relative"
              >
                {column.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl blur opacity-60" />
                )}
                <Card className={`h-full relative ${column.highlight ? 'border-4 border-primary' : 'border-2'} transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${column.color} mb-4`}>
                        <column.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className={`text-2xl font-black ${column.highlight ? 'bg-clip-text text-transparent bg-gradient-to-r ' + column.color : ''}`}>
                        {column.title}
                      </h3>
                      {column.highlight && (
                        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-pink-500 text-white text-xs font-bold">
                          RECOMMENDED
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      {column.features.map((feature, fIndex) => (
                        <motion.div
                          key={fIndex}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                        >
                          {feature.available ? (
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.1 + fIndex * 0.05 + 0.2, type: "spring" }}
                              >
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.div>
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                              <X className="w-4 h-4 text-red-500" />
                            </div>
                          )}
                          <span className={`text-sm ${feature.available ? 'text-foreground font-medium' : 'text-muted-foreground line-through'}`}>
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <MagneticButton href="/auth" variant="default" size="lg">
              Join The Winning Side
              <Trophy className="ml-2 h-5 w-5" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                5,000+ Students
              </span>
              <br />
              Trust Studizilla
            </h2>
            <p className="text-xl text-muted-foreground">Swipe to see what they're saying...</p>
          </motion.div>

          <TestimonialCarousel testimonials={shuffledTestimonials.slice(0, 10)} />

          {/* Additional Reviews Grid */}
          <motion.div
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {shuffledTestimonials.slice(10, 16).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      {testimonial.image ? (
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary/10 p-2 flex-shrink-0">
                          <AceMascot className="w-full h-full" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold truncate">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground truncate">{testimonial.location}</p>
                        <div className="flex text-yellow-400 gap-0.5 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn('h-3 w-3', i < testimonial.stars ? 'fill-current' : '')}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <h5 className="font-semibold text-sm mb-2 line-clamp-1">{testimonial.title}</h5>
                    <p className="text-sm text-muted-foreground line-clamp-3">{testimonial.text}</p>
                    {(testimonial.isOG || testimonial.isMostImproved || testimonial.specialTag) && (
                      <div className="flex gap-1 mt-3 flex-wrap">
                        {testimonial.isOG && (
                          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold">
                            OG
                          </span>
                        )}
                        {testimonial.isMostImproved && (
                          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold">
                            Most Improved
                          </span>
                        )}
                        {testimonial.specialTag && (
                          <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold truncate max-w-[150px]">
                            {testimonial.specialTag}
                          </span>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <StudizillaCalculator />

      <FaqSection />

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10" />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(124,58,237,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-8"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Trophy className="h-20 w-20 text-primary" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Ready to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              Ace Your Exams?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have boosted their scores with Studizilla. Start your journey to academic excellence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton href="/auth" variant="default" size="lg">
              Get Started Free
              <Rocket className="ml-2 h-5 w-5" />
            </MagneticButton>
            <MagneticButton href="/classes" variant="outline" size="lg">
              Explore Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </MagneticButton>
          </div>
          <motion.p
            className="mt-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            No credit card required • Free forever
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}

    