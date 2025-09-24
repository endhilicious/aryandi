"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Target, Handshake, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/Card';
import { specializingIn } from '#/utils/constants';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={skillsRef} className="max-w-6xl mx-auto">
          <style jsx>{`
            :root {
              --javascript-color: #f7df1e;
              --html-css-color: #e34f26;
              --nextjs-color: #000000;
              --typescript-color: #3178c6;
              --ionic-color: #3880ff;
              --redux-color: #764abc;
              --storybook-color: #ff4785;
              --gatsby-color: #663399;
              --react-testing-library-color: #e33332;
              --react-native-color: #61dafb;
              --react-query-color: #ff4154;
              --material-ui-color: #0081cb;
              --react-color: #61dafb;
              --graphql-color: #e10098;
              --jest-color: #c21325;
              --figma-color: #f24e1e;
              --tailwind-color: #06b6d4;
              --bootstrap-color: #7952b3;
              --jquery-color: #0769ad;
              --firebase-color: #ffca28;
              --supabase-color: #3ecf8e;
              --mysql-color: #4479a1;
              --codeigniter-color: #ee4323;
              --aws-color: #ff9900;
              --docker-color: #2496ed;
              --jira-color: #0052cc;
              --semantic-html-color: #e34f26;
              --vue-color: #4fc08d;
              --trello-color: #0079bf;
            }
          `}</style>
          {/* Specializing In */}
          <div className="mt-20">
            <div className={`text-center mb-10 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
                Specializing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In</span>
              </h3>
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-all duration-800 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
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
                  'HTML CSS': '/images/html-css.png',
                  Nextjs: '/images/nextjs.png',
                  Typescript: '/images/typescript.png',
                  Ionic: '/images/ionic.png',
                  Redux: '/images/redux.png',
                  Storybook: '/images/storybook.png',
                  Gatsby: '/images/gatsby.png',
                  'React Testing Library': '/images/react-testing-library.png',
                  'React Native': '/images/react-native.png',
                  'React Query': '/images/react-query.png',
                  'Material UI': '/images/material-ui.png',
                  React: '/images/react.png',
                  GraphQL: '/images/react-query.png', // Using react-query as placeholder
                  Jest: '/images/jest.png',
                  Figma: '/images/figma.png',
                  Tailwind: '/images/tail.png',
                  Bootstrap: '/images/bootstrap.png',
                  Jquery: '/images/js.png', // Using js as placeholder
                  Firebase: '/images/firebase.png',
                  Supabase: '/images/suppabase.png',
                  MySQL: '/images/mysql.png',
                  Codeigniter: '/images/png-clipart-logo-orange-s-a-codeigniter-logo-orange-sa%201.png',
                  AWS: '/images/aws.png',
                  Docker: '/images/docker.png',
                  Jira: '/images/jira.png',
                  'Semantic HTML': '/images/html-css.png',
                  Vue: '/images/vue.png',
                  Trello: '/images/trello.png'
                };
                const iconSrc = iconMap[label] || '/images/image103.png';
                return (
                  <div key={label} className="group relative rounded-2xl border-2 border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2">
                    {/* Animated border on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                      <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800"></div>
                    </div>
                    
                    {/* Subtle glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with glassmorphism effect */}
                      <div className={`mx-auto mb-4 h-20 w-20 rounded-2xl border-2 bg-white/20 dark:bg-gray-300/30 backdrop-blur-md grid place-items-center overflow-hidden transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-inner`} 
                           style={{ 
                             borderColor: `var(--${label.toLowerCase().replace(/\s+/g, '-')}-color)`,
                             boxShadow: `0 0 20px var(--${label.toLowerCase().replace(/\s+/g, '-')}-color)20`
                           }}>
                        <div className="relative h-12 w-12 transition-transform duration-300 ease-out">
                          <Image 
                            src={iconSrc} 
                            alt={`${label} logo`} 
                            fill 
                            className="object-contain drop-shadow-lg" 
                            style={{ 
                              filter: 'brightness(1.2) contrast(1.1) saturate(1.1)',
                              transition: 'all 0.3s ease'
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Label with gradient text and better typography */}
                      <div className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent text-sm font-bold tracking-wide`}> 
                        {label}
                      </div>
                      
                      {/* Subtle tech indicator */}
                      <div className="mt-2 h-1 w-8 mx-auto rounded-full bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
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
