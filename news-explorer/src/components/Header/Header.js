import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
//  import { Navigation } from './navigation/Navigation.js';
import logout from '../../images/logout.svg';


function Header({ isLoggedIn, userName, signOut, openAuthPopup }) {

  return (
    <header className="header">
      <Link className="header__title" to='/saved-news'>NewsExplorer</Link>
      {/* { <Navigation /> } */}
      <div className="header__button-logic">
        {isLoggedIn ? (
          <button
            className="header__log-button"
            onClick={signOut}
          >{userName}  <embed className="header__logout-icon" src={logout} alt="logout" />
          </button>
        ) : (
          <button
            className="header__log-button"
            onClick={openAuthPopup}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
}
export default Header;
