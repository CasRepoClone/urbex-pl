// HomePage.tsx
import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className='Homepage'>
      <div className='button-container'>
        <Button 
        label="Sign in" 
        route="/login" 
        />
        <Button 
        label="Sign up" 
        route="/register" 
        />
      </div>
      <Link to="/profile" style={{textDecoration: 'none', color: 'inherit'}}>
      <h2>
        User: <span style={{ color: 'red' }}>__________________</span>
      </h2>
      </Link>
      <h3>Tier: Free</h3>
      <img alt='logo' src='/logo.png'></img>
      
      {/*need to validate user is logged in first */}
      <div className='mapbuttoncontainer'>
      <Button 
        label="GO TO THE MAP" 
        route="/subscribe" 
        />
      </div>
    </div>
  );
};

export default HomePage;
