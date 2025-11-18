const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:1314/');

  // Check wave divider structure
  const waveInfo = await page.evaluate(() => {
    const heroSection = document.querySelector('section');
    const waveDiv = heroSection.querySelector('.absolute.bottom-0');
    const svg = waveDiv.querySelector('svg');

    const heroComputed = window.getComputedStyle(heroSection);
    const waveComputed = window.getComputedStyle(waveDiv);
    const svgComputed = window.getComputedStyle(svg);

    return {
      heroSection: {
        position: heroComputed.position,
        paddingBottom: heroComputed.paddingBottom,
        height: heroComputed.height,
        classes: heroSection.className
      },
      waveContainer: {
        position: waveComputed.position,
        bottom: waveComputed.bottom,
        height: waveComputed.height,
        classes: waveDiv.className,
        boundingRect: waveDiv.getBoundingClientRect()
      },
      svg: {
        height: svgComputed.height,
        classes: svg.className.baseVal
      }
    };
  });

  console.log(JSON.stringify(waveInfo, null, 2));

  await browser.close();
})();
