
'use server';

import { adminDb, adminStorage } from '@/lib/firebase-server';
import { FieldValue } from 'firebase-admin/firestore';
import { marked } from 'marked';

export type AdmissionsArticle = {
  title: string;
  author: string;
  htmlContent: string; // Stored as HTML from the rich text editor
  imageUrl: string;
  imageAlt: string;
  keyTakeaways: string; // New field
  aboutAuthor: string;  // New field
  citations: string;    // New field
  updatedAt: FieldValue;
};

const articleRef = adminDb.collection('siteContent').doc('collegeAdmissions');

export async function getAdmissionsArticle(): Promise<Partial<AdmissionsArticle> | null> {
  const doc = await articleRef.get();
  if (!doc.exists) {
    return null;
  }
  return doc.data() as Partial<AdmissionsArticle>;
}

export async function updateAdmissionsArticle(formData: FormData) {
  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const htmlContent = formData.get('htmlContent') as string;
  const imageAlt = formData.get('imageAlt') as string;
  const keyTakeaways = formData.get('keyTakeaways') as string;
  const aboutAuthor = formData.get('aboutAuthor') as string;
  const citations = formData.get('citations') as string;
  const imageFile = formData.get('image') as File | null;
  const existingImageUrl = formData.get('imageUrl') as string | null;
  const deleteHeaderImage = formData.get('deleteHeaderImage') === 'true';

  let imageUrl = existingImageUrl;
  
  if (deleteHeaderImage) {
      imageUrl = '';
  } else if (imageFile && imageFile.size > 0) {
    const bucket = adminStorage.bucket();
    const filePath = `site-content/admissions/${Date.now()}_${imageFile.name}`;
    const file = bucket.file(filePath);

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    await file.save(buffer, {
      metadata: { contentType: imageFile.type },
      public: true,
    });
    
    imageUrl = file.publicUrl();
  }

  const articleData: Partial<AdmissionsArticle> = {
    title,
    author,
    htmlContent,
    imageAlt,
    keyTakeaways: marked.parse(keyTakeaways), // Convert markdown to HTML
    aboutAuthor: marked.parse(aboutAuthor),   // Convert markdown to HTML
    citations: marked.parse(citations),       // Convert markdown to HTML
    imageUrl: imageUrl || '',
    updatedAt: FieldValue.serverTimestamp(),
  };

  await articleRef.set(articleData, { merge: true });
}

export async function getPublicAdmissionsArticle(): Promise<Partial<AdmissionsArticle> | null> {
    const article = await getAdmissionsArticle();
    if (article) {
        if (article.updatedAt && typeof article.updatedAt !== 'string') {
            article.updatedAt = new Date().toISOString() as any; 
        }
    }
    return article;
}

export async function uploadArticleImageAction(formData: FormData): Promise<{ success: boolean; url?: string; error?: string }> {
    const imageFile = formData.get('image') as File | null;

    if (!imageFile || imageFile.size === 0) {
        return { success: false, error: "No file provided." };
    }

    try {
        const bucket = adminStorage.bucket();
        const filePath = `site-content/admissions-body/${Date.now()}_${imageFile.name}`;
        const file = bucket.file(filePath);

        const buffer = Buffer.from(await imageFile.arrayBuffer());
        await file.save(buffer, {
            metadata: { contentType: imageFile.type },
            public: true,
        });

        const publicUrl = file.publicUrl();
        return { success: true, url: publicUrl };
    } catch (error: any) {
        console.error("Error uploading article image:", error);
        return { success: false, error: 'Server error during image upload.' };
    }
}
