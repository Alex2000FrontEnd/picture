const showImgs = (contentsSelector) => {
    const contents = document.querySelectorAll(contentsSelector),
          imgs = document.querySelectorAll(`${contentsSelector} img`),
          imgsSrcPlacholder = [],
          imgsSrcImg = [];

    contents.forEach(item => {
        const img = item.querySelector('img'),
              src = img.getAttribute('src');

        imgsSrcPlacholder.push(src);
    });

    imgsSrcPlacholder.forEach(item => {
        let srcImg = item.slice(0, item.indexOf('.'));
        srcImg += '-1.png';

        imgsSrcImg.push(srcImg);
    });

    contents.forEach((content, i) => {
        content.addEventListener('mouseover', (e) => {
            if (e.target.closest(contentsSelector)) {
                imgs[i].setAttribute('src', imgsSrcImg[i]);
                imgs[i].classList.add('img-show');
            }
        });

        content.addEventListener('mouseout', (e) => {
            if (e.target.closest(contentsSelector)) {
                imgs[i].setAttribute('src', imgsSrcPlacholder[i]);
                imgs[i].classList.remove('img-show');
            }
        });
    });
};

export default showImgs;