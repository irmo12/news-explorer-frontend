import React from "react";
import './InfoPopup.css'

function InfoPopup({
  isOpen,
  name,
  onClose,
  handleInfoLinkClick
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
        <h2 className="popup__heading">Registration successfully completed!</h2>
        <button type='button' className='popup__link' onClick={handleInfoLinkClick}>SIgn in</button>
      </div>
    </div>
  );
}

export default InfoPopup;
