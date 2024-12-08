function getParam(name) {
    const UrlParam = new URLSearchParams(window.location.search);
    return UrlParam.get(name);
}

const articleId = getParam('id');
const loader = document.getElementById('loader');
loader.style.display = 'flex';

fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles/${articleId}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error occurred');
        }
        return response.json();
    })
    .then(article => {
        displayArticleDetails(article);
        loader.style.display = 'none';
    })
    .catch((err) => {
        console.log(err);
    });

function displayArticleDetails(article) {
    const articleDetails = document.getElementById('articleDetails');
    articleDetails.innerHTML = `
        <h1>${article.title}</h1>
        <img src="${article.imageUrl}" alt="${article.title}">
        <p>${article.content}</p>
        <img src="${article.imageUrl2}" alt="${article.title}">
        <p>${article.content2}</p>
    `;
    document.title = article.title;

    const mapUrl = `https://maps.google.com/maps?q=${article.latitude},${article.longitude}&z=15&output=embed`;
    const map = document.createElement('iframe');
    map.src = mapUrl;
    map.width = '100%';
    map.height = '600';
    map.style.border = '0';
    articleDetails.appendChild(map);

    // Добавляем кнопку "Оставить отзыв" после карты
    const leaveReviewButton = document.createElement('button');
    leaveReviewButton.id = 'leaveReviewButton';
    leaveReviewButton.textContent = 'Оставить отзыв';
    leaveReviewButton.addEventListener('click', () => openModal(articleId));
    articleDetails.appendChild(leaveReviewButton);

    // Display reviews for the article
    displayReviews(articleId, document.getElementById('reviews-container'));

    // Display average rating for the article
    displayAverageRating(articleId, document.getElementById('average-rating'));
}

// Модальное окно
const modal = document.getElementById("reviewModal");
const closeModal = document.querySelector(".close");
const reviewForm = document.getElementById("reviewForm");

function openModal(articleId) {
    modal.style.display = "block";
}

closeModal.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("modalName").value;
    const reviewText = document.getElementById("modalReview").value;
    const rating = document.getElementById("modalRating").value;
    if (name && reviewText && rating) {
        console.log('Sending review:', { name, reviewText, rating }); // Логирование отправляемых данных
        // Отправка данных на mockapi
        fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles/${articleId}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, reviewText, rating })
        })
        .then(response => {
            console.log('Response status:', response.status); // Логирование статуса ответа
            if (!response.ok) {
                throw new Error('Error occurred');
            }
            return response.json();
        })
        .then(review => {
            console.log('Review added:', review); // Логирование добавленного отзыва
            // Добавление отзыва в локальное хранилище
            addReview(articleId, review.name, review.reviewText, review.rating);
            modal.style.display = "none";
            reviewForm.reset();
            // Обновление отображения отзывов
            displayReviews(articleId, document.getElementById('reviews-container'));
            // Обновление отображения средней оценки
            displayAverageRating(articleId, document.getElementById('average-rating'));
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert("Please fill in all fields.");
    }
});

// Function to add a review to local storage
function addReview(articleId, name, reviewText, rating) {
    let reviews = JSON.parse(localStorage.getItem(`reviews-${articleId}`)) || [];
    reviews.push({ name, reviewText, rating });
    localStorage.setItem(`reviews-${articleId}`, JSON.stringify(reviews));
}

// Function to display reviews for an article
function displayReviews(articleId, container) {
    fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles/${articleId}/reviews`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error occurred');
            }
            return response.json();
        })
        .then(reviews => {
            container.innerHTML = "";
            if (reviews.length === 0) {
                const noReviews = document.createElement("p");
                noReviews.textContent = "No reviews yet.";
                container.appendChild(noReviews);
            } else {
                reviews.forEach((review, index) => {
                    const reviewElement = document.createElement("div");
                    reviewElement.classList.add("review");
                    reviewElement.innerHTML = `<strong>${review.name}</strong><br>${review.reviewText}<br>Оценка: ${review.rating}`;

                    // Add delete button for each review
                    const deleteButton = document.createElement("button");
                    deleteButton.textContent = "Удалить отзыв";
                    deleteButton.addEventListener("click", () => deleteReview(articleId, review.id));
                    reviewElement.appendChild(deleteButton);

                    container.appendChild(reviewElement);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Функция для удаления коментария
function deleteReview(articleId, reviewId) {
    fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles/${articleId}/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error occurred');
        }
        return response.json();
    })
    .then(() => {
        // Обновление отображения отзывов
        displayReviews(articleId, document.getElementById('reviews-container'));
        // Обновление отображения средней оценки
        displayAverageRating(articleId, document.getElementById('average-rating'));
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to calculate and display average rating
function displayAverageRating(articleId, container) {
    fetch(`https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles/${articleId}/reviews`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error occurred');
            }
            return response.json();
        })
        .then(reviews => {
            if (reviews.length === 0) {
                container.innerHTML = "Средняя оценка: Нет оценок";
            } else {
                const totalRating = reviews.reduce((sum, review) => sum + parseInt(review.rating), 0);
                const averageRating = totalRating / reviews.length;
                container.innerHTML = `Средняя оценка: ${averageRating.toFixed(1)}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}