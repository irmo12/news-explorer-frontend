import React, { useContext } from 'react';
import './SavedNewsHeader.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import { UserContext } from '../../contexts/UserContext';

function SavedNewsHeader({ articleList, saveOrDelArticle }) {
  const { userData } = useContext(UserContext);

  const keywordsMap = new Map();

  articleList.forEach((news) => {
    const keyword = capitalizeKeyword(news.keyword);
    if (keywordsMap.has(keyword)) {
      keywordsMap.set(keyword, keywordsMap.get(keyword) + 1);
    } else {
      keywordsMap.set(keyword, 1);
    }
  });

  const sortedKeywords = [...keywordsMap.entries()].sort((a, b) => b[1] - a[1]).map((entry) => entry[0]);

  const numberOfSavedArticles = articleList.length;
  const displayedKeywords = sortedKeywords.slice(0, 2);
  const remainingKeywordsCount = Math.max(0, sortedKeywords.length - 2);

  return (
    <>
      <div className='saved-news'>
        <div className='saved-news__content'>
          <h2 className='saved-news__heading'>Saved articles</h2>
          <h3 className='saved-news__user-message'>{userData.name}, you have {numberOfSavedArticles} saved articles</h3>
          <p className='saved-news__saved-summary'>
            <span className='saved-news__saved-by'>By keywords:</span><span className='saved-news__summary-string'> {displayedKeywords.join(', ')}
              {remainingKeywordsCount > 0 ? `, and ${remainingKeywordsCount} other${remainingKeywordsCount > 1 ? 's' : ''}` : ''}
            </span></p>
        </div>
      </div>
      <NewsCardList articleList={articleList} saveOrDelArticle={saveOrDelArticle} />
    </>
  );
}

function capitalizeKeyword(keyword) {
  return keyword.charAt(0).toUpperCase() + keyword.slice(1);
}

export default SavedNewsHeader;
