import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewManager from "./ReviewManager"; // Импортируем ReviewManager
import '../ArticleDetails/ArticleDetails.scss';

const ArticleDetails = ({ apiUrl }) => {
  const { id: articleId } = useParams(); // Получаем articleId из URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/${articleId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching article details:", err);
        setLoading(false);
      });
  }, [articleId, apiUrl]);

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const navigateImage = (direction) => {
    const images = [article.imageUrl, article.imageUrl2].filter(Boolean);
    const newIndex = (currentImageIndex + direction + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!article) {
    return <div>Error loading article details.</div>;
  }

  const images = [article.imageUrl, article.imageUrl2].filter(Boolean);

  return (
    <div className="article-details">
      <h1>{article.title}</h1>

      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="imgModal"
          onClick={() => openImageModal(0)}
        />
      )}

      <p>{article.content}</p>

      {article.imageUrl2 && (
        <img
          src={article.imageUrl2}
          alt={article.title}
          className="imgModal"
          onClick={() => openImageModal(1)}
        />
      )}

      {article.content2 && <p>{article.content2}</p>}

      <iframe
        src={`https://maps.google.com/maps?q=${article.latitude},${article.longitude}&z=15&output=embed`}
        width="100%"
        height="600"
        style={{ border: "0" }}
        title="map"
      ></iframe>

      {/* Передаем управление модальным окном в ReviewManager */}
      <ReviewManager articleId={articleId} apiUrl={apiUrl} />

      {isImageModalOpen && images.length > 0 && (
        <div className="modalimg" style={{ display: isImageModalOpen ? "block" : "none" }}>
          <span className="modalimg__closeImg" onClick={closeImageModal}>
            &times;
          </span>
          <img
            src={images[currentImageIndex]}
            alt={article.title}
            className="modalimg__content"
          />
          <span className="modal-navigation prev" onClick={() => navigateImage(-1)}>
            &#10094;
          </span>
          <span className="modal-navigation next" onClick={() => navigateImage(1)}>
            &#10095;
          </span>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;