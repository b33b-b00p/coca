import '../assets/scss/about.scss';

//components
import { changeTheme } from './components/theme.js';
changeTheme();

import { useDiscoverSlider } from './components/about/slider.js';
useDiscoverSlider();

import { useBurger } from './components/burger.js';
useBurger();
