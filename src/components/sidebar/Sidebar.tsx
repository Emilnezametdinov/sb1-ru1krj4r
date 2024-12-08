import React from 'react';
import { 
  Inbox, 
  CheckCircle2, 
  Calendar, 
  ListTodo, 
  Clock, 
  Archive,
  Search
} from 'lucide-react';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-sidebar h-full border-r border-gray-200 flex flex-col">
      <div className="p-4 flex flex-col gap-6">
        <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 border border-gray-200">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none focus:outline-none text-sm w-full"
          />
        </div>

        <nav className="space-y-1">
          <SidebarItem icon={Inbox} label="Inbox" active />
          <SidebarItem icon={CheckCircle2} label="Next Actions" />
          <SidebarItem icon={Calendar} label="Scheduled" />
          <SidebarItem icon={ListTodo} label="Projects" />
          <SidebarItem icon={Clock} label="Waiting For" />
          <SidebarItem icon={Archive} label="Someday/Maybe" />
        </nav>
      </div>
    </aside>
  );
}