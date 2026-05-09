import React from 'react';
import '../styles/App.scss';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="FooterStyle">
      <span>Digital archive for responsible exploration</span>
      <div className="footer-links">
        <Link to="/about" className="footer-link">About</Link>
        <Link to="/data-policy" className="footer-link">Data policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
