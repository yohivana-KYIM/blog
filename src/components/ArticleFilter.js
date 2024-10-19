import React, { useContext } from 'react';
import { ArticleContext } from '../context/ArticleContext';
import '../index.css';

const ArticleFilter = () => {
  const { categories, filterByCategory } = useContext(ArticleContext);

  return (
    <div className="article-filter">
      <select onChange={(e) => filterByCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ArticleFilter;
