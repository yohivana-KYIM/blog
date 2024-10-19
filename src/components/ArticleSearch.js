import React, { useContext, useState } from 'react';
import { ArticleContext } from '../context/ArticleContext';
import '../index.css'; // Assure-toi que ce chemin est correct

const ArticleSearch = () => {
  const { articles, setFilteredArticles } = useContext(ArticleContext);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    // Vérifie si le champ de recherche est vide
    if (term === '') {
      // Réinitialise les articles filtrés à la liste complète
      setFilteredArticles(articles);
    } else {
      // Filtrer les articles en fonction du terme de recherche
      setFilteredArticles(articles.filter(article => article.title.toLowerCase().includes(term)));
    }
  };

  return (
    <div className="article-search">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default ArticleSearch;
