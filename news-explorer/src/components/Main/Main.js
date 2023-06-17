import React, { useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main({ isLoggedIn, openAuthPopup, newsData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const articleList = Object.values(newsData); // Convert object to array

  return (
    <>
      <div className="main">
        <div className="main__header-search-container">
          <Header isLoggedIn={isLoggedIn} openAuthPopup={openAuthPopup} />
          <SearchForm />
        </div>
        <Preloader isLoading={isLoading} hasResults={hasResults} />
        <NewsCardList articleList={articleList} /> {/* Pass the converted array */}
      </div>
    </>
  );
}

export default Main;
