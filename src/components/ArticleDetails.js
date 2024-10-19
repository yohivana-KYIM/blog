import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArticleContext } from '../context/ArticleContext';
import '../index.css';

const ArticleDetails = () => {
  const { articles } = useContext(ArticleContext);
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  return article ? (
    <div className="article-details">
      <Link to="/" className="back-button">← Back to Articles</Link>
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} className="article-image"/>
      <p className="article-description">{article.description}</p>
    </div>
  ) : (
    <p>Article not found</p>
  );
};

export default ArticleDetails;
