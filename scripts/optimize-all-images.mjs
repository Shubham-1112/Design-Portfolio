import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const sourceBase = path.join(rootDir, 'Documents', 'Projects');
const outputBase = path.join(rootDir, 'public', 'projects');

// Higher resolution and quality for gallery modal
const GALLERY_WIDTH = 2400;
const QUALITY = 80;

const projects = [
  {
    folder: 'CPaaS Platform',
    slug: 'cpaas',
    files: ['1.png', '2.png', '3.png'],
  },
  {
    folder: 'Data Flow Pro',
    slug: 'dataflow',
    files: [
      '1. Landing Page.png', '2.png', '3.png', '4.png', '5.png',
      '6.png', '7.png', '8.png', '9.png', '10.png',
      '11.png', '12.png', '13.png', '14.png', '15.png',
      '16.png', '17.png', '18.png', '19.png', '20.png',
      '21.png', '22.png', '23.png', '24.png', '25.png',
    ],
  },
  {
    folder: 'Health Care',
    slug: 'healthcare',
    files: [
      '1.png', '2.png', '3.png', '4.png', '5.png',
      '6.png', '7.png', '8.png', '9.png', '10.png', '11.png',
    ],
  },
  {
    folder: 'Habit Tracker',
    slug: 'habit-tracker',
    files: [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
      '6.jpg', '7.jpg', '8.jpg', '9.jpg',
    ],
  },
  {
    folder: 'Virtual Venue Booking',
    slug: 'virtual-venue',
    files: [
      '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
      '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
      '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
      '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
      '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg',
      '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg',
    ],
  },
];

let totalOriginal = 0;
let totalOptimized = 0;

for (const project of projects) {
  const outputDir = path.join(outputBase, project.slug);
  fs.mkdirSync(outputDir, { recursive: true });

  console.log(`\n📁 ${project.folder} (${project.files.length} images)`);

  for (let i = 0; i < project.files.length; i++) {
    const fileName = project.files[i];
    const inputPath = path.join(sourceBase, project.folder, fileName);
    const outputName = `${i + 1}.webp`;
    const outputPath = path.join(outputDir, outputName);

    try {
      const originalSize = fs.statSync(inputPath).size;
      totalOriginal += originalSize;

      // For very tall images that exceed WebP limits, use PNG instead
      const metadata = await sharp(inputPath).metadata();
      const resizedWidth = Math.min(GALLERY_WIDTH, metadata.width || GALLERY_WIDTH);
      const scale = resizedWidth / (metadata.width || resizedWidth);
      const estimatedHeight = Math.round((metadata.height || 0) * scale);

      let info;
      if (estimatedHeight > 16000) {
        // WebP has a max dimension limit; fall back to high-quality JPEG
        const jpgPath = path.join(outputDir, `${i + 1}.jpg`);
        info = await sharp(inputPath)
          .resize(GALLERY_WIDTH, null, { withoutEnlargement: true })
          .jpeg({ quality: QUALITY })
          .toFile(jpgPath);
        // Remove .webp if exists, rename reference
        console.log(
          `  ✓ ${fileName} → ${i + 1}.jpg (JPEG fallback, ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB)`
        );
      } else {
        info = await sharp(inputPath)
          .resize(GALLERY_WIDTH, null, { withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(outputPath);
        console.log(
          `  ✓ ${fileName} → ${outputName} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB)`
        );
      }

      totalOptimized += info.size;
    } catch (err) {
      console.error(`  ✗ ${fileName}: ${err.message}`);
    }
  }
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`Total original: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
console.log(`Total optimized: ${(totalOptimized / 1024 / 1024).toFixed(1)} MB`);
console.log(`\n✅ All images re-optimized at high quality!`);
