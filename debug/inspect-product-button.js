const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:1314/products/');

  // Check button styles
  const buttonInfo = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('a'));

    return buttons
      .filter(btn => btn.textContent.includes('Detail') || btn.className.includes('bg-primary'))
      .map((btn, index) => {
        const computed = window.getComputedStyle(btn);
        const parent = btn.closest('article') || btn.parentElement;
        const parentComputed = window.getComputedStyle(parent);

        return {
          index: index,
          text: btn.textContent.trim().substring(0, 50),
          href: btn.href,
          classes: btn.className,
          computed: {
            color: computed.color,
            backgroundColor: computed.backgroundColor,
            display: computed.display
          },
          parent: {
            color: parentComputed.color,
            backgroundColor: parentComputed.backgroundColor
          }
        };
      });
  });

  console.log(JSON.stringify(buttonInfo, null, 2));

  await browser.close();
})();
