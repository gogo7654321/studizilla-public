'use client';

import React, { useState, useTransition, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Trash2, 
  Edit, 
  Eye, 
  EyeOff, 
  FileUp,
  HelpCircle,
  GraduationCap,
  Clock,
  Maximize2,
  Search,
  X,
  ImageIcon,
  Table,
  FolderUp,
  FileText,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { CourseContent } from '@/lib/course-content-schema';
import type { CourseStudyGuide } from '@/lib/course-study-guides-schema';
import { parseStudyGuides } from '@/lib/bulk-import-parser';
import { courses } from '@/lib/courses';
import { MathRenderer } from '@/components/MathRenderer';
import { ContentRenderer } from '@/components/ContentRenderer';
import { TimelineRenderer, parseTimelineBlock } from '@/components/TimelineRenderer';
import { CodeBlockRenderer, parseCodeBlock } from '@/components/CodeBlockRenderer';
import { 
  getCourseStudyGuides,
  createStudyGuide,
  updateStudyGuide,
  deleteStudyGuide,
  batchCreateStudyGuides,
  batchUpdateStudyGuides,
  batchDeleteStudyGuides
} from '../course-study-guides-actions';
import { parseStudyGuidesWithUnits, STUDYGUIDE_FORMAT_GUIDE, type StudyGuideWithUnit } from '@/lib/bulk-import-parser';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';

// Helper function to parse inline markdown formatting (bold, italic)
const parseInlineMarkdown = (text: string): React.ReactNode[] => {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  
  // Match ***text*** (bold+italic), **text** (bold), *text* (italic)
  const regex = /(\*\*\*([^*]+)\*\*\*|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }
    
    // Add formatted text
    if (match[2]) {
      // ***text*** - bold and italic
      elements.push(<strong key={key++}><em>{match[2]}</em></strong>);
    } else if (match[3]) {
      // **text** - bold
      elements.push(<strong key={key++}>{match[3]}</strong>);
    } else if (match[4]) {
      // *text* - italic
      elements.push(<em key={key++}>{match[4]}</em>);
    }
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }
  
  return elements.length > 0 ? elements : [text];
};

// Wrapper component for rendering text with both markdown and math
const RichTextRenderer: React.FC<{ content: string }> = ({ content }) => {
  // First parse inline markdown, then render math in each segment
  const segments = parseInlineMarkdown(content);
  
  return (
    <>
      {segments.map((segment, idx) => {
        if (typeof segment === 'string') {
          return <MathRenderer key={idx} content={segment} />;
        }
        // For JSX elements (bold/italic), we need to render math inside them
        if (React.isValidElement(segment)) {
          const text = segment.props.children;
          if (typeof text === 'string') {
            return React.cloneElement(segment, { key: idx, children: <MathRenderer content={text} /> });
          }
          // Nested bold+italic
          if (React.isValidElement(text)) {
            const innerText = text.props.children;
            if (typeof innerText === 'string') {
              return React.cloneElement(segment, { 
                key: idx, 
                children: React.cloneElement(text, { children: <MathRenderer content={innerText} /> })
              });
            }
          }
        }
        return segment;
      })}
    </>
  );
};
import { motion, AnimatePresence } from 'framer-motion';

interface StudyGuidesTabProps {
  courseId: string;
  content: CourseContent;
  studyGuides?: CourseStudyGuide[];
  onUpdate: () => void;
}

export function StudyGuidesTab({ courseId, content, studyGuides: initialStudyGuides = [], onUpdate }: StudyGuidesTabProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  
  // Data state
  const [studyGuides, setStudyGuides] = useState<CourseStudyGuide[]>(initialStudyGuides);
  const [isLoadingStudyGuides, setIsLoadingStudyGuides] = useState(false);
  
  // Dialog states
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);
  const [isFormatGuideOpen, setIsFormatGuideOpen] = useState(false);
  const [isFileUploadOpen, setIsFileUploadOpen] = useState(false);
  const [editingGuide, setEditingGuide] = useState<CourseStudyGuide | null>(null);
  
  // Bulk import
  const [bulkText, setBulkText] = useState('');
  const [parsedGuides, setParsedGuides] = useState<StudyGuideWithUnit[]>([]);
  
  // File upload state - now uses flat list of all guides with course info
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [allParsedGuides, setAllParsedGuides] = useState<{
    id: string; // temp ID for editing/deleting
    filename: string;
    courseSlug: string;
    courseId: string | null;
    courseName: string | null;
    guide: StudyGuideWithUnit;
  }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // File upload editing state
  const [editingUploadGuide, setEditingUploadGuide] = useState<string | null>(null);
  const [uploadSearchQuery, setUploadSearchQuery] = useState('');
  const [uploadFilterCourse, setUploadFilterCourse] = useState<string>('all');
  const [previewUploadGuide, setPreviewUploadGuide] = useState<{
    id: string;
    guide: StudyGuideWithUnit;
    courseName: string | null;
  } | null>(null);
  
  // Progress indicators
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [deleteProgress, setDeleteProgress] = useState({ current: 0, total: 0 });
  
  // Selection
  const [selectedGuides, setSelectedGuides] = useState<Set<string>>(new Set());
  
  // Preview
  const [previewGuide, setPreviewGuide] = useState<CourseStudyGuide | null>(null);
  
  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  
  // Form data
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    difficulty: 'intermediate' as 'beginner' | 'intermediate' | 'advanced',
    estimatedTime: '',
    tags: '',
    coverImage: '',
    isPublished: false
  });

  // Sync with prop changes
  useEffect(() => {
    setStudyGuides(initialStudyGuides);
  }, [initialStudyGuides]);

  const loadStudyGuides = async () => {
    try {
      setIsLoadingStudyGuides(true);
      const loadedGuides = await getCourseStudyGuides(courseId);
      setStudyGuides(loadedGuides);
      onUpdate();
    } catch (error) {
      console.error('Failed to load study guides:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to load study guides' });
    } finally {
      setIsLoadingStudyGuides(false);
    }
  };

  // Auto-parse with debounce
  const parseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (parseTimeoutRef.current) clearTimeout(parseTimeoutRef.current);
    
    if (!bulkText.trim()) {
      setParsedGuides([]);
      return;
    }

    parseTimeoutRef.current = setTimeout(() => {
      try {
        const parsed = parseStudyGuidesWithUnits(bulkText);
        setParsedGuides(parsed);
        if (parsed.length === 0) {
          console.log('No guides parsed. Check format.');
        }
      } catch (error) {
        console.error('Parse error:', error);
        setParsedGuides([]);
      }
    }, 500);

    return () => {
      if (parseTimeoutRef.current) clearTimeout(parseTimeoutRef.current);
    };
  }, [bulkText]);

  // Filter logic
  const filteredGuides = (studyGuides || []).filter(g => {
    const matchesSearch = searchQuery === '' || 
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesDifficulty = filterDifficulty === 'all' || g.difficulty === filterDifficulty;
    
    return matchesSearch && matchesDifficulty;
  });

  // Batch operations
  const toggleSelectGuide = (id: string) => {
    const newSelected = new Set(selectedGuides);
    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
    setSelectedGuides(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedGuides.size === filteredGuides.length) {
      setSelectedGuides(new Set());
    } else {
      setSelectedGuides(new Set(filteredGuides.map(g => g.id)));
    }
  };

  const handleBatchPublish = (publish: boolean) => {
    if (selectedGuides.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No study guides selected' });
      return;
    }

    startTransition(async () => {
      try {
        const updates = Array.from(selectedGuides).map(id => ({
          id,
          data: { isPublished: publish }
        }));
        
        await batchUpdateStudyGuides(updates);
        
        toast({ 
          title: 'Success', 
          description: `${selectedGuides.size} study guide(s) ${publish ? 'published' : 'unpublished'}` 
        });
        setSelectedGuides(new Set());
        await loadStudyGuides();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleBatchDelete = () => {
    if (selectedGuides.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No study guides selected' });
      return;
    }

    if (!confirm(`Delete ${selectedGuides.size} study guide(s)? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      try {
        const guidesToDelete = Array.from(selectedGuides);
        setDeleteProgress({ current: 0, total: guidesToDelete.length });
        
        const batchSize = 10;
        
        for (let i = 0; i < guidesToDelete.length; i += batchSize) {
          const batch = guidesToDelete.slice(i, Math.min(i + batchSize, guidesToDelete.length));
          
          await Promise.all(batch.map(id => deleteStudyGuide(id)));
          
          setDeleteProgress({ 
            current: Math.min(i + batchSize, guidesToDelete.length), 
            total: guidesToDelete.length 
          });
        }
        
        toast({ 
          title: '✅ Deletion Complete!', 
          description: `Successfully deleted ${selectedGuides.size} study guide(s)` 
        });
        setSelectedGuides(new Set());
        setDeleteProgress({ current: 0, total: 0 });
        await loadStudyGuides();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
        setDeleteProgress({ current: 0, total: 0 });
      }
    });
  };

  // Dialog handlers
  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      content: '',
      difficulty: 'intermediate',
      estimatedTime: '',
      tags: '',
      coverImage: '',
      isPublished: false
    });
    setEditingGuide(null);
  };

  const openDialog = (guide?: CourseStudyGuide) => {
    if (guide) {
      setEditingGuide(guide);
      setFormData({
        title: guide.title,
        description: guide.description || '',
        content: guide.content,
        difficulty: guide.difficulty,
        estimatedTime: guide.estimatedTime || '',
        tags: guide.tags?.join(', ') || '',
        coverImage: guide.coverImage || '',
        isPublished: guide.isPublished
      });
    } else {
      resetForm();
    }
    setIsCreateOpen(true);
  };

  const handleSaveGuide = () => {
    // Validate required fields
    if (!formData.title?.trim()) {
      toast({ variant: 'destructive', title: 'Validation Error', description: 'Title is required.' });
      return;
    }
    
    if (!formData.content?.trim()) {
      toast({ variant: 'destructive', title: 'Validation Error', description: 'Content is required.' });
      return;
    }

    // Validate title length (reasonable limits)
    if (formData.title.trim().length > 500) {
      toast({ variant: 'destructive', title: 'Validation Error', description: 'Title is too long (max 500 characters).' });
      return;
    }

    startTransition(async () => {
      try {
        // Sanitize and prepare data - preserve emojis and special characters
        const guideData: Partial<CourseStudyGuide> = {
          courseId,
          title: formData.title.trim(),
          content: formData.content.trim(),
          difficulty: formData.difficulty,
          tags: formData.tags ? formData.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
          isPublished: editingGuide?.isPublished || false,
          order: 0
        };
        
        // Only add optional fields if they have valid values
        if (formData.description?.trim()) guideData.description = formData.description.trim();
        if (formData.estimatedTime?.trim()) guideData.estimatedTime = formData.estimatedTime.trim();
        if (formData.coverImage?.trim()) guideData.coverImage = formData.coverImage.trim();

        if (editingGuide) {
          await updateStudyGuide(editingGuide.id, guideData);
          toast({ title: "Updated!", description: "Study guide has been updated." });
        } else {
          await createStudyGuide(guideData as Omit<CourseStudyGuide, 'id' | 'createdAt' | 'updatedAt'>);
          toast({ title: "Created!", description: "Study guide has been added." });
        }
        
        setIsCreateOpen(false);
        resetForm();
        await loadStudyGuides();
        onUpdate();
      } catch (error: any) {
        console.error('Error saving study guide:', error);
        toast({ 
          variant: 'destructive', 
          title: 'Save Failed', 
          description: error.message || 'Failed to save study guide. Please try again.' 
        });
      }
    });
  };

  const handleDeleteGuide = (guideId: string) => {
    if (!confirm(`Delete this study guide? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      try {
        await deleteStudyGuide(guideId);
        toast({ title: "Deleted", description: "Study guide has been removed." });
        await loadStudyGuides();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleSaveBulkGuides = () => {
    if (parsedGuides.length === 0) {
      toast({ variant: 'destructive', title: 'No Guides', description: 'No study guides to import.' });
      return;
    }
    
    // Validate all guides before saving
    const invalidGuides = parsedGuides.filter(g => !g.title?.trim() || !g.content?.trim());
    if (invalidGuides.length > 0) {
      toast({ 
        variant: 'destructive', 
        title: 'Validation Error', 
        description: `${invalidGuides.length} guide(s) missing required fields (title or content).` 
      });
      return;
    }
    
    startTransition(async () => {
      try {
        setUploadProgress({ current: 0, total: parsedGuides.length });
        
        const batchSize = 10;
        const guidesToCreate: Partial<CourseStudyGuide>[] = parsedGuides.map(g => {
          const guide: Partial<CourseStudyGuide> = {
            courseId,
            title: (g.title || '').trim(),
            content: (g.content || '').trim(),
            difficulty: g.difficulty || 'intermediate',
            tags: Array.isArray(g.tags) ? g.tags.filter(t => t?.trim()) : [],
            isPublished: false,
            order: 0
          };
          
          // Only add optional fields if they have valid values
          if (g.description?.trim()) guide.description = g.description.trim();
          if (g.estimatedTime?.trim()) guide.estimatedTime = g.estimatedTime.trim();
          if (g.coverImage?.trim()) guide.coverImage = g.coverImage.trim();
          
          return guide;
        }).filter(g => g.title && g.content); // Final safety check
        
        if (guidesToCreate.length === 0) {
          toast({ variant: 'destructive', title: 'Error', description: 'No valid guides to import.' });
          setUploadProgress({ current: 0, total: 0 });
          return;
        }
        
        // Process in batches
        for (let i = 0; i < guidesToCreate.length; i += batchSize) {
          const batch = guidesToCreate.slice(i, Math.min(i + batchSize, guidesToCreate.length));
          await batchCreateStudyGuides(batch as Omit<CourseStudyGuide, 'id' | 'createdAt' | 'updatedAt'>[]);
          setUploadProgress({ 
            current: Math.min(i + batchSize, guidesToCreate.length), 
            total: guidesToCreate.length 
          });
        }
        
        toast({ 
          title: '✅ Upload Complete!', 
          description: `Successfully added ${guidesToCreate.length} study guide(s).` 
        });
        setBulkText('');
        setParsedGuides([]);
        setIsBulkImportOpen(false);
        setUploadProgress({ current: 0, total: 0 });
        await loadStudyGuides();
        onUpdate();
      } catch (error: any) {
        console.error('Bulk import error:', error);
        toast({ 
          variant: 'destructive', 
          title: 'Import Failed', 
          description: error.message || 'Failed to import study guides. Please try again.' 
        });
        setUploadProgress({ current: 0, total: 0 });
      }
    });
  };

  // File upload handlers
  // Alias map for common filename variations to actual course slugs
  const filenameToCourseSlug: Record<string, string> = {
    // Government courses
    'ap-government-us': 'ap-united-states-government-politics',
    'ap-us-government': 'ap-united-states-government-politics',
    'ap-gov-us': 'ap-united-states-government-politics',
    'ap-government-comparative': 'ap-comparative-government',
    'ap-comparative-gov': 'ap-comparative-government',
    'ap-comp-gov': 'ap-comparative-government',
    // Physics courses
    'ap-physics': 'ap-physics-1',
    'ap-physics-1-algebra': 'ap-physics-1',
    'ap-physics-c-em': 'ap-physics-c-electricity-magnetism',
    'ap-physics-c-e-m': 'ap-physics-c-electricity-magnetism',
    'ap-physics-c-electricity': 'ap-physics-c-electricity-magnetism',
    'ap-physics-c-mech': 'ap-physics-c-mechanics',
    // History courses
    'ap-us-history': 'ap-united-states-history',
    'apush': 'ap-united-states-history',
    'ap-euro': 'ap-european-history',
    'ap-euro-history': 'ap-european-history',
    // Other common abbreviations
    'ap-lang': 'ap-english-language',
    'ap-lit': 'ap-english-literature',
    'ap-calc-ab': 'ap-calculus-ab',
    'ap-calc-bc': 'ap-calculus-bc',
    'ap-chem': 'ap-chemistry',
    'ap-bio': 'ap-biology',
    'ap-psych': 'ap-psychology',
    'ap-stats': 'ap-statistics',
    'ap-csp': 'ap-computer-science-principles',
    'ap-csa': 'ap-computer-science-a',
    'ap-apes': 'ap-environmental-science',
    'ap-hug': 'ap-human-geography',
    'ap-world': 'ap-world-history',
  };

  const extractCourseFromFilename = (filename: string): { courseSlug: string; courseId: string | null; courseName: string | null } => {
    // Remove .md extension
    const baseName = filename.replace(/\.md$/i, '');
    
    // First try direct match with course slugs
    for (const course of courses) {
      if (baseName.startsWith(course.slug)) {
        return { 
          courseSlug: course.slug, 
          courseId: course.id, 
          courseName: course.name 
        };
      }
    }
    
    // Try alias matching - check all aliases to find matching prefix
    for (const [alias, actualSlug] of Object.entries(filenameToCourseSlug)) {
      if (baseName.startsWith(alias)) {
        const course = courses.find(c => c.slug === actualSlug);
        if (course) {
          return { 
            courseSlug: course.slug, 
            courseId: course.id, 
            courseName: course.name 
          };
        }
      }
    }
    
    // Fallback: try to extract from common patterns
    const match = baseName.match(/^(ap-[a-z0-9-]+?)(?:-unit|-period|-theme|-final|-portfolio)/i);
    if (match) {
      const slug = match[1];
      // Check if extracted slug has an alias
      const actualSlug = filenameToCourseSlug[slug] || slug;
      const course = courses.find(c => c.slug === actualSlug);
      return { 
        courseSlug: actualSlug, 
        courseId: course?.id || null, 
        courseName: course?.name || null 
      };
    }
    
    return { courseSlug: baseName.split('-').slice(0, 3).join('-'), courseId: null, courseName: null };
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const fileArray = Array.from(files).filter(f => f.name.endsWith('.md'));
    setUploadedFiles(prev => [...prev, ...fileArray]);
    
    // Parse each file and flatten all guides into a single list
    const newGuides: typeof allParsedGuides = [];
    let idCounter = allParsedGuides.length;
    
    for (const file of fileArray) {
      try {
        const content = await file.text();
        const { courseSlug, courseId: detectedCourseId, courseName } = extractCourseFromFilename(file.name);
        
        // Parse guides from file content
        const guides = parseStudyGuidesWithUnits(content);
        
        // Add each guide to flat list with unique ID
        for (const guide of guides) {
          newGuides.push({
            id: `upload-${idCounter++}`,
            filename: file.name,
            courseSlug,
            courseId: detectedCourseId,
            courseName,
            guide
          });
        }
      } catch (error) {
        console.error(`Error parsing file ${file.name}:`, error);
      }
    }
    
    setAllParsedGuides(prev => [...prev, ...newGuides]);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Delete a single guide from upload list
  const handleDeleteUploadGuide = (id: string) => {
    setAllParsedGuides(prev => prev.filter(g => g.id !== id));
  };

  // Update a guide in the upload list
  const handleUpdateUploadGuide = (id: string, updates: Partial<StudyGuideWithUnit>) => {
    setAllParsedGuides(prev => prev.map(g => 
      g.id === id ? { ...g, guide: { ...g.guide, ...updates } } : g
    ));
    setEditingUploadGuide(null);
  };

  // Get unique courses from uploaded guides for filtering
  const uploadedCourses = Array.from(new Set(allParsedGuides.map(g => g.courseId).filter(Boolean))) as string[];
  
  // Filter uploaded guides
  const filteredUploadGuides = allParsedGuides.filter(g => {
    const matchesSearch = uploadSearchQuery === '' || 
      g.guide.title.toLowerCase().includes(uploadSearchQuery.toLowerCase()) ||
      g.guide.description?.toLowerCase().includes(uploadSearchQuery.toLowerCase()) ||
      g.filename.toLowerCase().includes(uploadSearchQuery.toLowerCase());
    
    const matchesCourse = uploadFilterCourse === 'all' || 
      (uploadFilterCourse === 'unknown' ? !g.courseId : g.courseId === uploadFilterCourse);
    
    return matchesSearch && matchesCourse;
  });

  // Import ALL guides to their respective courses
  const handleImportAllGuides = () => {
    if (allParsedGuides.length === 0) {
      toast({ variant: 'destructive', title: 'No Guides', description: 'No study guides to import.' });
      return;
    }
    
    // Check for guides without valid course IDs
    const invalidGuides = allParsedGuides.filter(g => !g.courseId);
    if (invalidGuides.length > 0) {
      toast({ 
        variant: 'destructive', 
        title: 'Invalid Courses', 
        description: `${invalidGuides.length} guide(s) don't have a valid course. Please fix or remove them.` 
      });
      return;
    }

    startTransition(async () => {
      try {
        // Group guides by course
        const guidesByCourse = allParsedGuides.reduce((acc, g) => {
          const cId = g.courseId!;
          if (!acc[cId]) acc[cId] = [];
          acc[cId].push(g.guide);
          return acc;
        }, {} as Record<string, StudyGuideWithUnit[]>);
        
        const totalGuides = allParsedGuides.length;
        setUploadProgress({ current: 0, total: totalGuides });
        
        let processed = 0;
        const batchSize = 10;
        
        // Import each course's guides
        for (const [targetCourseId, guides] of Object.entries(guidesByCourse)) {
          const guidesToCreate: Partial<CourseStudyGuide>[] = guides.map(g => {
            const guide: Partial<CourseStudyGuide> = {
              courseId: targetCourseId,
              title: (g.title || '').trim(),
              content: (g.content || '').trim(),
              difficulty: g.difficulty || 'intermediate',
              tags: Array.isArray(g.tags) ? g.tags.filter(t => t?.trim()) : [],
              isPublished: false,
              order: 0
            };
            
            if (g.description?.trim()) guide.description = g.description.trim();
            if (g.estimatedTime?.trim()) guide.estimatedTime = g.estimatedTime.trim();
            if (g.coverImage?.trim()) guide.coverImage = g.coverImage.trim();
            
            return guide;
          }).filter(g => g.title && g.content);
          
          // Process in batches
          for (let i = 0; i < guidesToCreate.length; i += batchSize) {
            const batch = guidesToCreate.slice(i, Math.min(i + batchSize, guidesToCreate.length));
            await batchCreateStudyGuides(batch as Omit<CourseStudyGuide, 'id' | 'createdAt' | 'updatedAt'>[]);
            processed += batch.length;
            setUploadProgress({ current: processed, total: totalGuides });
          }
        }
        
        const courseCount = Object.keys(guidesByCourse).length;
        toast({ 
          title: '✅ Import Complete!', 
          description: `Successfully imported ${totalGuides} study guide(s) to ${courseCount} course(s).` 
        });
        
        // Clear all state
        setAllParsedGuides([]);
        setUploadedFiles([]);
        setUploadProgress({ current: 0, total: 0 });
        setIsFileUploadOpen(false);
        
        // Refresh current course
        await loadStudyGuides();
        onUpdate();
      } catch (error: any) {
        console.error('File import error:', error);
        toast({ 
          variant: 'destructive', 
          title: 'Import Failed', 
          description: error.message || 'Failed to import study guides.' 
        });
        setUploadProgress({ current: 0, total: 0 });
      }
    });
  };

  const togglePublish = (guide: CourseStudyGuide) => {
    startTransition(async () => {
      try {
        await updateStudyGuide(guide.id, {
          isPublished: !guide.isPublished
        });
        toast({ 
          title: guide.isPublished ? "Unpublished" : "Published!", 
          description: `Study guide is now ${guide.isPublished ? 'hidden from' : 'visible to'} students.` 
        });
        await loadStudyGuides();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  // Publish ALL study guides across ALL courses
  const handlePublishAllGlobally = async () => {
    if (!confirm('This will publish ALL study guides across ALL courses. Are you sure?')) {
      return;
    }

    startTransition(async () => {
      try {
        // Get all study guides from all courses
        let totalPublished = 0;
        const allCourseIds = courses.map(c => c.id);
        
        setUploadProgress({ current: 0, total: allCourseIds.length });
        
        for (let i = 0; i < allCourseIds.length; i++) {
          const cId = allCourseIds[i];
          try {
            const guides = await getCourseStudyGuides(cId);
            const unpublished = guides.filter(g => !g.isPublished);
            
            if (unpublished.length > 0) {
              const updates = unpublished.map(g => ({
                id: g.id,
                data: { isPublished: true }
              }));
              await batchUpdateStudyGuides(updates);
              totalPublished += unpublished.length;
            }
          } catch (e) {
            // Course might not have any guides, continue
          }
          setUploadProgress({ current: i + 1, total: allCourseIds.length });
        }
        
        toast({ 
          title: '✅ All Guides Published!', 
          description: `Published ${totalPublished} study guide(s) across all courses.` 
        });
        
        setUploadProgress({ current: 0, total: 0 });
        await loadStudyGuides();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
        setUploadProgress({ current: 0, total: 0 });
      }
    });
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'beginner': return 'bg-green-500 text-white';
      case 'intermediate': return 'bg-yellow-500 text-white';
      case 'advanced': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  if (isLoadingStudyGuides) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading study guides...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Study Guides</CardTitle>
            <CardDescription>
              Manage comprehensive study guides and review materials
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {/* Publish All Globally Button */}
            <Button 
              variant="outline" 
              size="lg" 
              className="border-green-500/50 hover:bg-green-500/10 text-green-600"
              onClick={handlePublishAllGlobally}
              disabled={isPending}
            >
              <Eye className="h-4 w-4 mr-2" />
              Publish All Guides
            </Button>

            {/* File Upload Button */}
            <Dialog open={isFileUploadOpen} onOpenChange={setIsFileUploadOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="border-purple-500/50 hover:bg-purple-500/10">
                  <FolderUp className="h-4 w-4 mr-2" />
                  Upload Files
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <FolderUp className="h-5 w-5" />
                    Upload & Import Study Guides
                  </DialogTitle>
                  <DialogDescription>
                    Upload .md files, preview/edit/delete guides, then import all at once.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  {/* File Input */}
                  <div className="space-y-2">
                    <Label>Select Files</Label>
                    <div className="flex items-center gap-2">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".md"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="study-guide-files"
                      />
                      <Button
                        variant="outline"
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-20 border-dashed border-2"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <FileText className="h-6 w-6 text-muted-foreground" />
                          <span className="text-sm">Click to select .md files</span>
                        </div>
                      </Button>
                    </div>
                  </div>

                  {/* Stats & Actions Bar */}
                  {allParsedGuides.length > 0 && (
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-purple-600">{allParsedGuides.length}</p>
                          <p className="text-xs text-muted-foreground">Total Guides</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-600">{uploadedCourses.length}</p>
                          <p className="text-xs text-muted-foreground">Courses</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-600">{uploadedFiles.length}</p>
                          <p className="text-xs text-muted-foreground">Files</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setAllParsedGuides([]);
                            setUploadedFiles([]);
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Clear All
                        </Button>
                        <Button
                          size="lg"
                          onClick={handleImportAllGuides}
                          disabled={isPending || allParsedGuides.some(g => !g.courseId)}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Import All {allParsedGuides.length} Guides
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Upload Progress */}
                  {uploadProgress.total > 0 && (
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground">Importing guides...</span>
                        <span className="text-sm font-medium">{uploadProgress.current}/{uploadProgress.total}</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300"
                          style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Search & Filter */}
                  {allParsedGuides.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="md:col-span-2">
                        <Input
                          placeholder="Search by title, description, or filename..."
                          value={uploadSearchQuery}
                          onChange={(e) => setUploadSearchQuery(e.target.value)}
                        />
                      </div>
                      <Select value={uploadFilterCourse} onValueChange={setUploadFilterCourse}>
                        <SelectTrigger>
                          <SelectValue placeholder="Filter by course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Courses ({allParsedGuides.length})</SelectItem>
                          {uploadedCourses.map(cId => {
                            const course = courses.find(c => c.id === cId);
                            const count = allParsedGuides.filter(g => g.courseId === cId).length;
                            return (
                              <SelectItem key={cId} value={cId}>
                                {course?.name || cId} ({count})
                              </SelectItem>
                            );
                          })}
                          {allParsedGuides.some(g => !g.courseId) && (
                            <SelectItem value="unknown">⚠️ Unknown Course ({allParsedGuides.filter(g => !g.courseId).length})</SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Guides List - Same style as main SG tab */}
                  {filteredUploadGuides.length > 0 && (
                    <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
                      <p className="text-sm text-muted-foreground">
                        Showing {filteredUploadGuides.length} of {allParsedGuides.length} guides
                      </p>
                      {filteredUploadGuides.map((item) => (
                        <Card 
                          key={item.id} 
                          className={`p-4 ${item.courseId ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}
                        >
                          {editingUploadGuide === item.id ? (
                            // Edit mode
                            <div className="space-y-3">
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <Label className="text-xs">Title</Label>
                                  <Input 
                                    value={item.guide.title}
                                    onChange={(e) => handleUpdateUploadGuide(item.id, { title: e.target.value })}
                                  />
                                </div>
                                <div>
                                  <Label className="text-xs">Difficulty</Label>
                                  <Select 
                                    value={item.guide.difficulty || 'intermediate'}
                                    onValueChange={(v) => handleUpdateUploadGuide(item.id, { difficulty: v as any })}
                                  >
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="beginner">Beginner</SelectItem>
                                      <SelectItem value="intermediate">Intermediate</SelectItem>
                                      <SelectItem value="advanced">Advanced</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <div>
                                <Label className="text-xs">Description</Label>
                                <Input 
                                  value={item.guide.description || ''}
                                  onChange={(e) => handleUpdateUploadGuide(item.id, { description: e.target.value })}
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <Label className="text-xs">Estimated Time</Label>
                                  <Input 
                                    value={item.guide.estimatedTime || ''}
                                    onChange={(e) => handleUpdateUploadGuide(item.id, { estimatedTime: e.target.value })}
                                    placeholder="e.g., 30 mins"
                                  />
                                </div>
                                <div>
                                  <Label className="text-xs">Tags (comma-separated)</Label>
                                  <Input 
                                    value={item.guide.tags?.join(', ') || ''}
                                    onChange={(e) => handleUpdateUploadGuide(item.id, { tags: e.target.value.split(',').map(t => t.trim()).filter(Boolean) })}
                                  />
                                </div>
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button size="sm" variant="outline" onClick={() => setEditingUploadGuide(null)}>
                                  Done
                                </Button>
                              </div>
                            </div>
                          ) : (
                            // View mode - same style as main SG list
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                  <Badge className={getDifficultyColor(item.guide.difficulty || 'intermediate')}>
                                    {item.guide.difficulty || 'intermediate'}
                                  </Badge>
                                  {item.guide.estimatedTime && (
                                    <Badge variant="outline">
                                      <Clock className="h-3 w-3 mr-1" />
                                      {item.guide.estimatedTime}
                                    </Badge>
                                  )}
                                  <Badge variant={item.courseId ? 'default' : 'destructive'} className="text-xs">
                                    {item.courseName || 'Unknown Course'}
                                  </Badge>
                                </div>
                                <h4 className="font-semibold text-sm">{item.guide.title}</h4>
                                {item.guide.description && (
                                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{item.guide.description}</p>
                                )}
                                {item.guide.tags && item.guide.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {item.guide.tags.slice(0, 5).map((tag, idx) => (
                                      <Badge key={idx} variant="outline" className="text-xs">
                                        #{tag}
                                      </Badge>
                                    ))}
                                    {item.guide.tags.length > 5 && (
                                      <Badge variant="outline" className="text-xs">+{item.guide.tags.length - 5} more</Badge>
                                    )}
                                  </div>
                                )}
                                <p className="text-xs text-muted-foreground mt-2 font-mono">{item.filename}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setPreviewUploadGuide({ id: item.id, guide: item.guide, courseName: item.courseName })}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setEditingUploadGuide(item.id)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleDeleteUploadGuide(item.id)}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          )}
                        </Card>
                      ))}
                    </div>
                  )}

                  {allParsedGuides.length === 0 && (
                    <div className="text-center py-12 text-muted-foreground">
                      <FolderUp className="h-16 w-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">No files uploaded yet</p>
                      <p className="text-sm">Upload .md files from the zzzzstudy guides folder</p>
                      <p className="text-xs mt-2">Files will be parsed and organized by course automatically</p>
                    </div>
                  )}
                </div>

                <DialogFooter>
                  <Button variant="outline" onClick={() => {
                    setIsFileUploadOpen(false);
                    setAllParsedGuides([]);
                    setUploadedFiles([]);
                    setUploadSearchQuery('');
                    setUploadFilterCourse('all');
                  }}>
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Preview Upload Guide Dialog */}
            <Dialog open={!!previewUploadGuide} onOpenChange={() => setPreviewUploadGuide(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Preview: {previewUploadGuide?.guide.title}
                  </DialogTitle>
                  <DialogDescription>
                    {previewUploadGuide?.courseName || 'Unknown Course'}
                  </DialogDescription>
                </DialogHeader>
                {previewUploadGuide && (
                  <div className="space-y-4 py-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={getDifficultyColor(previewUploadGuide.guide.difficulty || 'intermediate')}>
                        {previewUploadGuide.guide.difficulty || 'intermediate'}
                      </Badge>
                      {previewUploadGuide.guide.estimatedTime && (
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {previewUploadGuide.guide.estimatedTime}
                        </Badge>
                      )}
                    </div>
                    {previewUploadGuide.guide.description && (
                      <p className="text-muted-foreground">{previewUploadGuide.guide.description}</p>
                    )}
                    {previewUploadGuide.guide.tags && previewUploadGuide.guide.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {previewUploadGuide.guide.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline">#{tag}</Badge>
                        ))}
                      </div>
                    )}
                    <div className="prose prose-sm dark:prose-invert max-w-none border rounded-lg p-4 bg-muted/30">
                      <ContentRenderer content={previewUploadGuide.guide.content || ''} />
                    </div>
                  </div>
                )}
                <DialogFooter>
                  <Button variant="outline" onClick={() => setPreviewUploadGuide(null)}>Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={isBulkImportOpen} onOpenChange={setIsBulkImportOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  <FileUp className="h-4 w-4 mr-2" />
                  Bulk Import
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    Bulk Import Study Guides
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsFormatGuideOpen(true)}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </Button>
                  </DialogTitle>
                  <DialogDescription>
                    Paste formatted text to quickly create multiple study guides
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="bulk-text" className="flex items-center gap-2">
                      Paste Your Content (Auto-parsing enabled)
                      {parsedGuides.length > 0 && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                          ✓ {parsedGuides.length} Guide{parsedGuides.length !== 1 ? 's' : ''} Ready
                        </span>
                      )}
                      {bulkText.trim() && !parsedGuides.length && (
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium animate-pulse">
                          Parsing...
                        </span>
                      )}
                    </Label>
                    <Textarea
                      id="bulk-text"
                      value={bulkText}
                      onChange={(e) => setBulkText(e.target.value)}
                      rows={15}
                      placeholder="Paste study guides in :::SG::: format (click ? for guide)..."
                      className="font-mono text-sm"
                    />
                  </div>

                  {uploadProgress.total > 0 && (
                    <div className="w-full">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground">
                          ⚡ Batch uploading for faster performance...
                        </span>
                        <span className="text-sm font-medium">
                          {uploadProgress.current}/{uploadProgress.total}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-teal-600 transition-all duration-300"
                          style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {parsedGuides.length > 0 && (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      <h4 className="font-semibold text-sm">Preview ({parsedGuides.length} guides)</h4>
                      {parsedGuides.map((g, idx) => (
                        <Card key={idx} className="p-3 bg-muted/50">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getDifficultyColor(g.difficulty || 'intermediate') + ' text-xs'}>
                              {g.difficulty || 'intermediate'}
                            </Badge>
                            {g.estimatedTime && (
                              <Badge variant="outline" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {g.estimatedTime}
                              </Badge>
                            )}
                          </div>
                          <p className="font-medium text-sm">{g.title}</p>
                          {g.description && (
                            <p className="text-xs text-muted-foreground mt-1">{g.description}</p>
                          )}
                        </Card>
                      ))}
                    </div>
                  )}

                  <DialogFooter className="flex justify-between">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        try {
                          const parsed = parseStudyGuides(bulkText);
                          setParsedGuides(parsed);
                          toast({ title: 'Success', description: `Parsed ${parsed.length} guide(s)!` });
                        } catch (error: any) {
                          toast({ title: 'Parse Error', description: error.message, variant: 'destructive' });
                        }
                      }}
                      disabled={!bulkText.trim()}
                      title="Manual parse (auto-parse happens automatically)"
                    >
                      Parse Guides
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => {
                        setIsBulkImportOpen(false);
                        setBulkText('');
                        setParsedGuides([]);
                      }}>
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleSaveBulkGuides}
                        disabled={parsedGuides.length === 0 || isPending}
                      >
                        {isPending && uploadProgress.total > 0 ? (
                          <>Uploading {uploadProgress.current}/{uploadProgress.total}...</>
                        ) : (
                          <>Save {parsedGuides.length} Guide{parsedGuides.length !== 1 ? 's' : ''}</>
                        )}
                      </Button>
                    </div>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog>

            <Button size="lg" onClick={() => openDialog()}>
              <Plus className="h-4 w-4 mr-2" />
              Add Study Guide
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Search & Filters Card */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Label className="text-sm text-gray-600">Search Study Guides</Label>
            <Input
              placeholder="Search by title, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm text-gray-600">Difficulty</Label>
            <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="All difficulties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="flex items-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setFilterDifficulty('all');
              }}
              className="w-full"
            >
              Clear Filters
            </Button>
          </div>
          <div className="md:col-span-2 flex items-end justify-end">
            <p className="text-sm text-gray-600">
              {filteredGuides.length} of {(studyGuides || []).length} study guide{(studyGuides || []).length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </Card>

      {/* Batch Actions */}
      {(studyGuides || []).length > 0 && (
        <Card className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedGuides.size === filteredGuides.length && filteredGuides.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">
                  Select All ({selectedGuides.size}/{filteredGuides.length})
                </span>
              </label>
            </div>

            {selectedGuides.size > 0 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBatchPublish(true)}
                  disabled={isPending}
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Publish Selected
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBatchPublish(false)}
                  disabled={isPending}
                  className="border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  <EyeOff className="h-4 w-4 mr-2" />
                  Unpublish Selected
                </Button>
                {deleteProgress.total > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Deleting {deleteProgress.current}/{deleteProgress.total}...
                    </span>
                    <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-rose-600 transition-all duration-300"
                        style={{ width: `${(deleteProgress.current / deleteProgress.total) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleBatchDelete}
                  disabled={isPending}
                  className="border-red-500 text-red-600 hover:bg-red-50"
                >
                  {isPending && deleteProgress.total > 0 ? (
                    <>
                      <span className="mr-2 inline-block animate-spin">🗑️</span>
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Selected
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Study Guides List */}
      {filteredGuides.length === 0 ? (
        <Card>
          <CardContent className="py-20 text-center text-muted-foreground">
            <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <GraduationCap className="h-12 w-12" />
            </div>
            <p className="text-lg font-semibold">No Study Guides Yet</p>
            <p>Click "Add Study Guide" or "Bulk Import" to create study resources</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.02 }}
              >
                <Card className={guide.isPublished ? 'border-green-500/30 bg-green-500/5' : 'border-orange-500/30 bg-orange-500/5'}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={selectedGuides.has(guide.id)}
                          onChange={() => toggleSelectGuide(guide.id)}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getDifficultyColor(guide.difficulty)}>
                              {guide.difficulty}
                            </Badge>
                            {guide.estimatedTime && (
                              <Badge variant="outline">
                                <Clock className="h-3 w-3 mr-1" />
                                {guide.estimatedTime}
                              </Badge>
                            )}
                            <Badge variant={guide.isPublished ? 'default' : 'secondary'}>
                              {guide.isPublished ? (
                                <><Eye className="h-3 w-3 mr-1" /> Published</>
                              ) : (
                                <><EyeOff className="h-3 w-3 mr-1" /> Draft</>
                              )}
                            </Badge>
                          </div>
                          <CardTitle className="text-base">{guide.title}</CardTitle>
                          
                          {guide.description && (
                            <p className="text-sm text-muted-foreground mt-2">{guide.description}</p>
                          )}
                          
                          {guide.tags && guide.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {guide.tags.map((tag, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPreviewGuide(guide)}
                          title="Preview Guide"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => togglePublish(guide)}
                          disabled={isPending}
                        >
                          {guide.isPublished ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDialog(guide)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteGuide(guide.id)}
                          disabled={isPending}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Study Guide Preview Dialog */}
      <Dialog open={!!previewGuide} onOpenChange={(open) => !open && setPreviewGuide(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              {previewGuide?.title}
            </DialogTitle>
            {previewGuide?.description && (
              <DialogDescription>{previewGuide.description}</DialogDescription>
            )}
          </DialogHeader>
          
          {previewGuide && (
            <div className="space-y-6">
              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={getDifficultyColor(previewGuide.difficulty)}>
                  {previewGuide.difficulty}
                </Badge>
                {previewGuide.estimatedTime && (
                  <Badge variant="outline">
                    <Clock className="h-3 w-3 mr-1" />
                    {previewGuide.estimatedTime}
                  </Badge>
                )}
                <Badge variant={previewGuide.isPublished ? 'default' : 'secondary'}>
                  {previewGuide.isPublished ? '✅ Published' : '📝 Draft'}
                </Badge>
                {previewGuide.tags && previewGuide.tags.length > 0 && (
                  <>
                    <span className="text-muted-foreground">•</span>
                    {previewGuide.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </>
                )}
              </div>

              {/* Cover Image */}
              {previewGuide.coverImage && (
                <img
                  src={previewGuide.coverImage}
                  alt={previewGuide.title}
                  className="w-full h-48 object-cover rounded-lg border"
                />
              )}

              {/* Guide Content */}
              <div className="space-y-4">
                <div className="bg-muted/30 rounded-lg p-8 border space-y-6">
                  {/* Title as first element */}
                  <div className="border-b-2 border-primary pb-4">
                    <h1 className="text-4xl font-bold text-primary">
                      <MathRenderer content={previewGuide.title} />
                    </h1>
                    {previewGuide.description && (
                      <div className="text-lg text-muted-foreground mt-2">
                        <MathRenderer content={previewGuide.description} />
                      </div>
                    )}
                  </div>
                  
                  {(() => {
                    // Preprocess special blocks (TIMELINE, CODE)
                    const timelines = new Map<string, string>();
                    const codeBlocks = new Map<string, string>();
                    let processedContent = previewGuide.content;
                    
                    // Extract TIMELINE blocks
                    const timelineRegex = /:::TIMELINE:::([\s\S]*?):::\/TIMELINE:::/g;
                    let timelineMatch;
                    let timelineIndex = 0;
                    while ((timelineMatch = timelineRegex.exec(previewGuide.content)) !== null) {
                      const placeholder = `__TIMELINE_PLACEHOLDER_${timelineIndex}__`;
                      timelines.set(placeholder, timelineMatch[1]);
                      processedContent = processedContent.replace(timelineMatch[0], placeholder);
                      timelineIndex++;
                    }
                    
                    // Remove any unclosed TIMELINE blocks (malformed)
                    processedContent = processedContent.replace(/:::TIMELINE:::[^]*?$/g, (match) => {
                      console.warn('Found malformed timeline block (no closing tag):', match.substring(0, 100));
                      return '\n**⚠️ Malformed timeline block (missing closing tag :::/TIMELINE:::)**\n';
                    });
                    
                    // Extract CODE blocks
                    const codeRegex = /:::CODE:::([\s\S]*?):::\/CODE:::/g;
                    let codeMatch;
                    let codeIndex = 0;
                    while ((codeMatch = codeRegex.exec(previewGuide.content)) !== null) {
                      const placeholder = `__CODE_PLACEHOLDER_${codeIndex}__`;
                      codeBlocks.set(placeholder, codeMatch[1]);
                      processedContent = processedContent.replace(codeMatch[0], placeholder);
                      codeIndex++;
                    }
                    
                    // Remove any unclosed CODE blocks (malformed)
                    processedContent = processedContent.replace(/:::CODE:::[^]*?$/g, (match) => {
                      console.warn('Found malformed code block (no closing tag):', match.substring(0, 100));
                      return '\n**⚠️ Malformed code block (missing closing tag :::/CODE:::)**\n';
                    });
                    
                    // Split content by lines for processing
                    const lines = processedContent.split('\n');
                    const elements: JSX.Element[] = [];
                    let currentParagraph: string[] = [];
                    let inList = false;
                    let inTable = false;
                    let tableLines: string[] = [];
                    let inCodeBlock = false;
                    let codeBlockLines: string[] = [];
                    
                    const flushParagraph = () => {
                      if (currentParagraph.length > 0) {
                        const text = currentParagraph.join(' ').trim();
                        if (text) {
                          elements.push(
                            <div key={elements.length} className="leading-relaxed text-base pl-2 text-foreground">
                              <RichTextRenderer content={text} />
                            </div>
                          );
                        }
                        currentParagraph = [];
                      }
                    };
                    
                    const flushTable = () => {
                      if (tableLines.length > 0) {
                        const rows = tableLines
                          .filter(line => line && line.trim() && !line.match(/^\|?\s*[-:]+\s*\|/))
                          .map(line => 
                            line.split('|')
                              .map(cell => cell ? cell.trim() : '')
                              .filter(cell => cell)
                          )
                          .filter(row => row.length > 0);

                        if (rows.length > 0) {
                          const headers = rows[0];
                          const bodyRows = rows.slice(1);
                          
                          elements.push(
                            <div key={elements.length} className="my-4 overflow-x-auto">
                              <table className="min-w-full border-collapse border border-border rounded-lg overflow-hidden">
                                <thead className="bg-muted">
                                  <tr>
                                    {headers.map((header, idx) => (
                                      <th key={idx} className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                                        <RichTextRenderer content={header || ''} />
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {bodyRows.map((row, rowIdx) => (
                                    <tr key={rowIdx} className="hover:bg-muted/50">
                                      {row.map((cell, cellIdx) => (
                                        <td key={cellIdx} className="border border-border px-4 py-2 text-foreground">
                                          <RichTextRenderer content={cell || ''} />
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          );
                        }
                        tableLines = [];
                        inTable = false;
                      }
                    };
                    
                    const flushCodeBlock = () => {
                      if (codeBlockLines.length > 0) {
                        elements.push(
                          <pre key={elements.length} className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                            <code>{codeBlockLines.join('\n')}</code>
                          </pre>
                        );
                        codeBlockLines = [];
                        inCodeBlock = false;
                      }
                    };
                    
                    lines.forEach((line, idx) => {
                      const trimmed = line.trim();
                      
                      // Check for TIMELINE placeholder
                      if (trimmed.startsWith('__TIMELINE_PLACEHOLDER_')) {
                        flushParagraph();
                        flushTable();
                        try {
                          const timelineContent = timelines.get(trimmed);
                          if (timelineContent) {
                            const timelineData = parseTimelineBlock(timelineContent);
                            if (timelineData) {
                              elements.push(
                                <TimelineRenderer key={`timeline-${elements.length}`} data={timelineData} />
                              );
                            } else {
                              console.error('Failed to parse timeline data');
                              elements.push(
                                <div key={elements.length} className="my-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded">
                                  <p className="text-red-700 dark:text-red-400 font-semibold">⚠️ Timeline Error</p>
                                  <p className="text-sm text-red-600 dark:text-red-300">Failed to parse timeline data. Check the format.</p>
                                </div>
                              );
                            }
                          }
                        } catch (error) {
                          console.error('Timeline rendering error:', error);
                          elements.push(
                            <div key={elements.length} className="my-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded">
                              <p className="text-red-700 dark:text-red-400 font-semibold">⚠️ Timeline Error</p>
                              <p className="text-sm text-red-600 dark:text-red-300">{String(error)}</p>
                            </div>
                          );
                        }
                        return;
                      }
                      
                      // Check for CODE placeholder
                      if (trimmed.startsWith('__CODE_PLACEHOLDER_')) {
                        flushParagraph();
                        flushTable();
                        try {
                          const codeContent = codeBlocks.get(trimmed);
                          if (codeContent) {
                            const codeData = parseCodeBlock(codeContent);
                            if (codeData) {
                              elements.push(
                                <CodeBlockRenderer key={`code-${elements.length}`} data={codeData} />
                              );
                            } else {
                              console.error('Failed to parse code block data');
                              elements.push(
                                <div key={elements.length} className="my-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded">
                                  <p className="text-red-700 dark:text-red-400 font-semibold">⚠️ Code Block Error</p>
                                  <p className="text-sm text-red-600 dark:text-red-300">Failed to parse code block data. Check the format.</p>
                                </div>
                              );
                            }
                          }
                        } catch (error) {
                          console.error('Code block rendering error:', error);
                          elements.push(
                            <div key={elements.length} className="my-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded">
                              <p className="text-red-700 dark:text-red-400 font-semibold">⚠️ Code Block Error</p>
                              <p className="text-sm text-red-600 dark:text-red-300">{String(error)}</p>
                            </div>
                          );
                        }
                        return;
                      }
                      
                      // Check for code block delimiters
                      if (trimmed.startsWith('```')) {
                        if (!inCodeBlock) {
                          // Starting code block
                          flushParagraph();
                          flushTable();
                          inCodeBlock = true;
                          codeBlockLines = [];
                        } else {
                          // Ending code block
                          if (codeBlockLines.length > 0) {
                            elements.push(
                              <pre key={elements.length} className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                                <code>{codeBlockLines.join('\n')}</code>
                              </pre>
                            );
                          }
                          inCodeBlock = false;
                          codeBlockLines = [];
                        }
                        return;
                      }
                      
                      // If inside code block, collect lines
                      if (inCodeBlock) {
                        codeBlockLines.push(line);
                        return;
                      }
                      
                      // Check if line is a table row
                      const isTableLine = trimmed.includes('|') && trimmed.split('|').length > 2;
                      
                      if (isTableLine) {
                        flushParagraph();
                        inList = false;
                        inTable = true;
                        tableLines.push(trimmed);
                        return;
                      } else if (inTable) {
                        // End of table
                        flushTable();
                      }
                      
                      // Empty line - flush paragraph and table
                      if (!trimmed) {
                        flushParagraph();
                        flushTable();
                        inList = false;
                        return;
                      }
                      
                      // Horizontal rule: --- or ***
                      if (trimmed.match(/^[-*]{3,}$/)) {
                        flushParagraph();
                        flushTable();
                        elements.push(
                          <hr key={elements.length} className="my-6 border-border" />
                        );
                        return;
                      }
                      
                      // Image: ![alt](url) or just image URL
                      const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/) || 
                                       trimmed.match(/^(https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg))$/i);
                      if (imgMatch) {
                        flushParagraph();
                        const url = imgMatch[2] || imgMatch[1];
                        const alt = imgMatch[1] || 'Image';
                        elements.push(
                          <div key={elements.length} className="my-4">
                            <img 
                              src={url} 
                              alt={alt} 
                              className="max-w-full h-auto rounded-lg border shadow-md mx-auto"
                            />
                          </div>
                        );
                        return;
                      }
                      
                      // H1: # Header or ALL CAPS (10+ chars)
                      if (trimmed.match(/^#\s+(.+)$/) || (trimmed === trimmed.toUpperCase() && trimmed.length > 10 && !trimmed.includes('$'))) {
                        flushParagraph();
                        const text = trimmed.replace(/^#+\s+/, '');
                        elements.push(
                          <h2 key={elements.length} className="text-2xl font-bold mt-8 mb-4 text-foreground border-b-2 border-primary/30 pb-2">
                            <RichTextRenderer content={text} />
                          </h2>
                        );
                        return;
                      }
                      
                      // H2: ## Header
                      if (trimmed.match(/^##\s+(.+)$/)) {
                        flushParagraph();
                        const text = trimmed.replace(/^#+\s+/, '');
                        elements.push(
                          <h3 key={elements.length} className="text-xl font-semibold mt-6 mb-3 text-foreground">
                            <RichTextRenderer content={text} />
                          </h3>
                        );
                        return;
                      }
                      
                      // H3: ### Header
                      if (trimmed.match(/^###\s+(.+)$/)) {
                        flushParagraph();
                        const text = trimmed.replace(/^#+\s+/, '');
                        elements.push(
                          <h4 key={elements.length} className="text-lg font-semibold mt-4 mb-2 text-foreground">
                            <RichTextRenderer content={text} />
                          </h4>
                        );
                        return;
                      }
                      
                      // Bullet point: -, *, •, or - with space
                      const bulletMatch = trimmed.match(/^[-*•]\s+(.+)$/);
                      if (bulletMatch) {
                        flushParagraph();
                        inList = true;
                        elements.push(
                          <div key={elements.length} className="ml-6 flex gap-3 text-foreground">
                            <span className="text-primary font-bold text-lg mt-1">•</span>
                            <div className="flex-1 leading-relaxed text-base">
                              <RichTextRenderer content={bulletMatch[1]} />
                            </div>
                          </div>
                        );
                        return;
                      }
                      
                      // Numbered list: 1. or 1)
                      const numberedMatch = trimmed.match(/^(\d+)[.)]\s+(.+)$/);
                      if (numberedMatch) {
                        flushParagraph();
                        inList = true;
                        elements.push(
                          <div key={elements.length} className="ml-6 flex gap-3 text-foreground">
                            <span className="text-primary font-bold text-lg">{numberedMatch[1]}.</span>
                            <div className="flex-1 leading-relaxed text-base">
                              <RichTextRenderer content={numberedMatch[2]} />
                            </div>
                          </div>
                        );
                        return;
                      }
                      
                      // Formula/equation callout
                      if (trimmed.match(/^(Formula|Calculation|Equation|Definition):/i)) {
                        flushParagraph();
                        elements.push(
                          <div key={elements.length} className="bg-blue-950/40 dark:bg-blue-950/50 p-4 rounded-lg border-l-4 border-blue-500 my-3 text-foreground">
                            <div className="font-medium">
                              <RichTextRenderer content={trimmed} />
                            </div>
                          </div>
                        );
                        return;
                      }
                      
                      // Regular text - accumulate into paragraph
                      currentParagraph.push(trimmed);
                    });
                    
                    // Flush any remaining paragraph, code block, or table
                    flushParagraph();
                    flushCodeBlock();
                    flushTable();
                    
                    return elements;
                  })()}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Create/Edit Dialog */}
      <Dialog open={isCreateOpen} onOpenChange={(open) => {
        setIsCreateOpen(open);
        if (!open) resetForm();
      }}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingGuide ? 'Edit Study Guide' : 'Create Study Guide'}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Unit 1 Comprehensive Study Guide"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="difficulty-select">Difficulty</Label>
                <Select value={formData.difficulty} onValueChange={(v) => setFormData({ ...formData, difficulty: v as any })}>
                  <SelectTrigger id="difficulty-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="estimated-time">Estimated Time</Label>
                <Input
                  id="estimated-time"
                  value={formData.estimatedTime}
                  onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
                  placeholder="e.g., 2 hours"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description of this study guide..."
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="content">Content *</Label>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const imageTemplate = '\n![Image Description](https://your-image-url.com/image.png)\n';
                      setFormData({ ...formData, content: formData.content + imageTemplate });
                    }}
                    title="Insert Image"
                  >
                    <ImageIcon className="h-4 w-4 mr-1" />
                    Image
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const tableTemplate = '\n| Header 1 | Header 2 | Header 3 |\n|----------|----------|----------|\n| Cell 1   | Cell 2   | Cell 3   |\n| Cell 4   | Cell 5   | Cell 6   |\n';
                      setFormData({ ...formData, content: formData.content + tableTemplate });
                    }}
                    title="Insert Table"
                  >
                    <Table className="h-4 w-4 mr-1" />
                    Table
                  </Button>
                </div>
              </div>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Main content of the study guide (supports Markdown)..."
                rows={10}
              />
              <p className="text-xs text-muted-foreground">
                Supports: Headers (#, ##, ###), Bullets (-, *), Tables (|), Images (![](url)), LaTeX ($...$)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="e.g., biology, cells, review"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cover-image">Cover Image URL (Optional)</Label>
                <Input
                  id="cover-image"
                  type="url"
                  value={formData.coverImage}
                  onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <Label htmlFor="is-published">Publish Study Guide</Label>
                <p className="text-sm text-muted-foreground">Make this guide visible to students</p>
              </div>
              <input
                id="is-published"
                type="checkbox"
                checked={formData.isPublished}
                onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                className="w-4 h-4"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreateOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveGuide} disabled={isPending}>
              {editingGuide ? 'Update Study Guide' : 'Create Study Guide'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Format Guide Dialog */}
      <Dialog open={isFormatGuideOpen} onOpenChange={setIsFormatGuideOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Study Guides Import Format Guide</DialogTitle>
          </DialogHeader>
          <pre className="text-xs bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
            {STUDYGUIDE_FORMAT_GUIDE}
          </pre>
        </DialogContent>
      </Dialog>
    </div>
  );
}
