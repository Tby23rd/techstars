"use client";

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaBell, FaUser, FaBars } from 'react-icons/fa';
import Loading from './Loading'; // Assuming you have a Loading component

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = React.useTransition();

  const handleNavigation = (path: string) => {
    startTransition(() => {
      router.push(path);
    });
  };

  return (
    <nav className="bg-white m-2 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span 
          className="font-bold text-xl text-blue-600 cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          ADHD Task Manager
        </span>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => handleNavigation('/')}
            className={`hover:text-blue-600 ${pathname === '/' ? 'text-blue-600' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('/tasks')}
            className={`hover:text-blue-600 ${pathname === '/tasks' ? 'text-blue-600' : ''}`}
          >
            Tasks
          </button>
        </div>

        {/* User actions */}
        <div className="flex items-center space-x-2 md:space-x-4 text-sm md:text-base">
          <FaBell 
            size={18} 
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => handleNavigation('/notifications')}
          />
          {isLoggedIn ? (
            <Image
              src="/images/w1.png" // Path to user's profile image
              alt="User Profile"
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
              onClick={() => handleNavigation('/settings')}
            />
          ) : (
            <FaUser
              size={18}
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => handleNavigation('/settings')}
            />
          )}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden pb-4">
          <button 
            onClick={() => handleNavigation('/')}
            className="block font-bold py-2 hover:text-blue-600"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('/tasks')}
            className="block py-2 font-bold hover:text-blue-600"
          >
            Tasks
          </button>
        </div>
      )}
      
      {isPending && <Loading />}
    </nav>
  );
};

export default Navbar;