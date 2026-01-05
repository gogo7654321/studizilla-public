
'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useStudyDeck } from '../study/[deckId]/layout';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, setDoc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { Card as UICard, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  ArrowRight,
  RefreshCw,
  Star,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Howl } from 'howler';
import type { DeckProgress } from '../study/[deckId]/page';
import Confetti from 'react-confetti';
import { MathRenderer } from '@/components/MathRenderer';
import { StudyProgressChart } from './StudyProgressChart';


export function FlashcardPlayer() {
  const { deck, progress: initialProgress } = useStudyDeck();
  const { user } = useAuth();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState<DeckProgress>(initialProgress);
  const [studyMode, setStudyMode] = useState<'all' | 'starred'>('all');
  const [showConfetti, setShowConfetti] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  
  const studyDefaults = deck.studyDefaults || { answerWith: 'definition', flipDirection: 'horizontal' };

  // Update local progress state when the initial progress from context changes
  useEffect(() => {
    setProgress(initialProgress);
  }, [initialProgress]);
  
  // Load deck rating
  useEffect(() => {
    async function loadRating() {
      try {
        const deckRef = doc(db, 'courseDecks', deck.id);
        const deckSnap = await getDoc(deckRef);
        
        if (deckSnap.exists()) {
          const deckData = deckSnap.data();
          const totalRatings = deckData.ratingsCount || 0;
          const totalSum = deckData.ratingsSum || 0;
          setTotalRatings(totalRatings);
          setAverageRating(totalRatings > 0 ? totalSum / totalRatings : 0);
        }
        
        // Load user's rating if logged in
        if (user) {
          const userRatingRef = doc(db, 'users', user.uid, 'deckRatings', deck.id);
          const userRatingSnap = await getDoc(userRatingRef);
          
          if (userRatingSnap.exists()) {
            setUserRating(userRatingSnap.data().rating || 0);
          }
        }
      } catch (error) {
        console.error('Error loading rating:', error);
      }
    }
    
    loadRating();
  }, [deck.id, user]);
  
  const soundEffects = {
    flip: new Howl({ src: ['/sounds/flip.mp3'] }),
    correct: new Howl({ src: ['/sounds/correct.mp3'], volume: 0.7 }),
    incorrect: new Howl({ src: ['/sounds/incorrect.mp3'], volume: 0.7 }),
    complete: new Howl({ src: ['/sounds/complete.mp3'] })
  };

  const studyList = useMemo(() => {
    const cards = deck.cards || [];
    if (studyMode === 'starred') {
        const starredCards = cards.filter(card => progress[card.id]?.starred);
        return starredCards.length > 0 ? starredCards : cards;
    }
    return cards;
  }, [deck.cards, progress, studyMode]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [studyMode]);

  const updateProgressInDb = useCallback(async (newProgress: DeckProgress) => {
    if (!user || !deck) return;
    const progressDocRef = doc(db, 'users', user.uid, 'deckProgress', deck.id);
    await setDoc(progressDocRef, newProgress, { merge: true });
    // Note: courseDecks are read-only, so we only update user progress
  }, [user, deck]);

  const handleMarkProgress = async (isCorrect: boolean) => {
    if (!user) { // Guest user
        handleNext(1);
        return;
    };
    
    const cardId = studyList[currentIndex]?.id;
    if (!cardId) return;

    soundEffects[isCorrect ? 'correct' : 'incorrect'].play();

    const currentStatus = progress[cardId]?.status || 'new';
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
    
    const newProgress: DeckProgress = {
        ...progress,
        [cardId]: {
            status: nextStatus,
            starred: progress[cardId]?.starred || false,
        },
    };

    setProgress(newProgress);
    await updateProgressInDb(newProgress);
    handleNext(1);
  };
  
  const handleToggleStar = async () => {
    if (!user) return;
    const cardId = studyList[currentIndex]?.id;
    if (!cardId) return;

    const newProgress: DeckProgress = {
      ...progress,
      [cardId]: {
        status: progress[cardId]?.status || 'new',
        starred: !(progress[cardId]?.starred),
      },
    };
    setProgress(newProgress);
    await updateProgressInDb(newProgress);
  };
  
  const handleRating = async (rating: number) => {
    if (!user) {
      alert('Please sign in to rate decks');
      return;
    }
    
    try {
      const userRatingRef = doc(db, 'users', user.uid, 'deckRatings', deck.id);
      const userRatingSnap = await getDoc(userRatingRef);
      
      const deckRef = doc(db, 'courseDecks', deck.id);
      
      if (userRatingSnap.exists()) {
        // User has rated before, update their rating
        const oldRating = userRatingSnap.data().rating;
        const ratingDiff = rating - oldRating;
        
        await updateDoc(userRatingRef, { rating });
        await updateDoc(deckRef, {
          ratingsSum: increment(ratingDiff)
        });
        
        setUserRating(rating);
        setAverageRating((averageRating * totalRatings + ratingDiff) / totalRatings);
      } else {
        // First time rating
        await setDoc(userRatingRef, { rating, deckId: deck.id, createdAt: new Date() });
        await updateDoc(deckRef, {
          ratingsSum: increment(rating),
          ratingsCount: increment(1)
        });
        
        setUserRating(rating);
        const newTotal = totalRatings + 1;
        setTotalRatings(newTotal);
        setAverageRating((averageRating * totalRatings + rating) / newTotal);
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };
  
  const handleFlip = () => {
    soundEffects.flip.play();
    setIsFlipped((f) => !f);
  };

  const handleNext = (dir: number) => {
    setIsFlipped(false);
    setDirection(dir);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + dir + studyList.length) % studyList.length);
    }, 150)
  };
  
   // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      switch (e.key) {
        case ' ': handleFlip(); break;
        case 'ArrowRight': handleNext(1); break;
        case 'ArrowLeft': handleNext(-1); break;
        case 's': handleToggleStar(); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, studyList]); // Dependencies ensure handlers use latest state

  if (!studyList || studyList.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground">
        This deck has no cards. Add some cards in the editor!
      </div>
    );
  }

  const currentFlashcard = studyList[currentIndex];
  const isStarred = progress[currentFlashcard.id]?.starred || false;
  
  const frontContent = studyDefaults.answerWith === 'term' ? currentFlashcard.definition : currentFlashcard.term;
  const backContent = studyDefaults.answerWith === 'term' ? currentFlashcard.term : currentFlashcard.definition;

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="flex flex-col h-full gap-6 pb-8 px-4">
      {showConfetti && <Confetti recycle={false} onConfettiComplete={() => setShowConfetti(false)} />}
      
      {/* Deck Rating at Top */}
      <div className="w-full flex flex-col items-center gap-2 pt-4">
        {!userRating ? (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Rate this deck:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                  aria-label={`Rate ${star} stars`}
                >
                  <Star
                    className={cn(
                      "h-6 w-6 transition-colors",
                      (hoverRating >= star || userRating >= star)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground"
                    )}
                  />
                </button>
              ))}
            </div>
          </div>
        ) : null}
        {totalRatings > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{averageRating.toFixed(1)}</span>
            </div>
            <span>•</span>
            <span>{totalRatings} {totalRatings === 1 ? 'rating' : 'ratings'}</span>
          </div>
        )}
      </div>

      {/* Main Content: Flashcard (Left) and Progress (Right) */}
      <div className="flex-1 flex gap-6 max-w-7xl mx-auto w-full">
        {/* Left Side: Flashcard */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full h-96 [perspective:1000px] relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                dragElastic={0.2}
                onDragEnd={(e: any, { offset, velocity }: any) => {
                  if (offset.x > 50) handleNext(-1);
                  if (offset.x < -50) handleNext(1);
                }}
                className="h-full w-full absolute"
              >
                <div
                  className={cn(
                    'relative w-full h-full text-center transition-transform duration-500 [transform-style:preserve-3d]',
                    isFlipped && (studyDefaults.flipDirection === 'horizontal' ? '[transform:rotateY(180deg)]' : '[transform:rotateX(180deg)]'),
                  )}
                  onClick={handleFlip}
                >
                  <div className="absolute w-full h-full [backface-visibility:hidden]">
                    <UICard className="w-full h-full flex items-center justify-center p-6 cursor-pointer">
                      <div className="text-2xl font-semibold"><MathRenderer content={frontContent} /></div>
                    </UICard>
                  </div>
                  <div className={cn("absolute w-full h-full [backface-visibility:hidden]", studyDefaults.flipDirection === 'horizontal' ? '[transform:rotateY(180deg)]' : '[transform:rotateX(180deg)]')}>
                    <UICard className="w-full h-full flex items-center justify-center p-6 cursor-pointer">
                      <div className="text-lg"><MathRenderer content={backContent} /></div>
                    </UICard>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right/Wrong Buttons */}
          <div className="flex items-center justify-center gap-4">
            {user && isFlipped && (
              <div className="flex justify-center gap-4 animate-in fade-in duration-500">
                <Button variant="destructive" size="lg" onClick={() => handleMarkProgress(false)}>
                  <ThumbsDown className="mr-2"/> Didn't Know
                </Button>
                <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => handleMarkProgress(true)}>
                  <ThumbsUp className="mr-2"/> Knew It
                </Button>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <Button variant="outline" size="icon" onClick={() => handleNext(-1)} aria-label="Previous card">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {user && (
                <Button variant="ghost" size="icon" onClick={handleToggleStar} aria-label="Star card">
                  <Star className={cn("h-5 w-5 text-muted-foreground", isStarred && "fill-yellow-400 text-yellow-400")} />
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={handleFlip} aria-label="Flip card">
                <RefreshCw className="h-5 w-5" />
              </Button>
              <p className="text-muted-foreground text-sm font-medium">
                {currentIndex + 1} / {studyList.length}
              </p>
            </div>
            <Button variant="outline" size="icon" onClick={() => handleNext(1)} aria-label="Next card">
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Side: Study Progress (Vertical) */}
        <div className="w-80 flex flex-col gap-4">
          <StudyProgressChart cards={studyList} progress={progress} />
        </div>
      </div>
    </div>
  );
}
