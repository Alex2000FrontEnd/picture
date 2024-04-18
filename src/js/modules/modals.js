import scrollSize from './scrollSize';

const modals = () => {
    let idInterval;

    const bindModal = (triggersSelector, modalSelector) => {
        const triggers = document.querySelectorAll(triggersSelector),
              modal = document.querySelector(modalSelector),
              scrollWidth = scrollSize();

        const showModal = () => {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;
            modal.style.display = 'block';
            
            if (idInterval) {
                clearInterval(idInterval);
            }
        };

        const hideModal = () => {
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
            modal.style.display = 'none';
        };

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                showModal();
            });
        });

        modal.addEventListener('click', (e) => {
            const t = e.target;

            if (t && (t.matches('[data-close]') || t === modal)) {
                hideModal();
            }
        });

/*         if (modal.classList.contains('popup-consultation')) {
            idInterval = setTimeout(showModal, 60000);
        } */
    };

    bindModal('.button-design', '.popup-design');
    bindModal('.button-consultation', '.popup-consultation');
    bindModal('.fixed-gift', '.popup-gift');
};

export default modals;