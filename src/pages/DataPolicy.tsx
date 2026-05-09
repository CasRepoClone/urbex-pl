import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';

const DataPolicy = () => {
  return (
    <div className="content-page">
      <section className="content-card">
        <img className="content-logo" alt="urbex-pl logo" src="/logo.png" />
        <p className="card-kicker">Privacy</p>
        <h2>Minimal data, clearly handled.</h2>
        <p>
          We only collect the minimum necessary information—such as email addresses for newsletter subscriptions or contact forms—and we never sell or share your data with third parties without your explicit consent.
        </p>
        <p>
          All data is stored securely and handled in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR). You have the right to access, correct, or delete your personal information at any time. If you have questions or requests regarding your data, please contact us.
        </p>
        <p>
          By using this site, you agree to the terms outlined in this policy. We may update this page periodically, so please check back for the latest version. 06052025
        </p>
        <div className="mapbuttoncontainer">
          <Button label="Home" route="/" />
        </div>
      </section>
    </div>
  );
};

export default DataPolicy;
