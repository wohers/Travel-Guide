import React from "react";

const ArticleList = ({ articles, isLoading }) => {
    return (
        <div className="card">
            {isLoading && (
                <div className="loader" id="loader">
                    <div className="spinner"></div>
                </div>
            )}
            <div className="card__articles" id="articles">
                {articles.map((article) => (
                    <div key={article.id} className="article">
                        <h2 onClick={() => window.open(`shablon.html?id=${article.id}`)}>
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