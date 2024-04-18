import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export const usePartnersSlider = () => {
    new Swiper('.partners__slider', {
        modules: [Autoplay],
        slidesPerView: 'auto',
        spaceBetween: 32,
        simulateTouch: false,
        allowTouchMove: false,
        draggable: false,
        loop: true,
        speed: 600,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
};
