import React, { useState, useEffect } from "react";

const ReviewManager = ({ articleId, apiUrl }) => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/${articleId}/reviews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          console.error("Expected an array of reviews, but got:", data);
          setReviews([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      });
  }, [articleId, apiUrl]);

  const addReview = (name, reviewText, rating) => {
    fetch(`${apiUrl}/${articleId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, reviewText, rating }),
    })
      .then((response) => response.json())
      .then((newReview) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error:", error));
  };

  const deleteReview = (reviewId) => {
    fetch(`${apiUrl}/${articleId}/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== reviewId));
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div id="reviews-container">
      <button id="leaveReviewButton" onClick={() => setIsModalOpen(true)}>
        Оставить отзыв
      </button>

      {Array.isArray(reviews) && reviews.length === 0 ? (
        <p>Нету отзывов.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review">
            <strong>{review.name}</strong>
            <br />
            {review.reviewText}
            <br />
            Оценка: {review.rating}
            <button onClick={() => deleteReview(review.id)}>Удалить отзыв</button>
          </div>
        ))
      )}

      <div id="reviewModal" className="modal" style={{ display: isModalOpen ? "block" : "none" }}>
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>
            &times;
          </span>
          <h2>Оставить отзыв</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.elements.modalName.value;
              const reviewText = e.target.elements.modalReview.value;
              const rating = e.target.elements.modalRating.value;
              addReview(name, reviewText, rating);
            }}
          >
            <label htmlFor="modalName">Имя:</label>
            <input type="text" id="modalName" name="name" required />
            <label htmlFor="modalReview">Отзыв:</label>
            <textarea id="modalReview" name="review" rows="5" required></textarea>
            <label htmlFor="modalRating">Оценка:</label>
            <select id="modalRating" name="rating" required>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewManager;