
'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useAppearance } from '@/contexts/AppearanceContext';

interface Snowflake {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
}

const random = (min: number, max: number) => Math.random() * (max - min) + min;

export function FrostbiteWinterBackground() {
  const { customTheme, areAnimationsEnabled } = useAppearance();
  const themeId = customTheme?.id;
  const [flakes, setFlakes] = useState<Snowflake[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (themeId !== 'frostbite-winter' || !areAnimationsEnabled || typeof window === 'undefined') {
      setFlakes([]);
      return;
    }

    const generateFlakes = () => {
      const newFlakes: Snowflake[] = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: `${random(-10, 110)}%`,
        size: random(1, 5),
        duration: `${random(15, 30)}s`,
        delay: `${random(0, 20)}s`,
        opacity: random(0.3, 0.9),
      }));
      setFlakes(newFlakes);
    };

    generateFlakes();
    window.addEventListener('resize', generateFlakes);
    return () => window.removeEventListener('resize', generateFlakes);
  }, [themeId, areAnimationsEnabled]);

  if (themeId !== 'frostbite-winter' || !isMounted || !areAnimationsEnabled) return null;

  return ReactDOM.createPortal(
    <div className="frostbite-winter-bg" aria-hidden="true">
        <div className="snowfall-container">
            {flakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: flake.left,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                        opacity: flake.opacity,
                        animationDuration: flake.duration,
                        animationDelay: flake.delay,
                    }}
                />
            ))}
        </div>
    </div>,
    document.body
  );
}
