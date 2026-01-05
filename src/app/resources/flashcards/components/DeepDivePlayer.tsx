
'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import type { Deck, DeckProgress, FlashcardData } from '../study/[deckId]/page';
import type { DeepDiveSettings } from './DeepDiveInitializer';
import { saveDeepDiveHistoryAction, type DeepDiveHistoryEntry } from '../study/[deckId]/actions';
import { Howl } from 'howler';
import { Button } from '@/components/ui/button';
import { Card as UICard, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowRight, ThumbsUp, ThumbsDown, CheckCircle2, XCircle, Lightbulb, BrainCircuit, LogOut, Loader2, Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { MathRenderer } from '@/components/MathRenderer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type QuestionType = 'written' | 'multiple-choice' | 'true-false';

type GeneratedQuestion = {
    type: QuestionType;
    card: FlashcardData;
    mcqOptions?: string[];
    mcqCorrectAnswer?: string;
    tfStatement?: string;
    tfIsCorrect?: boolean;
    isLoading?: boolean;
};

// Main Player Component
export function DeepDivePlayer({ deck, initialProgress, settings, onExit }: { 
    deck: Deck; 
    initialProgress: DeckProgress;
    settings: DeepDiveSettings;
    onExit: () => void;
}) {
    const { user } = useAuth();
    const [questions, setQuestions] = useState<GeneratedQuestion[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardProgress, setCardProgress] = useState<DeckProgress>(initialProgress);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const playerRef = useRef<HTMLDivElement>(null);

    // Session tracking state
    const [sessionStartTime] = useState(Date.now());
    const [sessionCorrectIds, setSessionCorrectIds] = useState<number[]>([]);
    const [sessionIncorrectIds, setSessionIncorrectIds] = useState<number[]>([]);
    const [isSessionComplete, setIsSessionComplete] = useState(false);

    // --- State Initialization & Question Generation ---
    useEffect(() => {
        const generateStaticQuestions = () => {
            setIsLoading(true);
            
            let availableCards = settings.studyStarredOnly
                ? deck.cards.filter(card => initialProgress[card.id]?.starred)
                : [...deck.cards];
            
            if(settings.shuffleTerms) {
                availableCards.sort(() => Math.random() - 0.5);
            }

            const desiredLength = settings.roundLength > 0 ? Math.min(settings.roundLength, availableCards.length) : availableCards.length;
            const finalCardList: FlashcardData[] = availableCards.slice(0, desiredLength);

            // Get active question types
            const activeQuestionTypes = (Object.entries(settings.questionTypes)
                .filter(([, isActive]) => isActive)
                .map(([type]) => type) as QuestionType[]);
            
            // Remove MCQ if not enough cards
            if (finalCardList.length < 4 && activeQuestionTypes.includes('multiple-choice')) {
                const index = activeQuestionTypes.indexOf('multiple-choice');
                if (index > -1) activeQuestionTypes.splice(index, 1);
            }
            // Remove T/F if not enough cards
            if (finalCardList.length < 2 && activeQuestionTypes.includes('true-false')) {
                const index = activeQuestionTypes.indexOf('true-false');
                if (index > -1) activeQuestionTypes.splice(index, 1);
            }

            if (finalCardList.length === 0 || activeQuestionTypes.length === 0) {
                setQuestions([]);
                setIsLoading(false);
                return;
            }
            
            const generatedQuestions: GeneratedQuestion[] = finalCardList.map((card) => {
                // Randomly select question type from ACTIVE types only
                const type = activeQuestionTypes[Math.floor(Math.random() * activeQuestionTypes.length)];
                
                if (type === 'multiple-choice') {
                    const correctAnswer = settings.answerWith === 'term' ? card.term : card.definition;
                    const otherCards = availableCards.filter(c => c.id !== card.id);
                    const distractors = [...otherCards].sort(() => 0.5 - Math.random()).slice(0, 3);
                    const options = [
                        correctAnswer,
                        ...distractors.map(d => settings.answerWith === 'term' ? d.term : d.definition)
                    ].sort(() => Math.random() - 0.5);

                    return { 
                        type: 'multiple-choice',
                        card: card,
                        mcqOptions: options,
                        mcqCorrectAnswer: correctAnswer,
                        isLoading: false,
                    };
                }
                
                if (type === 'true-false') {
                    const isStatementTrue = Math.random() > 0.5;
                    const otherCards = availableCards.filter(c => c.id !== card.id);
                    const randomDistractorCard = otherCards[Math.floor(Math.random() * otherCards.length)];

                    let statementDefinition: string;
                    if (isStatementTrue || !randomDistractorCard) {
                        statementDefinition = card.definition;
                    } else {
                        statementDefinition = randomDistractorCard.definition;
                    }

                    return {
                        type: 'true-false',
                        card: card,
                        tfStatement: `${card.term}: ${statementDefinition}`,
                        tfIsCorrect: isStatementTrue || !randomDistractorCard,
                        isLoading: false,
                    };
                }
                
                // Fallback to written
                return { type: 'written', card, isLoading: false };
            });

            setQuestions(generatedQuestions);
            setIsLoading(false);
        };
        
        generateStaticQuestions();
    }, [deck.cards, initialProgress, settings]);
    
    // --- Handlers ---
    const handleNextQuestion = useCallback(() => {
        if (currentIndex >= questions.length - 1) {
            setIsSessionComplete(true);
        } else {
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, questions.length]);
    
    const updateProgressInDb = useCallback(async (newProgress: DeckProgress) => {
        if (!user || !deck) return;
        const progressDocRef = doc(db, 'users', user.uid, 'deckProgress', deck.id);
        await setDoc(progressDocRef, newProgress, { merge: true });
    }, [user, deck]);
    
    const playSound = useCallback((sound: 'correct' | 'incorrect') => {
        if (settings.audio.soundEffects) {
             const soundEffect = new Howl({
                src: [`/sounds/${sound}.mp3`]
            });
            soundEffect.play();
        }
    }, [settings.audio.soundEffects]);

    const handleMarkProgress = useCallback(async (cardId: number, isCorrect: boolean) => {
        if (isCorrect) {
            setSessionCorrectIds(ids => [...new Set([...ids, cardId])]);
            setSessionIncorrectIds(ids => ids.filter(id => id !== cardId));
            playSound('correct');
        } else {
            setSessionIncorrectIds(ids => [...new Set([...ids, cardId])]);
            setSessionCorrectIds(ids => ids.filter(id => id !== cardId));
            playSound('incorrect');
        }

        if (!user) return; // Don't save progress for guests

        const currentStatus = cardProgress[cardId]?.status || 'new';
        let nextStatus = currentStatus;

        if (isCorrect) {
            switch(currentStatus) {
                case 'new': nextStatus = 'almostDone'; break;
                case 'learning': nextStatus = 'almostDone'; break;
                case 'almostDone': nextStatus = 'mastered'; break;
            }
        } else {
            switch(currentStatus) {
                case 'mastered': nextStatus = 'almostDone'; break;
                default: nextStatus = 'learning'; break;
            }
        }

        const newCardProgress: DeckProgress = {
            ...cardProgress,
            [cardId]: {
                status: nextStatus,
                starred: cardProgress[cardId]?.starred || false,
            },
        };
        setCardProgress(newCardProgress);
        await updateProgressInDb(newCardProgress);
    }, [user, cardProgress, updateProgressInDb, playSound]);

    const handleExitSession = async () => {
        if (user && (sessionCorrectIds.length > 0 || sessionIncorrectIds.length > 0)) {
            const historyEntry: DeepDiveHistoryEntry = {
                date: Date.now(),
                duration: Math.round((Date.now() - sessionStartTime) / 1000),
                roundLength: questions.length,
                correct: sessionCorrectIds.length,
                incorrect: sessionIncorrectIds.length,
                questionTypes: Object.entries(settings.questionTypes).filter(([,v]) => v).map(([k]) => k),
                correctQuestionIds: sessionCorrectIds.map(id => Number(id)),
                incorrectQuestionIds: sessionIncorrectIds.map(id => Number(id)),
            };
            await saveDeepDiveHistoryAction(user.uid, deck.id, historyEntry);
        }
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        onExit();
    };

    const toggleFullscreen = () => {
        if (!playerRef.current) return;
        if (!document.fullscreenElement) {
            playerRef.current.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    };
    
    useEffect(() => {
        const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    if (isLoading) {
        return <div className="flex flex-col justify-center items-center h-64"><Loader2 className="h-8 w-8 animate-spin" /> <p className="mt-2 text-muted-foreground">Generating your Deep Dive session...</p></div>;
    }

    if (isSessionComplete) {
        return (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] p-8">
                <BrainCircuit className="h-16 w-16 text-primary mb-4" />
                <h3 className="font-headline text-2xl font-bold">Round Complete!</h3>
                <p className="mt-2 max-w-md text-muted-foreground">You finished all the questions in this round. Great job!</p>
                <div className="flex gap-4 mt-6">
                    <Button onClick={handleExitSession}>Finish Session</Button>
                    <Button variant="outline" onClick={() => onExit()}>Start New Round</Button>
                </div>
            </div>
        )
    }

    const currentQuestion = questions[currentIndex];
    
    // --- Render Logic ---
    if (questions.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] p-8">
                <h3 className="font-headline text-2xl font-bold">No Cards to Study</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                    This deck doesn't have enough cards to generate the selected question types. Try adding more cards or changing your settings.
                </p>
                <Button onClick={onExit} className="mt-6">Back to Settings</Button>
            </div>
        );
    }

    if (!currentQuestion || currentQuestion.isLoading) {
        return <div className="flex h-64 items-center justify-center"><Loader2 className="h-8 w-8 animate-spin" /> <p className="ml-2">Generating Question...</p></div>
    }

    const renderQuestion = () => {
        const key = `${currentIndex}-${currentQuestion.card.id}`;
        switch (currentQuestion.type) {
            case 'written':
                return <WrittenQuestion key={key} question={currentQuestion} settings={settings} onAnswered={handleMarkProgress} onNext={handleNextQuestion} />;
            case 'multiple-choice':
                return <McqQuestion key={key} question={currentQuestion} settings={settings} onAnswered={handleMarkProgress} onNext={handleNextQuestion} />;
            case 'true-false':
                return <TfQuestion key={key} question={currentQuestion} onAnswered={handleMarkProgress} onNext={handleNextQuestion} />;
            default:
                return <div>Unsupported question type.</div>;
        }
    }
    
    return (
        <div ref={playerRef} className="flex flex-col h-full gap-4 md:gap-6 bg-background">
            <div className="flex justify-between items-center">
                 <Button variant="ghost" size="sm" onClick={toggleFullscreen}>
                    {isFullscreen ? <Minimize className="mr-2 h-4 w-4"/> : <Maximize className="mr-2 h-4 w-4"/>}
                    {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                </Button>
                <Button variant="ghost" size="sm" onClick={handleExitSession}><LogOut className="mr-2 h-4 w-4 -scale-x-100" /> Exit Deep Dive</Button>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center gap-6">{renderQuestion()}</div>
            <div className="flex items-center justify-center">
                <span className="font-medium text-muted-foreground">{currentIndex + 1} / {questions.length}</span>
            </div>
        </div>
    )
}

// --- Question Type Components ---

function WrittenQuestion({ question, settings, onAnswered, onNext }: { question: GeneratedQuestion; settings: DeepDiveSettings; onAnswered: (cardId: number, correct: boolean) => void; onNext: () => void; }) {
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState<'correct' | 'incorrect' | 'typo' | null>(null);

    const correctAnswer = settings.answerWith === 'term' ? question.card.term : question.card.definition;

    const handleSubmit = () => {
        if (result !== null || !answer.trim()) return;

        const isSimilar = smartGrader(answer, correctAnswer);

        if (answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            setResult('correct');
            onAnswered(question.card.id, true);
        } else if (settings.smartGrading && isSimilar) {
            setResult('typo');
            onAnswered(question.card.id, true);
        } else {
            setResult('incorrect');
            onAnswered(question.card.id, false);
        }
    };
    
    const handleOverride = () => {
        setResult('correct');
        onAnswered(question.card.id, true);
    };

    return (
        <div className="w-full max-w-3xl space-y-4">
            <UICard><CardContent className="p-6 text-center text-2xl font-semibold"><MathRenderer content={settings.answerWith === 'term' ? question.card.definition : question.card.term} /></CardContent></UICard>
            
            {result === null ? (
                <>
                    <Textarea 
                        placeholder="Type your answer..." 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)} 
                        rows={3}
                        autoFocus
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit();
                            }
                        }}
                    />
                    <div className="text-right"><Button onClick={handleSubmit} disabled={!answer.trim()}>Check Answer</Button></div>
                </>
            ) : (
                <AnswerFeedback result={result} userAnswer={answer} correctAnswer={correctAnswer} onContinue={onNext} onOverride={handleOverride} allowOverride={settings.allowOverride} />
            )}
        </div>
    );
}

function McqQuestion({ question, settings, onAnswered, onNext }: { question: GeneratedQuestion; settings: DeepDiveSettings; onAnswered: (cardId: number, correct: boolean) => void; onNext: () => void; }) {
    const [selected, setSelected] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        setIsAnswered(false);
        setSelected(null);
    }, [question]);

    const questionText = settings.answerWith === 'term' ? question.card.definition : question.card.term;
    
    const handleSelect = (option: string) => {
        if(isAnswered) return;
        setSelected(option);
        setIsAnswered(true);
        onAnswered(question.card.id, option === question.mcqCorrectAnswer);
        setTimeout(onNext, 1200);
    };
    
    return (
        <div className="w-full max-w-3xl space-y-4">
            <UICard><CardContent className="p-6 text-center text-xl font-semibold"><MathRenderer content={questionText} /></CardContent></UICard>
            <RadioGroup value={selected || ''} onValueChange={handleSelect} className="grid grid-cols-2 gap-4">
                {question.mcqOptions?.map((opt, i) => (
                    <Label key={i} htmlFor={`mcq-opt-${i}`} className={cn(
                        "rounded-lg border p-4 cursor-pointer transition-all",
                        !isAnswered && "hover:border-primary",
                        isAnswered && opt === question.mcqCorrectAnswer && "border-green-500 bg-green-500/10",
                        isAnswered && selected === opt && opt !== question.mcqCorrectAnswer && "border-red-500 bg-red-500/10"
                    )}>
                        <RadioGroupItem value={opt} id={`mcq-opt-${i}`} className="sr-only"/>
                        <MathRenderer content={opt} />
                    </Label>
                ))}
            </RadioGroup>
        </div>
    );
}

function TfQuestion({ question, onAnswered, onNext }: { question: GeneratedQuestion; onAnswered: (cardId: number, correct: boolean) => void; onNext: () => void; }) {
    const [selected, setSelected] = useState<boolean | null>(null);
    
    useEffect(() => {
        setSelected(null);
    }, [question]);

    const handleSelect = (answer: boolean) => {
        if (selected !== null) return;
        setSelected(answer);
        const isCorrect = answer === question.tfIsCorrect;
        onAnswered(question.card.id, isCorrect);
        setTimeout(onNext, 1200);
    };
    
    const getButtonClass = (isTrueButton: boolean) => {
        if (selected === null) return "bg-secondary hover:bg-secondary/80";
        if (isTrueButton === question.tfIsCorrect) {
            return "bg-green-500 hover:bg-green-500 text-white";
        }
        if (isTrueButton === selected && selected !== question.tfIsCorrect) {
            return "bg-destructive hover:bg-destructive text-white";
        }
        return "bg-secondary opacity-50";
    };

    return (
        <div className="w-full max-w-3xl space-y-4 text-center">
            <UICard><CardContent className="p-6 text-xl font-semibold"><MathRenderer content={question.tfStatement || ''} /></CardContent></UICard>
            <div className="grid grid-cols-2 gap-4">
                <Button className={cn("h-24 text-2xl font-bold", getButtonClass(true))} onClick={() => handleSelect(true)} disabled={selected !== null}>True</Button>
                <Button className={cn("h-24 text-2xl font-bold", getButtonClass(false))} onClick={() => handleSelect(false)} disabled={selected !== null}>False</Button>
            </div>
        </div>
    )
}

function AnswerFeedback({ result, userAnswer, correctAnswer, onContinue, onOverride, allowOverride }: { result: 'correct' | 'incorrect' | 'typo' | null; userAnswer: string; correctAnswer: string; onContinue: () => void; onOverride: () => void; allowOverride: boolean; }) {
    const feedbackConfig = {
        correct: { Icon: CheckCircle2, title: "Correct!", className: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300" },
        typo: { Icon: Lightbulb, title: "Close! You had a small typo.", className: "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300" },
        incorrect: { Icon: XCircle, title: "Incorrect", className: "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300" },
    };

    const currentFeedback = result ? feedbackConfig[result] : null;
    if (!currentFeedback) return null;

    return (
        <UICard className={cn("w-full max-w-3xl animate-in fade-in duration-300", currentFeedback.className)}>
            <CardHeader>
                <div className="flex-row items-center gap-3 space-y-0 flex">
                    <currentFeedback.Icon className="h-6 w-6" />
                    <CardTitle className="text-xl">{currentFeedback.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="space-y-1"><Label className="text-xs">Correct Answer</Label><div className="rounded-md border bg-background/50 p-2 text-sm"><MathRenderer content={correctAnswer} /></div></div>
                 {result === 'typo' && <div className="space-y-1"><Label className="text-xs">Your Answer</Label><div className="rounded-md border bg-background/50 p-2 text-sm"><MathRenderer content={userAnswer} /></div></div>}
                <div className="flex justify-between items-center pt-2">
                    {result !== 'correct' && allowOverride && (
                        <Button variant="ghost" size="sm" onClick={onOverride}>Override: I was right</Button>
                    )}
                    <Button onClick={onContinue} className="ml-auto">Continue <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
            </CardContent>
        </UICard>
    )
}

// A new, self-contained implementation of a string similarity checker
function smartGrader(str1: string, str2: string): boolean {
    const a = str1.trim().toLowerCase();
    const b = str2.trim().toLowerCase();

    if (a === b) return true;
    if (a.length === 0 || b.length === 0) return false;

    const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));
    for (let i = 0; i <= a.length; i++) {
        matrix[0][i] = i;
    }
    for (let j = 0; j <= b.length; j++) {
        matrix[j][0] = j;
    }

    for (let j = 1; j <= b.length; j++) {
        for (let i = 1; i <= a.length; i++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[j][i] = Math.min(
                matrix[j][i - 1] + 1, // deletion
                matrix[j - 1][i] + 1, // insertion
                matrix[j - 1][i - 1] + cost // substitution
            );
        }
    }

    const distance = matrix[b.length][a.length];
    const longerLength = Math.max(a.length, b.length);
    const similarity = (longerLength - distance) / longerLength;

    return similarity >= TYPO_THRESHOLD;
}
