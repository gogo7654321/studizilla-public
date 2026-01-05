
'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Facebook, Youtube, Send, Loader2, Star } from "lucide-react";
import { AceMascot } from "./AceMascot";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { submitReviewAction } from "@/app/actions";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "./ui/dialog";
import { cn } from "@/lib/utils";

const footerLinks = {
  resources: [
    { name: "All Courses", href: "/classes" },
    { name: "Practice Tests", href: "/tools/practice-test" },
    { name: "Essay Grader", href: "/tools/essay-grader" },
    { name: "AI Tools", href: "/tools" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Support", href: "/support" },
    { name: "FAQ", href: "/faq" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "DMCA Takedown/Report", href: "/takedown" },
    { name: "COPPA Notice", href: "/coppa" },
  ]
};

function ReviewForm() {
    const { user } = useAuth();
    const { toast } = useToast();
    
    const [isOpen, setIsOpen] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const MAX_REVIEW_LENGTH = 500;
    
    useEffect(() => {
        if (isOpen && user) {
            setName(user.displayName || '');
        } else if (isOpen && !user) {
            setName(''); // Clear name if guest
        }
    }, [isOpen, user]);

    const handleStarClick = (rate: number) => {
        setRating(rate);
        setIsOpen(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !title.trim() || !review.trim()) {
            toast({ variant: 'destructive', title: 'Please fill out all fields.' });
            return;
        }

        setIsSubmitting(true);
        try {
            await submitReviewAction({
                uid: user?.uid || 'guest', // Use 'guest' or similar for non-logged-in users
                name: name,
                photoURL: user?.photoURL || '',
                rating: rating,
                title,
                review
            });
            toast({ 
                title: 'Review Submitted!', 
                description: 'Thank you! We will review it and notify you if it gets featured.' 
            });
            setIsOpen(false);
            setTitle('');
            setReview('');
            setRating(0);
            setName('');
        } catch (error: any) {
            toast({ variant: 'destructive', title: 'Submission Failed', description: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <div className="space-y-3 relative">
                <h4 className="font-semibold font-headline">Rate Us</h4>
                <p className="text-muted-foreground text-sm max-w-md">Enjoying Studizilla? We'd love to hear your feedback. Your review might be featured on our site!</p>
                <div className="flex items-center gap-1" onMouseLeave={() => setHoverRating(0)}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <DialogTrigger asChild key={star}>
                            <button
                                type="button"
                                onMouseEnter={() => setHoverRating(star)}
                                onClick={() => handleStarClick(star)}
                                className="focus:outline-none"
                            >
                                <Star className={cn(
                                    "h-8 w-8 cursor-pointer transition-colors",
                                    star <= (hoverRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                )} />
                            </button>
                        </DialogTrigger>
                    ))}
                </div>
            </div>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Write a Review</DialogTitle>
                    <DialogDescription>
                        Your feedback helps us improve Studizilla for everyone.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                             <Star key={star} className={cn("h-6 w-6", star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300" )} />
                        ))}
                    </div>
                     <div>
                        <Label htmlFor="review-name">Your Name</Label>
                        <Input 
                            id="review-name" 
                            placeholder="e.g., Alex Doe" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>
                     <div>
                        <Label htmlFor="review-title">Title</Label>
                        <Input 
                            id="review-title" 
                            placeholder="e.g., A real lifesaver!" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </div>
                    <div>
                        <Label htmlFor="review-text">Your Review</Label>
                        <Textarea
                            id="review-text"
                            placeholder="This app helped me so much with..."
                            rows={5}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            maxLength={MAX_REVIEW_LENGTH}
                            disabled={isSubmitting}
                        />
                        <p className="text-xs text-muted-foreground text-right mt-1">
                            {review.length} / {MAX_REVIEW_LENGTH}
                        </p>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="ghost">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                            Submit Review
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export function Footer() {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const isHidden = pathname.startsWith('/auth') || pathname.startsWith('/dashboard/dev');
  if (isHidden) return null;

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <AceMascot className="h-10 w-10" />
              <h3 className="text-2xl font-bold font-headline">Studizilla</h3>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Make studying worry-free with our AI tools, AP class guides, and new features every week!
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="https://www.instagram.com/studizilla_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="Facebook"><Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
              <Link href="#" aria-label="YouTube"><Youtube className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" /></Link>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <FooterLinkGroup title="Resources" links={footerLinks.resources} />
            <FooterLinkGroup title="Company" links={footerLinks.company} />
            <FooterLinkGroup title="Legal" links={footerLinks.legal} />
          </div>
        </div>
        
        <div className="mt-12 border-t pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ReviewForm />
          <div className="space-y-3 relative">
             <h4 className="font-semibold font-headline">Stay Updated</h4>
            <p className="text-muted-foreground text-sm max-w-md">Subscribe to our newsletter for study tips, updates, and special offers.</p>
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 max-w-sm">
              <Input type="email" placeholder="you@example.com" className="bg-background" disabled/>
              <Button type="submit" disabled>Subscribe</Button>
            </form>
            <Badge className="absolute top-0 right-0 -mt-2">Coming Soon</Badge>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Studizilla. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold font-headline">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
