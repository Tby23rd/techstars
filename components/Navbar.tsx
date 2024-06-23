import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" w-full bg-blue-500 text-blue-900 opacity-85 z-100">
      <div className="flex justify-between h-16 items-center container mx-auto px-4">
        <div className="text-2xl md:text-3xl">Logo</div>
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`${menuOpen ? "transform rotate-45" : ""} h-1 w-8 bg-white mb-1 transition-transform duration-300`}></div>
          <div className={`${menuOpen ? "transform scale-0" : ""} h-1 w-8 bg-white mb-1 transition-transform duration-300`}></div>
          <div className={`${menuOpen ? "transform -rotate-45" : ""} h-1 w-8 bg-white mb-1 transition-transform duration-300`}></div>
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 ${menuOpen ? "flex flex-col items-center absolute top-16 left-0 w-full bg-[#3b1c02] text-white" : "hidden"}`}>
          <li className="text-lg my-2 md:my-0"><Link href="/"><span className="hover:bg-blue-500 transition duration-300 p-2">Home</span></Link></li>
          <li className="text-lg my-2 md:my-0"><Link href="/ShopPage"><span className="hover:bg-blue-500 transition duration-300 p-2">Stores</span></Link></li>
          <li className="text-lg my-2 md:my-0"><Link href="/ProductsPage"><span className="hover:bg-blue-500 transition duration-300 p-2">Products</span></Link></li>
          <li className="text-lg my-2 md:my-0"><Link href="#Testimonials"><span className="hover:bg-blue-500 transition duration-300 p-2">Testimonials</span></Link></li>
          <li className="text-lg my-2 md:my-0"><Link href="#Contacts"><span className="hover:bg-blue-500 transition duration-300 p-2">Contact</span></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
