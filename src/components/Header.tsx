import React from 'react';
import '../styles/App.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="HeaderStyle">
      <Link to="/" className="brand-link">
        <h1>urbex-pl</h1>
      </Link>
      <nav className="header-nav" aria-label="Primary navigation">
        <Link to="/about">Field notes</Link>
        <Link to="/subscribe">Access</Link>
        <Link to="/login">Sign in</Link>
      </nav>
    </header>
  );
};

export default Header;
