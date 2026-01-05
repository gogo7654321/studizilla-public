'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Plus, Folder, Grip, Trash2, ArrowLeft, FolderOpen, Globe, Pin, MoreVertical, Copy, Edit, FileText, Share2, FolderInput, ExternalLink, Tag, Merge, Download, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Link from 'next/link';
import { MathRenderer } from '@/components/MathRenderer';
import { courses } from '@/lib/courses';
import { cn } from '@/lib/utils';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import './flashcards-grid.css';
import { db } from '@/lib/firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, Timestamp, onSnapshot } from 'firebase/firestore';
import { useAuth } from '@/contexts/AuthContext';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DeckWithCourse {
  id: string;
  title: string;
  description?: string;
  cards: Array<{ term: string; definition: string; id: string }>;
  courseId?: string;
  courseName?: string;
  isPersonal?: boolean;
  owner?: string;
  ownerId?: string;
  ownerName?: string;
  isPublic?: boolean;
  ratingsCount?: number;
  ratingsSum?: number;
}

interface Folder {
  id: string;
  name: string;
  deckIds: string[];
}

interface FlashcardsGridProps {
  decks: DeckWithCourse[];
  folders?: Folder[];
  onFoldersChange?: (folders: Folder[]) => void;
  isCreatingFolder?: boolean;
  onCreateFolderChange?: (value: boolean) => void;
  onDeckTrashed?: (deckId: string) => void;
  isBrowseMode?: boolean;
}

export function FlashcardsGrid({ 
  decks, 
  folders: initialFolders = [], 
  onFoldersChange,
  isCreatingFolder = false,
  onCreateFolderChange,
  onDeckTrashed,
  isBrowseMode = false
}: FlashcardsGridProps) {
  const { user } = useAuth();
  const [folders, setFolders] = useState<Folder[]>(initialFolders);
  const [newFolderName, setNewFolderName] = useState('');
  const [layout, setLayout] = useState<any[]>([]);
  const [openFolderId, setOpenFolderId] = useState<string | null>(null);
  const [pinnedDeckIds, setPinnedDeckIds] = useState<string[]>([]);
  const [deletedDeckIds, setDeletedDeckIds] = useState<string[]>([]); // Track locally deleted decks
  const [previewDeck, setPreviewDeck] = useState<DeckWithCourse | null>(null);
  const [previewCardIndex, setPreviewCardIndex] = useState(0);
  const [folderDropDialog, setFolderDropDialog] = useState<{show: boolean, deckId: string | null, folderId: string | null}>({show: false, deckId: null, folderId: null});
  const [deleteFolderDialog, setDeleteFolderDialog] = useState<{show: boolean, folderId: string | null}>({show: false, folderId: null});
  const [editTagsDialog, setEditTagsDialog] = useState<{show: boolean, deckId: string | null, currentTags: string[]}>({show: false, deckId: null, currentTags: []});
  const [tagsInput, setTagsInput] = useState('');
  const prevVisibleDeckIdsRef = useRef<string>('');

  // Load pinned decks from Firestore
  useEffect(() => {
    if (!user) return;
    
    const userDocRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setPinnedDeckIds(data.pinnedDeckIds || []);
      }
    });
    
    return () => unsubscribe();
  }, [user]);

  // Remove restored decks from deleted list when decks change
  useEffect(() => {
    if (deletedDeckIds.length > 0) {
      const currentDeckIds = decks.map(d => d.id);
      setDeletedDeckIds(prev => prev.filter(id => !currentDeckIds.includes(id)));
    }
  }, [decks]);

  // Sync folders from parent
  useState(() => {
    setFolders(initialFolders);
  });

  useEffect(() => {
    setFolders(initialFolders);
  }, [initialFolders]);

  // Comprehensive layout management - regenerate layout whenever decks, pins, or folders change
  useEffect(() => {
    const visibleDeckIds = openFolderId 
      ? decks.filter(deck => folders.find(f => f.id === openFolderId)?.deckIds.includes(deck.id)).map(d => d.id)
      : decks.filter(deck => !folders.find(folder => folder.deckIds.includes(deck.id))).map(d => d.id);
    
    // Sort deck IDs: pinned first (in order), then rest
    const sortedDeckIds = [...visibleDeckIds].sort((a, b) => {
      const aIsPinned = pinnedDeckIds.includes(a);
      const bIsPinned = pinnedDeckIds.includes(b);
      
      if (aIsPinned && bIsPinned) {
        return pinnedDeckIds.indexOf(a) - pinnedDeckIds.indexOf(b);
      }
      if (aIsPinned && !bIsPinned) return -1;
      if (!aIsPinned && bIsPinned) return 1;
      return 0;
    });
    
    // Create complete new layout based on sorted order
    const newLayout = sortedDeckIds.map((deckId, index) => ({
      i: deckId,
      x: (index % 3) * 4,
      y: Math.floor(index / 3) * 5,
      w: 4,
      h: 5,
      static: pinnedDeckIds.includes(deckId),
    }));
    
    setLayout(newLayout);
  }, [decks, pinnedDeckIds, folders, openFolderId]);

  const handleCreateFolder = async () => {
    if (!newFolderName.trim() || !user) return;
    
    try {
      const foldersRef = collection(db, 'users', user.uid, 'flashcardFolders');
      await addDoc(foldersRef, {
        name: newFolderName,
        deckIds: [],
        createdAt: Timestamp.now(),
      });
      
      setNewFolderName('');
      onCreateFolderChange?.(false);
    } catch (error) {
      console.error('Error creating folder:', error);
      alert('Failed to create folder. Please try again.');
    }
  };

  const handleDeleteFolder = async (folderId: string) => {
    if (!user) return;
    
    try {
      const folder = folders.find(f => f.id === folderId);
      if (!folder) return;

      // Move all decks in the folder to trash (soft delete)
      const trashPromises = folder.deckIds.map(async (deckId) => {
        const deck = decks.find(d => d.id === deckId);
        if (deck?.isPersonal) {
          const deckRef = doc(db, 'courseDecks', deckId);
          await updateDoc(deckRef, {
            trashedAt: Timestamp.now()
          });
        }
      });
      await Promise.all(trashPromises);

      // Delete the folder
      const folderRef = doc(db, 'users', user.uid, 'flashcardFolders', folderId);
      await deleteDoc(folderRef);
      
      setDeleteFolderDialog({show: false, folderId: null});
    } catch (error) {
      console.error('Error deleting folder:', error);
      alert('Failed to delete folder. Please try again.');
    }
  };

  const handleAddDeckToFolder = async (deckId: string, folderId: string) => {
    if (!user) return;
    
    try {
      // Get the target folder
      const targetFolder = folders.find(f => f.id === folderId);
      if (!targetFolder) return;

      // Remove deck from all folders first, then add to target
      const updatePromises = folders.map(folder => {
        const folderRef = doc(db, 'users', user.uid, 'flashcardFolders', folder.id);
        let newDeckIds = folder.deckIds.filter(id => id !== deckId);
        
        // Add to target folder
        if (folder.id === folderId && !newDeckIds.includes(deckId)) {
          newDeckIds = [...newDeckIds, deckId];
        }
        
        return updateDoc(folderRef, { deckIds: newDeckIds });
      });

      await Promise.all(updatePromises);
    } catch (error) {
      console.error('Error adding deck to folder:', error);
      alert('Failed to add deck to folder. Please try again.');
    }
  };

  const handleConfirmAddToFolder = async () => {
    if (folderDropDialog.deckId && folderDropDialog.folderId) {
      await handleAddDeckToFolder(folderDropDialog.deckId, folderDropDialog.folderId);
    }
    setFolderDropDialog({show: false, deckId: null, folderId: null});
  };

  const handleRemoveDeckFromFolder = async (deckId: string, folderId: string) => {
    if (!user) return;
    
    try {
      const folderRef = doc(db, 'users', user.uid, 'flashcardFolders', folderId);
      const folder = folders.find(f => f.id === folderId);
      if (!folder) return;

      const newDeckIds = folder.deckIds.filter(id => id !== deckId);
      await updateDoc(folderRef, { deckIds: newDeckIds });
      setOpenFolderId(null);
    } catch (error) {
      console.error('Error removing deck from folder:', error);
      alert('Failed to remove deck from folder. Please try again.');
    }
  };

  const handleTogglePin = async (deckId: string) => {
    if (!user) return;
    
    const newPinned = pinnedDeckIds.includes(deckId)
      ? pinnedDeckIds.filter(id => id !== deckId)
      : [deckId, ...pinnedDeckIds]; // Add to beginning for top position
    
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        pinnedDeckIds: newPinned
      });
      
      // Regenerate layout with pinned decks at top
      const visibleDeckIds = openFolderId 
        ? decks.filter(deck => folders.find(f => f.id === openFolderId)?.deckIds.includes(deck.id)).map(d => d.id)
        : decks.filter(deck => !folders.find(folder => folder.deckIds.includes(deck.id))).map(d => d.id);
      
      // Sort deck IDs: pinned first (in order), then rest
      const sortedDeckIds = [...visibleDeckIds].sort((a, b) => {
        const aIsPinned = newPinned.includes(a);
        const bIsPinned = newPinned.includes(b);
        
        if (aIsPinned && bIsPinned) {
          return newPinned.indexOf(a) - newPinned.indexOf(b);
        }
        if (aIsPinned && !bIsPinned) return -1;
        if (!aIsPinned && bIsPinned) return 1;
        return 0;
      });
      
      // Create new layout based on sorted order
      const newLayout = sortedDeckIds.map((deckId, index) => ({
        i: deckId,
        x: (index % 3) * 4,
        y: Math.floor(index / 3) * 5,
        w: 4,
        h: 5,
        static: newPinned.includes(deckId), // Lock pinned decks
      }));
      
      setLayout(newLayout);
    } catch (error) {
      console.error('Error toggling pin:', error);
    }
  };

  const handleOpenPreview = (deck: DeckWithCourse) => {
    setPreviewDeck(deck);
    setPreviewCardIndex(0);
  };

  const handleNextPreviewCard = () => {
    if (previewDeck && previewCardIndex < previewDeck.cards.length - 1) {
      setPreviewCardIndex(prev => prev + 1);
    }
  };

  const handlePrevPreviewCard = () => {
    if (previewCardIndex > 0) {
      setPreviewCardIndex(prev => prev - 1);
    }
  };

  const handleDuplicateDeck = async (deckId: string) => {
    if (!user) {
      alert('Please sign in to duplicate decks');
      return;
    }
    
    try {
      const originalDeck = decks.find(d => d.id === deckId);
      if (!originalDeck) return;

      // Create a copy of the deck for the current user
      const decksRef = collection(db, 'courseDecks');
      await addDoc(decksRef, {
        title: `${originalDeck.title} (Copy)`,
        description: originalDeck.description || '',
        cards: originalDeck.cards || [],
        courseId: originalDeck.courseId || 'general',
        ownerId: user.uid,
        isPublic: false, // Private by default
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });
      
      alert('Deck duplicated successfully! Check your "My Decks" tab.');
    } catch (error) {
      console.error('Error duplicating deck:', error);
      alert('Failed to duplicate deck. Please try again.');
    }
  };

  const handleDeleteDeck = async (deckId: string) => {
    if (!user) return;
    
    try {
      // Optimistically update UI
      setDeletedDeckIds(prev => [...prev, deckId]);
      
      // Move to trash by adding trashedAt timestamp
      const deckRef = doc(db, 'courseDecks', deckId);
      await updateDoc(deckRef, {
        trashedAt: Timestamp.now()
      });
      
      // Notify parent to move deck to trash state
      onDeckTrashed?.(deckId);
    } catch (error) {
      console.error('Error moving deck to trash:', error);
      // Revert optimistic update on error
      setDeletedDeckIds(prev => prev.filter(id => id !== deckId));
      alert('Failed to move deck to trash. Please try again.');
    }
  };

  const handleLayoutChange = (newLayout: any[]) => {
    setLayout(newLayout);
  };

  const handleExportPDF = async (deck: DeckWithCourse) => {
    try {
      // Dynamically import jsPDF
      const { default: jsPDF } = await import('jspdf');
      
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - 2 * margin;
      let yPosition = margin;
      
      // Load Studizilla logo
      const logoImg = new Image();
      logoImg.src = '/images/logo.png';
      await new Promise((resolve) => {
        logoImg.onload = resolve;
        logoImg.onerror = resolve; // Continue even if logo fails to load
      });
      
      // Helper function to add Studizilla branding header with logo
      const addHeader = (pageNum: number) => {
        // Add logo in top left
        try {
          if (logoImg.complete && logoImg.naturalHeight !== 0) {
            doc.addImage(logoImg, 'PNG', margin, 5, 15, 15);
          }
        } catch (e) {
          console.error('Error adding logo:', e);
        }
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0);
        doc.text('Studizilla', margin + 18, 13);
        
        // Add clickable URL in top right
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 102, 204); // Blue color for URL
        const urlText = 'studizilla.com';
        const urlX = pageWidth - margin - doc.getTextWidth(urlText);
        doc.textWithLink(urlText, urlX, 13, { url: 'https://studizilla.com' });
        
        if (pageNum > 1) {
          doc.setFontSize(8);
          doc.setFont('helvetica', 'normal');
          doc.setTextColor(150);
          doc.text(`Page ${pageNum}`, pageWidth / 2 - 10, 13);
        }
      };
      
      // Helper function to add footer with copyright
      const addFooter = () => {
        doc.setFontSize(7);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100);
        const footerText = '© 2026 Studizilla. All rights reserved. | Visit us at ';
        const linkText = 'studizilla.com';
        const footerWidth = doc.getTextWidth(footerText + linkText);
        const startX = (pageWidth - footerWidth) / 2;
        
        doc.text(footerText, startX, pageHeight - 10);
        doc.setTextColor(0, 102, 204);
        doc.textWithLink(linkText, startX + doc.getTextWidth(footerText), pageHeight - 10, { url: 'https://studizilla.com' });
      };
      
      let pageNum = 1;
      addHeader(pageNum);
      yPosition = margin + 10; // Adjust for header with logo
      
      // Title with wrapping
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(0);
      const titleLines = doc.splitTextToSize(deck.title, contentWidth);
      doc.text(titleLines, margin, yPosition);
      yPosition += (titleLines.length * 8) + 5;
      
      // Metadata
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100);
      doc.text(`${deck.cards?.length || 0} cards | ${deck.courseName || 'Personal'}`, margin, yPosition);
      yPosition += 8;
      
      // Clickable deck URL
      const deckUrl = `https://studizilla.com/resources/flashcards/study/${deck.id}/flashcards`;
      doc.setFontSize(9);
      doc.setTextColor(0, 102, 204);
      doc.textWithLink('View this deck online', margin, yPosition, { url: deckUrl });
      yPosition += 15;
      
      // Cards
      doc.setTextColor(0);
      deck.cards?.forEach((card, index) => {
        // Check if we need a new page
        if (yPosition > pageHeight - 50) {
          addFooter();
          doc.addPage();
          pageNum++;
          addHeader(pageNum);
          yPosition = margin + 15;
        }
        
        // Studizilla branding on each card
        doc.setFontSize(7);
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(150);
        doc.text('Studizilla Flashcard', pageWidth - margin - 30, yPosition);
        yPosition += 5;
        
        // Card number
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0);
        doc.text(`Card ${index + 1}`, margin, yPosition);
        yPosition += 8;
        
        // Term
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('Term:', margin, yPosition);
        yPosition += 6;
        
        doc.setFont('helvetica', 'normal');
        // Strip LaTeX for PDF (simple text version)
        const termText = card.term.replace(/\$\$?.*?\$\$?/g, '[Math]').replace(/<[^>]*>/g, '');
        const termLines = doc.splitTextToSize(termText, contentWidth);
        doc.text(termLines, margin + 5, yPosition);
        yPosition += (termLines.length * 5) + 5;
        
        // Definition
        doc.setFont('helvetica', 'bold');
        doc.text('Definition:', margin, yPosition);
        yPosition += 6;
        
        doc.setFont('helvetica', 'normal');
        const defText = card.definition.replace(/\$\$?.*?\$\$?/g, '[Math]').replace(/<[^>]*>/g, '');
        const defLines = doc.splitTextToSize(defText, contentWidth);
        doc.text(defLines, margin + 5, yPosition);
        yPosition += (defLines.length * 5) + 10;
        
        // Separator line
        if (index < deck.cards.length - 1) {
          doc.setDrawColor(200);
          doc.line(margin, yPosition, pageWidth - margin, yPosition);
          yPosition += 10;
        }
      });
      
      // Add footer to last page
      addFooter();
      
      // Save the PDF
      doc.save(`${deck.title.replace(/[^a-z0-9]/gi, '_')}.pdf`);
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert('Failed to export PDF. Please try again.');
    }
  };

  const handleSaveTags = async () => {
    if (!user || !editTagsDialog.deckId) return;
    
    try {
      const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
      const deckRef = doc(db, 'courseDecks', editTagsDialog.deckId);
      await updateDoc(deckRef, {
        tags: tags
      });
      
      setEditTagsDialog({show: false, deckId: null, currentTags: []});
      setTagsInput('');
    } catch (error) {
      console.error('Error saving tags:', error);
      alert('Failed to save tags. Please try again.');
    }
  };

  const handleTogglePublic = async (deckId: string, currentIsPublic: boolean) => {
    if (!user) return;
    
    try {
      const deckRef = doc(db, 'courseDecks', deckId);
      await updateDoc(deckRef, {
        isPublic: !currentIsPublic
      });
    } catch (error) {
      console.error('Error toggling deck visibility:', error);
      alert('Failed to update deck visibility. Please try again.');
    }
  };

  const getDeckFolder = (deckId: string) => {
    return folders.find(folder => folder.deckIds.includes(deckId));
  };

  // Filter out deleted decks
  const visibleDecksBeforeFilter = openFolderId 
    ? decks.filter(deck => folders.find(f => f.id === openFolderId)?.deckIds.includes(deck.id))
    : decks.filter(deck => !getDeckFolder(deck.id));
  
  const visibleDecks = visibleDecksBeforeFilter.filter(deck => !deletedDeckIds.includes(deck.id));

  // Sort decks: pinned first (in pinned order), then unpinned
  const sortedVisibleDecks = [...visibleDecks].sort((a, b) => {
    const aIsPinned = pinnedDeckIds.includes(a.id);
    const bIsPinned = pinnedDeckIds.includes(b.id);
    
    // Both pinned: sort by their position in pinnedDeckIds array
    if (aIsPinned && bIsPinned) {
      return pinnedDeckIds.indexOf(a.id) - pinnedDeckIds.indexOf(b.id);
    }
    
    // One pinned, one not: pinned comes first
    if (aIsPinned && !bIsPinned) return -1;
    if (!aIsPinned && bIsPinned) return 1;
    
    return 0;
  });

  const openFolder = folders.find(f => f.id === openFolderId);

  return (
    <div className="space-y-6">
      {/* Folders Section */}
      {folders.length > 0 && !openFolderId && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Folder className="h-5 w-5" />
            Folders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {folders.map(folder => {
              const folderDecks = decks.filter(deck => folder.deckIds.includes(deck.id));
              
              return (
                <Card 
                  key={folder.id} 
                  className="hover:shadow-md transition-all cursor-pointer bg-card hover:bg-accent/50 relative group"
                  onClick={() => setOpenFolderId(folder.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FolderOpen className="h-5 w-5 text-primary" />
                        <CardTitle className="text-lg">{folder.name}</CardTitle>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeleteFolderDialog({show: true, folderId: folder.id});
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <CardDescription className="text-base">
                      {folderDecks.length} {folderDecks.length === 1 ? 'deck' : 'decks'}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Folder Contents View */}
      {openFolderId && openFolder && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setOpenFolderId(null)}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Decks
            </Button>
            <div className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">{openFolder.name}</h2>
            </div>
          </div>
        </div>
      )}

      {/* Decks Grid with Drag and Drop */}
      <div>
        {!openFolderId && (
          <h2 className="text-xl font-semibold mb-4">All Decks</h2>
        )}
        <ResponsiveGridLayout
          layouts={{ lg: layout }}
          onLayoutChange={handleLayoutChange}
          breakpoints={{ lg: 1200, md: 1000, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          margin={[24, 24]}
          containerPadding={[0, 0]}
          draggableHandle=".drag-handle"
          isResizable={false}
          compactType="vertical"
          preventCollision={false}
          useCSSTransforms={true}
          verticalCompact={true}
        >
          {sortedVisibleDecks.map((deck) => {
            const folder = getDeckFolder(deck.id);
            const isPinned = pinnedDeckIds.includes(deck.id);
            const course = courses.find(c => c.id === deck.courseId);
            const courseName = deck.courseName || 
                             course?.name || 
                             (deck.courseId === 'general' ? 'General' : 'Unknown');
            const courseIcon = course?.icon;
            const averageRating = (deck.ratingsCount && deck.ratingsCount > 0) 
              ? (deck.ratingsSum || 0) / deck.ratingsCount 
              : 0;
            
            return (
              <div key={deck.id} className="grid-card-wrapper">
                <Card className="h-full flex flex-col overflow-hidden bg-card border hover:shadow-lg transition-all group">
                  {/* Drag Handle */}
                  <div className="drag-handle" />

                  <Link href={`/resources/flashcards/study/${deck.id}/flashcards`} className="flex-1 flex flex-col overflow-hidden">
                    <CardHeader className="pb-3">
                      {/* Course Badge */}
                      <div className="flex items-center gap-2 mb-2">
                        {courseIcon && (
                          <img src={courseIcon} alt={courseName} className="w-5 h-5 object-contain" />
                        )}
                        <Badge variant="secondary" className="w-fit">
                          {courseName}
                        </Badge>
                      </div>

                      {/* Title */}
                      <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
                        {deck.title}
                      </CardTitle>
                      
                      {/* Metadata */}
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
                        <span>by {deck.isPersonal ? 'You' : (deck.ownerId === 'course' || deck.ownerId === 'studizilla-official' || !deck.ownerId) ? 'Studizilla Official' : (deck.ownerName || 'Anonymous')}</span>
                        <span>•</span>
                        <Badge variant="outline" className="font-normal">
                          {deck.cards?.length || 0} cards
                        </Badge>
                        {deck.ratingsCount && deck.ratingsCount > 0 && (
                          <>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{averageRating.toFixed(1)}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 mt-auto">
                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="secondary" 
                          size="sm"
                          className="flex-1"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleOpenPreview(deck);
                          }}
                        >
                          Preview
                        </Button>
                        <Button 
                          variant={isPinned ? "default" : "ghost"}
                          size="icon"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleTogglePin(deck.id);
                          }}
                          title={isPinned ? "Unpin" : "Pin"}
                        >
                          <Pin className={cn("h-4 w-4", isPinned && "fill-current")} />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                              {isBrowseMode ? (
                                // Simplified menu for Browse Public tab - just Duplicate
                                <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleDuplicateDeck(deck.id); }}>
                                  <Copy className="mr-2 h-4 w-4" />
                                  Duplicate
                                </DropdownMenuItem>
                              ) : (
                                // Full menu for My Decks tab
                                <>
                              <DropdownMenuItem onClick={(e) => { e.stopPropagation(); handleDuplicateDeck(deck.id); }}>
                                <Copy className="mr-2 h-4 w-4" />
                                Duplicate
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href={`/resources/flashcards/create?deckId=${deck.id}`} onClick={(e) => e.stopPropagation()}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit this set
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={(e) => { 
                                  e.stopPropagation(); 
                                  handleExportPDF(deck);
                                }}
                              >
                                <FileText className="mr-2 h-4 w-4" />
                                Export as PDF
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={(e) => e.stopPropagation()}
                                onSelect={(e) => e.preventDefault()}
                                className="cursor-pointer"
                              >
                                <div className="flex items-center justify-between w-full gap-4">
                                  <div className="flex items-center">
                                    {deck.isPublic !== false ? <Globe className="mr-2 h-4 w-4" /> : <Share2 className="mr-2 h-4 w-4" />}
                                    <span>{deck.isPublic !== false ? 'Public' : 'Private'}</span>
                                  </div>
                                  <Switch
                                    checked={deck.isPublic !== false}
                                    onCheckedChange={(checked) => {
                                      handleTogglePublic(deck.id, deck.isPublic !== false);
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="ml-auto"
                                  />
                                </div>
                              </DropdownMenuItem>
                              {folders.length > 0 && (
                                <>
                                  <DropdownMenuSeparator />
                                  <div className="px-2 py-1.5 text-sm font-semibold">Move to Folder</div>
                                  {folders.map(folder => (
                                    <DropdownMenuItem 
                                      key={folder.id}
                                      onClick={(e) => { 
                                        e.stopPropagation(); 
                                        setFolderDropDialog({show: true, deckId: deck.id, folderId: folder.id});
                                      }}
                                    >
                                      <Folder className="mr-2 h-4 w-4" />
                                      {folder.name}
                                    </DropdownMenuItem>
                                  ))}
                                </>
                              )}
                              <DropdownMenuSeparator />
                              <DropdownMenuItem asChild>
                                <Link href={`/resources/flashcards/study/${deck.id}/flashcards`} target="_blank" onClick={(e) => e.stopPropagation()}>
                                  <ExternalLink className="mr-2 h-4 w-4" />
                                  Open in new tab
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                onClick={(e) => { 
                                  e.stopPropagation(); 
                                  const deckTags = (deck as any).tags || [];
                                  setEditTagsDialog({show: true, deckId: deck.id, currentTags: deckTags});
                                  setTagsInput(deckTags.join(', '));
                                }}
                              >
                                <Tag className="mr-2 h-4 w-4" />
                                Edit tags
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                                <Merge className="mr-2 h-4 w-4" />
                                Combine
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                                <Download className="mr-2 h-4 w-4" />
                                Export
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem 
                                onClick={(e) => { e.stopPropagation(); handleDeleteDeck(deck.id); }}
                                className="text-red-600 focus:text-red-600"
                              >
                                <Trash2 className="mr-2 h-4 w-4" />
                                Trash this set
                              </DropdownMenuItem>
                              </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>

                        {openFolderId && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-3 w-full"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleRemoveDeckFromFolder(deck.id, openFolderId);
                            }}
                          >
                            Remove from Folder
                          </Button>
                        )}
                      </CardContent>
                    </Link>
                  </Card>
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>

      {/* Folder Drop Confirmation Dialog */}
      <Dialog open={folderDropDialog.show} onOpenChange={(open) => !open && setFolderDropDialog({show: false, deckId: null, folderId: null})}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Move Deck to Folder?</DialogTitle>
            <DialogDescription>
              Do you want to move "{decks.find(d => d.id === folderDropDialog.deckId)?.title}" into the folder "{folders.find(f => f.id === folderDropDialog.folderId)?.name}"?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setFolderDropDialog({show: false, deckId: null, folderId: null})}
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmAddToFolder}
            >
              Move to Folder
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={!!previewDeck} onOpenChange={(open) => !open && setPreviewDeck(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{previewDeck?.title}</DialogTitle>
            <DialogDescription>
              {previewCardIndex + 1} / {previewDeck?.cards?.length || 0} cards
            </DialogDescription>
          </DialogHeader>
          
          {previewDeck && previewDeck.cards && previewDeck.cards.length > 0 && (
            <div className="space-y-6 py-4">
              <Card className="p-6 bg-muted/30">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Term</p>
                    <p className="text-xl font-bold">
                      <MathRenderer content={previewDeck.cards[previewCardIndex].term} />
                    </p>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Definition</p>
                    <p className="text-lg">
                      <MathRenderer content={previewDeck.cards[previewCardIndex].definition} />
                    </p>
                  </div>
                </div>
              </Card>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevPreviewCard}
                  disabled={previewCardIndex === 0}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Card {previewCardIndex + 1} of {previewDeck.cards.length}
                </span>
                <Button
                  variant="outline"
                  onClick={handleNextPreviewCard}
                  disabled={previewCardIndex === previewDeck.cards.length - 1}
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="default"
                  className="flex-1"
                  asChild
                >
                  <Link href={`/resources/flashcards/study/${previewDeck.id}/flashcards`}>
                    Start Studying
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Create Folder Dialog */}
      <Dialog open={isCreatingFolder} onOpenChange={onCreateFolderChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Folder</DialogTitle>
            <DialogDescription>
              Organize your flashcard decks into folders
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="folderName">Folder Name</Label>
              <Input
                id="folderName"
                placeholder="e.g., Biology, Math, History"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCreateFolder()}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => onCreateFolderChange?.(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateFolder} disabled={!newFolderName.trim()}>
                Create Folder
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Folder Confirmation Dialog */}
      <Dialog open={deleteFolderDialog.show} onOpenChange={(open) => !open && setDeleteFolderDialog({show: false, folderId: null})}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Delete Folder?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{folders.find(f => f.id === deleteFolderDialog.folderId)?.name}"?
              <br /><br />
              <span className="font-semibold text-orange-600 dark:text-orange-400">
                All {folders.find(f => f.id === deleteFolderDialog.folderId)?.deckIds.length || 0} deck(s) inside this folder will be moved to trash.
              </span> You can restore them within 15 days from the trash bin.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setDeleteFolderDialog({show: false, folderId: null})}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteFolderDialog.folderId && handleDeleteFolder(deleteFolderDialog.folderId)}
            >
              Delete Folder
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Edit Tags Dialog */}
      <Dialog open={editTagsDialog.show} onOpenChange={(open) => !open && setEditTagsDialog({show: false, deckId: null, currentTags: []})}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Tags</DialogTitle>
            <DialogDescription>
              Add tags to organize and categorize your flashcard deck. Separate tags with commas.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="tagsInput">Tags</Label>
              <Input
                id="tagsInput"
                placeholder="e.g., Biology, Chapter 3, Midterm"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveTags()}
              />
              <p className="text-xs text-muted-foreground">
                Current tags: {editTagsDialog.currentTags.length > 0 ? editTagsDialog.currentTags.join(', ') : 'None'}
              </p>
            </div>
            <div className="flex gap-2 justify-end">
              <Button 
                variant="outline" 
                onClick={() => {
                  setEditTagsDialog({show: false, deckId: null, currentTags: []});
                  setTagsInput('');
                }}
              >
                Cancel
              </Button>
              <Button onClick={handleSaveTags}>
                Save Tags
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
