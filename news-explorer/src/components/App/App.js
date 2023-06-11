import React, { useState } from 'react';
import './App.css';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import { Router, Routes, Route } from 'react-router-dom';




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="page">

        

        <Main />

        <Footer />


      </div>
    </>
  );
}

export default App;
