import React, { useContext } from "react";
import './NewsCard.css';

function NewsCard({ article, isSaved }) {

  return (
    <article className="news-card" id={article._id}>
      <img
        className="news-card__img"
        src={article.image}
        alt={article.title}
      />
      <div className='news-card__header'>
        <h3 className='news-card__keyword'>{article.keyword}</h3>
        <abbr className='news-card__tooltip'>{isSaved ? 'Remove from saved' : 'Sign in to save articles'}</abbr>
        <button
          className='news-card__save-del'
          type="button"
          aria-label="save/delete"
        // onClick={handleButtonClick}
        />
      </div>
      <div className='news-card__texts'>
        <h4 className="news-card__date">{article.date}</h4>
        <h5 className="news-card__title">{article.title}</h5>
        <p className="news-card__text">{article.text}</p>
        <span className="news-card__source">{article.source}</span>
      </div>
    </article >
  );
}

export default NewsCard;
