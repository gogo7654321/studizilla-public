'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { courses } from '@/lib/courses';
import type { CourseStudyGuide } from '@/lib/course-study-guides-schema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Clock, 
  GraduationCap,
  BookOpen,
  Loader2,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { MathRenderer } from '@/components/MathRenderer';
import { TimelineRenderer, parseTimelineBlock } from '@/components/TimelineRenderer';
import { CodeBlockRenderer, parseCodeBlock } from '@/components/CodeBlockRenderer';

// Helper function to parse inline markdown formatting (bold, italic)
const parseInlineMarkdown = (text: string): React.ReactNode[] => {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  
  // Match ***text*** (bold+italic), **text** (bold), *text* (italic)
  const regex = /(\*\*\*([^*]+)\*\*\*|\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let match;
  
  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }
    
    // Add formatted text
    if (match[2]) {
      // ***text*** - bold and italic
      elements.push(<strong key={key++}><em>{match[2]}</em></strong>);
    } else if (match[3]) {
      // **text** - bold
      elements.push(<strong key={key++}>{match[3]}</strong>);
    } else if (match[4]) {
      // *text* - italic
      elements.push(<em key={key++}>{match[4]}</em>);
    }
    
    lastIndex = regex.lastIndex;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }
  
  return elements.length > 0 ? elements : [text];
};

// Wrapper component for rendering text with both markdown and math
const RichTextRenderer: React.FC<{ content: string }> = ({ content }) => {
  // First parse inline markdown, then render math in each segment
  const segments = parseInlineMarkdown(content);
  
  return (
    <>
      {segments.map((segment, idx) => {
        if (typeof segment === 'string') {
          return <MathRenderer key={idx} content={segment} />;
        }
        // For JSX elements (bold/italic), we need to render math inside them
        if (React.isValidElement(segment)) {
          const element = segment as React.ReactElement<{ children?: React.ReactNode }>;
          const text = element.props.children;
          if (typeof text === 'string') {
            return React.cloneElement(element, { key: idx, children: <MathRenderer content={text} /> });
          }
          // Nested bold+italic
          if (React.isValidElement(text)) {
            const innerElement = text as React.ReactElement<{ children?: React.ReactNode }>;
            const innerText = innerElement.props.children;
            if (typeof innerText === 'string') {
              return React.cloneElement(element, { 
                key: idx, 
                children: React.cloneElement(innerElement, { children: <MathRenderer content={innerText} /> })
              });
            }
          }
        }
        return segment;
      })}
    </>
  );
};

export default function StudyGuidePage() {
  const params = useParams();
  const router = useRouter();
  const guideId = params.id as string;
  
  const [guide, setGuide] = useState<CourseStudyGuide | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [courseName, setCourseName] = useState<string>('');
  const [courseSlug, setCourseSlug] = useState<string>('');

  useEffect(() => {
    async function fetchGuide() {
      try {
        setIsLoading(true);
        const docRef = doc(db, 'courseStudyGuides', guideId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data() as CourseStudyGuide;
          setGuide({ ...data, id: docSnap.id });
          
          const course = courses.find(c => c.id === data.courseId);
          if (course) {
            setCourseName(course.name);
            setCourseSlug(course.slug);
          }
        }
      } catch (error) {
        console.error('Error fetching study guide:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    if (guideId) {
      fetchGuide();
    }
  }, [guideId]);

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'beginner': return 'bg-green-500/10 text-green-600 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/10 text-red-600 border-red-500/30';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-500/30';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8">
          <Card>
            <CardContent className="py-20 text-center text-muted-foreground">
              <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-medium">Study guide not found</p>
              <Link href="/resources?tab=study-guides">
                <Button variant="outline" className="mt-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Resources
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Render the guide content using the same logic as dev portal preview
  const renderGuideContent = () => {
    // Preprocess special blocks (TIMELINE, CODE)
    const timelines = new Map<string, string>();
    const codeBlocks = new Map<string, string>();
    let processedContent = guide.content;
    
    // Extract TIMELINE blocks
    const timelineRegex = /:::TIMELINE:::([\s\S]*?):::\/TIMELINE:::/g;
    let timelineMatch;
    let timelineIndex = 0;
    while ((timelineMatch = timelineRegex.exec(guide.content)) !== null) {
      const placeholder = `__TIMELINE_PLACEHOLDER_${timelineIndex}__`;
      timelines.set(placeholder, timelineMatch[1]);
      processedContent = processedContent.replace(timelineMatch[0], placeholder);
      timelineIndex++;
    }
    
    // Remove any unclosed TIMELINE blocks (malformed)
    processedContent = processedContent.replace(/:::TIMELINE:::[^]*?$/g, () => {
      return '\n**⚠️ Malformed timeline block (missing closing tag :::/TIMELINE:::)**\n';
    });
    
    // Extract CODE blocks
    const codeRegex = /:::CODE:::([\s\S]*?):::\/CODE:::/g;
    let codeMatch;
    let codeIndex = 0;
    while ((codeMatch = codeRegex.exec(guide.content)) !== null) {
      const placeholder = `__CODE_PLACEHOLDER_${codeIndex}__`;
      codeBlocks.set(placeholder, codeMatch[1]);
      processedContent = processedContent.replace(codeMatch[0], placeholder);
      codeIndex++;
    }
    
    // Remove any unclosed CODE blocks (malformed)
    processedContent = processedContent.replace(/:::CODE:::[^]*?$/g, () => {
      return '\n**⚠️ Malformed code block (missing closing tag :::/CODE:::)**\n';
    });
    
    // Remove GUIDE tags (these are format markers, not content)
    processedContent = processedContent.replace(/:::GUIDE:::/g, '');
    processedContent = processedContent.replace(/:::\/GUIDE:::/g, '');
    
    // Split content by lines for processing
    const lines = processedContent.split('\n');
    const elements: JSX.Element[] = [];
    let currentParagraph: string[] = [];
    let inList = false;
    let inTable = false;
    let tableLines: string[] = [];
    let inCodeBlock = false;
    let codeBlockLines: string[] = [];
    
    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ').trim();
        if (text) {
          elements.push(
            <div key={elements.length} className="leading-relaxed text-base pl-2 text-foreground">
              <RichTextRenderer content={text} />
            </div>
          );
        }
        currentParagraph = [];
      }
    };
    
    const flushTable = () => {
      if (tableLines.length > 0) {
        const rows = tableLines
          .filter(line => line && line.trim() && !line.match(/^\|?\s*[-:]+\s*\|/))
          .map(line => 
            line.split('|')
              .map(cell => cell ? cell.trim() : '')
              .filter(cell => cell)
          )
          .filter(row => row.length > 0);

        if (rows.length > 0) {
          const headers = rows[0];
          const bodyRows = rows.slice(1);
          
          elements.push(
            <div key={elements.length} className="my-4 overflow-x-auto">
              <table className="min-w-full border-collapse border border-border rounded-lg overflow-hidden">
                <thead className="bg-muted">
                  <tr>
                    {headers.map((header, idx) => (
                      <th key={idx} className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                        <RichTextRenderer content={header || ''} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-muted/50">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="border border-border px-4 py-2 text-foreground">
                          <RichTextRenderer content={cell || ''} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        tableLines = [];
        inTable = false;
      }
    };
    
    const flushCodeBlock = () => {
      if (codeBlockLines.length > 0) {
        elements.push(
          <pre key={elements.length} className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            <code>{codeBlockLines.join('\n')}</code>
          </pre>
        );
        codeBlockLines = [];
        inCodeBlock = false;
      }
    };
    
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      
      // Check for TIMELINE placeholder
      if (trimmed.startsWith('__TIMELINE_PLACEHOLDER_')) {
        flushParagraph();
        flushTable();
        try {
          const timelineContent = timelines.get(trimmed);
          if (timelineContent) {
            const timelineData = parseTimelineBlock(timelineContent);
            if (timelineData) {
              elements.push(
                <TimelineRenderer key={`timeline-${elements.length}`} data={timelineData} />
              );
            } else {
              elements.push(
                <div key={elements.length} className="my-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded">
                  <p className="text-red-700 dark:text-red-400 font-semibold">⚠️ Timeline Error</p>
                  <p className="text-sm text-red-600 dark:text-red-300">Failed to parse timeline data. Check the format.</p>
                </div>
              );
            }
          }
        } catch (error) {
          elements.push(
            <div key={elements.length} className="my-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded">
              <p className="text-red-700 dark:text-red-400 font-semibold">⚠️ Timeline Error</p>
              <p className="text-sm text-red-600 dark:text-red-300">{String(error)}</p>
            </div>
          );
        }
        return;
      }
      
      // Check for CODE placeholder
      if (trimmed.startsWith('__CODE_PLACEHOLDER_')) {
        flushParagraph();
        flushTable();
        try {
          const codeContent = codeBlocks.get(trimmed);
          if (codeContent) {
            const codeData = parseCodeBlock(codeContent);
            if (codeData) {
              elements.push(
                <CodeBlockRenderer key={`code-${elements.length}`} data={codeData} />
              );
            } else {
              elements.push(
                <div key={elements.length} className="my-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded">
                  <p className="text-red-700 dark:text-red-400 font-semibold">⚠️ Code Block Error</p>
                  <p className="text-sm text-red-600 dark:text-red-300">Failed to parse code block data. Check the format.</p>
                </div>
              );
            }
          }
        } catch (error) {
          elements.push(
            <div key={elements.length} className="my-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded">
              <p className="text-red-700 dark:text-red-400 font-semibold">⚠️ Code Block Error</p>
              <p className="text-sm text-red-600 dark:text-red-300">{String(error)}</p>
            </div>
          );
        }
        return;
      }
      
      // Check for code block delimiters
      if (trimmed.startsWith('```')) {
        if (!inCodeBlock) {
          // Starting code block
          flushParagraph();
          flushTable();
          inCodeBlock = true;
          codeBlockLines = [];
        } else {
          // Ending code block
          if (codeBlockLines.length > 0) {
            elements.push(
              <pre key={elements.length} className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                <code>{codeBlockLines.join('\n')}</code>
              </pre>
            );
          }
          inCodeBlock = false;
          codeBlockLines = [];
        }
        return;
      }
      
      // If inside code block, collect lines
      if (inCodeBlock) {
        codeBlockLines.push(line);
        return;
      }
      
      // Check if line is a table row
      const isTableLine = trimmed.includes('|') && trimmed.split('|').length > 2;
      
      if (isTableLine) {
        flushParagraph();
        inList = false;
        inTable = true;
        tableLines.push(trimmed);
        return;
      } else if (inTable) {
        // End of table
        flushTable();
      }
      
      // Empty line - flush paragraph and table
      if (!trimmed) {
        flushParagraph();
        flushTable();
        inList = false;
        return;
      }
      
      // Horizontal rule: --- or ***
      if (trimmed.match(/^[-*]{3,}$/)) {
        flushParagraph();
        flushTable();
        elements.push(
          <hr key={elements.length} className="my-6 border-border" />
        );
        return;
      }
      
      // Image: ![alt](url) or just image URL
      const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/) || 
                       trimmed.match(/^(https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg))$/i);
      if (imgMatch) {
        flushParagraph();
        const url = imgMatch[2] || imgMatch[1];
        const alt = imgMatch[1] || 'Image';
        elements.push(
          <div key={elements.length} className="my-4">
            <img 
              src={url} 
              alt={alt} 
              className="max-w-full h-auto rounded-lg border shadow-md mx-auto"
            />
          </div>
        );
        return;
      }
      
      // H1: # Header or ALL CAPS (10+ chars)
      if (trimmed.match(/^#\s+(.+)$/) || (trimmed === trimmed.toUpperCase() && trimmed.length > 10 && !trimmed.includes('$'))) {
        flushParagraph();
        const text = trimmed.replace(/^#+\s+/, '');
        elements.push(
          <h2 key={elements.length} className="text-2xl font-bold mt-8 mb-4 text-foreground border-b-2 border-primary/30 pb-2">
            <RichTextRenderer content={text} />
          </h2>
        );
        return;
      }
      
      // H2: ## Header
      if (trimmed.match(/^##\s+(.+)$/)) {
        flushParagraph();
        const text = trimmed.replace(/^#+\s+/, '');
        elements.push(
          <h3 key={elements.length} className="text-xl font-semibold mt-6 mb-3 text-foreground">
            <RichTextRenderer content={text} />
          </h3>
        );
        return;
      }
      
      // H3: ### Header
      if (trimmed.match(/^###\s+(.+)$/)) {
        flushParagraph();
        const text = trimmed.replace(/^#+\s+/, '');
        elements.push(
          <h4 key={elements.length} className="text-lg font-semibold mt-4 mb-2 text-foreground">
            <RichTextRenderer content={text} />
          </h4>
        );
        return;
      }
      
      // H4: #### Header (and deeper like #####, ######)
      if (trimmed.match(/^#{4,}\s+(.+)$/)) {
        flushParagraph();
        const text = trimmed.replace(/^#+\s+/, '');
        elements.push(
          <h5 key={elements.length} className="text-base font-semibold mt-3 mb-2 text-foreground">
            <RichTextRenderer content={text} />
          </h5>
        );
        return;
      }
      
      // Bullet point: -, *, •, or - with space
      const bulletMatch = trimmed.match(/^[-*•]\s+(.+)$/);
      if (bulletMatch) {
        flushParagraph();
        inList = true;
        elements.push(
          <div key={elements.length} className="ml-6 flex gap-3 text-foreground">
            <span className="text-primary font-bold text-lg mt-1">•</span>
            <div className="flex-1 leading-relaxed text-base">
              <RichTextRenderer content={bulletMatch[1]} />
            </div>
          </div>
        );
        return;
      }
      
      // Numbered list: 1. or 1)
      const numberedMatch = trimmed.match(/^(\d+)[.)]\s+(.+)$/);
      if (numberedMatch) {
        flushParagraph();
        inList = true;
        elements.push(
          <div key={elements.length} className="ml-6 flex gap-3 text-foreground">
            <span className="text-primary font-bold text-lg">{numberedMatch[1]}.</span>
            <div className="flex-1 leading-relaxed text-base">
              <RichTextRenderer content={numberedMatch[2]} />
            </div>
          </div>
        );
        return;
      }
      
      // Formula/equation callout
      if (trimmed.match(/^(Formula|Calculation|Equation|Definition):/i)) {
        flushParagraph();
        elements.push(
          <div key={elements.length} className="bg-blue-950/40 dark:bg-blue-950/50 p-4 rounded-lg border-l-4 border-blue-500 my-3 text-foreground">
            <div className="font-medium">
              <RichTextRenderer content={trimmed} />
            </div>
          </div>
        );
        return;
      }
      
      // Regular text - accumulate into paragraph
      currentParagraph.push(trimmed);
    });
    
    // Flush any remaining paragraph, code block, or table
    flushParagraph();
    flushCodeBlock();
    flushTable();
    
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/resources?tab=study-guides" className="hover:text-foreground transition-colors">
            Resources
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href={`/classes/${courseSlug}`} className="hover:text-foreground transition-colors">
            {courseName}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground truncate max-w-[200px]">{guide.title}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="outline" className={getDifficultyColor(guide.difficulty)}>
              {guide.difficulty}
            </Badge>
            {guide.estimatedTime && (
              <Badge variant="outline" className="text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {guide.estimatedTime}
              </Badge>
            )}
            {guide.tags && guide.tags.length > 0 && (
              <>
                <span className="text-muted-foreground">•</span>
                {guide.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <GraduationCap className="h-4 w-4" />
            <Link href={`/classes/${courseSlug}`} className="hover:underline">
              {courseName}
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="bg-muted/30 rounded-lg p-6 md:p-8 lg:p-10 border space-y-6 mb-8">
          {/* Title as first element */}
          <div className="border-b-2 border-primary pb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              <MathRenderer content={guide.title} />
            </h1>
            {guide.description && (
              <div className="text-lg text-muted-foreground mt-2">
                <MathRenderer content={guide.description} />
              </div>
            )}
          </div>
          
          {/* Cover Image */}
          {guide.coverImage && (
            <img
              src={guide.coverImage}
              alt={guide.title}
              className="w-full h-48 md:h-64 object-cover rounded-lg border"
            />
          )}
          
          {/* Guide Content */}
          <div className="space-y-4">
            {renderGuideContent()}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/resources?tab=study-guides">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              All Study Guides
            </Button>
          </Link>
          <Link href={`/classes/${courseSlug}`}>
            <Button>
              View Course
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
