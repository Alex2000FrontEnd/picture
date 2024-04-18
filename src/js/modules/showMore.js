const showMore = (triggerSelector, elementsSelector) => {
    const trigger = document.querySelector(triggerSelector);

    trigger.addEventListener('click', () => {
        document.querySelectorAll(elementsSelector).forEach(el => {
            el.style.cssText = 'display: block !important;';
        });

        trigger.remove();
    });
};

export default showMore;