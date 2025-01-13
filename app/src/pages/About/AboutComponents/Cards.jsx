import React from 'react';

import Card from './Card';
import Img from '../../../components/ImgComponents/Img';
import Text from '../../../components/Text/Text';
import CardLink from './CardLink';
import Button from '../../../components/Button/Button';

const Cards = ({ className, toggleModal }) => {
  return (
    <div className={className}>
      <Card className="about__card">
        <Img
          src="https://img.icons8.com/parakeet/96/order-delivered.png"
          alt="Адрес"
          className="about__img"
        />
        <Text className="about__h3">Адрес</Text>
        <Text className="about__p">
          Мы находимся по адресу - <br /><br />
          г. Город, ул. Улица, д. 123
        </Text>
        <CardLink href="https://www.google.ru/maps" target="_blank" rel="noopener noreferrer" className="about__btn">
          Посмотреть на карте
        </CardLink>
      </Card>

      <Card className="about__card">
        <Img
          src="https://img.icons8.com/pastel-glyph/100/12B886/iphone-x--v1.png"
          alt="Телефон"
          className="about__img"
        />
        <Text className="about__h3">Телефон</Text>
        <Text className="about__p">
          Есть вопросы? Мы поможем! <br /><br />
          +7 (123) 456-78-90 <br />
          или <br />
          +7 (123) 456-78-90
        </Text>
        <CardLink href="tel:+7123456789" className="about__btn">
          Позвонить
        </CardLink>
      </Card>

      <Card className="about__card">
        <Img
          src="https://img.icons8.com/external-wanicon-two-tone-wanicon/100/external-email-work-at-home-wanicon-two-tone-wanicon.png"
          alt="Email"
          className="about__img"
        />
        <Text className="about__h3">Email</Text>
        <Text className="about__p">
          По поводу сотрудничества оставьте заявку. Мы сами вам напишем! <br /><br />
          info@company.com
        </Text>
        <Button id="openModalBtn" onClick={toggleModal}>  
          Связаться
        </Button>
      </Card>
    </div>
  );
};

export default Cards;