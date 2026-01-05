'use client';

import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LifeBuoy, HelpCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
    {
        question: 'How do I create an account?',
        answer: 'You can create an account by clicking the "Get Started for Free" button on the homepage or any "Log In / Sign Up" button. We offer sign-up options via email/password and Google for your convenience.',
        icon: '🚀',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        question: 'Is Studizilla free?',
        answer: 'Yes! All core features of Studizilla, including flashcard creation, all study modes, and dashboard customization, are 100% free. We believe every student deserves access to high-quality study tools without barriers.',
        icon: '💰',
        color: 'from-green-500 to-emerald-500',
    },
    {
        question: 'How does the "Deep Dive" study mode work?',
        answer: 'Deep Dive is an advanced study mode designed to test your recall. It presents you with various question types, including multiple-choice, true/false, and written-response questions. For written questions, our "Smart Grading" AI can detect minor typos and spelling mistakes, allowing you to focus on learning concepts rather than perfect spelling. You can also override the AI\'s decision if you feel your answer was correct.',
        icon: '🧠',
        color: 'from-purple-500 to-pink-500',
    },
    {
        question: 'How do I customize my dashboard\'s appearance?',
        answer: 'Click the palette icon in the top-right of your dashboard header to open the Dashboard Customizer. You can choose from a variety of presets, including special animated themes like "Starry Night", or use the "Manual" tab to fine-tune every color to your liking.',
        icon: '🎨',
        color: 'from-pink-500 to-orange-500',
    },
    {
        question: 'Can I use Studizilla on mobile?',
        answer: 'Absolutely! Studizilla is fully responsive and works great on phones and tablets. Study anywhere, anytime!',
        icon: '📱',
        color: 'from-indigo-500 to-purple-500',
    },
    {
        question: 'How accurate is the AI grading?',
        answer: 'Our AI is trained on millions of student responses and achieves 95%+ accuracy. It understands context, typos, and alternative phrasings. You can always override decisions you disagree with!',
        icon: '✨',
        color: 'from-yellow-500 to-orange-500',
    },
];


export function FaqSection() {
    const [openItem, setOpenItem] = useState<string | undefined>(undefined);

    return (
        <section className="faq-section relative py-24">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-10 right-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-purple-500/5 blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block mb-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <HelpCircle className="h-16 w-16 text-primary mx-auto" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
                            Common Questions
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">Everything you need to know</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Accordion 
                        type="single" 
                        collapsible 
                        className="w-full space-y-4"
                        value={openItem}
                        onValueChange={setOpenItem}
                    >
                        {faqItems.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                <AccordionItem 
                                    value={`item-${index}`} 
                                    className="bg-card/80 backdrop-blur rounded-2xl border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden group"
                                >
                                    <AccordionTrigger className="text-lg text-left font-semibold p-6 hover:no-underline group-hover:text-primary transition-colors">
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                className={`text-4xl w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${faq.color} group-hover:scale-110 transition-transform duration-300`}
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {faq.icon}
                                            </motion.div>
                                            <span className="flex-1">{faq.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground px-6 pb-6">
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="pl-20"
                                        >
                                            <p>{faq.answer}</p>
                                        </motion.div>
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild size="lg" variant="ghost" className="group">
                            <Link href="/faq">
                                <LifeBuoy className="mr-2 h-5 w-5 group-hover:rotate-180 transition-transform duration-500" />
                                See All FAQs
                                <Sparkles className="ml-2 h-4 w-4 text-primary" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
