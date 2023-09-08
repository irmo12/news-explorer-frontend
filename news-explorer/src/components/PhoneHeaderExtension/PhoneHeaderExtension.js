import React, { useContext } from 'react';
import './PhoneHeaderExtension.css';
import { AuthContext } from "../../contexts/AuthContext";
import { SmallScreenContext } from '../../contexts/SmallScreenContext';
import { NavLink } from 'react-router-dom';



function PhoneHeaderExtension({ openAuthPopup }) {

  const { isLoggedIn } = useContext(AuthContext);
  const { isSmallScreen } = useContext(SmallScreenContext);


  return (
    <>
      {isSmallScreen && (
        <div className='phone-header'>
          <NavLink className={'phone-header__link'} exact to='/'>Home</NavLink>
          <button className='phone-header__button' onClick={openAuthPopup}>Sign in</button>
        </div>)}
    </>);
}

export default PhoneHeaderExtension;