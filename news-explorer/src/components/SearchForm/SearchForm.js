import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <div className="search-form">
      <h1 className='search-form__heading'>What's going on in the world?</h1>
      <p className='search-form__description'>Find the latest news on any topic and save them in your personal account.</p>
      <div className="search-form__search-bar">
        <input type="text" placeholder="Enter topic" />
        <button className='search-form__submit'>Search</button>
      </div>
    </div>
  );
}

export default SearchForm;
