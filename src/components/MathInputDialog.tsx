
'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Delete, CornerDownLeft, ArrowUp, ArrowDown } from 'lucide-react';

// Simple utility function to combine class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

const symbolButtons = [
    { label: <span className="text-base">x</span>, cmd: 'x', offset: 0 },
    { label: <span className="text-base">y</span>, cmd: 'y', offset: 0 },
    { label: <span className="text-base">x<sup className="text-xs">2</sup></span>, cmd: '^{2}', offset: 0 },
    { label: <span className="text-base">x<sup className="text-xs">y</sup></span>, cmd: '^{}', offset: -1 },
    { label: <span className="text-base">x<sub className="text-xs">y</sub></span>, cmd: '_{}', offset: -1 },
    { label: <span className="text-lg">(</span>, cmd: '(', offset: 0 },
    { label: <span className="text-lg">)</span>, cmd: ')', offset: 0 },
    { label: <span className="text-lg">&#60;</span>, cmd: '<', offset: 0 },
    { label: <span className="text-lg">&#62;</span>, cmd: '>', offset: 0 },
    { label: <span className="text-base">|x|</span>, cmd: '||', offset: -1 },
    { label: <span className="text-lg">,</span>, cmd: ',', offset: 0 },
    { label: <span className="text-lg">≤</span>, cmd: '\\le', offset: 0 },
    { label: <span className="text-lg">≥</span>, cmd: '\\ge', offset: 0 },
    { label: <span className="text-base">√x</span>, cmd: '\\sqrt{}', offset: -1 },
    { label: <span className="text-lg">π</span>, cmd: '\\pi', offset: 0 },
    { label: <div className="flex flex-col items-center"><span className="text-sm">x</span><hr className="w-3 border-t border-current my-0.5"/><span className="text-sm">y</span></div>, cmd: '\\frac{}{}', offset: -4 },
    { label: <span className="text-lg">≠</span>, cmd: '\\neq', offset: 0 },
];

const numpadButtons = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0', '.', '=',
];

const operatorButtons = [
    { label: <span className="text-lg">÷</span>, cmd: '\\div' },
    { label: <span className="text-lg">×</span>, cmd: '\\times' },
    { label: <span className="text-lg">−</span>, cmd: '-' },
    { label: <span className="text-lg">+</span>, cmd: '+' },
];

type Token = { start: number; end: number; type: 'command' | 'text' };

// Helper function to parse LaTeX into tokens for smart deletion
function parseLatexTokens(latex: string): Token[] {
    const tokens: Token[] = [];
    let i = 0;
    
    while (i < latex.length) {
        if (latex[i] === '\\') {
            // Find the end of the command
            let j = i + 1;
            while (j < latex.length && /[a-zA-Z]/.test(latex[j])) {
                j++;
            }
            
            // Check if this command has braces
            let braceCount = 0;
            let k = j;
            while (k < latex.length && latex[k] === '{') {
                let braceStart = k;
                let braceEnd = k + 1;
                let depth = 1;
                
                while (braceEnd < latex.length && depth > 0) {
                    if (latex[braceEnd] === '{') depth++;
                    else if (latex[braceEnd] === '}') depth--;
                    braceEnd++;
                }
                
                if (depth === 0) {
                    k = braceEnd;
                    braceCount++;
                } else {
                    break;
                }
            }
            
            tokens.push({start: i, end: k, type: 'command'});
            i = k;
        } else {
            tokens.push({start: i, end: i + 1, type: 'text'});
            i++;
        }
    }
    
    return tokens;
}

function MathKeypad({ onInsert, onDelete, onMove, onSave }: { onInsert: (cmd: string, offset?: number) => void; onDelete: () => void; onMove: (dir: 'left' | 'right' | 'up' | 'down') => void; onSave: () => void; }) {
    return (
        <div className="flex flex-wrap items-start justify-center gap-6 p-4">
            {/* Symbols */}
            <div className="grid grid-cols-4 gap-1">
                {symbolButtons.map((btn, index) => (
                    <Button 
                        key={index}
                        type="button" 
                        variant="outline" 
                        className="h-11 w-11 p-0 text-sm font-medium border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors" 
                        onClick={() => onInsert(btn.cmd, btn.offset)}
                    >
                        {btn.label}
                    </Button>
                ))}
            </div>

            {/* Numpad and Operators */}
            <div className="flex gap-2">
                <div className="grid grid-cols-3 gap-1">
                    {numpadButtons.map(label => (
                        <Button 
                            key={label} 
                            type="button" 
                            variant="secondary" 
                            className="h-11 w-11 p-0 text-base font-medium bg-gray-100 hover:bg-gray-200 transition-colors" 
                            onClick={() => onInsert(label)}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-1">
                    {operatorButtons.map((btn, index) => (
                        <Button 
                            key={index}
                            type="button" 
                            variant="outline" 
                            className="h-11 w-11 p-0 text-base font-medium border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors" 
                            onClick={() => onInsert(btn.cmd)}
                        >
                            {btn.label}
                        </Button>
                    ))}
                </div>
            </div>
            
            {/* Controls */}
            <div className="flex flex-col gap-2">
                <div className="grid grid-cols-3 gap-1 justify-items-center">
                    <div></div>
                    <Button type="button" variant="outline" className="h-9 w-9 p-0 border-gray-300 hover:bg-gray-50" onClick={() => onMove('up')}>
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                    <div></div>
                    <Button type="button" variant="outline" className="h-9 w-9 p-0 border-gray-300 hover:bg-gray-50" onClick={() => onMove('left')}>
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="outline" className="h-9 w-9 p-0 border-gray-300 hover:bg-gray-50" onClick={() => onMove('down')}>
                        <ArrowDown className="h-4 w-4" />
                    </Button>
                    <Button type="button" variant="outline" className="h-9 w-9 p-0 border-gray-300 hover:bg-gray-50" onClick={() => onMove('right')}>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
                <Button type="button" variant="destructive" className="h-11 px-4 bg-red-500 hover:bg-red-600" onClick={onDelete}>
                    <Delete className="h-4 w-4" />
                </Button>
                <Button type="button" className="h-11 px-4 bg-blue-500 hover:bg-blue-600" onClick={onSave}>
                    <CornerDownLeft className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

interface MathInputDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (latex: string) => void;
  initialLatex?: string;
}

export default function MathInputDialog({
  isOpen,
  onClose,
  onSave,
  initialLatex = '',
}: MathInputDialogProps) {
  const [latex, setLatex] = useState(initialLatex);
  const [cursorPosition, setCursorPosition] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const initialValue = initialLatex || '';
      setLatex(initialValue);
      setCursorPosition(initialValue.length);
      setTimeout(() => {
        hiddenInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen, initialLatex]);

  // Simple math renderer for basic expressions
  const renderMath = (latex: string) => {
    if (!latex) return "Type an equation...";
    
    // Simple transformations for common math notation
    let rendered = latex
      .replace(/\\pi/g, "π")
      .replace(/\\times/g, "×")
      .replace(/\\div/g, "÷")
      .replace(/\\le/g, "≤")
      .replace(/\\ge/g, "≥")
      .replace(/\\neq/g, "≠")
      .replace(/\\sqrt{([^}]*)}/g, "√($1)")
      .replace(/\\frac{([^}]*)}{([^}]*)}/g, "($1)/($2)")
      .replace(/\^{([^}]*)}/g, "^$1")
      .replace(/_{([^}]*)}/g, "_$1");
    
    return rendered;
  };

  useEffect(() => {
    if (previewRef.current) {
      try {
        const displayText = renderMath(latex);
        previewRef.current.textContent = displayText;
        setError(null);
      } catch (e: any) {
        if (previewRef.current) {
           previewRef.current.textContent = "Invalid equation";
        }
        setError(e.message);
      }
    }
  }, [latex]);

  const handleInsert = (cmd: string, offset = 0) => {
    const newLatex = latex.substring(0, cursorPosition) + cmd + latex.substring(cursorPosition);
    setLatex(newLatex);
    setCursorPosition(cursorPosition + cmd.length + offset);
    setTimeout(() => hiddenInputRef.current?.focus(), 0);
  };
  
  const handleDelete = () => {
    if (cursorPosition === 0) return;
    
    const tokens = parseLatexTokens(latex);
    
    // Find the token that contains or is right before the cursor
    let tokenToDelete = null;
    for (let i = tokens.length - 1; i >= 0; i--) {
      if (tokens[i].end <= cursorPosition) {
        tokenToDelete = tokens[i];
        break;
      }
    }
    
    if (tokenToDelete) {
      const newLatex = latex.substring(0, tokenToDelete.start) + latex.substring(tokenToDelete.end);
      setLatex(newLatex);
      setCursorPosition(tokenToDelete.start);
    }
    
    setTimeout(() => hiddenInputRef.current?.focus(), 0);
  };
  
  const handleMove = (dir: 'left' | 'right' | 'up' | 'down') => {
    let newPos = cursorPosition;
    
    if (dir === 'left') {
      newPos = Math.max(0, cursorPosition - 1);
    } else if (dir === 'right') {
      newPos = Math.min(latex.length, cursorPosition + 1);
    } else if (dir === 'up') {
      // Jump to previous opening brace
      const textBefore = latex.substring(0, cursorPosition);
      const lastOpeningBrace = textBefore.lastIndexOf('{');
      if (lastOpeningBrace !== -1) {
        newPos = lastOpeningBrace + 1;
      }
    } else if (dir === 'down') {
      // Jump to next closing brace
      const textAfter = latex.substring(cursorPosition);
      const nextClosingBrace = textAfter.indexOf('}');
      if (nextClosingBrace !== -1) {
        newPos = cursorPosition + nextClosingBrace;
      }
    }
    
    setCursorPosition(newPos);
    setTimeout(() => hiddenInputRef.current?.focus(), 0);
  };

  const handleSave = () => {
    onSave(latex);
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Backspace') {
      e.preventDefault();
      handleDelete();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleMove('left');
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleMove('right');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleMove('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleMove('down');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      handleInsert(e.key);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">Math Expression</DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            Enter your mathematical expression using the keypad or keyboard
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-6 space-y-6">
          {/* Math Preview */}
          <div className="relative">
            <div
              className={cn(
                "relative w-full min-h-[100px] rounded-lg border-2 border-gray-200 bg-white",
                "flex items-center justify-center text-3xl cursor-text",
                "hover:border-gray-300 transition-colors",
                error && "border-red-300 bg-red-50"
              )}
              onClick={() => hiddenInputRef.current?.focus()}
            >
              {/* Rendered Math */}
              <div
                ref={previewRef}
                className="p-6 select-none font-mono text-2xl"
              />
              
              {/* Cursor */}
              <div 
                className="absolute top-1/2 w-0.5 h-8 bg-blue-500 animate-pulse pointer-events-none transform -translate-y-1/2"
                style={{
                  left: `${50 + (cursorPosition - latex.length / 2) * 12}px`,
                  display: latex ? 'block' : 'none'
                }}
              />
              
              {/* Hidden input for keyboard handling */}
              <input
                ref={hiddenInputRef}
                className="absolute inset-0 w-full h-full opacity-0 cursor-text"
                onKeyDown={handleKeyDown}
                onKeyPress={handleKeyPress}
                onChange={() => {}} // Controlled by our handlers
                value=""
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            
            {error && (
              <p className="text-xs text-red-600 mt-2 p-2 bg-red-50 rounded border border-red-200">
                {error}
              </p>
            )}
          </div>
          
          {/* Keypad */}
          <div className="bg-gray-50 rounded-lg border border-gray-200">
            <MathKeypad 
              onInsert={handleInsert} 
              onDelete={handleDelete} 
              onMove={handleMove} 
              onSave={handleSave} 
            />
          </div>
        </div>
        
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose} className="px-6">
            Cancel
          </Button>
          <Button onClick={handleSave} className="px-6 bg-blue-500 hover:bg-blue-600">
            Insert Expression
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
