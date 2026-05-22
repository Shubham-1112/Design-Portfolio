import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public', 'projects');

// ── 1. Optimize thumbnail images ──
const thumbnails = [
  { input: 'brand-guideline-1.png', output: 'brand-guideline-1.webp' },
  { input: 'natural-icecream-1.png', output: 'natural-icecream-1.webp' },
];

for (const img of thumbnails) {
  const inputPath = path.join(publicDir, img.input);
  const outputPath = path.join(publicDir, img.output);
  try {
    const info = await sharp(inputPath)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log(`✓ THUMB ${img.input} → ${img.output} (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB)`);
  } catch (err) {
    console.error(`✗ THUMB ${img.input}: ${err.message}`);
  }
}

// ── 2. Optimize Brand Guideline gallery (19 images) ──
const brandDir = path.join(publicDir, 'brand-guideline');
for (let i = 1; i <= 19; i++) {
  const inputPath = path.join(brandDir, `${i}.png`);
  const outputPath = path.join(brandDir, `${i}.webp`);
  try {
    const info = await sharp(inputPath)
      .resize(1400, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);
    console.log(`✓ BRAND ${i}.png → ${i}.webp (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB)`);
  } catch (err) {
    console.error(`✗ BRAND ${i}.png: ${err.message}`);
  }
}

// ── 3. Optimize Natural Ice Cream gallery (2 images) ──
const icecreamDir = path.join(publicDir, 'natural-icecream');
for (let i = 1; i <= 2; i++) {
  const inputPath = path.join(icecreamDir, `${i}.png`);
  const outputPath = path.join(icecreamDir, `${i}.webp`);
  try {
    const info = await sharp(inputPath)
      .resize(1400, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);
    console.log(`✓ ICECREAM ${i}.png → ${i}.webp (${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)}KB)`);
  } catch (err) {
    console.error(`✗ ICECREAM ${i}.png: ${err.message}`);
  }
}

console.log('\nDone! All new project images optimized.');
