import React from "react";
import './header.css';
import {  NavLink } from 'react-router-dom';
import { Navigation } from './navigation';


function Header({ loggedIn, userName, signOut }) {

  return (
    <header classname="header">
      <h1 classname="header__title">NewsExplorer</h1>
      <Navigation />
      <div classname="header__button-logic">
        {loggedIn ? (
          <button
            classname="header__login"
            onClick={signOut}
          >{loggedIn ? userName : <img className="header__logout-icon" src="../../images/logout.svg" alt="logout" />}
          </button>
        ) : (
          <NavLink
            className="header__auth-link"
            to={'/signin'}
          >
            Sign in
          </NavLink>
        )}
      </div>
    </header>
  );
}
export default Header;
