const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', function() {
    const menu = document.getElementById('menu');  
    menu.classList.toggle('active'); 
});

const prevButton = document.querySelector('.slider__prev-button'); 
prevButton.addEventListener('click', function() {
    showPreviousSlide(); 
});

const nextButton = document.querySelector('.slider__next-button'); 
nextButton.addEventListener('click', function() {
    showNextSlide(); 
})

let slider = document.querySelector('.slider__sliders'); 
let slides = slider.querySelectorAll('img'); 
let slideCount = slides.length; 
let slideIndex = 0; 

// функция для показа предыдущего слайда
function showPreviousSlide() {
    if (slideIndex === 0) { 
        slideIndex = slideCount - 1; 
    } else {
        slideIndex = slideIndex - 1; 
    }
    updateSlider(); 
}

// функция для показа следующего слайда
function showNextSlide() {
    if (slideIndex === slideCount - 1) { 
        slideIndex = 0; 
    } else {
        slideIndex = slideIndex + 1; 
    }
    updateSlider();
}

// функция для отображения слайдера
function updateSlider() {
    for (let i = 0; i < slides.length; i++) { 
        if (i === slideIndex) { 
            slides[i].style.display = 'block'; 
        } else { 
            slides[i].style.display = 'none'; 
        }
    }
}

updateSlider();