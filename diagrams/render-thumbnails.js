const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Generic Mermaid thumbnail generator for ArtiVisi website
 * Supports: products, projects, training
 *
 * Usage:
 *   node render-thumbnails.js [content-type]
 *
 * Examples:
 *   node render-thumbnails.js training
 *   node render-thumbnails.js products
 *   node render-thumbnails.js projects
 *   node render-thumbnails.js all
 */

const CONTENT_TYPES = {
  training: {
    diagramsDir: 'training-thumbnails',
    outputDir: path.join('..', 'static', 'img', 'training-catalog'),
    diagrams: [
      'spring-boot-development',
      'application-security',
      'vault-credential-management',
      'java-oop-design-patterns',
      'git-collaboration',
      'playwright-testing'
    ]
  },
  products: {
    diagramsDir: 'product-thumbnails',
    outputDir: path.join('..', 'static', 'img', 'products'),
    diagrams: [] // Auto-detect from directory
  },
  projects: {
    diagramsDir: 'project-thumbnails',
    outputDir: path.join('..', 'static', 'img', 'projects'),
    diagrams: [] // Auto-detect from directory
  }
};

/**
 * Auto-detect diagram files from directory
 */
function autoDetectDiagrams(diagramsDir) {
  const fullPath = path.join(__dirname, diagramsDir);

  if (!fs.existsSync(fullPath)) {
    return [];
  }

  return fs.readdirSync(fullPath)
    .filter(file => file.endsWith('.mmd'))
    .map(file => path.basename(file, '.mmd'));
}

/**
 * Render thumbnails for a specific content type
 */
function renderThumbnails(contentType, config) {
  const diagramsDir = path.join(__dirname, config.diagramsDir);
  const outputBaseDir = path.join(__dirname, config.outputDir);

  // Auto-detect diagrams if list is empty
  const diagrams = config.diagrams.length > 0
    ? config.diagrams
    : autoDetectDiagrams(config.diagramsDir);

  if (diagrams.length === 0) {
    console.log(`⚠ No diagrams found for ${contentType}`);
    return 0;
  }

  console.log(`\nRendering ${diagrams.length} ${contentType} thumbnail(s)...\n`);

  let successCount = 0;
  let failCount = 0;

  diagrams.forEach(diagram => {
    const mermaidFile = path.join(diagramsDir, `${diagram}.mmd`);
    const outputDir = path.join(outputBaseDir, diagram);
    const outputFile = path.join(outputDir, 'thumbnail.png');

    // Check if mermaid file exists
    if (!fs.existsSync(mermaidFile)) {
      console.log(`⚠ Skipping ${diagram}: ${path.basename(mermaidFile)} not found`);
      return;
    }

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    try {
      // Use mmdc (mermaid-cli) to render diagram as PNG
      // --scale 3 for 3x resolution (high-DPI displays)
      // -b transparent for transparent background
      execSync(
        `mmdc -i "${mermaidFile}" -o "${outputFile}" -s 3 -b transparent`,
        { stdio: 'pipe' }
      );
      console.log(`✓ ${contentType}/${diagram}/thumbnail.png`);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed ${contentType}/${diagram}:`, error.message);
      failCount++;
    }
  });

  console.log(`\n${contentType}: ${successCount} success, ${failCount} failed`);
  return successCount;
}

/**
 * Main execution
 */
function main() {
  const arg = process.argv[2] || 'training';
  const contentType = arg.toLowerCase();

  console.log('='.repeat(60));
  console.log('ArtiVisi Thumbnail Generator');
  console.log('='.repeat(60));

  let totalRendered = 0;

  if (contentType === 'all') {
    // Render all content types
    Object.keys(CONTENT_TYPES).forEach(type => {
      totalRendered += renderThumbnails(type, CONTENT_TYPES[type]);
    });
  } else if (CONTENT_TYPES[contentType]) {
    // Render specific content type
    totalRendered = renderThumbnails(contentType, CONTENT_TYPES[contentType]);
  } else {
    console.error(`\n✗ Unknown content type: ${contentType}`);
    console.log('\nAvailable types: training, products, projects, all');
    process.exit(1);
  }

  console.log('\n' + '='.repeat(60));
  console.log(`✓ Total ${totalRendered} thumbnail(s) generated!`);
  console.log('='.repeat(60) + '\n');
}

main();
