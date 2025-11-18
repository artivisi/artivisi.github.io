const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Testing dropdown menu...\n');

  // Test desktop view
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:1313/');

  console.log('✓ Desktop view loaded');

  // Check if Training menu exists
  const trainingMenu = await page.locator('button.dropdown-toggle').filter({ hasText: 'Training' }).first();
  const isVisible = await trainingMenu.isVisible();

  if (isVisible) {
    console.log('✓ Training dropdown button found in desktop navbar');

    // Hover over Training menu to reveal dropdown
    await trainingMenu.hover();
    await page.waitForTimeout(500);

    // Check if dropdown menu is visible
    const dropdownMenu = await page.locator('.dropdown-menu').first();
    const dropdownVisible = await dropdownMenu.isVisible();

    if (dropdownVisible) {
      console.log('✓ Dropdown menu appears on hover');

      // Check dropdown items
      const katalogLink = await page.locator('a:has-text("Katalog Program")').first();
      const portfolioLink = await page.locator('a:has-text("Portfolio Pelatihan")').first();

      const katalogVisible = await katalogLink.isVisible();
      const portfolioVisible = await portfolioLink.isVisible();

      if (katalogVisible && portfolioVisible) {
        console.log('✓ Both dropdown items visible:');
        console.log('  - Katalog Program');
        console.log('  - Portfolio Pelatihan');
      } else {
        console.log('✗ Missing dropdown items');
      }
    } else {
      console.log('✗ Dropdown menu not visible on hover');
    }
  } else {
    console.log('✗ Training dropdown button not found');
  }

  console.log('\n--- Testing Mobile View ---\n');

  // Test mobile view
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:1313/');

  console.log('✓ Mobile view loaded');

  // Click mobile menu toggle
  const mobileToggle = await page.locator('#mobileMenuToggle');
  await mobileToggle.click();
  await page.waitForTimeout(300);

  console.log('✓ Mobile menu opened');

  // Check if Training dropdown toggle exists in mobile menu
  const mobileDropdownToggle = await page.locator('.mobile-dropdown-toggle').filter({ hasText: 'Training' }).first();
  const mobileToggleVisible = await mobileDropdownToggle.isVisible();

  if (mobileToggleVisible) {
    console.log('✓ Training dropdown toggle found in mobile menu');

    // Click to expand dropdown
    await mobileDropdownToggle.click();
    await page.waitForTimeout(300);

    // Check if dropdown content is visible
    const mobileDropdownContent = await page.locator('.mobile-dropdown-content').first();
    const mobileContentVisible = await mobileDropdownContent.isVisible();

    if (mobileContentVisible) {
      console.log('✓ Mobile dropdown expands on click');

      const katalogMobile = await page.locator('a:has-text("Katalog Program")').first();
      const portfolioMobile = await page.locator('a:has-text("Portfolio Pelatihan")').first();

      const katalogMobileVisible = await katalogMobile.isVisible();
      const portfolioMobileVisible = await portfolioMobile.isVisible();

      if (katalogMobileVisible && portfolioMobileVisible) {
        console.log('✓ Both mobile dropdown items visible');
      } else {
        console.log('✗ Missing mobile dropdown items');
      }
    } else {
      console.log('✗ Mobile dropdown content not visible');
    }
  } else {
    console.log('✗ Training dropdown toggle not found in mobile menu');
  }

  console.log('\n--- Testing Other Menu Items ---\n');

  // Check other menu items still work
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:1313/');

  const menuItems = ['About Us', 'Product', 'Project', 'Consulting'];

  for (const item of menuItems) {
    const menuLink = await page.locator(`nav a:has-text("${item}")`).first();
    const exists = await menuLink.isVisible();
    if (exists) {
      console.log(`✓ ${item} menu item present`);
    } else {
      console.log(`✗ ${item} menu item missing`);
    }
  }

  console.log('\nDropdown menu test completed!');

  await browser.close();
})();
