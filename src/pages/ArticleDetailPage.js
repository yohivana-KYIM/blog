import React from 'react';
import ArticleDetails from '../components/ArticleDetails';

const ArticleDetailPage = ({ match }) => {
  return (
    <div>
      <ArticleDetails match={match} />
    </div>
  );
};

export default ArticleDetailPage;
