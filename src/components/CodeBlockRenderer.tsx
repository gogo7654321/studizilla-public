'use client';

import React, { useState } from 'react';
import { Play, Copy, Check, Code, Terminal, ChevronDown, ChevronUp } from 'lucide-react';

interface CodeBlockData {
  id: string;
  title: string;
  language: string;
  runnable: boolean;
  code: string;
  expectedOutput: string;
}

interface CodeBlockRendererProps {
  data: CodeBlockData;
}

export function CodeBlockRenderer({ data }: CodeBlockRendererProps) {
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleRun = () => {
    setShowOutput(true);
  };

  // Get language display name and color
  const getLanguageInfo = (lang: string) => {
    const languages: Record<string, { name: string; color: string; bgColor: string }> = {
      java: { name: 'Java', color: 'text-orange-600', bgColor: 'bg-orange-100 dark:bg-orange-900/30' },
      python: { name: 'Python', color: 'text-blue-600', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
      javascript: { name: 'JavaScript', color: 'text-yellow-600', bgColor: 'bg-yellow-100 dark:bg-yellow-900/30' },
      typescript: { name: 'TypeScript', color: 'text-blue-500', bgColor: 'bg-blue-100 dark:bg-blue-900/30' },
      cpp: { name: 'C++', color: 'text-purple-600', bgColor: 'bg-purple-100 dark:bg-purple-900/30' },
      c: { name: 'C', color: 'text-gray-600', bgColor: 'bg-gray-100 dark:bg-gray-900/30' },
    };
    return languages[lang.toLowerCase()] || { name: lang, color: 'text-gray-600', bgColor: 'bg-gray-100 dark:bg-gray-900/30' };
  };

  const langInfo = getLanguageInfo(data.language);

  return (
    <div className="my-6 rounded-xl border border-border bg-card overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-medium text-slate-200">{data.title}</span>
          </div>
          <span className={`px-2 py-0.5 rounded text-xs font-medium ${langInfo.bgColor} ${langInfo.color}`}>
            {langInfo.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200"
            title="Copy code"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded hover:bg-slate-700 transition-colors text-slate-400 hover:text-slate-200"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          {/* Code */}
          <div className="relative">
            <pre className="bg-slate-950 text-slate-100 p-4 overflow-x-auto text-sm font-mono leading-relaxed max-h-[400px] overflow-y-auto">
              <code>{data.code}</code>
            </pre>
          </div>

          {/* Run button */}
          {data.runnable && data.expectedOutput && (
            <div className="border-t border-slate-800 bg-slate-900 px-4 py-3">
              <button
                onClick={handleRun}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all
                  ${showOutput 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg'
                  }
                `}
              >
                <Play className="w-4 h-4" />
                {showOutput ? 'Running...' : 'Run Code'}
              </button>
            </div>
          )}

          {/* Output */}
          {showOutput && data.expectedOutput && (
            <div className="border-t border-slate-800">
              <div className="bg-slate-900 px-4 py-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-slate-300">Output</span>
              </div>
              <pre className="bg-black text-green-400 p-4 overflow-x-auto text-sm font-mono leading-relaxed max-h-[300px] overflow-y-auto">
                {data.expectedOutput}
              </pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/**
 * Parse code block content into structured data
 */
export function parseCodeBlock(content: string): CodeBlockData | null {
  try {
    // Extract id
    const idMatch = content.match(/id::=([^\n]+)/);
    const id = idMatch ? idMatch[1].trim() : 'code-block';

    // Extract title
    const titleMatch = content.match(/title::=([^\n]+)/);
    const title = titleMatch ? titleMatch[1].trim() : 'Code Example';

    // Extract language
    const langMatch = content.match(/language::=([^\n]+)/);
    const language = langMatch ? langMatch[1].trim() : 'text';

    // Extract runnable flag
    const runnableMatch = content.match(/runnable::=([^\n]+)/);
    const runnable = runnableMatch ? runnableMatch[1].trim().toLowerCase() === 'true' : false;

    // Extract code - everything between code::= and expected_output::= (or end)
    const codeMatch = content.match(/code::=([\s\S]*?)(?=expected_output::=|$)/);
    const code = codeMatch ? codeMatch[1].trim() : '';

    // Extract expected output
    const outputMatch = content.match(/expected_output::=([\s\S]*?)$/);
    const expectedOutput = outputMatch ? outputMatch[1].trim() : '';

    if (!code) return null;

    return { id, title, language, runnable, code, expectedOutput };
  } catch (error) {
    console.error('Error parsing code block:', error);
    return null;
  }
}
