import React, { useContext, useEffect, useState } from 'react';
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



function Main({ openAuthPopup, newsData, isOpen, sendSearchQuery, saveOrDelArticle, setInfoOpen, newsResults }) {
  const [preLoader, setPreloader] = useState({ isLoading: newsResults.waiting || (newsResults.waiting && !newsResults.data), stillSearching: newsResults.waiting });
  const { isLoggedIn } = useContext(AuthContext);
  const articleList = Object.values(newsData);
  const { userData } = useContext(UserContext);

  useEffect (() => {
    if (newsResults) {setPreloader((prev) => ({...prev, isLoading: false }));}
  }, [newsResults]);

  return (
    <>
      <main className="main">
        <HomeProvider>
          <Routes>
            <Route path='/'
              element={<>
                <div className="main__header-search-container">
                  <Header openAuthPopup={openAuthPopup} isOpen={isOpen} />
                  <SearchForm sendSearchQuery={sendSearchQuery} setInfoOpen={setInfoOpen} setPreLoader={setPreloader} />
                </div>
                <Preloader isLoading={preLoader.isLoading} stillSearching={preLoader.stillSearching} />
                <NewsCardList articleList={articleList} saveOrDelArticle={saveOrDelArticle} />
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
