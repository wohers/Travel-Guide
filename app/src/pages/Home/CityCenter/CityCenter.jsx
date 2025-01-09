import React from "react";
import olimp from '../../../assets/images/olimp11.jpg'
import rm from '../../../assets/images/rm11.jpg'
import '../CityCenter/cityCenter.scss'

export const CityCenter = () => {
    return (
        <section className="news">
            <div className="container">
                <div className="news__title">Сити - Центры</div>
                <div className="news__grid">
                    <div className="news__grid news__grid-item_1">
                        <img src={olimp} alt="news1" />
                        <img
                            src="https://shopandmall.ru/images/offers/2020-01/gb_5350e5d7e104a13be307bf3acd5d0456.jpg"
                            alt="news1"
                        />
                    </div>
                    <div className="news__grid news__grid-item_2">
                        <div className="news__grid-text">
                            <p>
                                {" "}
                                Олимп – это 6 этажей шоппинга, <br />
                                развлечений и ресторанов для <br />
                                всей семьи, а так же удобная <br />
                                подземная парковка с <br />
                                автомойкой. Олимп относится к рубрикам: <br />
                                детские спортивные секции. <br />
                                Вы можете узнать всю интересующую вас <br />
                                информацию, позвонив по телефону <br />
                                +7 (917) 898-80-66.
                            </p>
                        </div>
                    </div>
                    <div className="news__grid news__grid-item_3">
                        <div className="news__grid-text">
                            <p>
                                {" "}
                                Суперрегиональный многофункциональный комплекс{" "}
                                <br />
                                Рамус молл – один из крупнейших проектов в{" "}
                                <br />
                                республике Татарстан и самый крупный проект
                                <br />
                                в городе Нижнекамск. Город Нижнекамск <br />
                                это крупнейший центр нефтехимической <br />
                                промышленности России.
                            </p>
                        </div>
                    </div>
                    <div className="news__grid news__grid-item_4">
                        <img src={rm} alt="news1" />
                        <img
                            src="https://www.malls.ru/upload/medialibrary/84f/v_galereyu_7.jpg"
                            alt="news1"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
