'use client';

import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Area } from 'react-easy-crop';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Loader2, ZoomIn, ZoomOut } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

interface ImageCropperDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc: string;
  onCropComplete: (croppedImage: Blob) => void;
  aspect: number; // e.g., 1 for square (avatar), 3 for banner
  imageType: 'avatar' | 'banner';
  isUploading?: boolean;
}

/**
 * Creates a cropped image blob from the original image and crop area
 */
async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area,
  rotation = 0
): Promise<Blob> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('No 2d context');
  }

  // Set canvas size to match the crop area
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // Draw the cropped image
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  // Convert canvas to blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('Canvas is empty'));
      }
    }, 'image/jpeg', 0.95);
  });
}

/**
 * Helper to create an image element from a source
 */
function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.src = url;
  });
}

export function ImageCropperDialog({
  open,
  onOpenChange,
  imageSrc,
  onCropComplete,
  aspect,
  imageType,
  isUploading = false,
}: ImageCropperDialogProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onCropCompleteInternal = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = async () => {
    if (!croppedAreaPixels) return;

    setIsProcessing(true);
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onCropComplete(croppedImage);
    } catch (error) {
      console.error('Error cropping image:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
    // Reset state
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedAreaPixels(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Crop Your {imageType === 'avatar' ? 'Profile Picture' : 'Banner Image'}
          </DialogTitle>
          <DialogDescription>
            Adjust the crop area and zoom to select the perfect part of your image.
          </DialogDescription>
        </DialogHeader>

        <Alert className="mb-4">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Supported formats:</strong> JPG, PNG, WEBP, GIF
            <br />
            <strong>Maximum size:</strong> 5MB
          </AlertDescription>
        </Alert>

        <div className="relative h-96 w-full bg-black/5 rounded-lg overflow-hidden">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            cropShape={imageType === 'avatar' ? 'round' : 'rect'}
            showGrid={imageType === 'banner'}
            restrictPosition={false}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropCompleteInternal}
            style={{
              containerStyle: {
                borderRadius: '0.5rem',
              },
            }}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <ZoomOut className="h-4 w-4 text-muted-foreground" />
            <Slider
              value={[zoom]}
              onValueChange={(value) => setZoom(value[0])}
              min={1}
              max={3}
              step={0.1}
              className="flex-1"
            />
            <ZoomIn className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
            disabled={isProcessing || isUploading}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleSave}
            disabled={isProcessing || isUploading}
          >
            {isProcessing || isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isProcessing ? 'Processing...' : 'Uploading...'}
              </>
            ) : (
              'Save & Upload'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
