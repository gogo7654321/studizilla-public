

'use client';

import { AceMascot } from '@/components/AceMascot';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, History } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-background p-4 md:p-8">
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
       >
        <Card className="w-full max-w-lg text-center shadow-lg">
              <CardHeader className="p-8">
                  <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                  >
                    <AceMascot className="mx-auto h-24 w-24" />
                  </motion.div>
                   <Badge variant="destructive" className="w-fit mx-auto my-4 text-base">404 Not Found</Badge>
                  <CardTitle className="font-headline text-4xl mt-2">This isn't the pool on the roof...</CardTitle>
                  <CardDescription className="pt-2 text-base text-muted-foreground">
                      Looks like you took a wrong turn somewhere. This page either doesn't exist or has been moved. Maybe try heading back to where you were?
                  </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       <Button asChild size="lg" variant="outline" className="font-bold">
                          <button onClick={() => router.back()}>
                              <History className="mr-2 h-5 w-5" />
                              Go Back
                          </button>
                      </Button>
                      <Button asChild size="lg" className="w-full font-bold">
                          <Link href="/">
                              <ArrowLeft className="mr-2 h-5 w-5" />
                              Go to Homepage
                          </Link>
                      </Button>
                  </div>
                   <p className="text-xs text-muted-foreground mt-4">
                      If you think this is a mistake, please check the URL or contact support.
                  </p>
              </CardContent>
          </Card>
        </motion.div>
    </div>
  );
}
