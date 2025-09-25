#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script optimizes all images in the public/images directory
 * by converting them to modern formats (WebP, AVIF) and creating
 * responsive versions for different screen sizes.
 * 
 * Prerequisites:
 * npm install sharp
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const OUTPUT_DIR = path.join(process.cwd(), 'public/images/optimized');

// Responsive breakpoints
const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  large: 1280,
  xlarge: 1920
};

// Quality settings for different image types
const QUALITY_SETTINGS = {
  avatar: { webp: 85, avif: 80, jpeg: 90 },
  project: { webp: 80, avif: 75, jpeg: 85 },
  icon: { webp: 75, avif: 70, jpeg: 80 },
  gallery: { webp: 85, avif: 80, jpeg: 90 }
};

// Supported input formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Get image type based on directory or filename
 */
function getImageType(filePath) {
  const fileName = path.basename(filePath).toLowerCase();
  const dirName = path.dirname(filePath).toLowerCase();
  
  if (fileName.includes('avatar') || fileName.includes('photo')) {
    return 'avatar';
  } else if (dirName.includes('project')) {
    return 'project';
  } else if (fileName.includes('icon') || dirName.includes('icon')) {
    return 'icon';
  } else {
    return 'gallery';
  }
}

/**
 * Create optimized versions of an image
 */
async function optimizeImage(inputPath, outputDir, imageType) {
  const fileName = path.basename(inputPath, path.extname(inputPath));
  const quality = QUALITY_SETTINGS[imageType];
  
  console.log(`Optimizing: ${fileName} (${imageType})`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Create responsive versions
    for (const [sizeName, width] of Object.entries(BREAKPOINTS)) {
      if (metadata.width <= width) continue; // Skip if original is smaller
      
      // WebP version
      await image
        .resize(width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: quality.webp })
        .toFile(path.join(outputDir, `${fileName}-${sizeName}.webp`));
      
      // AVIF version (if supported)
      try {
        await image
          .resize(width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .avif({ quality: quality.avif })
          .toFile(path.join(outputDir, `${fileName}-${sizeName}.avif`));
      } catch (error) {
        console.warn(`AVIF not supported for ${fileName}, skipping...`);
      }
    }
    
    // Create original size optimized versions
    await image
      .webp({ quality: quality.webp })
      .toFile(path.join(outputDir, `${fileName}.webp`));
    
    try {
      await image
        .avif({ quality: quality.avif })
        .toFile(path.join(outputDir, `${fileName}.avif`));
    } catch (error) {
      console.warn(`AVIF not supported for ${fileName}, skipping...`);
    }
    
    // Create optimized JPEG fallback
    await image
      .jpeg({ quality: quality.jpeg, progressive: true })
      .toFile(path.join(outputDir, `${fileName}-optimized.jpg`));
    
    console.log(`✅ Optimized: ${fileName}`);
    
  } catch (error) {
    console.error(`❌ Failed to optimize ${fileName}:`, error.message);
  }
}

/**
 * Process all images in a directory
 */
async function processDirectory(dirPath, outputDir) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subOutputDir = path.join(outputDir, item);
      if (!fs.existsSync(subOutputDir)) {
        fs.mkdirSync(subOutputDir, { recursive: true });
      }
      await processDirectory(itemPath, subOutputDir);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (SUPPORTED_FORMATS.includes(ext)) {
        const imageType = getImageType(itemPath);
        await optimizeImage(itemPath, outputDir, imageType);
      }
    }
  }
}

/**
 * Generate image manifest for easy reference
 */
async function generateManifest(outputDir) {
  const manifest = {
    generated: new Date().toISOString(),
    breakpoints: BREAKPOINTS,
    qualitySettings: QUALITY_SETTINGS,
    images: {}
  };
  
  function scanDirectory(dirPath, relativePath = '') {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        scanDirectory(itemPath, path.join(relativePath, item));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (['.webp', '.avif', '.jpg'].includes(ext)) {
          const baseName = path.basename(item, ext);
          const imagePath = path.join(relativePath, baseName).replace(/\\/g, '/');
          
          if (!manifest.images[imagePath]) {
            manifest.images[imagePath] = {};
          }
          
          manifest.images[imagePath][ext.substring(1)] = path.join(relativePath, item).replace(/\\/g, '/');
        }
      }
    }
  }
  
  scanDirectory(outputDir);
  
  fs.writeFileSync(
    path.join(outputDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('📋 Generated image manifest');
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting image optimization...');
  
  // Check if sharp is installed
  try {
    require('sharp');
  } catch (error) {
    console.error('❌ Sharp is not installed. Please run: npm install sharp');
    process.exit(1);
  }
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Check if images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Images directory not found: ${IMAGES_DIR}`);
    process.exit(1);
  }
  
  // Process all images
  await processDirectory(IMAGES_DIR, OUTPUT_DIR);
  
  // Generate manifest
  await generateManifest(OUTPUT_DIR);
  
  console.log('✅ Image optimization completed!');
  console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('📋 Check manifest.json for all available image formats and sizes');
}

// Run the script
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { optimizeImage, processDirectory, generateManifest };
