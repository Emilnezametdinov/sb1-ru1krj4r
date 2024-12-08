import React from 'react';
import { Calendar, CheckCircle2, Clock, MoreHorizontal, Plus } from 'lucide-react';
import { Task, TaskType } from '../../types';
import { useDroppable } from '@dnd-kit/core';

interface TasksTableProps {
  id: string;
  showAll?: boolean;
}

export default function TasksTable({ id, showAll = false }: TasksTableProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Tasks</h3>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <TaskItem
            task={{
              id: '1',
              title: 'Review project proposal',
              type: 'next_action',
              status: 'todo',
              dueDate: '2024-03-10'
            }}
          />
        </div>
      </div>
    </div>
  );
}

function TaskItem({ task }: { task: Task }) {
  const getTypeIcon = (type: TaskType) => {
    switch (type) {
      case 'next_action':
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case 'waiting_for':
        return <Clock className="w-4 h-4 text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <div className="flex items-center space-x-2">
            {getTypeIcon(task.type)}
            <span className="text-sm text-gray-700">{task.title}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {task.dueDate && (
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <Calendar className="w-3 h-3" />
              <span>{task.dueDate}</span>
            </div>
          )}
          <button className="p-1 hover:bg-gray-200 rounded">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}