const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:1313/');

  console.log('Opening mobile menu...');
  const mobileToggle = await page.locator('#mobileMenuToggle');
  await mobileToggle.click();
  await page.waitForTimeout(300);

  console.log('Clicking Training dropdown...');
  const trainingToggle = await page.locator('.mobile-dropdown-toggle').filter({ hasText: 'Training' });
  await trainingToggle.click();
  await page.waitForTimeout(300);

  console.log('\nMobile dropdown content HTML:');
  const dropdownHTML = await page.locator('.mobile-dropdown-content').first().innerHTML();
  console.log(dropdownHTML);

  console.log('\nChecking visibility:');
  const isVisible = await page.locator('.mobile-dropdown-content').first().isVisible();
  console.log('Content visible:', isVisible);

  const classes = await page.locator('.mobile-dropdown-content').first().getAttribute('class');
  console.log('Classes:', classes);

  await browser.close();
})();
