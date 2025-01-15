import React from 'react';
import Search from './Search/Search';
import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Text from '../../../components/Text/Text';

const Main = () => {
  return (
    <section className="main">
      <div className="main__container">
        <div className="main__title-container">
          <Text className="main__titleText">Достопримечательности</Text>
          <Search />
          <Filter />
          <Sort />
        </div>
        <div className="card">
          <div className="loader" id="loader">
            <div className="spinner"></div>
          </div>
          <div className="card__articles" id="articles"></div>
          <ul className="pagination" id="pagination"></ul>
        </div>
      </div>
    </section>
  );
};

export default Main;
