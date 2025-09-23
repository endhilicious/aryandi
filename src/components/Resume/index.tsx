"use client";

import React, { useEffect, useRef } from 'react';
import { Award, BadgeCheck, Languages } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/Card';
import { certifications, honorsAwards, languages } from '#/utils/constants';

const Resume = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

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

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-blue-50/40 dark:from-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={resumeRef} className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              Resume <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A quick snapshot of languages, certs, and awards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 shadow-xl">
              <CardHeader className="flex items-center space-x-3">
                <BadgeCheck className="h-6 w-6 text-blue-600" />
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {languages.map((item) => (
                    <li key={item} className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/70 dark:bg-gray-800/60">
                      <span className="text-gray-800 dark:text-gray-200">{item}</span>
                      <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">Proficiency</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-b from-white to-violet-50 dark:from-gray-900 dark:to-gray-800 shadow-xl">
              <CardHeader className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-purple-600" />
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {certifications.map((item) => (
                    <li key={item} className="px-3 py-2 rounded-lg bg-white/70 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-gray-800 shadow-xl">
              <CardHeader className="flex items-center space-x-3">
                <Languages className="h-6 w-6 text-pink-600" />
                <CardTitle>Honors & Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {honorsAwards.map((item) => (
                    <li key={item} className="px-3 py-2 rounded-lg bg-white/70 dark:bg-gray-800/60 text-gray-800 dark:text-gray-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Resume;


