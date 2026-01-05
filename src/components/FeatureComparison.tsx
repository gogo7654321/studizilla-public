'use client';

import { AceMascot } from "./AceMascot";
import { Check, Info, Minus, X, Zap, Shield, Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import './FeatureComparison.css';

const features = [
  {
    category: "Study Experience",
    items: [
      { name: "Customizable Dashboard", studizilla: true, quizlet: false, knowt: false, anki: false, tooltip: "A drag-and-drop dashboard for all your courses and decks." },
      { name: "Typed Recall Mode (Learn)", studizilla: true, quizlet: true, knowt: true, anki: true },
      { name: "Matching Game", studizilla: true, quizlet: true, knowt: true, anki: false },
      { name: "Advanced Appearance Customization", studizilla: true, quizlet: false, knowt: false, anki: false, tooltip: "Multiple preset themes, including animated ones, and a manual color editor." },
      { name: "Integrated Practice Test Environment", studizilla: true, quizlet: false, knowt: false, anki: false, tooltip: "Take full-length practice exams within the platform." },
    ],
  },
  {
    category: "AI & Automation",
    items: [
      { name: "Notes-to-Flashcards (AI)", studizilla: true, quizlet: true, knowt: true, anki: false, tooltip: "Instantly create decks from your notes." },
      { name: "AI Smart Grading for Typos", studizilla: true, quizlet: false, knowt: true, anki: false, tooltip: "Our AI understands typos so you can focus on concepts, not perfect spelling." },
      { name: "AI Suggests Deck Title & Details", studizilla: true, quizlet: false, knowt: false, anki: false },
      { name: "AI Practice Test Generation", studizilla: true, quizlet: true, knowt: true, anki: false },
      { name: "AI Essay Grader", studizilla: true, quizlet: false, knowt: false, anki: false, tooltip: "Get instant, rubric-aligned feedback on practice essays." },
    ],
  },
  {
    category: "Platform & Ecosystem",
    items: [
      { name: "Free with No Core Paywalls", studizilla: true, quizlet: false, knowt: false, anki: true, tooltip: "All core study modes and features are 100% free." },
      { name: "Text & Image Import", studizilla: true, quizlet: true, knowt: true, anki: true },
      { name: "Community & Social Features", studizilla: true, quizlet: true, knowt: true, anki: false },
      { name: "AP® & Honors Specific Content", studizilla: true, quizlet: false, knowt: false, anki: false },
      { name: "Live Support Chat", studizilla: true, quizlet: true, knowt: false, anki: false },
    ]
  }
];

const FeatureCheck = ({ available, isStudizilla }: { available: boolean | 'soon', isStudizilla?: boolean }) => {
    if (available === true) {
        return <Check className={cn('check-icon', isStudizilla && 'bg-green-500 text-white')} />;
    }
    if (available === 'soon') {
        return <Minus className={cn('cross-icon', isStudizilla && 'bg-blue-500/20 text-blue-500')} />;
    }
    return <X className={cn('cross-icon', isStudizilla ? 'bg-blue-500/20 text-blue-500' : 'bg-red-500/20 text-red-500')} />;
};


export function FeatureComparison() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<'quizlet' | 'knowt' | 'anki'>('quizlet');

  const studizillaScore = features.reduce((acc, cat) => 
    acc + cat.items.filter(item => item.studizilla === true).length, 0
  );
  
  const competitorScores = {
    quizlet: features.reduce((acc, cat) => 
      acc + cat.items.filter(item => item.quizlet === true).length, 0
    ),
    knowt: features.reduce((acc, cat) => 
      acc + cat.items.filter(item => item.knowt === true).length, 0
    ),
    anki: features.reduce((acc, cat) => 
      acc + cat.items.filter(item => item.anki === true).length, 0
    ),
  };

  const competitors = [
    { id: 'quizlet' as const, name: 'Quizlet', logo: '/images/logo/quizlet.webp', color: 'from-blue-600 to-blue-400' },
    { id: 'knowt' as const, name: 'Knowt', logo: '/images/logo/knowt.png', color: 'from-purple-600 to-purple-400' },
    { id: 'anki' as const, name: 'Anki', logo: '/images/logo/anki.png', color: 'from-gray-600 to-gray-400' },
  ];

  return (
    <section className="feature-comparison-section relative overflow-hidden py-24">
      <div className="comparison-container relative z-10 max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Shield className="h-16 w-16 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              The Studizilla Edge
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">See how we stack up against the competition</p>
        </motion.div>

        {/* Battle Arena Style Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Studizilla Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-50" />
            <div className="relative bg-card rounded-3xl p-8 border-4 border-primary">
              <div className="text-center mb-6">
                <motion.div
                  className="inline-block mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <AceMascot className="h-20 w-20" />
                </motion.div>
                <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                  Studizilla
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Your All-in-One Study Companion</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-primary/10 to-purple-500/10">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-semibold">Features</span>
                  </div>
                  <motion.span
                    className="text-3xl font-black text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.3 }}
                  >
                    {studizillaScore}
                  </motion.span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">100% Free Core</span>
                  </div>
                  <Check className="h-6 w-6 text-green-500" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold">AI-Powered</span>
                  </div>
                  <Check className="h-6 w-6 text-blue-500" />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-black text-primary">5K+</p>
                    <p className="text-xs text-muted-foreground">Students</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-purple-500">100K+</p>
                    <p className="text-xs text-muted-foreground">Flashcards</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-pink-500">4.9★</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Competitor Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-card rounded-3xl p-8 border-2 border-border">
              
              {/* Competitor Selector */}
              <div className="flex gap-2 mb-6 justify-center">
                {competitors.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedCompetitor(comp.id)}
                    className={cn(
                      "px-4 py-2 rounded-xl font-semibold transition-all duration-300",
                      selectedCompetitor === comp.id
                        ? `bg-gradient-to-r ${comp.color} text-white`
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                    )}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>

              <div className="text-center mb-6">
                <motion.div
                  key={selectedCompetitor}
                  className="inline-block mb-4 relative h-20 w-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring" }}
                >
                  <Image
                    src={competitors.find(c => c.id === selectedCompetitor)!.logo}
                    alt={selectedCompetitor}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <h3 className="text-3xl font-black">
                  {competitors.find(c => c.id === selectedCompetitor)!.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Traditional Study Tool</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">Features</span>
                  </div>
                  <motion.span
                    key={`${selectedCompetitor}-score`}
                    className="text-3xl font-black text-muted-foreground"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    {competitorScores[selectedCompetitor]}
                  </motion.span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">100% Free Core</span>
                  </div>
                  {selectedCompetitor === 'anki' ? (
                    <Check className="h-6 w-6 text-green-500" />
                  ) : (
                    <X className="h-6 w-6 text-red-500" />
                  )}
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">AI-Powered</span>
                  </div>
                  {selectedCompetitor === 'anki' ? (
                    <X className="h-6 w-6 text-red-500" />
                  ) : (
                    <Check className="h-6 w-6 text-green-500 opacity-50" />
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-sm text-muted-foreground">
                  Missing {studizillaScore - competitorScores[selectedCompetitor]} key features
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Breakdown */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Feature Breakdown</h3>
          <div className="space-y-6">
            {features.map((category, catIndex) => (
              <motion.div
                key={category.category}
                className="bg-card rounded-2xl p-6 border-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {category.category}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.items.map((item, itemIndex) => (
                    <TooltipProvider key={itemIndex}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className={cn(
                            "flex items-center gap-2 p-3 rounded-lg transition-all duration-200",
                            item.studizilla && !item[selectedCompetitor] 
                              ? "bg-primary/10 border border-primary/20" 
                              : "bg-secondary/50"
                          )}>
                            <FeatureCheck available={item.studizilla} isStudizilla={true} />
                            <span className="text-sm flex-1">{item.name}</span>
                            {item.studizilla && !item[selectedCompetitor] && (
                              <Sparkles className="h-4 w-4 text-primary" />
                            )}
                            {item.tooltip && <Info className="h-4 w-4 text-muted-foreground" />}
                          </div>
                        </TooltipTrigger>
                        {item.tooltip && (
                          <TooltipContent side="top">
                            <p className="max-w-xs">{item.tooltip}</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
