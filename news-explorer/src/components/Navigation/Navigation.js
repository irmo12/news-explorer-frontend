import React, { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";
import './Navigation.css';

function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  const linkClasses = isLoggedIn
    ? "nav-link nav-link_logged_in"
    : "nav-link";

  const navContainerClasses = isLoggedIn
    ? "nav-container nav-container_logged_in"
    : "nav-container";
    
  return (
    <div className={navContainerClasses}>
      <NavLink
        className={linkClasses}
        activeclassname='active'
        exact to='/'
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className='nav-link nav-link_logged_in'
          activeclassname='active'
          to='/saved-news'
        >
          Saved&nbsp;articles
        </NavLink>)}
    </div>
  );
}

export default Navigation;
