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
import { mainApi } from '../../utils/MainApi';
import { newsApi } from '../../utils/NewsApi';

function App() {
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const { setUserData } = useContext(UserContext);
  const [infoPopup, setInfoPopup] = useState({
    isInfoOpen: false,
    msg: '',
    displayLink: false
  });
  const { setIsLoggedIn } = useContext(AuthContext);
  const [newsData, setNewsData] = useState([]);
  const [newsResults, setNewsResults] = useState({ data: [], errMsg: '' });
  const navigate = useNavigate();
  const [preLoader, setPreloader] = useState({ isLoading: false, hasResults: true });

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
              name: resData.data.name, _id: resData.data._id
            }));
            setIsLoggedIn(true);
          });
          navigate('/saved-news');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      auth
        .signup(data)
        .then(() => {
          closePopups();
          setInfoPopup({
            isInfoOpen: true,
            msg: 'Registration successfully completed!',
            displayLink: true
          });
        })
        .catch((err) => {
          closePopups();
          console.log(err, err.message);
        });
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      auth.checkToken(localStorage.getItem('token')).then((resData) => {
        setUserData((prevUserData) => ({
          ...prevUserData,
          name: resData.data.name, _id: resData.data.name
        }));
        setIsLoggedIn(true);
        navigate('/saved-news');
      }).catch((err) => {
        console.log(err.code, err.message);
      });
      mainApi
        .getArticles(localStorage.getItem('token'))
        .then((data) => {
          setNewsData(data);

          setNewsResults((prevNewsResults) => {
            const updatedData = prevNewsResults.data.map((result) => {
              const matchedArticle = data.find((article) => article.url === result.article.url);
              if (matchedArticle) {
                return { ...result, isSaved: true };
              }
              return result;
            });

            return { ...prevNewsResults, data: updatedData };
          });
        })
        .catch((err) => {
          console.log(err.code, err.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function openAuthPopup() {
    setIsAuthPopupOpen(true);
  }

  function closePopups() {
    setIsAuthPopupOpen(false);
    setInfoPopup(prev => ({ ...prev, isInfoOpen: false }));
  }

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closePopups();
      }
    };
    if (isAuthPopupOpen || infoPopup.isInfoOpen) {
      document.addEventListener('keydown', closeByEscape);
    }
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isAuthPopupOpen, infoPopup.isInfoOpen]);

  const toggleSignInUp = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  function handleInfoLinkClick() {
    setIsSignIn(true);
    openAuthPopup();
  }

  function sendSearchQuery(q) {
    setNewsResults({ data: [], errMsg: '' });
    let words = q.split(" ");
    let keyWord = words.shift();

    newsApi
      .searchArticles(q)
      .then((data) => {
        if (data.totalResults !== 0) {
          let newArticles = data.articles.map(obj => {
            return { ...obj, keyword: keyWord };
          });
          newArticles = newArticles.map(obj => {
            return preSendArticle(obj);
          });

          localStorage.setItem('searchResults', JSON.stringify(newArticles));

          const storedResults = JSON.parse(localStorage.getItem('searchResults'));
          const forState = storedResults.map((article) => { return { article: article, isSaved: false }; });
          for (const result of forState) {
            const matchedArticle = newsData.find((article) => article.link === result.article.link);
            if (matchedArticle) {
              result.isSaved = true;
            }
          }
          setNewsResults({
            data: forState,
            errMsg: ''
          });
          setPreloader({ isLoading: false, hasResults: true });
        }
        else if (data.totalResults === 0) { setPreloader({ isLoading: true, hasResults: false }); }
      })
      .catch((error) => {
        localStorage.removeItem('searchResults');
        setPreloader({ isLoading: false, hasResults: true });
        setNewsResults({
          data: [],
          errMsg: 'error: ' + error.message
        });
      });
  }

  function preSendArticle(article) {
    const keyMap = {
      keyword: 'keyword',
      title: 'title',
      description: 'text',
      publishedAt: 'date',
      source: 'source',
      url: 'link',
      urlToImage: 'image'
    };

    return Object.keys(article).reduce((obj, key) => {
      if (key in keyMap) {
        if (key === 'source') {
          obj[key] = article[key].name;
        } else {
          obj[keyMap[key]] = article[key];
        }
      }
      return obj;
    }, {});
  }

  function saveOrDelArticle(article, isSaved) {
    const matchingArticle = newsData.find((saved) => saved.link === article.link);
    if (!isSaved && !matchingArticle) {

      mainApi
        .saveNewArticle(article, localStorage.getItem('token'))
        .then((res) => {
          setNewsData([res, ...newsData]);
          toggleSavedState(res.link);
        })
        .catch((err) => console.log(err));
    } else if (!isSaved && matchingArticle) {
      mainApi
        .deleteArticle(matchingArticle._id, localStorage.getItem('token'))
        .then(() => {
          setNewsData((current) =>
            current.filter((newsCard) => newsCard._id !== matchingArticle._id),
          );
          toggleSavedState(matchingArticle.link);
        })
        .catch((err) => console.log(err));
    }
    else {
      mainApi
        .deleteArticle(article._id, localStorage.getItem('token'))
        .then(() => {
          setNewsData((current) =>
            current.filter((newsCard) => newsCard._id !== article._id),
          );
          toggleSavedState(article.link);
        })
        .catch((err) => console.log(err));
    }
  }

  function toggleSavedState(url) {
    const articleToUpdate = newsResults.data.find(obj => obj.article.link === url);

    if (articleToUpdate) {
      articleToUpdate.isSaved = !articleToUpdate.isSaved;
      setNewsResults(prevState => ({
        ...prevState,
        data: [...prevState.data]
      }));
    }
  }




  return (
    <SmallScreenProvider>
      <main className="page">
        <AuthPopup
          isSignIn={isSignIn}
          isOpen={isAuthPopupOpen}
          onClose={closePopups}
          onSubmit={handleAuthSubmit}
          toggleSignInUp={toggleSignInUp} />
        <InfoPopup infoPopup={infoPopup}
          onClose={closePopups}
          handleInfoLinkClick={handleInfoLinkClick} />
        <Main
          openAuthPopup={openAuthPopup}
          setIsSignIn={setIsSignIn}
          newsData={newsData}
          isOpen={isAuthPopupOpen}
          saveOrDelArticle={saveOrDelArticle}
          setInfoPopup={setInfoPopup}
          sendSearchQuery={sendSearchQuery}
          newsResults={newsResults}
          preLoader={preLoader}
          setPreloader={setPreloader}
        />
        <Footer />
      </main>
    </SmallScreenProvider>
  );
}

export default App;
