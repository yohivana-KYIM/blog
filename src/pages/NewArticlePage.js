import React from 'react';
import ArticleForm from '../components/ArticleForm';

const NewArticlePage = () => {
  const handleCreateArticle = (newArticle) => {
    // Ajouter la logique pour créer un article
  };

  return (
    <div>
      <h1>Create New Article</h1>
      <ArticleForm onSubmit={handleCreateArticle} />
    </div>
  );
};

export default NewArticlePage;
