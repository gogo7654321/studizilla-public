

'use client';

import React, { useState, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LifeBuoy, Search, Lightbulb, User, BookCopy, BrainCircuit, Gamepad2, Palette } from 'lucide-react';
import Link from 'next/link';

const faqData = [
    // Account & Getting Started
    {
        category: 'Account & Getting Started',
        question: 'How do I create an account?',
        answer: 'Create an account by clicking the log in button on the homepage. Then switch to the sign-up tab to see that we offer sign-up options via email/password and Google for your convenience.',
    },
    {
        category: 'Account & Getting Started',
        question: 'Is Studizilla free?',
        answer: 'Yes Stuizilla is completly free as we use our product to boost the learning of students not our money. We have also increased AI usage limits for your advantage!',
    },
    {
        category: 'Account & Getting Started',
        question: 'How do I reset my password?',
        answer: "On the login page, click the 'Forgot password?' link. Enter your account's email address, and we'll send you a secure link to set a new password. If you signed up with Google, you'll need to manage your password through your Google account.",
    },
    {
        category: 'Account & Getting Started',
        question: 'How do I delete my account?',
        answer: 'Yes on the dashboard, click the settings icon on the sidebar, navigate to the account tab on the top bar, and scroll down to see the red delete account button, after confirmation you can delete your data worry free!',
    },
    {
        category: 'Account & Getting Started',
        question: 'How do I request my data?',
        answer: 'You can request a copy of all your data from the Account Settings page. We will compile your data and send it to your registered email address. If this does not work just contact support on the support page.',
    },
    // Flashcards & Decks
    {
        category: 'Flashcards & Decks',
        question: 'How do I create a new flashcard deck?',
        answer: 'You can create a new deck from the Flashcards page by clicking the "Create New Deck" button. This will open a creation hub where you can start building a deck from scratch, import from text, or use our AI to generate a deck from your notes.',
    },
    {
        category: 'Flashcards & Decks',
        question: 'How do I import flashcards?',
        answer: 'From the "Create New Deck" dialog, select "Import Manually". You can then paste text from a document. Our importer allows you to specify the separator between terms and definitions (like a tab or comma) and between cards (like a new line) to correctly parse your data.',
    },
    {
        category: 'Flashcards & Decks',
        question: 'Can I add hashtags to my decks?',
        answer: 'Yes! You can add hashtags (like #history or #final-exam) to your decks to keep them organized. Click the settings icon on a deck card in the Flashcards page and select "Edit tags". You can then search for decks using these hashtags in the search bar.',
    },
    {
        category: 'Flashcards & Decks',
        question: 'What are study defaults?',
        answer: 'You can set default study preferences for each deck, such as whether to start by showing the term or definition, and the flip animation style. This is done via the settings icon on a deck card in the Flashcards page. These defaults are applied when you start a study session.',
    },
    // Study Modes
    {
        category: 'Study Modes',
        question: 'What is the Flashcards mode?',
        answer: 'This is the classic study mode. You can flip through your cards, mark them as correct or incorrect to update your mastery progress, and use keyboard shortcuts (Spacebar to flip, arrow keys to navigate) for quick studying.',
    },
    {
        category: 'Study Modes',
        question: 'How does the "Deep Dive" mode work?',
        answer: 'Deep Dive is an advanced study mode designed to test your recall. It presents you with various question types, including multiple-choice, true/false, and written-response questions. For written questions, our "Smart Grading" AI can detect minor typos and spelling mistakes, allowing you to focus on learning concepts rather than perfect spelling. You can also override the AI\'s decision if you feel your answer was correct.',
    },
     {
        category: 'Study Modes',
        question: 'How does the "Matching Game" mode work?',
        answer: 'The Matching Game turns your deck into a race against the clock. You\'ll be presented with a grid of cards (terms and definitions) and must match the correct pairs as quickly as possible. It\'s a fun and fast way to reinforce your knowledge.',
    },
    {
        category: 'Study Modes',
        question: 'What is "Mastery Progress"?',
        answer: 'As you study in Flashcards or Deep Dive mode, we track your performance on each card. Cards are categorized as New, Learning, Almost Done, or Mastered. This helps you visualize your strengths and weaknesses in a deck so you can focus your efforts effectively.',
    },
    // AI Tools
    {
        category: 'AI Tools',
        question: 'How does the Notes-to-Flashcards tool work?',
        answer: 'You can find this tool in the "Create New Deck" dialog on your Flashcards dashboard. Simply paste your class notes, a textbook chapter, or any block of text, and our AI will analyze it to automatically extract key terms and definitions, creating a structured flashcard deck for you in seconds.',
    },
    {
        category: 'AI Tools',
        question: 'Can the AI help me title my deck?',
        answer: 'Yes! After you\'ve added cards to a deck in the editor, you can click the "AI Suggest Details" button. The AI will analyze the content of your cards and make s title, description, course, and hashtags.',
    },
    // Profile & Social
    {
        category: 'Profile & Social',
        question: 'How do I change my profile picture or name?',
        answer: 'You can change your name, username, and status message on the Account Settings page, this can be found from the dashboard sidebar. Profile picture and banner uploads are coming soon!',
    },
    {
        category: 'Profile & Social',
        question: 'How do I make my profile private?',
        answer: 'Navigate to your Account Settings page from the dashboard. There, you will find a "Profile Privacy" section with a switch to toggle your profile between public and private. When private, other users will not be able to see your activity or profile details.',
    },
    {
        category: 'Profile & Social',
        question: 'How do I customize my dashboard\'s appearance?',
        answer: 'Click the painter icon in the top-right of your dashboard header to open the Dashboard Customizer. You can choose from a variety of presets, including special animated themes like "Starry Night", or use the "Manual" tab to fine-tune every color to your liking.',
    },
    {
        category: 'Profile & Social',
        question: 'How do I follow other users?',
        answer: 'You can find other users through the search bar on the Social page. On their profile, you will see a "Follow" button. When two users follow each other, they become friends, which will enable direct messaging in a future update.',
    },
];

const popularQuestions = [
    faqData.find(f => f.question === 'How do I create a new flashcard deck?'),
    faqData.find(f => f.question === 'How does the "Deep Dive" mode work?'),
    faqData.find(f => f.question === 'How do I customize my dashboard\'s appearance?'),
].filter(Boolean) as typeof faqData;

const categorizedFaqs = faqData.reduce((acc, faq) => {
    if (!acc[faq.category]) {
        acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
}, {} as Record<string, typeof faqData>);

export default function FaqPageClient() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFaqs = useMemo(() => {
        if (!searchTerm) {
            return categorizedFaqs;
        }
        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered: Record<string, typeof faqData> = {};
        for (const category in categorizedFaqs) {
            const matchingFaqs = categorizedFaqs[category].filter(
                faq =>
                    faq.question.toLowerCase().includes(lowercasedTerm) ||
                    faq.answer.toLowerCase().includes(lowercasedTerm)
            );
            if (matchingFaqs.length > 0) {
                filtered[category] = matchingFaqs;
            }
        }
        return filtered;
    }, [searchTerm]);

    const categoryIcons: Record<string, React.ElementType> = {
        'Account & Getting Started': User,
        'Flashcards & Decks': BookCopy,
        'Study Modes': Gamepad2,
        'AI Tools': BrainCircuit,
        'Profile & Social': Palette,
    };
    
    return (
        <div className="bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
                <header className="text-center max-w-3xl mx-auto">
                    <LifeBuoy className="mx-auto h-16 w-16 text-primary" />
                    <h1 className="mt-4 text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Have a question? We're here to help. Find answers below or use our{' '}
                        <Link href="/support" className="font-semibold underline hover:text-primary">
                          live support chat
                        </Link>
                        {' '}or email{' '}
                        <a href="mailto:team@studizilla.com" className="font-semibold underline hover:text-primary">
                          team@studizilla.com
                        </a>
                    </p>
                    <div className="mt-8 max-w-lg mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search questions..."
                            className="pl-12 h-12 text-lg"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </header>

                <section className="mt-16">
                     <h2 className="text-2xl font-bold text-center mb-8">Popular Questions</h2>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {popularQuestions.map((faq, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <Lightbulb className="h-6 w-6 text-primary mb-2" />
                                    <CardTitle>{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{faq.answer.substring(0, 100)}...</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
                
                 <section className="mt-16 max-w-4xl mx-auto">
                    {Object.keys(filteredFaqs).length > 0 ? (
                        Object.entries(filteredFaqs).map(([category, faqs]) => {
                            const Icon = categoryIcons[category] || Lightbulb;
                            return (
                                <div key={category} className="mb-12">
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Icon className="h-7 w-7 text-primary" />
                                        {category}
                                    </h3>
                                    <Accordion type="single" collapsible className="w-full space-y-2">
                                        {faqs.map((faq, index) => (
                                            <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-lg border">
                                                <AccordionTrigger className="text-lg text-left p-6 hover:no-underline">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-base text-muted-foreground px-6">
                                                    <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }} />
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            )
                        })
                    ) : (
                        <div className="text-center py-16 text-muted-foreground">
                            <h3 className="text-xl font-semibold">No questions found</h3>
                            <p>Your search for "{searchTerm}" did not match any FAQs. Please try a different search term or use our{' '}
                            <Link href="/support" className="font-semibold underline hover:text-primary">live support chat</Link>
                            {' '}or email{' '}
                            <a href="mailto:team@studizilla.com" className="font-semibold underline hover:text-primary">team@studizilla.com</a></p>
                        </div>
                    )}
                </section>

                <section className="mt-20 text-center">
                    <Card className="max-w-2xl mx-auto p-8">
                        <CardTitle className="text-2xl font-bold">Still have questions?</CardTitle>
                        <CardDescription className="mt-2">
                            If you can't find the answer you're looking for, use our live support chat or email us at{' '}
                            <a href="mailto:team@studizilla.com" className="font-semibold underline hover:text-primary">
                              team@studizilla.com
                            </a>
                        </CardDescription>
                        <Button asChild className="mt-6">
                            <Link href="/support">Live Support Chat</Link>
                        </Button>
                    </Card>
                </section>
            </div>
        </div>
    );
}
