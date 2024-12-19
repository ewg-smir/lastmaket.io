new Swiper('.tehnic__cats-slider', {
  cssMode: 'true',
  pagination: {
    el: '.tehnic-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1.15,
      spaceBetween: 16,
      width:326,
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
      spaceBetween: 'auto',
    }
  }
});
var button = document.querySelector('.tehnic__button');
var buttonTextOpen = document.querySelector('.button2__text--open');
var buttonTextClose = document.querySelector('.button2__text--close');
var tehnicWrapper = document.querySelector('.tehnic-wrapper');
var hiddenItems = document.querySelectorAll(".tehnic-slide.hidden");
var closeItems = document.querySelectorAll(".tehnic-slide.hidden.close");

if ( window.innerWidth > 768 && window.innerWidth < 1440){
  button.addEventListener('click', function () {
    hiddenItems.forEach(item => {
      item .classList.toggle('visible');
    
    });
    // closeItems.forEach(item => {
    //   item .classList.toggle('visible');
    // });
    
    if (buttonTextClose.style.display == "none") {
      
      buttonTextClose.style.display = "block";
      buttonTextOpen.style.display = "none";
      button.querySelector(".tehnic__button-img").style.transform = "rotate(360deg)";
    }
    else {
      
      buttonTextClose.style.display = "none";
      buttonTextOpen.style.display = "block";
      button.querySelector(".tehnic__button-img").style.transform = "rotate(180deg)";
    }
  });
}
else if ( window.innerWidth >= 1440){

  button.addEventListener('click', function () {
    closeItems.forEach(item => {
      item .classList.toggle('visible');
    });
    if (buttonTextClose.style.display == "none") {
      
      buttonTextClose.style.display = "block";
      buttonTextOpen.style.display = "none";
      button.querySelector(".tehnic__button-img").style.transform = "rotate(360deg)";
    }
    else {
      
      buttonTextClose.style.display = "none";
      buttonTextOpen.style.display = "block";
      button.querySelector(".tehnic__button-img").style.transform = "rotate(180deg)";
    }
  });
}