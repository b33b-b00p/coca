import '../assets/scss/main.scss';

//components
import { changeTheme } from './components/theme.js';
changeTheme();
// const body = document.querySelector('.body');
// const themeSwitch = document.querySelector('.header__switcher');

// themeSwitch.addEventListener('change', () => {
//     console.log('hello');
//     body.getAttribute('data-theme') === 'light'
//         ? body.setAttribute('data-theme', 'dark')
//         : body.setAttribute('data-theme', 'light');
// });
import { useBurger } from './components/burger.js';
useBurger();
