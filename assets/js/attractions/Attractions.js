import { ArticleManager } from "./articleManager.js";
import { ArticleFilter } from "./articleFilter.js";

const articleManager = new ArticleManager(
    "https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles",
    "articles",
    "loader"
);

const articleFilter = new ArticleFilter(articleManager);

// Для сортировки

const filterButton = document.querySelector(".filter__container-button");
const Filterdropdown = document.querySelector(".filter__container-dropdown");

filterButton.addEventListener("click", function () {
    Filterdropdown.classList.toggle("show");
});

const filterContainerLinks = document.querySelectorAll(
    ".filter__container-link"
);
filterContainerLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const order = link.getAttribute("data-order");
        console.log(order);

        const activeLink = document.querySelector(".sort__container-link.active");

        let category = null; 

        if (activeLink) {
            category = activeLink.getAttribute("data-category");
        }

        articleFilter.SortArticlesByLikes(order, category);
    });
});

// Для фильтрации

const sortButton = document.querySelector(".sort__container-button");
const sortDropdown = document.querySelector(".sort__container-dropdown");

sortButton.addEventListener("click", function () {
    sortDropdown.classList.toggle("show");
});

const sortContainerLinks = document.querySelectorAll(".sort__container-link");
sortContainerLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const category = link.getAttribute("data-category") || "all";
        console.log(category);

        sortContainerLinks.forEach((link) => link.classList.remove("active"));

        link.classList.add("active");

        const activeFilterLink = document.querySelector(".filter__container-link.active");

        let order = null;

        if (activeFilterLink) {
            order = activeFilterLink.getAttribute("data-order");
        } else {
            order = null;
        }

        articleFilter.filterArticlesByCategory(category, order);
    });
});

// Поиск
const search = document.getElementById("searchInput");
search.addEventListener("input", function () {
    const query = search.value;
    articleFilter.filterArticlesBySearch(query);
});

articleManager.loadArticles();
