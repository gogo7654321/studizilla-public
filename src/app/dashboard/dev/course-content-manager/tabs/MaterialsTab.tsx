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
  FileText,
  ExternalLink,
  Video,
  Image as ImageIcon,
  File,
  Maximize2,
  Search,
  X
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { CourseContent } from '@/lib/course-content-schema';
import type { CourseMaterial, MaterialType } from '@/lib/course-materials-schema';
import { 
  getCourseMaterials,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  batchCreateMaterials,
  batchUpdateMaterials,
  batchDeleteMaterials
} from '../course-materials-actions';
import { parseMaterialsWithUnits, MATERIAL_FORMAT_GUIDE, type MaterialWithUnit } from '@/lib/bulk-import-parser';
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

interface MaterialsTabProps {
  courseId: string;
  content: CourseContent;
  materials?: CourseMaterial[];
  onUpdate: () => void;
}

export function MaterialsTab({ courseId, content, materials: initialMaterials = [], onUpdate }: MaterialsTabProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  
  // Data state
  const [materials, setMaterials] = useState<CourseMaterial[]>(initialMaterials);
  const [isLoadingMaterials, setIsLoadingMaterials] = useState(false);
  
  // Dialog states
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);
  const [isFormatGuideOpen, setIsFormatGuideOpen] = useState(false);
  const [editingMaterial, setEditingMaterial] = useState<CourseMaterial | null>(null);
  
  // Bulk import
  const [bulkText, setBulkText] = useState('');
  const [parsedMaterials, setParsedMaterials] = useState<MaterialWithUnit[]>([]);
  
  // Progress indicators
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [deleteProgress, setDeleteProgress] = useState({ current: 0, total: 0 });
  
  // Selection
  const [selectedMaterials, setSelectedMaterials] = useState<Set<string>>(new Set());
  
  // Preview
  const [previewMaterial, setPreviewMaterial] = useState<CourseMaterial | null>(null);
  
  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterUnit, setFilterUnit] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');
  
  // Form data
  const [formData, setFormData] = useState({
    unitId: '',
    name: '',
    type: 'pdf' as MaterialType,
    url: '',
    description: '',
    isPublished: false
  });

  // Sync with prop changes
  useEffect(() => {
    setMaterials(initialMaterials);
  }, [initialMaterials.length]);

  const loadMaterials = async () => {
    try {
      setIsLoadingMaterials(true);
      const loadedMaterials = await getCourseMaterials(courseId);
      setMaterials(loadedMaterials);
      onUpdate();
    } catch (error) {
      console.error('Failed to load materials:', error);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to load materials' });
    } finally {
      setIsLoadingMaterials(false);
    }
  };

  // Auto-parse with debounce
  const parseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (parseTimeoutRef.current) clearTimeout(parseTimeoutRef.current);
    
    if (!bulkText.trim()) {
      setParsedMaterials([]);
      return;
    }

    parseTimeoutRef.current = setTimeout(() => {
      try {
        const parsed = parseMaterialsWithUnits(bulkText);
        setParsedMaterials(parsed);
      } catch (error) {
        setParsedMaterials([]);
      }
    }, 500);

    return () => {
      if (parseTimeoutRef.current) clearTimeout(parseTimeoutRef.current);
    };
  }, [bulkText]);

  // Filter logic
  const filteredMaterials = (materials || []).filter(m => {
    const matchesSearch = searchQuery === '' || 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesUnit = filterUnit === 'all' || 
      (filterUnit === 'global' && !m.unitId) ||
      m.unitId === filterUnit;
    const matchesType = filterType === 'all' || m.type === filterType;
    
    return matchesSearch && matchesUnit && matchesType;
  });

  // Batch operations
  const toggleSelectMaterial = (id: string) => {
    const newSelected = new Set(selectedMaterials);
    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
    setSelectedMaterials(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedMaterials.size === filteredMaterials.length) {
      setSelectedMaterials(new Set());
    } else {
      setSelectedMaterials(new Set(filteredMaterials.map(m => m.id)));
    }
  };

  const handleBatchPublish = (publish: boolean) => {
    if (selectedMaterials.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No materials selected' });
      return;
    }

    startTransition(async () => {
      try {
        const updates = Array.from(selectedMaterials).map(id => ({
          id,
          data: { isPublished: publish }
        }));
        
        await batchUpdateMaterials(updates);
        
        toast({ 
          title: 'Success', 
          description: `${selectedMaterials.size} material(s) ${publish ? 'published' : 'unpublished'}` 
        });
        setSelectedMaterials(new Set());
        await loadMaterials();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleBatchDelete = () => {
    if (selectedMaterials.size === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No materials selected' });
      return;
    }

    if (!confirm(`Delete ${selectedMaterials.size} material(s)? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      try {
        const materialsToDelete = Array.from(selectedMaterials);
        setDeleteProgress({ current: 0, total: materialsToDelete.length });
        
        const batchSize = 10;
        
        for (let i = 0; i < materialsToDelete.length; i += batchSize) {
          const batch = materialsToDelete.slice(i, Math.min(i + batchSize, materialsToDelete.length));
          
          await Promise.all(batch.map(id => deleteMaterial(id)));
          
          setDeleteProgress({ 
            current: Math.min(i + batchSize, materialsToDelete.length), 
            total: materialsToDelete.length 
          });
        }
        
        toast({ 
          title: '✅ Deletion Complete!', 
          description: `Successfully deleted ${selectedMaterials.size} material(s)` 
        });
        setSelectedMaterials(new Set());
        setDeleteProgress({ current: 0, total: 0 });
        await loadMaterials();
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
      name: '',
      type: 'pdf',
      url: '',
      description: '',
      isPublished: false
    });
    setEditingMaterial(null);
  };

  const openDialog = (material?: CourseMaterial) => {
    if (material) {
      setEditingMaterial(material);
      setFormData({
        unitId: material.unitId || '',
        name: material.name,
        type: material.type,
        url: material.url,
        description: material.description || '',
        isPublished: material.isPublished
      });
    } else {
      resetForm();
    }
    setIsCreateOpen(true);
  };

  const handleSaveMaterial = () => {
    if (!formData.name || !formData.url) {
      toast({ variant: 'destructive', title: 'Error', description: 'Name and URL are required.' });
      return;
    }

    startTransition(async () => {
      try {
        const materialData: Partial<CourseMaterial> = {
          courseId,
          name: formData.name,
          type: formData.type,
          url: formData.url,
          isPublished: formData.isPublished,
          uploadedAt: new Date().toISOString(),
          order: 0
        };
        
        // Only add optional fields if they have values
        if (formData.unitId) materialData.unitId = formData.unitId;
        if (formData.description) materialData.description = formData.description;

        if (editingMaterial) {
          await updateMaterial(editingMaterial.id, materialData);
          toast({ title: "Updated!", description: "Material has been updated." });
        } else {
          await createMaterial(materialData as Omit<CourseMaterial, 'id' | 'createdAt' | 'updatedAt'>);
          toast({ title: "Created!", description: "Material has been added." });
        }
        
        setIsCreateOpen(false);
        resetForm();
        await loadMaterials();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleDeleteMaterial = (materialId: string) => {
    if (!confirm(`Delete this material? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      try {
        await deleteMaterial(materialId);
        toast({ title: "Deleted", description: "Material has been removed." });
        await loadMaterials();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const handleSaveBulkMaterials = () => {
    if (parsedMaterials.length === 0) return;
    
    startTransition(async () => {
      try {
        setUploadProgress({ current: 0, total: parsedMaterials.length });
        
        const batchSize = 10;
        const materialsToCreate: Omit<CourseMaterial, 'id' | 'createdAt' | 'updatedAt'>[] = [];
        
        for (const m of parsedMaterials) {
          const targetUnit = m.unitNumber && m.unitNumber > 0 ? content?.units?.[m.unitNumber - 1] : null;
          
          const material: Partial<CourseMaterial> = {
            courseId,
            name: m.name || '',
            type: m.type || 'pdf',
            url: m.url || '',
            isPublished: false,
            uploadedAt: new Date().toISOString(),
            order: 0
          };
          
          // Only add optional fields if they have values
          if (targetUnit?.id) material.unitId = targetUnit.id;
          if (m.description) material.description = m.description;
          
          materialsToCreate.push(material as Omit<CourseMaterial, 'id' | 'createdAt' | 'updatedAt'>);
        }
        
        // Process in batches
        for (let i = 0; i < materialsToCreate.length; i += batchSize) {
          const batch = materialsToCreate.slice(i, Math.min(i + batchSize, materialsToCreate.length));
          await batchCreateMaterials(batch);
          setUploadProgress({ 
            current: Math.min(i + batchSize, materialsToCreate.length), 
            total: materialsToCreate.length 
          });
        }
        
        toast({ 
          title: '✅ Upload Complete!', 
          description: `Successfully added ${materialsToCreate.length} material(s).` 
        });
        setBulkText('');
        setParsedMaterials([]);
        setIsBulkImportOpen(false);
        setUploadProgress({ current: 0, total: 0 });
        await loadMaterials();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
        setUploadProgress({ current: 0, total: 0 });
      }
    });
  };

  const togglePublish = (material: CourseMaterial) => {
    startTransition(async () => {
      try {
        await updateMaterial(material.id, {
          isPublished: !material.isPublished
        });
        toast({ 
          title: material.isPublished ? "Unpublished" : "Published!", 
          description: `Material is now ${material.isPublished ? 'hidden from' : 'visible to'} students.` 
        });
        await loadMaterials();
        onUpdate();
      } catch (error: any) {
        toast({ variant: 'destructive', title: 'Error', description: error.message });
      }
    });
  };

  const getTypeIcon = (type: MaterialType) => {
    switch (type) {
      case 'pdf': return <FileText className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      case 'link': return <ExternalLink className="h-4 w-4" />;
      case 'image': return <ImageIcon className="h-4 w-4" />;
      default: return <File className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: MaterialType) => {
    switch (type) {
      case 'pdf': return 'bg-red-500 text-white';
      case 'video': return 'bg-purple-500 text-white';
      case 'link': return 'bg-blue-500 text-white';
      case 'image': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getUnitTitle = (unitId?: string) => {
    if (!unitId) return 'Global';
    const unit = content?.units?.find(u => u.id === unitId);
    return unit?.title || 'Unknown Unit';
  };

  if (isLoadingMaterials) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading materials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Course Materials</CardTitle>
            <CardDescription>
              Manage PDFs, videos, links, and other learning resources
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
                    Bulk Import Materials
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsFormatGuideOpen(true)}
                    >
                      <HelpCircle className="w-4 h-4" />
                    </Button>
                  </DialogTitle>
                  <DialogDescription>
                    Paste formatted text to quickly create multiple materials
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="bulk-text" className="flex items-center gap-2">
                      Paste Your Content (Auto-parsing enabled)
                      {parsedMaterials.length > 0 && (
                        <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                          ✓ {parsedMaterials.length} Material{parsedMaterials.length !== 1 ? 's' : ''} Ready
                        </span>
                      )}
                      {bulkText.trim() && !parsedMaterials.length && (
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
                      placeholder="Paste materials in :::M::: format (click ? for guide)..."
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
                          className="h-full bg-gradient-to-r from-orange-500 to-amber-600 transition-all duration-300"
                          style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {parsedMaterials.length > 0 && (
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      <h4 className="font-semibold text-sm">Preview ({parsedMaterials.length} materials)</h4>
                      {parsedMaterials.map((m, idx) => {
                        const unit = m.unitNumber && m.unitNumber > 0 ? content?.units?.[m.unitNumber - 1] : null;
                        return (
                          <Card key={idx} className="p-3 bg-muted/50">
                            <div className="flex items-center gap-2 mb-2">
                              {unit ? (
                                <Badge variant="secondary" className="text-xs">
                                  Unit {m.unitNumber}: {unit.title}
                                </Badge>
                              ) : (
                                <Badge variant="secondary" className="text-xs">Global</Badge>
                              )}
                              <Badge className={getTypeColor(m.type || 'pdf') + ' text-xs'}>
                                {m.type || 'pdf'}
                              </Badge>
                            </div>
                            <p className="font-medium text-sm">{m.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{m.url}</p>
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
                          const parsed = parseMaterialsWithUnits(bulkText);
                          setParsedMaterials(parsed);
                          toast({ title: 'Success', description: `Parsed ${parsed.length} material(s)!` });
                        } catch (error: any) {
                          toast({ title: 'Parse Error', description: error.message, variant: 'destructive' });
                        }
                      }}
                      disabled={!bulkText.trim()}
                      title="Manual parse (auto-parse happens automatically)"
                    >
                      Parse Materials
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => {
                        setIsBulkImportOpen(false);
                        setBulkText('');
                        setParsedMaterials([]);
                      }}>
                        Cancel
                      </Button>
                      <Button 
                        onClick={handleSaveBulkMaterials}
                        disabled={parsedMaterials.length === 0 || isPending}
                      >
                        {isPending && uploadProgress.total > 0 ? (
                          <>Uploading {uploadProgress.current}/{uploadProgress.total}...</>
                        ) : (
                          <>Save {parsedMaterials.length} Material{parsedMaterials.length !== 1 ? 's' : ''}</>
                        )}
                      </Button>
                    </div>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog>

            <Button size="lg" onClick={() => openDialog()}>
              <Plus className="h-4 w-4 mr-2" />
              Add Material
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Search & Filters Card */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Label className="text-sm text-gray-600">Search Materials</Label>
            <Input
              placeholder="Search by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label className="text-sm text-gray-600">Unit / Scope</Label>
            <Select value={filterUnit} onValueChange={setFilterUnit}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="All materials" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Materials</SelectItem>
                <SelectItem value="global">Global Materials</SelectItem>
                {(content?.units ?? []).map(unit => (
                  <SelectItem key={unit.id} value={unit.id}>
                    {unit.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm text-gray-600">Type</Label>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="video">Video</SelectItem>
                <SelectItem value="link">Link</SelectItem>
                <SelectItem value="image">Image</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          <div className="flex items-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setFilterUnit('all');
                setFilterType('all');
              }}
              className="w-full"
            >
              Clear Filters
            </Button>
          </div>
          <div className="md:col-span-3 flex items-end justify-end">
            <p className="text-sm text-gray-600">
              {filteredMaterials.length} of {(materials || []).length} material{(materials || []).length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </Card>

      {/* Batch Actions */}
      {(materials || []).length > 0 && (
        <Card className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedMaterials.size === filteredMaterials.length && filteredMaterials.length > 0}
                  onChange={toggleSelectAll}
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium">
                  Select All ({selectedMaterials.size}/{filteredMaterials.length})
                </span>
              </label>
            </div>

            {selectedMaterials.size > 0 && (
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

      {/* Materials List */}
      {filteredMaterials.length === 0 ? (
        <Card>
          <CardContent className="py-20 text-center text-muted-foreground">
            <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <FileText className="h-12 w-12" />
            </div>
            <p className="text-lg font-semibold">No Materials Yet</p>
            <p>Click "Add Material" or "Bulk Import" to create learning resources</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          <AnimatePresence>
            {filteredMaterials.map((material, index) => (
              <motion.div
                key={material.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.02 }}
              >
                <Card className={material.isPublished ? 'border-green-500/30 bg-green-500/5' : 'border-orange-500/30 bg-orange-500/5'}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={selectedMaterials.has(material.id)}
                          onChange={() => toggleSelectMaterial(material.id)}
                          className="w-4 h-4 cursor-pointer"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getTypeColor(material.type)}>
                              {getTypeIcon(material.type)}
                              <span className="ml-1">{material.type}</span>
                            </Badge>
                            <Badge variant={material.isPublished ? 'default' : 'secondary'}>
                              {material.isPublished ? (
                                <><Eye className="h-3 w-3 mr-1" /> Published</>
                              ) : (
                                <><EyeOff className="h-3 w-3 mr-1" /> Draft</>
                              )}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{getUnitTitle(material.unitId)}</span>
                          </div>
                          <CardTitle className="text-base">{material.name}</CardTitle>
                          
                          <a 
                            href={material.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline mt-2 inline-flex items-center gap-1"
                          >
                            {material.url}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                          
                          {material.description && (
                            <p className="text-sm text-muted-foreground mt-2">{material.description}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setPreviewMaterial(material)}
                          title="Preview"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => togglePublish(material)}
                          disabled={isPending}
                        >
                          {material.isPublished ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDialog(material)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteMaterial(material.id)}
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

      {/* Material Preview Dialog */}
      <Dialog open={!!previewMaterial} onOpenChange={(open) => !open && setPreviewMaterial(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {previewMaterial && getTypeIcon(previewMaterial.type)}
              {previewMaterial?.name}
            </DialogTitle>
            {previewMaterial?.unitId && (
              <DialogDescription>
                {getUnitTitle(previewMaterial.unitId)}
              </DialogDescription>
            )}
          </DialogHeader>
          
          {previewMaterial && (
            <div className="space-y-4">
              {/* Preview Content */}
              <div className="bg-muted/30 rounded-lg p-4 min-h-[400px]">
                {previewMaterial.type === 'pdf' && (
                  <iframe
                    src={previewMaterial.url}
                    className="w-full h-[600px] rounded border"
                    title={previewMaterial.name}
                  />
                )}
                {previewMaterial.type === 'video' && (
                  <div className="aspect-video">
                    <iframe
                      src={previewMaterial.url}
                      className="w-full h-full rounded border"
                      title={previewMaterial.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                {previewMaterial.type === 'image' && (
                  <img
                    src={previewMaterial.url}
                    alt={previewMaterial.name}
                    className="w-full h-auto rounded border"
                  />
                )}
                {previewMaterial.type === 'link' && (
                  <div className="text-center py-12">
                    <ExternalLink className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-4">External Link</p>
                    <a
                      href={previewMaterial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Open in new tab →
                    </a>
                  </div>
                )}
                {previewMaterial.type === 'other' && (
                  <div className="text-center py-12">
                    <File className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium mb-4">File Resource</p>
                    <a
                      href={previewMaterial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Download/Open →
                    </a>
                  </div>
                )}
              </div>
              
              {/* Description */}
              {previewMaterial.description && (
                <div className="bg-muted/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {previewMaterial.description}
                  </p>
                </div>
              )}
              
              {/* Metadata */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Badge className={getTypeColor(previewMaterial.type)}>
                  {getTypeIcon(previewMaterial.type)}
                  <span className="ml-1">{previewMaterial.type}</span>
                </Badge>
                <span>•</span>
                <span>{previewMaterial.isPublished ? '✅ Published' : '📝 Draft'}</span>
                <span>•</span>
                <a
                  href={previewMaterial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Open Original <ExternalLink className="h-3 w-3" />
                </a>
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingMaterial ? 'Edit Material' : 'Create Material'}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="unit-select">Unit / Scope</Label>
              <Select value={formData.unitId} onValueChange={(v) => setFormData({ ...formData, unitId: v })}>
                <SelectTrigger id="unit-select">
                  <SelectValue placeholder="Select unit or global" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Global (All Units)</SelectItem>
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
                <Label htmlFor="type-select">Material Type</Label>
                <Select value={formData.type} onValueChange={(v) => setFormData({ ...formData, type: v as MaterialType })}>
                  <SelectTrigger id="type-select">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pdf">PDF Document</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="link">External Link</SelectItem>
                    <SelectItem value="image">Image</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="material-name">Material Name *</Label>
              <Input
                id="material-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Chapter 1 Study Guide"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="material-url">URL *</Label>
              <Input
                id="material-url"
                type="url"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                placeholder="https://..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description of this material..."
                rows={3}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <Label htmlFor="is-published">Publish Material</Label>
                <p className="text-sm text-muted-foreground">Make this material visible to students</p>
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
            <Button onClick={handleSaveMaterial} disabled={isPending}>
              {editingMaterial ? 'Update Material' : 'Create Material'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Format Guide Dialog */}
      <Dialog open={isFormatGuideOpen} onOpenChange={setIsFormatGuideOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Materials Import Format Guide</DialogTitle>
          </DialogHeader>
          <pre className="text-xs bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
            {MATERIAL_FORMAT_GUIDE}
          </pre>
        </DialogContent>
      </Dialog>
    </div>
  );
}
