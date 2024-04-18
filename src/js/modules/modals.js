import scrollSize from './scrollSize';

const modals = () => {

    const bindModal = (triggersSelector, modalSelector) => {
        const triggers = document.querySelectorAll(triggersSelector),
              modal = document.querySelector(modalSelector),
              scrollWidth = scrollSize();

        const showModal = () => {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;
            modal.style.display = 'block';
        };

        const hideModal = () => {
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
            modal.style.display = 'none';
        };

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                showModal();

                if (trigger.classList.contains('fixed-gift')) {
                    localStorage.setItem('gift_received', true);
                    trigger.remove();
                }
            });
        });

        modal.addEventListener('click', (e) => {
            const t = e.target;

            if (t && (t.matches('[data-close]') || t === modal)) {
                hideModal();
            }
        });
    };

    bindModal('.button-design', '.popup-design');
    bindModal('.button-consultation', '.popup-consultation');
    bindModal('.fixed-gift', '.popup-gift');

    const showPresent = () => {
        if (localStorage.getItem('gift_received')) {
            document.querySelector('.fixed-gift').remove();
        }
    };

    showPresent();
};

export default modals;