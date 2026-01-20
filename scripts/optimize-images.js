const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// Images to optimize with their target specifications
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
    input: 'brettpollak-headshot-lean-stand.png',
    outputs: [
      { name: 'brettpollak-headshot-lean-stand.png', width: 800, quality: 85 },
      { name: 'brettpollak-headshot-lean-stand.webp', width: 800, quality: 85 }
    ]
  },
  {
    input: 'brett-pollak-headshot-sit.png',
    outputs: [
      { name: 'brett-pollak-headshot-sit.png', width: 800, quality: 85 },
      { name: 'brett-pollak-headshot-sit.webp', width: 800, quality: 85 }
    ]
  },
  {
    input: 'brett-pollak-headshot-sit-center.png',
    outputs: [
      { name: 'brett-pollak-headshot-sit-center.png', width: 800, quality: 85 },
      // WebP already exists, just optimize PNG
    ]
  },
  {
    input: 'brett-pollak-headshot-sit-center2.png',
    outputs: [
      { name: 'brett-pollak-headshot-sit-center2.png', width: 800, quality: 85 },
      { name: 'brett-pollak-headshot-sit-center2.webp', width: 800, quality: 85 }
    ]
  },
  {
    input: 'brett-pollak-headshot-stand2.png',
    outputs: [
      { name: 'brett-pollak-headshot-stand2.png', width: 800, quality: 85 },
      { name: 'brett-pollak-headshot-stand2.webp', width: 800, quality: 85 }
    ]
  },
  // Favicon - create multiple sizes
  {
    input: 'favicon.png',
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
    input: 'tritonGPT-header.png',
    outputs: [
      { name: 'tritonGPT-header.png', width: 1200, quality: 85 },
      { name: 'tritonGPT-header.webp', width: 1200, quality: 85 }
    ]
  },
  {
    input: 'tritongpt-uc-san-diego-assistant.png',
    outputs: [
      { name: 'tritongpt-uc-san-diego-assistant.png', width: 1200, quality: 85 },
      { name: 'tritongpt-uc-san-diego-assistant.webp', width: 1200, quality: 85 }
    ]
  },
  {
    input: 'screen-progress-2.png',
    outputs: [
      { name: 'screen-progress-2.png', width: 800, quality: 85 },
      { name: 'screen-progress-2.webp', width: 800, quality: 85 }
    ]
  }
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  for (const optimization of optimizations) {
    const inputPath = path.join(publicDir, optimization.input);

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
        let pipeline = sharp(inputPath).resize(output.width, null, {
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
