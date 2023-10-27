import React from "react";
import './InfoPopup.css';

function InfoPopup({
  infoPopup,
  onClose,
  handleInfoLinkClick
}) {
  const {isInfoOpen: isOpen, msg, displayLink} = infoPopup;
  
  return (
    <div className={`info-popup ${isOpen ? 'info-popup_active' : ''}`}>
      <button
        type="button"
        className="info-popup__container-close"
        aria-label="close"
        onClick={onClose}
      />
      <div className="info-popup__container">
        <h2 className="info-popup__heading">{msg}</h2>
        <button type='button'
          className={displayLink ? 'info-popup__link' : 'info-popup__link_hidden'}
          onClick={handleInfoLinkClick}>
          SIgn in
        </button>
      </div>
    </div>
  );
}

export default InfoPopup;
