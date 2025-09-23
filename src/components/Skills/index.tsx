"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Target, Handshake, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/Card';
import { specializingIn } from '#/utils/constants';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={skillsRef} className="max-w-6xl mx-auto">
          {/* Specializing In */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                Specializing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {specializingIn.map((label) => {
                const colorMap: Record<string, string> = {
                  Javascript: 'from-yellow-300 to-yellow-500',
                  'HTML CSS': 'from-orange-400 to-pink-500',
                  Nextjs: 'from-gray-700 to-black',
                  Typescript: 'from-blue-500 to-blue-700',
                  Ionic: 'from-indigo-400 to-indigo-600',
                  Redux: 'from-purple-500 to-purple-700',
                  Storybook: 'from-pink-500 to-rose-600',
                  Gatsby: 'from-violet-500 to-purple-700',
                  'React Testing Library': 'from-red-400 to-red-600',
                  'React Native': 'from-cyan-500 to-blue-600',
                  'React Query': 'from-rose-400 to-rose-600',
                  'Material UI': 'from-blue-400 to-blue-600',
                  React: 'from-cyan-400 to-blue-500',
                  GraphQL: 'from-pink-500 to-fuchsia-600',
                  Jest: 'from-red-500 to-rose-700',
                  Figma: 'from-amber-400 to-rose-500',
                  Tailwind: 'from-sky-400 to-sky-600',
                  Bootstrap: 'from-violet-500 to-indigo-700',
                  Jquery: 'from-blue-400 to-blue-700',
                  Firebase: 'from-amber-400 to-orange-600',
                  Supabase: 'from-emerald-400 to-emerald-600',
                  MySQL: 'from-blue-500 to-blue-700',
                  Codeigniter: 'from-orange-500 to-red-600',
                  AWS: 'from-orange-400 to-yellow-500',
                  Docker: 'from-blue-400 to-blue-600',
                  Jira: 'from-blue-500 to-blue-700',
                  'Semantic HTML': 'from-orange-400 to-amber-600',
                  Vue: 'from-emerald-400 to-green-600',
                  Trello: 'from-sky-400 to-sky-600'
                };
                const gradient = colorMap[label] || 'from-slate-400 to-slate-600';
                const iconMap: Record<string, string> = {
                  Javascript: '/images/js.png',
                  'HTML CSS': '/images/image103.png',
                  Nextjs: '/images/image103.png',
                  Typescript: '/images/image103.png',
                  Ionic: '/images/image103.png',
                  Redux: '/images/image103.png',
                  Storybook: '/images/image103.png',
                  Gatsby: '/images/image103.png',
                  'React Testing Library': '/images/image103.png',
                  'React Native': '/images/image103.png',
                  'React Query': '/images/image103.png',
                  'Material UI': '/images/image103.png',
                  React: '/images/image103.png',
                  GraphQL: '/images/image103.png',
                  Jest: '/images/image103.png',
                  Figma: '/images/image103.png',
                  Tailwind: '/images/image103.png',
                  Bootstrap: '/images/image103.png',
                  Jquery: '/images/image103.png',
                  Firebase: '/images/image103.png',
                  Supabase: '/images/image103.png',
                  MySQL: '/images/image103.png',
                  Codeigniter: '/images/image103.png',
                  AWS: '/images/image103.png',
                  Docker: '/images/image103.png',
                  Jira: '/images/image103.png',
                  'Semantic HTML': '/images/image103.png',
                  Vue: '/images/image103.png',
                  Trello: '/images/image103.png'
                };
                const iconSrc = iconMap[label] || '/images/image103.png';
                return (
                  <div key={label} className="group relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 text-center shadow-sm hover:shadow-xl transition-all overflow-hidden">
                    {/* glare sweep */}
                    <div aria-hidden className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute -left-1/2 top-1/2 h-24 w-[140%] -translate-y-1/2 -rotate-12 bg-gradient-to-r from-white/0 via-white/30 to-white/0 group-hover:translate-x-[120%] translate-x-[-120%] transition-transform duration-700 ease-out" />
                    </div>
                    {/* icon */}
                    <div className={`mx-auto mb-3 h-10 w-10 rounded bg-gradient-to-br ${gradient} grid place-items-center overflow-hidden`}> 
                      <div className="relative h-7 w-7 transition-transform duration-300 ease-out group-hover:scale-110">
                        <Image src={iconSrc} alt={`${label} logo`} fill className="object-contain" />
                      </div>
                    </div>
                    <div className={`rounded bg-gradient-to-b ${gradient} text-white text-sm font-semibold px-3 py-1 inline-block`}> 
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Skills Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Additional Expertise
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Beyond technical skills, I bring these valuable qualities to every project
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Problem Solving
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Analytical thinking and creative solutions
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Handshake className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Team Collaboration
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Effective communication and teamwork
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      Continuous Learning
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Always staying updated with latest trends
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Interested in working together?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let&apos;s discuss how my skills can help bring your project to life
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Skills;
