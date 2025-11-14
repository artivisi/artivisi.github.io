const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DIAGRAMS_DIR = path.join(__dirname, 'training-thumbnails');
const OUTPUT_DIR = path.join(__dirname, '..', 'static', 'img', 'training-catalog');

const diagrams = [
  'spring-boot-development',
  'application-security',
  'vault-credential-management',
  'java-oop-design-patterns',
  'git-collaboration',
  'playwright-testing'
];

console.log('Rendering training thumbnail diagrams using Mermaid CLI...\n');

diagrams.forEach(diagram => {
  const mermaidFile = path.join(DIAGRAMS_DIR, `${diagram}.mmd`);
  const outputDir = path.join(OUTPUT_DIR, diagram);
  const outputFile = path.join(outputDir, 'thumbnail.png');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Use mmdc (mermaid-cli) to render diagram as PNG
    // --scale 3 for 3x resolution
    execSync(
      `mmdc -i "${mermaidFile}" -o "${outputFile}" -s 3 -b transparent`,
      { stdio: 'pipe' }
    );
    console.log(`✓ Generated: ${path.basename(outputFile)}`);
  } catch (error) {
    console.error(`✗ Failed to render ${diagram}:`, error.message);
  }
});

console.log('\n✓ All diagrams rendered successfully!');
