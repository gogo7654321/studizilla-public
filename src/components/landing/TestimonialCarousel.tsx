'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { AceMascot } from '@/components/AceMascot';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/lib/testimonials';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const currentTestimonial = testimonials?.[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Safety check - must come after all hooks
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="relative h-[400px] flex items-center justify-center perspective-1000">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              rotateY: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            <Card className="bg-gradient-to-br from-card to-card/50 backdrop-blur-xl border-2 shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  {currentTestimonial?.image ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/10 p-2">
                      <AceMascot className="w-full h-full" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl">{currentTestimonial?.name}</h3>
                    <p className="text-sm text-muted-foreground">{currentTestimonial?.location}</p>
                    <div className="flex text-yellow-400 gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn('h-4 w-4', i < (currentTestimonial?.stars || 0) ? 'fill-current' : '')}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">{currentTestimonial?.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{currentTestimonial?.text}</p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {currentTestimonial?.isOG && (
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold">
                      OG User
                    </span>
                  )}
                  {currentTestimonial?.isMostImproved && (
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold">
                      Most Improved
                    </span>
                  )}
                  {currentTestimonial?.specialTag && (
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold">
                      {currentTestimonial.specialTag}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={() => paginate(-1)}
          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                'w-2 h-2 rounded-full transition-all duration-300',
                index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              )}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => paginate(1)}
          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
