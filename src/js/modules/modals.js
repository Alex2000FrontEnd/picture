import scrollSize from './scrollSize';

const modals = () => {

    const triggerGift = document.querySelector('.fixed-gift');

    if (localStorage.getItem('gift')) {
        triggerGift.remove();
    }

    document.documentElement.addEventListener('click', (e) => {
        const t = e.target;


        if (t && t.nodeName === 'BUTTON' || t.nodeName === 'IMG') {
            localStorage.setItem('gift', false);
            window.removeEventListener('scroll', showGiftAtBottomPage);
        }
    });

    if (!localStorage.getItem('gift')) {
        window.addEventListener('scroll', showGiftAtBottomPage);
    }

    function showGiftAtBottomPage() {
        const doc = document.documentElement;
        
        if (doc.scrollHeight <= doc.clientHeight + doc.scrollTop + 3) {
            showGift();
            window.removeEventListener('scroll', showGiftAtBottomPage);
        }
    }

    function showGift() {
        document.querySelector('.popup-gift').style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollSize()}px`;

        localStorage.setItem('gift', false);
        triggerGift.remove();
    }

    let idInterval;
    
    function bindModal(triggersSelector, modalSelector) {
        const triggers = document.querySelectorAll(triggersSelector),
              modal = document.querySelector(modalSelector),
              scrollWidth = scrollSize();

/*         if (modal.classList.contains('popup-consultation')) {
            idInterval = setTimeout(() => {
                showModal();
            }, 3000);
        } */

        function showModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;

            clearInterval(idInterval);
        }

        function hideModal() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                showModal();

                if (trigger.classList.contains('fixed-gift')) {
                    triggerGift.remove();
                }
            });
        });

        modal.addEventListener('click', (e) => {
            const t = e.target;

            if (t && t.closest('.popup-close') || t === modal) {
                hideModal();
            }
        });
    }

    bindModal('.button-design', '.popup-design');
    bindModal('.button-consultation', '.popup-consultation');
    bindModal('.fixed-gift', '.popup-gift');
};

export default modals;