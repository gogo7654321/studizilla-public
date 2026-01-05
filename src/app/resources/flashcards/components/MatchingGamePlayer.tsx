

'use client';

import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import type { Deck, DeckProgress } from '../study/[deckId]/page';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Timer, Move, RefreshCw, Trophy, Star, List, Hash, BrainCircuit, BarChart3, Clock, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { formatDistanceToNow } from 'date-fns';
import { saveMatchHistoryAction, type GameHistoryEntry } from '../study/[deckId]/actions';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';


type GameCard = {
  instanceId: number;
  pairId: number; // The original flashcard's id
  content: string;
  contentType: 'term' | 'definition';
};

const MIN_PAIRS = 2; // Min 2 pairs = 4 cards

const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const masteryOptions = [
    { id: 'new', label: 'New', color: 'bg-blue-500' },
    { id: 'learning', label: 'Learning', color: 'bg-yellow-500' },
    { id: 'almostDone', label: 'Almost Done', color: 'bg-orange-500' },
    { id: 'mastered', label: 'Mastered', color: 'bg-green-500' },
];

function GameHistoryLog({ history }: { history: GameHistoryEntry[] }) {
    if (history.length === 0) {
        return (
            <Card className="h-full flex flex-col items-center justify-center text-center text-muted-foreground p-8">
                <BarChart3 className="h-12 w-12 mb-4" />
                <h3 className="font-semibold text-lg">No Games Played Yet</h3>
                <p className="text-sm">Your game history will appear here once you complete a round.</p>
            </Card>
        );
    }
    
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle>Recent Rounds</CardTitle>
                <CardDescription>Your last 10 game sessions.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-auto">
                <ScrollArea className="h-full">
                    <div className="space-y-4 pr-4">
                        {history.map((entry) => (
                            <div key={entry.date} className="flex justify-between items-center text-sm p-2 rounded-lg hover:bg-secondary/50">
                                <div>
                                    <p className="font-medium">{entry.pairs} Pairs</p>
                                    <p className="text-xs text-muted-foreground">{formatDistanceToNow(new Date(entry.date), { addSuffix: true })}</p>
                                </div>
                                <div className="flex items-center gap-4 text-xs">
                                    <div className="flex items-center gap-1"><Clock className="h-3 w-3" /> {formatTime(entry.time)}</div>
                                    <div className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> {entry.moves} moves</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}

export function MatchingGamePlayer({ deck, initialProgress }: { deck: Deck; initialProgress: DeckProgress }) {
  const { user } = useAuth();
  const [gameState, setGameState] = useState<'settings' | 'countdown' | 'playing'>('settings');
  const [history, setHistory] = useState<GameHistoryEntry[]>([]);
  const [countdown, setCountdown] = useState(3);
  
  // Settings State
  const [numPairs, setNumPairs] = useState(8);
  const [studyStarredOnly, setStudyStarredOnly] = useState(false);
  const [selectionMode, setSelectionMode] = useState<'number' | 'specific' | 'mastery'>('number');
  const [selectedCardIds, setSelectedCardIds] = useState<Set<number>>(new Set());
  const [selectedStatuses, setSelectedStatuses] = useState<Set<string>>(new Set(['new', 'learning']));

  // Game State
  const [gameCards, setGameCards] = useState<GameCard[]>([]);
  const [selectedCard, setSelectedCard] = useState<{ index: number; card: GameCard } | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [incorrectPair, setIncorrectPair] = useState<number[] | null>(null);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!user) return;
    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists() && docSnap.data().matchGameHistory) {
            setHistory(docSnap.data().matchGameHistory[deck.id] || []);
        }
    });
    return () => unsubscribe();
  }, [user, deck.id]);

  const availableCards = useMemo(() => {
    if (!deck || !deck.cards) return [];
    if (!studyStarredOnly) return deck.cards;
    return deck.cards.filter(card => initialProgress[card.id]?.starred);
  }, [deck, studyStarredOnly, initialProgress]);

  const maxPairs = availableCards.length;

  useEffect(() => {
    if (numPairs > maxPairs) {
      setNumPairs(maxPairs);
    }
  }, [numPairs, maxPairs]);

  const setupGame = useCallback(() => {
    let cardsForGame = [];

    if (selectionMode === 'specific') {
        cardsForGame = availableCards.filter(card => selectedCardIds.has(card.id));
    } else if (selectionMode === 'mastery') {
        cardsForGame = availableCards.filter(card => {
            const status = initialProgress[card.id]?.status || 'new';
            return selectedStatuses.has(status);
        });
    } else { // 'number' mode
        cardsForGame = [...availableCards]
          .sort(() => 0.5 - Math.random()) 
          .slice(0, numPairs);
    }
    
    if (cardsForGame.length < MIN_PAIRS) return;

    const newGameCards: GameCard[] = [];
    
    cardsForGame.forEach((card, index) => {
        newGameCards.push({ instanceId: index * 2, pairId: card.id, content: card.term, contentType: 'term' });
        newGameCards.push({ instanceId: index * 2 + 1, pairId: card.id, content: card.definition, contentType: 'definition' });
    });

    for (let i = newGameCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newGameCards[i], newGameCards[j]] = [newGameCards[j], newGameCards[i]];
    }

    setGameCards(newGameCards);
    setSelectedCard(null);
    setMatchedPairs([]);
    setIncorrectPair(null);
    setMoves(0);
    setSeconds(0);
    setIsComplete(false);
    setIsChecking(false);
    
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    
    setGameState('playing');
  }, [availableCards, numPairs, selectionMode, selectedCardIds, selectedStatuses, initialProgress]);

  const handleStartCountdown = () => {
    setGameState('countdown');
    let count = 3;
    setCountdown(count);
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        setupGame();
      }
    }, 1000);
  };

  const handleCardClick = (index: number, card: GameCard) => {
    if (isChecking || matchedPairs.includes(card.pairId)) return;

    setIncorrectPair(null);

    if (selectedCard) { // This is the second card being selected
        setMoves(m => m + 1);
        setIsChecking(true);

        if (selectedCard.card.pairId === card.pairId && selectedCard.index !== index) {
            setMatchedPairs(prev => [...prev, card.pairId]);
            setSelectedCard(null);
            setIsChecking(false);
        } else {
            setIncorrectPair([selectedCard.index, index]);
            setSelectedCard(null);
            setTimeout(() => {
                setIncorrectPair(null);
                setIsChecking(false);
            }, 800);
        }
    } else { // This is the first card being selected
        setSelectedCard({ index, card });
    }
  };

  useEffect(() => {
    if (gameCards.length > 0 && matchedPairs.length === gameCards.length / 2) {
      setIsComplete(true);
      if (timerRef.current) clearInterval(timerRef.current);
      if (user) {
        const newEntry = {
            date: Date.now(),
            pairs: gameCards.length / 2,
            time: seconds,
            moves: moves,
        };
        saveMatchHistoryAction(user.uid, deck.id, newEntry);
      }
    }
  }, [matchedPairs, gameCards.length, seconds, moves, deck.id, user]);

  const restartGame = useCallback(() => setGameState('settings'), []);
  
  const handleToggleCardSelection = (cardId: number) => {
    setSelectedCardIds(prev => {
        const newSet = new Set(prev);
        if (newSet.has(cardId)) newSet.delete(cardId); else newSet.add(cardId);
        return newSet;
    });
  };
  
   const handleToggleStatusSelection = (statusId: string) => {
    setSelectedStatuses(prev => {
        const newSet = new Set(prev);
        if (newSet.has(statusId)) newSet.delete(statusId); else newSet.add(statusId);
        return newSet;
    });
  };

  const CardMemo = React.memo(({ card, index }: { card: GameCard; index: number }) => {
    const isSelected = selectedCard?.index === index;
    const isMatched = matchedPairs.includes(card.pairId);
    const isIncorrect = incorrectPair?.includes(index) ?? false;
  
    return (
      <Card
        onClick={() => handleCardClick(index, card)}
        className={cn(
          "h-full w-full cursor-pointer transition-all duration-300 flex items-center justify-center p-2 text-center",
          isMatched && "border-green-500 bg-green-500/10 text-foreground",
          isSelected && "ring-2 ring-primary border-primary",
          isIncorrect && "border-destructive bg-destructive/10 animate-shake"
        )}
      >
        <p className="text-sm">{card.content}</p>
      </Card>
    );
  });
  CardMemo.displayName = 'CardMemo';

  if (gameState === 'settings') {
    let isStartDisabled = (studyStarredOnly && availableCards.length < MIN_PAIRS);
    if (!isStartDisabled) {
        if (selectionMode === 'number') isStartDisabled = numPairs < MIN_PAIRS;
        else if (selectionMode === 'specific') isStartDisabled = selectedCardIds.size < MIN_PAIRS;
        else if (selectionMode === 'mastery') {
            const cardsInSelectedStatuses = availableCards.filter(card => selectedStatuses.has(initialProgress[card.id]?.status || 'new')).length;
            isStartDisabled = cardsInSelectedStatuses < MIN_PAIRS || selectedStatuses.size === 0;
        }
    }

    return (
        <div className="flex items-center justify-center p-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl">
                <Card className="p-8">
                    <CardHeader><CardTitle className="font-headline text-2xl font-bold">Matching Game Setup</CardTitle></CardHeader>
                    <CardContent className="space-y-6 text-left">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <Label htmlFor="starred-switch" className="flex items-center gap-2 cursor-pointer"><Star className="h-4 w-4 text-amber-400" />Study starred terms only?</Label>
                            <Switch id="starred-switch" checked={studyStarredOnly} onCheckedChange={setStudyStarredOnly} disabled={!user} />
                        </div>
                        <div className="space-y-2">
                            <Label>Selection Mode</Label>
                            <div className="grid grid-cols-3 gap-2">
                                <Button variant={selectionMode === 'number' ? 'default' : 'outline'} onClick={() => setSelectionMode('number')}><Hash className="mr-2 h-4 w-4" /> Pairs</Button>
                                <Button variant={selectionMode === 'specific' ? 'default' : 'outline'} onClick={() => setSelectionMode('specific')}><List className="mr-2 h-4 w-4" /> Specific</Button>
                                <Button variant={selectionMode === 'mastery' ? 'default' : 'outline'} onClick={() => setSelectionMode('mastery')}><BrainCircuit className="mr-2 h-4 w-4" /> Mastery</Button>
                            </div>
                        </div>
                        {selectionMode === 'number' && (
                             <div className="space-y-4">
                                <Label htmlFor="num-pairs-slider">How many pairs do you want to match?</Label>
                                <div className="flex items-center gap-4">
                                    <span className="font-mono text-sm text-muted-foreground">{MIN_PAIRS}</span>
                                    <Slider id="num-pairs-slider" value={[numPairs]} onValueChange={(value) => setNumPairs(value[0])} min={MIN_PAIRS} max={maxPairs > 0 ? maxPairs : MIN_PAIRS} step={1} disabled={maxPairs < MIN_PAIRS} />
                                    <span className="font-mono text-sm text-muted-foreground">{maxPairs > 0 ? maxPairs : MIN_PAIRS}</span>
                                </div>
                                <p className="text-center text-muted-foreground text-sm">Matching {numPairs} {numPairs === 1 ? 'pair' : 'pairs'} ({numPairs * 2} cards)</p>
                            </div>
                        )}
                        {selectionMode === 'specific' && (
                            <div className="space-y-2">
                                <Label>Select cards to include ({selectedCardIds.size} selected)</Label>
                                <ScrollArea className="h-48 border rounded-lg p-2">
                                    <div className="space-y-1">
                                        {availableCards.map(card => (<div key={card.id} className="flex items-center space-x-2 p-1 rounded-md hover:bg-secondary"><Checkbox id={`select-${card.id}`} checked={selectedCardIds.has(card.id)} onCheckedChange={() => handleToggleCardSelection(card.id)} /><label htmlFor={`select-${card.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate cursor-pointer flex-1">{card.term}</label></div>))}
                                    </div>
                                </ScrollArea>
                            </div>
                        )}
                        {selectionMode === 'mastery' && (
                            <div className="space-y-2">
                                <Label>Select mastery levels to include</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {masteryOptions.map(option => (<div key={option.id} className="flex items-center space-x-2 p-2 rounded-md hover:bg-secondary/50"><Checkbox id={`status-${option.id}`} checked={selectedStatuses.has(option.id)} onCheckedChange={() => handleToggleStatusSelection(option.id)} /><div className={cn("h-2.5 w-2.5 rounded-full", option.color)} /><label htmlFor={`status-${option.id}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">{option.label}</label></div>))}
                                </div>
                            </div>
                        )}
                        <div className="text-center text-destructive text-sm h-5">
                           {(studyStarredOnly && availableCards.length < MIN_PAIRS) ? <p>You need at least {MIN_PAIRS} starred pairs to play.</p> : (!studyStarredOnly && maxPairs < MIN_PAIRS) ? <p>You need at least {MIN_PAIRS} pairs in the deck to play.</p> : (selectionMode === 'specific' && selectedCardIds.size < MIN_PAIRS) ? <p>Please select at least {MIN_PAIRS} pairs to start.</p> : (selectionMode === 'mastery' && isStartDisabled) ? <p>Please select at least one mastery level with {MIN_PAIRS} or more cards.</p> : null}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground" onClick={handleStartCountdown} disabled={isStartDisabled}>Start Game</Button>
                    </CardContent>
                </Card>
                <GameHistoryLog history={history} />
            </div>
        </div>
    );
  }

  if (gameState === 'countdown') {
    return (
        <div className="flex items-center justify-center h-full">
            <p className="text-8xl font-bold font-mono animate-in fade-in zoom-in-50">{countdown}</p>
        </div>
    )
  }

  return (
    <div className="flex flex-col h-full gap-4 p-4 md:p-6">
      <div className="flex justify-between items-center bg-secondary/50 p-3 rounded-lg">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-lg font-medium"><Timer className="h-5 w-5 text-muted-foreground" /><span>{formatTime(seconds)}</span></div>
            <div className="flex items-center gap-2 text-lg font-medium"><Move className="h-5 w-5 text-muted-foreground" /><span>{moves}</span></div>
        </div>
        <Button variant="outline" size="sm" onClick={restartGame}><RefreshCw className="mr-2 h-4 w-4" /> Restart</Button>
      </div>
      <div className="flex-grow grid grid-cols-4 gap-2 md:gap-4">
        {gameCards.map((card, index) => <CardMemo key={card.instanceId} card={card} index={index} />)}
      </div>
      <AlertDialog open={isComplete}>
        <AlertDialogContent>
            <AlertDialogHeader className="items-center">
                <Trophy className="h-16 w-16 text-yellow-400" />
                <AlertDialogTitle className="text-2xl font-bold font-headline">You Win!</AlertDialogTitle>
                <AlertDialogDescription>Great job matching all the pairs.</AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex justify-around text-center py-4">
                <div><p className="text-sm text-muted-foreground">Time</p><p className="text-2xl font-bold">{formatTime(seconds)}</p></div>
                <div><p className="text-sm text-muted-foreground">Moves</p><p className="text-2xl font-bold">{moves}</p></div>
            </div>
            <Button onClick={restartGame} className="w-full">Play Again</Button>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
