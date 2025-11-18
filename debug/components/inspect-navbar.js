const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:1313/');

  console.log('Inspecting navbar structure...\n');

  // Get all text content from nav
  const navContent = await page.locator('nav ul').first().innerText();
  console.log('Navbar text content:');
  console.log(navContent);
  console.log('\n---\n');

  // Get HTML of nav
  const navHTML = await page.locator('nav ul').first().innerHTML();
  console.log('Navbar HTML:');
  console.log(navHTML.substring(0, 1000));

  await browser.close();
})();
