"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { personalInfo } from '#/utils/constants';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to show/hide buttons
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in your services. Can we discuss a project?");
    const whatsappUrl = `https://wa.me/${personalInfo.contact.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };


  if (!isScrolled) return null;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <button
          onClick={openWhatsApp}
          className="group relative w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
          aria-label="Contact via WhatsApp"
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
          
          {/* Icon */}
          <WhatsAppIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat via WhatsApp
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <button
          onClick={scrollToTop}
          className="group relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
          
          {/* Icon */}
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          
          {/* Tooltip */}
          <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
          </div>
        </button>
      </div>


      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
          style={{
            width: `${Math.min(100, (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
          }}
        />
      </div>
    </>
  );
};

export default FloatingButtons;
