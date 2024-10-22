let switchers = document.querySelectorAll(".switcher");
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
});

var swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // Durasi transisi antar slide dalam milidetik
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

const swiperAbout = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 2000, // Durasi setiap slide dalam milidetik
    disableOnInteraction: false, // Autoplay akan terus berjalan meskipun ada interaksi
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

$('[data-magnify]').magnify({
  headerToolbar: [
    'close'
  ],
  footerToolbar: [
    'zoomIn',
    'zoomOut',
    'prev',
    'fullscreen',
    'next',
    'actualSize',
    'rotateRight'
  ],
  title: false
});