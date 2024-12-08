export type TaskStatus = 'todo' | 'in_progress' | 'done';
export type TaskType = 'next_action' | 'someday_maybe' | 'waiting_for';
export type ProjectStatus = 'active' | 'on_hold' | 'completed';
export type ProjectArea = 'personal' | 'work' | 'health' | 'education' | 'finance';

export interface InboxItem {
  id: string;
  title: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  status: TaskStatus;
  dueDate?: string;
  comment?: string;
  projectId?: string;
}

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  area: ProjectArea;
  firstStep?: string;
  completionCriteria?: string;
  tasks: Task[];
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}