export class ArticleFilter {
    constructor(articleManager) {
        this.articleManager = articleManager;
        this.searchTimeout = null; // Переменная для хранения таймера
    }

    fetchArticles({
        category = null,
        order = null,
        query = null,
        page = 1,
        limit = 10,
    }) {
        this.articleManager.loader.style.display = "flex";
        const url = new URL(this.articleManager.baseUrl);

        if (category) {
            url.searchParams.append("category", category);
        }

        if (order) {
            url.searchParams.append("sortBy", "likes");
            url.searchParams.append("order", order);
        }

        if (query) {
            url.searchParams.append("title", query);
        }

        url.searchParams.append("page", page);
        url.searchParams.append("limit", limit);

        console.log(url.href);

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

    SortArticlesByLikes(order, category = null) {
        this.fetchArticles({ order, category });
    }

    filterArticlesByCategory(category, order = null) {
        if (category === "all") {
            this.fetchArticles({
                page: this.articleManager.currentPage,
                limit: this.articleManager.itemsPerPage,
            });
        } else {
            this.fetchArticles({ category, order });
        }
    }

    filterArticlesBySearch(query) {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        this.searchTimeout = setTimeout(() => {
            this.fetchArticles({ query });
        }, 1000); 
    }
}