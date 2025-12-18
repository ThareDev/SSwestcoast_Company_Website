'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Home, Building2, Sparkles, Square, Sofa, Droplets, Car, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
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

  const services = [
    {
      icon: <Home size={40} />,
      title: 'Home Cleaning',
      shortDesc: 'Professional residential cleaning',
      fullDesc: 'Complete home cleaning services including dusting, vacuuming, mopping, and sanitizing all living spaces.',
      features: ['Deep cleaning', 'Regular maintenance', 'Eco-friendly products', 'Flexible scheduling']
    },
    {
      icon: <Building2 size={40} />,
      title: 'Office Cleaning',
      shortDesc: 'Commercial space solutions',
      fullDesc: 'Comprehensive office cleaning including workstations, meeting rooms, restrooms, and common areas.',
      features: ['After-hours service', 'Disinfection', 'Window cleaning', 'Floor maintenance']
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Deep Cleaning',
      shortDesc: 'Thorough intensive cleaning',
      fullDesc: 'Intensive cleaning service covering every corner, appliances, fixtures, and hard-to-reach areas.',
      features: ['Carpet shampooing', 'Appliance cleaning', 'Wall washing', 'Detailed sanitation']
    },
    {
      icon: <Square size={40} />,
      title: 'Window Cleaning',
      shortDesc: 'Crystal clear windows',
      fullDesc: 'Expert window cleaning for residential and commercial properties, inside and out.',
      features: ['Streak-free finish', 'High-rise capable', 'Frame cleaning', 'Screen cleaning']
    },
    {
      icon: <Sofa size={40} />,
      title: 'Furniture Cleaning',
      shortDesc: 'Upholstery care services',
      fullDesc: 'Professional furniture and upholstery cleaning to remove stains, odors, and allergens.',
      features: ['Stain removal', 'Fabric protection', 'Odor elimination', 'Color restoration']
    },
    {
      icon: <Droplets size={40} />,
      title: 'Carpet Cleaning',
      shortDesc: 'Professional carpet care',
      fullDesc: 'Deep carpet cleaning using advanced equipment and techniques for a fresh, clean finish.',
      features: ['Steam cleaning', 'Stain treatment', 'Pet odor removal', 'Fast drying']
    },
    {
      icon: <Car size={40} />,
      title: 'Car Detailing',
      shortDesc: 'Complete vehicle care',
      fullDesc: 'Professional auto detailing services including interior and exterior cleaning, waxing, and protection.',
      features: ['Interior vacuuming', 'Exterior wash & wax', 'Engine cleaning', 'Paint protection']
    }
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-20 px-4 bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-lime-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-lime-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-lime-500/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-lime-400/10 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-lime-400 text-black px-6 py-3 rounded-full font-bold shadow-lg mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Sparkles size={18} />
            <span className="text-sm tracking-wider">OUR SERVICES</span>
          </div>

          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Professional Cleaning{' '}
            <span className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Comprehensive cleaning solutions tailored to your needs with exceptional quality and care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`group relative transform transition-all duration-700 cursor-pointer ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div className={`relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${
                activeCard === index 
                  ? 'shadow-lime-500/50 -translate-y-4' 
                  : 'hover:shadow-lime-500/50 hover:-translate-y-4'
              }`}>
                {/* Lime Green Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-lime-500 to-lime-600 transition-opacity duration-500 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
                
                {/* Content Container */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <div className={`w-20 h-20 bg-lime-50 rounded-2xl flex items-center justify-center mb-6 transform transition-all duration-500 shadow-lg ${
                    activeCard === index 
                      ? 'bg-white scale-110 rotate-6' 
                      : 'group-hover:bg-white group-hover:scale-110 group-hover:rotate-6'
                  }`}>
                    <div className={`transition-colors duration-500 ${
                      activeCard === index ? 'text-lime-500' : 'text-gray-800 group-hover:text-lime-500'
                    }`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-black mb-3 transition-colors duration-500 ${
                    activeCard === index ? 'text-white' : 'text-black group-hover:text-white'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Short Description (Visible by default) */}
                  <p className={`transition-all duration-500 ${
                    activeCard === index 
                      ? 'opacity-0 h-0 mb-0' 
                      : 'opacity-100 h-auto mb-4 text-gray-600 group-hover:text-white/90 group-hover:opacity-0 group-hover:h-0 group-hover:mb-0'
                  }`}>
                    {service.shortDesc}
                  </p>

                  {/* Full Description (Visible on hover/active) */}
                  <div className={`transition-all duration-500 ${
                    activeCard === index 
                      ? 'opacity-100 max-h-96' 
                      : 'opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96'
                  } overflow-hidden`}>
                    <p className="text-white/90 mb-4 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className={`flex items-center gap-2 text-white/80 transition-all duration-300 ${
                            activeCard === index || activeCard === null
                              ? 'translate-x-0 opacity-100' 
                              : 'translate-x-0 opacity-100'
                          }`}
                          style={{ 
                            transitionDelay: `${idx * 50}ms`
                          }}
                        >
                          <CheckCircle size={16} className="text-white flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Learn More
                      <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Star Rating (Always Visible) */}
                  <div className="flex gap-1 mt-auto pt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={18}
                        className={`transition-all duration-300 ${
                          activeCard === index 
                            ? 'text-white fill-white' 
                            : 'text-lime-500 fill-lime-500 group-hover:text-white group-hover:fill-white'
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-3xl transition-opacity duration-500 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>
                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-white/20 rounded-tr-3xl transition-opacity duration-500 ${
                  activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></div>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl border-4 transition-all duration-500 ${
                  activeCard === index ? 'border-white/30' : 'border-transparent group-hover:border-white/30'
                }`}></div>
              </div>

              {/* Floating Shadow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-br from-lime-500 to-lime-600 rounded-3xl blur-xl transition-all duration-500 -z-10 ${
                activeCard === index ? 'opacity-20' : 'opacity-0 group-hover:opacity-20'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button className="group bg-gradient-to-r from-lime-500 to-lime-400 hover:from-lime-400 hover:to-lime-500 text-black px-12 py-5 rounded-full font-black text-lg shadow-2xl hover:shadow-lime-500/50 transform hover:-translate-y-2 transition-all duration-300 border-4 border-white">
            <span className="flex items-center gap-3">
              View All Services
              <ArrowRight className="transform group-hover:translate-x-2 transition-transform" size={24} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;