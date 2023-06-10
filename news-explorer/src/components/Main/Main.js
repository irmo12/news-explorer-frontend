import React, { useState } from 'react';
import './Main.css';
import Header from '../Header/Header.js';
import About from '../About/About.js';
import SearchForm from '../SearchForm/SearchForm';


function Main() {

  return (
    <>
      <div className="main">
        <div className="main__header+search-container">
      <Header />
      <SearchForm />
      </div>

        <About />


      </div>
    </>
  );
}

export default Main;
