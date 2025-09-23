"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '#/components/ui/Button';
import { cn } from '#/utils/cn';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // initialize theme from localStorage or system
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setIsDarkMode(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.dataset.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.dataset.theme = 'light';
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.dataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.dataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // lock body scroll when drawer open (mobile)
    if (isMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalStyle; };
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg dark:bg-gray-900/80"
            : "bg-transparent"
        , isMenuOpen && "pointer-events-none")}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aryandi
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Dark mode toggle - hidden when drawer open to avoid overlap with close */}
              {!isMenuOpen && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}

              {/* Mobile menu button */}
              {!isMenuOpen && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(true)}
                  className="md:hidden p-2"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[70] md:hidden transition-all duration-300",
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
      >
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[75]" onClick={() => setIsMenuOpen(false)} />
        <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 overflow-y-auto z-[80]" role="dialog" aria-modal="true">
          <div className="flex flex-col h-full">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800 pointer-events-auto">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Menu</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile navigation */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>

            {/* Mobile menu footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="flex items-center space-x-2"
                >
                  {isDarkMode ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  <span>{isDarkMode ? 'Light' : 'Dark'}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
