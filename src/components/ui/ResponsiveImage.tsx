'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { 
  getImageQuality, 
  getResponsiveSizes, 
  shouldPrioritizeImage,
  getOptimalDimensions,
  generateBlurDataURL,
  getFallbackImage,
  ImageLoadingState
} from '#/utils/imageOptimization';

interface ResponsiveImageProps extends Omit<ImageProps, 'quality' | 'sizes' | 'priority'> {
  imageType?: 'avatar' | 'project' | 'icon' | 'gallery';
  priorityType?: 'hero' | 'above-fold' | 'below-fold';
  quality?: number;
  sizes?: string;
  priority?: boolean;
  showLoadingState?: boolean;
  fallbackType?: 'avatar' | 'project' | 'icon';
  className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  imageType = 'project',
  priorityType = 'below-fold',
  quality,
  sizes,
  priority,
  showLoadingState = false,
  fallbackType = 'project',
  className = '',
  width,
  height,
  fill = false,
  ...props
}) => {
  const [loadingState, setLoadingState] = useState<ImageLoadingState>({
    isLoading: true,
    hasError: false,
    isLoaded: false
  });

  // Determine optimal settings based on image type
  const optimalQuality = quality ?? getImageQuality(imageType);
  const optimalSizes = sizes ?? getResponsiveSizes(imageType);
  const shouldPrioritize = priority ?? shouldPrioritizeImage(priorityType);
  
  // Get optimal dimensions if not provided
  const dimensions = fill ? {} : (width && height ? { width, height } : getOptimalDimensions(imageType));
  
  // Generate blur placeholder
  const blurDataURL = generateBlurDataURL(32, 32);
  
  // Fallback image
  const fallbackSrc = getFallbackImage(fallbackType);
  const imageSrc = loadingState.hasError ? fallbackSrc : src;

  const handleLoad = () => {
    setLoadingState({
      isLoading: false,
      hasError: false,
      isLoaded: true
    });
  };

  const handleError = () => {
    setLoadingState({
      isLoading: false,
      hasError: true,
      isLoaded: false
    });
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading state overlay */}
      {showLoadingState && loadingState.isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}
      
      {/* Error state overlay */}
      {loadingState.hasError && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Failed to load</div>
        </div>
      )}
      
      <Image
        src={imageSrc}
        alt={alt}
        quality={optimalQuality}
        sizes={optimalSizes}
        priority={shouldPrioritize}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          loadingState.isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...(fill ? { fill: true } : dimensions)}
        {...props}
      />
    </div>
  );
};

/**
 * Specialized components for different image types
 */

export const AvatarImage: React.FC<Omit<ResponsiveImageProps, 'imageType' | 'priorityType'>> = (props) => (
  <ResponsiveImage 
    imageType="avatar" 
    priorityType="hero" 
    className="rounded-full"
    {...props} 
  />
);

export const ProjectImage: React.FC<Omit<ResponsiveImageProps, 'imageType' | 'priorityType'>> = (props) => (
  <ResponsiveImage 
    imageType="project" 
    priorityType="below-fold"
    className="object-cover"
    {...props} 
  />
);

export const IconImage: React.FC<Omit<ResponsiveImageProps, 'imageType' | 'priorityType'>> = (props) => (
  <ResponsiveImage 
    imageType="icon" 
    priorityType="below-fold"
    className="object-contain"
    {...props} 
  />
);

export const GalleryImage: React.FC<Omit<ResponsiveImageProps, 'imageType' | 'priorityType'>> = (props) => (
  <ResponsiveImage 
    imageType="gallery" 
    priorityType="below-fold"
    className="object-cover"
    {...props} 
  />
);

export default ResponsiveImage;
