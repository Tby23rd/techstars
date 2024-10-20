"use client"

import ADHDTaskManager from '@/components/task';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-6xl p-4">
        <ADHDTaskManager />
      </div>
    </div>
  );
};

export default Page;