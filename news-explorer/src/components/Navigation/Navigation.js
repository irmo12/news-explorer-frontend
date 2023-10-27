import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import { SmallScreenContext } from "../../contexts/SmallScreenContext";
import { HomeContext } from "../../contexts/HomeContext";

import './Navigation.css';

function Navigation({ isShowNav }) {
  const { isLoggedIn } = useContext(AuthContext);
  const { isSmallScreen } = useContext(SmallScreenContext);
  const { isHome } = useContext(HomeContext);

  const linkClasses = (!isHome && isShowNav) 
  ? 'nav-link' 
  : (!isHome && !isShowNav) 
    ? 'nav-link nav-link_saved-news' 
    : 'nav-link';

  const navContainerClasses = isLoggedIn
    ? "nav-container nav-container_logged-in"
    : "nav-container";
  return (
    <nav className={navContainerClasses}>
      {!isSmallScreen ? (
        <>
          <NavLink
            className={linkClasses}
            activeclassname='active'
            exact='true'
            to='/'
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={linkClasses}
              activeclassname='active'
              to='/saved-news'
            >
              Saved&nbsp;articles
            </NavLink>
          )}
        </>
      ) : (
        <>
          {isHome
            && isLoggedIn ? (
            <NavLink
              className={linkClasses}
              activeclassname='active'
              to='/saved-news'
            >
              Saved&nbsp;articles
            </NavLink>
          ) : (
            <NavLink
              className={linkClasses}
              activeclassname='active'
              exact='true'
              to='/'
            >
              Home
            </NavLink>
          )}
        </>
      )}
    </nav>
  );
}

export default Navigation;
