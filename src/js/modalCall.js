var call = document.querySelector('.menu__icon.call');
var call2 = document.querySelector('.header__icon.call');
var closer = document.querySelector('.modalCall__icon.closer');
var menu = document.querySelector('.menu');
var modalCall = document.querySelector('.modalCall');
var blurr = document.querySelector('.menu__blur');
var container = document.querySelector('.container');
var body = document.querySelector('.body');

export function feedCall() {
  if ( window.innerWidth< 768) {
    call.addEventListener('click',function(){
      menu.style.display = "none";
      modalCall.style.display = "flex";
      body.style.overflow = "hidden";
      container.style.display = "none";
      modalCall.classList.toggle('modalCall-close');
    });
    closer.addEventListener('click',function(){
      container.style.display = "flex";
      modalCall.style.display = "none";
      modalCall.classList.toggle('modalCall-close');
    });
  }
  else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    call2.addEventListener('click',function(){
      menu.style.display = "none";
      modalCall.style.display = "flex";
      body.style.overflow = "hidden";
      container.style.display = "none";
      modalCall.classList.toggle('modalCall-close');
    });
    call.addEventListener('click',function(){
      menu.style.display = "none";
      blurr.style.display = "none";
      modalCall.style.display = "flex";
      body.style.overflow = "hidden";
      container.style.display = "none";
      modalCall.classList.toggle('modalCall-close');
    });
    blurr.addEventListener('click',function(){
      menu.style.display = "none";
      body.style.overflow = "";
      blurr.style.display = "";
      modalCall.classList.toggle('modalCall-close');
    });
    closer.addEventListener('click',function(){
      menu.style.display = "none";
      container.style.display = "flex";
      body.style.overflow = "auto";
      modalCall.style.display = "none";
      modalCall.classList.toggle('modalCall-close');
    });
  }
  else if (window.innerWidth >= 1440){
    menu.style.display = "flex";
    body.style.overflow = "auto";
    blurr.style.display = "none";
    call.addEventListener('click',function(){
      body.style.overflow = "hidden";
      blurr.style.display = "block";
      blurr.style.zIndex = "6";
      menu.style.zIndex = "3";
      menu.classList.toggle('menu-close');
      modalCall.style.display = "flex";
      modalCall.style.zIndex = "12";
      modalCall.classList.toggle('modalCall-close');
    });
    closer.addEventListener('click',function(){
      blurr.style.display = "none";
      menu.style.display = "flex";
      container.style.display = "flex";
      body.style.overflow = "auto";
      modalCall.style.display = "none";
      blurr.style.zIndex = "";
      modalCall.style.zIndex = "";
      modalCall.classList.toggle('modalCall-close');
    });
    blurr.addEventListener('click', function () {
      modalCall.style.display = "none";
      body.style.overflow = "";
      blurr.style.display = "none";
      modalCall.classList.toggle('modalCall-close');
    });
  }
}

feedCall();