import { ArticleManager } from "./articleManager.js";
import { ArticleFilter } from "./articleFilter.js";

const articleManager = new ArticleManager(
    "https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles",
    "articles",
    "loader"
);

const articleFilter = new ArticleFilter(articleManager);

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

        const category =
            document
                .querySelector(".sort__container-link.active")
                ?.getAttribute("data-category") || null;

        articleFilter.SortArticlesByLikes(order, category);
    });
});

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

        const order =
            document
                .querySelector(".filter__container-link.active")
                ?.getAttribute("data-order") || null;

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
