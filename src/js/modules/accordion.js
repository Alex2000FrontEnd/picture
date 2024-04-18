const accordion = () => {
    const wrapper = document.querySelector('#often-questions'),
          heads = wrapper.querySelectorAll('.accordion-heading'),
          contents = wrapper.querySelectorAll('.accordion-block');

    const hide = () => {
        heads.forEach(head => {
            head.classList.remove('ui-accordion-header-active');
        });

        contents.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });
    };

    const show = (i) => {
        heads[i].classList.add('ui-accordion-header-active');

        contents[i].style.display = 'block';
        contents[i].classList.add('active');
    };

    hide();

    wrapper.addEventListener('click', (e) => {
        const t = e.target;

        if (t && t.parentElement.classList.contains('accordion-heading')) {
            heads.forEach((head, i) => {
                if (t.parentElement === head) {
                    hide();
                    show(i);
                }
            });
        }
    });
};

export default accordion;