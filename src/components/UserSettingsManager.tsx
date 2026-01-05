
'use client';

import { useEffect, useCallback, useRef, useLayoutEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAppearance } from '@/contexts/AppearanceContext';
import { useAuth } from '@/contexts/AuthContext';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import type { User } from 'firebase/auth';
import { useTheme as useNextTheme } from 'next-themes';
import { ThemeManager, type SavedCustomThemeRef } from '@/lib/ThemeManager';
import { isEqual } from 'lodash';


type AccessibilityTheme = "default" | "protanopia" | "deuteranopia" | "tritanopia";
type SidebarPosition = 'left' | 'right' | 'top' | 'bottom';
type AnimationLayering = 'off' | 'background' | 'foreground';

export type AppearanceSettings = {
    updatedAt?: number; // Timestamp of the last local update
    lightDarkTheme: 'light' | 'dark' | 'system';
    accessibilityTheme: AccessibilityTheme;
    sidebarPosition: SidebarPosition;
    customThemeRef: SavedCustomThemeRef | null;
    isGlassmorphismEnabled: boolean;
    animationLayering: AnimationLayering;
    starSpeed: number;
    showBackgroundInStudy: boolean;
    showSecondsInHeader: boolean;
    timezone?: string; // Made optional for backwards compatibility
};

// --- Debounced Firestore Save Function ---
const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout | undefined;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

async function saveFirestoreSettings(user: User, settings: Omit<AppearanceSettings, 'updatedAt'>) {
    const userDocRef = doc(db, 'users', user.uid);
    try {
        // Get readable theme name
        let themeName = 'Default';
        if (settings.customThemeRef?.id) {
            // Extract theme name from ID (e.g., 'sakura-drift' -> 'Sakura Drift')
            themeName = settings.customThemeRef.id
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        } else if (settings.accessibilityTheme && settings.accessibilityTheme !== 'default') {
            themeName = settings.accessibilityTheme.charAt(0).toUpperCase() + settings.accessibilityTheme.slice(1);
        }
        
        await setDoc(userDocRef, {
            appearance: { ...settings, updatedAt: Date.now() },
            theme: themeName // Save readable theme name for profile
        }, {
            merge: true
        });
    } catch (error) {
        console.error("Failed to save settings to Firestore:", error);
    }
}

const debouncedSaveFirestore = debounce(saveFirestoreSettings, 1500);

export function UserSettingsManager() {
    const { user, isLoading: isAuthLoading } = useAuth();
    const { theme: nextTheme, setTheme: setNextTheme } = useNextTheme();
    const {
        theme: accessibilityTheme,
        setTheme: setAccessibilityTheme,
        sidebarPosition,
        setSidebarPosition,
        customTheme,
        applyCustomTheme,
        animationLayering,
        setAnimationLayering,
        starSpeed,
        setStarSpeed,
        showBackgroundInStudy,
        setShowBackgroundInStudy,
        showSecondsInHeader,
        setShowSecondsInHeader,
        isGlassmorphismEnabled,
        setIsGlassmorphismEnabled,
        isAppearanceLoading,
        setIsAppearanceLoading,
    } = useAppearance();
    
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isDashboardRoute = !isHomePage && (pathname.startsWith('/dashboard') || pathname.startsWith('/guest-dashboard') || pathname.startsWith('/profile') || pathname.startsWith('/flashcards'));

    const isInitialLoad = useRef(true);

    // Effect for LOADING settings from Firestore or localStorage
    useEffect(() => {
        if (isAuthLoading) return;
        setIsAppearanceLoading(true);

        const loadSettings = async () => {
            let settings: Omit<AppearanceSettings, 'updatedAt'> | null = null;

            if (user) {
                // Logged-in user: Load from Firestore first
                const userDocRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(userDocRef);
                if (docSnap.exists() && docSnap.data().appearance) {
                    settings = docSnap.data().appearance;
                }
            } else {
                // Guest user: Load from localStorage
                const localSettingsJSON = localStorage.getItem('appearance-settings');
                if (localSettingsJSON) {
                    settings = JSON.parse(localSettingsJSON);
                }
            }
            
            const settingsToApply: Omit<AppearanceSettings, 'updatedAt'> = settings || {
                lightDarkTheme: 'light',
                accessibilityTheme: 'default',
                sidebarPosition: 'left',
                customThemeRef: null,
                animationLayering: 'foreground',
                starSpeed: 5,
                isGlassmorphismEnabled: false,
                showBackgroundInStudy: true,
                showSecondsInHeader: false,
            };

            setNextTheme(settingsToApply.lightDarkTheme);
            setAccessibilityTheme(settingsToApply.accessibilityTheme);
            setSidebarPosition(settingsToApply.sidebarPosition);
            applyCustomTheme(settingsToApply.customThemeRef);
            setAnimationLayering(settingsToApply.animationLayering);
            setStarSpeed(settingsToApply.starSpeed);
            setIsGlassmorphismEnabled(settingsToApply.isGlassmorphismEnabled);
            setShowBackgroundInStudy(settingsToApply.showBackgroundInStudy);
            setShowSecondsInHeader(settingsToApply.showSecondsInHeader);

            // Defer marking initial load as complete
            setTimeout(() => {
              isInitialLoad.current = false;
              setIsAppearanceLoading(false);
            }, 100);
        };
        loadSettings();
    }, [user, isAuthLoading]);

    // Effect for SAVING settings to localStorage and Firestore
    useEffect(() => {
        if (isInitialLoad.current || isAppearanceLoading) return;

        const customThemeRef: SavedCustomThemeRef | null = customTheme ? {
            id: customTheme.id,
            ...(customTheme.selectedVariantId && { selectedVariantId: customTheme.selectedVariantId }),
        } : null;
        
        const currentSettings = {
            lightDarkTheme: nextTheme as AppearanceSettings['lightDarkTheme'],
            accessibilityTheme, sidebarPosition, customThemeRef,
            animationLayering, starSpeed, isGlassmorphismEnabled,
            showBackgroundInStudy, showSecondsInHeader,
        };
        
        localStorage.setItem('appearance-settings', JSON.stringify(currentSettings));

        if (user) {
           debouncedSaveFirestore(user, currentSettings);
        }
    }, [
        user, isAppearanceLoading, nextTheme, accessibilityTheme, sidebarPosition, 
        customTheme, animationLayering, starSpeed, showBackgroundInStudy,
        showSecondsInHeader, isGlassmorphismEnabled
    ]);

    useLayoutEffect(() => {
        // Only apply custom theme on dashboard routes, not on home page or other pages
        if (isDashboardRoute && !isHomePage) {
            const manager = new ThemeManager(customTheme);
            manager.apply();
        } else {
            // Clear any custom theme for home page and non-dashboard pages
            const manager = new ThemeManager(null);
            manager.apply();
        }
    }, [customTheme, isDashboardRoute, isHomePage]);

    useLayoutEffect(() => {
        const root = document.documentElement;
        // Don't apply glassmorphism on home page
        if (isDashboardRoute && !isHomePage && isGlassmorphismEnabled && customTheme?.hasFullScreenBackground) {
            root.setAttribute('data-glassmorphism-enabled', 'true');
        } else {
            root.removeAttribute('data-glassmorphism-enabled');
        }
    }, [isDashboardRoute, isHomePage, isGlassmorphismEnabled, customTheme]);

    return null;
}
