// HomePage.tsx
import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// for the backend (to be built)
const handleButtonClick = (action: 'SUBSCRIPTION' | 'changePassword' | 'requestDeletion' | 'CancelSubscription' | 'Home') => {
  switch (action) {
    case 'SUBSCRIPTION':
      // save logic
      break;
    case 'changePassword':
      // delete logic
      break;
    case 'requestDeletion':
      // edit logic
      break;
    case 'CancelSubscription':
      // edit logic
      break;
    case 'Home':
      // edit logic
      break;
    default:
      break;
  }
};

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="sign-in-page">
      <h2>Welcome Back</h2>
      <label> Username</label>
      <label className="inputbox-rec label-box"> user@gmail.com</label>


      <label> Email</label>
      <label className="inputbox-rec label-box"> user@gmail.com</label>
      <div style={{padding: '10px'}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button className='UrlButton' onClick={() => handleButtonClick('SUBSCRIPTION')}>SUBSCRIPTION</button>
            <button className='UrlButton' onClick={() => handleButtonClick('changePassword')}>change password</button>
            <button className='UrlButton' onClick={() => handleButtonClick('requestDeletion')}>request deletion</button>
            <button className='UrlButton' onClick={() => handleButtonClick('CancelSubscription')}>Cancel subscription</button>
            <button className='UrlButton' onClick={() => handleButtonClick('Home')}>BACK TO THE HOMEPAGE</button>
        </div>

      </div>
      </div>
    </div>
  );
};

export default ProfilePage;
