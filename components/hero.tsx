'use client';
import React, { useEffect, useState } from 'react';
import { Sparkles, Award, Star, CheckCircle2, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Excellence', 'Quality', 'Trust', 'Care'];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-20 md:pt-36 pb-12 md:pb-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden min-h-screen flex items-center">
      {/* Elegant Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, #84cc16 1px, transparent 1px),
              linear-gradient(to bottom, #84cc16 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        {/* Floating Orbs - Hidden on small mobile */}
        <div className="hidden sm:block absolute top-20 right-20 w-2 h-2 bg-lime-500 rounded-full animate-ping opacity-75"></div>
        <div className="hidden sm:block absolute top-40 left-20 w-3 h-3 bg-lime-500 rounded-full animate-pulse opacity-50"></div>
        <div className="hidden sm:block absolute bottom-40 right-1/4 w-2 h-2 bg-lime-400 rounded-full animate-bounce"></div>
        
        {/* Large Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-lime-200/30 via-lime-100/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-gradient-to-tr from-gray-200/40 via-gray-100/30 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Decorative Lines */}
        <div className="hidden md:block absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-lime-500 to-transparent"></div>
        <div className="hidden md:block absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-lime-500 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Elegant Badge */}
            <div 
              className={`inline-flex items-center gap-2 md:gap-3 bg-white border-2 border-lime-500/20 text-black px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg shadow-lime-500/10 backdrop-blur-sm transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
              <span className="font-bold text-xs md:text-sm tracking-wider uppercase">Professional Cleaning</span>
              <Sparkles className="text-lime-500" size={14} />
            </div>
            
            {/* Main Heading with Elegant Animation */}
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span 
                  className={`inline-block transform transition-all duration-700 delay-100 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  Where
                </span>
                <br />
                <span 
                  className={`inline-block relative transform transition-all duration-700 delay-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <span className="relative z-10 bg-gradient-to-r from-lime-500 via-lime-600 to-lime-500 bg-clip-text text-transparent">
                    {words[currentWord]}
                  </span>
                </span>
                <br />
                <span 
                  className={`inline-block transform transition-all duration-700 delay-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  Meets Perfection
                </span>
              </h1>
            </div>
            
            {/* Description with Elegant Typography */}
            <p 
              className={`text-gray-600 text-base md:text-lg leading-relaxed max-w-xl transform transition-all duration-1000 delay-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Experience premium cleaning services tailored to your needs. We deliver 
              <span className="font-bold text-black"> exceptional results</span> with 
              <span className="font-bold text-black"> attention to detail</span> in every project.
            </p>
            
            {/* Feature Points */}
            <div 
              className={`space-y-3 w-full max-w-md transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {['Eco-Friendly Products', 'Expert Team', '100% Satisfaction Guaranteed'].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group cursor-pointer justify-center lg:justify-start"
                  style={{ transitionDelay: `${900 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-lime-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all shadow-md">
                    <CheckCircle2 className="text-white" size={16} strokeWidth={3} />
                  </div>
                  <span className="text-black font-semibold group-hover:text-lime-600 transition-colors text-sm md:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Stats Cards with Elegant Design */}
            <div 
              className={`flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start transform transition-all duration-1000 delay-1100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="group relative bg-white border-2 border-gray-200 hover:border-lime-500 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center gap-2 md:gap-3">
                  <Award className="text-lime-500 group-hover:text-white group-hover:rotate-12 transition-all" size={24} />
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-black group-hover:text-white transition-colors">4+</p>
                    <p className="text-xs md:text-sm text-gray-600 group-hover:text-white/90 font-semibold transition-colors">Years Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative bg-white border-2 border-gray-200 hover:border-lime-500 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-lime-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center gap-2 md:gap-3">
                  <Star className="text-lime-500 group-hover:text-white group-hover:scale-110 transition-all fill-lime-500 group-hover:fill-white" size={24} />
                  <div>
                    <p className="text-2xl md:text-3xl font-black text-black group-hover:text-white transition-colors">5K+</p>
                    <p className="text-xs md:text-sm text-gray-600 group-hover:text-white/90 font-semibold transition-colors">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Single CTA Button */}
            <div 
              className={`pt-2 md:pt-4 transform transition-all duration-1000 delay-1300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <button className="group relative inline-flex items-center gap-2 md:gap-3 bg-black text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-black text-base md:text-lg transition-all shadow-2xl hover:shadow-black/50 overflow-hidden w-full sm:w-auto justify-center">
                <span className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="relative z-10 transform group-hover:translate-x-2 transition-transform" size={20} />
              </button>
            </div>
          </div>

          {/* Right Content - Elegant Image Layout */}
          <div 
            className={`relative transform transition-all duration-1000 delay-500 mt-8 lg:mt-0 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            {/* Main Image Container */}
            <div className="relative z-10 group">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-lime-500/20 via-lime-400/10 to-transparent rounded-2xl md:rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              
              {/* Image Container with Clean Border */}
              <div className="relative bg-white p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-2xl transform group-hover:-translate-y-3 transition-all duration-500 border-2 border-gray-100">
                <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=700&fit=crop" 
                    alt="Professional cleaner with yellow gloves"
                    className="rounded-xl md:rounded-2xl w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className="text-lime-500 fill-lime-500" />
                        ))}
                      </div>
                      <span className="text-xs font-black text-black">5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Gallery Card */}
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 z-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-100 transform hover:-translate-y-2 transition-all duration-300">
                <div className="p-3 md:p-4">
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {[
                      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&h=200&fit=crop',
                      'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop',
                      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop'
                    ].map((img, index) => (
                      <div key={index} className="relative overflow-hidden rounded-lg md:rounded-xl group/img aspect-square">
                        <img 
                          src={img}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-lime-500/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 md:mt-3 flex items-center justify-between">
                    <span className="text-xs md:text-sm font-bold text-gray-600">Our Recent Work</span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-lime-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-lime-500 rounded-3xl rotate-12 opacity-20 blur-sm animate-pulse"></div>
            <div className="hidden md:block absolute -bottom-6 -left-6 w-20 h-20 bg-gray-300 rounded-3xl -rotate-12 opacity-20 blur-sm"></div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(5deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-30px, 30px) rotate(-5deg);
          }
          66% {
            transform: translate(20px, -20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;