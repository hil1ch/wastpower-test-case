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
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 8,
    },

    768: {
      spaceBetween: 10,
    },
  },
});

const headerMenuSwiper = new Swiper(".header__menu", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 28,
  centerInsufficientSlides: true,
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
