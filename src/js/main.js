import modals from './modules/modals';
import showMore from './modules/showMore';
import tabsFilter from './modules/tabsFilter';
import showImgs from './modules/showImgs';
import accordion from './modules/accordion';
import burger from './modules/burger';
import sliders from './modules/sliders';
import forms from './modules/forms';

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

    sliders({
        sliderSelector: '.main-slider',
        slidesSelector: '.main-slider-item',
        orientation: 'vertical',
        autoplay: 4000
    });

    sliders({
        sliderSelector: '.feedback-slider',
        slidesSelector: '.feedback-slider-item',
        orientation: 'horizontal',
        autoplay: 4000
    });

    forms();
});