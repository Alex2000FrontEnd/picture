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
        slideWidth = slider.clientWidth,
        currentSlide = 1,
        delay = autoplay;

    if (orientation) {
        if (orientation === 'vertical') {
            orientation = 'block';
            currentSlide = slides.length;
        } else if (orientation === 'horizontal') {
            orientation = 'flex';
        }
    }

    function createSlider() {
        if (orientation === 'block') {
            slider.style.cssText = `
                height: ${slideHeight}px;
                overflow: hidden;
            `;
            inner.style.cssText = `
                display: ${orientation};
                height: ${slideHeight * slides.length}px;
                transform: translateY(-${(currentSlide - 1) * slideHeight}px);
            `;
            slides.forEach(slide => {
                slide.style.height = `${slideHeight}px`;
            });

            setTimeout(() => {
                inner.style.transition = 'all 1s';
            }, 100);
        } else if (orientation === 'flex') {
                slider.style.cssText = `
                overflow: hidden;
            `;
            inner.style.cssText = `
                display: ${orientation};
                width: ${slideWidth * slides.length}px;
                transition: all 1s;
            `;
            slides.forEach(slide => {
                slide.style.width = `${slideWidth}px`;
            });
        }
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

        if (orientation === 'block') {
            let height = Math.round((currentSlide * slideHeight) - slideHeight);

            inner.style.transform = `translateY(-${height + 2}px)`;
        } else if (orientation === 'flex') {
            let width = Math.round((currentSlide * slideWidth) - slideWidth);

            inner.style.transform = `translateX(-${width}px)`;
        }
    }

    slider.addEventListener('click', (e) => {
        const t = e.target;

        if (orientation === 'block') {
            if (t && t.closest('.main-prev-btn')) {
                switchSlide(1);
            }
            if (t && t.closest('.main-next-btn')) {
                switchSlide(-1);
            }
        } else if (orientation === 'flex') {
            if (t && t.closest('.main-prev-btn')) {
                switchSlide(-1);
            }
            if (t && t.closest('.main-next-btn')) {
                switchSlide(1);
            }
        }
    });

////////////
    let idInterval;

    function startAutoplay() {
        idInterval = setInterval(() => {
            if (orientation === 'block') {
                switchSlide(-1);
            } else if (orientation === 'flex') {
                switchSlide(1);
            }
        }, delay);
    }

    if (autoplay) {
        startAutoplay();
    
        slider.addEventListener('mouseover', () => {
            clearInterval(idInterval);
        });
      
        slider.addEventListener('mouseleave', () => {
            startAutoplay();
        });
    }
}

export default sliders;