import React, { useContext, useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { AuthContext } from "../../contexts/AuthContext";
import { SmallScreenContext } from "../../contexts/SmallScreenContext";
import HeaderButton from "./Header-Button/HeaderButton";

function Header({ userName = 'Elise', openAuthPopup, isOpen }) {
  const { isLoggedIn } = useContext(AuthContext);
  const { isSmallScreen } = useContext(SmallScreenContext);
  const [isShowNav, setShowNav] = useState(false);

  console.log(isSmallScreen);

  function showNav() {
    setShowNav(!isShowNav);
  }

  const headerClasses = isLoggedIn
    ? "header_logged_in header"
    : "header";

  const titleClasses = isLoggedIn
    ? "header__title header__title_logged_in"
    : "header__title";
    
  return (
    <header className={`${headerClasses} ${isShowNav ? 'header_show-nav' : ''}`}>
      {!isSmallScreen ? (
        <>
          <div className="header__content">
            <Link className={titleClasses} to='/saved-news'>NewsExplorer</Link>
            <Navigation className='header__nav' />
            <HeaderButton userName={userName}
              openAuthPopup={openAuthPopup} />
          </div>
        </>) : (<>
          <div className="header__content">
            <Link className={titleClasses} to='/saved-news'>NewsExplorer</Link>
            <button className={`header__phone-button ${isLoggedIn ? 'header__phone-button_black' : ''} ${isShowNav ? 'header__phone-button_X' : ''} ${isOpen ? 'header__phone-button_invis' : ''}`} onClick={showNav} />
          </div>
          {isShowNav && (<>
            <Navigation className="header__nav" />
            <HeaderButton userName={userName}
              openAuthPopup={openAuthPopup} />
          </>)}
        </>)
      }
    </header>);
}

export default Header;
