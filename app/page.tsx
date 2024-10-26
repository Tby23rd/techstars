"use client"
import React from 'react';
import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import '@/app/globals.css';


const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />  
      <Contact/>
      <Footer />
    </>
  );
};

export default Page;