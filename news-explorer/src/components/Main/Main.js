import React, { useContext, useEffect, useState } from 'react';
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



function Main({ openAuthPopup, newsData, isOpen, sendSearchQuery, saveOrDelArticle, setInfoOpen, newsResults }) {
  const [preLoader, setPreloader] = useState({ isLoading: newsResults.waiting || (newsResults.waiting && !newsResults.data), stillSearching: newsResults.waiting });
  const { isLoggedIn } = useContext(AuthContext);
  const articleList = Object.values(newsData);

  useEffect(() => {
    console.log(newsResults.data)
    if (!newsResults.waiting && newsResults.data.length!==0) { setPreloader((prev) => ({ ...prev, isLoading: false })); }
    if (!newsResults.waiting && newsResults.data.length===0) { setPreloader((prev) => ({ ...prev, stillSearching: false })); }
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
                {newsResults.data && <NewsCardList newsResults={newsResults} saveOrDelArticle={saveOrDelArticle} />}
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
