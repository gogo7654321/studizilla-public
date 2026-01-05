
'use client';

import React, { useState, useMemo } from 'react';
import { useStudyDeck } from '../layout';
import { Loader2, CheckCircle2, XCircle, Lightbulb, ArrowRight, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { MathRenderer } from '@/components/MathRenderer';
import { SimilarityScorer } from '@/lib/string-similarity';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';

// This is the new, self-contained Test Player for your video.

type TestResult = 'correct' | 'incorrect' | 'typo';

function FrqTestPlayer() {
  const { deck, isLoading } = useStudyDeck();
  const { user } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState<TestResult | null>(null);
  const [sessionStarted, setSessionStarted] = useState(false);

  const questions = useMemo(() => {
    // For simplicity, we'll just use all cards in their current order.
    // A real implementation might have more settings (shuffle, number of questions, etc.)
    return deck.cards || [];
  }, [deck.cards]);

  const currentQuestion = questions[currentIndex];

  if (isLoading) {
    return <div className="flex h-64 items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>;
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] p-8">
        <Bot className="h-16 w-16 text-primary mb-4" />
        <h3 className="font-headline text-2xl font-bold">Log In to Take Practice Tests</h3>
        <p className="mt-2 max-w-md text-muted-foreground">
          Sign up or log in to access AI-graded practice tests and track your progress.
        </p>
        <Button asChild className="mt-6">
          <Link href="/auth">Log In / Sign Up</Link>
        </Button>
      </div>
    );
  }
  
  if (!sessionStarted) {
    return (
        <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] p-8">
            <Bot className="h-16 w-16 text-primary mb-4" />
            <h3 className="font-headline text-2xl font-bold">Practice Test: Free Response</h3>
            <p className="mt-2 max-w-md text-muted-foreground">
                You will be given the definition and must type the correct term. The Smart Grader will check your answer for accuracy, including typos.
            </p>
            <Button onClick={() => setSessionStarted(true)} className="mt-6">Start Test</Button>
        </div>
    );
  }

  if (!currentQuestion) {
     return (
        <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] p-8">
            <h3 className="font-headline text-2xl font-bold">Test Complete!</h3>
             <Button onClick={() => { setCurrentIndex(0); setSessionStarted(false); }} className="mt-6">Play Again</Button>
        </div>
    );
  }

  const handleSubmit = () => {
    if (result !== null || !userAnswer.trim()) return;

    const scorer = new SimilarityScorer(currentQuestion.term);
    
    if (scorer.isExactMatch(userAnswer)) {
      setResult('correct');
    } else if (scorer.isMatch(userAnswer)) {
      setResult('typo');
    } else {
      setResult('incorrect');
    }
  };

  const handleNext = () => {
    setResult(null);
    setUserAnswer('');
    setCurrentIndex(prev => prev + 1);
  };

  const feedbackConfig = {
    correct: { Icon: CheckCircle2, title: "Correct!", className: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300" },
    typo: { Icon: Lightbulb, title: "Close! You had a small typo.", className: "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300" },
    incorrect: { Icon: XCircle, title: "Incorrect", className: "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300" },
  };

  const currentFeedback = result ? feedbackConfig[result] : null;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <Progress value={((currentIndex + 1) / questions.length) * 100} className="w-full" />
      
      <Card>
        <CardContent className="p-8 text-center text-xl font-semibold">
          <MathRenderer content={currentQuestion.definition} />
        </CardContent>
      </Card>
      
      {result === null ? (
        <div className="space-y-4">
          <Textarea 
            placeholder="Type the term..." 
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            rows={3}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <div className="text-right">
            <Button onClick={handleSubmit} disabled={!userAnswer.trim()}>Check Answer</Button>
          </div>
        </div>
      ) : (
        <Card className={cn("animate-in fade-in duration-300", currentFeedback?.className)}>
          <CardHeader>
            <div className="flex items-center gap-3">
              {currentFeedback && <currentFeedback.Icon className="h-6 w-6" />}
              <CardTitle className="text-xl">{currentFeedback?.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <Label className="text-xs">Correct Answer</Label>
              <div className="rounded-md border bg-background/50 p-2 text-sm">
                <MathRenderer content={currentQuestion.term} />
              </div>
            </div>
            {result === 'typo' && (
              <div className="space-y-1">
                <Label className="text-xs">Your Answer</Label>
                <div className="rounded-md border bg-background/50 p-2 text-sm">
                  <MathRenderer content={userAnswer} />
                </div>
              </div>
            )}
            <div className="flex justify-end pt-2">
              <Button onClick={handleNext}>Continue <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default FrqTestPlayer;
