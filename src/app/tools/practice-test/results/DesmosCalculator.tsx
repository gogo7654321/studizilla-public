
'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Desmos?: {
      GraphingCalculator: new (element: HTMLElement, options?: any) => any;
    };
  }
}

export function DesmosCalculator() {
  const calculatorRef = useRef<HTMLDivElement>(null);
  const desmosInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Desmos && calculatorRef.current) {
        if (!desmosInstanceRef.current) {
            desmosInstanceRef.current = window.Desmos.GraphingCalculator(calculatorRef.current, {
                keypad: true,
                expressions: true, // This enables the expression list
                settingsMenu: false,
                zoomButtons: false,
            });
        }
    }
    
    // Cleanup function to destroy the calculator instance when the component unmounts.
    return () => {
        if (desmosInstanceRef.current) {
            // Uncomment the line below if you face issues with multiple calculators
            // desmosInstanceRef.current.destroy();
            // desmosInstanceRef.current = null;
        }
    };
  }, []);

  return <div ref={calculatorRef} className="w-full h-full"></div>;
}
