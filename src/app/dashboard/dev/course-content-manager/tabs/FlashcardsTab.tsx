'use client';

import { useState, useTransition, useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Edit, FileUp, HelpCircle, CreditCard, ChevronDown, CheckSquare, Square, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import type { CourseContent, Flashcard } from '@/lib/course-content-schema';
import type { CourseDeck } from '@/lib/course-deck-schema';
import { getCourseDecks, createCourseDeck, deleteCourseDeck, addCardToDeck, updateCardInDeck, deleteCardFromDeck } from '../course-deck-actions';
import { parseFlashcards, parseFlashcardDecks, validateFlashcards, FLASHCARD_FORMAT_GUIDE, type FlashcardDeck } from '@/lib/bulk-import-parser';
import { Checkbox } from '@/components/ui/checkbox';
import { MathRenderer } from '@/components/MathRenderer';

interface FlashcardsTabProps {
  content: CourseContent;
  courseId: string;
  onUpdate: () => void | Promise<void>;
}

export function FlashcardsTab({ content, courseId, onUpdate }: FlashcardsTabProps) {
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);
  const [isFormatGuideOpen, setIsFormatGuideOpen] = useState(false);
  const [bulkText, setBulkText] = useState('');
  const [parsedCards, setParsedCards] = useState<Partial<Flashcard>[]>([]);
  const [parsedDecks, setParsedDecks] = useState<FlashcardDeck[]>([]);
  const [importMode, setImportMode] = useState<'simple' | 'deck'>('simple');
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [deleteProgress, setDeleteProgress] = useState({ current: 0, total: 0 });
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  
  // Course decks state
  const [courseDecks, setCourseDecks] = useState<CourseDeck[]>([]);
  const [isLoadingDecks, setIsLoadingDecks] = useState(true);
  
  // Search & Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [filterUnit, setFilterUnit] = useState<string>('all');
  
  // Multi-select states
  const [selectedUnitIds, setSelectedUnitIds] = useState<Set<string>>(new Set());
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  
  // Preview states
  const [previewCard, setPreviewCard] = useState<Flashcard | null>(null);
  const [previewDeck, setPreviewDeck] = useState<CourseDeck | null>(null);
  const [previewCardIndex, setPreviewCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Edit card state
  const [isEditCardOpen, setIsEditCardOpen] = useState(false);
  const [editingCard, setEditingCard] = useState<{ deckId: string; card: any } | null>(null);
  const [editCardForm, setEditCardForm] = useState({ term: '', definition: '', image: '' });

  // Load course decks on mount
  useEffect(() => {
    async function loadDecks() {
      try {
        const decks = await getCourseDecks(courseId);
        setCourseDecks(decks);
      } catch (error) {
        console.error('Failed to load course decks:', error);
      } finally {
        setIsLoadingDecks(false);
      }
    }
    loadDecks();
  }, [courseId]);

  const handleBulkImport = useCallback((silent = true) => {
    if (!bulkText.trim()) return;
    
    try {
      // Check if input contains :::DECK::: separator (deck mode)
      if (bulkText.includes(':::DECK:::')) {
        // Parse as decks
        const decks = parseFlashcardDecks(bulkText);
        
        if (decks.length === 0) {
          if (!silent) {
            toast({ 
              title: 'Parse Error', 
              description: 'No valid decks found. Check your syntax.', 
              variant: 'destructive' 
            });
          }
          return;
        }

        // Validate that all unit numbers exist
        const missingUnits: number[] = [];
        decks.forEach(deck => {
          const unitExists = content.units.some((u, idx) => idx + 1 === deck.unitNumber);
          if (!unitExists) {
            missingUnits.push(deck.unitNumber);
          }
        });

        if (missingUnits.length > 0) {
          if (!silent) {
            toast({ 
              title: 'Validation Error', 
              description: `Unit(s) ${missingUnits.join(', ')} do not exist. Please create them first.`, 
              variant: 'destructive' 
            });
          }
          setParsedDecks([]);
          setParsedCards([]);
          return;
        }

        setParsedDecks(decks);
        setImportMode('deck');
        
        if (!silent) {
          const totalCards = decks.reduce((sum, deck) => sum + deck.flashcards.length, 0);
          toast({ 
            title: 'Success', 
            description: `Parsed ${decks.length} deck(s) with ${totalCards} flashcard(s)! Review and save.` 
          });
        }
      } else {
        // Must use :::DECK::: format
        if (!silent && bulkText.trim()) {
          toast({ 
            title: 'Format Error', 
            description: 'Please use :::DECK::: format. Click ? for help.', 
            variant: 'destructive' 
          });
        }
        setParsedDecks([]);
        setParsedCards([]);
        return;
      }
    } catch (error: any) {
      if (!silent) {
        toast({ title: 'Parse Error', description: error.message, variant: 'destructive' });
      }
      setParsedCards([]);
      setParsedDecks([]);
    }
  }, [bulkText, content.units, toast]);

  // Auto-parse with debounce when text changes
  const parseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Clear existing timeout
    if (parseTimeoutRef.current) {
      clearTimeout(parseTimeoutRef.current);
    }

    // If text is empty, reset state
    if (!bulkText.trim()) {
      setParsedCards([]);
      setParsedDecks([]);
      setImportMode('deck');
      return;
    }

    // Auto-parse after 500ms of no typing
    parseTimeoutRef.current = setTimeout(() => {
      handleBulkImport();
    }, 500);

    return () => {
      if (parseTimeoutRef.current) {
        clearTimeout(parseTimeoutRef.current);
      }
    };
  }, [bulkText, handleBulkImport]);

  const handleSaveBulkCards = () => {
    startTransition(async () => {
      try {
        if (importMode === 'deck') {
          setUploadProgress({ current: 0, total: parsedDecks.length });
          
          const batchSize = 10;
          let totalDecks = 0;
          let skippedDuplicates = 0;
          
          // Process decks in batches
          for (let i = 0; i < parsedDecks.length; i += batchSize) {
            const batch = parsedDecks.slice(i, Math.min(i + batchSize, parsedDecks.length));
            
            await Promise.all(batch.map(async (parsedDeck) => {
              // Find the unit by number (1-indexed)
              const unit = content.units[parsedDeck.unitNumber - 1];
              if (!unit) {
                toast({ 
                  title: 'Error', 
                  description: `Unit ${parsedDeck.unitNumber} not found`, 
                  variant: 'destructive' 
                });
                return;
              }

              // Check for duplicates in this deck
              const uniqueCards = parsedDeck.flashcards.filter((card, index, self) => {
                return index === self.findIndex(c => 
                  c.term?.toLowerCase().trim() === card.term?.toLowerCase().trim()
                );
              });
              
              skippedDuplicates += parsedDeck.flashcards.length - uniqueCards.length;

              // Create deck document in courseDecks collection
              await createCourseDeck({
                title: parsedDeck.deckTitle || 'Untitled Deck',
                description: parsedDeck.deckDescription || '',
                courseId: courseId,
                unitNumber: parsedDeck.unitNumber,
                unitId: unit.id,
                cards: uniqueCards.map(card => ({
                  id: crypto.randomUUID(),
                  term: card.term || '',
                  definition: card.definition || '',
                  ...(card.image && { image: card.image }),
                  createdAt: new Date().toISOString(),
                  updatedAt: new Date().toISOString()
                })),
                isPublic: true,
                order: courseDecks.filter(d => d.unitId === unit.id).length, // Place at end
              });

              totalDecks++;
            }));
            
            setUploadProgress({ current: Math.min(i + batchSize, parsedDecks.length), total: parsedDecks.length });
          }

          // Reload decks
          const updatedDecks = await getCourseDecks(courseId);
          setCourseDecks(updatedDecks);

          const totalCards = parsedDecks.reduce((sum, d) => sum + d.flashcards.length, 0);
          const message = skippedDuplicates > 0 
            ? `✅ Created ${totalDecks} deck(s) with ${totalCards - skippedDuplicates} card(s)! Skipped ${skippedDuplicates} duplicate(s).`
            : `✅ Created ${totalDecks} deck(s) with ${totalCards} card(s)!`;

          toast({ 
            title: 'Upload Complete!', 
            description: message
          });
        }
        
        setIsBulkImportOpen(false);
        setBulkText('');
        setParsedCards([]);
        setParsedDecks([]);
        setImportMode('deck');
        setUploadProgress({ current: 0, total: 0 });
        
        // Trigger parent refresh to reload data
        await onUpdate();
      } catch (error: any) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        setUploadProgress({ current: 0, total: 0 });
      }
    });
  };

  // Bulk action handlers
  const handleToggleUnit = (unitId: string) => {
    const newSelected = new Set(selectedUnitIds);
    if (newSelected.has(unitId)) {
      newSelected.delete(unitId);
    } else {
      newSelected.add(unitId);
    }
    setSelectedUnitIds(newSelected);
  };

  const handleSelectAll = () => {
    const visibleUnits = content.units.filter(unit => {
      const unitDecks = courseDecks.filter(d => d.unitId === unit.id);
      return unitDecks.length > 0;
    });
    setSelectedUnitIds(new Set(visibleUnits.map(u => u.id)));
  };

  const handleDeselectAll = () => {
    setSelectedUnitIds(new Set());
  };

  const handleBulkDeleteDecks = async () => {
    const selectedDecks = courseDecks.filter(d => d.unitId && selectedUnitIds.has(d.unitId));
    if (!confirm(`Delete all ${selectedDecks.length} decks from ${selectedUnitIds.size} selected unit(s)? This cannot be undone.`)) {
      return;
    }

    startTransition(async () => {
      try {
        setDeleteProgress({ current: 0, total: selectedDecks.length });
        
        const batchSize = 10;
        
        // Delete in batches of 10
        for (let i = 0; i < selectedDecks.length; i += batchSize) {
          const batch = selectedDecks.slice(i, Math.min(i + batchSize, selectedDecks.length));
          
          await Promise.all(batch.map(deck => deleteCourseDeck(deck.id)));
          
          setDeleteProgress({ current: Math.min(i + batchSize, selectedDecks.length), total: selectedDecks.length });
        }
        
        const updated = await getCourseDecks(courseId);
        setCourseDecks(updated);
        toast({ 
          title: '✅ Deletion Complete!', 
          description: `Successfully deleted ${selectedDecks.length} deck(s) from ${selectedUnitIds.size} unit(s)` 
        });
        setSelectedUnitIds(new Set());
        setIsSelectionMode(false);
        setDeleteProgress({ current: 0, total: 0 });
      } catch (error: any) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
        setDeleteProgress({ current: 0, total: 0 });
      }
    });
  };

  const handleEditCard = (deckId: string, card: any) => {
    setEditingCard({ deckId, card });
    setEditCardForm({
      term: card.term || '',
      definition: card.definition || '',
      image: card.image || ''
    });
    setIsEditCardOpen(true);
  };

  const handleSaveCardEdit = async () => {
    if (!editingCard) return;

    startTransition(async () => {
      try {
        await updateCardInDeck(editingCard.deckId, editingCard.card.id, {
          term: editCardForm.term,
          definition: editCardForm.definition,
          image: editCardForm.image || undefined,
          updatedAt: new Date().toISOString()
        });
        
        const updated = await getCourseDecks(courseId);
        setCourseDecks(updated);
        toast({ title: 'Card Updated', description: 'Flashcard has been updated successfully' });
        setIsEditCardOpen(false);
        setEditingCard(null);
        setEditCardForm({ term: '', definition: '', image: '' });
      } catch (error: any) {
        toast({ title: 'Error', description: error.message, variant: 'destructive' });
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 flex-wrap">
        <Dialog open={isBulkImportOpen} onOpenChange={setIsBulkImportOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <FileUp className="w-4 h-4 mr-2" />
              Bulk Import
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                Bulk Import Flashcards
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFormatGuideOpen(true)}
                >
                  <HelpCircle className="w-4 h-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label className="flex items-center gap-2">
                  Paste Formatted Flashcards (Auto-parsing enabled)
                  {parsedDecks.length > 0 && (
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                      ✓ {parsedDecks.length} Deck(s) Ready - Units specified in syntax
                    </span>
                  )}
                  {bulkText.trim() && !parsedDecks.length && (
                    <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium animate-pulse">
                      Parsing...
                    </span>
                  )}
                </Label>
                <Textarea
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  rows={14}
                  className="font-mono text-sm"
                  placeholder="Paste flashcards in :::DECK::: format (click ? for guide)..."
                />
              </div>

              <div className="flex flex-col gap-2">
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
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-300"
                        style={{ width: `${(uploadProgress.current / uploadProgress.total) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 justify-end">
                  {parsedDecks.length > 0 && (
                    <Button 
                      onClick={handleSaveBulkCards}
                      disabled={isPending}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isPending && uploadProgress.total > 0 ? (
                        <>
                          <span className="mr-2 inline-block animate-spin">⏳</span>
                          Uploading {uploadProgress.current}/{uploadProgress.total}...
                        </>
                      ) : (
                        <>Save {parsedDecks.length} Deck(s)</>
                      )}
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleBulkImport(false)}
                    title="Manual parse (auto-parse happens automatically)"
                  >
                    🔄 Parse Text
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setBulkText('');
                      setParsedCards([]);
                      setParsedDecks([]);
                      setImportMode('deck');
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>

              {/* Preview for Parsed Decks */}
              {parsedDecks.length > 0 && (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  <h3 className="font-semibold text-green-600">📚 Parsed {parsedDecks.length} Deck(s):</h3>
                  {parsedDecks.map((deck, deckIdx) => {
                    const unit = content.units[deck.unitNumber - 1];
                    return (
                      <Card key={deckIdx} className="p-4 border-green-200 bg-green-50/50">
                        <div className="mb-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-medium bg-green-600 text-white px-2 py-0.5 rounded">
                              Unit {deck.unitNumber}: {unit?.title || 'Unknown'}
                            </span>
                          </div>
                          <h4 className="font-bold text-lg">{deck.deckTitle}</h4>
                          {deck.deckDescription && (
                            <p className="text-sm text-muted-foreground">{deck.deckDescription}</p>
                          )}
                          <p className="text-xs text-green-600 mt-1">{deck.flashcards.length} flashcards</p>
                        </div>
                        <div className="space-y-2 pl-4 border-l-2 border-green-300">
                          {deck.flashcards.slice(0, 3).map((card, cardIdx) => (
                            <div key={cardIdx} className="grid grid-cols-2 gap-2 text-xs">
                              <div>
                                <p className="font-medium text-gray-700">Term:</p>
                                <p>{card.term}</p>
                              </div>
                              <div>
                                <p className="font-medium text-gray-700">Definition:</p>
                                <p className="line-clamp-2">{card.definition}</p>
                              </div>
                            </div>
                          ))}
                          {deck.flashcards.length > 3 && (
                            <p className="text-xs text-gray-500 italic">
                              ...and {deck.flashcards.length - 3} more cards
                            </p>
                          )}
                        </div>
                      </Card>
                    );
                  })}
                </div>
              )}

              <div className="flex justify-end gap-2 pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsBulkImportOpen(false);
                    setBulkText('');
                    setParsedCards([]);
                    setParsedDecks([]);
                    setImportMode('deck');
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog open={isFormatGuideOpen} onOpenChange={setIsFormatGuideOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Flashcards Import Format Guide</DialogTitle>
            </DialogHeader>
            <pre className="text-xs bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
              {FLASHCARD_FORMAT_GUIDE}
            </pre>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter Controls */}
      <Card className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <Label className="text-sm text-gray-600">Search Decks & Cards</Label>
            <Input
              placeholder="Search by deck title, term, or definition..."
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
                {content.units.map(unit => (
                  <SelectItem key={unit.id} value={unit.id}>
                    {unit.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('');
                setFilterUnit('all');
              }}
            >
              Clear Filters
            </Button>
            
            {!isSelectionMode ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSelectionMode(true)}
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <CheckSquare className="w-4 h-4 mr-2" />
                Select Units
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSelectAll}
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Select All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDeselectAll}
                >
                  Deselect All
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
                  onClick={handleBulkDeleteDecks}
                  disabled={selectedUnitIds.size === 0 || isPending}
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  {isPending && deleteProgress.total > 0 ? (
                    <>
                      <span className="mr-2 inline-block animate-spin">🗑️</span>
                      Deleting {deleteProgress.current}/{deleteProgress.total}...
                    </>
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Decks ({selectedUnitIds.size} units)
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setIsSelectionMode(false);
                    setSelectedUnitIds(new Set());
                  }}
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
          <p className="text-sm text-gray-600">
            {courseDecks.length} deck{courseDecks.length !== 1 ? 's' : ''} • {' '}
            {courseDecks.reduce((sum, d) => sum + d.cards.length, 0)} total cards
          </p>
        </div>
      </Card>

      {/* Course Decks (Hierarchical: Unit → Deck → Cards) */}
      <div className="space-y-4">
        {isLoadingDecks ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500">Loading decks...</p>
          </Card>
        ) : content.units.length === 0 ? (
          <Card className="p-8 text-center">
            <CreditCard className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500">No units yet. Create units first!</p>
          </Card>
        ) : (
          <Accordion type="multiple" className="space-y-2">
            {content.units
              .filter(unit => {
                if (filterUnit !== 'all' && unit.id !== filterUnit) return false;
                // Filter units that have decks or match search
                const unitDecks = courseDecks.filter(d => d.unitId === unit.id);
                if (searchQuery) {
                  const query = searchQuery.toLowerCase();
                  return unitDecks.some(deck => 
                    deck.cards.some(card =>
                      card.term.toLowerCase().includes(query) || 
                      card.definition.toLowerCase().includes(query)
                    ) ||
                    deck.title.toLowerCase().includes(query)
                  );
                }
                return unitDecks.length > 0;
              })
              .map((unit, unitIdx) => {
                // Get all decks for this unit
                const unitDecks = courseDecks
                  .filter(d => d.unitId === unit.id)
                  .sort((a, b) => (a.order || 0) - (b.order || 0));

                // Filter decks by search query
                const filteredDecks = unitDecks.filter(deck => {
                  if (!searchQuery) return true;
                  const query = searchQuery.toLowerCase();
                  return deck.cards.some(card =>
                    card.term.toLowerCase().includes(query) || 
                    card.definition.toLowerCase().includes(query)
                  ) || deck.title.toLowerCase().includes(query);
                });

                if (filteredDecks.length === 0 && searchQuery) return null;

                const totalCards = filteredDecks.reduce((sum, deck) => sum + deck.cards.length, 0);
                const deckCount = filteredDecks.length;

                return (
                  <AccordionItem key={unit.id} value={`unit-${unitIdx}`} className="border border-indigo-800/30 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br from-gray-900 to-indigo-950/50 backdrop-blur-sm">
                    <AccordionTrigger className="px-4 hover:no-underline bg-gradient-to-r from-indigo-900/70 via-purple-900/70 to-indigo-900/70 hover:from-indigo-900 hover:via-purple-900 hover:to-indigo-900 transition-all duration-300">
                      <div className="flex items-center justify-between w-full pr-4">
                        <div className="flex items-center gap-3 flex-1 text-left">
                          {isSelectionMode && (
                            <Checkbox
                              checked={selectedUnitIds.has(unit.id)}
                              onCheckedChange={() => {
                                handleToggleUnit(unit.id);
                              }}
                              onClick={(e) => e.stopPropagation()}
                              className="border-white data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                            />
                          )}
                          <div>
                            <h3 className="text-lg font-bold text-white">{unit.title}</h3>
                            <p className="text-sm text-gray-400">{unit.description}</p>
                          </div>
                        </div>
                        <div className="flex gap-3 text-sm">
                          <div className="text-center bg-indigo-950/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-indigo-800/30">
                            <div className="font-bold text-white text-lg">{deckCount}</div>
                            <div className="text-xs text-gray-400">deck{deckCount !== 1 ? 's' : ''}</div>
                          </div>
                          <div className="text-center bg-purple-950/50 backdrop-blur-sm px-3 py-2 rounded-lg border border-purple-800/30">
                            <div className="font-bold text-white text-lg">{totalCards}</div>
                            <div className="text-xs text-gray-400">card{totalCards !== 1 ? 's' : ''}</div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 bg-gray-950/50 backdrop-blur-sm">
                      {filteredDecks.length === 0 ? (
                        <div className="py-8 text-center">
                          <div className="inline-block p-4 bg-gray-900/80 rounded-xl mb-4 border border-gray-800">
                            <CreditCard className="w-12 h-12 text-gray-600" />
                          </div>
                          <p className="text-sm text-gray-500 font-medium mb-4">No decks in this unit yet</p>
                          <Button
                            onClick={() => {
                              // TODO: Open create deck dialog for this unit
                              toast({ title: 'Coming soon', description: 'Create deck for this unit' });
                            }}
                            className="bg-indigo-700 hover:bg-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            size="sm"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Create First Deck
                          </Button>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-end mb-4 pt-2">
                            <Button
                              onClick={() => {
                                // TODO: Open create deck dialog for this unit
                                toast({ title: 'Coming soon', description: 'Create new deck for this unit' });
                              }}
                              className="bg-indigo-700 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-800/30"
                              size="sm"
                            >
                              <Plus className="w-4 h-4 mr-2" />
                              New Deck in Unit
                            </Button>
                          </div>
                          <Accordion type="multiple" className="space-y-3">
                            {filteredDecks.map((deck, deckIdx) => (
                              <AccordionItem key={deck.id} value={`deck-${deck.id}`} className="border border-pink-900/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden bg-gradient-to-br from-gray-900 to-pink-950/40">
                                <AccordionTrigger className="px-4 hover:no-underline bg-gradient-to-r from-pink-900/60 via-rose-900/60 to-pink-900/60 hover:from-pink-900/80 hover:via-rose-900/80 hover:to-pink-900/80 transition-all duration-300">
                                  <div className="flex items-center justify-between w-full pr-4">
                                    <div className="text-left">
                                      <h4 className="font-bold text-white">{deck.title}</h4>
                                      {deck.description && (
                                        <p className="text-xs text-gray-400 mt-1">{deck.description}</p>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <div className="text-sm bg-pink-950/50 backdrop-blur-sm px-3 py-1 rounded-lg border border-pink-900/30">
                                        <span className="font-bold text-white">{deck.cards.length}</span>
                                        <span className="text-gray-400 ml-1">card{deck.cards.length !== 1 ? 's' : ''}</span>
                                      </div>
                                      {deck.cards.length > 0 && (
                                        <Button
                                          variant="ghost"
                                          size="sm"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setPreviewDeck(deck);
                                            setPreviewCardIndex(0);
                                            setIsFlipped(false);
                                          }}
                                          className="h-8 w-8 p-0 hover:bg-purple-600/40 bg-purple-950/30 backdrop-blur-sm border border-purple-900/30 rounded-lg transition-all duration-300"
                                          title="Preview Deck"
                                        >
                                          <Maximize2 className="w-4 h-4 text-purple-400 hover:text-purple-300" />
                                        </Button>
                                      )}
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={async (e) => {
                                          e.stopPropagation();
                                          if (confirm(`Delete deck "${deck.title}"? This will delete all ${deck.cards.length} cards.`)) {
                                            await deleteCourseDeck(deck.id);
                                            const updated = await getCourseDecks(courseId);
                                            setCourseDecks(updated);
                                            toast({ title: 'Deck deleted' });
                                          }
                                        }}
                                        className="h-8 w-8 p-0 hover:bg-red-600/40 bg-red-950/30 backdrop-blur-sm border border-red-900/30 rounded-lg transition-all duration-300"
                                      >
                                        <Trash2 className="w-4 h-4 text-red-400 hover:text-red-300" />
                                      </Button>
                                    </div>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4 bg-gray-950/50 backdrop-blur-sm">
                                  <div className="flex justify-end mb-3">
                                    <Button
                                      onClick={() => {
                                        // TODO: Open add card dialog for this deck
                                        toast({ title: 'Coming soon', description: 'Add card to deck' });
                                      }}
                                      className="bg-emerald-700 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-900/30"
                                      size="sm"
                                    >
                                      <Plus className="w-4 h-4 mr-2" />
                                      Add Card to Deck
                                    </Button>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {deck.cards.map((card) => (
                                      <Card key={card.id} className="p-4 relative group hover:shadow-xl transition-all duration-300 border border-cyan-900/40 bg-gradient-to-br from-gray-900 to-cyan-950/30 hover:border-cyan-800/50 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 via-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setPreviewCard(card);
                                              setIsFlipped(false);
                                            }}
                                            className="h-8 w-8 p-0 hover:bg-purple-700 hover:text-white bg-purple-950/60 text-purple-400 border border-purple-900/40 transition-all duration-300"
                                            title="Preview Card"
                                          >
                                            <Maximize2 className="w-4 h-4" />
                                          </Button>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleEditCard(deck.id, card);
                                            }}
                                            disabled={isPending}
                                            className="h-8 w-8 p-0 hover:bg-cyan-700 hover:text-white bg-cyan-950/60 text-cyan-400 border border-cyan-900/40 transition-all duration-300"
                                          >
                                            <Edit className="w-4 h-4" />
                                          </Button>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={async () => {
                                              if (confirm(`Delete card "${card.term}"?`)) {
                                                await deleteCardFromDeck(deck.id, card.id);
                                                const updated = await getCourseDecks(courseId);
                                                setCourseDecks(updated);
                                                toast({ title: 'Card deleted' });
                                              }
                                            }}
                                            disabled={isPending}
                                            className="h-8 w-8 p-0 hover:bg-red-700 hover:text-white bg-red-950/60 text-red-400 border border-red-900/40 transition-all duration-300"
                                          >
                                            <Trash2 className="w-4 h-4" />
                                          </Button>
                                        </div>

                                        {card.image && (
                                          <img 
                                            src={card.image} 
                                            alt={card.term}
                                            className="w-full h-32 object-cover rounded-lg mb-3 border border-cyan-900/40 shadow-md relative z-0"
                                          />
                                        )}

                                        <div className="space-y-3 relative z-0">
                                          <div className="bg-cyan-950/50 p-3 rounded-lg border border-cyan-900/40">
                                            <div className="text-xs font-bold text-cyan-500 uppercase tracking-wide mb-1 flex items-center gap-1">
                                              <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
                                              Term
                                            </div>
                                            <div className="font-bold text-base text-white">
                                              <MathRenderer content={card.term} />
                                            </div>
                                          </div>
                                          <div className="bg-blue-950/50 p-3 rounded-lg border border-blue-900/40">
                                            <div className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-1 flex items-center gap-1">
                                              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                              Definition
                                            </div>
                                            <div className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                                              <MathRenderer content={card.definition} />
                                            </div>
                                          </div>
                                        </div>
                                      </Card>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
          </Accordion>
        )}
      </div>

      {/* Edit Card Dialog */}
      <Dialog open={isEditCardOpen} onOpenChange={setIsEditCardOpen}>
        <DialogContent className="sm:max-w-[600px] bg-gray-900/95 backdrop-blur-xl border border-cyan-800/30">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">Edit Flashcard</DialogTitle>
            <DialogDescription className="text-gray-400">
              Update the term and definition for this flashcard
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="edit-term" className="text-sm font-medium text-gray-300">
                Term
              </label>
              <Input
                id="edit-term"
                value={editCardForm.term}
                onChange={(e) => setEditCardForm({ ...editCardForm, term: e.target.value })}
                placeholder="Enter term (supports LaTeX: use $ or $$)"
                className="bg-gray-950/50 border-cyan-900/30 text-white placeholder:text-gray-500 focus:border-cyan-700"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="edit-definition" className="text-sm font-medium text-gray-300">
                Definition
              </label>
              <Textarea
                id="edit-definition"
                value={editCardForm.definition}
                onChange={(e) => setEditCardForm({ ...editCardForm, definition: e.target.value })}
                placeholder="Enter definition (supports LaTeX: use $ or $$)"
                rows={4}
                className="bg-gray-950/50 border-cyan-900/30 text-white placeholder:text-gray-500 focus:border-cyan-700 resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="edit-image" className="text-sm font-medium text-gray-300">
                Image URL (optional)
              </label>
              <Input
                id="edit-image"
                value={editCardForm.image}
                onChange={(e) => setEditCardForm({ ...editCardForm, image: e.target.value })}
                placeholder="https://example.com/image.jpg"
                className="bg-gray-950/50 border-cyan-900/30 text-white placeholder:text-gray-500 focus:border-cyan-700"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsEditCardOpen(false)}
              className="bg-gray-800 hover:bg-gray-700 text-white border-gray-700"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveCardEdit}
              disabled={!editCardForm.term || !editCardForm.definition || isPending}
              className="bg-cyan-700 hover:bg-cyan-600 text-white disabled:opacity-50"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Single Card Preview Dialog with Flip */}
      <Dialog open={!!previewCard} onOpenChange={(open) => {
        if (!open) {
          setPreviewCard(null);
          setIsFlipped(false);
        }
      }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Flashcard Preview
            </DialogTitle>
            <DialogDescription>
              Click the card to flip it
            </DialogDescription>
          </DialogHeader>
          
          {previewCard && (
            <div className="py-4">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="relative w-full h-80 cursor-pointer perspective-1000"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front of card */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/50 rounded-xl p-8 flex flex-col items-center justify-center"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {previewCard.image && (
                      <img
                        src={previewCard.image}
                        alt={previewCard.term}
                        className="max-w-full max-h-32 object-contain mb-4 rounded-lg"
                      />
                    )}
                    <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">Term</div>
                    <div className="text-2xl font-bold text-white text-center">
                      <MathRenderer content={previewCard.term} />
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div
                    className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-2 border-blue-500/50 rounded-xl p-8 flex flex-col items-center justify-center"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">Definition</div>
                    <div className="text-xl text-white text-center">
                      <MathRenderer content={previewCard.definition} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                {isFlipped ? 'Showing definition' : 'Showing term'} • Click to flip
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Deck Preview Dialog with Carousel */}
      <Dialog open={!!previewDeck} onOpenChange={(open) => {
        if (!open) {
          setPreviewDeck(null);
          setPreviewCardIndex(0);
          setIsFlipped(false);
        }
      }}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              {previewDeck?.title}
            </DialogTitle>
            <DialogDescription>
              {previewDeck?.description || 'Navigate through cards with arrow buttons or click to flip'}
            </DialogDescription>
          </DialogHeader>
          
          {previewDeck && previewDeck.cards.length > 0 && (
            <div className="py-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setPreviewCardIndex((prev) => (prev > 0 ? prev - 1 : previewDeck.cards.length - 1));
                    setIsFlipped(false);
                  }}
                  className="shrink-0"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex-1">
                  <div
                    onClick={() => setIsFlipped(!isFlipped)}
                    className="relative w-full h-80 cursor-pointer perspective-1000"
                  >
                    <div
                      className={`relative w-full h-full transition-transform duration-500 transform-style-3d`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      {/* Front of card */}
                      <div
                        className="absolute w-full h-full backface-hidden bg-gradient-to-br from-pink-900/30 to-rose-900/30 border-2 border-pink-500/50 rounded-xl p-8 flex flex-col items-center justify-center"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {previewDeck.cards[previewCardIndex]?.image && (
                          <img
                            src={previewDeck.cards[previewCardIndex].image}
                            alt={previewDeck.cards[previewCardIndex].term}
                            className="max-w-full max-h-32 object-contain mb-4 rounded-lg"
                          />
                        )}
                        <div className="text-sm font-semibold text-pink-400 uppercase tracking-wide mb-2">Term</div>
                        <div className="text-2xl font-bold text-white text-center">
                          <MathRenderer content={previewDeck.cards[previewCardIndex]?.term || ''} />
                        </div>
                      </div>
                      
                      {/* Back of card */}
                      <div
                        className="absolute w-full h-full backface-hidden bg-gradient-to-br from-rose-900/30 to-purple-900/30 border-2 border-rose-500/50 rounded-xl p-8 flex flex-col items-center justify-center"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        <div className="text-sm font-semibold text-rose-400 uppercase tracking-wide mb-2">Definition</div>
                        <div className="text-xl text-white text-center">
                          <MathRenderer content={previewDeck.cards[previewCardIndex]?.definition || ''} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setPreviewCardIndex((prev) => (prev < previewDeck.cards.length - 1 ? prev + 1 : 0));
                    setIsFlipped(false);
                  }}
                  className="shrink-0"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  Card {previewCardIndex + 1} of {previewDeck.cards.length} • {isFlipped ? 'Showing definition' : 'Showing term'}
                </p>
              </div>
              
              {/* Card navigation dots */}
              <div className="flex items-center justify-center gap-1 mt-2">
                {previewDeck.cards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setPreviewCardIndex(idx);
                      setIsFlipped(false);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      idx === previewCardIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
