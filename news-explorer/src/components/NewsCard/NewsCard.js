import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import './NewsCard.css';
import { AuthContext } from "../../contexts/AuthContext";

function NewsCard({ article, saveOrDelArticle }) {
  const location = useLocation();
  const isSaved = location.pathname === '/saved-news';
  const { isLoggedIn } = useContext(AuthContext);
  const [isArticleSaved, setArticleSaved] = useState(article.saved ?? false);


  function handleButtonClick(e) {
    e.preventDefault();
    saveOrDelArticle(article, isSaved);
  }

  let date = new Date(article.date);
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  let formattedDate = date.toLocaleDateString('en-US', options);

  let buttonClasses = isSaved ? 'news-card__save-del_del'
   : (isArticleSaved ? 'news-card__save-del_saved' : 'news-card__save-del_results');

  return (
    <li className="news-card-li">
      <article className="news-card" id={article._id}>
        <a href={article.link} className="news-card__redirect" target="_blank" rel="noopener noreferrer">
          <img
            className="news-card__img"
            src={article.image}
            alt={article.title}
          />
          <div className='news-card__header'>
            <button
              className={`news-card__save-del ${buttonClasses}`}
              type="button"
              aria-label="save/delete"
              onClick={handleButtonClick}
              disabled={!isLoggedIn}
            />
            <abbr className={`news-card__tooltip ${(isLoggedIn && !isSaved) ? 'news-card__tooltip_hidden' : ''}`}>{isSaved ? 'Remove from saved' : 'Sign in to save articles'}</abbr>
            <h3 className={isSaved ? 'news-card__keyword' : 'news-card__keyword_hidden'}>{article.keyword}</h3>
          </div>
          <div className='news-card__texts'>
            <h4 className="news-card__date">{formattedDate}</h4>
            <h5 className="news-card__title">{article.title}</h5>
            <p className="news-card__text">{article.text}</p>
            <span className="news-card__source">{article.source}</span>
          </div>
        </a>
      </article >
    </li>
  );
}

export default NewsCard;
