'use client';

import React from 'react';
import { MathRenderer } from './MathRenderer';
import { TimelineRenderer, parseTimelineBlock } from './TimelineRenderer';
import { CodeBlockRenderer, parseCodeBlock } from './CodeBlockRenderer';

interface ContentRendererProps {
  content: string;
  className?: string;
}

/**
 * Enhanced content renderer that supports:
 * - LaTeX math (via MathRenderer)
 * - Markdown tables
 * - Images (markdown format and URLs)
 * - Headers (# ## ###)
 * - Lists (- * 1.)
 * - Special callouts (Formula:, Definition:, etc.)
 * - Interactive timelines (:::TIMELINE:::)
 * - Runnable code blocks (:::CODE:::)
 */
export function ContentRenderer({ content, className = '' }: ContentRendererProps) {
  // Handle null, undefined, or non-string content
  if (!content || typeof content !== 'string') return null;

  const renderLine = (line: string, idx: number): JSX.Element | null => {
    // Safety check
    if (!line || typeof line !== 'string') return null;
    
    const trimmed = line.trim();
    if (!trimmed) return null;

    // Image: ![alt](url) or just URL - handles emojis in alt text
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/) || 
                     trimmed.match(/^(https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg))$/i);
    if (imgMatch) {
      try {
        const url = imgMatch[2] || imgMatch[1];
        const alt = imgMatch[1] || 'Image';
        return (
          <div key={idx} className="my-4">
            <img 
              src={url} 
              alt={alt} 
              className="max-w-full h-auto rounded-lg border shadow-md mx-auto"
              onError={(e) => {
                // Fallback for broken images
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
        );
      } catch (error) {
        // Skip broken image tags
        return null;
      }
    }

    // Table row detection (markdown tables)
    if (trimmed.includes('|')) {
      return (
        <div key={idx} className="table-row-marker" data-content={trimmed} style={{ display: 'none' }}>
          {trimmed}
        </div>
      );
    }

    // Headers
    const h1Match = trimmed.match(/^#\s+(.+)$/);
    if (h1Match) {
      return (
        <h2 key={idx} className="text-2xl font-bold mt-8 mb-4 text-foreground border-b-2 border-primary/30 pb-2">
          <MathRenderer content={h1Match[1]} />
        </h2>
      );
    }

    const h2Match = trimmed.match(/^##\s+(.+)$/);
    if (h2Match) {
      return (
        <h3 key={idx} className="text-xl font-semibold mt-6 mb-3 text-foreground">
          <MathRenderer content={h2Match[1]} />
        </h3>
      );
    }

    const h3Match = trimmed.match(/^###\s+(.+)$/);
    if (h3Match) {
      return (
        <h4 key={idx} className="text-lg font-semibold mt-4 mb-2 text-foreground">
          <MathRenderer content={h3Match[1]} />
        </h4>
      );
    }

    // Bullet points
    const bulletMatch = trimmed.match(/^[-*•]\s+(.+)$/);
    if (bulletMatch) {
      return (
        <div key={idx} className="ml-6 flex gap-3 text-foreground">
          <span className="text-primary font-bold text-lg mt-1">•</span>
          <div className="flex-1 leading-relaxed">
            <MathRenderer content={bulletMatch[1]} />
          </div>
        </div>
      );
    }

    // Numbered lists
    const numberedMatch = trimmed.match(/^(\d+)[.)]\s+(.+)$/);
    if (numberedMatch) {
      return (
        <div key={idx} className="ml-6 flex gap-3 text-foreground">
          <span className="text-primary font-bold">{numberedMatch[1]}.</span>
          <div className="flex-1 leading-relaxed">
            <MathRenderer content={numberedMatch[2]} />
          </div>
        </div>
      );
    }

    // Special callouts
    if (trimmed.match(/^(Formula|Calculation|Equation|Definition):/i)) {
      return (
        <div key={idx} className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 my-3 text-foreground">
          <div className="font-medium">
            <MathRenderer content={trimmed} />
          </div>
        </div>
      );
    }

    // Regular text
    return (
      <div key={idx} className="leading-relaxed text-base pl-2 text-foreground">
        <MathRenderer content={trimmed} />
      </div>
    );
  };

  const renderContent = () => {
    // Safety check for content
    if (!content || typeof content !== 'string') return [];
    
    try {
      // Preprocess to extract special blocks
      const { content: processedText, timelines, codeBlocks } = preprocessSpecialBlocks(content);
      
      console.log('[ContentRenderer] Preprocessed:', {
        timelineCount: timelines.size,
        codeBlockCount: codeBlocks.size,
        hasPlaceholders: processedText.includes('__TIMELINE_PLACEHOLDER_') || processedText.includes('__CODE_PLACEHOLDER_'),
        firstLines: processedText.split('\n').slice(0, 50).join('\n')
      });
      
      const lines = processedText.split('\n');
      const elements: JSX.Element[] = [];
      let tableLines: string[] = [];
      let inTable = false;
      let codeBlockLines: string[] = [];
      let inCodeBlock = false;

      lines.forEach((line, idx) => {
        // Safety check for each line
        if (!line || typeof line !== 'string') return;
        
        const trimmed = line.trim();
        
        // Check for TIMELINE placeholder
        if (trimmed.startsWith('__TIMELINE_PLACEHOLDER_')) {
          console.log('[ContentRenderer] Found TIMELINE placeholder:', trimmed);
          
          // Flush any pending table
          if (inTable && tableLines.length > 0) {
            try {
              elements.push(renderTable(tableLines, elements.length));
            } catch (error) {
              console.warn('Error rendering table:', error);
            }
            tableLines = [];
            inTable = false;
          }
          
          try {
            const timelineContent = timelines.get(trimmed);
            console.log('[ContentRenderer] Timeline content:', timelineContent ? 'found' : 'NOT FOUND');
            
            if (timelineContent) {
              const timelineData = parseTimelineBlock(timelineContent);
              console.log('[ContentRenderer] Parsed timeline data:', timelineData);
              
              if (timelineData) {
                elements.push(
                  <TimelineRenderer key={`timeline-${elements.length}`} data={timelineData} />
                );
              } else {
                console.error('[ContentRenderer] Failed to parse timeline');
              }
            }
          } catch (error) {
            console.error('[ContentRenderer] Timeline error:', error);
          }
          return;
        }
        
        // Check for CODE placeholder
        if (trimmed.startsWith('__CODE_PLACEHOLDER_')) {
          // Flush any pending table
          if (inTable && tableLines.length > 0) {
            try {
              elements.push(renderTable(tableLines, elements.length));
            } catch (error) {
              console.warn('Error rendering table:', error);
            }
            tableLines = [];
            inTable = false;
          }
          
          try {
            const codeContent = codeBlocks.get(trimmed);
            if (codeContent) {
              const codeData = parseCodeBlock(codeContent);
              if (codeData) {
                elements.push(
                  <CodeBlockRenderer key={`code-${elements.length}`} data={codeData} />
                );
              } else {
                console.error('[ContentRenderer] Failed to parse code block');
              }
            }
          } catch (error) {
            console.error('[ContentRenderer] Code block error:', error);
          }
          return;
        }
        
        // Check for code block delimiter (```)
        if (trimmed.startsWith('```')) {
          if (!inCodeBlock) {
            // Starting code block
            inCodeBlock = true;
            codeBlockLines = [];
          } else {
            // Ending code block - render it
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
        
        // Detect table rows
        if (trimmed.includes('|') && trimmed.split('|').length >= 3) {
          if (!inTable) {
            inTable = true;
          }
          tableLines.push(trimmed);
        } else {
          // Flush table if we were in one
          if (inTable && tableLines.length > 0) {
            try {
              elements.push(renderTable(tableLines, elements.length));
            } catch (error) {
              console.warn('Error rendering table:', error);
            }
            tableLines = [];
            inTable = false;
          }
          
          // Render normal line
          try {
            const element = renderLine(line, idx);
            if (element) {
              elements.push(element);
            }
          } catch (error) {
            console.warn('Error rendering line:', error);
          }
        }
      });

      // Flush any remaining code block
      if (inCodeBlock && codeBlockLines.length > 0) {
        elements.push(
          <pre key={elements.length} className="bg-slate-900 dark:bg-slate-950 text-slate-100 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            <code>{codeBlockLines.join('\n')}</code>
          </pre>
        );
      }

      // Flush any remaining table
      if (tableLines.length > 0) {
        try {
          elements.push(renderTable(tableLines, elements.length));
        } catch (error) {
          console.warn('Error rendering final table:', error);
        }
      }

      return elements;
    } catch (error) {
      console.error('Error rendering content:', error);
      return [];
    }
  };

  const renderTable = (lines: string[], key: number): JSX.Element => {
    try {
      // Safety checks
      if (!Array.isArray(lines) || lines.length === 0) {
        return <div key={key} />;
      }
      
      const rows = lines
        .filter(line => line && typeof line === 'string' && line.trim() && !line.match(/^\|?\s*[-:]+\s*\|/)) // Skip separator lines
        .map(line => 
          line.split('|')
            .map(cell => cell ? cell.trim() : '')
            .filter(cell => cell)
        )
        .filter(row => row.length > 0); // Remove empty rows

      if (rows.length === 0) return <div key={key} />;

      const headers = rows[0];
      const bodyRows = rows.slice(1);

      return (
        <div key={key} className="my-4 overflow-x-auto">
          <table className="min-w-full border-collapse border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr>
                {headers.map((header, idx) => (
                  <th key={idx} className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                    <MathRenderer content={header || ''} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-muted/50">
                  {row.map((cell, cellIdx) => (
                    <td key={cellIdx} className="border border-border px-4 py-2 text-foreground">
                      <MathRenderer content={cell || ''} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } catch (error) {
      console.error('Error rendering table:', error);
      return <div key={key} />;
    }
  };

  return (
    <div className={className}>
      {renderContent()}
    </div>
  );
}

/**
 * Preprocesses content to extract special blocks (TIMELINE, CODE) 
 * and replace them with placeholder tokens
 */
interface ProcessedContent {
  content: string;
  timelines: Map<string, string>;
  codeBlocks: Map<string, string>;
}

function preprocessSpecialBlocks(content: string): ProcessedContent {
  const timelines = new Map<string, string>();
  const codeBlocks = new Map<string, string>();
  let processedContent = content;

  try {
    // Extract TIMELINE blocks
    const timelineRegex = /:::TIMELINE:::([\s\S]*?):::\/TIMELINE:::/g;
    let timelineMatch;
    let timelineIndex = 0;
    while ((timelineMatch = timelineRegex.exec(content)) !== null) {
      const placeholder = `__TIMELINE_PLACEHOLDER_${timelineIndex}__`;
      timelines.set(placeholder, timelineMatch[1]);
      processedContent = processedContent.replace(timelineMatch[0], placeholder);
      timelineIndex++;
    }
    
    console.log('[preprocessSpecialBlocks] Found', timelineIndex, 'timelines');

    // Extract CODE blocks  
    const codeRegex = /:::CODE:::([\s\S]*?):::\/CODE:::/g;
    let codeMatch;
    let codeIndex = 0;
    while ((codeMatch = codeRegex.exec(content)) !== null) {
      const placeholder = `__CODE_PLACEHOLDER_${codeIndex}__`;
      codeBlocks.set(placeholder, codeMatch[1]);
      processedContent = processedContent.replace(codeMatch[0], placeholder);
      codeIndex++;
    }
    
    console.log('[preprocessSpecialBlocks] Found', codeIndex, 'code blocks');
  } catch (error) {
    console.error('[preprocessSpecialBlocks] Error:', error);
  }

  return { content: processedContent, timelines, codeBlocks };
}
