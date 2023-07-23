import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css';



export default function PopupWithForm({
  isOpen,
  name,
  onClose,
  onSubmit,
  children,
  isValid,
  signInOrUp,
})

{
  return (
    <div className={`popup ${isOpen ? 'popup_active' : ''}`} id={name}>
      <button
        type="button"
        className="popup__container-close"
        aria-label="close"
        onClick={onClose}
      />
      <div className="popup__container">
        <form name={name} className="popup__form" onSubmit={onSubmit}>
          <h2 className="popup__form-heading">{signInOrUp ? 'Sign in' : 'Sign up'}</h2>
          {children}
          <button
            type="submit"
            className="popup__form-submit"
            disabled={!isValid}
          >
            {signInOrUp ? 'Sign in' : 'Sign up'}
          </button>
          <div className="popup__link-container">
          <span className='popup__form-in-or-up'>or</span><Link to={signInOrUp ? '/' : '/signin'  } className='popup__form-link'>{signInOrUp ? 'Sign up' : 'Sign in'}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

