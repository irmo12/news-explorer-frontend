import './PopupWithForm.css';

export default function PopupWithForm({
  isOpen,
  name,
  onClose,
  onSubmit,
  children,
  isValid,
  isSignIn,
  toggleSignInUp
}) {

  

  return (
    <div className={`popup ${isOpen ? 'popup_active' : ''}`} id={name}>
      <button
        type="button"
        className="popup__container-close"
        aria-label="close"
        onClick={onClose}
      />
      <div className={isSignIn ? "popup__container" : 'popup__container popup__container_signup'}>
        <form name={name} className="popup__form" onSubmit={onSubmit}>
          <h2 className="popup__form-heading">{isSignIn ? 'Sign in' : 'Sign up'}</h2>
          {children}
          <button
            type="submit"
            className="popup__form-submit"
            disabled={!isValid}
          >
            {isSignIn ? 'Sign in' : 'Sign up'}
          </button>
          <div className="popup__form-toggle-container">
            <span className='popup__form-in-or-up'>or</span>
            <button type='button' className='popup__form-toggle' onClick={toggleSignInUp}>
              {isSignIn ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

