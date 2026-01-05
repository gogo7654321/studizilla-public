
'use client';

import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type Segment = {
  value: number;
  count: number;
  color: string;
  label: string;
};

export function SegmentedProgress({ segments }: { segments: Segment[] }) {
  const totalCount = segments.reduce((sum, segment) => sum + segment.count, 0);

  if (totalCount === 0) {
    // Render a default "empty" state for the progress bar
    return (
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-full bg-blue-500" />
      </div>
    );
  }
  
  return (
    <TooltipProvider>
      <div className="flex h-3 w-full overflow-hidden rounded-full bg-secondary">
        {segments.map((segment, index) => {
          if (segment.count === 0) return null;
          const percentage = (segment.count / totalCount) * 100;
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className={cn("h-full transition-all duration-300", segment.color)}
                  style={{ width: `${percentage}%` }}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{segment.label}: {segment.count} card{segment.count === 1 ? '' : 's'}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
}
