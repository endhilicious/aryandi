"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Code, Users, Award, Coffee } from 'lucide-react';
import { Card, CardContent } from '#/components/ui/Card';
import { personalInfo, experiences } from '#/utils/constants';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Award, label: 'Years Experience', value: '4+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={aboutRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I&apos;m a passionate developer who loves creating amazing digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Image and description */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Hello! I&apos;m {personalInfo.name}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {personalInfo.bio}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  I specialize in building modern, responsive web applications using cutting-edge technologies. 
                  My goal is to create solutions that not only meet requirements but exceed expectations.
                </p>
              </div>
            </div>

            {/* Right side - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} hover className="text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg mb-4">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {stat.value}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                      {experiences.indexOf(exp) + 1}
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                            {exp.position}
                          </h4>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {exp.duration}
                          </span>
                        </div>
                        <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          {exp.company}
                        </h5>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Let&apos;s Work Together!
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  I&apos;m always interested in new opportunities and exciting projects. 
                  Let&apos;s discuss how we can bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Get In Touch
                  </button>
                  <button
                    onClick={() => window.open(personalInfo.contact.github, '_blank')}
                    className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    View My Work
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
