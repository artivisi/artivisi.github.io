/**
 * Simple Lightbox for Image Gallery
 * Allows clicking images to view them full-screen with zoom
 */

(function() {
  'use strict';

  // Create lightbox HTML structure
  function createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <button class="lightbox-prev" aria-label="Previous">‹</button>
        <button class="lightbox-next" aria-label="Next">›</button>
        <div class="lightbox-image-container">
          <img src="" alt="" class="lightbox-image">
        </div>
        <div class="lightbox-caption"></div>
        <div class="lightbox-counter"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
    return lightbox;
  }

  // Initialize lightbox
  function initLightbox() {
    const lightbox = createLightbox();
    const overlay = lightbox.querySelector('.lightbox-overlay');
    const content = lightbox.querySelector('.lightbox-content');
    const image = lightbox.querySelector('.lightbox-image');
    const caption = lightbox.querySelector('.lightbox-caption');
    const counter = lightbox.querySelector('.lightbox-counter');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const imageContainer = lightbox.querySelector('.lightbox-image-container');

    let images = [];
    let currentIndex = 0;
    let scale = 1;
    let panning = false;
    let pointX = 0;
    let pointY = 0;
    let startX = 0;
    let startY = 0;

    // Find all images in article content (screenshots)
    function gatherImages() {
      images = Array.from(document.querySelectorAll('article img, .gallery img'));
      images.forEach((img, index) => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => openLightbox(index));
      });
    }

    // Open lightbox at specific index
    function openLightbox(index) {
      currentIndex = index;
      updateImage();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      resetZoom();
    }

    // Update displayed image
    function updateImage() {
      const img = images[currentIndex];
      image.src = img.src;
      image.alt = img.alt || '';
      caption.textContent = img.alt || '';
      counter.textContent = `${currentIndex + 1} / ${images.length}`;

      // Show/hide navigation buttons
      prevBtn.style.display = currentIndex > 0 ? 'block' : 'none';
      nextBtn.style.display = currentIndex < images.length - 1 ? 'block' : 'none';

      resetZoom();
    }

    // Navigation
    function showPrevious() {
      if (currentIndex > 0) {
        currentIndex--;
        updateImage();
      }
    }

    function showNext() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
      }
    }

    // Zoom functionality
    function resetZoom() {
      scale = 1;
      pointX = 0;
      pointY = 0;
      updateTransform();
    }

    function updateTransform() {
      image.style.transform = `translate(${pointX}px, ${pointY}px) scale(${scale})`;
    }

    function zoom(delta, clientX, clientY) {
      const rect = image.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const oldScale = scale;
      scale = Math.max(0.5, Math.min(5, scale + delta));

      if (scale !== oldScale) {
        const ratio = scale / oldScale - 1;
        pointX -= x * ratio;
        pointY -= y * ratio;
        updateTransform();
      }
    }

    // Mouse wheel zoom
    imageContainer.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      zoom(delta, e.clientX, e.clientY);
    });

    // Double click to zoom
    image.addEventListener('dblclick', (e) => {
      if (scale === 1) {
        zoom(1, e.clientX, e.clientY);
      } else {
        resetZoom();
      }
    });

    // Pan functionality
    image.addEventListener('mousedown', (e) => {
      if (scale > 1) {
        panning = true;
        startX = e.clientX - pointX;
        startY = e.clientY - pointY;
        image.style.cursor = 'grabbing';
      }
    });

    document.addEventListener('mousemove', (e) => {
      if (panning) {
        pointX = e.clientX - startX;
        pointY = e.clientY - startY;
        updateTransform();
      }
    });

    document.addEventListener('mouseup', () => {
      panning = false;
      image.style.cursor = scale > 1 ? 'grab' : 'default';
    });

    // Touch support for mobile
    let initialDistance = 0;
    let initialScale = 1;

    imageContainer.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        initialDistance = getDistance(e.touches[0], e.touches[1]);
        initialScale = scale;
      } else if (e.touches.length === 1 && scale > 1) {
        panning = true;
        startX = e.touches[0].clientX - pointX;
        startY = e.touches[0].clientY - pointY;
      }
    });

    imageContainer.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const distance = getDistance(e.touches[0], e.touches[1]);
        const newScale = Math.max(0.5, Math.min(5, initialScale * (distance / initialDistance)));
        scale = newScale;
        updateTransform();
      } else if (e.touches.length === 1 && panning) {
        e.preventDefault();
        pointX = e.touches[0].clientX - startX;
        pointY = e.touches[0].clientY - startY;
        updateTransform();
      }
    });

    imageContainer.addEventListener('touchend', () => {
      panning = false;
    });

    function getDistance(touch1, touch2) {
      const dx = touch1.clientX - touch2.clientX;
      const dy = touch1.clientY - touch2.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }

    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevious);
    nextBtn.addEventListener('click', showNext);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          showPrevious();
          break;
        case 'ArrowRight':
          showNext();
          break;
        case '+':
        case '=':
          zoom(0.2, window.innerWidth / 2, window.innerHeight / 2);
          break;
        case '-':
        case '_':
          zoom(-0.2, window.innerWidth / 2, window.innerHeight / 2);
          break;
        case '0':
          resetZoom();
          break;
      }
    });

    // Initialize
    gatherImages();

    // Re-gather images if DOM changes (for SPA-like behavior)
    const observer = new MutationObserver(() => {
      gatherImages();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
  } else {
    initLightbox();
  }
})();
