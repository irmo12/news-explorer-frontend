import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import About from '../About/About.js';
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
        {/* <UserContext.Provider value={userData}> */}
        <Header />
          <About />

            {/* </UserContext.Provider> */}
            {/* <Routes>
          <About />
        <Route exact path='/'>

        </Route>
        <Route path='/saved-news'>

        </Route>
        </Routes> */}
            <Footer />

           
          </div>
        </>
        );
}

        export default App;
