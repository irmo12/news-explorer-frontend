import React, { useContext, useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import { AuthContext } from '../../contexts/AuthContext';
import { UserContext } from '../../contexts/UserContext';
import { HomeProvider } from '../../contexts/HomeContext';
import { Route, Routes } from 'react-router-dom';



function Main({ openAuthPopup, newsData, isOpen, saveOrDelArticle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const articleList = Object.values(newsData);
  const { userData } = useContext(UserContext);

  function getArticleList() { 
    setHasResults(false);
    setIsLoading(false);
  }

  return (
    <>
      <main className="main">
        <HomeProvider>
        <Routes>
          <Route path='/'
            element={<>
              <div className="main__header-search-container">
                <Header openAuthPopup={openAuthPopup} isOpen={isOpen} />
                <SearchForm getArticleList={getArticleList} />
              </div>
              <Preloader isLoading={isLoading} hasResults={hasResults} />
              <NewsCardList articleList={articleList} saveOrDelArticle={saveOrDelArticle}/>
              <About />
            </>} />
          {isLoggedIn && (
            <Route path='/saved-news'
              element={<>
                <Header openAuthPopup={openAuthPopup} isOpen={isOpen} />
                <SavedNewsHeader articleList={articleList} username={userData.name} />
              </>} />
          )}
        </Routes>
        </HomeProvider>
      </main>
    </>
  );
}

export default Main;
