'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Info, BrainCircuit, BarChart3, Clock, TrendingUp, CheckSquare, Baseline, Volume1, Music, PlayCircle, Sparkles } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import type { DeepDiveHistoryEntry } from '../study/[deckId]/actions';
import { ScrollArea } from '@/components/ui/scroll-area';
import { format } from 'date-fns';
import { formatDistanceToNow } from 'date-fns';
import type { Deck } from '../study/[deckId]/page';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { debounce } from 'lodash';

export type DeepDiveSettings = {
    roundLength: number; // 0 for infinite
    questionTypes: {
        multipleChoice: boolean;
        written: boolean;
        trueFalse: boolean;
    };
    answerWith: 'term' | 'definition';
    studyStarredOnly: boolean;
    shuffleTerms: boolean;
    smartGrading: boolean; // Now used for the local scorer
    retypeOnWrong: boolean;
    allowOverride: boolean;
    audio: {
        soundEffects: boolean;
        backgroundMusic: 'none' | 'lofi' | 'ambient';
        autoplayAudio: boolean;
    };
};

const getDefaultSettings = (deck: Deck): DeepDiveSettings => ({
    roundLength: Math.max(3, Math.min(deck.cards.length, 20)),
    questionTypes: { multipleChoice: true, written: true, trueFalse: true },
    answerWith: 'definition',
    studyStarredOnly: false,
    shuffleTerms: true,
    smartGrading: true,
    retypeOnWrong: true,
    allowOverride: true,
    audio: { soundEffects: true, backgroundMusic: 'none', autoplayAudio: false },
});


const InfoTooltip = ({ text }: { text: string }) => (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <span className="ml-1.5 cursor-help">
                    <Info className="h-3.5 w-3.5 text-muted-foreground" />
                </span>
            </TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
);

const SettingRow = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-between">{children}</div>
);


function HistoryLog({ history }: { history: DeepDiveHistoryEntry[] }) {
    if (history.length === 0) {
        return (
            <Card className="h-full flex flex-col items-center justify-center text-center text-muted-foreground p-8">
                <BarChart3 className="h-12 w-12 mb-4" />
                <h3 className="font-semibold text-lg">No Sessions Played Yet</h3>
                <p className="text-sm">Your session history will appear here once you complete a round.</p>
            </Card>
        );
    }
    
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
                <CardDescription>Your last 10 Deep Dive sessions.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto">
                <ScrollArea className="h-full">
                    <div className="space-y-4 pr-4">
                        {history.map((entry) => {
                             const accuracy = entry.roundLength > 0 ? Math.round(((entry.correct) / (entry.correct + entry.incorrect)) * 100) : 0;
                             return (
                                <div key={entry.date} className="flex justify-between items-center text-sm p-2 rounded-lg hover:bg-secondary/50">
                                    <div>
                                        <p className="font-medium">{entry.roundLength} Questions</p>
                                        <p className="text-xs text-muted-foreground">{formatDistanceToNow(new Date(entry.date), { addSuffix: true })}</p>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs">
                                        <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {format(new Date(entry.duration * 1000), 'm:ss')}</div>
                                        <div className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> {accuracy}%</div>
                                    </div>
                                </div>
                             )
                        })}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

export function DeepDiveInitializer({ deck, onStartSession }: { 
    deck: Deck; 
    onStartSession: (settings: DeepDiveSettings) => void; 
}) {
    const { toast } = useToast();
    const { user } = useAuth();
    const [history, setHistory] = useState<DeepDiveHistoryEntry[]>([]);
    const [settings, setSettings] = useState<DeepDiveSettings>(getDefaultSettings(deck));
    const debounceSaveRef = useRef<ReturnType<typeof debounce>>();
    const isInitialLoad = useRef(true);

    // Load history and saved settings from Firestore
    useEffect(() => {
        if (!user) return;
        
        const userDocRef = doc(db, 'users', user.uid);
        const unsubscribeHistory = onSnapshot(userDocRef, (docSnap) => {
            if (docSnap.exists() && docSnap.data().deepDiveHistory) {
                setHistory(docSnap.data().deepDiveHistory[deck.id] || []);
            }
        });
        
        // Store deep dive settings in deckProgress instead of flashcardDecks (courseDecks are read-only)
        const progressDocRef = doc(db, 'users', user.uid, 'deckProgress', deck.id);
        const unsubscribeSettings = onSnapshot(progressDocRef, (docSnap) => {
            if (docSnap.exists() && docSnap.data().deepDiveSettings) {
                const savedSettings = docSnap.data().deepDiveSettings;
                setSettings(prev => ({...getDefaultSettings(deck), ...savedSettings}));
            }
            setTimeout(() => {
              isInitialLoad.current = false;
            }, 200);
        });

        return () => {
            unsubscribeHistory();
            unsubscribeSettings();
        };
    }, [user, deck.id, deck]);
    
    // Create the debounced save function once
    useEffect(() => {
        debounceSaveRef.current = debounce(async (newSettings: DeepDiveSettings) => {
            if (!user) return;
            // Store deep dive settings in deckProgress instead of flashcardDecks (courseDecks are read-only)
            const progressDocRef = doc(db, 'users', user.uid, 'deckProgress', deck.id);
            try {
                await setDoc(progressDocRef, { deepDiveSettings: newSettings }, { merge: true });
            } catch (error) {
                console.error("Failed to save Deep Dive settings:", error);
            }
        }, 1000);
    }, [user, deck.id]);
    
    // Effect to trigger the debounced save when settings change
    useEffect(() => {
        if (!isInitialLoad.current && debounceSaveRef.current) {
            debounceSaveRef.current(settings);
        }
    }, [settings]);

    const handleQuestionTypeChange = (type: keyof DeepDiveSettings['questionTypes'], checked: boolean) => {
        const newTypes = { ...settings.questionTypes, [type]: checked };
        const atLeastOneSelected = Object.values(newTypes).some(v => v);
        if (atLeastOneSelected) {
            setSettings(p => ({ ...p, questionTypes: newTypes }));
        } else {
            toast({
                variant: 'destructive',
                title: 'At least one question type must be selected.',
            });
        }
    };

    const handleStart = () => {
        if (settings.roundLength > 0 && settings.roundLength < 3) {
            toast({ variant: 'destructive', title: 'Round is too short. Please select at least 3 questions.'});
            return;
        }
        onStartSession(settings);
    };

    return (
        <div className="flex items-center justify-center p-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
                <Card className="flex flex-col">
                    <CardHeader className="p-6">
                        <CardTitle className="font-headline text-2xl flex items-center justify-between">
                            <span>Deep Dive Options</span>
                            <BrainCircuit className="h-6 w-6 text-primary" />
                        </CardTitle>
                        <CardDescription>Customize your intelligent study session.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-1 space-y-8">
                       {/* Question Types */}
                        <div className="space-y-4">
                            <Label className="font-semibold text-base">Question Types</Label>
                            <div className="space-y-3 rounded-lg border p-4">
                                <SettingRow><Label htmlFor="q-written" className="flex items-center gap-2 font-medium"><Baseline className="h-4 w-4 text-muted-foreground"/>Written</Label><Switch id="q-written" checked={settings.questionTypes.written} onCheckedChange={(c) => handleQuestionTypeChange('written', c)} /></SettingRow>
                                <SettingRow><Label htmlFor="q-mc" className="flex items-center gap-2 font-medium"><CheckSquare className="h-4 w-4 text-muted-foreground"/>Multiple Choice</Label><Switch id="q-mc" checked={settings.questionTypes.multipleChoice} onCheckedChange={(c) => handleQuestionTypeChange('multipleChoice', c)} /></SettingRow>
                                <SettingRow><Label htmlFor="q-tf" className="flex items-center gap-2 font-medium"><span className="font-bold text-xs text-muted-foreground">T/F</span>True & False</Label><Switch id="q-tf" checked={settings.questionTypes.trueFalse} onCheckedChange={(c) => handleQuestionTypeChange('trueFalse', c)} /></SettingRow>
                            </div>
                        </div>

                        {/* Session Settings */}
                        <div className="space-y-4">
                            <Label className="font-semibold text-base">Session Settings</Label>
                            <div className="space-y-3 rounded-lg border p-4">
                                <SettingRow>
                                    <Label htmlFor="round-length" className="font-medium flex items-center">Number of Questions<InfoTooltip text="Set how many questions to answer. 0 means infinite." /></Label>
                                    <Input type="number" id="round-length" className="w-24 h-9" value={settings.roundLength} onChange={(e) => { const val = parseInt(e.target.value); if (!isNaN(val)) setSettings(p => ({...p, roundLength: Math.max(0, Math.min(150, val))})); }} min="0" max="150" />
                                </SettingRow>
                                <SettingRow>
                                    <Label htmlFor="answer-with" className="font-medium flex items-center">Answer With</Label>
                                    <Select value={settings.answerWith} onValueChange={(v) => setSettings(p => ({...p, answerWith: v as any}))}>
                                        <SelectTrigger className="w-40 h-9"><SelectValue /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="definition">Definition</SelectItem>
                                            <SelectItem value="term">Term</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </SettingRow>
                                <SettingRow><Label htmlFor="shuffle-terms" className="font-medium flex items-center">Shuffle</Label><Switch id="shuffle-terms" checked={settings.shuffleTerms} onCheckedChange={(c) => setSettings(p => ({ ...p, shuffleTerms: c }))} /></SettingRow>
                                <SettingRow><Label htmlFor="study-starred" className="font-medium flex items-center">Study Starred Only</Label><Switch id="study-starred" checked={settings.studyStarredOnly} onCheckedChange={(c) => setSettings(p => ({ ...p, studyStarredOnly: c }))} /></SettingRow>
                            </div>
                        </div>

                         {/* Grading Settings */}
                        <div className="space-y-4">
                             <Label className="font-semibold text-base flex items-center gap-2"><Sparkles className="h-4 w-4"/>Grading</Label>
                             <div className="space-y-3 rounded-lg border p-4">
                                <SettingRow><Label htmlFor="smart-grading" className="font-medium flex items-center">Typo Forgiveness<InfoTooltip text="Our grading scorer understands typos and spelling variations." /></Label><Switch id="smart-grading" checked={settings.smartGrading} onCheckedChange={(c) => setSettings(p => ({...p, smartGrading: c }))} /></SettingRow>
                                <SettingRow><Label htmlFor="retype-wrong" className="font-medium flex items-center">Retype if wrong<InfoTooltip text="Forces you to type the correct answer after a mistake." /></Label><Switch id="retype-wrong" checked={settings.retypeOnWrong} onCheckedChange={(c) => setSettings(p => ({...p, retypeOnWrong: c }))} /></SettingRow>
                                <SettingRow><Label htmlFor="override-wrong" className="font-medium flex items-center">"I was right" button<InfoTooltip text="Allows you to override the scorer if you think you were correct." /></Label><Switch id="override-wrong" checked={settings.allowOverride} onCheckedChange={(c) => setSettings(p => ({...p, allowOverride: c }))} /></SettingRow>
                            </div>
                        </div>

                         {/* Audio Settings */}
                         <div className="space-y-4">
                            <Label className="font-semibold text-base">Audio (Coming Soon)</Label>
                            <div className="space-y-3 rounded-lg border p-4 opacity-60 cursor-not-allowed">
                                <SettingRow><Label htmlFor="audio-effects" className="font-medium flex items-center gap-2"><Volume1 className="h-4 w-4"/>Sound Effects</Label><Switch id="audio-effects" checked={settings.audio.soundEffects} disabled /></SettingRow>
                                <SettingRow><Label htmlFor="audio-music" className="font-medium flex items-center gap-2"><Music className="h-4 w-4"/>Background Music</Label><Switch id="audio-music" disabled /></SettingRow>
                                <SettingRow><Label htmlFor="audio-autoplay" className="font-medium flex items-center gap-2"><PlayCircle className="h-4 w-4"/>Autoplay card audio</Label><Switch id="audio-autoplay" disabled/></SettingRow>
                            </div>
                        </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                        <Separator className="my-6"/>
                        <div className="flex items-center justify-between">
                            <Button variant="destructive">Reset progress</Button>
                            <Button onClick={handleStart} className="bg-gradient-to-r from-primary to-accent text-primary-foreground">Start Session</Button>
                        </div>
                    </div>
                </Card>
                 <HistoryLog history={history} />
            </div>
        </div>
    );
}
