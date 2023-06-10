import React, { useState } from 'react';
import './Main.css';
import About from '../About/About.js';
import SearchForm from '../SearchForm/SearchForm';


function Main() {

  return (
    <>
      <div className="main">

        <About />
        <SearchForm />


      </div>
    </>
  );
}

export default Main;
