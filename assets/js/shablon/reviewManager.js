export class ReviewManager {
  constructor(articleId, apiUrl) {
    this.articleId = articleId;
    this.apiUrl = apiUrl;
    this.reviewsContainer = document.getElementById("reviews-container");
    this.reviewForm = document.getElementById("reviewForm");
    this.modal = document.getElementById("reviewModal");
    this.closeModal = document.querySelector(".close");
    this.init();
  }

  init() {
    this.displayReviews();
    this.setupReviewForm();
    this.setupModalClose();
  }

  setupReviewForm() {
    this.reviewForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("modalName").value;
      const reviewText = document.getElementById("modalReview").value;
      const rating = document.getElementById("modalRating").value;
      if (name && reviewText && rating) {
        this.addReview(name, reviewText, rating);
      } else {
        alert("Please fill in all fields.");
      }
    });
  }

  setupModalClose() {
    this.closeModal.onclick = () => {
      this.modal.style.display = "none";
    };

    window.onclick = (event) => {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    };
  }

  addReview(name, reviewText, rating) {
    fetch(`${this.apiUrl}/${this.articleId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, reviewText, rating }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Произошла ошибка");
        }
        return response.json();
      })
      .then(() => {
        this.modal.style.display = "none";
        this.reviewForm.reset();
        this.displayReviews();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  displayReviews() {
    fetch(`${this.apiUrl}/${this.articleId}/reviews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Произошла ошибка");
        }
        return response.json();
      })
      .then((reviews) => {
        this.reviewsContainer.innerHTML = "";
        if (reviews.length === 0) {
          const noReviews = document.createElement("p");
          noReviews.textContent = "Нету отзывов.";
          this.reviewsContainer.appendChild(noReviews);
        } else {
          reviews.forEach((review) => {
            const reviewElement = document.createElement("div");
            reviewElement.classList.add("review");
            reviewElement.innerHTML = `<strong>${review.name}</strong><br>${review.reviewText}<br>Оценка: ${review.rating}`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Удалить отзыв";
            deleteButton.addEventListener("click", () =>
              this.deleteReview(review.id, reviewElement),
            );
            reviewElement.appendChild(deleteButton);

            this.reviewsContainer.appendChild(reviewElement);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  deleteReview(reviewId, reviewElement) {
    fetch(`${this.apiUrl}/${this.articleId}/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Произошла ошибка");
        }
        return response.json();
      })
      .then(() => {
        reviewElement.remove();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
