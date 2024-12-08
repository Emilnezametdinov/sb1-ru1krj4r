import React from 'react';
import { Folder, MoreHorizontal, Plus } from 'lucide-react';
import { Project, ProjectStatus } from '../../types';
import { useDroppable } from '@dnd-kit/core';

interface ProjectsTableProps {
  id: string;
  showAll?: boolean;
}

export default function ProjectsTable({ id, showAll = false }: ProjectsTableProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef} className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <ProjectItem
            project={{
              id: '1',
              title: 'Website Redesign',
              status: 'active',
              area: 'work',
              tasks: []
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'on_hold':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Folder className="w-4 h-4 text-primary" />
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">{project.title}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>
        </div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <MoreHorizontal className="w-4 h-4 text-gray-500" />
        </button>
      </div>
    </div>
  );
}