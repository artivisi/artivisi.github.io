const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

/**
 * Generic Screenshot Tool for External Applications
 *
 * Captures screenshots from external web applications for documentation
 * Supports authentication, multi-page capture, and custom viewports
 *
 * Usage:
 *   node debug/screenshots/screenshot-external-app.js [config-file]
 *
 * Examples:
 *   node debug/screenshots/screenshot-external-app.js atm-solution
 *   node debug/screenshots/screenshot-external-app.js hsm-simulator
 */

/**
 * Screenshot configuration presets
 */
const CONFIGS = {
  'atm-solution': {
    baseUrl: 'http://localhost:7070',
    outputDir: path.join(__dirname, '../../static/img/products/atm-solution'),
    screenshots: [
      {
        url: '/atm',
        filename: '01-atm-interface.png',
        description: 'ATM Simulator Interface',
        fullPage: true
      }
    ],
    auth: null,
    viewport: { width: 1920, height: 1080 }
  },

  'hsm-simulator': {
    baseUrl: 'http://localhost:8080',
    outputDir: path.join(__dirname, '../../static/img/products/atm-solution'),
    screenshots: [
      {
        url: '/keys',
        filename: '02-hsm-keys.png',
        description: 'HSM - Daftar Keys',
        fullPage: true
      },
      {
        url: '/keys/hierarchy',
        filename: '03-hsm-key-hierarchy.png',
        description: 'HSM - Key Hierarchy',
        fullPage: true
      },
      {
        url: '/pins/2ddaaa9c-5b36-46ba-97d3-ec0c45cba7fe/visualize',
        filename: '04-hsm-pin-visualization.png',
        description: 'HSM - PIN Visualization',
        fullPage: true
      },
      {
        url: '/hsm/initialize',
        filename: '05-hsm-key-ceremony.png',
        description: 'HSM - Key Ceremony',
        fullPage: true
      }
    ],
    auth: {
      loginUrl: '/login',
      username: 'admin',
      password: 'admin123',
      usernameSelector: 'input[name="username"]',
      passwordSelector: 'input[name="password"]',
      submitSelector: 'button[type="submit"]'
    },
    viewport: { width: 1920, height: 1080 }
  }
};

/**
 * Authenticate to application
 */
async function authenticate(page, authConfig, baseUrl) {
  if (!authConfig) return;

  console.log('🔐 Logging in...');

  await page.goto(`${baseUrl}${authConfig.loginUrl}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  await page.fill(authConfig.usernameSelector, authConfig.username);
  await page.fill(authConfig.passwordSelector, authConfig.password);

  // Click and wait for navigation with Promise.all to avoid race condition
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle', timeout: 30000 }),
    page.click(authConfig.submitSelector)
  ]);

  console.log('✓ Authentication successful\n');
}

/**
 * Capture screenshots based on configuration
 */
async function captureScreenshots(config) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport
  await page.setViewportSize(config.viewport);

  try {
    // Authenticate if required
    if (config.auth) {
      await authenticate(page, config.auth, config.baseUrl);
    }

    // Create output directory if it doesn't exist
    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
      console.log(`📁 Created directory: ${config.outputDir}\n`);
    }

    // Capture each screenshot
    let successCount = 0;
    for (const shot of config.screenshots) {
      const fullUrl = `${config.baseUrl}${shot.url}`;
      const outputPath = path.join(config.outputDir, shot.filename);

      console.log(`📸 ${shot.description}`);
      console.log(`   URL: ${fullUrl}`);

      try {
        await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(1000); // Wait for animations

        await page.screenshot({
          path: outputPath,
          fullPage: shot.fullPage || false
        });

        console.log(`   ✓ Saved: ${shot.filename}\n`);
        successCount++;
      } catch (error) {
        console.error(`   ✗ Failed: ${error.message}\n`);
      }
    }

    console.log('='.repeat(60));
    console.log(`✓ Captured ${successCount}/${config.screenshots.length} screenshots`);
    console.log('='.repeat(60));

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

/**
 * Main execution
 */
async function main() {
  const configName = process.argv[2] || 'atm-solution';

  console.log('='.repeat(60));
  console.log('External Application Screenshot Tool');
  console.log('='.repeat(60));
  console.log(`Config: ${configName}\n`);

  const config = CONFIGS[configName];

  if (!config) {
    console.error(`✗ Unknown configuration: ${configName}`);
    console.log('\nAvailable configurations:');
    Object.keys(CONFIGS).forEach(key => {
      console.log(`  - ${key}`);
    });
    process.exit(1);
  }

  await captureScreenshots(config);
}

main();
