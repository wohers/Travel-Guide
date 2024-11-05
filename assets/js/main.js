document.addEventListener('DOMContentLoaded', function() {  /// все элементы DOM доступны 
    const menuToggle = document.getElementById('menu-toggle'); // находит элемент  menu-toggle и сохраняет его в переменную menuToggle
    const menu = document.getElementById('menu');  // находит элемент с идентификатором menu и сохраняет его в переменную menu

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); //  если класс active уже есть он будет удален, а если его нет он будет добавлен
    });

    // получаем все нужные элементы для слайдера
    var slider = document.querySelector('.slider__sliders'); // находим слайдер
    var prevButton = document.querySelector('.slider__prev-button'); // находим кнопку назад
    var nextButton = document.querySelector('.slider__next-button'); // находим кнопку вперед
    var slides = Array.from(slider.querySelectorAll('img')); // получаем все слайды
    var slideCount = slides.length; // считаем количество слайдов
    var slideIndex = 0; // начинаем с первого слайда

    // добавляем функционал для кнопок
    prevButton.addEventListener('click', function() {
        showPreviousSlide(); // показываем предыдущий слайд при нажатии на кнопку назад
    });

    nextButton.addEventListener('click', function() {
        showNextSlide(); // показываем следующий слайд при нажатии на кнопку вперед
    });

    // функция для показа предыдущего слайда
    function showPreviousSlide() {
        if (slideIndex === 0) { // если текущий слайд первый
            slideIndex = slideCount - 1; // преходим к последнему слайду
        } else {
            slideIndex = slideIndex - 1; // иначе переходим к предыдущему слайду
        }
        updateSlider(); // обновляем слайдер
    }

    // функция для показа следующего слайда
    function showNextSlide() {
        if (slideIndex === slideCount - 1) { // если этот слайд последний
            slideIndex = 0; // переходим к первому слайду
        } else {
            slideIndex = slideIndex + 1; // иначе переходим к следующему слайду
        }
        updateSlider(); // обновляем слайдер
    }

    // функция для отображение слайдера
    function updateSlider() {
        for (var i = 0; i < slides.length; i++) { // проходимся по всем слайдерам
            if (i === slideIndex) { // если этот слайд текущий
                slides[i].style.display = 'block'; // показываем его
            } else { // если нет
                slides[i].style.display = 'none'; // скрываем все остальные
            }
        }
    }


    updateSlider();
});