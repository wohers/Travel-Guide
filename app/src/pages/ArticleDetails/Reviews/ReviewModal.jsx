import React from 'react';
import ReviewForm from './ReviewForm';

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div id="reviewModal" className="modal" style={{ display: 'block' }}>
      <ReviewForm onSubmit={onSubmit} onClose={onClose} />
    </div>
  );
};

export default ReviewModal;
