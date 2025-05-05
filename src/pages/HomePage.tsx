// HomePage.js
import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
const HomePage = () => {
  return (
    <div className='Homepage'>
      <div className='button-container'>
        <Button 
        label="HOMEPAGE" 
        route="/" 
        />
        <Button 
        label="HOMEPAGE" 
        route="/" 
        />
      </div>
      <h2>
        User: <span style={{ color: 'red' }}>__________________</span>
      </h2>
      <h3>Tier: Free</h3>
      <img src='/logo.png'></img>

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
