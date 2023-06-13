import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { useFormValidation } from '../../utils/useFormValidation.js';
import './AuthPopup.css';

export default function AuthPopup({
  inOrUp,
  isOpen,
  onClose,
  onSubmit,
}) {
  const {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
  } = useFormValidation();

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  function setFormType() {
    let heading = '';
    let submitText = '';
    if (inOrUp) {
      heading = 'Sign in';
      submitText = 'Sign in';
    } else {
      heading = 'Sign up';
      submitText = 'Sign up';
    }
    return { heading, submitText };
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({
      email: values.userEmail,
      password: values.userPW,
      name: values.userName,
    });
  }

  const { heading, submitText } = setFormType();

  return (
    <PopupWithForm
      name="authPopup"
      heading={heading}
      submitText={submitText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <fieldset className="popup__form-inputs">
        <div className="popup__form-field-group">
          <label htmlFor="email" className="popup__form-field-heading">
            Email
          </label>
          <input
            type="email"
            className={
              !errors.userEmail
                ? 'popup__form-field'
                : 'popup__form-field popup__form-field_error'
            }
            placeholder="Enter email"
            name="userEmail"
            required
            id="email"
            value={values.userEmail || ''}
            onChange={handleChange}
          />
          <span
            className={
              !errors.userEmail
                ? 'popup__form-error-msg popup__form-error-msg_inactive'
                : 'popup__form-error-msg'
            }
            id="userEmail"
          >
            {errors.userEmail}
          </span>
        </div>
        <div className="popup__form-field-group">
          <label htmlFor="password" className="popup__form-field-heading">
            Password
          </label>
          <input
            type="password"
            className={
              !errors.userPW
                ? 'popup__form-field'
                : 'popup__form-field popup__form-field_error'
            }
            placeholder="Enter password"
            name="userPW"
            required
            id="password"
            value={values.userPW || ''}
            onChange={handleChange}
          />
          <span
            className={
              !errors.userPW
                ? 'popup__form-error-msg popup__form-error-msg_inactive'
                : 'popup__form-error-msg'
            }
            id="userPW"
          >
            {errors.userPW}
          </span>
        </div>
        {inOrUp && (
          <div className="popup__form-field-group">
            <label htmlFor="user-name" className="popup__form-field-heading">
              Username
            </label>
            <input
              type="text"
              className={
                !errors.userName
                  ? 'popup__form-field'
                  : 'popup__form-field popup__form-field_error'
              }
              placeholder="Enter your username"
              name="userName"
              required
              id="user-name"
              value={values.userName || ''}
              onChange={handleChange}
            />
            <span
              className={
                !errors.userName
                  ? 'popup__form-error-msg popup__form-error-msg_inactive'
                  : 'popup__form-error-msg'
              }
              id="userName"
            >
              {errors.userName}
            </span>
          </div>
        )};
      </fieldset>
    </PopupWithForm>
  );
}

