import '../assets/scss/blog.scss';

//components
import { changeTheme } from './components/theme.js';
changeTheme();

import { useActivityTabs } from './components/blog/slider.js';
useActivityTabs();

import { useActivitySlider } from './components/blog/slider.js';
useActivitySlider();

import { useBurger } from './components/burger.js';
useBurger();
