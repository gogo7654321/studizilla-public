
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Timer, Check, X, Award, LogOut, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MathRenderer } from '@/components/MathRenderer';
import { gradeFrqAction } from '@/app/tools/practice-test/actions';
import type { Test, UserAnswers, GradingResults } from './page';

type AcePlayerProps = {
  test: Test;
  onFinish: (answers: UserAnswers) => void;
  gradingStyle: string;
  browserLockEnabled: boolean;
};

const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (num: number) => String(num).padStart(2, '0');
    if (hours > 0) return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    return `${pad(minutes)}:${pad(seconds)}`;
};

export function AcePlayer({ test, onFinish, gradingStyle, browserLockEnabled }: AcePlayerProps) {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // State for "Grade as you go"
  const [gradedAnswers, setGradedAnswers] = useState<Record<number, boolean | null>>({});
  const [frqGrades, setFrqGrades] = useState<Record<number, { score: number; feedback: string; }>>({});
  const [isGradingFrq, setIsGradingFrq] = useState<number | null>(null);
  const isGradeAsYouGo = gradingStyle === 'as-you-go';

  // Browser Lock State
  const [isLocked, setIsLocked] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  
  const resetCountdown = useCallback(() => {
    if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
    }
    setCountdown(3);
    setIsWarningVisible(false);
  }, []);

  useEffect(() => {
    if (browserLockEnabled) {
      document.documentElement.requestFullscreen().catch(console.error);
    }
    
    timerRef.current = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (document.fullscreenElement) document.exitFullscreen();
    };
  }, [browserLockEnabled]);
  
  useEffect(() => {
    if (!browserLockEnabled || isLocked) return;
    
    const handleVisibilityChange = () => {
        if (document.hidden && !isWarningVisible) {
            setIsWarningVisible(true);
            countdownRef.current = setInterval(() => setCountdown(c => c - 1), 1000);
        } else {
            resetCountdown();
        }
    };
    
    const handleMouseLeave = () => {
        if (!isWarningVisible) {
            setIsWarningVisible(true);
            countdownRef.current = setInterval(() => setCountdown(c => c - 1), 1000);
        }
    };
    
    const handleMouseEnter = () => resetCountdown();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        resetCountdown();
    };
  }, [browserLockEnabled, isLocked, isWarningVisible, resetCountdown]);
  
  useEffect(() => {
    if (countdown <= 0) {
      resetCountdown();
      setIsLocked(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [countdown, resetCountdown]);

  const handleAnswerChange = (questionIndex: number, value: string | boolean) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
    if (isGradeAsYouGo) {
        const question = test.questions[questionIndex];
        if (question.type === 'mcq' || question.type === 'tf') {
            setGradedAnswers(prev => ({ ...prev, [questionIndex]: value === question.correctAnswer }));
        }
    }
  };

  const handleGradeFrq = async (questionIndex: number) => {
    if (!isGradeAsYouGo) return;
    const question = test.questions[questionIndex];
    const answer = answers[questionIndex];
    if (question.type !== 'frq' || !answer || typeof answer !== 'string') return;
    
    setIsGradingFrq(questionIndex);
    try {
      const grade = await gradeFrqAction({
        question: question.questionText,
        modelAnswer: question.modelAnswer || 'N/A',
        maxScore: 5,
        userAnswer: answer,
      });
      setFrqGrades(prev => ({ ...prev, [questionIndex]: grade }));
    } catch(e) {
      console.error("Error grading FRQ:", e);
      setFrqGrades(prev => ({ ...prev, [questionIndex]: { score: 0, feedback: "AI grader failed to respond." } }));
    } finally {
      setIsGradingFrq(null);
    }
  };

  const handleSubmit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    onFinish(answers);
  };
  
  return (
    <div className="space-y-8 p-4 md:p-6 bg-background min-h-screen flex flex-col">
      <Card className="sticky top-4 z-20 bg-card/80 backdrop-blur-sm">
        <CardHeader>
             <CardTitle>{test.deckTitle}</CardTitle>
             <CardDescription>Complete all questions below and submit when you're finished.</CardDescription>
        </CardHeader>
        <CardContent className="p-4 flex items-center justify-between">
            <Button variant="ghost" onClick={() => window.history.back()}><LogOut className="mr-2 h-4 w-4 -scale-x-100" /> Exit Test</Button>
            <div className="flex items-center gap-2">
                <Timer className="h-6 w-6 text-primary" />
                <span className="text-xl font-mono font-semibold">{formatTime(elapsedTime)}</span>
            </div>
            <Button onClick={handleSubmit} disabled={isLocked}>
                Submit Test
            </Button>
        </CardContent>
      </Card>
      
        {isWarningVisible && !isLocked && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
                <Card className="w-full max-w-lg text-center shadow-2xl p-8">
                    <CardHeader>
                        <ShieldAlert className="h-16 w-16 text-destructive mx-auto" />
                        <CardTitle className="text-2xl mt-4">Leaving Test Window</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">You have left the testing window. To avoid having your test locked, please return now.</p>
                        <p className="text-6xl font-mono font-bold text-destructive my-4">{countdown}</p>
                    </CardContent>
                </Card>
            </div>
        )}

       {isLocked && (
            <div className="fixed inset-0 bg-background/90 z-50 flex items-center justify-center">
                <Card className="w-full max-w-lg text-center shadow-2xl p-8">
                    <CardHeader>
                        <ShieldAlert className="h-16 w-16 text-destructive mx-auto" />
                        <CardTitle className="text-2xl mt-4">Test Locked</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">You left the focus window for too long. Your test has been locked.</p>
                        <Button size="lg" onClick={() => window.history.back()} variant="destructive">Exit Test</Button>
                    </CardContent>
                </Card>
            </div>
      )}
      
      <div className="space-y-6 flex-1">
        {test.questions.map((q, index) => {
            const isGraded = gradedAnswers[index] !== undefined || frqGrades[index] !== undefined;
            const isCorrect = gradedAnswers[index] === true || (frqGrades[index] && frqGrades[index].score > 2);
            return (
              <Card key={index} className={cn(isGradeAsYouGo && isGraded && (isCorrect ? 'border-green-500' : 'border-red-500'))}>
                <CardHeader>
                  <p className="font-semibold">Question {index + 1}</p>
                   <div className="prose dark:prose-invert max-w-none">
                     <MathRenderer content={q.questionText} />
                   </div>
                </CardHeader>
                <CardContent>
                  {q.type === 'mcq' && (
                    <RadioGroup onValueChange={(val) => handleAnswerChange(index, val)} disabled={isLocked || isGraded}>
                      {q.options?.map((option, optIndex) => (
                        <div key={optIndex} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={`${index}-${optIndex}`} />
                          <Label htmlFor={`${index}-${optIndex}`} className="font-normal flex items-center gap-2">
                            <MathRenderer content={option} />
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                   {q.type === 'tf' && (
                    <RadioGroup onValueChange={(val) => handleAnswerChange(index, val === 'true')} disabled={isLocked || isGraded}>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="true" id={`q-${index}-true`} /><Label htmlFor={`q-${index}-true`}>True</Label></div>
                        <div className="flex items-center space-x-2"><RadioGroupItem value="false" id={`q-${index}-false`} /><Label htmlFor={`q-${index}-false`}>False</Label></div>
                    </RadioGroup>
                  )}
                  {q.type === 'frq' && (
                    <div className="space-y-2">
                        <Textarea
                            placeholder="Type your detailed answer here..."
                            rows={8}
                            onChange={(e) => handleAnswerChange(index, e.target.value)}
                            disabled={isLocked || isGraded}
                            value={(answers[index] as string) || ''}
                        />
                        {isGradeAsYouGo && !isGraded && (
                            <Button onClick={() => handleGradeFrq(index)} disabled={isGradingFrq === index}>
                                {isGradingFrq === index && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                                Grade Answer
                            </Button>
                        )}
                    </div>
                  )}
                </CardContent>
                 {isGradeAsYouGo && isGraded && (
                    <CardContent>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>View Explanation & Results</AccordionTrigger>
                          <AccordionContent className="space-y-4">
                            {(q.type === 'mcq' || q.type === 'tf') && (
                                <>
                                 <p><strong>Your Answer:</strong> {String(answers[index] ?? "Not Answered")}</p>
                                 <p><strong>Correct Answer:</strong> {String(q.correctAnswer)}</p>
                                </>
                            )}
                            {q.type === 'frq' && frqGrades[index] && (
                                <Alert variant={frqGrades[index].score > 2 ? 'default' : 'destructive'} className={cn(frqGrades[index].score > 2 ? 'bg-green-500/10 border-green-500/30' : '')}>
                                    <AlertTitle>AI Grader Feedback (Score: {frqGrades[index].score}/5)</AlertTitle>
                                    <AlertDescription>{frqGrades[index].feedback}</AlertDescription>
                                </Alert>
                            )}
                             {q.modelAnswer && (
                                <Alert variant="default" className="bg-secondary/50">
                                    <AlertTitle>Model Answer</AlertTitle>
                                    <AlertDescription>
                                        <div className="prose prose-sm dark:prose-invert max-w-none">
                                            <MathRenderer content={q.modelAnswer} />
                                        </div>
                                    </AlertDescription>
                                </Alert>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                 )}
              </Card>
            )
        })}
      </div>
    </div>
  );
}

    