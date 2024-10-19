import React, { createContext } from 'react';
import useArticles from '../hooks/useArticles';

export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const {
    articles,
    setFilteredArticles,
    categories,
    filterByCategory,
    handleArticleClick,
    addArticle, 
    currentPage,
    totalPages,
    handlePageChange,
  } = useArticles();

  return (
    <ArticleContext.Provider
      value={{
        articles,
        setFilteredArticles,
        categories,
        filterByCategory,
        handleArticleClick,
        addArticle,
        currentPage,
        totalPages,
        handlePageChange,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
