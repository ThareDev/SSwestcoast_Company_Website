'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Check, Award, Trophy, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clientCount, setClientCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter Animation
  useEffect(() => {
    if (isVisible) {
      const clientTarget = 10;
      const yearsTarget = 12;
      const duration = 2000;
      const steps = 50;
      const clientIncrement = clientTarget / steps;
      const yearsIncrement = yearsTarget / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setClientCount(Math.min(Math.floor(clientIncrement * currentStep), clientTarget));
        setYearsCount(Math.min(Math.floor(yearsIncrement * currentStep), yearsTarget));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-2 h-2 bg-lime-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-black rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-br from-lime-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div 
            className={`relative transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            {/* Client Badge - Floating */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
              <div className="bg-black text-white rounded-full w-40 h-40 flex flex-col items-center justify-center shadow-2xl border-8 border-white">
                <p className="text-5xl font-black">{clientCount}k+</p>
                <p className="text-sm font-bold text-lime-400 tracking-wider">Clients</p>
              </div>
            </div>

            {/* Main Image Container */}
            <div className="relative mt-16 group">
              {/* Background Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-lime-500 via-lime-400 to-lime-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-20"></div>
              
              {/* Image Container */}
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl transform group-hover:-translate-y-2 transition-all duration-300 border-4 border-black">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                    alt="Professional cleaning team meeting"
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Sparkle Effects */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                  <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-lime-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
                  <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-200"></div>
                </div>
              </div>

              {/* Side Image */}
              <div className="absolute -left-8 -bottom-8 w-48 h-64 bg-gradient-to-br from-black to-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-white transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=300&h=400&fit=crop" 
                  alt="Professional cleaner"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-lime-500 rounded-2xl -rotate-12 animate-pulse opacity-80 shadow-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-black rounded-2xl rotate-12 opacity-80 shadow-xl"></div>
            
            {/* Background Gradient Orbs */}
            <div className="absolute top-1/4 -left-12 w-72 h-72 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-gradient-to-tr from-gray-800 to-black rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8">
            {/* Section Badge */}
            <div 
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-lime-400 text-black px-6 py-3 rounded-full font-bold shadow-lg transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <TrendingUp size={18} />
              <span className="text-sm tracking-wider">ABOUT CLEANING AGENCY</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 
                className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight transform transition-all duration-1000 delay-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <span className="inline-block">Why will you</span>{' '}
                <span className="inline-block">choose</span>
                <br />
                <span className="inline-block bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
                  our services?
                </span>
              </h2>
            </div>

            {/* Description */}
            <div 
              className={`space-y-4 transform transition-all duration-1000 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <p className="text-gray-600 text-lg leading-relaxed font-semibold">
                Efficient, Friendly, Residential & Commercial Cleaners Near Australia, 
                your satisfaction is guaranteed!
              </p>
              <p className="text-gray-500 leading-relaxed">
                As a app web crawler expert, I help organizations adjust to the awesome 
                expanding significance of internet promoting. or lipsum as it is some times 
                known, is dummy text.
              </p>
            </div>

            {/* Service List */}
            <div 
              className={`space-y-4 transform transition-all duration-1000 delay-600 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {[
                'Residential Cleaning Services Near You!',
                'Commercial Cleaning Service In Australia.',
                'Professional Floor & Carpet Cleaning.'
              ].map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 group cursor-pointer transform hover:translate-x-2 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all shadow-lg">
                    <Check className="text-white" size={20} strokeWidth={3} />
                  </div>
                  <span className="text-black font-semibold text-lg group-hover:text-lime-600 transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Experience Card */}
            <div 
              className={`transform transition-all duration-1000 delay-800 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="inline-flex items-center gap-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-6 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-2 transition-all duration-300 border-4 border-white">
                <div className="bg-white rounded-xl p-4 transform hover:rotate-12 transition-transform">
                  <Trophy className="text-blue-500" size={40} />
                </div>
                <div>
                  <p className="text-5xl font-black">{yearsCount}+</p>
                  <p className="text-lg font-bold">Years Experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;