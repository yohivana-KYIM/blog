import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import NewArticlePage from './pages/NewArticlePage';
import ArticleProvider from './context/ArticleContext';
import './index.css';

const App = () => {
  return (
    <ArticleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ArticlePage />} />
          <Route path="/articles/new" element={<NewArticlePage />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />
        </Routes>
      </Router>
    </ArticleProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
