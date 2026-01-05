
'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { RefreshCw, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import Confetti from 'react-confetti';

interface Section {
  name: string;
  maxScore: number;
  weight: number;
  minScore?: number;
}

interface ScoreCalculatorProps {
  title: string;
  description: string;
  sections: Section[];
  scoreRanges: { [key: number]: { min: number; max: number } };
}

const scoreColors = [
  'text-gray-500', // Score 0 (not used)
  'text-red-500',   // Score 1
  'text-orange-500',// Score 2
  'text-yellow-500',// Score 3
  'text-lime-500',  // Score 4
  'text-green-500', // Score 5
];

export function ScoreCalculator({ title, description, sections, scoreRanges }: ScoreCalculatorProps) {
  const [scores, setScores] = useState<Record<string, number | ''>>(
    Object.fromEntries(sections.map(s => [s.name, '']))
  );
  const [finalScore, setFinalScore] = useState<number | null>(null);

  const totalMaxScore = useMemo(() => {
    return sections.reduce((acc, section) => acc + section.weight, 0);
  }, [sections]);

  const handleScoreChange = (sectionName: string, value: string) => {
    const numValue = value === '' ? '' : Number(value);
    const section = sections.find(s => s.name === sectionName);
    
    if (section && (numValue === '' || (numValue >= (section.minScore ?? 0) && numValue <= section.maxScore))) {
      setScores(prev => ({ ...prev, [sectionName]: numValue }));
    }
  };

  const calculateScore = () => {
    let compositeScore = 0;
    for (const section of sections) {
      const userScore = scores[section.name];
      if (userScore === '' || userScore === undefined) {
        // Handle case where a field is empty
        return;
      }
      compositeScore += (Number(userScore) / section.maxScore) * section.weight;
    }

    for (const score in scoreRanges) {
      const range = scoreRanges[score];
      if (compositeScore >= range.min && compositeScore <= range.max) {
        setFinalScore(Number(score));
        return;
      }
    }
    setFinalScore(1); // Default to 1 if no range matches
  };

  const resetCalculator = () => {
    setScores(Object.fromEntries(sections.map(s => [s.name, ''])));
    setFinalScore(null);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl rounded-2xl">
      <CardHeader className="text-center">
        <Award className="mx-auto h-12 w-12 text-primary" />
        <CardTitle className="font-headline text-3xl mt-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inputs Section */}
          <div className="space-y-6">
            {sections.map(section => (
              <div key={section.name} className="space-y-2">
                <Label htmlFor={section.name} className="text-lg font-semibold">{section.name}</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    id={section.name}
                    value={scores[section.name]}
                    onChange={(e) => handleScoreChange(section.name, e.target.value)}
                    placeholder="Enter score"
                    className="h-12 text-lg"
                  />
                  <span className="text-muted-foreground font-medium text-lg">/ {section.maxScore}</span>
                </div>
                 <p className="text-xs text-muted-foreground">Weight: {((section.weight / totalMaxScore) * 100).toFixed(0)}% of total score</p>
              </div>
            ))}
            <div className="flex gap-4 pt-4">
              <Button onClick={calculateScore} size="lg" className="w-full">Calculate Score</Button>
              <Button onClick={resetCalculator} size="lg" variant="outline" className="w-fit">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Results Section */}
          <div className="flex items-center justify-center bg-secondary/50 rounded-xl p-8">
            {finalScore !== null ? (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="text-center"
              >
                <p className="text-muted-foreground font-semibold">Your Estimated AP® Score is</p>
                <p className={cn("text-8xl font-bold font-headline", scoreColors[finalScore])}>
                  {finalScore}
                </p>
              </motion.div>
            ) : (
              <div className="text-center text-muted-foreground">
                <p className="text-lg">Your estimated score will appear here.</p>
              </div>
            )}
          </div>
        </div>
        {finalScore && finalScore >= 4 && <Confetti recycle={false} numberOfPieces={200} />}
      </CardContent>
    </Card>
  );
}
