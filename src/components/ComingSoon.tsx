
'use client';
import { AceMascot } from "@/components/AceMascot";
import { motion } from 'framer-motion';

export function ComingSoon({ pageName, releaseDate = "soon" }: { pageName: string; releaseDate?: "soon" | "saturday" }) {
  const isSaturdayRelease = releaseDate === "saturday";

  return (
    <motion.div 
      className="container mx-auto px-4 md:px-6 py-20 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AceMascot className="mx-auto h-24 w-24" />
      <motion.h1 
        className="mt-4 text-4xl font-bold font-headline tracking-tighter sm:text-5xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {`${pageName} Page Coming Soon!`}
      </motion.h1>
      <motion.p 
        className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        We're working hard to bring you this feature. Check back soon for updates.
      </motion.p>
    </motion.div>
  );
}
