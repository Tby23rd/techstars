import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-blue-500 text-blue-900 opacity-85 z-50 fixed top-0 left-0">
    <div className="flex justify-between h-16 items-center container mx-auto px-4">
    <div className="text-2xl md:text-3xl">LocalAve</div>
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`${menuOpen ? "transform rotate-45" : ""} h-1 w-8 bg-white mb-1 transition-transform duration-300`}></div>
          <div className={`${menuOpen ? "transform scale-0" : ""} h-1 w-8 bg-white mb-1 transition-transform duration-300`}></div>
          <div className={`${menuOpen ? "transform -rotate-45" : ""} h-1 w-8 bg-white mb-1 transition-transform duration-300`}></div>
        </div>
        <ul className={`md:flex md:items-center md:space-x-6 ${menuOpen ? "flex flex-col items-center absolute top-16 left-0 w-full bg-blue-500 text-white" : "hidden"}`}>
         <li className="text-lg my-2 md:my-0 font-bold"><Link href="/"><span className="hover:bg-blue-700 transition duration-300 p-2" onClick={handleLinkClick}>Home</span></Link></li>
          <li className="text-lg my-2 md:my-0 font-bold"><Link href="/ShopPage"><span className="hover:bg-blue-700 transition duration-300 p-2" onClick={handleLinkClick}>Stores</span></Link></li>
          <li className="text-lg my-2 md:my-0 font-bold"><Link href="/ProductsPage"><span className="hover:bg-blue-700 transition duration-300 p-2" onClick={handleLinkClick}>Products</span></Link></li>
          <li className="text-lg my-2 md:my-0 font-bold"><Link href="#Testimonials"><span className="hover:bg-blue-700 transition duration-300 p-2" onClick={handleLinkClick}>Testimonials</span></Link></li>
          <li className="text-lg my-2 md:my-0 font-bold"><Link href="#Contacts"><span className="hover:bg-blue-700 transition duration-300 p-2" onClick={handleLinkClick}>Contact</span></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
