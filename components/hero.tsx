'use client';
import React, { useEffect, useState } from 'react';
import { Users, Settings, Sparkles, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="pt-36 pb-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-lime-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-black rounded-full animate-bounce opacity-50"></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-br from-lime-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge with Animation */}
            <div 
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-black via-gray-800 to-black text-white px-6 py-3 rounded-full border border-lime-500/20 shadow-xl transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <TrendingUp className="text-lime-400" size={18} />
              <span className="font-semibold text-sm tracking-wider">OUR PROGRESSION</span>
              <Sparkles className="text-lime-400 animate-pulse" size={16} />
            </div>
            
            {/* Main Heading with Staggered Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span 
                  className={`inline-block transform transition-all duration-700 delay-100 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  We are
                </span>
                <br />
                <span 
                  className={`inline-block bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent transform transition-all duration-700 delay-300 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  professional
                </span>
                <br />
                <span 
                  className={`inline-block transform transition-all duration-700 delay-500 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  cleaning{' '}
                </span>
                <span 
                  className={`inline-block relative transform transition-all duration-700 delay-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <span className="relative z-10 bg-gradient-to-r from-lime-500 via-lime-400 to-lime-500 bg-clip-text text-transparent font-black">
                    services
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-lime-500/20 rounded blur-sm"></span>
                </span>
              </h1>
            </div>
            
            {/* Description with Fade-in */}
            <p 
              className={`text-gray-600 text-lg leading-relaxed max-w-xl transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              We are committed to the{' '}
              <span className="font-bold text-black">best quality</span> in the field of{' '}
              <span className="font-bold text-black">industrial cleaning</span>,{' '}
              <span className="font-bold text-black">home and garden cleaning</span>.
            </p>
            
            {/* Stats Cards */}
            <div 
              className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="bg-white border-2 border-black rounded-2xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Award className="text-lime-500 group-hover:rotate-12 transition-transform" size={28} />
                  <div>
                    <p className="text-3xl font-black text-black">15+</p>
                    <p className="text-sm text-gray-600 font-semibold">Years Experience</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black border-2 border-lime-500 rounded-2xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-lime-400 group-hover:scale-110 transition-transform" size={28} />
                  <div>
                    <p className="text-3xl font-black text-white">5000+</p>
                    <p className="text-sm text-gray-300 font-semibold">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 pt-6 transform transition-all duration-1000 delay-1100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <button className="group relative bg-lime-500 hover:bg-lime-600 text-black px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-3 shadow-2xl hover:shadow-lime-500/50 overflow-hidden">
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <Users className="relative z-10 group-hover:scale-110 transition-transform" size={24} />
                <span className="relative z-10">About us</span>
              </button>
              
              <button className="group relative bg-black hover:bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-3 shadow-2xl hover:shadow-black/50 border-2 border-white overflow-hidden">
                <span className="absolute inset-0 bg-lime-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <Settings className="relative z-10 group-hover:rotate-90 transition-transform duration-300" size={24} />
                <span className="relative z-10">Services</span>
              </button>
            </div>
          </div>

          {/* Right Content - Images with Enhanced Animations */}
          <div 
            className={`relative transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            {/* Main Image Container with Border */}
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-500 to-black rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=700&fit=crop" 
                  alt="Professional cleaner with yellow gloves"
                  className="rounded-2xl w-full h-[600px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Video Thumbnail Card with Enhanced Design */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-8 pb-8">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-black transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-2 p-3">
                    <div className="relative overflow-hidden rounded-lg group/img">
                      <img 
                        src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=300&h=200&fit=crop" 
                        alt="Cleaning supplies"
                        className="w-full h-32 object-cover transform group-hover/img:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg group/img">
                      <img 
                        src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop" 
                        alt="Cleaning professional"
                        className="w-full h-32 object-cover transform group-hover/img:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="relative group/btn">
                      <div className="absolute inset-0 bg-lime-500 rounded-full blur-xl opacity-50 group-hover/btn:opacity-75 animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-black to-gray-900 hover:from-lime-500 hover:to-lime-600 text-white rounded-full p-6 shadow-2xl transition-all transform group-hover/btn:scale-110 border-4 border-white">
                        <svg className="w-8 h-8 ml-1 group-hover/btn:ml-2 transition-all" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime-500 rounded-2xl rotate-12 animate-bounce opacity-80 shadow-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-black rounded-2xl -rotate-12 animate-pulse opacity-80 shadow-xl"></div>
            
            {/* Decorative Gradient Orbs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-gray-800 to-black rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;