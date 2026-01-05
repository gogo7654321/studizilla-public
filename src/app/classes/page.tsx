
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, BookOpen, Check, ArrowRight, FolderKanban, Award, BookCopy } from 'lucide-react';
import './courses.css';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { logUserAction } from '@/lib/logging';
import { db } from '@/lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/lib/courses';
import type { Course } from '@/lib/courses';
import { CourseIcon } from '@/components/CourseIcon';
import { toggleCourseAction } from './actions';
import { useToast } from '@/hooks/use-toast';

export default function CoursesPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [addedCourses, setAddedCourses] = useState(new Set<string>());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      }
    }
  };


  useEffect(() => {
    if (!user) {
      setAddedCourses(new Set());
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
    
    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().addedCourses) {
        setAddedCourses(new Set(docSnap.data().addedCourses));
      } else {
        setAddedCourses(new Set());
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const handleToggleCourse = async (e: React.MouseEvent, courseId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
        toast({
            title: "Login to add courses",
            description: "Create a free account to add courses to your dashboard.",
            action: <Button asChild><Link href="/auth">Log In</Link></Button>
        });
        return;
    }
    
    try {
        await toggleCourseAction(user.uid, courseId);
        toast({
            title: addedCourses.has(courseId) ? "Course removed" : "Course added",
            description: addedCourses.has(courseId) ? "Removed from your courses" : "Added to your courses"
        });
    } catch (error) {
      console.error("Error updating courses:", error);
      toast({
        title: "Error",
        description: "Failed to update course. Please try again.",
        variant: "destructive"
      });
    }
  };

  const { totalCourseCount, subjectCount, apCourseCount, honorsCourseCount } = useMemo(() => {
    return {
      totalCourseCount: courses.length,
      subjectCount: new Set(courses.map(c => c.subject)).size,
      apCourseCount: courses.filter(c => c.name.startsWith('AP')).length,
      honorsCourseCount: courses.filter(c => c.name.includes('Honors')).length,
    }
  }, []);

  // Filter courses based on search term
  const filteredCourses = useMemo(() => {
    if (!searchTerm.trim()) return courses;
    
    const searchLower = searchTerm.toLowerCase();
    
    return courses.filter(course => {
        const courseNameLower = course.name.toLowerCase();
        
        const coreSubject = courseNameLower
            .replace(/ap®/g, '')
            .replace(/honors/g, '')
            .replace(/i|ii|iii|iv/g, '')
            .replace(/(: modern|: algebra based)/g, '')
            .replace(/ and /g, ' & ')
            .replace(/ & /g, ' ')
            .replace(/,/g, '')
            .trim();

        return (
            courseNameLower.includes(searchLower) ||
            coreSubject.includes(searchLower) ||
            course.subject.toLowerCase().includes(searchLower) ||
            course.description.toLowerCase().includes(searchLower) ||
            course.abbreviations?.some(abbr => abbr.toLowerCase().includes(searchLower))
        );
    });
  }, [searchTerm]);

  const groupedCourses = useMemo(() => {
    return filteredCourses.reduce((acc, course) => {
        const { subject } = course;
        if (!acc[subject]) {
            acc[subject] = [];
        }
        acc[subject].push(course);
        return acc;
    }, {} as Record<string, typeof courses>);
  }, [filteredCourses]);
  
  const subjectOrder = ['Arts', 'Computer Science', 'English', 'Mathematics', 'Science', 'Social Studies', 'World Languages', 'Academic Electives'];


  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="loading-grid">
      {[...Array(12)].map((_, index) => (
        <div key={index} className="loading-card">
          <div className="loading-image"></div>
          <div className="loading-content">
            <div className="loading-title"></div>
            <div className="loading-text"></div>
            <div className="loading-text short"></div>
            <div className="loading-text shorter"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="courses-page">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="courses-header"
      >
        <h1 className="courses-title">Courses</h1>
        <div className="underline"></div>
        <p className="courses-subtitle">
          Excel in your studies with our never ending collection of AP® and Honors courses. Each course has rigorous curriculum, expert instruction, and resources to help you succeed.
        </p>
        <motion.div 
            className="stats-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={cardVariants} className="stat-item">
                <BookCopy className="stat-icon" />
                <span className="stat-number">{totalCourseCount}</span>
                <span className="stat-label">Total Courses</span>
            </motion.div>
            <motion.div variants={cardVariants} className="stat-item">
                <Award className="stat-icon" />
                <span className="stat-number">{apCourseCount}</span>
                <span className="stat-label">AP® Courses</span>
            </motion.div>
            <motion.div variants={cardVariants} className="stat-item">
                <BookOpen className="stat-icon" />
                <span className="stat-number">{honorsCourseCount}</span>
                <span className="stat-label">Honors Courses</span>
            </motion.div>
            <motion.div variants={cardVariants} className="stat-item">
                <FolderKanban className="stat-icon" />
                <span className="stat-number">{subjectCount}</span>
                <span className="stat-label">Subject Areas</span>
            </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="search-section"
      >
        <div className="search-container">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Search courses by name, description, or subject..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        {searchTerm && (
          <div className="search-results-info">
            Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} matching "{searchTerm}"
          </div>
        )}
      </motion.div>

      <div className="courses-container">
        {isLoading ? (
          <LoadingSkeleton />
        ) : Object.keys(groupedCourses).length > 0 ? (
            subjectOrder.map(subject => {
                if (!groupedCourses[subject]) return null;
                return (
                    <section key={subject} className="mb-12">
                        <h2 className="text-3xl font-bold mb-6 font-headline">{subject}</h2>
                        <motion.div 
                            className="courses-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {groupedCourses[subject].map((course) => (
                              <motion.div
                                key={course.id}
                                variants={cardVariants}
                                className="course-card group"
                              >
                              <Link href={`/classes/${course.slug}`}>
                                <div className="course-image-container">
                                  <div className="course-icon-wrapper">
                                    <CourseIcon iconName={course.icon} className="h-[60px] w-[60px]" />
                                  </div>
                                  <div className="subject-badge">{course.subject}</div>
                                </div>
                                <div className="course-content">
                                  <h3 className="course-title">{course.name}</h3>
                                  <p className="course-description">{course.description}</p>
                                  <div className="course-footer">
                                    {user ? (
                                       <div className="flex items-center justify-between w-full gap-2">
                                         <div className="flex-1">
                                           <span className="font-semibold text-primary inline-flex items-center gap-1">
                                             Learn More
                                             <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                           </span>
                                         </div>
                                         {course.comingSoon ? (
                                           <Badge variant="outline" className="font-semibold">Coming Soon</Badge>
                                         ) : (
                                           <Button
                                             variant={addedCourses.has(course.id) ? "secondary" : "default"}
                                             className={addedCourses.has(course.id) ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50" : ""}
                                             onClick={(e) => handleToggleCourse(e, course.id)}
                                           >
                                             {addedCourses.has(course.id) ? 
                                                <><Check className="mr-2 h-4 w-4" /> Added</> : 
                                                <>Add Course</>
                                             }
                                           </Button>
                                         )}
                                       </div>
                                    ) : (
                                      course.comingSoon ? (
                                        <>
                                          <div className="learn-more-btn mr-4">
                                            Learn More
                                            <span className="btn-arrow">→</span>
                                          </div>
                                          <Badge variant="outline" className="font-semibold">Coming Soon</Badge>
                                        </>
                                      ) : (
                                        <div className="learn-more-btn">
                                          Learn More
                                          <span className="btn-arrow">→</span>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </Link>
                              </motion.div>
                            ))}
                        </motion.div>
                    </section>
                )
            })
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No courses found</h3>
            <p>
              We couldn't find any courses matching "{searchTerm}". 
              Try adjusting your search terms or browse all available courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-6">
              <button 
                className="clear-search-btn"
                onClick={() => setSearchTerm('')}
              >
                Show All Courses
              </button>
              <span className="text-muted-foreground">or</span>
              <Button asChild variant="outline">
                <Link href="/support">Suggest a Course</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Don't see the course you're looking for? Contact our support team to suggest a new course.
            </p>
          </div>
        )}
        
        {/* Contact Support Section */}
        {!searchTerm && Object.keys(groupedCourses).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 mb-8 text-center"
          >
            <div className="max-w-2xl mx-auto p-8 rounded-2xl border-2 border-dashed border-primary/20 bg-secondary/30">
              <h3 className="text-2xl font-bold mb-3">Don't See Your Course?</h3>
              <p className="text-muted-foreground mb-6">
                We're constantly adding new courses. If you don't see the course you're looking for, let us know!
              </p>
              <Button asChild size="lg">
                <Link href="/support">
                  Suggest a Course
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
