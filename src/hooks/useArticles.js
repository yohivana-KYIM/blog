import { useState, useEffect } from 'react';
import { getArticles } from '../api';

const useArticles = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    const fetchedArticles = getArticles();
    setArticles(fetchedArticles); 
    setFilteredArticles(fetchedArticles);
    setCategories([...new Set(fetchedArticles.map(article => article.category))]);
  }, []);

  const filterByCategory = (category) => {
    setFilteredArticles(
      category ? articles.filter(article => article.category === category) : articles
    );
    setCurrentPage(1); 
  };

  const addArticle = (newArticle) => {

    const updatedArticles = [newArticle, ...articles];
    setArticles(updatedArticles); 
    setFilteredArticles(updatedArticles); 
    setCategories([...new Set(updatedArticles.map(article => article.category))]); 
  };

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    articles: filteredArticles.slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage),
    setFilteredArticles, 
    categories,
    filterByCategory,
    addArticle, 
    handleArticleClick: (id) => {
      console.log(`Article ${id} clicked`);
    },
    currentPage,
    totalPages,
    handlePageChange,
  };
};

export default useArticles;
