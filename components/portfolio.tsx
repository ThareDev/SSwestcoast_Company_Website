'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Home, Building2, Square, Sofa, Droplets, Layout, Eye } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [touchedCard, setTouchedCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Layout size={20} /> },
    { id: 'home', name: 'Home Cleaning', icon: <Home size={20} /> },
    { id: 'office', name: 'Office Cleaning', icon: <Building2 size={20} /> },
    { id: 'window', name: 'Window Cleaning', icon: <Square size={20} /> },
    { id: 'furniture', name: 'Furniture', icon: <Sofa size={20} /> },
    { id: 'carpet', name: 'Carpet Cleaning', icon: <Droplets size={20} /> }
  ];

  const portfolioItems = [
    { id: 1, category: 'home', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800', title: 'Modern Living Room', alt: 'Clean modern living room' },
    { id: 2, category: 'home', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800', title: 'Kitchen Cleaning', alt: 'Sparkling clean kitchen' },
    { id: 3, category: 'home', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800', title: 'Bedroom Makeover', alt: 'Fresh bedroom cleaning' },
    { id: 4, category: 'home', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800', title: 'Bathroom Shine', alt: 'Spotless bathroom' },
    { id: 5, category: 'home', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', title: 'Full House Clean', alt: 'Complete house cleaning' },
    { id: 6, category: 'office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', title: 'Corporate Office', alt: 'Professional office cleaning' },
    { id: 7, category: 'office', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800', title: 'Meeting Room', alt: 'Clean meeting space' },
    { id: 8, category: 'office', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800', title: 'Open Workspace', alt: 'Modern workspace cleaning' },
    { id: 9, category: 'office', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', title: 'Reception Area', alt: 'Welcoming reception' },
    { id: 10, category: 'window', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800', title: 'High Rise Windows', alt: 'Crystal clear windows' },
    { id: 11, category: 'window', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800', title: 'Office Glass', alt: 'Spotless office windows' },
    { id: 12, category: 'window', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800', title: 'Home Windows', alt: 'Residential window cleaning' },
    { id: 13, category: 'window', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800', title: 'Storefront Glass', alt: 'Commercial windows' },
    { id: 14, category: 'furniture', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800', title: 'Leather Sofa', alt: 'Clean leather furniture' },
    { id: 15, category: 'furniture', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800', title: 'Fabric Couch', alt: 'Fresh fabric upholstery' },
    { id: 16, category: 'furniture', image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=800', title: 'Dining Chairs', alt: 'Spotless dining set' },
    { id: 17, category: 'furniture', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800', title: 'Office Chairs', alt: 'Professional furniture cleaning' },
    { id: 18, category: 'carpet', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800', title: 'Living Room Carpet', alt: 'Deep cleaned carpet' },
    { id: 19, category: 'carpet', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', title: 'Office Carpet', alt: 'Commercial carpet cleaning' },
    { id: 20, category: 'carpet', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800', title: 'Area Rugs', alt: 'Professional rug cleaning' },
    { id: 21, category: 'carpet', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800', title: 'Stair Carpet', alt: 'Stairway carpet cleaning' },
    { id: 22, category: 'carpet', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', title: 'Bedroom Carpet', alt: 'Fresh bedroom carpet' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleCardTouch = (id: number) => {
    setTouchedCard(touchedCard === id ? null : id);
  };

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="py-12 sm:py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-2 h-2 bg-lime-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-black rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/3 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-lime-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div 
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-lime-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow-lg mb-4 sm:mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Sparkles size={16} className="sm:w-[18px] sm:h-[18px] animate-pulse" />
            <span className="text-xs sm:text-sm tracking-wider">OUR WORK</span>
          </div>

          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="inline-block">Our Recent</span>{' '}
            <span className="inline-block bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent animate-gradient">
              Projects
            </span>
          </h2>

          <p 
            className={`text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4 transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Explore our portfolio of successful cleaning projects across various categories
          </p>
        </div>

        {/* Filter Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-bold transition-all duration-300 transform active:scale-95 touch-manipulation ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-lime-500 to-lime-600 text-white shadow-lg scale-105 animate-bounce-soft'
                  : 'bg-white text-black border-2 border-gray-200 hover:border-lime-500 active:border-lime-500 shadow-md hover:shadow-lg active:shadow-xl'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                animation: activeFilter === category.id ? 'pulse 2s ease-in-out infinite' : 'none'
              }}
            >
              <span className={`transform transition-transform duration-300 ${
                activeFilter === category.id ? 'rotate-12 scale-110' : 'group-hover:rotate-12 group-hover:scale-110 group-active:rotate-180'
              }`}>
                {category.icon}
              </span>
              <span className="text-xs sm:text-base whitespace-nowrap">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isActive = hoveredCard === item.id || touchedCard === item.id;
            
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-700 transform cursor-pointer bg-white touch-manipulation ${
                  isActive ? '-translate-y-2 shadow-2xl scale-105' : 'hover:-translate-y-2 hover:shadow-2xl active:-translate-y-1'
                } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animation: `fadeIn 0.6s ease-in-out ${index * 0.1}s backwards`
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardTouch(item.id)}
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isActive ? 'scale-110 rotate-2' : 'group-hover:scale-110 group-hover:rotate-2 group-active:scale-110'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></div>
                  
                  {/* Lime Green Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-lime-500 transition-all duration-500 transform rounded-bl-3xl ${
                    isActive ? 'opacity-80 translate-x-0 translate-y-0' : 'opacity-0 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-80'
                  }`}>
                    <Eye className="absolute bottom-2 left-2 text-white w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform transition-transform duration-500 ${
                    isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                  }`}>
                    <h3 className="text-white font-black text-lg sm:text-2xl mb-2">{item.title}</h3>
                    <div className={`w-12 sm:w-16 h-1 bg-lime-500 rounded transform transition-transform duration-500 ${
                      isActive ? 'scale-x-100 delay-200' : 'scale-x-0 group-hover:scale-x-100 group-hover:delay-200'
                    }`}></div>
                  </div>

                  {/* View Details Button */}
                  <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'
                  }`}>
                    <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-lime-500 hover:text-white active:bg-lime-600 transition-all duration-300 shadow-2xl text-sm sm:text-base whitespace-nowrap">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Card Border Animation */}
                <div className={`absolute inset-0 border-2 sm:border-4 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none ${
                  isActive ? 'border-lime-500' : 'border-transparent group-hover:border-lime-500'
                }`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-lime-500 to-lime-600 rounded-2xl sm:rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${
                  isActive ? 'opacity-20' : 'opacity-0 group-hover:opacity-20'
                }`}></div>

                {/* Pulse Animation on Active */}
                {isActive && (
                  <div className="absolute inset-0 border-4 border-lime-500 rounded-2xl sm:rounded-3xl animate-ping opacity-75 pointer-events-none"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div 
          className={`text-center mt-12 sm:mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button className="group bg-black hover:bg-lime-500 active:bg-lime-600 text-white px-8 sm:px-12 py-3 sm:py-5 rounded-full font-black text-base sm:text-lg shadow-2xl hover:shadow-lime-500/50 active:shadow-lime-500/70 transform hover:-translate-y-2 active:-translate-y-1 transition-all duration-300 border-2 sm:border-4 border-lime-500 hover:border-white touch-manipulation">
            <span className="flex items-center gap-2 sm:gap-3">
              Load More Projects
              <Sparkles className="transform group-hover:rotate-180 group-active:rotate-360 transition-transform duration-500 w-5 h-5 sm:w-6 sm:h-6" />
            </span>
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-soft {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-bounce-soft {
          animation: bounce-soft 2s ease-in-out infinite;
        }

        /* Smooth scrolling for mobile */
        @media (max-width: 640px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }

        /* Enhanced touch feedback */
        .touch-manipulation {
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;