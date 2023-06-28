import React from 'react';
import './NewsCardList.css'; 
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList( {articleList} ) {
  return (
    <div className="news-card-list">
      <h2 className='news-card-list__heading'>Search results</h2>
      <div className="news-card-list__grid">
      {articleList.map((article) => (
          <NewsCard article={article} key={article._id} />
        ))}
      </div>
      <button className='news-card-list__button'>Show more</button>
    </div>
  );
}

export default NewsCardList;
