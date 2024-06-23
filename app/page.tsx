"use client"
import React from 'react';
import Navbar from '../components/Navbar'; 
import Hero from '../components/Hero';
import BookRes from '../components/BookRes';
import Contact from '../components/Contact';
import OrderPage from '../pages/OrderPage';
import Testimonials from '../components/Testimonials';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <OrderPage/>
      <BookRes/>
      <Testimonials />  
      <Contact/>
      <Footer />
    </>
  );
};

export default Page;