import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import './Navigation.css';

function Navigation() {
  const isLoggedIn = useContext(AuthContext);

  return (
    <div className="navigation-container">
      <NavLink
        className={isLoggedIn ? 'nav-link nav-link_logged_in' : 'nav-link nav-link_logged_out'}
        activeClassName='active'
        to='/'
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className='nav-link nav-link_logged_in'
          activeClassName='active'
          to='/saved-news'
        >
          Saved articles
        </NavLink>)}
    </div>
  );
}

export default Navigation;
