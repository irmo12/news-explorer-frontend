import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './SavedNews.css'

function SavedNews({ newsData }) {

  return (
    <div className="news__grid">
      {newsData.map(news => (
        <NewsCard
          article={news}
        />
      ))}
    </div>
  );
}

export default SavedNews;
