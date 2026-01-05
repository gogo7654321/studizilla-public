'use client';

import React, { useState, useTransition, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Loader2, 
  Save, 
  Plus, 
  Trash2, 
  Edit, 
  Eye, 
  EyeOff, 
  GripVertical,
  ChevronDown,
  ChevronUp,
  CreditCard,
  HelpCircle,
  FileText,
  Upload,
  FileUp
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { CourseContent, Unit } from '@/lib/course-content-schema';
import { createEmptyUnit } from '@/lib/course-content-schema';
import { addUnit, updateUnit, deleteUnit, reorderUnits } from '../actions';
import { parseUnits, validateUnits, UNIT_FORMAT_GUIDE } from '@/lib/bulk-import-parser';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { motion, AnimatePresence } from 'framer-motion';

interface UnitsTabProps {
  courseId: string;
  content: CourseContent;
  onUpdate: (courseId: string) => void;
}

export function UnitsTab({ courseId, content, onUpdate }: UnitsTabProps) {
  const { toast } = useToast();
  const [isSaving, startSaveTransition] = useTransition();
  const [editingUnit, setEditingUnit] = useState<Unit | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);
  const [bulkText, setBulkText] = useState('');
  const [parsedUnits, setParsedUnits] = useState<Partial<Unit>[]>([]);
  const [selectedUnits, setSelectedUnits] = useState<Set<string>>(new Set());
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [deleteProgress, setDeleteProgress] = useState({ current: 0, total: 0 });

  // Form state for creating/editing units
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    examWeight: '',
    content: '',
    completionEstimate: '',
    isPublished: false
  });

  const units = content.units || [];

  const toggleSelectUnit = (unitId: string) => {
    const newSelected = new Set(selectedUnits);
    if (newSelected.has(unitId)) {
      newSelected.delete(unitId);
    } else {
      newSelected.add(unitId);
    }
    setSelectedUnits(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedUnits.size === units.length) {
      setSelectedUnits(new Set());
    } else {
      setSelectedUnits(new Set(units.map(u => u.id)));
    }
  };

  const handleBatchPublish = (publish: boolean) => {
    if (selectedUnits.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No units selected' });
      return;
    }

    startSaveTransition(async () => {
      try {
        for (const unitId of selectedUnits) {
          const unit = units.find(u => u.id === unitId);
          if (unit) {
            await updateUnit(courseId, unitId, { isPublished: publish });
          }
        }
        toast({ 
          title: 'Success', 
          description: `${selectedUnits.size} unit(s) ${publish ? 'published' : 'unpublished'}` 
        });
        setSelectedUnits(new Set());
        onUpdate(courseId);
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleBatchDelete = () => {
    if (selectedUnits.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No units selected' });
      return;
    }

    if (!confirm(`Delete ${selectedUnits.size} selected unit(s)? This cannot be undone.`)) {
      return;
    }

    startSaveTransition(async () => {
      try {
        const unitsToDelete = Array.from(selectedUnits);
        setDeleteProgress({ current: 0, total: unitsToDelete.length });
        
        const batchSize = 10;
        
        // Delete in batches of 10
        for (let i = 0; i < unitsToDelete.length; i += batchSize) {
          const batch = unitsToDelete.slice(i, Math.min(i + batchSize, unitsToDelete.length));
          
          await Promise.all(batch.map(unitId => deleteUnit(courseId, unitId)));
          
          setDeleteProgress({ current: Math.min(i + batchSize, unitsToDelete.length), total: unitsToDelete.length });
        }
        
        toast({ 
          title: '✅ Deletion Complete!', 
          description: `Successfully deleted ${selectedUnits.size} unit(s)` 
        });
        setSelectedUnits(new Set());
        setDeleteProgress({ current: 0, total: 0 });
        onUpdate(courseId);
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
        setDeleteProgress({ current: 0, total: 0 });
      }
    });
  };

  const openDialog = (unit?: Unit) => {
    if (unit) {
      setEditingUnit(unit);
      setFormData({
        title: unit.title,
        description: unit.description,
        examWeight: unit.examWeight?.toString() || '',
        content: unit.content || '',
        completionEstimate: unit.completionEstimate || '',
        isPublished: unit.isPublished
      });
    } else {
      setEditingUnit(null);
      setFormData({
        title: '',
        description: '',
        examWeight: '',
        content: '',
        completionEstimate: '',
        isPublished: false
      });
    }
    setIsDialogOpen(true);
  };

  const handleSaveUnit = () => {
    if (!formData.title || !formData.description) {
      toast({ variant: 'destructive', title: 'Error', description: 'Title and description are required.' });
      return;
    }

    startSaveTransition(async () => {
      try {
        if (editingUnit) {
          // Update existing unit
          await updateUnit(courseId, editingUnit.id, {
            ...formData,
            updatedAt: new Date().toISOString()
          });
          toast({ title: "Updated!", description: `${formData.title} has been updated.` });
        } else {
          // Create new unit
          const newUnit: Unit = {
            ...createEmptyUnit(units.length) as Unit,
            ...formData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          await addUnit(courseId, newUnit);
          toast({ title: "Created!", description: `${formData.title} has been added.` });
        }
        setIsDialogOpen(false);
        onUpdate(courseId);
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleDeleteUnit = (unitId: string, unitTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${unitTitle}"? This will also delete all flashcards, questions, and materials in this unit.`)) {
      return;
    }

    startSaveTransition(async () => {
      try {
        await deleteUnit(courseId, unitId);
        toast({ title: "Deleted", description: `${unitTitle} has been removed.` });
        onUpdate(courseId);
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleBulkImport = useCallback((silent = true) => {
    if (!bulkText.trim()) {
      setParsedUnits([]);
      return;
    }
    
    try {
      const units = parseUnits(bulkText);
      const validation = validateUnits(units);
      
      if (!validation.valid) {
        if (!silent) {
          toast({
            variant: 'destructive',
            title: 'Validation Errors',
            description: validation.errors.join(', ')
          });
        }
        setParsedUnits([]);
        return;
      }
      
      setParsedUnits(units);
      if (!silent) {
        toast({ title: 'Parsed!', description: `Found ${units.length} units. Review and save.` });
      }
    } catch (error: any) {
      if (!silent) {
        toast({ variant: 'destructive', title: 'Parse Error', description: error.message });
      }
      setParsedUnits([]);
    }
  }, [bulkText, toast]);

  // Auto-parse with debounce when text changes
  const parseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (parseTimeoutRef.current) {
      clearTimeout(parseTimeoutRef.current);
    }

    if (!bulkText.trim()) {
      setParsedUnits([]);
      return;
    }

    parseTimeoutRef.current = setTimeout(() => {
      handleBulkImport();
    }, 500);

    return () => {
      if (parseTimeoutRef.current) {
        clearTimeout(parseTimeoutRef.current);
      }
    };
  }, [bulkText, handleBulkImport]);

  const handleSaveBulkUnits = () => {
    if (parsedUnits.length === 0) return;
    
    startSaveTransition(async () => {
      try {
        setUploadProgress({ current: 0, total: parsedUnits.length });
        
        const batchSize = 10;
        
        // Process units sequentially to avoid race conditions
        for (let i = 0; i < parsedUnits.length; i++) {
          const unit = parsedUnits[i];
          const unitOrder = units.length + i;
          const newUnit: Unit = {
            ...createEmptyUnit(unitOrder) as Unit,
            ...unit as any,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          await addUnit(courseId, newUnit);
          setUploadProgress({ current: i + 1, total: parsedUnits.length });
        }
        
        toast({ title: '✅ Upload Complete!', description: `Successfully added ${parsedUnits.length} units.` });
        setBulkText('');
        setParsedUnits([]);
        setIsBulkImportOpen(false);
        setUploadProgress({ current: 0, total: 0 });
        onUpdate(courseId);
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
        setUploadProgress({ current: 0, total: 0 });
      }
    });
  };

  const togglePublish = (unit: Unit) => {
    startSaveTransition(async () => {
      try {
        await updateUnit(courseId, unit.id, {
          isPublished: !unit.isPublished,
          updatedAt: new Date().toISOString()
        });
        toast({ 
          title: unit.isPublished ? "Unpublished" : "Published!", 
          description: `${unit.title} is now ${unit.isPublished ? 'hidden' : 'visible'} to students.` 
        });
        onUpdate(courseId);
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Course Units</CardTitle>
            <CardDescription>
              Manage units, add content, flashcards, questions, and materials
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
                  <DialogTitle>Bulk Import Units</DialogTitle>
                  <DialogDescription>
                    Paste formatted text to quickly create multiple units
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Format Example:</Label>
                    <pre className="text-xs bg-muted p-3 rounded-lg overflow-x-auto whitespace-pre-wrap break-words">
                      {UNIT_FORMAT_GUIDE}
                    </pre>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bulk-text" className="flex items-center gap-2">
                      Paste Your Content (Auto-parsing enabled)
                      {parsedUnits.length > 0 && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                          ✓ {parsedUnits.length} Unit{parsedUnits.length !== 1 ? 's' : ''} Ready
                        </span>
                      )}
                      {bulkText.trim() && !parsedUnits.length && (
                        <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium animate-pulse">
                          Parsing...
                        </span>
                      )}
                    </Label>
                    <Textarea
                      id="bulk-text"
                      value={bulkText}
                      onChange={(e) => setBulkText(e.target.value)}
                      placeholder="Paste units here..."
                      rows={12}
                      className="font-mono text-sm whitespace-pre-wrap break-words resize-none"
                      style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                    />
                  </div>

                  <Button 
                    onClick={() => handleBulkImport(false)} 
                    variant="outline" 
                    className="w-full"
                    title="Manual parse (auto-parse happens automatically)"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    🔄 Parse Text
                  </Button>

                  {parsedUnits.length > 0 && (
                    <div className="space-y-2">
                      <Label>Parsed Units ({parsedUnits.length}):</Label>
                      <div className="max-h-60 overflow-y-auto space-y-2 border rounded-lg p-3">
                        {parsedUnits.map((unit, index) => (
                          <Card key={index} className="p-3">
                            <p className="font-semibold break-words">{unit.title}</p>
                            <p className="text-sm text-muted-foreground break-words whitespace-pre-wrap">{unit.description}</p>
                            <div className="flex gap-2 mt-2 text-xs text-muted-foreground flex-wrap">
                              {unit.examWeight && <span>Weight: {unit.examWeight}</span>}
                              {unit.completionEstimate && <span>Time: {unit.completionEstimate}</span>}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <DialogFooter className="flex flex-col gap-3">
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
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 transition-all duration-300"
                          style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-2 justify-end w-full">
                    <Button variant="outline" onClick={() => {
                      setBulkText('');
                      setParsedUnits([]);
                      setIsBulkImportOpen(false);
                    }}>Cancel</Button>
                    <Button onClick={handleSaveBulkUnits} disabled={isSaving || parsedUnits.length === 0}>
                      {isSaving && uploadProgress.total > 0 ? (
                        <>
                          <span className="mr-2 inline-block animate-spin">⏳</span>
                          Uploading {uploadProgress.current}/{uploadProgress.total}...
                        </>
                      ) : isSaving ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="h-4 w-4 mr-2" />
                          Save {parsedUnits.length} Units
                        </>
                      )}
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={() => openDialog()} size="lg">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Unit
                </Button>
              </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingUnit ? 'Edit Unit' : 'Create New Unit'}</DialogTitle>
                <DialogDescription>
                  {editingUnit ? 'Update unit information' : 'Add a new unit to the course'}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="unit-title">Unit Title *</Label>
                  <Input
                    id="unit-title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Unit 1: The Living World"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unit-description">Description *</Label>
                  <Textarea
                    id="unit-description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief summary of what this unit covers..."
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="exam-weight">Exam Weight</Label>
                    <Input
                      id="exam-weight"
                      value={formData.examWeight}
                      onChange={(e) => setFormData({ ...formData, examWeight: e.target.value })}
                      placeholder="e.g., 8-10%"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="completion-estimate">Study Time Estimate</Label>
                    <Input
                      id="completion-estimate"
                      value={formData.completionEstimate}
                      onChange={(e) => setFormData({ ...formData, completionEstimate: e.target.value })}
                      placeholder="e.g., 2-3 hours"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unit-content">Detailed Content (Optional)</Label>
                  <Textarea
                    id="unit-content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Add detailed explanations, notes, or use a rich text editor..."
                    rows={6}
                  />
                  <p className="text-xs text-muted-foreground">Tip: Use a rich text editor for better formatting</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <Label htmlFor="is-published">Publish Unit</Label>
                    <p className="text-sm text-muted-foreground">Make this unit visible to students</p>
                  </div>
                  <Switch
                    id="is-published"
                    checked={formData.isPublished}
                    onCheckedChange={(checked) => setFormData({ ...formData, isPublished: checked })}
                  />
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleSaveUnit} disabled={isSaving}>
                  {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                  {editingUnit ? 'Update Unit' : 'Create Unit'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          </div>
        </CardHeader>
      </Card>

      {/* Batch Actions */}
      {units.length > 0 && (
        <Card className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedUnits.size === units.length && units.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">
                  Select All ({selectedUnits.size}/{units.length})
                </span>
              </label>
            </div>

            {selectedUnits.size > 0 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBatchPublish(true)}
                  disabled={isSaving}
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Publish Selected
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBatchPublish(false)}
                  disabled={isSaving}
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
                  disabled={isSaving}
                  className="border-red-500 text-red-600 hover:bg-red-50"
                >
                  {isSaving && deleteProgress.total > 0 ? (
                    <>
                      <span className="mr-2 inline-block animate-spin">🗑️</span>
                      Deleting {deleteProgress.current}/{deleteProgress.total}...
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

      {/* Units List */}
      {units.length === 0 ? (
        <Card>
          <CardContent className="py-20 text-center text-muted-foreground">
            <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <FileText className="h-12 w-12" />
            </div>
            <p className="text-lg font-semibold">No Units Yet</p>
            <p>Click "Add Unit" to create your first course unit</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {units.map((unit, index) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={unit.isPublished ? 'border-green-500/30 bg-green-500/5' : 'border-orange-500/30 bg-orange-500/5'}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={selectedUnits.has(unit.id)}
                          onChange={() => toggleSelectUnit(unit.id)}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl">{unit.title}</CardTitle>
                            <Badge variant={unit.isPublished ? 'default' : 'secondary'}>
                              {unit.isPublished ? (
                                <><Eye className="h-3 w-3 mr-1" /> Published</>
                              ) : (
                                <><EyeOff className="h-3 w-3 mr-1" /> Draft</>
                              )}
                            </Badge>
                            {unit.examWeight && (
                              <Badge variant="outline" className="text-xs">
                                Weight: {unit.examWeight}
                              </Badge>
                            )}
                          </div>
                          <CardDescription>{unit.description}</CardDescription>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => togglePublish(unit)}
                          disabled={isSaving}
                        >
                          {unit.isPublished ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDialog(unit)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteUnit(unit.id, unit.title)}
                          disabled={isSaving}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CreditCard className="h-4 w-4" />
                        <span>{unit.flashcards?.length || 0} flashcards</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HelpCircle className="h-4 w-4" />
                        <span>{unit.questions?.length || 0} questions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{unit.materials?.length || 0} materials</span>
                      </div>
                      {unit.completionEstimate && (
                        <div className="flex items-center gap-1 ml-auto">
                          <span>⏱️ {unit.completionEstimate}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  {unit.content && (
                    <CardContent className="border-t pt-4">
                      <Accordion type="single" collapsible>
                        <AccordionItem value="content">
                          <AccordionTrigger className="text-sm font-semibold">
                            View Unit Content
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="prose prose-sm max-w-none p-4 bg-muted/30 rounded-lg">
                              {unit.content}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
