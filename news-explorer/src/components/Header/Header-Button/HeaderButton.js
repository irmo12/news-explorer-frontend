import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../contexts/AuthContext";
import { SmallScreenContext } from "../../../contexts/SmallScreenContext";
import { UserContext } from "../../../contexts/UserContext";
import { HomeContext } from "../../../contexts/HomeContext";
import logout from '../../../images/logout.svg';
import logout_white from '../../../images/logout_white.svg';
import './HeaderButton.css';

function HeaderButton({ openAuthPopup }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { isSmallScreen } = useContext(SmallScreenContext);
  const { userData } = useContext(UserContext);
  const { isHome } = useContext(HomeContext);
  const navigate = useNavigate();
 

  function signOut() {
    setIsLoggedIn(false);
    navigate('/');
  }

  const buttonLogicClasses = !isHome && !isSmallScreen
    ? "header__button-logic header__button-logic_saved-news"
    : "header__button-logic";

  const buttonClasses = !isHome && !isSmallScreen
    ? "header__log-button header__log-button_saved-news"
    : "header__log-button";

  return (<>
    <div className={buttonLogicClasses}>
      {
        isLoggedIn ? (
          <button
            className={`${buttonClasses} 'header__log-button_logged_in'`}
            onClick={signOut}
          >
            <span className={`header__username ${isHome ? '' : 'header__username_black'}`}>{userData.name}</span>
            <embed className='header__logout-icon' src={(isHome || isSmallScreen) ? logout_white : logout} alt="logout" />
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
  </>);
}

export default HeaderButton;