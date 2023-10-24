import React, { useContext } from 'react';
import './Main.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import About from '../About/About';
import { HomeProvider } from '../../contexts/HomeContext';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ProtectedRoute } from '../ProtectedRoute';

function Main({ openAuthPopup, newsData, isOpen, sendSearchQuery, saveOrDelArticle, setInfoOpen, newsResults, preLoader, setPreloader, setIsSignIn }) {
  const articleList = Object.values(newsData);
  const { userData } = useContext(UserContext);
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
                {(!preLoader.isLoading && newsResults.data.length !== 0) &&
                  <NewsCardList newsResults={newsResults} saveOrDelArticle={saveOrDelArticle} preLoader={preLoader} setIsSignIn={setIsSignIn} openAuthPopup={openAuthPopup} />}
                <About />
              </>} />
            <Route path='/saved-news'
              element={<>
                <ProtectedRoute user={userData}>
                  <Header openAuthPopup={openAuthPopup} isOpen={isOpen} />
                  <SavedNewsHeader articleList={articleList} saveOrDelArticle={saveOrDelArticle} setIsSignIn={setIsSignIn} openAuthPopup={openAuthPopup} />
                </ProtectedRoute>
              </>}
            />
          </Routes>
        </HomeProvider>
      </main >
    </>
  );
}

export default Main;
