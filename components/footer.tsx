'use client';
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Dribbble, Linkedin, ArrowUp, Sparkles } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/logo.jpeg'

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribed:', email);
    setEmail('');
  };

  const instagramImages = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=200&h=200&fit=crop',
    'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=200&h=200&fit=crop'
  ];

  return (
    <footer className="bg-black text-white relative mt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-lime-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-20 w-3 h-3 bg-lime-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-lime-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Logo Circle at Top Center */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-16 h-16 mx-auto mb-2">
              <Image
                src={logo}
                alt="SSwestcoast Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-m font-black text-black">SSwestcoast</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-8 relative z-10 overflow-hidden">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - About */}
          <div className="space-y-6 transform hover:translate-x-2 transition-all duration-300">
            <h3 className="text-2xl font-black mb-6">
              We are <span className="text-lime-500">SSwestcoast!</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We work with a passion of taking challenges and creating new ones in advertising sector.
            </p>
            <div className="space-y-3">
              <h4 className="text-white font-bold text-lg">Open Hours:</h4>
              <p className="text-gray-400">Mon – Sat: 8 am – 5 pm,</p>
              <p className="text-gray-400">Sunday: CLOSED</p>
            </div>
          </div>

          {/* Column 2 - Newsletter */}
          <div className="space-y-6 transform hover:translate-x-2 transition-all duration-300">
            <h3 className="text-2xl font-black mb-6">Newsletter</h3>
            <p className="text-gray-400 leading-relaxed">
              Subscribe our newsletter to get our latest update & news
            </p>
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your mail address"
                className="w-full bg-gray-900 text-white px-6 py-4 rounded-lg pr-14 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-300 placeholder-gray-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-lime-500 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Send size={20} />
              </button>
            </form>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Facebook size={20} />, color: 'hover:bg-blue-600' },
                { icon: <Twitter size={20} />, color: 'hover:bg-blue-400' },
                { icon: <Dribbble size={20} />, color: 'hover:bg-pink-500' },
                { icon: <Linkedin size={20} />, color: 'hover:bg-blue-700' }
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 bg-gray-900 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3 - Official Info */}
          <div className="space-y-6 transform hover:translate-x-2 transition-all duration-300">
            <h3 className="text-2xl font-black mb-6">Official info:</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-lime-500 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="text-lime-500 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-lime-500 transition-colors">30 Commercial Road</p>
                  <p className="text-gray-400">Fratton, Australia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-lime-500 transition-all duration-300 group-hover:scale-110">
                  <Phone className="text-lime-500 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <a href="tel:1-888-452-1505" className="text-white font-semibold group-hover:text-lime-500 transition-colors block">
                    1-888-452-1505
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-lime-500 transition-all duration-300 group-hover:scale-110">
                  <Mail className="text-lime-500 group-hover:text-white transition-colors" size={20} />
                </div>
                <div>
                  <a href="mailto:envato@gmail.com" className="text-white font-semibold group-hover:text-lime-500 transition-colors block">
                    SSwestcoast@gmail.com
                  </a>
                  <a href="mailto:info@mail.com" className="text-gray-400 hover:text-lime-500 transition-colors">
                    info@mail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Instagram */}
          <div className="space-y-6 transform hover:translate-x-2 transition-all duration-300">
            <h3 className="text-2xl font-black mb-6">Instagram</h3>
            <div className="grid grid-cols-3 gap-3">
              {instagramImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                  style={{
                    animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s backwards`
                  }}
                >
                  <img
                    src={image}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-lime-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            Copyright © 2024 <span className="text-lime-500 font-bold">SSwestcoast.com.au</span>. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-lime-500 text-white p-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50 group"
        >
          <ArrowUp size={24} className="group-hover:animate-bounce" />
        </button>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;