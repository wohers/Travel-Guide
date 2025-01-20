import React from 'react';
import Button from '../../../components/Button/Button';
import FormInput from '../../About/AboutComponents/FormInput';
import Select from './Select';
import Option from './Option'

const ReviewForm = ({ onSubmit, onClose }) => {
  return (
    <div className="modal-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <h2>Оставить отзыв</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.elements.modalName.value;
          const reviewText = e.target.elements.modalReview.value;
          const rating = e.target.elements.modalRating.value;
          onSubmit(name, reviewText, rating);
        }}
      >
        <label htmlFor="modalName">Имя:</label>
        <FormInput type="text" id="modalName" name="name" required />
        <label htmlFor="modalReview">Отзыв:</label>
        <textarea id="modalReview" name="review" rows="5" required></textarea>
        <label htmlFor="modalRating">Оценка:</label>
        <Select>
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
        </Select>
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
};

export default ReviewForm;