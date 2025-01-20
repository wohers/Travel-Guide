import React, { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import ReviewList from './Reviews/ReviewList';
import ReviewModal from './Reviews/ReviewModal';

const ReviewManager = ({ articleId, apiUrl }) => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/${articleId}/reviews`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [articleId, apiUrl]);

  const addReview = (name, reviewText, rating) => {
    fetch(`${apiUrl}/${articleId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, reviewText, rating }),
    })
      .then((response) => response.json())
      .then((newReview) => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
        setIsModalOpen(false);
      })
      .catch((error) => console.error('Error:', error));
  };

  const deleteReview = (reviewId) => {
    fetch(`${apiUrl}/${articleId}/reviews/${reviewId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setReviews(reviews.filter((review) => review.id !== reviewId));
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div id="reviews-container">
      <Button id="leaveReviewButton" onClick={() => setIsModalOpen(true)}>
        Оставить отзыв
      </Button>

      <ReviewList reviews={reviews} deleteReview={deleteReview} />

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={addReview}
      />
    </div>
  );
};

export default ReviewManager;
