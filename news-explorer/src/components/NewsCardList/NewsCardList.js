import React from 'react';
import './NewsCardList.css'; 

function NewsCardList( isLoggedIn, articleList ) {
  return (
    <div className="news-card-list">
      <h2 className='news-card-list__heading'>Search results</h2>
      <div className="news-card-list__grid">
        {}
      </div>
      <button className='news-card-list__button'>Show more</button>
    </div>
  );
}

export default NewsCardList;
