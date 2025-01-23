import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewManager from './ReviewManager';
import '../ArticleDetails/ArticleDetails.scss';
import Text from '../../components/Text/Text';
import Img from '../../components/ImgComponents/Img';
import Iframe from '../Home/Map/MapComponents/Iframe';
import Button from '../../components/Button/Button';

const ArticleDetails = ({ apiUrl }) => {
  const { id: articleId } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/${articleId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      })    
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
    const newIndex =
      (currentImageIndex + direction + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  if (loading) {
    return <div className="loader">Загрузка</div>;
  }

  if (!article) {
    return <div>Нету статей</div>;
  }

  const images = [article.imageUrl, article.imageUrl2];

  return (
    <div className="article-details">
      <Text className="article-details__title">{article.title}</Text>

      <Img
        src={article.imageUrl}
        alt={article.title}
        className="imgModal"
        onClick={() => openImageModal(0)}
      />

      <Text className="article-details__text">{article.content}</Text>

      <Img
        src={article.imageUrl2}
        alt={article.title}
        className="imgModal"
        onClick={() => openImageModal(1)}
      />

      <Text className="article-details__text">{article.content2}</Text>

      <Iframe
        src={`https://maps.google.com/maps?q=${article.latitude},${article.longitude}&z=15&output=embed`}
        title="map"
        className="article-details__map"
      ></Iframe>

      <ReviewManager articleId={articleId} apiUrl={apiUrl} />

      {isImageModalOpen && (
        <div
          className="modalimg"
          style={{ display: isImageModalOpen ? 'block' : 'none' }}
        >
          <Button className="modalimg__closeImg" onClick={closeImageModal}>
            &times;
          </Button>

          <Img
            src={images[currentImageIndex]}
            alt={article.title}
            className="modalimg__content"
          />
          <Button
            className="modal-navigation prev"
            onClick={() => navigateImage(-1)}
          >
            &#10094;
          </Button>
          <Button
            className="modal-navigation next"
            onClick={() => navigateImage(1)}
          >
            &#10095;
          </Button>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
