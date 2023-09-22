import React, { useContext, useState, useEffect } from "react";
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { SmallScreenContext } from "../../contexts/SmallScreenContext";
import { HomeContext } from "../../contexts/HomeContext";
import HeaderButton from "./Header-Button/HeaderButton";


function Header({ openAuthPopup, isOpen }) {
  const location = useLocation();
  const { isSmallScreen } = useContext(SmallScreenContext);
  const { isHome, setHome } = useContext(HomeContext);
  const [isShowNav, setShowNav] = useState(false);

  function showNav() {
    setShowNav(!isShowNav);
  }

  useEffect(() => {
    if (location.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const headerClasses = !isHome
    ? "header_saved-news header"
    : "header";

  const titleClasses = !isHome
    ? "header__title header__title_saved-news"
    : "header__title";

  return (
    <header className={`${headerClasses} ${isShowNav ? 'header_show-nav' : ''}`}>
      {!isSmallScreen ? (
        <>
          <div className="header__content">
            <Link className={titleClasses} to='/saved-news'>NewsExplorer</Link>
            <Navigation className='header__nav' />
            <HeaderButton
              openAuthPopup={openAuthPopup}
              isHome={isHome}
              isShowNav={isShowNav} />
          </div>
        </>) : (<>
          <div className="header__content">
            <Link className={!isShowNav ? titleClasses : "header__title"} to='/saved-news'>NewsExplorer</Link>
            <button className={`header__phone-button ${!isHome ? 'header__phone-button_black' : ''} ${isShowNav ? 'header__phone-button_X' : ''} ${isOpen ? 'header__phone-button_invis' : ''}`} onClick={showNav} />
          </div>
          {isShowNav && (<>
            <Navigation className="header__nav" />
            <HeaderButton
              openAuthPopup={openAuthPopup}
              isHome={isHome}
              isShowNav={isShowNav} />
          </>)}
        </>)
      }
    </header>);
}

export default Header;
