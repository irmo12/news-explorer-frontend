import React, { useContext } from 'react';
import './SearchForm.css';
import { SmallScreenContext } from '../../contexts/SmallScreenContext';

const SearchForm = () => {
  const isSmallScreen = useContext(SmallScreenContext);
  return (
    <form className="search-form">
      <div className="search-form__txtcontainer">
        <h1 className='search-form__heading'>What's going on in the world?</h1>
        <p className='search-form__description'>Find the latest news on any topic and save them in your personal account.</p>
      </div>
      {!isSmallScreen ? (<>
        <div className="search-form__search-bar">
          <input className="search-form__input" type="text" placeholder="Enter topic" />
          <button className='search-form__submit'>Search</button>
        </div></>
      ) : (<>
        <div className="search-form__search-bar search-form__search-bar_stacked">
          <input className="search-form__input" type="text" placeholder="Enter topic" />
        </div>
        <button className='search-form__submit search-form__submit_stacked'>Search</button>
      </>)}
    </form>
  );
};

export default SearchForm;
