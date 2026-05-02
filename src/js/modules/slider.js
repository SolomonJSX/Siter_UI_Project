import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const initSlider = () => {
    // Находим все контейнеры слайдеров на странице
    const sliderContainers = document.querySelectorAll('.cases__slider-container');

    sliderContainers.forEach(container => {
        // Для каждого контейнера находим его собственные элементы управления
        // Это позволяет иметь несколько независимых слайдеров на одной странице
        const sliderEl = container.querySelector('.js-cases-slider');
        const nextBtn = container.querySelector('.js-cases-next');
        const prevBtn = container.querySelector('.js-cases-prev');

        // Пагинация может быть вне контейнера кнопок, ищем в ближайшем родителе (секции)
        const section = container.closest('.cases');
        const paginationEl = section.querySelector('.js-cases-pagination');

        if (!sliderEl) return;

        new Swiper(sliderEl, {
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            speed: 600,
            grabCursor: true,

            pagination: {
                el: paginationEl,
                clickable: true,
            },

            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },

            breakpoints: {
                320: { autoHeight: false },
                1024: { autoHeight: false }
            }
        });
    });
};