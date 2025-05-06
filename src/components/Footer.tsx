import React from 'react';
import "../styles/App.scss"
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className='FooterStyle'>
            <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
                <p style={{textDecoration: 'none', color: 'inherit'}}>Other</p>
            </Link>
            <Link to="/data-policy" style={{textDecoration: 'none', color: 'inherit'}}>
                <p style={{textDecoration: 'none', color: 'inherit'}}>DATA PROTECTION</p>
            </Link>
        </footer>
    );
};

export default Footer;