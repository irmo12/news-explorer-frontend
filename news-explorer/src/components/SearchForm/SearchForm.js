import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form">
      <div className="search-form__txtcontainer">
        <h1 className='search-form__heading'>What's going on in the&nbsp;world?</h1>
        <p className='search-form__description'>Find the latest news on any topic and save them in your personal account.</p>
      </div>
      <div className="search-form__search-bar">
        <input className="search-form__input" type="text" placeholder="Enter topic" />
        <button className='search-form__submit'>Search</button>
      </div>
    </div>
  );
};

export default SearchForm;
