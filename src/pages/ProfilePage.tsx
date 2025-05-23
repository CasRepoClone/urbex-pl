// HomePage.tsx
import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

// for the backend (to be built)
const handleButtonClick = (action: 'SUBSCRIPTION' | 'changePassword' | 'requestDeletion' | 'CancelSubscription' | 'Home') => {
  switch (action) {
    case 'SUBSCRIPTION':
      window.open('https://billing.stripe.com/p/login/8wM7ux2xG7fY2ysdQQ', '_blank');
      break;

    case 'changePassword':
      alert("sorry we haven't got this implemented... yet");
      break;

    case 'requestDeletion':
      alert("please contact us via angrysouthlondoner.ttv@gmail.com");
      break;

    case 'CancelSubscription':
      window.open('https://billing.stripe.com/p/login/8wM7ux2xG7fY2ysdQQ', '_blank');
      break;
      
    case 'Home':
    default:
      break;
  }
};

const ProfilePage = () => {
  const email = sessionStorage.getItem('email');
  const username = sessionStorage.getItem('username');
  return (
    <div className="profile-page">
      <div className="sign-in-page">
      <h2>Welcome Back</h2>
      <label> Username</label>
      <label className="inputbox-rec label-box">{username}</label>


      <label> Email</label>
      <label className="inputbox-rec label-box">{email}</label>
      <div style={{padding: '10px'}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button className='UrlButton' onClick={() => handleButtonClick('SUBSCRIPTION')}>SUBSCRIPTION</button>
            <button className='UrlButton' onClick={() => handleButtonClick('changePassword')}>change password</button>
            <button className='UrlButton' onClick={() => handleButtonClick('requestDeletion')}>request deletion</button>
            <button className='UrlButton' onClick={() => handleButtonClick('CancelSubscription')}>Cancel subscription</button>
            <Link className='UrlButton' to="/">BACK TO THE HOMEPAGE</Link> {/* Add a link to the homepage may need to be a button */}
        </div>

      </div>
      </div>
    </div>
  );
};

export default ProfilePage;
