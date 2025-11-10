const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Navigating to production products page...');
  await page.goto('https://artivisi.com/products/');
  await page.waitForLoadState('networkidle');

  // Check all product cards
  const products = await page.$$('article');
  console.log(`\nFound ${products.length} product cards\n`);

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const title = await product.$eval('h2', el => el.textContent.trim());
    const img = await product.$('img');

    if (img) {
      const src = await img.getAttribute('src');
      const naturalWidth = await img.evaluate(el => el.naturalWidth);
      const naturalHeight = await img.evaluate(el => el.naturalHeight);
      const complete = await img.evaluate(el => el.complete);

      console.log(`Product ${i + 1}: ${title}`);
      console.log(`  Image src: ${src}`);
      console.log(`  Loaded: ${complete}, Size: ${naturalWidth}x${naturalHeight}`);
      console.log(`  Status: ${naturalWidth > 0 ? '✅ OK' : '❌ BROKEN'}\n`);
    } else {
      console.log(`Product ${i + 1}: ${title}`);
      console.log(`  ❌ No image found\n`);
    }
  }

  await browser.close();
})();
