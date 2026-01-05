
'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Timer, Check, X, LogOut, ArrowLeft, ArrowRight, ArrowUp, Notebook, Calculator, Menu, ShieldAlert, BookOpen, Keyboard, X as XIcon, Maximize, GripVertical, ZoomIn, ZoomOut, ZoomReset, Flag } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { MathRenderer } from '@/components/MathRenderer';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import type { Test, UserAnswers } from './page';
import { DesmosCalculator } from './DesmosCalculator';
import './bluebook.css';
import { MathQuillInput } from './MathQuillInput';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type BluebookPlayerProps = {
  test: Test;
  onFinish: (answers: UserAnswers) => void;
  browserLockEnabled: boolean;
  initialTime: number; // in seconds
  isCalculatorEnabled: boolean;
};

const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (num: number) => String(num).padStart(2, '0');
    if (hours > 0) return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    return `${pad(minutes)}:${pad(seconds)}`;
};

const Popup = ({ id, title, children, isVisible, onClose }: { id: string, title: string, children: React.ReactNode, isVisible: boolean, onClose: () => void }) => {
    const dragRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (!isVisible || !dragRef.current || !headerRef.current) return;
        
        const el = dragRef.current;
        const header = headerRef.current;
        
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        const dragMouseDown = (e: MouseEvent) => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        };

        const elementDrag = (e: MouseEvent) => {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        };

        const closeDragElement = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        };
        
        header.onmousedown = dragMouseDown;

    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <div id={id} ref={dragRef} className="digitalReview__popup">
            <div id={`${id}Header`} ref={headerRef} className="digitalReview__popupHeader">
                <h3 className="digitalReview__popupHeaderText">{title}</h3>
                <XIcon className="digitalReview__popupHeaderIcon" onClick={onClose} />
            </div>
            {children}
        </div>
    );
}

export function BluebookPlayer({ test, onFinish, browserLockEnabled, initialTime, isCalculatorEnabled }: BluebookPlayerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // New state for features
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [eliminatedOptions, setEliminatedOptions] = useState<Record<number, Set<string>>>({});

  // Popup states
  const [showCalculator, setShowCalculator] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [fontSize, setFontSize] = useState('font-size-base');
  
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
    
    if(initialTime > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if(timerRef.current) clearInterval(timerRef.current);
            onFinish(answers);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (document.fullscreenElement) document.exitFullscreen();
    };
  }, [browserLockEnabled, initialTime, onFinish, answers]);
  
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

  const currentQuestion = test.questions[currentIndex];
  
  const handleNext = () => {
    if (currentIndex < test.questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
    } else {
        onFinish(answers);
    }
  };

  const handleBack = () => {
      if(currentIndex > 0) {
          setCurrentIndex(prev => prev - 1);
      }
  };

  const handleAnswerChange = (questionIndex: number, value: string | boolean) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: value }));
  };

  const toggleFlag = (index: number) => {
    setFlaggedQuestions(prev => {
        const newSet = new Set(prev);
        if (newSet.has(index)) newSet.delete(index);
        else newSet.add(index);
        return newSet;
    });
  };

  const toggleEliminate = (questionIndex: number, option: string) => {
    setEliminatedOptions(prev => {
        const newSet = new Set(prev[questionIndex] || []);
        if (newSet.has(option)) newSet.delete(option);
        else newSet.add(option);
        return { ...prev, [questionIndex]: newSet };
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handleBack();
        if (e.metaKey || e.ctrlKey) {
            if (e.key === 'm') { e.preventDefault(); toggleFlag(currentIndex); }
            const num = parseInt(e.key, 10);
            if (num >= 1 && num <= 4 && currentQuestion.type === 'mcq' && currentQuestion.options) {
                e.preventDefault();
                toggleEliminate(currentIndex, currentQuestion.options[num - 1]);
            }
        } else if (/^[1-4]$/.test(e.key) && currentQuestion.type === 'mcq' && currentQuestion.options) {
            const num = parseInt(e.key, 10);
            handleAnswerChange(currentIndex, currentQuestion.options[num - 1]);
        } else if (/^[a-dA-D]$/.test(e.key) && currentQuestion.type === 'mcq' && currentQuestion.options) {
            const index = e.key.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            handleAnswerChange(currentIndex, currentQuestion.options[index]);
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentQuestion]);

  // Split question text into stimulus and question body for MCQ
  const { stimulus, questionBody } = useMemo(() => {
    if (currentQuestion.type !== 'mcq') {
      return { stimulus: currentQuestion.questionText, questionBody: '' };
    }
    const parts = currentQuestion.questionText.split('___');
    return { stimulus: parts[0] || '', questionBody: parts[1] || '' };
  }, [currentQuestion]);

  return (
    <div className="digitalReviewBox">
      {isWarningVisible && !isLocked && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] flex items-center justify-center">
                <Card className="w-full max-w-lg text-center shadow-2xl p-8 border-yellow-500">
                    <CardHeader>
                        <ShieldAlert className="h-16 w-16 text-yellow-500 mx-auto" />
                        <CardTitle className="text-2xl mt-4">Focus Lost</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">You have left the testing window. To avoid having your session locked, please return now.</p>
                        <p className="text-6xl font-mono font-bold text-destructive my-4">{countdown}</p>
                    </CardContent>
                </Card>
            </div>
        )}
       {isLocked && (
            <div className="fixed inset-0 bg-background/90 z-[100] flex items-center justify-center">
                <Card className="w-full max-w-lg text-center shadow-2xl p-8 border-destructive">
                    <CardHeader>
                        <ShieldAlert className="h-16 w-16 text-destructive mx-auto" />
                        <CardTitle className="text-2xl mt-4">Test Locked</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">You left the focus window for too long. Your test has been locked.</p>
                        <Button size="lg" onClick={() => onFinish(answers)} variant="destructive">End & Submit</Button>
                    </CardContent>
                </Card>
            </div>
      )}
      <div className="digitalReview">
        <div className="digitalReview__header">
            <div className="digitalReview__titleGroup">
                 <h1 className="digitalReview__title">{test.deckTitle}</h1>
            </div>
            <div className="digitalReview__timerGroup">
                <p className="digitalReview__timer">{formatTime(timeLeft)}</p>
                <p className="digitalReview__timerText">{initialTime > 0 ? "Time left" : "Time spent"}</p>
            </div>
            <div className="digitalReview__actionGroup">
                {isCalculatorEnabled && <button className="digitalReview__action" onClick={() => setShowCalculator(prev => !prev)}><Calculator className="digitalReview__actionIcon" /><p className="digitalReview__actionText">Calculator</p></button>}
                <div className="digitalReview__action">
                    <Select value={fontSize} onValueChange={setFontSize}>
                        <SelectTrigger className="border-none h-auto p-0 bg-transparent ring-offset-0 focus:ring-0">
                           <div className="flex items-center">
                             <ZoomIn className="digitalReview__actionIcon" />
                             <p className="digitalReview__actionText">Font Size</p>
                           </div>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="font-size-sm">Small</SelectItem>
                            <SelectItem value="font-size-base">Default</SelectItem>
                            <SelectItem value="font-size-lg">Large</SelectItem>
                            <SelectItem value="font-size-xl">X-Large</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <button className="digitalReview__action" onClick={() => setShowShortcuts(prev => !prev)}><Keyboard className="digitalReview__actionIcon" /><p className="digitalReview__actionText">Shortcuts</p></button>
                 <button className="digitalReview__action" onClick={() => onFinish(answers)}><LogOut className="digitalReview__actionIcon" /><p className="digitalReview__actionText">Exit</p></button>
            </div>
            <Popup id="calculatorDrag" title="Graphing Calculator" isVisible={showCalculator} onClose={() => setShowCalculator(false)}>
                <DesmosCalculator />
            </Popup>
             <Popup id="shortcutsDrag" title="Keyboard Shortcuts" isVisible={showShortcuts} onClose={() => setShowShortcuts(false)}>
                <div className="digitalShortcuts">
                    <p className="digitalShortcuts__directions">This is a demo. Some shortcuts may not be implemented.</p>
                </div>
            </Popup>
        </div>

        <div className="digitalReview__dottedLine"></div>
        
        <div className="digitalReview__test-single">
            <div className="digitalReview__questionContent-single">
                <div className="digitalReview__questionHeader">
                    <p className="digitalReview__questionNumber">{currentIndex + 1}</p>
                    <Button 
                        variant="ghost" 
                        className={cn("digitalReview__questionMarkButton", flaggedQuestions.has(currentIndex) && "flagged")}
                        onClick={() => toggleFlag(currentIndex)}
                    >
                        <Flag className="digitalReview__questionMarkIcon" />
                        Mark for Review
                    </Button>
                </div>
                <div className={cn("digitalReview__questionChoices", fontSize)}>
                     {currentQuestion.type === 'mcq' && (
                         <>
                            <div className="digitalReview__questionQuestion">
                                <MathRenderer content={stimulus} />
                            </div>
                            <div className="digitalReview__questionQuestion">
                                <MathRenderer content={questionBody} />
                            </div>
                            {currentQuestion.options?.map((option, index) => {
                                const letter = String.fromCharCode(65 + index);
                                const isEliminated = eliminatedOptions[currentIndex]?.has(option);
                                return (
                                    <div key={index} className="digitalReview__questionChoiceWrapper" onContextMenu={(e) => { e.preventDefault(); toggleEliminate(currentIndex, option); }}>
                                        <button 
                                            className={cn("digitalReview__questionChoice", answers[currentIndex] === option && "digitalReview__questionChoice--selected", isEliminated && "digitalReview__questionChoice--eliminated")}
                                            onClick={() => handleAnswerChange(currentIndex, option)}
                                            disabled={isLocked}
                                        >
                                            <div className="digitalReview__questionChoiceOutline"></div>
                                            <p className="digitalReview__questionChoiceLetter">{letter}</p>
                                            <div className="digitalReview__questionChoiceText"><MathRenderer content={option} /></div>
                                        </button>
                                    </div>
                                )
                            })}
                         </>
                     )}
                     {currentQuestion.type === 'tf' && (
                         <>
                            {currentQuestion.questionText && <div className="digitalReview__questionQuestion"><MathRenderer content={currentQuestion.questionText} /></div>}
                            <div className="digitalReview__questionChoiceWrapper">
                                 <button 
                                    className={cn("digitalReview__questionChoice", answers[currentIndex] === true && "digitalReview__questionChoice--selected")}
                                    onClick={() => handleAnswerChange(currentIndex, true)}
                                    disabled={isLocked}
                                >
                                    <div className="digitalReview__questionChoiceOutline"></div>
                                    <p className="digitalReview__questionChoiceLetter">A</p>
                                    <div className="digitalReview__questionChoiceText">True</div>
                                </button>
                            </div>
                             <div className="digitalReview__questionChoiceWrapper">
                                 <button 
                                    className={cn("digitalReview__questionChoice", answers[currentIndex] === false && "digitalReview__questionChoice--selected")}
                                    onClick={() => handleAnswerChange(currentIndex, false)}
                                    disabled={isLocked}
                                >
                                    <div className="digitalReview__questionChoiceOutline"></div>
                                    <p className="digitalReview__questionChoiceLetter">B</p>
                                    <div className="digitalReview__questionChoiceText">False</div>
                                </button>
                            </div>
                         </>
                     )}
                     {currentQuestion.type === 'frq' && (
                        <div className="flex flex-col h-full gap-4">
                            <div className="digitalReview__questionQuestion"><MathRenderer content={currentQuestion.questionText} /></div>
                             <Textarea
                                placeholder="Type your detailed answer here..."
                                className="flex-1 w-full"
                                onChange={(e) => handleAnswerChange(currentIndex, e.target.value)}
                                disabled={isLocked}
                                value={answers[currentIndex] as string || ''}
                            />
                        </div>
                     )}
                </div>
            </div>
        </div>

        <div className="digitalReview__dottedLine"></div>

        <div className="digitalReview__footer">
            <p className="digitalReview__tester">{test.deckTitle}</p>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="digitalReview__navigatorToggle">
                        Question {currentIndex + 1} of {test.questions.length}
                        <ArrowUp className="digitalReview__navigatorToggleIcon h-4 w-4 ml-1" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-h-60 overflow-y-auto">
                    {test.questions.map((_, index) => (
                        <DropdownMenuItem key={index} onSelect={() => setCurrentIndex(index)}>
                            <div className="flex items-center justify-between w-full">
                                <span>Question {index + 1}</span>
                                {flaggedQuestions.has(index) && <Flag className="h-4 w-4 text-yellow-500" />}
                            </div>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <div className="digitalReview__buttons">
                <Button className="digitalReview__button" variant="secondary" onClick={handleBack} disabled={currentIndex === 0 || isLocked}>BACK</Button>
                <Button className="digitalReview__button" onClick={handleNext} disabled={isLocked}>
                    {currentIndex === test.questions.length - 1 ? "FINISH & SUBMIT" : "NEXT"}
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
