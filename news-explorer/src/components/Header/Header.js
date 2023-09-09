import React, { useContext } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logout from '../../images/logout.svg';
import { AuthContext } from "../../contexts/AuthContext";
import { SmallScreenContext } from "../../contexts/SmallScreenContext";

function Header({ userName = 'Elise', openAuthPopup }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const isSmallScreen = useContext(SmallScreenContext);

  function signOut() {
    setIsLoggedIn(false);
  }

  const headerClasses = isLoggedIn
    ? "header_logged_in header"
    : "header";

  const buttonClasses = isLoggedIn
    ? "header__log-button header__log-button_logged_in"
    : "header__log-button";

  const titleClasses = isLoggedIn
    ? "header__title header__title_logged_in"
    : "header__title";

  const buttonLogicClasses = isLoggedIn
    ? "header__button-logic header__button-logic_logged_in"
    : "header__button-logic";

  return (
    <header className={headerClasses}>
      {!isSmallScreen ? (
        <>
          <div className="header__content">
            <Link className={titleClasses} to='/saved-news'>NewsExplorer</Link>
            <Navigation className='header__nav' />
            <div className={buttonLogicClasses}>
              {
                isLoggedIn ? (
                  <button
                    className={buttonClasses}
                    onClick={signOut}
                  >
                    <span className="header__username">{userName}</span>
                    <embed className="header__logout-icon" src={logout} alt="logout" />
                  </button>
                ) : (
                  <button
                    className={buttonClasses}
                    onClick={openAuthPopup}
                  >
                    Sign&nbsp;in
                  </button>
                )}
            </div>
          </div>
        </>) : (<>
          <div className="header__content">
            <Link className={titleClasses} to='/saved-news'>NewsExplorer</Link>
            <button className={`header__phone-button ${isLoggedIn ? 'header__phone-button_black' : ''}`} onClick={openAuthPopup} />
          </div>
          <Navigation className="header_nav" />
        </>)}
    </header>);
}

export default Header;
