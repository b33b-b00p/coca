import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        simulateTouch: true,
        allowTouchMove: true,
        centeredSlides: true,
        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [Navigation],
        slidesPerView: 1,
        simulateTouch: true,
        allowTouchMove: true,
        centeredSlides: true,

        navigation: {
            prevEl: '.testimonials__prev',
            nextEl: '.testimonials__next',
        },
    });
};
