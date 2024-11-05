// получаем элементы модального окна
const modal = document.getElementById('modal'); //находит элемент modal и сохраняет его в переменную modal.
const openModalBtn = document.getElementById('openModalBtn'); //находит элемент openModalBtn и сохраняет его в переменную openModalBtn.
const closeModalBtn = document.querySelector('.modal__close'); //находит элемент modal__close и сохраняет его в переменную closeModalBtn.

// открываем модальное окно
openModalBtn.addEventListener('click', () => { // при нажатии на openModalBtn 
    modal.style.display = 'block'; // display: none --> display: block
});

// закрываем модальное окно
closeModalBtn.addEventListener('click', () => {  // при нажатии на closeModalBtn 
    modal.style.display = 'none';
});

// закрываем модальное окно при клике вне его
window.addEventListener('click', (event) => { // при нажатии на window 
    if (event.target === modal) {
        modal.style.display = 'none';  // display: block --> display: none
    }
});

// обработка отправки формы
document.getElementById('subscribeForm').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('emailInput').value;
    if (email) {
        alert(`Спасибо за обратную звязь!`);
        modal.style.display = 'none'; // закрываем модальное окно после отправки
    } else {
        alert('Пожалуйста, введите ваш email.');
    }
});