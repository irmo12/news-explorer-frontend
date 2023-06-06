import React from 'react';
import './Preloader.css';
import magnifyingGlass from '../../images/not-found_v1.svg';

const Preloader = () => {
  return (
    <div className="preloader">
      <i class="circle-preloader"></i> : <image src={magnifyingGlass} alt='magnifying glass' />
      <h3 className="preloader__title">Nothing Found</h3>
      <p className='preloader__description'>Searching for news...  -----  Sorry, but nothing matched your search terms</p>
    </div>
  );
}

export default Preloader;
