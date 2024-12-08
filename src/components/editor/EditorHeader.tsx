import React from 'react';
import { MoreHorizontal } from 'lucide-react';

export default function EditorHeader() {
  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Untitled"
          className="text-3xl font-bold w-full focus:outline-none"
        />
        <button className="p-2 hover:bg-hover rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
}