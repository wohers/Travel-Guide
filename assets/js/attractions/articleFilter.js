// articleFilter.js
export class ArticleFilter {
    constructor(articleManager) {
        this.articleManager = articleManager;
    }

    SortArticlesByCategory(order) {
        this.articleManager.loader.style.display = "flex";
        const url = new URL(this.articleManager.baseUrl);

        // Добавляем параметр сортировки по лайкам
        url.searchParams.append("sortBy", "likes");
        url.searchParams.append("order", order); // "asc" для возрастания, "desc" для убывания

        fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Ошибка при получении данных");
            })
            .then((tasks) => {
                this.articleManager.loader.style.display = "none";
                this.articleManager.displayArticles(tasks);
                console.log(tasks);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    filterArticlesByCategory(category) {
        this.articleManager.loader.style.display = "flex";
        const url = new URL(this.articleManager.baseUrl);
        if (category !== "asc") {
            url.searchParams.append("category", category);
        } else {
            url.searchParams.append("page", this.articleManager.currentPage);
            url.searchParams.append("limit", this.articleManager.itemsPerPage);
        }

        fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Ошибка при получении данных");
            })
            .then((tasks) => {
                this.articleManager.loader.style.display = "none";
                this.articleManager.displayArticles(tasks);
                console.log(tasks);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    filterArticlesBySearch(query) {
        const url = new URL(this.articleManager.baseUrl);
        url.searchParams.append("title", query);

        fetch(url, {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Ошибка при получении данных");
            })
            .then((tasks) => {
                this.articleManager.displayArticles(tasks);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}