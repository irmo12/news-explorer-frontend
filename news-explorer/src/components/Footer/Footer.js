import React, { Link } from "react";
import './Footer.css';
import fblogo from '../../images/fb.svg';
import github from '../../images/github.svg';

function Footer(props) {
  return (
    <div className="footer">
      <div className='footer-signature'>
        © {new Date().getFullYear()} Supersite, Powered by News API
      </div>
      <div className='footer-links'>
        {/* <Link to={'/'} className='footer-link'>Home</Link> */}
        <a href="www.tripleten.com" className='footer-link'>TripleTen</a>
        <a href="#" className='footer-link'><img src={github} alt='github' /></a>
        <a href="#" className='footer-link'><img src={fblogo} alt='facebook' /></a>
      </div>
    </div>
  );
}

export default Footer;