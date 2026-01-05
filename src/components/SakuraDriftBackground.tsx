
'use client';

import React, { useEffect, useState } from 'react';
import { useAppearance } from '@/contexts/AppearanceContext';

interface Petal {
  id: number;
  left: string;
  size: number;
  delay: string;
  duration: string;
  animationName: string;
}

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export function SakuraDriftBackground() {
  const { customTheme, areSakuraPetalsEnabled } = useAppearance();
  const themeId = customTheme?.id;
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    if (themeId !== 'pastel-soft' || !areSakuraPetalsEnabled || typeof window === 'undefined') {
      setPetals([]);
      return;
    }

    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 35; i++) {
        newPetals.push({
          id: i,
          left: `${random(0, 100)}%`,
          size: random(10, 22),
          delay: `${random(0, 10)}s`,
          duration: `${random(10, 20)}s`,
          animationName: `fall-${i % 3}`, // fall-0, fall-1, fall-2 for variety
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
    window.addEventListener('resize', generatePetals);
    return () => window.removeEventListener('resize', generatePetals);
  }, [themeId, areSakuraPetalsEnabled]);

  if (themeId !== 'pastel-soft' || !areSakuraPetalsEnabled) return null;

  return (
    <div className="sakura-background" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            animationName: petal.animationName,
          }}
        />
      ))}
    </div>
  );
}
