import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import AuthPopup from '../AuthPopup/AuthPopup.js';
import { SmallScreenProvider } from '../../contexts/SmallScreenContext';
import { AuthProvider } from '../../contexts/AuthContext';

function App() {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const username = 'Elise';   //tmp to be replaced by usercontext, and api


  //tmp code to be replaced by api
  const newsData = [
    {
      "Owner": "648b4ce303546a4ad50c54a7",
      "title": "Everyone Needs a Special 'Sit Spot' in Nature",
      "text": "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
      "date": "November 4, 2020",
      "source": "treehugger",
      "link": "https://www.example.com/article",
      "image": "image_06.png",
      "keyword": "nature",
      "_id": "12165e9a37f9426bb2e8e719"
    },
    {
      "Owner": "648b4ce303546a4ad50c54a7",
      "title": "Nature makes you better",
      "text": "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
      "date": "February 19, 2019",
      "source": "national geographic",
      "link": "https://www.example.com/article",
      "image": "image_01.png",
      "keyword": "nature",
      "_id": "39cac4d615b343648f6aff6c"
    },
    {
      "Owner": "648b4ce303546a4ad50c54a7",
      "title": "Nostalgic Photos of Tourists in U.S. National Parks",
      "text": "Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
      "date": "October 19, 2020",
      "source": "national geographic",
      "link": "https://www.example.com/article",
      "image": "image_05.png",
      "keyword": "Yellowstone",
      "_id": "2a35d3161596422aa548f45e"
    },
    {
      "Owner": "648b4ce303546a4ad50c54a7",
      "title": "Grand Teton Renews Historic Crest Trail",
      "text": "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
      "date": "November 4, 2020",
      "source": "national parks traveller",
      "link": "https://www.example.com/article",
      "image": "elk.png",
      "keyword": "Parks",
      "_id": "98d89c9e0f4e4806976d4356"
    },
    {
      "Owner": "648b4ce303546a4ad50c54a8",
      "title": "Scientists Don't Know Why Polaris Is So Weird",
      "text": "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",
      "date": "March 16,2020",
      "source": "treehugger",
      "link": "https://www.example.com/article",
      "image": "nightsky.png",
      "keyword": "Photography",
      "_id": "0cca9c79626a410b9d71724c"
    }
  ];

  // endof tmp db to be replaced by API


  function openAuthPopup() {
    setIsAuthPopupOpen(true);
  }

  function closePopups() {
    setIsAuthPopupOpen(false);
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closePopups();
      }
    };
    if (isAuthPopupOpen) {
      document.addEventListener('keydown', closeByEscape);
    }
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isAuthPopupOpen]);

  function handleAuthSubmit() {
    // Handle authentication submit logic
  }

  const toggleSignInUp = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  return (
    <AuthProvider>
      <SmallScreenProvider>
        <div className="page">
          <AuthPopup
            isSignIn={isSignIn}
            isOpen={isAuthPopupOpen}
            onClose={closePopups}
            onSubmit={handleAuthSubmit}
            toggleSignInUp={toggleSignInUp} />
          <Main openAuthPopup={openAuthPopup} newsData={newsData} username={username} />
          <Footer />
        </div>
      </SmallScreenProvider>
    </AuthProvider>
  );
}

export default App;
