import React, { useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';

function NewsCardList({ articleList }) {
  const [showAll, setShowAll] = useState(false);
  const visibleCards = showAll ? articleList.length : 3;
  const location = useLocation();

  function handleShowMoreClick() {
    setShowAll(!showAll);
  }

  return (
    <list className="news-card-list">
      {location.pathname === '/' && (<>
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
      </>)}
      {location.pathname === '/saved-news' && (<>
        <div className='news-card-list__grid news-card-list__grid_show-more'>
          {articleList.map((article) => (<NewsCard article={article} key={article._id} />))}
        </div>
      </>)}
    </list>
  );
}

export default NewsCardList;
