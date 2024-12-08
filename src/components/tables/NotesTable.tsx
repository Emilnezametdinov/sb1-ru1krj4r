import React from 'react';
import { FileText, MoreHorizontal, Plus } from 'lucide-react';
import { Note } from '../../types';
import { useDroppable } from '@dnd-kit/core';

interface NotesTableProps {
  id: string;
}

export default function NotesTable({ id }: NotesTableProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Notes</h3>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <NoteItem
            note={{
              id: '1',
              title: 'Meeting Notes',
              content: 'Discussion about new features...',
              createdAt: '2024-03-08'
            }}
          />
        </div>
      </div>
    </div>
  );
}

function NoteItem({ note }: { note: Note }) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FileText className="w-4 h-4 text-primary" />
          <div className="space-y-1">
            <span className="text-sm text-gray-700">{note.title}</span>
            <p className="text-xs text-gray-500 truncate">{note.content}</p>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <MoreHorizontal className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}