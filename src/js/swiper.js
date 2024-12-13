new Swiper('.swiper__cats-slider', {
  cssMode: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1.15,
      spaceBetween: 1,
      width:326,
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 'auto',
    }
  }
});
var button = document.querySelector('.swiper__button');
var buttonTextOpen = document.querySelector('.button__text--open');
var buttonTextClose = document.querySelector('.button__text--close');
var swiperWrapper = document.querySelector('.swiper-wrapper');
button.addEventListener('click', function () {
  swiperWrapper.classList.toggle('open');
  if (buttonTextClose.style.display == "none") {
    
    buttonTextClose.style.display = "block";
    buttonTextOpen.style.display = "none";
    button.querySelector(".swiper__button-img").style.transform = "rotate(360deg)";
  }
  else {
    
    buttonTextClose.style.display = "none";
    buttonTextOpen.style.display = "block";
    button.querySelector(".swiper__button-img").style.transform = "rotate(180deg)";
  }
});