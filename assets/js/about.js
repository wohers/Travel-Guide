const modal = document.getElementById('modal'); 

// открываем модальное окно
const openModalBtn = document.getElementById('openModalBtn'); 
openModalBtn.addEventListener('click', () => { 
    modal.style.display = 'block'; 
});

// закрываем модальное окно
const closeModalBtn = document.querySelector('.modal__close');
closeModalBtn.addEventListener('click', () => {  
    modal.style.display = 'none';
});

// закрываем модальное окно при клике вне его
window.addEventListener('click', (event) => { 
    if (event.target === modal) {
        modal.style.display = 'none';  
    }
});

// обработка отправки формы
document.getElementById('subscribeForm').addEventListener('submit', (event) => {
    event.preventDefault(); 

    const email = document.getElementById('emailInput').value;
    if (email) {
        alert(`Спасибо за обратную звязь!`);
        modal.style.display = 'none';
    }
    else {
        alert('Пожалуйста, введите ваш email.');
    }
});