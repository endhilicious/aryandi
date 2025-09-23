"use client";

import React from 'react';
import Header from '#/components/Header';
import Hero from '#/components/Hero';
import About from '#/components/About';
import Resume from '#/components/Resume';
import Skills from '#/components/Skills';
import Projects from '#/components/Projects';
import Contact from '#/components/Contact';
import Footer from '#/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
