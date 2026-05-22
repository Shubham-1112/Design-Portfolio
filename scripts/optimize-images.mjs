import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public', 'projects');

const images = [
  { input: 'cpaas-1.png', output: 'cpaas-1.webp' },
  { input: 'dataflow-1.png', output: 'dataflow-1.webp' },
  { input: 'healthcare-1.png', output: 'healthcare-1.webp' },
  { input: 'habit-tracker-1.jpg', output: 'habit-tracker-1.webp' },
  { input: 'brand-guideline-1.png', output: 'brand-guideline-1.webp' },
  { input: 'natural-icecream-1.png', output: 'natural-icecream-1.webp' },
  { input: 'virtual-venue-1.jpg', output: 'virtual-venue-1.webp' },
];

for (const img of images) {
  const inputPath = path.join(publicDir, img.input);
  const outputPath = path.join(publicDir, img.output);
  
  try {
    const info = await sharp(inputPath)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    console.log(`✓ ${img.input} → ${img.output} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB)`);
  } catch (err) {
    console.error(`✗ ${img.input}: ${err.message}`);
  }
}

console.log('\nDone! All images optimized.');
