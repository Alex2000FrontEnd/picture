function sliders({
    sliderSelector,
    slidesSelector,
    orientation, 
    autoplay
}) {
    const slider = document.querySelector(sliderSelector),
          inner = slider.querySelector('.slider-inner'),
          slides = slider.querySelectorAll(slidesSelector);

    let slideHeight = slides[0].clientHeight,
        currentSlide = 1,
        delay = autoplay;

    if (orientation) {
        if (orientation === 'vertical') {
            orientation = 'block';
        } else if (orientation === 'horizontal') {
            orientation = 'flex';
        }
    }

    function createSlider() {
        slider.style.cssText = `
            height: ${slideHeight}px;
            overflow: hidden;
        `;
        inner.style.cssText = `
            display: ${orientation};
            height: ${slideHeight * slides.length}px;
            transition: all 1s;
        `;
    }

    createSlider();

    function switchSlide(n) {
        currentSlide += n;

        if (currentSlide > slides.length) {
            currentSlide = 1;
        }
        if (currentSlide < 1) {
            currentSlide = slides.length;
        }

        let height = Math.round((currentSlide * slideHeight) - slideHeight);

        inner.style.transform = `translateY(-${height + 2}px)`;
    }

    slider.addEventListener('click', (e) => {
        const t = e.target;

        if (t && t.closest('.main-prev-btn')) {
            switchSlide(1);
        }
        if (t && t.closest('.main-next-btn')) {
            switchSlide(-1);
        }
    });

////////////
    let idInterval;

    function startAutoplay() {
        idInterval = setInterval(() => {
            switchSlide(-1);
        }, delay);
    }

    if (autoplay) {
        startAutoplay();
    
        slider.addEventListener('mouseover', () => {
            clearInterval(idInterval);
            console.log('stop');

        });
      
        slider.addEventListener('mouseleave', () => {
            startAutoplay();
            console.log('start');
        });
    }
}

export default sliders;