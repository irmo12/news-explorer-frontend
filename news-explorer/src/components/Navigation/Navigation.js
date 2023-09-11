import React, { useContext } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import { SmallScreenContext } from "../../contexts/SmallScreenContext";

import './Navigation.css';

function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);
  const { isSmallScreen } = useContext(SmallScreenContext);
  const location = useLocation();


  const linkClasses = isLoggedIn
    ? "nav-link nav-link_logged_in"
    : "nav-link";

  const navContainerClasses = isLoggedIn
    ? "nav-container nav-container_logged_in"
    : "nav-container";

  return (
    <nav className={navContainerClasses}>
      {!isSmallScreen && (
        <>
          <NavLink
            className={linkClasses}
            activeClassName='active'
            exact to='/'
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className='nav-link nav-link_logged_in'
              activeClassName='active'
              to='/saved-articles'
            >
              Saved&nbsp;articles
            </NavLink>
          )}
        </>
      )}
      {isSmallScreen && location.pathname === '/' && isLoggedIn && (
        <NavLink
          className='nav-link nav-link_logged_in'
          activeClassName='active'
          to='/saved-articles'
        >
          Saved&nbsp;articles
        </NavLink>
      )}
      {isSmallScreen && location.pathname === '/' && !isLoggedIn && (
        <NavLink
          className={linkClasses}
          activeClassName='active'
          exact to='/'
        >
          Home
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
