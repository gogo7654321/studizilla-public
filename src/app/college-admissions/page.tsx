
import { getPublicAdmissionsArticle } from '@/app/dashboard/dev/admissions-editor/actions';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';
import { BrainCircuit, User, BookText, Bookmark, Quote } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'College Admissions',
  description: 'Expert tips and guides for navigating the college admissions process.',
};

export default async function CollegeAdmissionsPage() {
    const article = await getPublicAdmissionsArticle();

    if (!article || !article.title) {
        return (
             <div className="container mx-auto px-4 md:px-6 py-20 text-center">
                <BrainCircuit className="mx-auto h-24 w-24 text-primary" />
                <h1 className="mt-4 text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
                    Coming Soon
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                    Our team is preparing expert guides and tips for the college admissions process. Check back soon!
                </p>
            </div>
        );
    }
  
    return (
        <div className="bg-secondary/30 min-h-screen">
            <div className="container mx-auto max-w-4xl px-4 md:px-6 py-12 md:py-20">
                <Card className="overflow-hidden rounded-2xl shadow-lg">
                     {article.imageUrl && (
                        <div className="relative w-full aspect-[21/9]">
                            <Image 
                                src={article.imageUrl} 
                                alt={article.imageAlt || article.title || 'College Admissions Header'}
                                fill
                                style={{ objectFit: 'cover' }}
                                priority
                                sizes="(max-width: 768px) 100vw, 896px"
                            />
                        </div>
                     )}
                     <CardHeader className="px-6 md:px-8 pt-8">
                        <CardTitle className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                            {article.title}
                        </CardTitle>
                        <div className="text-muted-foreground flex items-center gap-4 text-sm mt-4">
                           {article.author && (
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6"><UserIcon /></Avatar>
                                    <span>By {article.author}</span>
                                </div>
                           )}
                           {article.updatedAt && (
                               <span>
                                   Last updated: {format(new Date(article.updatedAt.toString()), 'MMMM d, yyyy')}
                               </span>
                           )}
                        </div>
                     </CardHeader>
                     <CardContent className="px-6 md:px-8 pt-6 pb-10">
                        {article.keyTakeaways && (
                            <Card className="mb-8 bg-primary/5 border-primary/20">
                                <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                                    <Bookmark className="h-5 w-5 text-primary" />
                                    <CardTitle className="text-lg">Key Takeaways</CardTitle>
                                </CardHeader>
                                <CardContent className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.keyTakeaways }} />
                            </Card>
                        )}
                        
                        <article className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.htmlContent || '' }} />
                        
                        {article.aboutAuthor && (
                            <>
                                <Separator className="my-8" />
                                <Card className="bg-secondary/50">
                                    <CardHeader>
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <UserIcon className="h-5 w-5" /> About the Author
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.aboutAuthor }} />
                                </Card>
                            </>
                        )}

                        {article.citations && (
                             <>
                                <Separator className="my-8" />
                                <Card className="bg-secondary/50">
                                    <CardHeader>
                                         <CardTitle className="text-lg flex items-center gap-2">
                                            <Quote className="h-5 w-5" /> References & Citations
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="prose prose-sm dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: article.citations }} />
                                </Card>
                            </>
                        )}

                        <div className="mt-12 text-center border-t pt-8">
                            <h3 className="font-semibold text-lg">Ready to prepare?</h3>
                            <p className="text-muted-foreground mt-1">Use our AI tools to craft your application essays.</p>
                            <Button asChild className="mt-4">
                                <Link href="/tools/essay-grader">
                                    Try the Essay Grader
                                </Link>
                            </Button>
                        </div>
                     </CardContent>
                </Card>
            </div>
        </div>
    );
}
