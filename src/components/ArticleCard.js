import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article, onClick }) => {
  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
  };

  return (
    <div className="article-card" onClick={onClick}>
      <img src={article.image} alt={article.title} />
      <h2>{article.title}</h2>
      <p>{article.description}</p> {/* Limite la description à 100 caractères */}
      <Link to={`/articles/${article.id}`} className="see-more">
        Voir plus
      </Link>
    </div>
  );
};

export default ArticleCard;
