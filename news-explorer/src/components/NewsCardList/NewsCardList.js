import React, { useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';

function NewsCardList({ newsResults, saveOrDelArticle, articleList, setIsSignIn, openAuthPopup }) {
  articleList = articleList ? articleList : (newsResults.data ? Object.values(newsResults.data) : []);
  const [visibleCount, setVisibleCount] = useState(3);
  const location = useLocation();

  function handleShowMoreClick() {
    if (visibleCount >= articleList.length) {
      setVisibleCount(3);
    } else {
      setVisibleCount(visibleCount + 3);
    }
  }

  return (
    <div className="news-card-list">
      {location.pathname === '/' && (
        <>
          {(<h2 className='news-card-list__heading'>Search results</h2>)}
          {newsResults.errMsg !== '' && (
            <><p className='news-card-list__error'>
              Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.
            </p><span className='news-card-list__error-msg'>{`'error': ${newsResults.errMsg}`}</span></>

          )}
          <ul className={'news-card-list__grid'}>
            {articleList.slice(0, visibleCount).map((article) => (
              <NewsCard article={article} key={article._id} saveOrDelArticle={saveOrDelArticle} setIsSignIn={setIsSignIn} openAuthPopup={openAuthPopup} />
            ))}
          </ul>
          {articleList.length > 3 && (
            <button className='news-card-list__button' onClick={handleShowMoreClick}>
              {visibleCount >= articleList.length ? 'Show Less' : 'Show more'}
            </button>
          )}
        </>
      )}
      {location.pathname === '/saved-news' && (
        <div className='news-card-list__grid'>
          {articleList.map((article) =>
          (<NewsCard article={article} key={article._id} saveOrDelArticle={saveOrDelArticle} setIsSignIn={setIsSignIn} openAuthPopup={openAuthPopup} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsCardList;
