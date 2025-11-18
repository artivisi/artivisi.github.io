const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:1314/');

  // Check hero section structure
  const heroInfo = await page.evaluate(() => {
    const heroSection = document.querySelector('section');
    const heroContainer = heroSection.querySelector('.max-w-7xl');
    const trustedLabel = document.querySelector('.inline-block');

    const heroSectionComputed = window.getComputedStyle(heroSection);
    const heroContainerComputed = window.getComputedStyle(heroContainer);

    return {
      heroSection: {
        paddingTop: heroSectionComputed.paddingTop,
        paddingBottom: heroSectionComputed.paddingBottom,
        classes: heroSection.className
      },
      heroContainer: {
        paddingTop: heroContainerComputed.paddingTop,
        paddingBottom: heroContainerComputed.paddingBottom,
        classes: heroContainer.className
      },
      trustedLabel: {
        text: trustedLabel.textContent.trim(),
        marginBottom: window.getComputedStyle(trustedLabel).marginBottom,
        offsetTop: trustedLabel.offsetTop,
        classes: trustedLabel.className
      },
      distanceFromNavbar: trustedLabel.getBoundingClientRect().top
    };
  });

  console.log(JSON.stringify(heroInfo, null, 2));

  await browser.close();
})();
