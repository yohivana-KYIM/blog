import React, { useState } from 'react';
import '../index.css';

const ArticleForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState(''); // Nouvel état pour la catégorie

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, image, category }); // Ajout de la catégorie à l'objet
    // Réinitialisation du formulaire après soumission
    setTitle('');
    setDescription('');
    setImage('');
    setCategory(''); // Réinitialise la catégorie
  };

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input 
          type="text" 
          id="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          className="input-field"
          placeholder="Enter the title" 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          className="textarea-field"
          placeholder="Enter the description"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Image URL:</label>
        <input 
          type="text" 
          id="image" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          className="input-field"
          placeholder="Enter image URL" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select 
          id="category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          className="select-field"
          required
        >
          <option value="">Select a category</option>
          <option value="news">News</option>
          <option value="tutorial">Tutorial</option>
          <option value="review">Review</option>
          {/* Ajoute d'autres catégories selon le besoin */}
        </select>
      </div>
      <button type="submit" className="submit-btn">Create Article</button>
    </form>
  );
};

export default ArticleForm;
