// main.js
import { ArticleManager } from "./articleManager.js";
import { ArticleFilter } from "./articleFilter.js";

const articleManager = new ArticleManager(
    "https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles",
    "articles",
    "loader"
);

const articleFilter = new ArticleFilter(articleManager);

// Фильтр по категориям
const filterButton = document.querySelector(".filter__container-button");
const Filterdropdown = document.querySelector(".filter__container-dropdown");

filterButton.addEventListener("click", function () {
    Filterdropdown.classList.toggle("show");
});

const sFilterContainerLink = document.querySelectorAll(".filter__container-link");
sFilterContainerLink.forEach((link) => {
    link.addEventListener("click", function () {
        const order = link.getAttribute("data-category"); // Получаем направление сортировки
        console.log(order);
        articleFilter.SortArticlesByCategory(order);
    });
});

// Поиск
const search = document.getElementById("searchInput");
search.addEventListener("input", function () {
    const query = search.value;
    articleFilter.filterArticlesBySearch(query);
});

articleManager.loadArticles();