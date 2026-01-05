'use client';

import React, { useState, useEffect, useTransition, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import {
  getAdmissionsArticle,
  updateAdmissionsArticle,
  uploadArticleImageAction,
  type AdmissionsArticle,
} from './actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Save, Upload, PenSquare, Eye, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { marked } from 'marked';

export default function AdmissionsEditorPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSaving, startSaveTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, startUploadTransition] = useTransition();

  const [article, setArticle] = useState<Partial<AdmissionsArticle>>({
    title: '',
    author: '',
    htmlContent: '',
    keyTakeaways: '',
    aboutAuthor: '',
    citations: '',
    imageUrl: '',
    imageAlt: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticle() {
      setIsLoading(true);
      try {
        const data = await getAdmissionsArticle();
        if (data) {
          setArticle(data);
        }
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Failed to load article',
          description: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    }
    loadArticle();
  }, [toast]);
  
  const handleEditorChange = (field: keyof AdmissionsArticle, value: string) => {
    setArticle(p => ({...p, [field]: value}));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setArticle(prev => ({ ...prev, imageUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleArticleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    
    startUploadTransition(async () => {
      try {
        const formData = new FormData();
        formData.append('image', file);
        const result = await uploadArticleImageAction(formData);

        if (result.success && result.url) {
          setUploadedImageUrl(result.url);
          toast({
            title: 'Image Uploaded!',
            description: 'Copy the Markdown snippet below and paste it into your article.',
          });
        } else {
            throw new Error(result.error);
        }
      } catch (error: any) {
        toast({
            variant: 'destructive',
            title: 'Image Upload Failed',
            description: error.message,
        })
      }
    });
  };

  const handleSave = (deleteHeaderImage = false) => {
    if (!user) {
      toast({ variant: 'destructive', title: 'Authentication Error' });
      return;
    }
    startSaveTransition(async () => {
      try {
        const formData = new FormData();
        formData.append('title', article.title || '');
        formData.append('author', article.author || '');
        // The content can be HTML or markdown text
        const contentToSave = article.htmlContent || '';
        const isHtml = /<[a-z][\s\S]*>/i.test(contentToSave);
        formData.append('htmlContent', isHtml ? contentToSave : marked.parse(contentToSave));

        formData.append('keyTakeaways', article.keyTakeaways || '');
        formData.append('aboutAuthor', article.aboutAuthor || '');
        formData.append('citations', article.citations || '');
        formData.append('imageAlt', article.imageAlt || '');
        
        if (deleteHeaderImage) {
            formData.append('deleteHeaderImage', 'true');
        } else if (imageFile) {
            formData.append('image', imageFile);
        } else if (article.imageUrl) {
            formData.append('imageUrl', article.imageUrl);
        }
        
        await updateAdmissionsArticle(formData);
        if (deleteHeaderImage) {
            setArticle(prev => ({ ...prev, imageUrl: ''}));
            setImageFile(null);
        }
        toast({
          title: 'Article Saved!',
          description: 'The College Admissions page has been updated.',
        });
      } catch (error: any) {
        toast({
          variant: 'destructive',
          title: 'Save Failed',
          description: error.message,
        });
      }
    });
  };
  
  return (
    <div className="p-8 space-y-8">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <h1 className="font-headline text-4xl font-bold flex items-center gap-3">
                    <PenSquare /> Admissions Page Editor
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                    Manage the content for the public College Admissions page.
                </p>
            </div>
            <Button asChild variant="outline">
                <Link href="/college-admissions" target="_blank">
                    <Eye className="mr-2 h-4 w-4" /> View Live Page
                </Link>
            </Button>
        </header>

        {isLoading ? (
            <div className="flex justify-center items-center h-96">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
        ) : (
             <Card>
                <CardHeader>
                    <CardTitle>Article Content</CardTitle>
                    <CardDescription>Use the editors to format your article. All sections support Markdown.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-1.5">
                        <Label htmlFor="article-title">Article Title</Label>
                        <Input id="article-title" value={article.title || ''} onChange={e => handleEditorChange('title', e.target.value)} />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="article-author">Author</Label>
                        <Input id="article-author" value={article.author || ''} onChange={e => handleEditorChange('author', e.target.value)} placeholder="e.g., The Studizilla Team" />
                    </div>
                    <div className="space-y-1.5">
                        <Label>Header Image</Label>
                        {article.imageUrl && (
                            <div className="relative aspect-video w-full rounded-lg overflow-hidden border">
                                <Image src={article.imageUrl} alt="Header preview" fill style={{ objectFit: 'cover' }} sizes="50vw" />
                                <Button size="icon" variant="destructive" className="absolute top-2 right-2 h-7 w-7 z-10" onClick={() => handleSave(true)} disabled={isSaving}>
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                         <Input id="image-upload" type="file" onChange={handleFileChange} accept="image/*" />
                    </div>
                     <div className="space-y-1.5">
                        <Label htmlFor="image-alt">Header Image Alt Text</Label>
                        <Input id="image-alt" value={article.imageAlt || ''} onChange={e => handleEditorChange('imageAlt', e.target.value)} placeholder="Describe the image for accessibility" />
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="key-takeaways">Key Takeaways</Label>
                        <Textarea id="key-takeaways" value={article.keyTakeaways || ''} onChange={(e) => handleEditorChange('keyTakeaways', e.target.value)} placeholder="* Point one&#x0a;* Point two" rows={4} />
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="article-content">Article Content (Markdown)</Label>
                            <label htmlFor="article-image-upload" className={buttonVariants({ variant: 'outline', size: 'sm'})}>
                                {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <Upload className="mr-2 h-4 w-4" />}
                                Upload Image
                                <input id="article-image-upload" type="file" onChange={handleArticleImageUpload} accept="image/*" className="hidden"/>
                            </label>
                        </div>
                        {uploadedImageUrl && (
                            <div className="p-2 border rounded-md bg-secondary text-sm">
                                <p className="font-semibold mb-1">Image uploaded! Copy and paste this into your article:</p>
                                <Input readOnly value={`![Image Alt Text](${uploadedImageUrl})`} className="font-mono text-xs"/>
                            </div>
                        )}
                        <Textarea 
                            id="article-content"
                            value={article.htmlContent || ''} 
                            onChange={e => handleEditorChange('htmlContent', e.target.value)}
                            rows={15}
                            placeholder="Write your article content here using Markdown..."
                        />
                    </div>
                     <div className="space-y-1.5">
                        <Label htmlFor="about-author">About the Author</Label>
                        <Textarea id="about-author" value={article.aboutAuthor || ''} onChange={(e) => handleEditorChange('aboutAuthor', e.target.value)} placeholder="Information about the author..." rows={3} />
                    </div>
                     <div className="space-y-1.5">
                        <Label htmlFor="citations">Citations / References</Label>
                        <Textarea id="citations" value={article.citations || ''} onChange={(e) => handleEditorChange('citations', e.target.value)} placeholder="1. Author, A. (Year). *Title*. Publisher." rows={5} />
                    </div>

                    <div className="text-right pt-4">
                         <Button size="lg" onClick={() => handleSave(false)} disabled={isSaving}>
                            {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                            Save & Publish Article
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )}
    </div>
  );
}
