import React, { useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ articleList }) {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? articleList.length : 3;

  function handleShowMoreClick() {
    setShowAll(!showAll);
  }

  return (
    <div className="news-card-list">
      <h2 className='news-card-list__heading'>Search results</h2>
      <div className={`news-card-list__grid ${showAll ? 'news-card-list__grid_show-more' : ``}`}>
        {articleList.slice(0, visibleCards).map((article) => (
          <NewsCard article={article} key={article._id} />
        ))}
      </div>
      {articleList.length > 3 && (
        <button className='news-card-list__button' onClick={handleShowMoreClick}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
