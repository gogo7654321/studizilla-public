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
  Maximize2,
  X,
  Search
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { CourseContent } from '@/lib/course-content-schema';
import type { CourseQuestion, QuestionType } from '@/lib/course-questions-schema';
import { 
  getCourseQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  batchCreateQuestions,
  batchUpdateQuestions,
  batchDeleteQuestions
} from '../course-questions-actions';
import { parseQuestionsWithUnits, QUESTION_FORMAT_GUIDE, type QuestionWithUnit } from '@/lib/bulk-import-parser';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionsTabProps {
  courseId: string;
  content: CourseContent;
  questions?: CourseQuestion[];
  onUpdate: () => void;
}

export function QuestionsTab({ courseId, content, questions: initialQuestions = [], onUpdate }: QuestionsTabProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  
  // Data state - use prop as initial value
  const [questions, setQuestions] = useState<CourseQuestion[]>(initialQuestions);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  
  // Dialog states
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [previewQuestion, setPreviewQuestion] = useState<CourseQuestion | null>(null);
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);
  const [isFormatGuideOpen, setIsFormatGuideOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState<CourseQuestion | null>(null);
  
  // Bulk import
  const [bulkText, setBulkText] = useState('');
  const [parsedQuestions, setParsedQuestions] = useState<QuestionWithUnit[]>([]);
  
  // Progress indicators
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [deleteProgress, setDeleteProgress] = useState({ current: 0, total: 0 });
  
  // Selection
  const [selectedQuestions, setSelectedQuestions] = useState<Set<string>>(new Set());
  
  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterUnit, setFilterUnit] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  
  // Form data
  const [formData, setFormData] = useState({
    unitId: '',
    type: 'multiple-choice' as QuestionType,
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    explanation: '',
    difficulty: 'medium' as 'easy' | 'medium' | 'hard',
    points: 1,
    tags: '',
    sampleAnswer: '',
    rubric: '',
    isPublished: false
  });

  // Sync with prop changes (parent handles loading)
  useEffect(() => {
    setQuestions(initialQuestions);
  }, [initialQuestions.length]); // Only trigger when length changes, not reference

  const loadQuestions = async () => {
    try {
      setIsLoadingQuestions(true);
      const loadedQuestions = await getCourseQuestions(courseId);
      setQuestions(loadedQuestions);
      onUpdate(); // Notify parent
    } catch (error) {
      console.error('Failed to load questions:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to load questions' });
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  // Auto-parse with debounce
  const parseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (parseTimeoutRef.current) clearTimeout(parseTimeoutRef.current);
    
    if (!bulkText.trim()) {
      setParsedQuestions([]);
      return;
    }

    parseTimeoutRef.current = setTimeout(() => {
      try {
        const parsed = parseQuestionsWithUnits(bulkText);
        setParsedQuestions(parsed);
      } catch (error) {
        setParsedQuestions([]);
      }
    }, 500);

    return () => {
      if (parseTimeoutRef.current) clearTimeout(parseTimeoutRef.current);
    };
  }, [bulkText]);

  // Filter logic
  const filteredQuestions = (questions || []).filter(q => {
    const matchesSearch = searchQuery === '' || 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesUnit = filterUnit === 'all' || q.unitId === filterUnit;
    const matchesDifficulty = filterDifficulty === 'all' || q.difficulty === filterDifficulty;
    const matchesType = filterType === 'all' || q.type === filterType;
    
    return matchesSearch && matchesUnit && matchesDifficulty && matchesType;
  });

  // Batch operations
  const toggleSelectQuestion = (id: string) => {
    const newSelected = new Set(selectedQuestions);
    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
    setSelectedQuestions(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedQuestions.size === filteredQuestions.length) {
      setSelectedQuestions(new Set());
    } else {
      setSelectedQuestions(new Set(filteredQuestions.map(q => q.id)));
    }
  };

  const handleBatchPublish = (publish: boolean) => {
    if (selectedQuestions.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No questions selected' });
      return;
    }

    startTransition(async () => {
      try {
        const updates = Array.from(selectedQuestions).map(id => ({
          id,
          data: { isPublished: publish }
        }));
        
        await batchUpdateQuestions(updates);
        
        toast({ 
          title: 'Success', 
          description: `${selectedQuestions.size} question(s) ${publish ? 'published' : 'unpublished'}` 
        });
        setSelectedQuestions(new Set());
        await loadQuestions();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleBatchDelete = () => {
    if (selectedQuestions.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No questions selected' });
      return;
    }

    if (!confirm(`Delete ${selectedQuestions.size} question(s)? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      try {
        const questionsToDelete = Array.from(selectedQuestions);
        setDeleteProgress({ current: 0, total: questionsToDelete.length });
        
        const batchSize = 10;
        
        for (let i = 0; i < questionsToDelete.length; i += batchSize) {
          const batch = questionsToDelete.slice(i, Math.min(i + batchSize, questionsToDelete.length));
          
          await Promise.all(batch.map(id => deleteQuestion(id)));
          
          setDeleteProgress({ 
            current: Math.min(i + batchSize, questionsToDelete.length), 
            total: questionsToDelete.length 
          });
        }
        
        toast({ 
          title: '✅ Deletion Complete!', 
          description: `Successfully deleted ${selectedQuestions.size} question(s)` 
        });
        setSelectedQuestions(new Set());
        setDeleteProgress({ current: 0, total: 0 });
        await loadQuestions();
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
      unitId: '',
      type: 'multiple-choice',
      options: ['', '', '', ''],
      correctAnswer: '',
      explanation: '',
      difficulty: 'medium',
      points: 1,
      tags: '',
      sampleAnswer: '',
      rubric: '',
      question: '',
      isPublished: false
    });
    setEditingQuestion(null);
  };

  const openDialog = (question?: CourseQuestion) => {
    if (question) {
      setEditingQuestion(question);
      setFormData({
        unitId: question.unitId,
        type: question.type,
        question: question.question,
        options: question.options || ['', '', '', ''],
        correctAnswer: question.correctAnswer || '',
        explanation: question.explanation || '',
        difficulty: question.difficulty,
        points: question.points,
        tags: question.tags?.join(', ') || '',
        sampleAnswer: question.sampleAnswer || '',
        rubric: question.rubric || '',
        isPublished: question.isPublished
      });
    } else {
      resetForm();
    }
    setIsCreateOpen(true);
  };

  const handleSaveQuestion = () => {
    if (!formData.question || !formData.unitId) {
      toast({ variant: 'destructive', title: 'Error', description: 'Question text and unit are required.' });
      return;
    }

    startTransition(async () => {
      try {
        const questionData: Partial<CourseQuestion> = {
          courseId,
          unitId: formData.unitId,
          type: formData.type,
          question: formData.question,
          correctAnswer: formData.correctAnswer,
          difficulty: formData.difficulty,
          points: formData.points,
          tags: formData.tags.split(',').map(t => t.trim()).filter(t => t),
          isPublished: formData.isPublished
        };
        
        // Only add optional fields if they have values
        if (formData.type !== 'free-response' && formData.options.some(o => o.trim())) {
          questionData.options = formData.options.filter(o => o.trim());
        }
        if (formData.explanation) questionData.explanation = formData.explanation;
        if (formData.sampleAnswer) questionData.sampleAnswer = formData.sampleAnswer;
        if (formData.rubric) questionData.rubric = formData.rubric;

        if (editingQuestion) {
          await updateQuestion(editingQuestion.id, questionData);
          toast({ title: "Updated!", description: "Question has been updated." });
        } else {
          await createQuestion(questionData as Omit<CourseQuestion, 'id' | 'createdAt' | 'updatedAt'>);
          toast({ title: "Created!", description: "Question has been added." });
        }
        
        setIsCreateOpen(false);
        resetForm();
        await loadQuestions();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleDeleteQuestion = (questionId: string) => {
    if (!confirm(`Delete this question? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      try {
        await deleteQuestion(questionId);
        toast({ title: "Deleted", description: "Question has been removed." });
        await loadQuestions();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleSaveBulkQuestions = () => {
    if (parsedQuestions.length === 0) return;
    
    startTransition(async () => {
      try {
        setUploadProgress({ current: 0, total: parsedQuestions.length });
        
        const batchSize = 10;
        const questionsToCreate: Omit<CourseQuestion, 'id' | 'createdAt' | 'updatedAt'>[] = [];
        
        for (const q of parsedQuestions) {
          const targetUnit = q.unitNumber && content?.units ? content.units[q.unitNumber - 1] : null;
          if (!targetUnit) {
            console.warn(`Unit ${q.unitNumber} not found for question, skipping`);
            continue;
          }
          
          questionsToCreate.push({
            courseId,
            unitId: targetUnit.id,
            type: q.type || 'multiple-choice',
            question: q.question || '',
            options: q.options,
            correctAnswer: q.correctAnswer || '',
            explanation: q.explanation,
            difficulty: q.difficulty || 'medium',
            points: q.points || 1,
            tags: q.tags || [],
            sampleAnswer: q.sampleAnswer,
            rubric: q.rubric,
            isPublished: false
          });
        }
        
        // Process in batches
        for (let i = 0; i < questionsToCreate.length; i += batchSize) {
          const batch = questionsToCreate.slice(i, Math.min(i + batchSize, questionsToCreate.length));
          await batchCreateQuestions(batch);
          setUploadProgress({ 
            current: Math.min(i + batchSize, questionsToCreate.length), 
            total: questionsToCreate.length 
          });
        }
        
        toast({ 
          title: '✅ Upload Complete!', 
          description: `Successfully added ${questionsToCreate.length} question(s).` 
        });
        setBulkText('');
        setParsedQuestions([]);
        setIsBulkImportOpen(false);
        setUploadProgress({ current: 0, total: 0 });
        await loadQuestions();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
        setUploadProgress({ current: 0, total: 0 });
      }
    });
  };

  const togglePublish = (question: CourseQuestion) => {
    startTransition(async () => {
      try {
        await updateQuestion(question.id, {
          isPublished: !question.isPublished
        });
        toast({ 
          title: question.isPublished ? "Unpublished" : "Published!", 
          description: `Question is now ${question.isPublished ? 'hidden from' : 'visible to'} students.` 
        });
        await loadQuestions();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'easy': return 'bg-green-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'hard': return 'bg-red-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getTypeLabel = (type: QuestionType) => {
    switch (type) {
      case 'multiple-choice': return 'MCQ';
      case 'free-response': return 'FRQ';
      case 'true-false': return 'T/F';
      default: return type;
    }
  };

  const getUnitTitle = (unitId: string) => {
    const unit = content?.units?.find(u => u.id === unitId);
    return unit?.title || 'Unknown Unit';
  };

  if (isLoadingQuestions) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Practice Questions</CardTitle>
            <CardDescription>
              Manage questions for quizzes, tests, and practice exams
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
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
                    Bulk Import Questions
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsFormatGuideOpen(true)}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </Button>
                  </DialogTitle>
                  <DialogDescription>
                    Paste formatted text to quickly create multiple questions
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="bulk-text" className="flex items-center gap-2">
                      Paste Your Content (Auto-parsing enabled)
                      {parsedQuestions.length > 0 && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                          ✓ {parsedQuestions.length} Question{parsedQuestions.length !== 1 ? 's' : ''} Ready
                        </span>
                      )}
                      {bulkText.trim() && !parsedQuestions.length && (
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
                      placeholder="Paste questions in :::Q::: format (click ? for guide)..."
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
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-300"
                          style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {parsedQuestions.length > 0 && (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      <h4 className="font-semibold text-sm">Preview ({parsedQuestions.length} questions)</h4>
                      {parsedQuestions.map((q, idx) => {
                        const unit = q.unitNumber && content?.units ? content.units[q.unitNumber - 1] : null;
                        return (
                          <Card key={idx} className="p-3 bg-muted/50">
                            <div className="flex items-center gap-2 mb-2">
                              {unit && (
                                <Badge variant="secondary" className="text-xs">
                                  Unit {q.unitNumber}: {unit.title}
                                </Badge>
                              )}
                              <Badge className={getDifficultyColor(q.difficulty || 'medium') + ' text-xs'}>
                                {q.difficulty || 'medium'}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {getTypeLabel(q.type || 'multiple-choice')}
                              </Badge>
                            </div>
                            <p className="font-medium text-sm">{q.question}</p>
                            {q.options && q.options.length > 0 && (
                              <p className="text-xs text-muted-foreground mt-1">
                                {q.options.length} options
                              </p>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  )}

                  <DialogFooter className="flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        try {
                          const parsed = parseQuestionsWithUnits(bulkText);
                          setParsedQuestions(parsed);
                          toast({ title: 'Success', description: `Parsed ${parsed.length} question(s)!` });
                        } catch (error: any) {
                          toast({ title: 'Parse Error', description: error.message, variant: 'destructive' });
                        }
                      }}
                      disabled={!bulkText.trim()}
                      title="Manual parse (auto-parse happens automatically)"
                    >
                      Parse Questions
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => {
                        setIsBulkImportOpen(false);
                        setBulkText('');
                        setParsedQuestions([]);
                      }}>
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleSaveBulkQuestions}
                        disabled={parsedQuestions.length === 0 || isPending}
                      >
                        {isPending && uploadProgress.total > 0 ? (
                          <>Uploading {uploadProgress.current}/{uploadProgress.total}...</>
                        ) : (
                          <>Save {parsedQuestions.length} Question{parsedQuestions.length !== 1 ? 's' : ''}</>
                        )}
                      </Button>
                    </div>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog>

            <Button size="lg" onClick={() => openDialog()}>
              <Plus className="h-4 w-4 mr-2" />
              Add Question
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Search & Filters Card */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Label className="text-sm text-gray-600">Search Questions</Label>
            <Input
              placeholder="Search by question text or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm text-gray-600">Unit</Label>
            <Select value={filterUnit} onValueChange={setFilterUnit}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="All units" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Units</SelectItem>
                {(content?.units ?? []).map(unit => (
                  <SelectItem key={unit.id} value={unit.id}>
                    {unit.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm text-gray-600">Difficulty</Label>
            <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="All difficulties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div>
            <Label className="text-sm text-gray-600">Type</Label>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                <SelectItem value="free-response">Free Response</SelectItem>
                <SelectItem value="true-false">True/False</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setFilterUnit('all');
                setFilterDifficulty('all');
                setFilterType('all');
              }}
              className="w-full"
            >
              Clear Filters
            </Button>
          </div>
          <div className="md:col-span-2 flex items-end justify-end">
            <p className="text-sm text-gray-600">
              {filteredQuestions.length} of {(questions || []).length} question{(questions || []).length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </Card>

      {/* Batch Actions */}
      {(questions || []).length > 0 && (
        <Card className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedQuestions.size === filteredQuestions.length && filteredQuestions.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">
                  Select All ({selectedQuestions.size}/{filteredQuestions.length})
                </span>
              </label>
            </div>

            {selectedQuestions.size > 0 && (
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

      {/* Questions List */}
      {filteredQuestions.length === 0 ? (
        <Card>
          <CardContent className="py-20 text-center text-muted-foreground">
            <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <HelpCircle className="h-12 w-12" />
            </div>
            <p className="text-lg font-semibold">No Questions Yet</p>
            <p>Click "Add Question" or "Bulk Import" to create practice questions</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {filteredQuestions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.02 }}
              >
                <Card className={question.isPublished ? 'border-green-500/30 bg-green-500/5' : 'border-orange-500/30 bg-orange-500/5'}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={selectedQuestions.has(question.id)}
                          onChange={() => toggleSelectQuestion(question.id)}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getDifficultyColor(question.difficulty)}>
                              {question.difficulty}
                            </Badge>
                            <Badge variant="outline">{getTypeLabel(question.type)}</Badge>
                            <Badge variant="secondary">{question.points} pts</Badge>
                            <Badge variant={question.isPublished ? 'default' : 'secondary'}>
                              {question.isPublished ? (
                                <><Eye className="h-3 w-3 mr-1" /> Published</>
                              ) : (
                                <><EyeOff className="h-3 w-3 mr-1" /> Draft</>
                              )}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{getUnitTitle(question.unitId)}</span>
                          </div>
                          <CardTitle className="text-base">{question.question}</CardTitle>
                          
                          {question.type === 'multiple-choice' && question.options && (
                            <div className="mt-3 space-y-1 text-sm">
                              {question.options.map((opt, idx) => {
                                const isCorrect = idx.toString() === question.correctAnswer;
                                return (
                                  <div 
                                    key={idx}
                                    className={`p-2 rounded ${isCorrect ? 'bg-green-100 dark:bg-green-900/20 font-medium' : 'bg-muted/50'}`}
                                  >
                                    <span className="font-mono">{String.fromCharCode(65 + idx)}</span>) {opt}
                                    {isCorrect && <span className="ml-2 text-green-600">✓</span>}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                          
                          {question.explanation && (
                            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-sm">
                              <span className="font-semibold text-blue-700 dark:text-blue-300">Explanation:</span>
                              <p className="text-muted-foreground mt-1">{question.explanation}</p>
                            </div>
                          )}
                          
                          {question.tags && question.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {question.tags.map((tag, idx) => (
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
                          onClick={() => setPreviewQuestion(question)}
                          title="Preview Question"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => togglePublish(question)}
                          disabled={isPending}
                        >
                          {question.isPublished ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDialog(question)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteQuestion(question.id)}
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

      {/* Question Preview Dialog */}
      <Dialog open={!!previewQuestion} onOpenChange={(open) => !open && setPreviewQuestion(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Question Preview
            </DialogTitle>
          </DialogHeader>
          
          {previewQuestion && (
            <div className="space-y-6">
              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={getDifficultyColor(previewQuestion.difficulty)}>
                  {previewQuestion.difficulty}
                </Badge>
                <Badge variant="outline">{getTypeLabel(previewQuestion.type)}</Badge>
                <Badge variant="secondary">{previewQuestion.points} points</Badge>
                <Badge variant={previewQuestion.isPublished ? 'default' : 'secondary'}>
                  {previewQuestion.isPublished ? '✅ Published' : '📝 Draft'}
                </Badge>
                <Badge variant="outline">{getUnitTitle(previewQuestion.unitId)}</Badge>
              </div>

              {previewQuestion.tags && previewQuestion.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {previewQuestion.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Question */}
              <div className="bg-muted/50 rounded-lg p-6 border">
                <h3 className="font-semibold text-lg mb-4">{previewQuestion.question}</h3>
                
                {/* Options */}
                {previewQuestion.type === 'multiple-choice' && previewQuestion.options && (
                  <div className="space-y-2 mt-4">
                    {previewQuestion.options.map((opt, idx) => {
                      const isCorrect = idx.toString() === previewQuestion.correctAnswer;
                      return (
                        <div 
                          key={idx}
                          className={`p-3 rounded-lg border-2 transition-colors ${
                            isCorrect 
                              ? 'bg-green-100 dark:bg-green-900/30 border-green-500 font-medium' 
                              : 'bg-background border-border'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold">{String.fromCharCode(65 + idx)}</span>
                            <span>{opt}</span>
                            {isCorrect && <span className="ml-auto text-green-600 dark:text-green-400">✓ Correct</span>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                
                {/* Free Response */}
                {previewQuestion.type === 'free-response' && (
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border">
                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">Sample Answer:</p>
                    <p className="text-sm">{previewQuestion.correctAnswer}</p>
                  </div>
                )}
              </div>

              {/* Explanation */}
              {previewQuestion.explanation && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Explanation:</h4>
                  <p className="text-sm leading-relaxed">{previewQuestion.explanation}</p>
                </div>
              )}
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
            <DialogTitle>{editingQuestion ? 'Edit Question' : 'Create Question'}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="unit-select">Unit *</Label>
              <Select value={formData.unitId} onValueChange={(v) => setFormData({ ...formData, unitId: v })}>
                <SelectTrigger id="unit-select">
                  <SelectValue placeholder="Select a unit" />
                </SelectTrigger>
                <SelectContent>
                  {(content?.units ?? []).map(unit => (
                    <SelectItem key={unit.id} value={unit.id}>
                      {unit.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="type-select">Question Type</Label>
                <Select value={formData.type} onValueChange={(v) => setFormData({ ...formData, type: v as QuestionType })}>
                  <SelectTrigger id="type-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                    <SelectItem value="free-response">Free Response</SelectItem>
                    <SelectItem value="true-false">True/False</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty-select">Difficulty</Label>
                <Select value={formData.difficulty} onValueChange={(v) => setFormData({ ...formData, difficulty: v as any })}>
                  <SelectTrigger id="difficulty-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="question-text">Question *</Label>
              <Textarea
                id="question-text"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                placeholder="Enter the question text..."
                rows={3}
              />
            </div>

            {formData.type === 'multiple-choice' && (
              <div className="space-y-2">
                <Label>Answer Options</Label>
                {formData.options.map((opt, idx) => (
                  <Input
                    key={idx}
                    value={opt}
                    onChange={(e) => {
                      const newOptions = [...formData.options];
                      newOptions[idx] = e.target.value;
                      setFormData({ ...formData, options: newOptions });
                    }}
                    placeholder={`Option ${String.fromCharCode(65 + idx)}`}
                  />
                ))}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="correct-answer">Correct Answer</Label>
              {formData.type === 'multiple-choice' ? (
                <Select value={formData.correctAnswer} onValueChange={(v) => setFormData({ ...formData, correctAnswer: v })}>
                  <SelectTrigger id="correct-answer">
                    <SelectValue placeholder="Select correct option" />
                  </SelectTrigger>
                  <SelectContent>
                    {formData.options.filter(o => o.trim()).map((opt, idx) => (
                      <SelectItem key={idx} value={idx.toString()}>
                        {String.fromCharCode(65 + idx)}: {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : formData.type === 'true-false' ? (
                <Select value={formData.correctAnswer} onValueChange={(v) => setFormData({ ...formData, correctAnswer: v })}>
                  <SelectTrigger id="correct-answer">
                    <SelectValue placeholder="Select answer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="True">True</SelectItem>
                    <SelectItem value="False">False</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Textarea
                  id="correct-answer"
                  value={formData.correctAnswer}
                  onChange={(e) => setFormData({ ...formData, correctAnswer: e.target.value })}
                  placeholder="Model answer..."
                  rows={2}
                />
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="explanation">Explanation (Optional)</Label>
              <Textarea
                id="explanation"
                value={formData.explanation}
                onChange={(e) => setFormData({ ...formData, explanation: e.target.value })}
                placeholder="Explain why this is the correct answer..."
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="points">Points</Label>
                <Input
                  id="points"
                  type="number"
                  min={1}
                  value={formData.points}
                  onChange={(e) => setFormData({ ...formData, points: parseInt(e.target.value) || 1 })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="e.g., biology, cell"
                />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <Label htmlFor="is-published">Publish Question</Label>
                <p className="text-sm text-muted-foreground">Make this question visible to students</p>
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
            <Button onClick={handleSaveQuestion} disabled={isPending}>
              {editingQuestion ? 'Update Question' : 'Create Question'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Format Guide Dialog */}
      <Dialog open={isFormatGuideOpen} onOpenChange={setIsFormatGuideOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Questions Import Format Guide</DialogTitle>
          </DialogHeader>
          <pre className="text-xs bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
            {QUESTION_FORMAT_GUIDE}
          </pre>
        </DialogContent>
      </Dialog>
    </div>
  );
}
