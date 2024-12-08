import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function SidebarItem({ 
  icon: Icon, 
  label, 
  active = false,
  onClick 
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full space-x-2 px-3 py-2 rounded-lg cursor-pointer
        ${active ? 'bg-white shadow-sm' : 'hover:bg-hover transition-colors'}`}
    >
      <Icon className={`w-4 h-4 ${active ? 'text-primary' : 'text-gray-600'}`} />
      <span className={`${active ? 'font-medium text-primary' : 'text-gray-700'}`}>
        {label}
      </span>
    </button>
  );
}