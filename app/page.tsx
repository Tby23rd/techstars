"use client"
import React from 'react';
import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import FeaturedProducts from '@/components/products/Products';

import Features from '@/components/Features';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import AllStores from '@/components/shops/Shops';


const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <AllStores/>
      <FeaturedProducts/>
      <Testimonials />  
      <Contact/>
      <Footer />
    </>
  );
};

export default Page;