import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

export const useDiscoverSlider = () => {
    new Swiper('.discover__slider', {
        modules: [Scrollbar],
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 60,
        simulateTouch: true,
        allowTouchMove: true,
        centeredSlides: true,
        breakpoints: {
            1201: {
                slidesPerView: 'auto',
                slidesPerGroup: 2,
                centeredSlides: false,
                spaceBetween: 32,
            },
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                centeredSlides: false,
                spaceBetween: 22,
            },
        },
        scrollbar: {
            el: '.discover__scrollbar',
            draggable: true,
            hide: false,
        },
    });
};

export const useTeamSlider = () => {
    new Swiper('.team__slider', {
        modules: [Scrollbar],
        slidesPerView: 'auto',
        spaceBetween: 60,
        simulateTouch: true,
        allowTouchMove: true,
        centeredSlides: true,
        breakpoints: {
            1201: {
                spaceBetween: 32,
                centeredSlides: false,
            },
            769: {
                spaceBetween: 32,
                // centeredSlides: false,
            },
        },
        scrollbar: {
            el: '.team__scrollbar',
            draggable: true,
            hide: false,
        },
    });
};
