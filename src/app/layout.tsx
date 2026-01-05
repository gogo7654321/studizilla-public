
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';
import Script from 'next/script';
import { Inter, Space_Grotesk } from 'next/font/google';
import { RootLayoutClient } from '@/components/RootLayoutClient';
import { ThemeInitializer } from '@/components/ThemeInitializer';
import { Providers } from '@/components/Providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: {
    default: 'Studizilla',
    template: '%s | Studizilla',
  },
  description: 'Ace Your APs with AI-powered tools and comprehensive study guides.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Studizilla',
    title: {
      default: 'Studizilla',
      template: '%s | Studizilla',
    },
    description: 'Ace Your APs with AI-powered tools and comprehensive study guides.',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Studizilla',
      template: '%s | Studizilla',
    },
    description: 'Ace Your APs with AI-powered tools and comprehensive study guides.',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang="en" className={cn("!scroll-smooth", inter.variable, spaceGrotesk.variable)} suppressHydrationWarning>
      <head>
        <ThemeInitializer />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.desmos.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ajax.googleapis.com" />
      </head>
      <body className={cn("font-body antialiased")}>
        {/* Load CSS and scripts asynchronously for better performance */}
        <Script id="load-external-css" strategy="afterInteractive">
          {`
            // Load KaTeX CSS
            var katexLink = document.createElement('link');
            katexLink.rel = 'stylesheet';
            katexLink.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
            // integrity removed because CDN content may change in prod; rely on HTTPS + CSP
            katexLink.crossOrigin = 'anonymous';
            document.head.appendChild(katexLink);
            
            // Load MathQuill CSS
            var mathquillLink = document.createElement('link');
            mathquillLink.rel = 'stylesheet';
            mathquillLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.css';
            document.head.appendChild(mathquillLink);
          `}
        </Script>
        
        {/* Load scripts at end of body for better performance */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script 
          src="https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6" 
          strategy="lazyOnload"
        />
        <Script 
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" 
          strategy="lazyOnload"
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/mathquill/0.10.1/mathquill.js" 
          strategy="lazyOnload"
        />
        
        <Suspense fallback={null}>
            {/* GA is client-side only */}
        </Suspense>
        <Providers>
            <RootLayoutClient>{children}</RootLayoutClient>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
