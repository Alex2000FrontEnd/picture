import modals from './modules/modals';
import showMore from './modules/showMore';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();

    showMore('.button-styles', '.styles-2');
});