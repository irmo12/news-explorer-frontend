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
    <div className={`info-popup ${isOpen ? 'info-popup_active' : ''}`} id={name}>
      <button
        type="button"
        className="info-popup__container-close"
        aria-label="close"
        onClick={onClose}
      />
      <div className="info-popup__container">
        <h2 className="info-popup__heading">Registration successfully completed!</h2>
        <button type='button' className='info-popup__link' onClick={handleInfoLinkClick}>SIgn in</button>
      </div>
    </div>
  );
}

export default InfoPopup;
