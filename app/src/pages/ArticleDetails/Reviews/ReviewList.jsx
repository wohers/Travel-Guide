import React from 'react';
import Button from '../../../components/Button/Button';
const ReviewList = ({ reviews, deleteReview }) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <strong>{review.name}</strong>
          <br />
          {review.reviewText}
          <br />
          Оценка: {review.rating}
          <Button onClick={() => deleteReview(review.id)}>Удалить отзыв</Button>
        </div>
      ))}
    </>
  );
};

export default ReviewList;
