"use client"

import UserProfile from '@/components/settings';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-4">
        <UserProfile />
      </div>
    </div>
  );
};

export default Page;