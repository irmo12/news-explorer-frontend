import React from 'react';
import SavedNews from '../SavedNews/SavedNews';
import './SavedNewsHeader.css'

function SavedNewsHeader({ newsData, username }) {
  const numberOfSavedArticles = newsData.length;

  const keywords = newsData.reduce((allKeywords, news) => {
    allKeywords.push(...news.keywords);
    return allKeywords;
  }, []);

  const displayedKeywords = keywords.slice(0, 2);
  const remainingKeywordsCount = keywords.length - displayedKeywords.length;

  return (
    <div className='saved-news'>
      <h2 className='saved-news__heading'>Saved news</h2>
      <h3 className='saved-news__user-message'>{username}, you have {numberOfSavedArticles} saved articles</h3>
      <p>
        By keywords: {displayedKeywords.join(', ')}
        {remainingKeywordsCount > 0 ? ` and ${remainingKeywordsCount} other${remainingKeywordsCount > 1 ? 's' : ''}` : ''}
      </p>
      <SavedNews newsData={newsData}/>
    </div>
  );
}

export default SavedNewsHeader;
