import React, { useContext } from 'react';
import './SearchForm.css';
import { SmallScreenContext } from '../../contexts/SmallScreenContext';
import { useFormValidation } from '../../utils/useFormValidation.js';


const SearchForm = ({getArticleList, setInfoPopup}) => {
  const { isSmallScreen } = useContext(SmallScreenContext);
  const {
    values,
    isValid,
  } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    // isValid ? 
    //callnewsapi
    setInfoPopup({isInfoOpen: true, msg: 'Please enter a keyword', displayLink: false})
  }

  return (
    <form className="search-form">
      <div className="search-form__txt-container">
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
          <input className="search-form__input"
            type="search"
            required
            placeholder="Enter topic"
            id="search"
            name='newsSearch'
            value={values.newsSearch || ''}
             />
        </div>
        <button className='search-form__submit search-form__submit_stacked'
        onSubmit={handleSubmit}
        >Search</button>
      </>)}
    </form>
  );
};

export default SearchForm;
