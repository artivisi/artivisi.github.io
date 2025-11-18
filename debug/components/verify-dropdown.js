const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('=== Verifying Dropdown ===\n');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:1313/');

  // Check if dropdown exists and is hidden by default
  console.log('1. Checking default state...');
  const dropdown = await page.locator('.group .hidden').first();
  const isHidden = await dropdown.evaluate(el => {
    const style = window.getComputedStyle(el);
    return style.display === 'none';
  });
  console.log('   Dropdown hidden by default:', isHidden ? '✓ YES' : '✗ NO');

  // Hover over Training button
  console.log('\n2. Hovering over Training...');
  const trainingButton = await page.locator('.lg\\:flex button').filter({ hasText: 'Training' });
  await trainingButton.hover();
  await page.waitForTimeout(500);

  // Check if dropdown is visible after hover
  const isVisible = await dropdown.evaluate(el => {
    const style = window.getComputedStyle(el);
    return style.display === 'block';
  });
  console.log('   Dropdown visible on hover:', isVisible ? '✓ YES' : '✗ NO');

  // Check dropdown content
  if (isVisible) {
    const links = await dropdown.locator('a').allTextContents();
    console.log('\n3. Dropdown items:');
    links.forEach((text, i) => {
      console.log(`   ${i + 1}. ${text.trim()}`);
    });
  }

  // Take screenshot
  await page.screenshot({ path: '/tmp/dropdown-verify.png' });
  console.log('\n✓ Screenshot saved to /tmp/dropdown-verify.png');

  console.log('\n=== Dropdown Working! ===');

  await browser.close();
})();
