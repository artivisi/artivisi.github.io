const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:1314/projects/');

  // Check body computed styles
  const bodyStyles = await page.evaluate(() => {
    const body = document.querySelector('body');
    const computed = window.getComputedStyle(body);
    return {
      paddingTop: computed.paddingTop,
      minHeight: computed.minHeight,
      display: computed.display,
      flexDirection: computed.flexDirection,
      classes: body.className
    };
  });
  console.log('BODY styles:');
  console.log(JSON.stringify(bodyStyles, null, 2));

  // Check navbar computed styles
  const navStyles = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    const computed = window.getComputedStyle(nav);
    return {
      position: computed.position,
      top: computed.top,
      left: computed.left,
      right: computed.right,
      zIndex: computed.zIndex,
      height: computed.height,
      classes: nav.className
    };
  });
  console.log('\nNAVBAR computed styles:');
  console.log(JSON.stringify(navStyles, null, 2));

  // Check navbar's actual position on screen
  const navPosition = await page.evaluate(() => {
    const nav = document.querySelector('nav');
    const rect = nav.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    };
  });
  console.log('\nNAVBAR bounding rect:');
  console.log(JSON.stringify(navPosition, null, 2));

  // Check main element styles
  const mainStyles = await page.evaluate(() => {
    const main = document.querySelector('main');
    const computed = window.getComputedStyle(main);
    return {
      paddingTop: computed.paddingTop,
      flexGrow: computed.flexGrow,
      classes: main.className
    };
  });
  console.log('\nMAIN styles:');
  console.log(JSON.stringify(mainStyles, null, 2));

  // Check if pt-28 class exists in CSS
  const pt28Exists = await page.evaluate(() => {
    const sheets = Array.from(document.styleSheets);
    for (const sheet of sheets) {
      try {
        const rules = Array.from(sheet.cssRules || []);
        for (const rule of rules) {
          if (rule.selectorText && rule.selectorText.includes('pt-28')) {
            return { found: true, css: rule.cssText };
          }
        }
      } catch (e) {
        // CORS might block some stylesheets
      }
    }
    return { found: false };
  });
  console.log('\npt-28 class:');
  console.log(JSON.stringify(pt28Exists, null, 2));

  await browser.close();
})();
