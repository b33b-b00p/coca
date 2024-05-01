import '../assets/scss/contact.scss';

//components
import { changeTheme } from './components/theme.js';
changeTheme();

import { usePartnersSlider } from './components/partners.js';
usePartnersSlider();

import { phoneMask } from './components/contact/phone.js';
phoneMask();

import { showAddress } from './components/contact/addressPopUp.js';
showAddress();

import { useBurger } from './components/burger.js';
useBurger();
