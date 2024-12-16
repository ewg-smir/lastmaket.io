var chat = document.querySelector('.menu__icon.chat');
var chat2 = document.querySelector('.header__icon.chat');
var closer = document.querySelector('.modalFeedback__icon.closer');
var menu = document.querySelector('.menu');
var modalFeedback = document.querySelector('.modalFeedback');
var blurr = document.querySelector('.menu__blur');
var container = document.querySelector('.container');
var body = document.querySelector('.body');

export function feedback() {
  if ( window.innerWidth< 768) {
    chat.addEventListener('click',function(){
      menu.style.display = "none";
      modalFeedback.style.display = "flex";
      body.style.overflow = "hidden";
      container.style.display = "none";
      modalFeedback.classList.toggle('modalFeedback-close');
    });
    closer.addEventListener('click',function(){
      container.style.display = "flex";
      modalFeedback.style.display = "none";
      modalFeedback.classList.toggle('modalFeedback-close');
    });
  }
  else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    chat2.addEventListener('click',function(){
      menu.style.display = "none";
      modalFeedback.style.display = "flex";
      body.style.overflow = "hidden";
      container.style.display = "none";
      modalFeedback.classList.toggle('modalFeedback-close');
    });
    chat.addEventListener('click',function(){
      menu.style.display = "none";
      blurr.style.display = "none";
      modalFeedback.style.display = "flex";
      body.style.overflow = "hidden";
      container.style.display = "none";
      modalFeedback.classList.toggle('modalFeedback-close');
    });
    blurr.addEventListener('click',function(){
      menu.style.display = "none";
      body.style.overflow = "";
      blurr.style.display = "";
      modalFeedback.classList.toggle('modalFeedback-close');
    });
    closer.addEventListener('click',function(){
      menu.style.display = "none";
      container.style.display = "flex";
      body.style.overflow = "auto";
      modalFeedback.style.display = "none";
      modalFeedback.classList.toggle('modalFeedback-close');
    });
  }
  else if (window.innerWidth >= 1440){
    menu.style.display = "flex";
    body.style.overflow = "auto";
    blurr.style.display = "none";
    chat.addEventListener('click',function(){
      body.style.overflow = "hidden";
      blurr.style.display = "block";
      blurr.style.zIndex = "6";
      menu.style.zIndex = "3";
      menu.classList.toggle('menu-close');
      modalFeedback.style.display = "flex";
      modalFeedback.style.zIndex = "12";
      modalFeedback.classList.toggle('modalFeedback-close');
    });
    closer.addEventListener('click',function(){
      blurr.style.display = "none";
      menu.style.display = "flex";
      container.style.display = "flex";
      body.style.overflow = "auto";
      modalFeedback.style.display = "none";
      blurr.style.zIndex = "";
      modalFeedback.style.zIndex = "";
      modalFeedback.classList.toggle('modalFeedback-close');
    });
  }
}

feedback();