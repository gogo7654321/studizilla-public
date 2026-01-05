
'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // The test generator and results pages should be full-screen without the standard "Tools" header.
  const isDistractionFreePage = pathname.startsWith('/tools/practice-test') || pathname.startsWith('/tools/explain-this');

  if (isDistractionFreePage) {
    return <div className="bg-secondary/30 min-h-screen">{children}</div>;
  }

  // For all other tool pages, render the standard header and container.
  return (
    <div className="w-full">
      <div className="bg-secondary/50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-8 text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Tools</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Use the power of AI to optimize your study sessions. Generate flashcards, get essay feedback, and more.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12">
        {children}
      </div>
    </div>
  );
}
