import '../scss/style.scss';
import '../js/services.js';
import '../js/swiper.js';
import '../js/tehnic.js';
import '../js/price.js';
import '../js/menu.js';
import '../js/modalFeedback.js';
import { closeMenu, menus } from '../js/menu.js';
import { feedback } from '../js/modalFeedback.js';
import { services } from '../js/services.js';

window.addEventListener("resize", () => {
  services();
  menus();
  feedback();
  closeMenu();
});