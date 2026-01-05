
'use client';

import React, { useState, useEffect } from 'react';
import { useAppearance } from '@/contexts/AppearanceContext';
import { SakuraDriftBackground } from './SakuraDriftBackground';
import { TidalBloomBackground } from './TidalBloomBackground';
import { ForestHazeBackground } from './ForestHazeBackground';
import { FrostbiteWinterBackground } from './FrostbiteWinterBackground';
import { ParisianDaydreamBackground } from './ParisianDaydreamBackground';

const random = (min: number, max: number) => Math.random() * (max - min) + min;

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  opacity: number;
  animationName: string;
}

interface ShootingStar {
  id: number;
  right: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export function StarryNightBackground() {
  const { customTheme, animationLayering, starSpeed } = useAppearance();
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  const themeId = customTheme?.id;
  const areAnimationsEnabled = animationLayering !== 'off';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Clear all particles when theme changes
    setStars([]);
    setShootingStars([]);

    if (themeId === 'starry-night' && areAnimationsEnabled) {
        const generateStars = () => {
          const canvasSize = window.innerWidth * window.innerHeight;
          const starsFraction = Math.floor(canvasSize / 4000);
          const newStars: Star[] = [];
          for (let i = 0; i < starsFraction; i++) {
            newStars.push({
              id: i,
              left: `${random(0, 100)}%`,
              top: `${random(0, 100)}%`,
              size: Math.random() < 0.5 ? 1 : 2,
              opacity: random(0.5, 1),
              animationName: Math.random() < 1 / 5 ? `twinkle${Math.floor(random(1, 5))}` : 'none',
            });
          }
          setStars(newStars);
        };

        const generateShootingStars = () => {
            const newShootingStars: ShootingStar[] = [];
            for (let i = 0; i < 4; i++) {
                // Adjust duration based on starSpeed (10 is slow, 1 is fast)
                const baseDuration = 11 - starSpeed;
                newShootingStars.push({
                    id: i,
                    right: `${random(0, 100)}%`,
                    top: '-4px',
                    animationDelay: `${random(0, 7)}s`,
                    animationDuration: `${random(baseDuration * 0.7, baseDuration * 1.3)}s`,
                });
            }
            setShootingStars(newShootingStars);
        };

        generateStars();
        generateShootingStars();
        window.addEventListener('resize', generateStars);
        return () => window.removeEventListener('resize', generateStars);
    }
  }, [themeId, areAnimationsEnabled, starSpeed]);


  switch(themeId) {
    case 'pastel-soft':
      return <SakuraDriftBackground />;
    case 'tidal-bloom':
        return <TidalBloomBackground />;
    case 'parisian-daydream':
      return <ParisianDaydreamBackground />;
    case 'forest-haze':
      return <ForestHazeBackground />;
    case 'frostbite-winter':
        return <FrostbiteWinterBackground />;
    case 'midnight-office':
    case 'fc-barcelona':
    case 'catpuccin':
      // These themes have their backgrounds set in globals.css based on the data-theme-id attribute.
      // This component doesn't need to render anything for them.
      return null;
    case 'starry-night':
      if (!areAnimationsEnabled) return null;
      return (
        <>
          <div className="starry-background" aria-hidden="true">
            {stars.map((star) => (
              <div
                key={star.id}
                style={{
                  position: 'absolute',
                  left: star.left,
                  top: star.top,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                  backgroundColor: 'hsl(var(--custom-star-color))',
                  borderRadius: '50%',
                  animationName: star.animationName,
                  animationDuration: '5s',
                  animationIterationCount: 'infinite',
                }}
              />
            ))}
          </div>
          <div
            className="shooting-star-container"
            style={{ zIndex: animationLayering === 'foreground' ? 9999 : -1 }}
            aria-hidden="true"
          >
            {shootingStars.map((star) => (
                <span 
                  key={star.id} 
                  className="shootingstar"
                  style={{
                      top: star.top,
                      right: star.right,
                      animationDelay: star.animationDelay,
                      animationDuration: star.animationDuration,
                  }}
                />
            ))}
          </div>
        </>
      );
    default:
      return null;
  }
}
