
'use client';

import React, { useState, useEffect, useTransition } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, FileText, Film, Trash2, Upload, Link as LinkIcon, FileIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { isDev } from '@/lib/authUtils';
import { listCourseMaterials, uploadCourseMaterial, deleteCourseMaterial } from './actions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from '@/components/ui/input';
import { buttonVariants } from '@/components/ui/button';

type Material = {
    name: string;
    url: string;
};

const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch(extension) {
        case 'pdf': return <FileText className="h-6 w-6 text-red-500" />;
        case 'mp4': case 'mov': case 'avi': return <Film className="h-6 w-6 text-blue-500" />;
        case 'mp3': case 'wav': case 'm4a': return <Film className="h-6 w-6 text-purple-500" />; // Re-using Film for audio
        default: return <FileIcon className="h-6 w-6 text-gray-500" />;
    }
}

export function MaterialsManager({ courseId }: { courseId: string }) {
    const { user } = useAuth();
    const { toast } = useToast();
    const [materials, setMaterials] = useState<Material[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUploading, startUploadTransition] = useTransition();
    const [fileToUpload, setFileToUpload] = useState<File | null>(null);

    const isDeveloper = isDev(user);

    const fetchMaterials = async () => {
        setIsLoading(true);
        const fetchedMaterials = await listCourseMaterials(courseId);
        setMaterials(fetchedMaterials);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchMaterials();
    }, [courseId]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileToUpload(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!fileToUpload || !user) return;
        
        startUploadTransition(async () => {
            const formData = new FormData();
            formData.append('file', fileToUpload);
            formData.append('courseId', courseId);
            formData.append('userId', user.uid);
            
            const result = await uploadCourseMaterial(formData);
            if (result.success) {
                toast({ title: "Upload Successful!", description: `${fileToUpload.name} has been added.`});
                setFileToUpload(null);
                fetchMaterials(); // Refresh the list
            } else {
                toast({ variant: 'destructive', title: "Upload Failed", description: result.error });
            }
        });
    };

    const handleDelete = async (fileName: string) => {
        if (!user) return;
        const result = await deleteCourseMaterial(courseId, fileName, user.uid);
        if (result.success) {
            toast({ title: "Material Deleted", description: `${fileName} has been removed.`});
            fetchMaterials();
        } else {
            toast({ variant: 'destructive', title: "Deletion Failed", description: result.error });
        }
    };

    return (
        <Card className="rounded-2xl shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="font-headline">Materials</CardTitle>
                    <CardDescription>Essential resources for your success.</CardDescription>
                </div>
                {isDeveloper && (
                    <div className="flex items-center gap-2">
                         <Input type="file" onChange={handleFileChange} className="text-xs w-52" />
                        <Button onClick={handleUpload} disabled={isUploading || !fileToUpload}>
                            {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                            Upload
                        </Button>
                    </div>
                )}
            </CardHeader>
            <CardContent className="space-y-3">
                {isLoading ? (
                    <div className="flex justify-center items-center h-24"><Loader2 className="h-8 w-8 animate-spin" /></div>
                ) : materials.length > 0 ? (
                    materials.map((material) => (
                        <div key={material.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                            {getFileIcon(material.name)}
                            <a href={material.url} target="_blank" rel="noopener noreferrer" className="font-medium flex-1 truncate hover:underline">
                                {material.name}
                            </a>
                            {isDeveloper && (
                                 <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action will permanently delete the file <span className="font-semibold">{material.name}</span>. This cannot be undone.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleDelete(material.name)} className={buttonVariants({ variant: 'destructive'})}>Delete</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted-foreground py-8">No materials have been uploaded for this course yet.</p>
                )}
            </CardContent>
        </Card>
    );
}
