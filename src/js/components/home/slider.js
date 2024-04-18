import Swiper from 'swiper';
import { Navigation, Scrollbar, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        modules: [Scrollbar],
        slidesPerView: 'auto',
        spaceBetween: 32,
        simulateTouch: true,
        allowTouchMove: true,
        centeredSlides: true,
        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
        scrollbar: {
            el: '.insight__scrollbar',
            draggable: true,
        },
    });
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [Navigation, EffectFade],
        effect: 'fade',
        crossFade: true,
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
