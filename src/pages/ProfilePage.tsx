import React from 'react';
import '../styles/App.scss';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (action: 'SUBSCRIPTION' | 'changePassword' | 'requestDeletion' | 'CancelSubscription' | 'Home') => {
    if (action === 'SUBSCRIPTION') {
      navigate('/subscribe');
      return;
    }
    if (action === 'Home') {
      navigate('/');
      return;
    }
    alert('Not yet implemented.');
  };

  return (
    <div className="profile-page">
      <section className="account-panel">
        <p className="form-kicker">Account</p>
        <h2>Profile controls.</h2>
        <div className="profile-fields">
          <div className="profile-field">
            <label>Username</label>
            <span className="inputbox-rec label-box">user@gmail.com</span>
          </div>
          <div className="profile-field">
            <label>Email</label>
            <span className="inputbox-rec label-box">user@gmail.com</span>
          </div>
        </div>
        <div className="account-actions">
          <button className="UrlButton" onClick={() => handleButtonClick('SUBSCRIPTION')}>Subscription</button>
          <button className="UrlButton secondary" onClick={() => handleButtonClick('changePassword')}>Change password</button>
          <button className="UrlButton secondary" onClick={() => handleButtonClick('requestDeletion')}>Request deletion</button>
          <button className="UrlButton secondary" onClick={() => handleButtonClick('CancelSubscription')}>Cancel subscription</button>
          <button className="UrlButton" onClick={() => handleButtonClick('Home')}>Back to homepage</button>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
