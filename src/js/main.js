import '../assets/scss/main.scss';

//components
import { changeTheme } from './components/theme.js';
changeTheme();

import { useBurger } from './components/burger.js';
useBurger();

import { usePartnersSlider } from './components/partners.js';
usePartnersSlider();

import { useInsightSlider } from './components/home/slider.js';
useInsightSlider();

import { useTestimonialsSlider } from './components/home/slider.js';
useTestimonialsSlider();
