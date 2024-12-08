import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import MainPage from '../pages/MainPage';

export default function MainLayout() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto bg-gray-50">
        <MainPage />
      </main>
    </div>
  );
}