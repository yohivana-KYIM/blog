import React, { useContext, useState } from 'react';
import ArticleList from '../components/ArticleList';
import ArticleFilter from '../components/ArticleFilter';
import ArticleSearch from '../components/ArticleSearch';
import ArticleForm from '../components/ArticleForm'; // Importer le formulaire d'article
import { ArticleContext } from '../context/ArticleContext';

const ArticlePage = () => {
    
  const { addArticle } = useContext(ArticleContext); // Récupérer la fonction addArticle
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateArticle = (newArticleData) => {
    const newArticle = {
      id: Date.now(),  
      ...newArticleData,
    };
  
    addArticle(newArticle); 
    closeModal(); 
  };
  

  return (
    <div className="article-page">
      <div className="responsive-container">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ArticleSearch />
          <ArticleFilter />
        </div>
        <button onClick={openModal} className="create-button">Create New Article</button>
      </div>

      <ArticleList />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>X</button>
            <h2>Create New Article</h2>
            <ArticleForm onSubmit={handleCreateArticle} />
          </div>
        </div>
      )}

    </div>
  );
};

export default ArticlePage;
