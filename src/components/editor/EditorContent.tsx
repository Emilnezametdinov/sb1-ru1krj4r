import React from 'react';

export default function EditorContent() {
  return (
    <div className="flex-1 p-4 overflow-auto">
      <div
        contentEditable="true"
        className="prose max-w-none focus:outline-none min-h-[500px]"
        placeholder="Type '/' for commands"
      />
    </div>
  );
}