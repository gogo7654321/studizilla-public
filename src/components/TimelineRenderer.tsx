'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Calendar, Clock } from 'lucide-react';

interface TimelineEvent {
  year: string;
  event: string;
  detail: string;
}

interface TimelineData {
  id: string;
  title: string;
  events: TimelineEvent[];
}

interface TimelineRendererProps {
  data: TimelineData;
}

export function TimelineRenderer({ data }: TimelineRendererProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Show first 5 events when collapsed, all when expanded
  const visibleEvents = isExpanded ? data.events : data.events.slice(0, 5);
  const hasMoreEvents = data.events.length > 5;

  return (
    <div className="my-6 rounded-xl border border-border bg-gradient-to-br from-card to-muted/30 overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-5 py-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{data.title}</h3>
            <p className="text-sm text-muted-foreground">{data.events.length} historical events</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative px-5 py-4">
        {/* Vertical line */}
        <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 z-0" />

        <div className="space-y-1">
          {visibleEvents.map((event, index) => (
            <div
              key={`${event.year}-${index}`}
              className={`relative flex items-start gap-4 py-3 px-2 rounded-lg transition-all duration-200 cursor-pointer
                ${hoveredIndex === index ? 'bg-primary/5' : 'hover:bg-muted/50'}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Year bubble */}
              <div className={`relative z-20 flex-shrink-0 min-w-[60px] px-2 py-1 rounded-full text-center text-xs font-bold transition-all duration-200 shadow-sm
                ${hoveredIndex === index 
                  ? 'bg-primary text-primary-foreground scale-110 shadow-md' 
                  : 'bg-slate-800 dark:bg-slate-900 text-primary border border-primary/30'
                }
              `}>
                {event.year}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className={`font-semibold text-sm transition-colors duration-200
                  ${hoveredIndex === index ? 'text-primary' : 'text-foreground'}
                `}>
                  {event.event}
                </h4>
                <p className={`text-sm mt-0.5 transition-all duration-200
                  ${hoveredIndex === index ? 'text-foreground/90' : 'text-muted-foreground'}
                `}>
                  {event.detail}
                </p>
              </div>

              {/* Dot on timeline */}
              <div className={`absolute left-[35px] top-[18px] w-3 h-3 rounded-full border-2 transition-all duration-200 z-10
                ${hoveredIndex === index 
                  ? 'bg-primary border-primary scale-125' 
                  : 'bg-background border-primary/50'
                }
              `} />
            </div>
          ))}
        </div>

        {/* Expand/Collapse button */}
        {hasMoreEvents && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg 
              bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10
              text-primary font-medium text-sm transition-all duration-200
              border border-primary/20 hover:border-primary/30"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show All {data.events.length} Events
              </>
            )}
          </button>
        )}
      </div>

      {/* Footer with time range */}
      {data.events.length > 0 && (
        <div className="px-5 py-3 bg-muted/30 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>From {data.events[0].year}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>To {data.events[data.events.length - 1].year}</span>
            <Clock className="w-3 h-3" />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Parse timeline block content into structured data
 */
export function parseTimelineBlock(content: string): TimelineData | null {
  try {
    // Extract id
    const idMatch = content.match(/id::=([^\n]+)/);
    const id = idMatch ? idMatch[1].trim() : 'timeline';

    // Extract title
    const titleMatch = content.match(/title::=([^\n]+)/);
    const title = titleMatch ? titleMatch[1].trim() : 'Timeline';

    // Extract events JSON array
    const eventsMatch = content.match(/events::=(\[[\s\S]*?\])/);
    if (!eventsMatch) return null;

    // Parse the events JSON
    const eventsJson = eventsMatch[1]
      .replace(/\n/g, '') // Remove newlines
      .replace(/\s+/g, ' '); // Normalize whitespace
    
    const events: TimelineEvent[] = JSON.parse(eventsJson);

    return { id, title, events };
  } catch (error) {
    console.error('Error parsing timeline block:', error);
    return null;
  }
}
