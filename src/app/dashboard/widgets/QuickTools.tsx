'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BrainCircuit, BookCheck, TestTube, Languages, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { generateDeckFromPromptAction } from '@/app/app/ai/actions';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp, doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { courses } from '@/lib/courses';
import { Input } from '@/components/ui/input';

const tools = [
  {
    icon: BrainCircuit,
    title: 'Notes-to-Flashcards',
    description: 'Generate a deck from notes with AI.',
    href: '/resources?tab=flashcards',
    status: 'active',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: BookCheck,
    title: 'AI Essay Grader',
    description: 'Get instant feedback on practice essays.',
    href: '/tools/essay-grader',
    status: 'soon',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: TestTube,
    title: 'Practice Test Generator',
    description: 'Create quizzes from your study materials.',
    href: '/tools/practice-test',
    status: 'soon',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Languages,
    title: 'Explain This!',
    description: 'Get simple explanations for complex topics.',
    href: '/tools/explain-this',
    status: 'soon',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function QuickTools() {
  const [isNotesDialogOpen, setIsNotesDialogOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [cardCount, setCardCount] = useState(15);
  const [difficulty, setDifficulty] = useState('medium');  const [courseId, setCourseId] = useState('general');
  const [courseSearch, setCourseSearch] = useState('');  const [isGenerating, setIsGenerating] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  const handleGenerate = async () => {
    if (notes.trim().length < 20) {
      alert('Please provide at least 20 characters of notes.');
      return;
    }

    if (!user) {
      router.push('/auth');
      return;
    }

    setIsGenerating(true);
    
    try {
      // Check rate limit
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      const userData = userDoc.data();
      
      const DAILY_LIMIT = 10;
      const today = new Date();
      const lastGenDate = userData?.lastAIGeneration?.toDate();
      const count = userData?.aiGenerationCount || 0;
      
      if (lastGenDate && lastGenDate.toDateString() === today.toDateString() && count >= DAILY_LIMIT) {
        alert(`You've reached the daily limit of ${DAILY_LIMIT} AI generations. Please try again tomorrow.`);
        setIsGenerating(false);
        return;
      }
      
      // Build the prompt with settings
      const selectedCourse = courses.find(c => c.id === courseId);
      const courseInfo = courseId === 'general' ? 'General' : selectedCourse?.name || 'General';
      
      const prompt = `Generate ${cardCount} concise and easy to memorize flashcards from the following notes. Difficulty level: ${difficulty}. Course: ${courseInfo}.

IMPORTANT: Keep the deck description to ONE concise sentence (maximum 15 words).

Notes:
${notes}`;

      // Call the AI generation function
      const aiResponse = await generateDeckFromPromptAction({ prompt });
      
      // Create deck in Firestore
      const decksCollectionRef = collection(db, 'courseDecks');
      
      const cardsForFirestore = aiResponse.cards.map(card => ({
        id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        term: card.term,
        definition: card.definition,
        hint: '',
        options: [],
        cardType: 'term-definition',
      }));
      
      const newDeckRef = await addDoc(decksCollectionRef, {
        title: aiResponse.title,
        description: aiResponse.description,
        hashtags: aiResponse.hashtags.join(' '),
        courseId: courseId,
        cards: cardsForFirestore,
        status: 'draft',
        isPublic: true,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        isPinned: false,
        ownerId: user.uid,
        ownerName: user.displayName || 'Anonymous',
        ownerPhotoURL: user.photoURL || null,
        ownerUsername: userData?.username || 'anonymous',
        generatedBy: 'ai-prompt',
      });
      
      // Update rate limit
      const isSameDay = lastGenDate && lastGenDate.toDateString() === today.toDateString();
      await updateDoc(userDocRef, {
        lastAIGeneration: Timestamp.now(),
        aiGenerationCount: isSameDay ? increment(1) : 1,
      });
      
      // Close dialog and redirect to the deck study page
      setIsNotesDialogOpen(false);
      router.push(`/resources/flashcards/study/${newDeckRef.id}`);
    } catch (error: any) {
      console.error('Error generating flashcards:', error);
      alert(error.message || 'An error occurred while generating flashcards. Please try again.');
      setIsGenerating(false);
    }
  };

  const handleToolClick = (e: React.MouseEvent, toolTitle: string, href: string) => {
    if (toolTitle === 'Notes-to-Flashcards') {
      e.preventDefault();
      setIsNotesDialogOpen(true);
    }
  };

  return (
    <>
      <Card className="h-full flex flex-col">
      <CardHeader className="pl-10">
        <CardTitle className="font-headline">Quick Launch Tools</CardTitle>
        <CardDescription>Jump right into our most popular study tools</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 min-h-0">
        <ScrollArea className="h-full pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const isActive = tool.status === 'active';

              return (
                <div
                  key={tool.title}
                  onClick={(e) => handleToolClick(e, tool.title, tool.href)}
                  className={cn(
                    'group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-200',
                    isActive ? 'hover:shadow-lg hover:border-primary cursor-pointer' : 'opacity-60 cursor-not-allowed'
                  )}
                >
                  <div className="relative z-10">
                    <div className={cn(
                      'inline-flex p-3 rounded-lg mb-4 bg-gradient-to-br',
                      tool.gradient
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className={cn(
                      'font-bold text-base mb-2 transition-colors',
                      isActive && 'group-hover:text-primary'
                    )}>
                      {tool.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {tool.description}
                    </p>
                    {tool.status === 'soon' && (
                      <span className="inline-block text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400">
                        Coming Soon
                      </span>
                    )}
                    {isActive && (
                      <div className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Launch</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>

    <Dialog open={isNotesDialogOpen} onOpenChange={setIsNotesDialogOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Generate Flashcards from Notes</DialogTitle>
          <DialogDescription>
            Paste your notes below and customize the settings to generate flashcards.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="notes">Your Notes</Label>
            <Textarea
              id="notes"
              placeholder="Paste your lecture notes, textbook excerpts, or any study material here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[200px] resize-none"
            />
            <p className="text-sm text-muted-foreground">
              {notes.length} characters (minimum 20)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardCount">Number of Cards: {cardCount}</Label>
            <Slider
              id="cardCount"
              min={5}
              max={50}
              step={5}
              value={[cardCount]}
              onValueChange={(value) => setCardCount(value[0])}
              className="w-full"
            />
            <p className="text-sm text-muted-foreground">
              AI will generate approximately {cardCount} flashcards from your notes
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty Level</Label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger id="difficulty">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy - Basic definitions and key terms</SelectItem>
                <SelectItem value="medium">Medium - Balanced mix of concepts</SelectItem>
                <SelectItem value="hard">Hard - Advanced analysis and connections</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="course">Course Category *</Label>
            <Input
              placeholder="Search courses..."
              value={courseSearch}
              onChange={(e) => setCourseSearch(e.target.value)}
              className="mb-2"
            />
            <Select value={courseId} onValueChange={setCourseId}>
              <SelectTrigger id="course">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[300px]">
                <SelectItem value="general">General</SelectItem>
                {courses
                  .filter(course => 
                    !courseSearch || 
                    course.name.toLowerCase().includes(courseSearch.toLowerCase()) ||
                    course.subject.toLowerCase().includes(courseSearch.toLowerCase())
                  )
                  .map(course => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.name}
                    </SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Every deck must be assigned to a course category
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsNotesDialogOpen(false)}
              className="flex-1"
              disabled={isGenerating}
            >
              Cancel
            </Button>
            <Button
              onClick={handleGenerate}
              disabled={notes.trim().length < 20 || isGenerating}
              className="flex-1"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Flashcards'
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
}
