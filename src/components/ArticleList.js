import React, { useContext, useState } from 'react';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

import { ArticleContext } from '../context/ArticleContext';


const ArticleList = () => {
  const { articles, handleArticleClick, currentPage, totalPages, handlePageChange } = useContext(ArticleContext);


  return (
    <div>
      <div className="article-list">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} onClick={() => handleArticleClick(article.id)} />
          ))}
        </div>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

    </div>
  );
};

export default ArticleList;
