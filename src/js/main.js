import modals from './modules/modals';
import showMore from './modules/showMore';
import tabsFilter from './modules/tabsFilter';
import showImgs from './modules/showImgs';
import accordion from './modules/accordion';
import burger from './modules/burger';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();

    showMore('.button-styles', '.styles-2');

    tabsFilter(
        '.portfolio-menu',
        'li',
        '.portfolio-wrapper',
        '.portfolio-block',
        '.portfolio-no',
        'active'
    );

    showImgs('.sizes-block');

    accordion();

    burger();
});