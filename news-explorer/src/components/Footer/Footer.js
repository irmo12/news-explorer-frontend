import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';
import fblogo from '../../images/fb.svg';
import github from '../../images/github.svg';

function Footer() {
  return (
    <div className="footer">
      <div className='footer-signature'>
        © {new Date().getFullYear()} Supersite, Powered by News API
      </div>
      <div className='footer-links'>
        <Link to={'/'} className='footer-link'>Home</Link>
        <a href="https://tripleten.com" className='footer-link'>TripleTen</a>
        <div className='footer-links__icons'>
          <a href="https://github.com/irmo12" className='footer-link'><img src={github} alt='github' /></a>
          <a href="https://www.facebook.com/TripleTen.Israel/" className='footer-link'><img src={fblogo} alt='facebook' /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;