const scrollSize = () => {
    const div = document.createElement('div');
    div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow: scroll;
        visibility: hidden;
        position: fixed;
    `;
    document.body.append(div);


    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

export default scrollSize;