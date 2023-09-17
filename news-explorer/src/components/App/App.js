import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import AuthPopup from '../AuthPopup/AuthPopup.js';
import InfoPopup from '../InfoPopup/InfoPopup';
import { SmallScreenProvider } from '../../contexts/SmallScreenContext';
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import { auth } from '../../utils/auth';
import { api } from '../../utils/api';

function App() {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const { userData, setUserData } = useContext(UserContext);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  function handleAuthSubmit(data) {
    const { email, password } = data;
    if (isSignIn) {
      auth
        .signin({ email, password })
        .then(() => {
          closePopups();
          auth.checkToken(localStorage.getItem('token')).then((resData) => {
            setUserData((prevUserData) => ({
              ...prevUserData,
              name: resData.data.name,
            }));
            setIsLoggedIn(true);
          });
          navigate('/saved-news');
        })
        .catch((err) => {
          console.log(err.code, err.message);
        });
    }
    else {
      auth
        .signup(data)
        .then(() => {
          closePopups();
          setIsInfoOpen(true);
        })
        .catch((err) => {
          closePopups();
          console.log(err);
        });
    }
  }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     auth.checkToken(localStorage.getItem('token')).then((resData) => {
  //       setUserData((prevUserData) => ({
  //         ...prevUserData,
  //         name: resData.data.userName,
  //       }));
  //       setIsLoggedIn(true);
  //       navigate('/saved-news');
  //     });
  //     api
  //       .getArticles(localStorage.getItem('token'))
  //       .then((data) => setNewsData(data))
  //       .catch((err) => {
  //         console.log(err.code, err.message);
  //       });
  //   }
  // }, []);


  function openAuthPopup() {
    setIsAuthPopupOpen(true);
  }

  function closePopups() {
    setIsAuthPopupOpen(false);
    setIsInfoOpen(false);
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closePopups();
      }
    };
    if (isAuthPopupOpen || isInfoOpen) {
      document.addEventListener('keydown', closeByEscape);
    }
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isAuthPopupOpen, isInfoOpen]);

  const toggleSignInUp = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  function handleInfoLinkClick() {
    openAuthPopup();
    setIsSignIn(true);
  }

  return (
    <SmallScreenProvider>
      <page className="page">
        <AuthPopup
          isSignIn={isSignIn}
          isOpen={isAuthPopupOpen}
          onClose={closePopups}
          onSubmit={handleAuthSubmit}
          toggleSignInUp={toggleSignInUp} />
        <InfoPopup isOpen={isInfoOpen} onClose={closePopups} handleInfoLinkClick={handleInfoLinkClick} />
        <Main openAuthPopup={openAuthPopup} newsData={newsData} isOpen={isAuthPopupOpen} />
        <Footer />
      </page>
    </SmallScreenProvider>
  );
}

export default App;
