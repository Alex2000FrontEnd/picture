import modals from './modules/modals';
import showMore from './modules/showMore';
import tabsFilter from './modules/tabsFilter';

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
});