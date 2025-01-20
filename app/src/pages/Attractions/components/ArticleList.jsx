import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleList = ({ articles, isLoading }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className={`loader ${isLoading ? 'active' : ''}`}>
        <div className="spinner"></div>
      </div>
      <div className="card__articles" id="articles">
        {articles.map((article) => (
          <div key={article.id} className="article">
            <h2 onClick={() => navigate(`/attractions/${article.id}`)}>
              {article.title}
            </h2>
            <img src={article.imageUrl} alt={article.title} />
            <p>{article.content.substring(0, 300)}... Читать дальше</p>
            <p>Лайков: {article.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
