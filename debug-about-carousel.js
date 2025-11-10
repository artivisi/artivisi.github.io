const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:1314/about_us/');
  await page.waitForTimeout(2000);

  // Check carousel container styles
  const carouselInfo = await page.evaluate(() => {
    const carousel = document.querySelector('.swiper-container');
    const pagination = document.querySelector('.swiper-pagination');
    const slides = document.querySelectorAll('.swiper-slide');
    const images = document.querySelectorAll('.swiper-slide img');

    if (!carousel) return { error: 'Carousel not found' };

    const carouselStyles = window.getComputedStyle(carousel);
    const paginationStyles = pagination ? window.getComputedStyle(pagination) : null;

    return {
      carousel: {
        position: carouselStyles.position,
        height: carouselStyles.height,
        display: carouselStyles.display,
        aspectRatio: carouselStyles.aspectRatio,
      },
      pagination: pagination ? {
        position: paginationStyles.position,
        bottom: paginationStyles.bottom,
        top: paginationStyles.top,
        left: paginationStyles.left,
        right: paginationStyles.right,
        zIndex: paginationStyles.zIndex,
      } : 'not found',
      slides: Array.from(slides).map((slide, i) => {
        const styles = window.getComputedStyle(slide);
        const img = images[i];
        const imgStyles = img ? window.getComputedStyle(img) : null;
        return {
          index: i,
          height: styles.height,
          display: styles.display,
          image: img ? {
            src: img.src.split('/').pop(),
            width: imgStyles.width,
            height: imgStyles.height,
            objectFit: imgStyles.objectFit,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            aspectRatio: `${img.naturalWidth}x${img.naturalHeight}`
          } : null
        };
      })
    };
  });

  console.log('Carousel Debug Info:');
  console.log(JSON.stringify(carouselInfo, null, 2));

  await browser.close();
})();
