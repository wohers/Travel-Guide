const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
});

let articlesData = [];
let currentPage = 1;
const itemsPerPage = 10;

const loader = document.getElementById("loader");
loader.style.display = "flex";

function loadArticles(page = 1) {
    // Создаем URL для запроса к mockapi с учетом пагинации и фильтрации
    const baseUrl = "https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles";
    const url = new URL(baseUrl);

    // Добавляем параметры пагинации
    url.searchParams.append('page', page);
    url.searchParams.append('limit', itemsPerPage);

    // Выполняем запрос к mockapi
    fetch(url, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        // Обработка ошибки
        throw new Error('Ошибка при получении данных');
    })
    .then(data => {
        loader.style.display = "none";
        console.log('Пагинация', data)
        articlesData = data;
        displayArticles(articlesData);
        updatePagination();
        // filterArticlesByCategory();
    })
    .catch(error => {
        console.error(error);
    });
}


// let AllarticlesData = [];
// fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles`)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("Error occurred");
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         AllarticlesData = data;
//     })
//     .catch((err) => {
//         console.log(err);
//     });

function displayArticles(articles) {
    const articlesDiv = document.getElementById("articles");
    articlesDiv.innerHTML = "";

    articles.forEach((item) => {
        const article = document.createElement("div");
        article.classList.add("article");

        const title = document.createElement("h2");
        title.textContent = item.title;
        article.appendChild(title);

        const image = document.createElement("img");
        image.src = item.imageUrl;
        image.alt = item.title;
        article.appendChild(image);

        const content = document.createElement("p");
        content.textContent = item.content.substring(0, 300) + "...   Читать дальше";
        article.appendChild(content);

        const image2 = document.createElement("img");
        image2.src = item.imageUrl2;
        image2.alt = item.title;
        // article.appendChild(image2);

        const content2 = document.createElement("p");
        content2.textContent = item.content;
        // article.appendChild(content2);

        // Вычисление и отображение средней оценки
        calculateAverageRating(item.id).then(averageRating => {
            const averageRatingElement = document.createElement("p");
            averageRatingElement.textContent = `Средняя оценка: ${averageRating}`;
            article.appendChild(averageRatingElement);
        });

        articlesDiv.appendChild(article);

        title.addEventListener("click", function () {
            const articleUrl = `shablon.html?id=${item.id}`;
            window.open(articleUrl);
        });
    });
}

// Function to calculate average rating
function calculateAverageRating(articleId) {
    return fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles/${articleId}/reviews`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error occurred');
            }
            return response.json();
        })
        .then(reviews => {
            if (reviews.length === 0) return "Нет оценок";
            const totalRating = reviews.reduce((sum, review) => sum + parseInt(review.rating), 0);
            const averageRating = totalRating / reviews.length;
            return averageRating.toFixed(1);
        })
        .catch(error => {
            console.error('Error:', error);
            return "Нет оценок";
        });
}

// function filterArticlesByCategory(category) {
//     const articlesDiv = document.getElementById('articles');
//     articlesDiv.innerHTML = '';

//     if (category === 'asc') {
//         filteredArticles = articlesData
//     }
//     else if (category !== 'asc') {
//         filteredArticles = AllarticlesData.filter(article => article.category === category);
//     }
//     displayArticles(filteredArticles);
// }

function filterArticlesByCategory(category) {
    const articlesDiv = document.getElementById("articles");
    articlesDiv.innerHTML = "";

    // Создаем URL для запроса к mockapi с учетом категории и сортировки
    const baseUrl =
        "https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles";
    const url = new URL(baseUrl);

    // Если категория не 'asc', добавляем параметр фильтрации по категории
    if (category !== "asc") {
        url.searchParams.append("category", category);
    }
    else{
        url.searchParams.append('page', currentPage);
        url.searchParams.append('limit', itemsPerPage);
    }

    // Выполняем запрос к mockapi
    fetch(url, {
        method: "GET",
        headers: { "content-type": "application/json" },
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            // Обработка ошибки
            throw new Error("Ошибка при получении данных");
        })
        .then((tasks) => {
            console.log('Сортировка', tasks)
            // Отображаем отфильтрованные и отсортированные статьи
            displayArticles(tasks);
        })
        .catch((error) => {
            // Обработка ошибки
            console.error(error);
        });
}

const sortContainerLink = document.querySelectorAll(".sort__container-link");
sortContainerLink.forEach((link) => {
    link.addEventListener("click", function () {
        const category = link.getAttribute("data-category") || "asc";
        filterArticlesByCategory(category);
    });
});

const button = document.querySelector(".sort__container-button");
button.addEventListener("click", function () {
    const dropdown = document.querySelector(".sort__container-dropdown");
    dropdown.classList.toggle("show");
});

function filterArticlesBySearch(query) {
    const articlesDiv = document.getElementById("articles");
    articlesDiv.innerHTML = "";

    // Создаем URL для запроса к mockapi с учетом поискового запроса
    const baseUrl = "https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles";
    const url = new URL(baseUrl);

    // Добавляем параметр поиска
    url.searchParams.append('title', query);

    // Выполняем запрос к mockapi
    fetch(url, {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        // Обработка ошибки
        throw new Error('Ошибка при получении данных');
    })
    .then(tasks => {
        // Отображаем найденные статьи
        displayArticles(tasks);
    })
    .catch(error => {
        console.error(error);
    });
}

const search = document.getElementById("searchInput");
search.addEventListener("input", function () {
    const query = search.value;
    filterArticlesBySearch(query);
});

function updatePagination() {
    const paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = "";

    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = i;
        a.addEventListener("click", () => loadArticles(i));
        li.appendChild(a);
        paginationDiv.appendChild(li);
    }
}

loadArticles();
