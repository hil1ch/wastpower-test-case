const popularBrandsSwiper = new Swiper(".popular-brands", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 10,
  //   watchOverflow: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

    addIcons: true,
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
