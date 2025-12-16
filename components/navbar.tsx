'use client';
import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Menu, X, Facebook, Twitter, Linkedin, Instagram, Search, Sparkles } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/logo.jpeg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            {/* Top Bar */}
            <div className="bg-black text-white py-3 px-4">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
                    <div className="flex flex-wrap gap-4 md:gap-8">
                        <a href="mailto:envato@gmail.com" className="flex items-center gap-2 hover:text-lime-400 transition">
                            <Mail size={16} />
                            <span className="hidden sm:inline">SSwestCoast@gmail.com</span>
                            <span className="sm:hidden">Mail to us</span>
                        </a>
                        <a href="tel:+1235462357" className="flex items-center gap-2 hover:text-lime-400 transition">
                            <Phone size={16} />
                            <span className="font-semibold">(+123) 5462 3257</span>
                        </a>
                    </div>
                    <div className="hidden lg:flex gap-8">
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>Sunday - Friday: 9am - 8pm</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>380 Albert St, Melbourne Australia</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-14 h-14">
                            <Image
                                src={logo}
                                alt="Bixol Logo"
                                width={56}
                                height={56}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-3xl font-bold text-black">SSwestCoast</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-10">
                        <a href="#home" className="text-black hover:text-lime-500 font-medium transition relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-500 group-hover:w-full transition-all"></span>
                        </a>
                        <a href="#pages" className="text-black hover:text-lime-500 font-medium transition relative group">
                            Pages
                        </a>
                        <a href="#services" className="text-black hover:text-lime-500 font-medium transition relative group">
                            Services
                        </a>
                        <a href="#portfolio" className="text-black hover:text-lime-500 font-medium transition relative group">
                            Portfolio
                        </a>
                        <a href="#blog" className="text-black hover:text-lime-500 font-medium transition relative group">
                            Blog
                        </a>
                        <a href="#elements" className="text-black hover:text-lime-500 font-medium transition relative group">
                            Elements
                        </a>
                        <button className="text-black hover:text-lime-500 transition">
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Social Icons & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex gap-4">
                            <Facebook size={18} className="text-gray-600 hover:text-lime-500 cursor-pointer transition" />
                            <Twitter size={18} className="text-gray-600 hover:text-lime-500 cursor-pointer transition" />
                            <Linkedin size={18} className="text-gray-600 hover:text-lime-500 cursor-pointer transition" />
                            <Instagram size={18} className="text-gray-600 hover:text-lime-500 cursor-pointer transition" />
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden pb-4 space-y-2 border-t pt-4">
                        <a href="#home" className="block text-black hover:text-lime-500 font-medium transition py-2 px-2 hover:bg-gray-50 rounded">Home</a>
                        <a href="#pages" className="block text-black hover:text-lime-500 font-medium transition py-2 px-2 hover:bg-gray-50 rounded">Pages</a>
                        <a href="#services" className="block text-black hover:text-lime-500 font-medium transition py-2 px-2 hover:bg-gray-50 rounded">Services</a>
                        <a href="#portfolio" className="block text-black hover:text-lime-500 font-medium transition py-2 px-2 hover:bg-gray-50 rounded">Portfolio</a>
                        <a href="#blog" className="block text-black hover:text-lime-500 font-medium transition py-2 px-2 hover:bg-gray-50 rounded">Blog</a>
                        <a href="#elements" className="block text-black hover:text-lime-500 font-medium transition py-2 px-2 hover:bg-gray-50 rounded">Elements</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;