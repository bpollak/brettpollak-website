import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '../public');
// High-resolution originals that are not themselves served. Kept outside
// public/ so they never ship in the static export.
const assetsDir = path.join(__dirname, '../assets');

// Images to optimize with their target specifications.
//
// WARNING: every entry whose output name matches its input name rewrites that
// file in place, re-encoding an already-lossy image. Running this script
// repeatedly compounds that generation loss, so run it when a source image
// actually changes — not as a routine build step. Entries sourced from
// assets/ (see `inputDir`) are safe to re-run because the original is pristine.
const optimizations = [
  // Headshots - optimize to reasonable size
  {
    input: 'brettpollak-headshot-lean.png',
    outputs: [
      { name: 'brettpollak-headshot-lean.png', width: 800, quality: 85 },
      { name: 'brettpollak-headshot-lean.webp', width: 800, quality: 85 }
    ]
  },
  {
    input: 'brett-pollak-headshot-sit-center.png',
    outputs: [
      { name: 'brett-pollak-headshot-sit-center.png', width: 800, quality: 85 }
    ]
  },
  // Favicons - always derived from the untouched high-res original in assets/.
  // Reading the source from public/ would mean re-downscaling the previous run's
  // output, which is how favicon.png ended up at a non-square 180x183. Icons are
  // squared explicitly so the Apple touch icon is not stretched on iOS.
  {
    input: 'favicon-source.png',
    inputDir: assetsDir,
    square: true,
    outputs: [
      { name: 'favicon.png', width: 180, quality: 90 }, // For Apple touch icon
      { name: 'favicon-32x32.png', width: 32, quality: 90 },
      { name: 'favicon-16x16.png', width: 16, quality: 90 }
    ]
  },
  // Product images
  {
    input: 'resolution-companion.png',
    outputs: [
      { name: 'resolution-companion.png', width: 800, quality: 85 },
      { name: 'resolution-companion.webp', width: 800, quality: 85 }
    ]
  },
  {
    input: 'tritongpt-uc-san-diego-assistant.png',
    outputs: [
      { name: 'tritongpt-uc-san-diego-assistant.png', width: 1200, quality: 85 }
    ]
  }
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (const optimization of optimizations) {
    const inputPath = path.join(optimization.inputDir ?? publicDir, optimization.input);

    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${optimization.input} - file not found`);
      continue;
    }

    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);

    console.log(`Processing: ${optimization.input} (${originalSizeKB} KB)`);

    for (const output of optimization.outputs) {
      const outputPath = path.join(publicDir, output.name);
      const isWebP = output.name.endsWith('.webp');

      try {
        let pipeline = optimization.square
          ? sharp(inputPath).resize(output.width, output.width, {
              withoutEnlargement: true,
              fit: 'cover',
              position: 'centre'
            })
          : sharp(inputPath).resize(output.width, null, {
              withoutEnlargement: true,
              fit: 'inside'
            });

        if (isWebP) {
          pipeline = pipeline.webp({ quality: output.quality });
        } else {
          pipeline = pipeline.png({
            quality: output.quality,
            compressionLevel: 9,
            adaptiveFiltering: true
          });
        }

        await pipeline.toFile(outputPath + '.tmp');

        // Replace original with optimized version
        fs.renameSync(outputPath + '.tmp', outputPath);

        const newStats = fs.statSync(outputPath);
        const newSizeKB = (newStats.size / 1024).toFixed(2);
        const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

        console.log(`  ✓ Created ${output.name}: ${newSizeKB} KB (${savings}% reduction)`);
      } catch (error) {
        console.error(`  ✗ Error processing ${output.name}:`, error.message);
      }
    }

    console.log('');
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
