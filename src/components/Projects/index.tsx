"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ExternalLink, Github, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '#/components/ui/Card';
import { Button } from '#/components/ui/Button';
import { ProjectImage, GalleryImage } from '#/components/ui/ResponsiveImage';
import { projects } from '#/utils/constants';
import { preloadImages } from '#/utils/imageOptimization';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState<number | null>(null);
  const [isNextLoaded, setIsNextLoaded] = useState(false);
  
  const selectedProject = activeProjectId ? projects.find(p => p.id === activeProjectId) : null;

  const changeImage = useCallback((targetIndex: number) => {
    if (!selectedProject) return;
    const total = selectedProject.gallery?.length || 0;
    if (total <= 1) return;
    const normalized = ((targetIndex % total) + total) % total; // wrap
    // prepare crossfade: set upcoming image and wait for load
    setNextImageIndex(normalized);
    setIsNextLoaded(false);
  }, [selectedProject]);

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (activeProjectId) {
      // Reset image index when opening modal
      setCurrentImageIndex(0);
      // Disable body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
      // Trigger modal animation after state update
      setTimeout(() => setIsModalOpen(true), 10);
    } else {
      // Re-enable body scroll
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      setIsModalOpen(false);
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [activeProjectId]);

  useEffect(() => {
    // Preload first few project images for better performance
    const featuredProjects = projects.slice(0, 3);
    const imagesToPreload = featuredProjects.map(project => 
      (project.gallery && project.gallery[0] ? (project.gallery[0] as string) : project.image) || '/images/Picture.png'
    );
    preloadImages(imagesToPreload);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProjectId || !selectedProject?.gallery || selectedProject.gallery.length <= 1) return;
      if (e.key === 'ArrowLeft') {
        changeImage(currentImageIndex - 1);
      } else if (e.key === 'ArrowRight') {
        changeImage(currentImageIndex + 1);
      }
    };

    if (activeProjectId) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectId, selectedProject, currentImageIndex, changeImage]);

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const [isCardHovered, setIsCardHovered] = useState(false);
    
    return (
      <Card
        className={`group relative overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
          project.featured ? 'ring-2 ring-blue-500/20' : ''
        }`}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
        onClick={() => setActiveProjectId(project.id)}
      >
        {/* Project Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <ProjectImage
            src={(project.gallery && project.gallery[0] ? (project.gallery[0] as string) : project.image) || '/images/Picture.png'}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-300 ${
              isCardHovered ? 'scale-105' : 'scale-100'
            }`}
          />

          {/* Gallery count badge */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-semibold bg-black/60 text-white backdrop-blur">
              {project.gallery.length} images
            </div>
          )}
          
          {/* Overlay */}
          <div className={`absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
            isCardHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            {project.liveUrl && (
              <Button
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="flex items-center space-x-2"
              >
                <Eye className="h-4 w-4" />
                <span>Live Demo</span>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="flex items-center space-x-2 bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </Button>
            )}
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            {project.liveUrl && (
              <Button
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="flex-1 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="flex-1 flex items-center justify-center space-x-2"
              >
                <Github className="h-4 w-4" />
                <span>Source</span>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={projectsRef} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>

          {/* All Projects */}
          <div className={`mb-16 transition-all duration-800 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showAll ? projects : projects.slice(0, 6)).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            {projects.length > 6 && (
              <div className="mt-10 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3"
                >
                  {showAll ? 'Show Less' : `View More (${projects.length - 6} more)`}
                </Button>
              </div>
            )}
          </div>

          {/* GitHub Stats */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    GitHub Activity
                  </h3>
                  <p className="text-gray-300">
                    Check out my latest contributions and repositories
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                    <div className="text-gray-300">Repositories</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                    <div className="text-gray-300">Commits</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                    <div className="text-gray-300">Stars</div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://github.com/aryandi', '_blank')}
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Have a project in mind?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  I&apos;m always excited to work on new projects and collaborate with amazing people. 
                  Let&apos;s discuss your ideas and bring them to life!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3"
                  >
                    Let&apos;s Work Together
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open('https://github.com/aryandi', '_blank')}
                    className="px-8 py-3"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View More Projects
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Project Detail Modal - Rendered outside section to avoid z-index conflicts */}
          {activeProjectId && (() => {
            const selectedProject = projects.find(p => p.id === activeProjectId);
            
            return (
              <div 
                className="fixed inset-0 z-[999999] flex items-center justify-center"
                style={{ 
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: '100vw',
                  height: '100vh',
                  zIndex: 999999,
                  padding: '20px'
                }}
              >
                {/* Full screen backdrop */}
                <div 
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
                  onClick={() => setActiveProjectId(null)} 
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 999999
                  }}
                />
                
                {/* Modal Container */}
                <div 
                  className="relative bg-white dark:bg-gray-900 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl" 
                  style={{ 
                    position: 'relative',
                    zIndex: 1000000,
                    maxHeight: '90vh'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button - Sticky at top */}
                  <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-end">
                    <button
                      onClick={() => setActiveProjectId(null)}
                      className="w-8 h-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-md"
                    >
                      <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>

                  {/* Modal Content - Scrollable */}
                  <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 80px)' }}>
                    {/* Project Image */}
                    <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6">
                      <GalleryImage
                        src={selectedProject?.image || '/images/Picture.png'}
                        alt={selectedProject?.title || 'Project'}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Title and Description */}
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-100 mb-4">
                          {selectedProject?.title}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                          {selectedProject?.descriptionLong || selectedProject?.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject?.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Images Gallery */}
                      {(selectedProject?.gallery || []).length > 0 && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Project Gallery</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {selectedProject?.gallery?.map((src, idx) => (
                              <div key={idx} className="relative w-full h-48 rounded-lg overflow-hidden ring-1 ring-gray-200 dark:ring-gray-700">
                                <GalleryImage 
                                  src={src as string} 
                                  alt="Project snapshot" 
                                  fill 
                                  className="object-cover hover:scale-105 transition-transform duration-300" 
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {selectedProject?.liveUrl && (
                          <Button
                            onClick={() => window.open(selectedProject?.liveUrl, '_blank')}
                            className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                          >
                            <ExternalLink className="h-5 w-5" />
                            <span>Live Demo</span>
                          </Button>
                        )}
                        {selectedProject?.githubUrl && (
                          <Button
                            variant="outline"
                            onClick={() => window.open(selectedProject?.githubUrl, '_blank')}
                            className="flex-1 flex items-center justify-center space-x-2 border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            <Github className="h-5 w-5" />
                            <span>View Code</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

        </section>

        {/* Project Detail Modal - Rendered outside section to avoid z-index conflicts */}
    {activeProjectId && (() => {
      const selectedProject = projects.find(p => p.id === activeProjectId);
      
      return (
        <div 
          className={`fixed inset-0 z-[999999] flex items-center justify-center transition-all duration-300 ease-out ${
            isModalOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999999,
            padding: '20px'
          }}
        >
          {/* Full screen backdrop */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ease-out ${
              isModalOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setActiveProjectId(null)} 
            style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              zIndex: 999999
            }}
          />
          
          {/* Modal Container */}
          <div 
            className={`relative bg-white dark:bg-gray-900 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-500 ease-out transform ${
              isModalOpen 
                ? 'opacity-100 scale-100 translate-y-0' 
                : 'opacity-0 scale-75 translate-y-8'
            }`}
            style={{ 
              position: 'relative',
              zIndex: 1000000,
              maxHeight: '90vh',
              transformOrigin: 'center center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Sticky at top */}
            <div className={`sticky top-0 z-10 bg-white dark:bg-gray-900 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-end transition-all duration-500 delay-200 ${
              isModalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <button
                onClick={() => setActiveProjectId(null)}
                className="w-8 h-8 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
              >
                <X className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className={`p-6 overflow-y-auto transition-all duration-500 delay-300 ${
              isModalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ maxHeight: 'calc(90vh - 80px)' }}>
              {/* Project Image Carousel */}
              <div className={`relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-2 transition-all duration-700 delay-400 ${
                isModalOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
              }`}>
                {selectedProject?.gallery && selectedProject.gallery.length > 0 ? (
                  <>
                    {/* Current and next images for smooth crossfade */}
                    <GalleryImage
                      key={`current-${currentImageIndex}`}
                      src={selectedProject.gallery[currentImageIndex] || selectedProject.image || '/images/Picture.png'}
                      alt={selectedProject?.title || 'Project'}
                      fill
                      className={`object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                    />
                    {nextImageIndex !== null && (
                      <GalleryImage
                        key={`next-${nextImageIndex}`}
                        src={selectedProject.gallery[nextImageIndex] || selectedProject.image || '/images/Picture.png'}
                        alt={selectedProject?.title || 'Project next'}
                        fill
                        className={`object-cover transition-opacity duration-300 ${isNextLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => {
                          // start crossfade only after next visual is loaded
                          setIsNextLoaded(true);
                          setIsTransitioning(true);
                          // finish after the fade duration
                          window.setTimeout(() => {
                            setCurrentImageIndex(nextImageIndex);
                            setIsTransitioning(false);
                            setNextImageIndex(null);
                            setIsNextLoaded(false);
                          }, 300);
                        }}
                      />
                    )}
                    {selectedProject.gallery.length > 1 && (
                      <>
                        <button
                          onClick={() => changeImage(currentImageIndex - 1)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => changeImage(currentImageIndex + 1)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                          {selectedProject.gallery.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => changeImage(idx)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm z-10">
                          {currentImageIndex + 1} / {selectedProject.gallery!.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <GalleryImage
                    src={selectedProject?.image || '/images/Picture.png'}
                    alt={selectedProject?.title || 'Project'}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Thumbnails */}
              {selectedProject?.gallery && selectedProject.gallery.length > 1 && (
                <div className="mb-6 flex gap-2 overflow-x-auto pb-2 snap-x">
                  {selectedProject.gallery.map((thumbSrc, tIdx) => (
                    <button
                      key={`${thumbSrc}-${tIdx}`}
                      onClick={() => changeImage(tIdx)}
                      className={`relative flex-shrink-0 w-20 h-14 rounded-md overflow-hidden ring-2 transition-all duration-200 snap-start ${
                        tIdx === currentImageIndex ? 'ring-blue-500' : 'ring-transparent hover:ring-gray-300'
                      }`}
                      aria-label={`Open image ${tIdx + 1}`}
                    >
                      <GalleryImage src={thumbSrc as string} alt="thumbnail" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className={`space-y-6 transition-all duration-600 delay-500 ${
                isModalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
                {/* Title and Description */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-gray-100 mb-4">
                    {selectedProject?.title}
                  </h2>
                  {/* Per-image caption (title + description) */}
                  {selectedProject?.imageCaptions && selectedProject.imageCaptions.length > 0 && (
                    <div className="mb-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ring-1 ring-gray-200/60 dark:ring-gray-700/60">
                      <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {selectedProject.imageCaptions.find(c => c.src === (selectedProject.gallery?.[currentImageIndex] as string))?.title || selectedProject.imageCaptions[0].title}
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {selectedProject.imageCaptions.find(c => c.src === (selectedProject.gallery?.[currentImageIndex] as string))?.description || selectedProject.imageCaptions[0].description}
                      </p>
                    </div>
                  )}
                  {(selectedProject?.company || selectedProject?.role || selectedProject?.duration) && (
                    <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      {selectedProject?.company && (
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                          Company: {selectedProject.company}
                        </p>
                      )}
                      {selectedProject?.role && (
                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">
                          Role: {selectedProject.role}
                        </p>
                      )}
                      {selectedProject?.duration && (
                        <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                          Duration: {selectedProject.duration}
                        </p>
                      )}
                    </div>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {selectedProject?.descriptionLong || selectedProject?.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>


                {/* Action Buttons */}
                <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-500 delay-700 ${
                  isModalOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  {selectedProject?.liveUrl && (
                    <Button
                      onClick={() => window.open(selectedProject?.liveUrl, '_blank')}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>Live Demo</span>
                    </Button>
                  )}
                  {selectedProject?.githubUrl && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject?.githubUrl, '_blank')}
                      className="flex-1 flex items-center justify-center space-x-2 border-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <Github className="h-5 w-5" />
                      <span>View Code</span>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })()}
    </>
  );
};

export default Projects;
