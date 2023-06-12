import { useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm.js';
import { useFormValidation } from '../../utils/useFormValidation.js';

export default function AuthPopup({
  inOrUp,
  isOpen,
  onClose,
  onSubmit,
  isLoading,
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

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name: values.placeName, link: values.link });
  }

  return (
    <PopupWithForm
      name="addCardPopup"
      heading="New&nbsp;place"
      submitText="Create"
      loadingText="Creating..."
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isValid}
    >
      <fieldset className="popup__form-inputs">
        <div className="popup__form-info-couple">
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
        <div className="popup__form-info-couple">
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
        <div className="popup__form-info-couple">
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
      </fieldset>
    </PopupWithForm>
  );
}
