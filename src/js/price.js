new Swiper('.price__cats-slider', {
  cssMode: 'true',
  pagination: {
    el: '.price-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1.15,
      spaceBetween:16,
      width:326,
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 'auto',
    }
  }
});