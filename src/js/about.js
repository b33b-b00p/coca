import '../assets/scss/about.scss';

//components
import { changeTheme } from './components/theme.js';
changeTheme();

import { useDiscoverSlider } from './components/about/slider.js';
useDiscoverSlider();

import { useTeamSlider } from './components/about/slider.js';
useTeamSlider();

import { useBurger } from './components/burger.js';
useBurger();
