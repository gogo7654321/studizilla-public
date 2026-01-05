'use client';

import { useState, useTransition, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Edit, Eye, EyeOff, Search, X, Clock, Target, FileCheck, ClipboardCheck, AlertCircle, Maximize2 } from 'lucide-react';
import type { CoursePracticeTest } from '@/lib/course-practice-tests-schema';
import type { CourseContent } from '@/lib/course-content-schema';
import { 
  createPracticeTest, 
  updatePracticeTest, 
  batchDeletePracticeTests,
  batchUpdatePracticeTests
} from '../course-practice-tests-actions';

interface PracticeTestsTabProps {
  courseId: string;
  content: CourseContent;
  practiceTests?: CoursePracticeTest[];
  onUpdate: () => void;
}

export function PracticeTestsTab({ courseId, content, practiceTests, onUpdate }: PracticeTestsTabProps) {
  const [tests, setTests] = useState<CoursePracticeTest[]>(practiceTests || []);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [editingTest, setEditingTest] = useState<CoursePracticeTest | null>(null);
  const [previewTest, setPreviewTest] = useState<CoursePracticeTest | null>(null);
  const [selectedTests, setSelectedTests] = useState<Set<string>>(new Set());
  const [deleteProgress, setDeleteProgress] = useState({ current: 0, total: 0 });
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'quiz' as 'practice-exam' | 'unit-test' | 'quiz' | 'diagnostic',
    questionIds: [] as string[],
    timeLimit: '',
    passingScore: ''
  });

  // Sync tests when prop changes
  useEffect(() => {
    setTests(practiceTests || []);
  }, [practiceTests]);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      type: 'quiz',
      questionIds: [],
      timeLimit: '',
      passingScore: ''
    });
    setEditingTest(null);
  };

  const handleEdit = (test: CoursePracticeTest) => {
    setFormData({
      title: test.title,
      description: test.description || '',
      type: test.type,
      questionIds: test.questionIds,
      timeLimit: test.timeLimit?.toString() || '',
      passingScore: test.passingScore?.toString() || ''
    });
    setEditingTest(test);
    setIsCreateOpen(true);
  };

  const handleSaveTest = () => {
    if (!formData.title.trim()) {
      toast({ title: 'Validation Error', description: 'Test title is required', variant: 'destructive' });
      return;
    }

    startTransition(async () => {
      try {
        const testData: Partial<CoursePracticeTest> = {
          courseId,
          title: formData.title,
          type: formData.type,
          questionIds: formData.questionIds,
          isPublished: editingTest?.isPublished || false,
          order: 0
        };
        
        // Only add optional fields if they have values
        if (formData.description) testData.description = formData.description;
        if (formData.timeLimit) testData.timeLimit = parseInt(formData.timeLimit);
        if (formData.passingScore) testData.passingScore = parseInt(formData.passingScore);

        if (editingTest) {
          await updatePracticeTest(editingTest.id, testData);
          toast({ title: 'Success', description: 'Practice test updated!' });
        } else {
          await createPracticeTest(testData as Omit<CoursePracticeTest, 'id' | 'createdAt' | 'updatedAt'>);
          toast({ title: 'Success', description: 'Practice test created!' });
        }

        setIsCreateOpen(false);
        resetForm();
        onUpdate();
      } catch (error: any) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      }
    });
  };

  const handleTogglePublish = (test: CoursePracticeTest) => {
    startTransition(async () => {
      try {
        await updatePracticeTest(test.id, { isPublished: !test.isPublished });
        toast({ 
          title: test.isPublished ? "Unpublished" : "Published!", 
          description: `Test is now ${test.isPublished ? 'hidden from' : 'visible to'} students.` 
        });
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const toggleTestSelection = (testId: string) => {
    const newSelected = new Set(selectedTests);
    if (newSelected.has(testId)) {
      newSelected.delete(testId);
    } else {
      newSelected.add(testId);
    }
    setSelectedTests(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedTests.size === tests.length) {
      setSelectedTests(new Set());
    } else {
      setSelectedTests(new Set(tests.map(t => t.id)));
    }
  };

  const handleBatchPublish = (publish: boolean) => {
    if (selectedTests.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No tests selected' });
      return;
    }

    startTransition(async () => {
      try {
        const selectedIds = Array.from(selectedTests);
        const updates = selectedIds.map(id => ({ id, data: { isPublished: publish } }));
        await batchUpdatePracticeTests(updates);
        toast({ 
          title: 'Success', 
          description: `${selectedTests.size} test(s) ${publish ? 'published' : 'unpublished'}` 
        });
        setSelectedTests(new Set());
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleBatchDelete = () => {
    if (selectedTests.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No tests selected' });
      return;
    }

    if (!confirm(`Delete ${selectedTests.size} practice test(s)? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      try {
        setDeleteProgress({ current: 0, total: selectedTests.size });
        const selectedIds = Array.from(selectedTests);
        
        // Process in batches of 10
        for (let i = 0; i < selectedIds.length; i += 10) {
          const batch = selectedIds.slice(i, Math.min(i + 10, selectedIds.length));
          await batchDeletePracticeTests(batch);
          setDeleteProgress({ current: Math.min(i + 10, selectedIds.length), total: selectedTests.size });
        }

        toast({ title: '✅ Deletion Complete!', description: `Successfully deleted ${selectedTests.size} test(s)` });
        setSelectedTests(new Set());
        setDeleteProgress({ current: 0, total: 0 });
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
        setDeleteProgress({ current: 0, total: 0 });
      }
    });
  };

  const handleDeleteTest = (testId: string) => {
    if (!confirm('Delete this practice test? This cannot be undone.')) {
      return;
    }

    startTransition(async () => {
      try {
        await batchDeletePracticeTests([testId]);
        toast({ title: 'Success', description: 'Practice test deleted' });
        onUpdate();
      } catch (error: any) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      }
    });
  };

  // Filter tests based on search and filters
  const filteredTests = tests.filter(test => {
    // Search filter (searches title and description)
    const matchesSearch = searchQuery === '' || 
      test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (test.description && test.description.toLowerCase().includes(searchQuery.toLowerCase()));

    // Type filter
    const matchesType = filterType === 'all' || test.type === filterType;

    return matchesSearch && matchesType;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setFilterType('all');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'practice-exam': return <FileCheck className="h-4 w-4" />;
      case 'unit-test': return <ClipboardCheck className="h-4 w-4" />;
      case 'quiz': return <Target className="h-4 w-4" />;
      case 'diagnostic': return <AlertCircle className="h-4 w-4" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'practice-exam': return 'border-purple-500 text-purple-700 bg-purple-50';
      case 'unit-test': return 'border-blue-500 text-blue-700 bg-blue-50';
      case 'quiz': return 'border-green-500 text-green-700 bg-green-50';
      case 'diagnostic': return 'border-orange-500 text-orange-700 bg-orange-50';
      default: return 'border-gray-500 text-gray-700 bg-gray-50';
    }
  };

  const getTypeLabel = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Dialog open={isCreateOpen} onOpenChange={(open) => {
          setIsCreateOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Practice Test
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingTest ? 'Edit Practice Test' : 'Create Practice Test'}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Test Title *</Label>
                <Input 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Unit 1 Practice Test, Full-Length Practice Exam"
                />
              </div>

              <div>
                <Label>Description</Label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  placeholder="Brief description of what this test covers..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Test Type</Label>
                  <Select value={formData.type} onValueChange={(value: any) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quiz">Quiz</SelectItem>
                      <SelectItem value="unit-test">Unit Test</SelectItem>
                      <SelectItem value="practice-exam">Practice Exam</SelectItem>
                      <SelectItem value="diagnostic">Diagnostic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Time Limit (minutes)</Label>
                  <Input 
                    type="number"
                    value={formData.timeLimit}
                    onChange={(e) => setFormData({ ...formData, timeLimit: e.target.value })}
                    placeholder="e.g., 60"
                  />
                </div>
              </div>

              <div>
                <Label>Passing Score (%)</Label>
                <Input 
                  type="number"
                  min="0"
                  max="100"
                  value={formData.passingScore}
                  onChange={(e) => setFormData({ ...formData, passingScore: e.target.value })}
                  placeholder="e.g., 70"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Question Assignment
                    </p>
                    <p className="text-xs text-blue-700 dark:text-blue-300">
                      After creating the test, you can assign questions from the Questions tab by linking their IDs.
                      Currently: {formData.questionIds.length} question(s) assigned.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button 
                  onClick={handleSaveTest} 
                  disabled={!formData.title || isPending}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  {isPending ? 'Saving...' : editingTest ? 'Update Test' : 'Create Test'}
                </Button>
                <Button 
                  onClick={() => setIsCreateOpen(false)} 
                  variant="outline"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter Section */}
      {tests.length > 0 && (
        <Card className="p-4">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search practice tests by title or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="quiz">Quiz</SelectItem>
                  <SelectItem value="unit-test">Unit Test</SelectItem>
                  <SelectItem value="practice-exam">Practice Exam</SelectItem>
                  <SelectItem value="diagnostic">Diagnostic</SelectItem>
                </SelectContent>
              </Select>
              {(searchQuery || filterType !== 'all') && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="shrink-0"
                >
                  <X className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
            {(searchQuery || filterType !== 'all') && (
              <div className="text-sm text-muted-foreground">
                Showing {filteredTests.length} of {tests.length} practice tests
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Selection and Batch Actions */}
      {tests.length > 0 && (
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedTests.size === tests.length && tests.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">
                  Select All ({selectedTests.size}/{tests.length})
                </span>
              </label>
            </div>

            {selectedTests.size > 0 && (
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

      {/* Tests List */}
      {tests.length === 0 ? (
        <Card className="p-12 text-center">
          <FileCheck className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No Practice Tests Yet</h3>
          <p className="text-muted-foreground mb-4">
            Create practice tests to help students prepare for exams and assess their knowledge.
          </p>
          <Button onClick={() => setIsCreateOpen(true)} className="bg-amber-600 hover:bg-amber-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Your First Practice Test
          </Button>
        </Card>
      ) : (
        <div className="space-y-3">
          <AnimatePresence>
            {filteredTests.map((test) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Card className={test.isPublished ? 'border-green-500/30 bg-green-500/5' : 'border-orange-500/30 bg-orange-500/5'}>
                  <div className="flex items-start gap-4 p-4">
                    <div className="pt-1">
                      <input
                        type="checkbox"
                        checked={selectedTests.has(test.id)}
                        onChange={() => toggleTestSelection(test.id)}
                        className="w-4 h-4"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-base">{test.title}</h4>
                            <Badge variant={test.isPublished ? 'default' : 'secondary'} className="shrink-0">
                              {test.isPublished ? (
                                <><Eye className="h-3 w-3 mr-1" /> Published</>
                              ) : (
                                <><EyeOff className="h-3 w-3 mr-1" /> Draft</>
                              )}
                            </Badge>
                          </div>
                          {test.description && (
                            <p className="text-sm text-muted-foreground mb-2">{test.description}</p>
                          )}
                          <div className="flex flex-wrap gap-2 items-center">
                            <Badge variant="outline" className={getTypeColor(test.type)}>
                              {getTypeIcon(test.type)}
                              <span className="ml-1">{getTypeLabel(test.type)}</span>
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <Target className="h-3 w-3 mr-1" />
                              {test.questionIds.length} Question{test.questionIds.length !== 1 ? 's' : ''}
                            </Badge>
                            {test.timeLimit && (
                              <Badge variant="outline" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {test.timeLimit} min
                              </Badge>
                            )}
                            {test.passingScore && (
                              <Badge variant="outline" className="text-xs">
                                <Target className="h-3 w-3 mr-1" />
                                {test.passingScore}% to pass
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setPreviewTest(test)}
                            title="Preview Test"
                          >
                            <Maximize2 className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleTogglePublish(test)}
                            disabled={isPending}
                            className={test.isPublished ? 'text-orange-600 hover:bg-orange-50' : 'text-green-600 hover:bg-green-50'}
                          >
                            {test.isPublished ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleEdit(test)}
                            disabled={isPending}
                          >
                            <Edit className="w-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteTest(test.id)}
                            disabled={isPending}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Practice Test Preview Dialog */}
      <Dialog open={!!previewTest} onOpenChange={(open) => !open && setPreviewTest(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileCheck className="h-5 w-5" />
              {previewTest?.title}
            </DialogTitle>
          </DialogHeader>
          
          {previewTest && (
            <div className="space-y-4">
              {previewTest.description && (
                <p className="text-muted-foreground">{previewTest.description}</p>
              )}
              
              {/* Metadata Badges */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className={getTypeColor(previewTest.type)}>
                  {getTypeIcon(previewTest.type)}
                  <span className="ml-1">{getTypeLabel(previewTest.type)}</span>
                </Badge>
                <Badge variant={previewTest.isPublished ? 'default' : 'secondary'}>
                  {previewTest.isPublished ? '✅ Published' : '📝 Draft'}
                </Badge>
                {previewTest.timeLimit && (
                  <Badge variant="outline">
                    <Clock className="h-3 w-3 mr-1" />
                    {previewTest.timeLimit} minutes
                  </Badge>
                )}
                {previewTest.passingScore && (
                  <Badge variant="outline">
                    <Target className="h-3 w-3 mr-1" />
                    {previewTest.passingScore}% passing score
                  </Badge>
                )}
              </div>

              {/* Question Count */}
              <div className="bg-muted/50 rounded-lg p-4 border">
                <div className="flex items-center gap-2 mb-2">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Questions</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  This test contains {previewTest.questionIds.length} question{previewTest.questionIds.length !== 1 ? 's' : ''}.
                </p>
                
                {previewTest.questionIds.length > 0 && (
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Question IDs:</p>
                    <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto">
                      {previewTest.questionIds.map((qid, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs font-mono">
                          {idx + 1}. {qid.substring(0, 8)}...
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {tests.length > 0 && (
        <div className="pt-4 border-t">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Total Tests: <span className="font-semibold">{tests.length}</span>
              {' • '}
              <span className="text-green-600 font-semibold">{tests.filter(t => t.isPublished).length} Published</span>
              {' • '}
              <span className="text-orange-600 font-semibold">{tests.filter(t => !t.isPublished).length} Draft</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Only published tests are visible to students
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
