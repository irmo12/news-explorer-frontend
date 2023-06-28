import { Link } from "react-router-dom";

function InfoPopup({
  isOpen = true,
  name,
  onClose,
}) {
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
        <Link className='popup__link' to='/' />
      </div>
    </div>
  );
}

export default InfoPopup;
