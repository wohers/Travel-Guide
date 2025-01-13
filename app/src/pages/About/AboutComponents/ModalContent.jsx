import React, { useRef } from 'react';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import Form from './Form';

const ModalContent = ({ onClose }) => {
  const email = useRef(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const emailValue = email.current.value;

    if (emailValue) {
      alert(`Спасибо за обратную связь! Ваш email: ${emailValue}`);
      onClose();
      localStorage.setItem("userEmail", emailValue);
    } else {
      alert("Пожалуйста, введите ваш email.");
    }
  };

  return (
    <div>
      <Button className="modal__close" onClick={onClose}>
        &times;
      </Button>
      <Text className="modal__h2">Подпишитесь на нашу рассылку</Text>
      <Text className="modal__p">Будьте в курсе последних новостей и обновлений!</Text>
      <Form id="subscribeForm" onSubmit={handleFormSubmit} ref={email} />
    </div>
  );
};

export default ModalContent;