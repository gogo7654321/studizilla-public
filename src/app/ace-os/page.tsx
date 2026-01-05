'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function AceOSRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/flashcards');
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="text-muted-foreground">Redirecting to Flashcards...</p>
      </div>
    </div>
  );
}