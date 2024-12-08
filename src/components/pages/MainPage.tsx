import React, { useState } from 'react';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import TasksTable from '../tables/TasksTable';
import ProjectsTable from '../tables/ProjectsTable';
import NotesTable from '../tables/NotesTable';
import InboxTable from '../tables/InboxTable';
import { InboxItem } from '../../types';

export default function MainPage() {
  const [inboxItems, setInboxItems] = useState<InboxItem[]>([
    { id: '1', title: 'Review documentation', createdAt: new Date().toISOString() },
    { id: '2', title: 'Setup project structure', createdAt: new Date().toISOString() },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (!over) return;

    const itemId = active.id as string;
    const targetTable = over.id as string;
    
    // Find the item being dragged
    const draggedItem = inboxItems.find(item => item.id === itemId);
    if (!draggedItem) return;

    // Remove item from inbox
    setInboxItems(prev => prev.filter(item => item.id !== itemId));

    // Handle item conversion based on target
    switch (targetTable) {
      case 'tasks':
        // Convert to task
        console.log('Converting to task:', draggedItem);
        break;
      case 'projects':
        // Convert to project
        console.log('Converting to project:', draggedItem);
        break;
      case 'notes':
        // Convert to note
        console.log('Converting to note:', draggedItem);
        break;
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <div className="p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Inbox</h2>
          <InboxTable items={inboxItems} />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
            <TasksTable id="tasks" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Projects</h2>
            <ProjectsTable id="projects" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Notes</h2>
            <NotesTable id="notes" />
          </div>
        </div>
      </div>
    </DndContext>
  );
}