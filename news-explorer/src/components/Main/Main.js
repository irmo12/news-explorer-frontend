import React, { useContext } from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import { AuthContext } from '../../contexts/AuthContext';
import { HomeProvider } from '../../contexts/HomeContext';
import { Route, Routes } from 'react-router-dom';

function Main({ openAuthPopup, newsData, isOpen, sendSearchQuery, saveOrDelArticle, setInfoOpen, newsResults, preLoader, setPreloader }) {
  const { isLoggedIn } = useContext(AuthContext);
  const articleList = Object.values(newsData);
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
                <Preloader preLoader={preLoader} />
                {(!preLoader.isLoading && newsResults.data.length!==0) &&
                  <NewsCardList newsResults={newsResults} saveOrDelArticle={saveOrDelArticle} preLoader={preLoader} />}
                <About />
              </>} />
            {isLoggedIn && (
              <Route path='/saved-news'
                element={<>
                  <Header openAuthPopup={openAuthPopup} isOpen={isOpen} />
                  <SavedNewsHeader articleList={articleList} saveOrDelArticle={saveOrDelArticle} />
                </>} />
            )}
          </Routes>
        </HomeProvider>
      </main>
    </>
  );
}

export default Main;
