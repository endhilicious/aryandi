"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Code, Users, Award, Coffee } from 'lucide-react';
import { Card, CardContent } from '#/components/ui/Card';
import { AvatarImage } from '#/components/ui/ResponsiveImage';
import { personalInfo, experiences, teaching, organizations, speakerActivities, certificationsDetailed, honorsAwards } from '#/utils/constants';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Timeline items observer
  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            // Add delay based on index for staggered animation
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]));
            }, index * 200);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '-20px 0px -20px 0px'
      }
    );

    timelineItems.forEach(item => observer.observe(item));

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
      <style jsx>{`
        .timeline-item {
          will-change: transform, opacity;
        }
        .timeline-dot {
          will-change: transform, background-color, box-shadow;
        }
        .timeline-content {
          will-change: transform, opacity, box-shadow;
        }
        .tech-tag {
          will-change: transform, opacity;
        }
        .timeline-item:hover .timeline-dot {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }
        .timeline-item:hover .timeline-content {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .timeline-item:hover .tech-tag {
          transform: scale(1.05);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .timeline-dot:not(.visible) {
          animation: pulse 2s infinite;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={aboutRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I&apos;m a passionate developer who loves creating amazing digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Image and description */}
            <div className={`space-y-8 transition-all duration-800 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              {/* Modern background wrapper for the photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200/60 dark:ring-gray-800/60">
                {/* Gradient blobs background */}
                <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_0%_0%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(50%_60%_at_100%_100%,rgba(168,85,247,0.18),transparent_60%)]" />
                {/* Subtle grid overlay */}
                <div aria-hidden className="absolute inset-0 -z-10 opacity-20 mix-blend-overlay bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Decorative side elements to cover cropped areas */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent rounded-l-3xl" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-purple-500/20 via-purple-400/10 to-transparent rounded-r-3xl" />
                
                {/* Decorative geometric shapes on sides */}
                <div className="absolute left-4 top-8 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-lg rotate-45 blur-sm" />
                <div className="absolute left-6 bottom-12 w-6 h-6 bg-gradient-to-br from-indigo-400/40 to-indigo-600/40 rounded-full blur-sm" />
                <div className="absolute right-4 top-12 w-6 h-6 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-lg rotate-12 blur-sm" />
                <div className="absolute right-6 bottom-8 w-8 h-8 bg-gradient-to-br from-pink-400/25 to-pink-600/25 rounded-full blur-sm" />
                
                {/* Main image container */}
                <div className="relative w-full h-64 sm:h-72 backdrop-blur-[1px] flex items-center justify-center z-10">
                  <AvatarImage
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse z-20" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse z-20" style={{ animationDelay: '1s' }} />
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
            <div className={`grid grid-cols-2 gap-6 transition-all duration-800 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
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
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-1000" />
              {/* Animated progress line */}
              <div 
                className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                style={{ 
                  height: visibleItems.size > 0 ? `${(visibleItems.size / experiences.length) * 100}%` : '0%',
                  opacity: visibleItems.size > 0 ? 1 : 0
                }}
              />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => {
                  const isVisible = visibleItems.has(index);
                  return (
                      <div 
                        key={exp.id} 
                        className={`timeline-item relative flex items-start space-x-6 transition-all duration-700 ease-out ${
                          isVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-8'
                        }`}
                        data-index={index}
                        style={{ 
                          transitionDelay: `${index * 100}ms`,
                          willChange: 'transform, opacity'
                        }}
                      >
                      {/* Timeline dot */}
                      <div className={`timeline-dot flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 transition-all duration-700 ease-out ${
                        isVisible 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-100 shadow-lg shadow-blue-500/25' 
                          : 'bg-gray-300 dark:bg-gray-600 scale-75'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 100 + 200}ms`,
                        willChange: 'transform, background-color, box-shadow'
                      }}>
                        {index + 1}
                      </div>
                      
                      {/* Content */}
                      <Card className={`timeline-content flex-1 transition-all duration-700 ease-out ${
                        isVisible 
                          ? 'opacity-100 translate-y-0 shadow-lg shadow-gray-200/50 dark:shadow-gray-800/50' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 100 + 300}ms`,
                        willChange: 'transform, opacity, box-shadow'
                      }}>
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
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={tech}
                                className={`tech-tag px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium transition-all duration-500 ease-out ${
                                  isVisible 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-2'
                                }`}
                                style={{ 
                                  transitionDelay: `${index * 100 + 400 + techIndex * 100}ms`,
                                  willChange: 'transform, opacity'
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Teaching */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Teaching</h3>
                <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {teaching.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Organizations */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Organization</h3>
                <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {organizations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Speakers */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Speakers</h3>
                <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {speakerActivities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Certifications</h3>
                <ul className="space-y-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                  {certificationsDetailed.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Awards */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/10 dark:to-yellow-900/10 border-0">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Awards</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {honorsAwards.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/50 ring-1 ring-gray-200/60 dark:ring-gray-700/60">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
