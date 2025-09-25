/**
 * Image optimization utilities for consistent performance across the application
 */

export interface ImageOptimizationProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  fill?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Generate optimized image sizes for responsive design
 */
export const generateImageSizes = (breakpoints: number[] = [640, 768, 1024, 1280, 1536]) => {
  return breakpoints.map(bp => `(max-width: ${bp}px) ${bp}px`).join(', ') + ', 100vw';
};

/**
 * Get appropriate quality setting based on image type and usage
 */
export const getImageQuality = (imageType: 'avatar' | 'project' | 'icon' | 'gallery' = 'project'): number => {
  switch (imageType) {
    case 'avatar':
      return 85; // High quality for profile images
    case 'project':
      return 80; // Good quality for project screenshots
    case 'icon':
      return 75; // Lower quality for small icons
    case 'gallery':
      return 85; // High quality for gallery images
    default:
      return 80;
  }
};

/**
 * Generate blur placeholder data URL for smooth loading
 */
export const generateBlurDataURL = (width: number = 10, height: number = 10): string => {
  const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null;
  if (!canvas) return '';
  
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  // Create a simple gradient blur
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

/**
 * Get responsive sizes string for different image types
 */
export const getResponsiveSizes = (imageType: 'avatar' | 'project' | 'icon' | 'gallery' = 'project'): string => {
  switch (imageType) {
    case 'avatar':
      return '(max-width: 640px) 160px, (max-width: 768px) 180px, 200px';
    case 'project':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw';
    case 'icon':
      return '(max-width: 640px) 48px, (max-width: 768px) 56px, 64px';
    case 'gallery':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    default:
      return '100vw';
  }
};

/**
 * Check if image should be prioritized for loading
 */
export const shouldPrioritizeImage = (imageType: 'hero' | 'above-fold' | 'below-fold' = 'below-fold'): boolean => {
  return imageType === 'hero' || imageType === 'above-fold';
};

/**
 * Get optimal dimensions for different image types
 */
export const getOptimalDimensions = (imageType: 'avatar' | 'project' | 'icon' | 'gallery' = 'project') => {
  switch (imageType) {
    case 'avatar':
      return { width: 300, height: 300 };
    case 'project':
      return { width: 800, height: 600 };
    case 'icon':
      return { width: 64, height: 64 };
    case 'gallery':
      return { width: 1200, height: 800 };
    default:
      return { width: 800, height: 600 };
  }
};

/**
 * Generate srcSet for manual responsive image handling (fallback)
 */
export const generateSrcSet = (src: string, widths: number[] = [320, 640, 768, 1024, 1280]): string => {
  return widths
    .map(width => `${src}?w=${width}&q=80 ${width}w`)
    .join(', ');
};

/**
 * Image loading states and error handling
 */
export interface ImageLoadingState {
  isLoading: boolean;
  hasError: boolean;
  isLoaded: boolean;
}

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string, priority: boolean = false): void => {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  if (priority) {
    link.setAttribute('fetchpriority', 'high');
  }
  document.head.appendChild(link);
};

/**
 * Batch preload multiple images
 */
export const preloadImages = (sources: string[], priority: boolean = false): void => {
  sources.forEach(src => preloadImage(src, priority));
};

/**
 * Get fallback image path
 */
export const getFallbackImage = (imageType: 'avatar' | 'project' | 'icon' = 'project'): string => {
  switch (imageType) {
    case 'avatar':
      return '/images/Aryandi-photo1.png';
    case 'project':
      return '/images/Picture.png';
    case 'icon':
      return '/images/image103.png';
    default:
      return '/images/Picture.png';
  }
};
