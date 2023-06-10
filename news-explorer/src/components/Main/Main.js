import React, { useState } from 'react';
import './Main.css';
import Header from '../Header/Header.js';
import About from '../About/About.js';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader.js';


function Main() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  return (
    <>
      <div className="main">
        <div className="main__header-search-container">
          <Header />
          <SearchForm />
        </div>
        <Preloader />
        <About />


      </div>
    </>
  );
}

export default Main;
