
'use client';

import React, { createContext, useContext, useState, useLayoutEffect, ReactNode, useCallback } from 'react';
import { ThemeManager, type CustomTheme, type SavedCustomThemeRef } from '@/lib/ThemeManager';

// --- TYPES --- //
export type AccessibilityTheme = "default" | "protanopia" | "deuteranopia" | "tritanopia";
export type SidebarPosition = 'left' | 'right' | 'top' | 'bottom';
export type AnimationLayering = 'off' | 'background' | 'foreground';

type AppearanceContextType = {
  // Accessibility theme
  theme: AccessibilityTheme;
  setTheme: (theme: AccessibilityTheme) => void;
  // Dashboard sidebar position
  sidebarPosition: SidebarPosition;
  setSidebarPosition: (position: SidebarPosition) => void;
  // Custom dashboard theme
  customTheme: CustomTheme | null;
  applyCustomTheme: (themeRef: SavedCustomThemeRef | CustomTheme | null) => void;
  resetCustomTheme: () => void;
  setCustomThemeVariant: (themeId: string, variantId: string) => void;
  // Animation settings
  starSpeed: number;
  setStarSpeed: (speed: number) => void;
  animationLayering: AnimationLayering;
  setAnimationLayering: (layering: AnimationLayering) => void;
  // Glassmorphism
  isGlassmorphismEnabled: boolean;
  setIsGlassmorphismEnabled: (enabled: boolean) => void;
  // Deprecated animation toggle, use layering instead
  areAnimationsEnabled: boolean;
  setAreAnimationsEnabled: (enabled: boolean) => void;
  showBackgroundInStudy: boolean;
  setShowBackgroundInStudy: (show: boolean) => void;
  showSecondsInHeader: boolean;
  setShowSecondsInHeader: (show: boolean) => void;
  timezone: string;
  setTimezone: (timezone: string) => void;
  // Loading state
  isAppearanceLoading: boolean;
  setIsAppearanceLoading: (loading: boolean) => void;
};

// --- CONTEXT --- //
export const AppearanceContext = createContext<AppearanceContextType | undefined>(undefined);

// --- PROVIDER --- //
export const AppearanceProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<AccessibilityTheme>('default');
  const [sidebarPosition, setSidebarPosition] = useState<SidebarPosition>('left');
  const [customTheme, setCustomTheme] = useState<CustomTheme | null>(null);
  const [isAppearanceLoading, setIsAppearanceLoading] = useState(true);
  
  // Animation settings
  const [starSpeed, setStarSpeed] = useState(5);
  const [animationLayering, setAnimationLayering] = useState<AnimationLayering>('foreground');
  const [showBackgroundInStudy, setShowBackgroundInStudy] = useState(true);
  const [isGlassmorphismEnabled, setIsGlassmorphismEnabled] = useState(false);
  
  // Header settings
  const [showSecondsInHeader, setShowSecondsInHeader] = useState(false);
  const [timezone, setTimezone] = useState('UTC');

  // Backwards compatibility for the old `areAnimationsEnabled`
  const areAnimationsEnabled = animationLayering !== 'off';
  const setAreAnimationsEnabled = (enabled: boolean) => {
    setAnimationLayering(enabled ? 'foreground' : 'off');
  };


  // Apply accessibility theme
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  const handleSetTheme = useCallback((newTheme: AccessibilityTheme) => {
    if (newTheme !== 'default') {
      setCustomTheme(null);
    }
    setTheme(newTheme);
  }, []);

  const handleApplyCustomTheme = useCallback((themeRef: SavedCustomThemeRef | CustomTheme | null) => {
    if (!themeRef) {
      setCustomTheme(null);
      return;
    }
    const manager = new ThemeManager(themeRef);
    setCustomTheme(manager.getThemeObject());
    setTheme('default'); // Ensure accessibility theme is reset
  }, []);

  const handleResetCustomTheme = useCallback(() => {
    setCustomTheme(null);
  }, []);

  const handleSetCustomThemeVariant = useCallback((themeId: string, variantId: string) => {
      const themeRef: SavedCustomThemeRef = { id: themeId, selectedVariantId: variantId };
      const manager = new ThemeManager(themeRef);
      setCustomTheme(manager.getThemeObject());
  }, []);

  const value = { 
    theme, 
    setTheme: handleSetTheme, 
    sidebarPosition, 
    setSidebarPosition,
    customTheme,
    applyCustomTheme: handleApplyCustomTheme,
    resetCustomTheme: handleResetCustomTheme,
    setCustomThemeVariant: handleSetCustomThemeVariant,
    starSpeed,
    setStarSpeed,
    animationLayering,
    setAnimationLayering,
    isGlassmorphismEnabled,
    setIsGlassmorphismEnabled,
    areAnimationsEnabled,
    setAreAnimationsEnabled,
    showBackgroundInStudy,
    setShowBackgroundInStudy,
    showSecondsInHeader,
    setShowSecondsInHeader,
    timezone,
    setTimezone,
    isAppearanceLoading,
    setIsAppearanceLoading,
  };

  return (
    <AppearanceContext.Provider value={value}>
      {children}
    </AppearanceContext.Provider>
  );
};

// --- HOOK --- //
export const useAppearance = (): AppearanceContextType => {
    const context = useContext(AppearanceContext);
    if (context === undefined) {
        throw new Error("useAppearance must be used within an AppearanceProvider");
    }
    return context;
}
