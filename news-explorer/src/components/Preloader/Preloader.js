import React from 'react';
import './Preloader.css';
import magnifyingGlass from '../../images/not-found_v1.svg';

const Preloader = ( {preLoader} ) => {

  return (
    <aside className={ preLoader.isLoading ? "preloader" : "preloader preloader_hidden"}>
      <div className="preloader-container">
      {preLoader.hasResults ? <i className="circle-preloader"></i> : <embed className='preloader__img' src={magnifyingGlass} alt='magnifying glass' />}
      <h3 className={ preLoader.hasResults ? 'preloader__title preloader__title_none' : 'preloader__title'} >Nothing Found</h3>
      <p className='preloader__description'>{preLoader.hasResults ? 'Searching for news...' : 'Sorry, but nothing matched your search terms'}</p>
      </div>
    </aside>
  );
};

export default Preloader;
