
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { getApprovedReviews, type ReviewData } from '../actions';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { AceMascot } from '@/components/AceMascot';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const shuffleArray = <T,>(array: T[]): T[] => {
    if (!Array.isArray(array)) return [];
    let currentIndex = array.length;
    let randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const TestimonialCard = ({ name, title, review, rating, photoURL }: ReviewData) => (
    <div className="auth-testimonial-card rounded-2xl p-4 shadow-lg text-card-foreground">
        <div className="flex items-start gap-4">
            {photoURL ? (
                <div className="relative h-12 w-12 rounded-lg overflow-hidden shrink-0">
                    <Image src={photoURL} alt={name} layout="fill" objectFit="cover" />
                </div>
            ) : (
                <AceMascot className="h-12 w-12 shrink-0 p-1 bg-secondary rounded-lg" />
            )}
            <div>
                <h3 className="font-bold text-lg">{name}</h3>
            </div>
        </div>
        <div className="flex text-yellow-400 gap-1 my-3">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className={cn("h-5 w-5", i < rating ? "fill-current" : "")} />
            ))}
        </div>
        <p className="text-card-foreground/90 line-clamp-3">{review}</p>
    </div>
);

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [shuffledTestimonials, setShuffledTestimonials] = useState<ReviewData[]>([]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const reviews = await getApprovedReviews();
                setShuffledTestimonials(shuffleArray(reviews));
            } catch (error) {
                console.error("Failed to fetch testimonials for auth layout", error);
            }
        }
        fetchReviews();
    }, []);

    const columns = useMemo(() => {
        const midPoint = Math.ceil(shuffledTestimonials.length / 2);
        const firstHalf = shuffledTestimonials.slice(0, midPoint);
        const secondHalf = shuffledTestimonials.slice(midPoint);
        return [firstHalf, secondHalf];
    }, [shuffledTestimonials]);
    
    // If we're on the onboarding page, render a simpler layout without the animated background
    if (pathname === '/auth/onboarding' || pathname === '/auth/reset-password') {
        return <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-secondary/30">{children}</div>;
    }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-start justify-center bg-background p-4 overflow-x-hidden">
        <div className="flex w-full max-w-7xl mx-auto justify-center gap-8">
            {/* Left Testimonial Column */}
            <div className="hidden lg:block w-1/4 pt-8">
                <div className="flex flex-col">
                    {columns[0]?.map((t, cardIndex) => <TestimonialCard key={`col-0-${cardIndex}`} {...t} />)}
                </div>
            </div>
            
            {/* Central Auth Form Container */}
            <div className="w-full max-w-xl py-8 flex-shrink-0">
                <div className="bg-card rounded-2xl p-8 shadow-2xl flex items-center flex-col justify-center">
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>

            {/* Right Testimonial Column */}
            <div className="hidden lg:block w-1/4 pt-24">
                 <div className="flex flex-col">
                    {columns[1]?.map((t, cardIndex) => <TestimonialCard key={`col-1-${cardIndex}`} {...t} />)}
                </div>
            </div>
        </div>
    </div>
  );
}
