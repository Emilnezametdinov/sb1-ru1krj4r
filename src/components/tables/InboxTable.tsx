import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';
import { useDraggable } from '@dnd-kit/core';
import { InboxItem } from '../../types';

interface InboxItemProps {
  item: InboxItem;
}

function DraggableInboxItem({ item }: InboxItemProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-move hover:shadow-sm transition-shadow"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">{item.title}</span>
        <button className="p-1 hover:bg-gray-200 rounded">
          <MoreHorizontal className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}

interface InboxTableProps {
  items: InboxItem[];
}

export default function InboxTable({ items }: InboxTableProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Inbox</h3>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          {items.map(item => (
            <DraggableInboxItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}