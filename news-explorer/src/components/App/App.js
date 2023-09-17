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
// import { auth } from '../../utils/auth';
// import { api } from '../../utils/api';

function App() {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  // const { userData, setUserData } = useContext(UserContext);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);
  // const [newsData, setNewsData] = useState([]);
  // const navigate = useNavigate();

  // function handleAuthSubmit(data) {
  //   const { email, password } = data;
  //   if (isSignIn) {
  //     auth
  //       .signin({ email, password })
  //       .then(() => {
  //         closePopups();
  //         auth.checkToken(localStorage.getItem('token')).then((resData) => {
  //           setUserData((prevUserData) => ({
  //             ...prevUserData,
  //             name: resData.data.name,
  //           }));
  //           setIsLoggedIn(true);
  //         });
  //         navigate('/saved-news');
  //       })
  //       .catch((err) => {
  //         console.log(err.code, err.message);
  //       });
  //   }
  //   else {
  //     auth
  //       .signup(data)
  //       .then(() => {
  //         closePopups();
  //         setIsInfoOpen(true);
  //       })
  //       .catch((err) => {
  //         closePopups();
  //         console.log(err);
  //       });
  //   }
  // }

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     auth.checkToken(localStorage.getItem('token')).then((resData) => {
  //        setUserData((prevUserData) => ({
  //          ...prevUserData,
  //          userName: resData.data.userName,
  //         }));
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

const newsData = [{
  "_id": {
    "$oid": "648d690012ee90a06c815739"
  },
  "Owner": "648b4ce303546a4ad50c54a7",
  "title": "Nature makes you better",
  "text": "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
  "date": "February 19, 2019",
  "source": "national geographic",
  "link": "https://www.example.com/article",
  "image": "image_01.png",
  "keyword": "nature"
},
{
  "_id": {
    "$oid": "648d690012ee90a06c81573a"
  },
  "Owner": "648b4ce303546a4ad50c54a7",
  "title": "Nostalgic Photos of Tourists in U.S. National Parks",
  "text": "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
  "date": "October 19, 2020",
  "source": "national geographic",
  "link": "https://www.example.com/article",
  "image": "image_05.png",
  "keyword": "Yellowstone"
},{
  "_id": {
    "$oid": "648d690012ee90a06c81573b"
  },
  "Owner": "648b4ce303546a4ad50c54a7",
  "title": "Grand Teton Renews Historic Crest Trail",
  "text": "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
  "date": "November 4, 2020",
  "source": "national parks traveller",
  "link": "https://www.example.com/article",
  "image": "elk.png",
  "keyword": "Parks"
},{
  "_id": {
    "$oid": "648d690012ee90a06c81573c"
  },
  "Owner": "648b4ce303546a4ad50c54a8",
  "title": "Scientists Don't Know Why Polaris Is So Weird",
  "text": "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",
  "date": "March 16,2020",
  "source": "treehugger",
  "link": "https://www.example.com/article",
  "image": "nightsky.png",
  "keyword": "Photography"
},{
  "_id": {
    "$oid": "648d6c5012ee90a06c81574a"
  },
  "Owner": "648b4ce303546a4ad50c54a7",
  "title": "Everyone Needs a Special 'Sit Spot' in Nature",
  "text": "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
  "date": "November 4, 2020",
  "source": "treehugger",
  "link": "https://www.example.com/article",
  "image": "dogsits.png",
  "keyword": "nature"
}] //tmp data

  function openAuthPopup() {
    setIsAuthPopupOpen(true);
  }

  function handleAuthSubmit() { //tmp
    setIsLoggedIn(true)
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
