import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Add window declaration for gtag and Google Identity Services
declare global {
  interface Window {
    gtag: (
      param1: string,
      param2: string,
      param3: object
    ) => void;
    google?: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: any) => void; prompt_parent_id: string }) => void;
          prompt: (notification?: (notification: any) => void) => void;
          cancel: () => void;
        };
      };
    };
    MathJax?: {
      typesetPromise: (elements?: HTMLElement[]) => Promise<void>;
    };
  }
}

// Extend the process.env type definitions
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
    }
  }
}

