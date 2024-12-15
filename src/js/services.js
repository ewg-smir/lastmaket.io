var servicesButton = document.querySelector('.services__button');
var information = document.querySelector('.services__information');
var servicesText = document.querySelector('.services__text');
var informations = information.getElementsByTagName('span');
var buttonImg = servicesButton.querySelector('.services__button-img');
var servicesButtonText = servicesButton.querySelector('.services__button-text');
var informationDesctop = servicesText.querySelector('.services__information-desctop');

let isEventAdded = false;

function services() {
  if (!isEventAdded) {
    isEventAdded = true;

    servicesButton.addEventListener('click', function () {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1440;
      const isDesktop = window.innerWidth >= 1440;

      if (isMobile) {
        toggleElements([information, informations[0], informationDesctop]); 
      } else if (isTablet) {
        toggleElements([informations[0], informationDesctop]); 
      } else if (isDesktop) {
        toggleElements([informationDesctop]); 
      }
    });
  }

  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1440;
  const isDesktop = window.innerWidth >= 1440;

  if (isMobile) {
    resetDisplay(["none", "none", "none"], "Читать далее", "rotate(0deg)"); 
  } else if (isTablet) {
    resetDisplay(["block", "none", "none"], "Читать далее", "rotate(0deg)"); 
  } else if (isDesktop) {
    resetDisplay(["block", "block", "none"], "Читать далее", "rotate(0deg)");
  }
}

function toggleElements(elements) {
  let isAnyVisible = elements.some(
    (element) => element.style.display === "block" || element.style.display === ""
  );

  elements.forEach((element) => {
    element.style.display = isAnyVisible ? "none" : "block";
  });


  if (isAnyVisible) {
    servicesButtonText.textContent = "Читать далее";
    buttonImg.style.transform = "rotate(0deg)";
  } else {
    servicesButtonText.textContent = "Скрыть";
    buttonImg.style.transform = "rotate(180deg)";
  }
}

function resetDisplay(states, buttonText, iconTransform) {
  [information, informations[0], informationDesctop].forEach((element, index) => {
    element.style.display = states[index];
  });


  servicesButtonText.textContent = buttonText;
  buttonImg.style.transform = iconTransform;
}

services();
window.addEventListener("resize", () => {
  services();
});
