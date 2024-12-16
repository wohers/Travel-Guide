export class ArticleDetails {
    constructor(articleId, apiUrl) {
        this.articleId = articleId;
        this.apiUrl = apiUrl;
        this.loader = document.getElementById("loader");
        this.articleDetailsContainer = document.getElementById("articleDetails");
        this.init();
    }

    init() {
        this.loader.style.display = "flex";
        this.fetchArticleDetails();
    }

    fetchArticleDetails() {
        fetch(`${this.apiUrl}/${this.articleId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error occurred");
                }
                return response.json();
            })
            .then((article) => {
                this.displayArticleDetails(article);
                this.loader.style.display = "none";
            })
            .catch((err) => {
                console.error(err);
            });
    }

    displayArticleDetails(article) {
        this.articleDetailsContainer.innerHTML = `
            <h1>${article.title}</h1>
            <img src="${article.imageUrl}" alt="${article.title}" class="imgModal">
            <p>${article.content}</p>
            <img src="${article.imageUrl2}" alt="${article.title}" class="imgModal">
            <p>${article.content2}</p>
        `;
        document.title = article.title;

        const mapUrl = `https://maps.google.com/maps?q=${article.latitude},${article.longitude}&z=15&output=embed`;
        const map = document.createElement("iframe");
        map.src = mapUrl;
        map.width = "100%";
        map.height = "600";
        map.style.border = "0";
        this.articleDetailsContainer.appendChild(map);

        const leaveReviewButton = document.createElement("button");
        leaveReviewButton.id = "leaveReviewButton";
        leaveReviewButton.textContent = "Оставить отзыв";
        leaveReviewButton.addEventListener("click", () =>
            this.openReviewModal()
        );
        this.articleDetailsContainer.appendChild(leaveReviewButton);

        this.initImageModal(article);
    }

    initImageModal(article) {
        const images = document.querySelectorAll(".imgModal");
        images.forEach((image) => {
            image.addEventListener("click", () =>
                this.openImageModal(image.src, images)
            );
        });
    }

    openImageModal(imageUrl, images) {
        const modalImg = document.getElementById("modalForimages");
        const modalImage = document.getElementById("modalImage");
        modalImage.src = imageUrl;
        modalImg.style.display = "block";

        const closeBtnModal = document.getElementsByClassName("modalimg__closeImg")[0];
        closeBtnModal.addEventListener('click', function() {
            modalImg.style.display = "none";
        })

        const prevButton = document.querySelector(".modal-navigation.prev");
        const nextButton = document.querySelector(".modal-navigation.next");
        let currentIndex = Array.from(images).findIndex((img) => img.src === imageUrl);

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            modalImage.src = images[currentIndex].src;
        })

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            modalImage.src = images[currentIndex].src;
        })
    }       

    openReviewModal() {
        const modal = document.getElementById("reviewModal");
        modal.style.display = "block";
    }
}