
'use client';

import React, { useState, useEffect, useCallback, Suspense, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Timer, Check, X, Award, LogOut, ArrowLeft, ArrowRight, BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { gradeFrqAction } from '@/app/tools/practice-test/actions';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { BluebookPlayer } from './BluebookPlayer';
import { AcePlayer } from './AcePlayer';

export type Question = {
  type: 'mcq' | 'tf' | 'frq';
  originalCardId: string;
  questionText: string;
  options?: string[];
  correctAnswer?: string | boolean;
  modelAnswer?: string;
};

export type Test = {
  id: string;
  deckTitle: string;
  questions: Question[];
};

export type UserAnswers = { [questionIndex: number]: string | boolean };
export type FRQGradingResult = { score: number; feedback: string };
export type GradingResults = { 
    mcq: { correct: number, total: number };
    tf: { correct: number, total: number };
    frq: { score: number, maxScore: number, results: FRQGradingResult[] };
};

function TestResultContent() {
    const { user, isLoading: isAuthLoading } = useAuth();
    const searchParams = useSearchParams();
    const router = useRouter();
    const { toast } = useToast();

    const [test, setTest] = useState<Test | null>(null);
    const [isLoadingTest, setIsLoadingTest] = useState(true);
    const [isGrading, setIsGrading] = useState(false);
    const [results, setResults] = useState<GradingResults | null>(null);

    const testStyle = searchParams.get('style') || 'scroll';
    const gradingStyle = searchParams.get('grading') || 'at-end';
    const isCalculatorEnabled = searchParams.get('calculator') === 'true';
    const isBrowserLockEnabled = searchParams.get('lock') === 'true';
    const initialTime = parseInt(searchParams.get('time') || '0', 10);

    useEffect(() => {
        const testId = searchParams.get('id');
        if (!testId || !user) {
            if (!isAuthLoading && !user) router.push('/auth');
            return;
        }

        const fetchTest = async () => {
            const testDocRef = doc(db, 'practiceTests', testId);
            const testDoc = await getDoc(testDocRef);

            if (testDoc.exists() && testDoc.data().userId === user.uid) {
                setTest({ id: testDoc.id, ...testDoc.data() } as Test);
            } else {
                toast({ variant: 'destructive', title: 'Test not found or access denied.' });
                router.push('/tools/practice-test');
            }
            setIsLoadingTest(false);
        };
        fetchTest();
    }, [user, searchParams, router, toast, isAuthLoading]);

    const handleFinishTest = async (answers: UserAnswers) => {
        if (!test) return;
        setIsGrading(true);

        let mcqCorrect = 0, tfCorrect = 0;
        const mcqQuestions = test.questions.filter(q => q.type === 'mcq');
        const tfQuestions = test.questions.filter(q => q.type === 'tf');
        
        test.questions.forEach((q, i) => {
            if (q.type === 'mcq' && q.correctAnswer === answers[i]) mcqCorrect++;
            if (q.type === 'tf' && q.correctAnswer === answers[i]) tfCorrect++;
        });

        const frqQuestions = test.questions.filter(q => q.type === 'frq');
        const frqAnswers = test.questions.map((q, i) => q.type === 'frq' ? answers[i] : null).filter(a => a !== null) as string[];
        let frqTotalScore = 0;
        const frqResults: FRQGradingResult[] = [];

        for (let i = 0; i < frqQuestions.length; i++) {
            const question = frqQuestions[i];
            const answer = frqAnswers[i];
            if (question.modelAnswer && answer) {
                try {
                    const grade = await gradeFrqAction({
                        question: question.questionText,
                        modelAnswer: question.modelAnswer,
                        maxScore: 5,
                        userAnswer: answer
                    });
                    frqTotalScore += grade.score;
                    frqResults.push(grade);
                } catch (e) {
                    console.error("FRQ grading failed for one question:", e);
                    frqResults.push({ score: 0, feedback: "AI grader was unable to process this response." });
                }
            } else {
                 frqResults.push({ score: 0, feedback: "No answer provided or model answer missing." });
            }
        }

        const finalResults: GradingResults = {
            mcq: { correct: mcqCorrect, total: mcqQuestions.length },
            tf: { correct: tfCorrect, total: tfQuestions.length },
            frq: { score: frqTotalScore, maxScore: frqQuestions.length * 5, results: frqResults },
        };
        
        setResults(finalResults);
        setIsGrading(false);

        await updateDoc(doc(db, 'practiceTests', test.id), {
            status: 'completed',
            userAnswers: answers,
            results: finalResults
        });
    };
    
    if (isLoadingTest || isAuthLoading) {
        return <div className="flex h-screen items-center justify-center"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>;
    }

    if (isGrading) {
         return (
             <div className="flex flex-col items-center justify-center text-center h-screen">
                <BrainCircuit className="h-16 w-16 text-primary mb-4 animate-pulse" />
                <h3 className="font-headline text-2xl font-bold">Grading in Progress...</h3>
                <p className="mt-2 max-w-md text-muted-foreground">The AI is reviewing your free response answers. This may take a moment.</p>
            </div>
         );
    }

    if (results && test) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="w-full max-w-4xl mx-auto">
                    <CardHeader className="text-center">
                        <Award className="h-16 w-16 mx-auto text-yellow-500" />
                        <CardTitle className="font-headline text-3xl">Test Complete!</CardTitle>
                        <CardDescription>Here's a summary of your performance on "{test.deckTitle}".</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <Card><CardHeader><CardTitle>{results.mcq.correct}/{results.mcq.total}</CardTitle><CardDescription>Multiple Choice</CardDescription></CardHeader></Card>
                            <Card><CardHeader><CardTitle>{results.tf.correct}/{results.tf.total}</CardTitle><CardDescription>True/False</CardDescription></CardHeader></Card>
                            <Card><CardHeader><CardTitle>{results.frq.score}/{results.frq.maxScore}</CardTitle><CardDescription>Free Response</CardDescription></CardHeader></Card>
                        </div>
                        {results.frq.results.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Free Response Feedback</h3>
                                <div className="space-y-4">
                                    {test.questions.filter(q => q.type === 'frq').map((q, i) => (
                                        <Card key={i} className="bg-secondary/50">
                                            <CardHeader><CardTitle className="text-base">{q.questionText}</CardTitle></CardHeader>
                                            <CardContent>
                                                <p className="text-sm font-semibold">Score: {results.frq.results[i]?.score || 0}/5</p>
                                                <p className="text-sm mt-2"><strong className="text-primary">AI Feedback:</strong> {results.frq.results[i]?.feedback || "N/A"}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="mx-auto"><Link href="/tools/practice-test">Create Another Test</Link></Button>
                    </CardFooter>
                </Card>
            </div>
        )
    }

    if (test) {
        if (testStyle === 'single') {
             return <BluebookPlayer test={test} onFinish={handleFinishTest} isCalculatorEnabled={isCalculatorEnabled} browserLockEnabled={isBrowserLockEnabled} initialTime={initialTime} />;
        }
        return <AcePlayer test={test} onFinish={handleFinishTest} gradingStyle={gradingStyle} browserLockEnabled={isBrowserLockEnabled} />;
    }
    
    return null;
}

export default function ResultsPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>}>
      <TestResultContent />
    </Suspense>
  );
}
