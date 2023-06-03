import React, {useState} from 'react';
import './App.css';
import Header from '../Header/Header.js';




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
      </div>
    </>
  );
}

export default App;
