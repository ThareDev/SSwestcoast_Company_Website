'use client';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import Footer from '@/components/footer';
import Contact from '@/components/contactus';
import Portfolio from '@/components/portfolio';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);
      
      // Hide scroll indicator after scrolling
      if (scrolled > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80;
      const elementPosition = servicesSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 transition-all duration-300 shadow-lg shadow-lime-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />
      
      {/* Hero Section with Scroll Indicator */}
      <section id="home" className="relative">
        <Hero />
        
        {/* Animated Scroll Indicator */}
        {showScrollIndicator && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
            <button
              onClick={scrollToNext}
              className="flex flex-col items-center gap-2 text-black hover:text-lime-500 transition-colors duration-300 group"
              aria-label="Scroll to next section"
            >
              <span className="text-sm font-bold tracking-wider">SCROLL</span>
              <div className="w-6 h-10 border-2 border-black group-hover:border-lime-500 rounded-full flex items-start justify-center p-2 transition-colors duration-300">
                <div className="w-1 h-2 bg-black group-hover:bg-lime-500 rounded-full animate-scroll" />
              </div>
              <ChevronDown className="animate-pulse" size={24} />
            </button>
          </div>
        )}

        {/* Lime Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent shadow-lg shadow-lime-500/50"></div>
      </section>

      {/* Services Section - Black Background */}
      <section id="services" className="relative bg-black">
        <Services />
        
        {/* Lime Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent shadow-lg shadow-lime-500/50"></div>
      </section>

      {/* About Section with Background Pattern */}
      <section id="about" className="relative">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <About />
        
        {/* Lime Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative bg-black">
        {/* Top Wave Separator - White to Black */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 sm:h-16 md:h-20 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            />
          </svg>
        </div>
        
        <Portfolio />
        
        {/* Lime Accent Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lime-500 to-transparent shadow-lg shadow-lime-500/50" />
        
        {/* Bottom Angled Separator - Black to White */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 sm:h-16 md:h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 598.97 114.72 1200 0z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />
        
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Action Elements - Section Indicators */}
      <div className="fixed bottom-8 left-8 z-50 hidden md:flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {['home', 'services', 'about', 'portfolio', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(section);
                if (element) {
                  const offset = 80;
                  const elementPosition = element.offsetTop - offset;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="group relative"
              aria-label={`Go to ${section}`}
            >
              <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-lime-500 transition-all duration-300 group-hover:scale-150" />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(12px);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        .animate-scroll {
          animation: scroll 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #84cc16, #65a30d);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #65a30d, #4d7c0f);
        }
      `}</style>
    </div>
  );
}