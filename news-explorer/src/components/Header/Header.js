import React, { useContext } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
 import  Navigation  from '../Navigation/Navigation';
import logout from '../../images/logout.svg';
import { AuthContext } from "../../contexts/AuthContext";


function Header({  userName = 'Elise', openAuthPopup }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  function signOut() {
    setIsLoggedIn(false);
  }

  return (
    <header className={isLoggedIn ? "header_logged-in header" : "header"}>
      <Link className="header__title" to='/saved-news'>NewsExplorer</Link>
       <Navigation /> 
      <div className="header__button-logic">
        {isLoggedIn ? (
          <button
            className="header__log-button"
            onClick={signOut}
          ><span className="header__userName">{userName}</span><embed className="header__logout-icon" src={logout} alt="logout" />
          </button>
        ) : (
          <button
            className="header__log-button"
            onClick={openAuthPopup}
          >
            Sign&nbsp;in
          </button>
        )}
      </div>
    </header>
  );
}
export default Header;
