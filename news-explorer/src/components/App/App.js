import React, { useState, useEffect } from 'react';
import { Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import AuthPopup from '../AuthPopup/AuthPopup.js';



function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  function closePopups() {
    setIsAuthPopupOpen(false);

  }

  const popupOpen =
    isAuthPopupOpen;
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closePopups();
      }
    };
    if (popupOpen) {
      document.addEventListener('keydown', closeByEscape);
    }
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [popupOpen]);

  function handleAuthSubmit() { }

  const inOrUp = location.pathname === '/signin';

  return (
    <>
      <div className="page">


        <AuthPopup
          inOrUp={inOrUp}
          isOpen={isAuthPopupOpen}
          onClose={closePopups}
          onSubmit={handleAuthSubmit} />
        <Main />

        <Footer />


      </div>
    </>
  );
}

export default App;
