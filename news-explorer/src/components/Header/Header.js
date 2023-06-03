import React from "react";
import './Header.css';
import {  NavLink } from 'react-router-dom';
// import { Navigation } from './navigation/Navigation.js';


function Header({ loggedIn = true, userName, signOut }) {

  return (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      {/* <Navigation /> */}
      <div className="header__button-logic">
        {loggedIn ? (
          <button
            className="header__logout-button"
            onClick={signOut}
          >{ userName }  <img className="header__logout-icon" src='../../images/Union.svg' alt="logout" />
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
