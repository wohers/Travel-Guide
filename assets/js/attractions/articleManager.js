// articleManager.js
export class ArticleManager {
    constructor(baseUrl, articlesDivId, loaderId, itemsPerPage = 10) {
        this.baseUrl = baseUrl;
        this.articlesDiv = document.getElementById(articlesDivId);
        this.loader = document.getElementById(loaderId);
        this.itemsPerPage = itemsPerPage;
        this.articlesData = [];
        this.currentPage = 1;
    }

    loadArticles(page = 1) {
        this.loader.style.display = "flex";
        const url = new URL(this.baseUrl);
        url.searchParams.append("page", page);
        url.searchParams.append("limit", this.itemsPerPage);

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
            .then((data) => {
                this.loader.style.display = "none";
                this.articlesData = data;
                this.displayArticles(this.articlesData);
                this.updatePagination();
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    displayArticles(articles) {
        this.articlesDiv.innerHTML = "";

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
            content.textContent =
                item.content.substring(0, 300) + "...   Читать дальше";
            article.appendChild(content);

            const likes = document.createElement('p');
            likes.textContent = 'Кол-во Лайков: ' +  item.likes;
            article.appendChild(likes)

            // Вывод средней оценки
            this.calculateAverageRating(item.id).then((averageRating) => {
                const averageRatingElement = document.createElement("p");
                averageRatingElement.textContent = `Средняя оценка: ${averageRating}`;
                article.appendChild(averageRatingElement);
            });


            this.articlesDiv.appendChild(article);

            title.addEventListener("click", () => {
                const articleUrl = `shablon.html?id=${item.id}`;
                window.open(articleUrl);
            });
        });
    }

    calculateAverageRating(articleId) {
        return fetch(`${this.baseUrl}/${articleId}/reviews`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then((reviews) => {
                if (reviews.length === 0) return "Нет оценок";
                const totalRating = reviews.reduce(
                    (sum, review) => sum + parseInt(review.rating),
                    0
                );
                const averageRating = totalRating / reviews.length;
                return averageRating.toFixed(1);
            })
            .catch((error) => {
                console.error("Error:", error);
                return "Нет оценок";
            });
    }

    updatePagination() {
        const paginationDiv = document.getElementById("pagination");
        paginationDiv.innerHTML = "";

        for (let i = 1; i <= 3; i++) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = i;
            a.addEventListener("click", () => this.loadArticles(i));
            li.appendChild(a);
            paginationDiv.appendChild(li);
        }
    }
}
