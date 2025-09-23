"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Code, Server, Wrench, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/Card';
import { skills } from '#/utils/constants';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            
            // Animate skills with delay
            const skillCards = entry.target.querySelectorAll('.skill-card');
            skillCards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => new Set([...prev, card.getAttribute('data-skill') || '']));
              }, index * 100);
            });
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

  const skillCategories = {
    frontend: { icon: Code, title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { icon: Server, title: 'Backend', color: 'from-green-500 to-emerald-500' },
    tools: { icon: Wrench, title: 'Tools & DevOps', color: 'from-purple-500 to-pink-500' },
    other: { icon: Star, title: 'Other', color: 'from-orange-500 to-red-500' }
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const ProgressBar = ({ skill }: { skill: typeof skills[0] }) => {
    const isVisible = visibleSkills.has(skill.name);
    
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${skillCategories[skill.category].color} rounded-full transition-all duration-1000 ease-out`}
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              transitionDelay: '0.5s'
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={skillsRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([categoryKey, category]) => {
              const categorySkills = getSkillsByCategory(categoryKey);
              
              return (
                <Card key={categoryKey} hover className="skill-card" data-skill={categoryKey}>
                  <CardHeader className="text-center pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} text-white rounded-2xl mb-4`}>
                      <category.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {categorySkills.map((skill) => (
                      <ProgressBar key={skill.name} skill={skill} />
                    ))}
                  </CardContent>
                </Card>
              );
            })}
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
                      <span className="text-2xl">🎯</span>
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
                      <span className="text-2xl">🤝</span>
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
                      <span className="text-2xl">📚</span>
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
