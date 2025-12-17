'use client';
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, MapPin, Menu, X, Facebook, Twitter, Linkedin, Instagram, Search, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import logo from '@/public/logo.jpeg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'services', 'about', 'portfolio', 'contact'];
            const scrollPosition = window.scrollY + 100;

            // Check if scrolled for navbar style
            setScrolled(window.scrollY > 20);

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'about', label: 'About' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
            }`}>
                {/* Top Bar - Hidden on mobile, shown on tablet+ */}
                <div className="bg-black text-white py-2.5 px-4 hidden md:block">
                    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-xs lg:text-sm">
                        <div className="flex flex-wrap gap-4 lg:gap-8">
                            <a href="mailto:info@sswestcoast.com.au" className="flex items-center gap-2 hover:text-lime-400 transition-colors duration-300">
                                <Mail size={14} />
                                <span>info@sswestcoast.com.au</span>
                            </a>
                            <a href="tel:+61411236714" className="flex items-center gap-2 hover:text-lime-400 transition-colors duration-300">
                                <Phone size={14} />
                                <span className="font-semibold">+61 411 236 714</span>
                            </a>
                        </div>
                        <div className="hidden lg:flex gap-6 xl:gap-8">
                            <div className="flex items-center gap-2">
                                <Clock size={14} />
                                <span>Sunday - Friday: 9am - 8pm</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} />
                                <span>48A Kyle Avenue, Bentley WA 6102</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-3 md:py-4">
                        {/* Logo */}
                        <button 
                            onClick={() => scrollToSection('home')}
                            className="flex items-center gap-2 cursor-pointer group"
                        >
                            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src={logo}
                                    alt="SSwestCoast Logo"
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-black group-hover:text-lime-500 transition-colors duration-300">
                                SS West Coast
                            </span>
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-black hover:text-lime-500 font-medium transition-all duration-300 relative group ${
                                        activeSection === item.id ? 'text-lime-500' : ''
                                    }`}
                                >
                                    {item.label}
                                    <span 
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-lime-500 transition-all duration-300 ${
                                            activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                    ></span>
                                </button>
                            ))}
                            <button className="text-black hover:text-lime-500 transition-all duration-300 hover:scale-110">
                                <Search size={20} />
                            </button>
                        </div>

                        {/* Right Side - Social Icons & Mobile Toggle */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Social Icons - Hidden on mobile */}
                            <div className="hidden md:flex gap-3 lg:gap-4">
                                <a href="#" className="text-gray-600 hover:text-lime-500 cursor-pointer transition-all duration-300 hover:scale-110">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-lime-500 cursor-pointer transition-all duration-300 hover:scale-110">
                                    <Twitter size={18} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-lime-500 cursor-pointer transition-all duration-300 hover:scale-110">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-lime-500 cursor-pointer transition-all duration-300 hover:scale-110">
                                    <Instagram size={18} />
                                </a>
                            </div>
                            
                            {/* Mobile Menu Button */}
                            <button 
                                onClick={() => setIsOpen(!isOpen)} 
                                className="lg:hidden text-black hover:text-lime-500 transition-all duration-300 p-2 hover:bg-gray-100 rounded-lg"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Slide-out Menu */}
            <div 
                className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Mobile Menu Header */}
                <div className="bg-gradient-to-r from-black to-gray-900 text-white p-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                            <Image
                                src={logo}
                                alt="SSwestCoast Logo"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl font-bold">Menu</span>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-lime-400 transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="p-6 space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`w-full text-left flex items-center justify-between group px-4 py-4 rounded-xl transition-all duration-300 ${
                                activeSection === item.id 
                                    ? 'bg-lime-500 text-white shadow-lg shadow-lime-500/30' 
                                    : 'text-gray-800 hover:bg-gray-100 hover:pl-6'
                            }`}
                            style={{ 
                                animationDelay: `${index * 50}ms`,
                                animation: isOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                            }}
                        >
                            <span className="font-semibold text-lg">{item.label}</span>
                            <ChevronRight 
                                size={20} 
                                className={`transition-transform duration-300 ${
                                    activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:translate-x-1'
                                }`}
                            />
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 to-transparent">
                    {/* Contact Info */}
                    <div className="mb-4 space-y-3 text-sm">
                        <a href="mailto:info@sswestcoast.com.au" className="flex items-center gap-3 text-gray-700 hover:text-lime-500 transition-colors duration-300">
                            <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center">
                                <Mail size={16} className="text-lime-600" />
                            </div>
                            <span className="font-medium">info@sswestcoast.com.au</span>
                        </a>
                        <a href="tel:+61411236714" className="flex items-center gap-3 text-gray-700 hover:text-lime-500 transition-colors duration-300">
                            <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center">
                                <Phone size={16} className="text-lime-600" />
                            </div>
                            <span className="font-medium">+61 411 236 714</span>
                        </a>
                        <a href="tel:+61423090602" className="flex items-center gap-3 text-gray-700 hover:text-lime-500 transition-colors duration-300">
                            <div className="w-8 h-8 bg-lime-100 rounded-lg flex items-center justify-center">
                                <Phone size={16} className="text-lime-600" />
                            </div>
                            <span className="font-medium">+61 423 090 602</span>
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lime-500 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lime-500 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lime-500 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-lime-500 text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Animation Keyframes */}
            <style jsx>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;