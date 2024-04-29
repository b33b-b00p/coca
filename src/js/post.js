import '../assets/scss/post.scss';

//components
import { changeTheme } from './components/theme.js';
changeTheme();

import { useBurger } from './components/burger.js';
useBurger();

import { initPost } from './components/post/initPost.js';
initPost();

import { initLinks } from './components/post/shareLink.js';
initLinks();
