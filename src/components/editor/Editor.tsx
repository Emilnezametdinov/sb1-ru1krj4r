import React from 'react';
import EditorHeader from './EditorHeader';
import EditorContent from './EditorContent';

export default function Editor() {
  return (
    <div className="flex flex-col h-full bg-white">
      <EditorHeader />
      <EditorContent />
    </div>
  );
}