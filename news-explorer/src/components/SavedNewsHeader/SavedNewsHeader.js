import React from 'react';
import './SavedNewsHeader.css';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNewsHeader({ articleList, username }) {
  const numberOfSavedArticles = articleList.length;

  const distinctKeywords = [...new Set(articleList.map(news => capitalizeKeyword(news.keyword)))];
  const displayedKeywords = distinctKeywords.slice(0, 2);
  const remainingKeywordsCount = Math.max(0, distinctKeywords.length - 2);

  return (
    <>
      <div className='saved-news'>
        <div className='saved-news__content'>
          <h2 className='saved-news__heading'>Saved articles</h2>
          <h3 className='saved-news__user-message'>{username}, you have {numberOfSavedArticles} saved articles</h3>
          <p className='saved-news__saved-summary'>
            <span className='saved-news__saved-by'>By keywords:</span><span className='saved-news__summary-string'> {displayedKeywords.join(', ')}
              {remainingKeywordsCount > 0 ? ` and ${remainingKeywordsCount} other${remainingKeywordsCount > 1 ? 's' : ''}` : ''}
            </span></p>
        </div>
      </div>
      <NewsCardList articleList={articleList} />
    </>
  );
}

function capitalizeKeyword(keyword) {
  return keyword.charAt(0).toUpperCase() + keyword.slice(1);
}

export default SavedNewsHeader;
