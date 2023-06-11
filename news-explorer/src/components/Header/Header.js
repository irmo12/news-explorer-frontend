import React from "react";
import './Header.css';
import {  Link } from 'react-router-dom';
//  import { Navigation } from './navigation/Navigation.js';
 import logout from '../../images/logout.svg';


function Header({ loggedIn = true, userName, signOut }) {

  return (
    <header className="header">
      <Link className="header__title" to='/saved-news'>NewsExplorer</Link>
      {/* { <Navigation /> } */}
      <div className="header__button-logic">
        {loggedIn ? (
          <button
            className="header__logout-button"
            onClick={signOut}
          >{ userName }  <embed className="header__logout-icon" src={logout} alt="logout" />
          </button>
        ) : (
          <Link
            className="header__auth-link"
            to={'/signin'}
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
}
export default Header;
