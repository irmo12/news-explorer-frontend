import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import { Route } from 'react-router-dom';




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
        <Header
        // loggedIn={isLoggedIn}
        // signOut={signOut}
        // name={userData.name}
        />
        {/* </UserContext.Provider> */}
        <Route exact path='/'>

        </Route>
        <Route path='/saved-news'>

        </Route>
        <Footer>

        </Footer>
      </div>
    </>
  );
}

export default App;
