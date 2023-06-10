import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import { Router, Routes, Route } from 'react-router-dom';




function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [userData, setUserData] = useState({
  //   _id: '',
  //   email: '',
  //   name: '',  
  // })


  return (
    <>
      <div className="page">

        <Header />

        <Main />

        <Footer />


      </div>
    </>
  );
}

export default App;
