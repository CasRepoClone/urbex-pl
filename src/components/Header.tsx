import React from 'react';
import "../styles/App.scss"
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className='HeaderStyle'>
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <h1>urbex-pl.com</h1>
            </Link>
        </header>
    );
};

export default Header;