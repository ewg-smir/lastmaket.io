var burger = document.querySelector('.header__icon.burger');
var closer = document.querySelector('.menu__icon.closer');
var menu = document.querySelector('.menu');
var blurr = document.querySelector('.menu__blur');
var body = document.querySelector('.body');

export function closeMenu() {
  if (window.innerWidth < 1440) {
    menu.style.display = "none";
    body.style.overflow = "";
    blurr.style.display = "";
    menu.classList.toggle('menu-close');

  }
}

export function menus() {
  if (window.innerWidth < 768) {
    burger.addEventListener('click', function () {
      menu.style.display = "flex";
      menu.classList.toggle('menu-close');
    });
    closer.addEventListener('click', function () {
      menu.style.display = "none";
      menu.classList.toggle('menu-close');
    });
  }
  else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
    if (menu.style.display === "flex") {
      blurr.style.display = "block";
      body.style.overflow = "hidden";
    }
    burger.addEventListener('click', function () {
      menu.style.display = "flex";
      menu.classList.toggle('menu-close');
      blurr.style.display = "block";
      body.style.overflow = "hidden";
    });
    closer.addEventListener('click', function () {
      menu.style.display = "none";
      body.style.overflow = "";
      blurr.style.display = "";
      menu.classList.toggle('menu-close');
    });
    blurr.addEventListener('click', function () {
      menu.style.display = "none";
      body.style.overflow = "";
      blurr.style.display = "";
      menu.classList.toggle('menu-close');
    });
  }
  else if (window.innerWidth >= 1440) {
    menu.style.display = "flex";
    body.style.overflow = "auto";
    blurr.style.display = "";
  }
}
menus();
