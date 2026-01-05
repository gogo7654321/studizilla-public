
'use client';

import React, { useEffect, useRef } from 'react';
import './mathquill.css';

export function MathQuillInput() {
  const editorRef = useRef<HTMLDivElement>(null);

  return (
    <div className="math-editor-container">
      <div className="math-editor-header">
        <p>Free Response</p>
      </div>
      <div className="math-editor-body">
        <span ref={editorRef} className="math-editor-input"></span>
      </div>
    </div>
  );
}
