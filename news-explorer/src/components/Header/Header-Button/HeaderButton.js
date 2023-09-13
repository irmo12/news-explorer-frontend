import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { SmallScreenContext } from "../../../contexts/SmallScreenContext";
import logout from '../../../images/logout.svg';

function HeaderButton({ userName, openAuthPopup }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { isSmallScreen } = useContext(SmallScreenContext);

  function signOut() {
    setIsLoggedIn(false);
  }

  const buttonLogicClasses = isLoggedIn && !isSmallScreen
    ? "header__button-logic header__button-logic_logged_in"
    : "header__button-logic";

    const buttonClasses = isLoggedIn && !isSmallScreen
    ? "header__log-button header__log-button_logged_in"
    : "header__log-button";

  return (<>
    <div className={buttonLogicClasses}>
      {
        isLoggedIn ? (
          <button
            className={buttonClasses}
            onClick={signOut}
          >
            <span className="header__username">{userName}</span>
            <embed className={`header__logout-icon ${isSmallScreen ? 'header__logout-icon_small-screen' : ''}`} src={logout} alt="logout" />
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