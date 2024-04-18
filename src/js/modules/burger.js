const burger = () => {
    const hamburger = document.querySelector('.burger'),
          menu = document.querySelector('.burger-menu');

    hamburger.addEventListener('click', () => {
        const display = window.getComputedStyle(menu).display;

        if (display === 'none') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
};

export default burger;