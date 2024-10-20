"use client";

import React,{useState,useTransition} from 'react';
import {useRouter} from 'next/navigation';
import {FaBell,FaUser,FaSearch} from 'react-icons/fa';
import PageSearch from './PageSearch';

import Image from 'next/image';
import Loading from './Loading';

const Navbar=() => {
  const [isPending,startTransition]=useTransition();
  const router=useRouter();
  const [isLoggedIn,setIsLoggedIn]=useState(false); // Simulated login state

  return (
    <>
      {isPending&&<Loading />}
      <nav className="flex items-center justify-between px-2 py-1 md:px-4 md:py-2">
        {/* Logo Section */}
        <div className="flex items-center m-1 md:m-4 justify-center md:justify-start">
          
          <h2 className="text-2xl text-blue-900 font-bold m-2 hidden md:block">PromptAI</h2>
        </div>

        {/* Search Bar */}
        <div className="relative flex w-1/2 md:w-auto">
          <PageSearch /> 
        </div>

        {/* Right-side Icons and Button */}
        <div className="flex items-center space-x-2 md:space-x-4 text-sm md:text-base">
          <FaBell size={18} className="hover:text-blue-600 cursor-pointer"
            onClick={() => router.push('/notifications')}
          />
          {isLoggedIn? (
            <Image
              src="/images/w1.png" // Path to user's profile image
              alt="User Profile"
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
              onClick={() => router.push('/settings')}
            />
          ):(
            <FaUser
              size={18}
              className="hover:text-blue-600 cursor-pointer"
              onClick={() => router.push('/settings')}
            />
          )}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded-full"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn? 'Logout':'Login'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;