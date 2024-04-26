import Swiper from 'swiper';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

export const useActivitySlider = () => {
    new Swiper('.activity__slider', {
        modules: [Scrollbar],
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 42,
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
            993: {
                // slidesPerView: 2,
                // slidesPerGroup: 2,
                // centeredSlides: false,
                spaceBetween: 22,
            },
        },
        scrollbar: {
            el: '.activity__scrollbar',
            draggable: true,
            hide: false,
        },
    });
};

export const useActivityTabs = () => {
    const tabControls = document.querySelector('.slider-tab-controls');
    const allContent = document.querySelectorAll('.slider-tab-content');

    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest('.slider-tab-controls__link');

        if (!tabControl) return;

        e.preventDefault();
        if (tabControl.classList.contains('slider-tab-controls__link--active'))
            return;

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelectorAll(tabContentID);
        const activeContent = document.querySelectorAll(
            '.slider-tab-content--show',
        );
        const activeControl = document.querySelector(
            '.slider-tab-controls__link--active',
        );

        if (activeContent) {
            activeContent.forEach((e) => {
                e.classList.remove('slider-tab-content--show');
            });
        }
        if (activeControl) {
            activeControl.classList.remove('slider-tab-controls__link--active');
        }

        if (tabContentID === '#all') {
            allContent.forEach((e) => {
                e.classList.add('slider-tab-content--show');
            });
        } else {
            tabContent.forEach((e) => {
                e.classList.add('slider-tab-content--show');
            });
        }
        tabControl.classList.add('slider-tab-controls__link--active');
    }
};
