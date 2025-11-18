const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:1313/');

  // Take screenshot
  await page.screenshot({ path: '/tmp/navbar-desktop.png', fullPage: false });
  console.log('Screenshot saved to /tmp/navbar-desktop.png');

  // Get full navbar HTML
  const navHTML = await page.locator('nav').innerHTML();
  console.log('\n=== FULL NAVBAR HTML ===\n');
  console.log(navHTML.substring(0, 3000));

  await browser.close();
})();
