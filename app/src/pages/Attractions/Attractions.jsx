import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ArticleManager from './ArticleManager';
import Search from './components/Search';
import Filter from './components/Filter';
import Sort from './components/Sort';
import ArticleList from './components/ArticleList';
import Pagination from './components/Pagination';
import './Attractions.scss';
import Header from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

const Attractions = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const scroll = () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');

    if (header && footer) {
      const headerRect = header.getBoundingClientRect();

      if (headerRect.top >= 0 && headerRect.bottom <= window.innerHeight) {
        footer.scrollIntoView({ behavior: 'smooth' });
        setIsHeaderVisible(false);
      } else {
        header.scrollIntoView({ behavior: 'smooth' });
        setIsHeaderVisible(true);
      }
    } else {
      console.error('Header или Footer не найдены в DOM');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        setIsHeaderVisible(
          headerRect.top >= 0 && headerRect.bottom <= window.innerHeight
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const baseUrl =
    'https://67322e8b2a1b1a4ae10f29a6.mockapi.io/guide/v1/articles';
  const {
    articles,
    isLoading,
    currentPage,
    setCurrentPage,
    searchQuery,
    setSearchQuery,
    // eslint-disable-next-line
    category,
    setCategory,
    // eslint-disable-next-line
    order,
    setOrder,
  } = ArticleManager({ baseUrl });

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleSortChange = (category) => {
    setCategory(category);
  };

  const handleFilterChange = (order) => {
    setOrder(order);
  };

  return (
    <>
      <Header id="header" />
      <section className="main">
        <div className="main__container">
          <div className="main__title-container">
            <h1>Достопримечательности</h1>
            <Search
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />
            <Filter onFilterChange={handleFilterChange} />
            <Sort onSortChange={handleSortChange} />
          </div>

          <ArticleList articles={articles} isLoading={isLoading} />
          <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
        </div>
      </section>
      <Footer id="footer" />
      <Button className="yakor__btn" onClick={scroll}>
        {isHeaderVisible ? '↓' : '↑'}
      </Button>
    </>
  );
};

export default Attractions;
