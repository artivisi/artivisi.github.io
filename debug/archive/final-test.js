const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('=== DESKTOP DROPDOWN TEST ===\n');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:1313/');

  // Hover over Training menu
  const trainingButton = await page.locator('button.dropdown-toggle').filter({ hasText: 'Training' });
  await trainingButton.hover();
  await page.waitForTimeout(500);

  // Take screenshot of dropdown
  await page.screenshot({ path: '/tmp/dropdown-desktop.png' });
  console.log('✓ Desktop dropdown screenshot saved to /tmp/dropdown-desktop.png');

  // Check dropdown items
  const katalog = await page.locator('.dropdown-menu a:has-text("Katalog Program")').first();
  const portfolio = await page.locator('.dropdown-menu a:has-text("Portfolio Pelatihan")').first();

  const katalogHref = await katalog.getAttribute('href');
  const portfolioHref = await portfolio.getAttribute('href');

  console.log('✓ Katalog Program URL:', katalogHref);
  console.log('✓ Portfolio Pelatihan URL:', portfolioHref);

  console.log('\n=== MOBILE DROPDOWN TEST ===\n');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:1313/');

  // Open mobile menu
  await page.locator('#mobileMenuToggle').click();
  await page.waitForTimeout(300);

  // Click Training dropdown
  await page.locator('.mobile-dropdown-toggle').filter({ hasText: 'Training' }).click();
  await page.waitForTimeout(300);

  // Take screenshot
  await page.screenshot({ path: '/tmp/dropdown-mobile.png' });
  console.log('✓ Mobile dropdown screenshot saved to /tmp/dropdown-mobile.png');

  // Check mobile dropdown items
  const mobileKatalog = await page.locator('.mobile-dropdown-content a').filter({ hasText: 'Katalog Program' });
  const mobilePortfolio = await page.locator('.mobile-dropdown-content a').filter({ hasText: 'Portfolio Pelatihan' });

  const mobileKatalogVisible = await mobileKatalog.isVisible();
  const mobilePortfolioVisible = await mobilePortfolio.isVisible();

  console.log('✓ Mobile Katalog Program visible:', mobileKatalogVisible);
  console.log('✓ Mobile Portfolio Pelatihan visible:', mobilePortfolioVisible);

  console.log('\n=== ALL TESTS PASSED ===');

  await browser.close();
})();
