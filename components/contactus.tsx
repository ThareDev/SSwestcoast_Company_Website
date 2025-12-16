'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare, MapPin, Clock, CheckCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Visit Us',
      content: '380 Albert St, Melbourne',
      subContent: 'Australia'
    },
    {
      icon: <Phone size={28} />,
      title: 'Call Us',
      content: '(+123) 5462 3257',
      subContent: '1-888-452-1505'
    },
    {
      icon: <Mail size={28} />,
      title: 'Email Us',
      content: 'envato@gmail.com',
      subContent: 'info@mail.com'
    },
    {
      icon: <Clock size={28} />,
      title: 'Working Hours',
      content: 'Mon - Sat: 9am - 8pm',
      subContent: 'Sunday: CLOSED'
    }
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-lime-500 rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-black rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-lime-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div 
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-lime-400 text-black px-6 py-3 rounded-full font-bold shadow-lg mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <MessageSquare size={18} />
            <span className="text-sm tracking-wider">GET IN TOUCH</span>
          </div>

          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="inline-block">Contact</span>{' '}
            <span className="inline-block bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
              Us Today
            </span>
          </h2>

          <p 
            className={`text-gray-600 text-lg max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Have a question or need a quote? We're here to help you with all your cleaning needs
          </p>
        </div>

        {/* Contact Info Cards */}
        <div 
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {contactInfo.map((info, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 transform border-2 cursor-pointer overflow-hidden ${
                activeCard === index 
                  ? 'shadow-2xl -translate-y-3 border-lime-500' 
                  : 'border-transparent hover:shadow-2xl hover:-translate-y-3 hover:border-lime-500'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover/Active */}
              <div className={`absolute inset-0 bg-gradient-to-br from-lime-500 to-lime-600 transition-opacity duration-500 ${
                activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mb-4 transform transition-all duration-500 shadow-md ${
                  activeCard === index 
                    ? 'bg-white scale-110 rotate-6' 
                    : 'group-hover:bg-white group-hover:scale-110 group-hover:rotate-6'
                }`}>
                  <div className={`transition-colors duration-500 ${
                    activeCard === index ? 'text-lime-500' : 'text-black group-hover:text-lime-500'
                  }`}>
                    {info.icon}
                  </div>
                </div>

                {/* Content */}
                <h4 className={`text-lg font-black mb-2 transition-colors duration-500 ${
                  activeCard === index ? 'text-white' : 'text-black group-hover:text-white'
                }`}>
                  {info.title}
                </h4>
                <p className={`font-semibold transition-colors duration-500 ${
                  activeCard === index ? 'text-white/90' : 'text-gray-600 group-hover:text-white/90'
                }`}>
                  {info.content}
                </p>
                <p className={`text-sm transition-colors duration-500 ${
                  activeCard === index ? 'text-white/80' : 'text-gray-500 group-hover:text-white/80'
                }`}>
                  {info.subContent}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-bl-3xl transition-opacity duration-500 ${
                activeCard === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div 
          className={`max-w-4xl mx-auto transform transition-all duration-1000 delay-800 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-black overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-lime-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-black rounded-full opacity-10 blur-3xl"></div>

            {/* Success Message */}
            {isSuccess && (
              <div className="absolute inset-0 bg-lime-500 flex items-center justify-center z-50 rounded-3xl animate-fadeIn">
                <div className="text-center text-white">
                  <CheckCircle size={80} className="mx-auto mb-4 animate-bounce" />
                  <h3 className="text-3xl font-black mb-2">Message Sent!</h3>
                  <p className="text-lg">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <div className="relative z-10">
              <h3 className="text-3xl font-black mb-8 text-center">
                Send us a <span className="text-lime-500">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-lime-500 transition-colors" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-lime-500 focus:ring-4 focus:ring-lime-500/20 outline-none transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-lime-500 transition-colors" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-lime-500 focus:ring-4 focus:ring-lime-500/20 outline-none transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Subject Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-lime-500 transition-colors" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-lime-500 focus:ring-4 focus:ring-lime-500/20 outline-none transition-all duration-300"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-lime-500 transition-colors" size={20} />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-lime-500 focus:ring-4 focus:ring-lime-500/20 outline-none transition-all duration-300"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-gray-400 group-focus-within:text-lime-500 transition-colors" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-lime-500 focus:ring-4 focus:ring-lime-500/20 outline-none transition-all duration-300 resize-none"
                      placeholder="Tell us about your cleaning needs..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-black font-black text-lg py-5 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-500/50 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed border-4 border-white shadow-xl relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="transform group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" size={24} />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;