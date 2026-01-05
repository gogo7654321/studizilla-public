'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Brain, Clock, TrendingUp, Zap } from 'lucide-react';

export function StudizillaCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState([10]);
  const [numCourses, setNumCourses] = useState([3]);

  // Calculate savings and improvements
  const traditionalTime = hoursPerWeek[0] * numCourses[0];
  const studizillaTime = Math.round(traditionalTime * 0.6); // 40% time savings
  const timeSaved = traditionalTime - studizillaTime;
  const gradeImprovement = Math.min(35, Math.round((timeSaved / traditionalTime) * 50)); // Up to 35% improvement
  const flashcardsCreated = Math.round(hoursPerWeek[0] * numCourses[0] * 15); // ~15 cards per hour

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">
              The Studizilla Advantage
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">Calculate your potential time savings & grade boost</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-primary/20 bg-card/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Brain className="h-6 w-6 text-primary" />
                  Your Study Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Hours per week slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-muted-foreground">
                      Hours studying per week (per course)
                    </label>
                    <div className="text-2xl font-bold text-primary">
                      {hoursPerWeek[0]}h
                    </div>
                  </div>
                  <Slider
                    value={hoursPerWeek}
                    onValueChange={setHoursPerWeek}
                    min={1}
                    max={20}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1h</span>
                    <span>20h</span>
                  </div>
                </div>

                {/* Number of courses slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-semibold text-muted-foreground">
                      Number of AP/Honors courses
                    </label>
                    <div className="text-2xl font-bold text-purple-500">
                      {numCourses[0]}
                    </div>
                  </div>
                  <Slider
                    value={numCourses}
                    onValueChange={setNumCourses}
                    min={1}
                    max={8}
                    step={0.5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 course</span>
                    <span>8 courses</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Time Saved */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-2 border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Time Saved Weekly</p>
                      <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
                        {timeSaved} hours
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        That's {Math.round((timeSaved / 7) * 10) / 10} hours per day!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Grade Improvement */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Potential Grade Boost</p>
                      <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                        +{gradeImprovement}%
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Based on student averages
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Flashcards Generated */}
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">AI Flashcards Created</p>
                      <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
                        ~{flashcardsCreated}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Per week with AI generation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Summary */}
        <motion.div
          className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-muted-foreground mb-2">
            With Studizilla's AI-powered tools, you could save
          </p>
          <motion.p
            className="text-3xl sm:text-4xl font-black mb-2"
            key={`${timeSaved}-${gradeImprovement}`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
              {timeSaved * 52} hours per year
            </span>
            <span className="text-muted-foreground mx-3">and boost grades by</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              {gradeImprovement}%
            </span>
          </motion.p>
          <p className="text-sm text-muted-foreground mt-4">
            That's {Math.round(timeSaved * 52 / 24)} full days saved annually! 🎉
          </p>
        </motion.div>
      </div>
    </section>
  );
}
