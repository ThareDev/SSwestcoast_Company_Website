import React from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero' ;
import About from '@/components/about';
import Services from '@/components/services';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <Footer/>
    </div>
  );
}
