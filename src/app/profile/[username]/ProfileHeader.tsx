'use client';

import React, { useRef, useTransition, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import type { PublicUserProfile } from '../actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Camera, Loader2, User as UserIcon } from 'lucide-react';
import { updateProfileImages } from '../actions';
import { useRouter } from 'next/navigation';
import { ImageCropperDialog } from '@/components/ImageCropperDialog';

interface ProfileHeaderProps {
  profile: PublicUserProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [isUploadingAvatar, startAvatarUpload] = useTransition();

  const [cropperOpen, setCropperOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);

  const isOwner = user?.uid === profile.uid;

  const validateFile = (file: File): string | null => {
    // Check file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      return 'Image must be less than 5MB';
    }

    // Check file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return 'Only JPG, PNG, WEBP, and GIF images are supported';
    }

    return null;
  };

  const handleFileSelect = (file: File) => {
    if (!user || !file) return;

    // Validate file
    const error = validateFile(file);
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Invalid File',
        description: error,
      });
      return;
    }

    // Create preview URL and open cropper
    const reader = new FileReader();
    reader.onload = () => {
      setImageToCrop(reader.result as string);
      setCropperOpen(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCropComplete = async (croppedBlob: Blob) => {
    if (!user) return;

    startAvatarUpload(async () => {
      const formData = new FormData();
      formData.append('image', croppedBlob, 'avatar.jpg');
      formData.append('imageType', 'avatar');
      formData.append('uid', user.uid);

      try {
        const result = await updateProfileImages(formData);
        if (result.success) {
          toast({
            title: 'Success!',
            description: `${cropType === 'avatar' ? 'Profile picture' : 'Banner'} updated.`,
          });
          setCropperOpen(false);
          setImageToCrop(null);
          
          // Force immediate refresh with cache bust
          window.location.reload();
        } else {
          throw new Error(result.error);
        }
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Upload Failed',
          description: error.message || 'Could not update your image.',
        });
      }
      try {
        const result = await updateProfileImages(formData);
        if (result.success) {
          toast({
            title: 'Success!',
            description: 'Profile picture updated.',
          });
          setCropperOpen(false);
          setImageToCrop(null);
          
          // Force immediate refresh with cache bust
          window.location.reload();
        } else {
          throw new Error(result.error);
        }
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Upload Failed',
          description: error.message || 'Failed to update profile picture.',
        });
      }
    });
  };

  return (
    <>
      {/* Image Cropper Dialog */}
      {imageToCrop && (
        <ImageCropperDialog
          open={cropperOpen}
          onOpenChange={setCropperOpen}
          imageSrc={imageToCrop}
          onCropComplete={handleCropComplete}
          aspect={1}
          imageType="avatar"
          isUploading={isUploadingAvatar}
        />
      )}

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div className="relative w-32 h-32 group/avatar">
          {isOwner && (
            <>
              <input
                type="file"
                ref={avatarInputRef}
                onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                className="hidden"
              />
              <button
                type="button"
                className="absolute inset-0 rounded-full"
                onClick={() => avatarInputRef.current?.click()}
                disabled={isUploadingAvatar}
              >
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity z-10">
                  {isUploadingAvatar ? (
                    <Loader2 className="h-6 w-6 text-white animate-spin" />
                  ) : (
                    <Camera className="h-6 w-6 text-white" />
                  )}
                </div>
              </button>
            </>
          )}
          <Avatar className="h-full w-full border-4 border-white dark:border-gray-900 shadow-2xl">
            <AvatarImage src={profile.photoURL || undefined} />
            <AvatarFallback className="text-4xl">
              <UserIcon />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
}
