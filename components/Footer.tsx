"use client";
// components/Footer.tsx
import React, { useCallback } from 'react';
import { Facebook, Instagram, YouTube, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

const Footer: React.FC = () => {
  const navigate = useCallback((path: string) => {
    window.location.href = path;
  }, []);

  return (
    <footer className="w-full m-2 shadow-xl bg-white">
      <div className="flex flex-col md:flex-row m-auto border-t rounded-xl justify-between p-2">
        <div className="text-xl p-2">
          <h3 className="text-2xl text-center font-bold p-2">About Us</h3>
          {/* Navigation links */}
          <p className="text-xl p-2 cursor-pointer" onClick={() => navigate('/#faq')}>
            FAQ
          </p>
          <p className="text-xl p-2 cursor-pointer" onClick={() => navigate('/privacy&terms')}>
            Privacy & Terms
          </p>
          <p className="text-xl p-2 cursor-pointer" onClick={() => navigate('/#about')}>
            About Us
          </p>
        </div>
        <div className="text-xl p-2">
          <h3 className="text-2xl text-center font-bold p-2">Opening Hours</h3>
          <p className="text-xl p-2">Monday - Sunday: 8 am to 8 pm</p>
          <p className="text-xl p-2">Address: Calgary, Alberta, Canada</p>
        </div>
        <div className="text-xl p-2">
          <h3 className="text-2xl text-center font-bold p-4">Contact Us</h3>
          <p className="text-xl p-2">Email: abc@gmail.com</p>
          <p className="text-xl p-2">Phone: (123) 456-789</p>
          {/* Social media links */}
          <div className="text-center">
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="Instagram"
            >
              <Instagram style={{ color: 'white' }} />
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="LinkedIn"
            >
              <LinkedIn style={{ color: 'white' }} />
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="Facebook"
            >
              <Facebook style={{ color: 'white' }} />
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="YouTube"
            >
              <YouTube style={{ color: 'white' }} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-4 px-4 py-2">
        <p className="text-teal-900 text-center italic">
          In the spirit of reconciliation, we acknowledge that we live, work, and play on the traditional territories of the Blackfoot Confederacy (Siksika, Kainai, Piikani), the Tsuut’ina, the îethka Nakoda Nations (Chiniki, Bearspaw, Goodstoney), the Otipemisiwak Métis Government (Districts 5 and 6), and all people who make their homes in the Treaty 7 region of Southern Alberta.
        </p>
      </div>
      <div className="text-teal-900 mx-4 font-bold text-center mt-4 px-4 py-2">
        <p>&copy; 2024
          <Link href="#" className="text-teal-900 mx-2 font-bold">
            Made with ❤️ by Resew & Stitch
          </Link>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
