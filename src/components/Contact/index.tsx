"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '#/components/ui/Card';
import { Button } from '#/components/ui/Button';
import WhatsAppIcon from '#/components/ui/WhatsAppIcon';
import { personalInfo } from '#/utils/constants';

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Aryandi! I'd like to discuss a project opportunity with you. Let's connect!");
    const whatsappUrl = `https://wa.me/${personalInfo.contact.whatsapp}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      value: personalInfo.contact.phone,
      href: `https://wa.me/${personalInfo.contact.whatsapp}`,
      color: 'from-green-500 to-emerald-600',
      isPrimary: true
    },
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.contact.email,
      href: `mailto:${personalInfo.contact.email}`,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.contact.phone,
      href: `tel:${personalInfo.contact.phone}`,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.contact.location,
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      href: personalInfo.contact.github,
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      href: personalInfo.contact.linkedin,
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contactRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 transition-all duration-500 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Let&apos;s <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I&apos;m excited to collaborate on your next project!
            </p>
          </div>

          {/* Main Contact Section */}
          <div className="mb-16">
            {/* Primary WhatsApp CTA */}
            <div className={`text-center mb-12 transition-all duration-800 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-emerald-600 border-0 shadow-2xl">
                <CardContent className="p-8 sm:p-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                      <WhatsAppIcon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                      Let&apos;s Chat on WhatsApp!
                    </h3>
                    <p className="text-green-100 text-lg mb-8 max-w-2xl">
                      The fastest way to reach me. Send me a message and let&apos;s discuss your project right away!
                    </p>
                    <Button
                      onClick={handleWhatsAppClick}
                      size="lg"
                      className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <WhatsAppIcon className="h-5 w-5 mr-3" />
                      Chat on WhatsApp
                      <ArrowRight className="h-5 w-5 ml-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods Grid */}
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-800 ease-out delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                    method.isPrimary 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white' 
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {/* Background gradient for non-primary items */}
                  {!method.isPrimary && (
                    <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  )}
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      method.isPrimary 
                        ? 'bg-white/20' 
                        : `bg-gradient-to-br ${method.color}`
                    }`}>
                      <method.icon className={`h-6 w-6 ${
                        method.isPrimary ? 'text-white' : 'text-white'
                      }`} />
                    </div>
                    <h4 className={`font-bold text-lg mb-2 ${
                      method.isPrimary ? 'text-white' : 'text-gray-900 dark:text-gray-100'
                    }`}>
                      {method.title}
                    </h4>
                    <p className={`text-sm ${
                      method.isPrimary ? 'text-green-100' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {method.value}
                    </p>
                  </div>
                  
                  {/* Hover effect arrow */}
                  <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    method.isPrimary ? 'text-white' : 'text-gray-400'
                  }`}>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Follow My Journey
              </h4>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardContent className="p-8 sm:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Ready to Create Something Amazing?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  Whether it&apos;s a new project, collaboration, or just want to say hi - I&apos;m here and excited to connect!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <WhatsAppIcon className="h-5 w-5 mr-3" />
                    Start Chatting
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(`mailto:${personalInfo.contact.email}`, '_blank')}
                    className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
