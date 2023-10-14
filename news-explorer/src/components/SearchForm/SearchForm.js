import React, { useContext } from 'react';
import './SearchForm.css';
import { SmallScreenContext } from '../../contexts/SmallScreenContext';
import { useFormValidation } from '../../utils/useFormValidation.js';


const SearchForm = ({ sendSearchQuery, setInfoPopup, setPreLoader }) => {
  const { isSmallScreen } = useContext(SmallScreenContext);
  const {
    values, handleChange,
  } = useFormValidation();

  function handleSubmit(e) {
    console.log(e.target.value);
    e.preventDefault();
    const q = values.newsSearch.trim();
    if (q === '') { setInfoPopup({ isInfoOpen: true, msg: 'Please enter a keyword', displayLink: false }); return; }
    setPreLoader({ isLoading: true, stillSearching: true });
    sendSearchQuery(q);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__txt-container">
        <h1 className='search-form__heading'>What's going on in the world?</h1>
        <p className='search-form__description'>Find the latest news on any topic and save them in your personal account.</p>
      </div>
      {!isSmallScreen ? (<>
        <div className="search-form__search-bar">
          <input className="search-form__input"
            type="search"
            required
            placeholder="Enter topic"
            id='search'
            name='newsSearch'
            onChange={handleChange}
          />
          <button className='search-form__submit'
            type='submit'
          >Search</button>
        </div></>
      ) : (<>
        <div className="search-form__search-bar search-form__search-bar_stacked">
          <input className="search-form__input"
            type="search"
            required
            placeholder="Enter topic"
            id="search"
            name='newsSearch'
            onChange={handleChange}
          />
        </div>
        <button className='search-form__submit search-form__submit_stacked'
        >Search</button>
      </>)}
    </form>
  );
};

export default SearchForm;
