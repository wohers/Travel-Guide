import React from 'react';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import Form from './Form';

const ModalContent = ({ toggleModal }) => {
  return (
    <div className="modal__content">
      <Button className="modal__close" onClick={toggleModal}>
        &times;
      </Button>
      <Text className="modal__h2">Подпишитесь на нашу рассылку</Text>
      <Text className="modal__p">Будьте в курсе последних новостей и обновлений!</Text>
      <Form id="subscribeForm">
        <input type="email" id="emailInput" placeholder="Введите ваш email" required />
        <button type="submit">Отправить</button>
      </Form>
    </div>
  );
};

export default ModalContent;