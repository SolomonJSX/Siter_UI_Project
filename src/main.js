import './scss/main.scss';
import { initModal } from './js/modules/modal';
import { initMarquee } from './js/modules/marquee'
import { initDropdowns } from './js/modules/dropdown'
import { initSlider } from './js/modules/slider'
import { initAccordion } from './js/modules/accordion'
import { initSelectDropdown } from './js/modules/select-dropdown';
import { initBurger } from './js/modules/header';

document.addEventListener('DOMContentLoaded', () => {
    initAccordion();
    initModal();
    initMarquee();
    initDropdowns();
    initSlider();
    initSelectDropdown();
    initBurger();
});