// components/DashboardLayout.js
import Sidebar from '@/app/components/Sidebar';
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar></Sidebar>
      <div className="flex-1 p-8 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
