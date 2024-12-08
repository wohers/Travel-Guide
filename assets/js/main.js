class Slider {
    constructor(sliderSelector, prevButtonSelector, nextButtonSelector) {
        this.slider = document.querySelector(sliderSelector);
        this.slides = this.slider.querySelectorAll('img');
        this.slideCount = this.slides.length;
        this.slideIndex = 0;

        this.prevButton = document.querySelector(prevButtonSelector);
        this.nextButton = document.querySelector(nextButtonSelector);

        this.prevButton.addEventListener('click', () => this.showPreviousSlide());
        this.nextButton.addEventListener('click', () => this.showNextSlide());

        this.updateSlider();
    }

    // Метод для показа предыдущего слайда
    showPreviousSlide() {
        if (this.slideIndex === 0) {
            this.slideIndex = this.slideCount - 1;
        } else {
            this.slideIndex = this.slideIndex - 1;
        }
        this.updateSlider();
    }

    // Метод для показа следующего слайда
    showNextSlide() {
        if (this.slideIndex === this.slideCount - 1) {
            this.slideIndex = 0;
        } else {
            this.slideIndex = this.slideIndex + 1;
        }
        this.updateSlider();
    }

    // Метод для отображения слайдера
    updateSlider() {
        for (let i = 0; i < this.slides.length; i++) {
            if (i === this.slideIndex) {
                this.slides[i].style.display = 'block';
            } else {
                this.slides[i].style.display = 'none';
            }
        }
    }
}

// Инициализация слайдера
const slider = new Slider('.slider__sliders', '.slider__prev-button', '.slider__next-button');

// Обработчик для переключения меню
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});