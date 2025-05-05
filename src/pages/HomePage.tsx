// HomePage.tsx
import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
const HomePage = () => {
  return (
    <div className='Homepage'>
      <div className='button-container'>
        <Button 
        label="Sign in" 
        route="/" 
        />
        <Button 
        label="Sign up" 
        route="/" 
        />
      </div>
      <h2>
        User: <span style={{ color: 'red' }}>__________________</span>
      </h2>
      <h3>Tier: Free</h3>
      <img alt='logo' src='/logo.png'></img>

      <div className='mapbuttoncontainer'>
      <Button 
        label="GO TO THE MAP" 
        route="/" 
        />
      </div>
    </div>
  );
};

export default HomePage;
