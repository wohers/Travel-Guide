document.addEventListener('DOMContentLoaded', function() {  /// это гарантирует, что все элементы DOM доступны для манипуляций
    const menuToggle = document.getElementById('menu-toggle'); // этот код находит элемент  menu-toggle и сохраняет его в переменную
    const menu = document.getElementById('menu');  // этот код находит элемент с идентификатором menu и сохраняет его в переменную 

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); //  если класс active уже есть, он будет удален. Если его нет, он будет добавлен
    });

    const sortLinks = document.querySelectorAll('.sort__container-link'); 
    const paginationContainer = document.getElementById('pagination'); // этот код находит элемент pagination и сохраняет его в переменную 
    const searchInput = document.getElementById('searchInput');  //  эот код находит элемент searchInput и сохраняет его в переменную 
    const sortButton = document.querySelector('.sort__container-button'); //  этот код находит первый элемент с классом sort__container-button и сохраняет его в переменную 
    const sortDropdown = document.querySelector('.sort__container-dropdown'); // этот код находит первый элемент с классом sort__container-dropdown и сохраняет его в переменную 

    const articlesPerPage = 10; // количество статей на странице
    let currentPage = 1; // этот код определяет переменную currentPage, которая хранит текущий номер страницы
    let articles = [  // статьи
        
    ];

    fetch('https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error occurred');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const articlesContainer = document.getElementById('articles');
        const detailsContainer = document.getElementById('details');

        data.forEach(item => {
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
            articleDiv.setAttribute('data-id', item.id); // Добавляем атрибут data-id

            const title = document.createElement('h2');
            title.textContent = item.title;
            articleDiv.appendChild(title);

            const img = document.createElement('img');
            img.src = item.imageUrl;
            img.alt = item.title;
            articleDiv.appendChild(img);

            const content = document.createElement('p');
            content.textContent = item.content.substring(0, 200) + '... Читать дальше...';
            articleDiv.appendChild(content);

            articlesContainer.appendChild(articleDiv);
        });

        // Добавляем обработчик событий после создания всех статей
        const articleElements = document.querySelectorAll('.article');
        articleElements.forEach(article => {
            article.addEventListener('click', function() {
                const articleId = this.getAttribute('data-id');
                const selectedArticle = data.find(a => a.id == articleId);
                displayDetails(selectedArticle);
                toggleFullScreen();
            });
        });

        // Обработчик события для возврата на главную страницу
        const backButton = document.querySelector('.back-button');
        backButton.addEventListener('click', function() {
            toggleFullScreen();
        });

    })
    .catch((err) => {
        console.log(err);
    });

    function displayDetails(item) {
        const modalContent = document.getElementById('modal-details');
        modalContent.innerHTML = `
            <h2>${item.title}</h2>
            <img src="${item.imageUrl}" alt="${item.title}">
            <p>${item.content}</p>
        `;
    }

    function toggleFullScreen() {
        const articlesContainer = document.getElementById('articles');
        const detailsContainer = document.getElementById('details');

        articlesContainer.classList.toggle('hidden');
        detailsContainer.classList.toggle('hidden');
    }



    // Функция для отображения пагинации
    function displayPagination(filteredArticles) {
        paginationContainer.innerHTML = '';
        const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);

        for (let i = 1; i <= pageCount; i++) {
            const li = document.createElement('li');
            li.classList.add('pagination__item');
            const a = document.createElement('a');
            a.classList.add('pagination__link');
            a.href = '#';
            a.textContent = i;
            if (i === currentPage) {
                li.classList.add('pagination__item--active');
            }
            a.addEventListener('click', function(e) {
                e.preventDefault();
                currentPage = i;
                const start = (currentPage - 1) * articlesPerPage;
                const end = start + articlesPerPage;
                displayArticles(filteredArticles.slice(start, end));
                displayPagination(filteredArticles);
            });
            li.appendChild(a);
            paginationContainer.appendChild(li);
        }
    }

    displayPagination(articles);

    // Функция для фильтрации статей по запросу
    function filterArticles(query) {
        return articles.filter(article => article.title.toLowerCase().includes(query.toLowerCase()));
    }

    // Функция для фильтрации статей по категории
    function filterArticlesByCategory(category) {
        return articles.filter(article => article.category === category);
    }

    // Обработчик события для поиска
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredArticles = filterArticles(query);
        currentPage = 1;
        const start = (currentPage - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        displayArticles(filteredArticles.slice(start, end));
        displayPagination(filteredArticles);
    });

    // Обработчик события для кнопки сортировки
    sortButton.addEventListener('click', function(event) {
        event.stopPropagation();
        sortDropdown.classList.toggle('sort__container-dropdown--show');
    });

    // Обработчик события для ссылок сортировки
    sortLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const order = this.getAttribute('data-order');
            const category = this.getAttribute('data-category');
            if (order === 'asc') {
                displayAllArticles();
            } else if (category) {
                filterByCategory(category);
            }
        });
    });

    // Функция для отображения всех статей
    function displayAllArticles() {
        currentPage = 1;
        const start = (currentPage - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        displayArticles(articles.slice(start, end));
        displayPagination(articles);
        sortDropdown.classList.remove('sort__container-dropdown--show');
    }

    // Функция для фильтрации по категории
    function filterByCategory(category) {
        const filteredArticles = filterArticlesByCategory(category);
        currentPage = 1;
        const start = (currentPage - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        displayArticles(filteredArticles.slice(start, end));
        displayPagination(filteredArticles);
        sortDropdown.classList.remove('sort__container-dropdown--show');
        localStorage.setItem('lastCategory', category);
    }
});

