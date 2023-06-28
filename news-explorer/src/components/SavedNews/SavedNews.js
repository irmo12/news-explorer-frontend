import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './SavedNews.css'

function SavedNews({ newsData }) {

  return (
    <div className="news-grid">
      {newsData.map(news => (
        <NewsCard
          article={news}
          key={news._id}
        />
      ))}
    </div>
  );
}

export default SavedNews;
