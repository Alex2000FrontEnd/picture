const tabsFilter = (
    wrapperMenuSelector,
    menusSelector,
    wrapperContentSelector,
    contentsSelector,
    noContentSelector,
    activeClass
) => {
    const wrapperMenu = document.querySelector(wrapperMenuSelector),
          menus = wrapperMenu.querySelectorAll(menusSelector),
          wrapperContent = document.querySelector(wrapperContentSelector),
          contents = wrapperContent.querySelectorAll(contentsSelector),
          noContent = document.querySelector(noContentSelector);

    const showFilteredTabs = (filterName) => {
        menus.forEach(menu => {
            if (!menu.classList.contains(filterName)) {
                menu.classList.remove(activeClass);
            } else {
                menu.classList.add(activeClass);
            }
        });

        let numberOfTabsShown = 0;

        contents.forEach(content => {
            if (!content.classList.contains(filterName)) {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
                numberOfTabsShown++;
            }
        });

        if (numberOfTabsShown === 0) {
            noContent.style.display = 'block';
        } else {
            noContent.style.dispaly = 'none';
        }
    };

    wrapperMenu.addEventListener('click', (e) => {
        const t = e.target;

        if (t && t.matches('li')) {
            showFilteredTabs(t.classList[0]);
        }
    });
};

export default tabsFilter;