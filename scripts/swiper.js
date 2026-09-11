const popularBrandsSwiper = new Swiper(".popular-brands", {
  loop: false,
  slidesPerView: 6,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init() {
      this.el
        .querySelectorAll(".swiper-button-next svg, .swiper-button-prev svg")
        .forEach((svg) => svg.remove());
    },
    slideChange() {
      this.el
        .querySelectorAll(".swiper-button-next svg, .swiper-button-prev svg")
        .forEach((svg) => svg.remove());
    },
  },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1.3,
  //       spaceBetween: 12,
  //     },
  //     480: {
  //       slidesPerView: 2,
  //       spaceBetween: 12,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //       spaceBetween: 12,
  //     },
  //     1024: {
  //       slidesPerView: 4,
  //       spaceBetween: 12,
  //     },
  //     1280: {
  //       slidesPerView: 5,
  //       spaceBetween: 10,
  //     },
  //   },
});

const headerMenuSwiper = new Swiper(".header__menu", {
  loop: false,
  slidesPerView: 11,
  spaceBetween: 28,
  navigation: {
    nextEl: ".header__menu-next",
    prevEl: ".header__menu-prev",
  },
  on: {
    init() {
      this.el
        .querySelectorAll(".swiper-button-next svg, .swiper-button-prev svg")
        .forEach((svg) => svg.remove());
    },
    slideChange() {
      this.el
        .querySelectorAll(".swiper-button-next svg, .swiper-button-prev svg")
        .forEach((svg) => svg.remove());
    },
  },
});
