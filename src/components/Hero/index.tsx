"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '#/components/ui/Button';
import { personalInfo } from '#/utils/constants';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-[100svh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 md:pt-28"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 mb-6 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="inline-block relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-6">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              {personalInfo.title}
            </h2>
          </div>

          {/* Bio */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {personalInfo.bio}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <MapPin className="h-5 w-5" />
            <span>{personalInfo.contact.location}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <Button
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(personalInfo.contact.github, '_blank')}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
