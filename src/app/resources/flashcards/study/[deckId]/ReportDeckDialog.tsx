
'use client';

import React, { useState, useTransition } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Flag } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { submitDeckReportAction } from './actions';
import type { Deck } from './page';

type ReportDeckDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  deck: Deck;
};

type ReportReason = 'inaccurate' | 'inappropriate' | 'spam' | 'copyright' | 'other';

export function ReportDeckDialog({ isOpen, onClose, deck }: ReportDeckDialogProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [reason, setReason] = useState<ReportReason | null>(null);
  const [details, setDetails] = useState('');
  const [isSubmitting, startTransition] = useTransition();

  const handleSubmit = async () => {
    if (!user) {
      toast({ variant: 'destructive', title: 'You must be logged in to report a deck.' });
      return;
    }
    if (!reason) {
      toast({ variant: 'destructive', title: 'Please select a reason for your report.' });
      return;
    }

    startTransition(async () => {
      try {
        await submitDeckReportAction({
          reporter: {
            uid: user.uid,
            name: user.displayName || 'Anonymous',
          },
          deck: {
            id: deck.id,
            title: deck.title,
            ownerId: deck.ownerId,
            ownerName: deck.ownerName || 'Anonymous',
          },
          reason,
          details,
        });

        toast({
          title: 'Report Submitted',
          description: 'Thank you for helping us improve Studizilla. Our team will review your report.',
        });
        onClose();
        setReason(null);
        setDetails('');
      } catch (error) {
        console.error(error);
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: 'Could not submit your report. Please try again.',
        });
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Flag className="h-5 w-5" />
            Report Deck
          </DialogTitle>
          <DialogDescription>
            Help us maintain quality content by reporting issues with this deck.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
            <div className="rounded-lg border bg-secondary/50 p-3 text-sm">
                <p className="font-semibold truncate">Deck: {deck.title}</p>
                <p className="text-muted-foreground truncate">by {deck.ownerName}</p>
            </div>
            <div className="space-y-2">
                <Label>Why are you reporting this deck?</Label>
                <RadioGroup value={reason || ''} onValueChange={(v) => setReason(v as ReportReason)}>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="inaccurate" id="r-inaccurate" /><Label htmlFor="r-inaccurate">Inaccurate Content</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="inappropriate" id="r-inappropriate" /><Label htmlFor="r-inappropriate">Inappropriate Content</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="spam" id="r-spam" /><Label htmlFor="r-spam">It's spam or low quality</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="copyright" id="r-copyright" /><Label htmlFor="r-copyright">Copyright Infringement</Label></div>
                    <div className="flex items-center space-x-2"><RadioGroupItem value="other" id="r-other" /><Label htmlFor="r-other">Other</Label></div>
                </RadioGroup>
            </div>
             <div className="space-y-2">
                <Label htmlFor="report-details">Additional Details (Optional)</Label>
                <Textarea id="report-details" value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Please provide any extra information..." />
            </div>
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={isSubmitting || !reason}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
