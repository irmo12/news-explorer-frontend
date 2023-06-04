import React from "react";
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  <>
    <NavLink className='nav-link' activeClassName='active' to='/'>Home</NavLink>
    <NavLink className='nav-link' activeClassName='active' to='/saved-news'>Saved articles</NavLink>
  </>;
}
export default Navigation;