import React, { useState } from 'react';
import Text from '../../../components/Text/Text';
import Cards from './Cards';
import Modal from './Modal';
import ModalContent from './ModalContent';

const AboutContainer = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
    console.log(!openModal)
  };

  return (
    <div className="about">
      <div className="about__container">
        <Text className="about__title">Контактные данные</Text>
        <Text className="about__text">Мы всегда рады помочь вам! Свяжитесь с нами любым удобным способом:</Text>
        <Cards className="about__cards" openModal={openModal} toggleModal={toggleModal} />
      </div>
      <Modal
        id="modal"
        className={`modal ${openModal ? 'modal--open' : ''}`} 
        isOpen={openModal}
        onClose={toggleModal}
      >
        <ModalContent  onClose={toggleModal}/>
      </Modal>
    </div>
  );
};

export default AboutContainer;