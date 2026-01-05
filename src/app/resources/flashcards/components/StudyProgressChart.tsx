'use client';

import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { DeckProgress, FlashcardData } from '../study/[deckId]/page';

interface StudyProgressChartProps {
  cards: FlashcardData[];
  progress: DeckProgress;
}

export function StudyProgressChart({ cards, progress }: StudyProgressChartProps) {
  const stats = useMemo(() => {
    const totals = {
      notStarted: 0,
      learning: 0,
      almostDone: 0,
      mastered: 0,
    };

    cards.forEach(card => {
      const status = progress[card.id]?.status || 'new';
      switch (status) {
        case 'new':
          totals.notStarted++;
          break;
        case 'learning':
          totals.learning++;
          break;
        case 'almostDone':
          totals.almostDone++;
          break;
        case 'mastered':
          totals.mastered++;
          break;
      }
    });

    return totals;
  }, [cards, progress]);

  const total = cards.length;
  const getPercentage = (count: number) => total > 0 ? (count / total) * 100 : 0;

  const categories = [
    {
      label: 'Not Started',
      count: stats.notStarted,
      percentage: getPercentage(stats.notStarted),
      color: 'bg-gray-400',
      textColor: 'text-gray-600',
    },
    {
      label: 'Still Learning',
      count: stats.learning,
      percentage: getPercentage(stats.learning),
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
    },
    {
      label: 'Almost Done',
      count: stats.almostDone,
      percentage: getPercentage(stats.almostDone),
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
    },
    {
      label: 'Mastered',
      count: stats.mastered,
      percentage: getPercentage(stats.mastered),
      color: 'bg-green-500',
      textColor: 'text-green-600',
    },
  ];

  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Study Progress</CardTitle>
        <p className="text-sm text-muted-foreground mt-1">
          {stats.mastered} of {total} cards mastered
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progress bar - Vertical */}
        <div className="flex flex-col gap-3">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn('w-3 h-3 rounded-full', category.color)} />
                  <span className="text-sm font-medium">{category.label}</span>
                </div>
                <span className={cn('text-sm font-bold', category.textColor)}>
                  {category.count}
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden bg-muted">
                <div
                  className={cn('h-full transition-all duration-500', category.color)}
                  style={{ width: `${category.percentage}%` }}
                />
              </div>
              <div className="text-xs text-muted-foreground text-right">
                {category.percentage.toFixed(1)}%
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="pt-4 border-t">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Cards</span>
              <span className="font-bold">{total}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Completion Rate</span>
              <span className="font-bold text-green-600">
                {total > 0 ? ((stats.mastered / total) * 100).toFixed(0) : 0}%
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">In Progress</span>
              <span className="font-bold text-blue-600">
                {stats.learning + stats.almostDone}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
