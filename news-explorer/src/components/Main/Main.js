import React, { useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import SavedNews from '../SavedNews/SavedNews';


function Main({ isLoggedIn, openAuthPopup, newsData }) {

  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);


  return (
    <>
      <div className="main">
        <div className="main__header-search-container">
          <Header isLoggedIn={isLoggedIn} openAuthPopup={openAuthPopup} />
          <SearchForm />
        </div>
        <Preloader isLoading={isLoading} hasResults={hasResults} />
        <SavedNews newsData={newsData}/>
        <About />

      </div>
    </>
  );
}

export default Main;
