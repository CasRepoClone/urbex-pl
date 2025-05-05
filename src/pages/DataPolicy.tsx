// HomePage.tsx
import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
const DataPolicy = () => {
  return (
    <div className='Homepage'>
        <img alt='logo' src='/logo.png'></img>
        <p style={{color:'#FFFFFF', textAlign: 'center', padding:'2%', fontSize: '0.5em'}}>At urbex-pl.com, we take your privacy seriously. We are committed to protecting any personal data you provide and ensuring transparency in how we collect, store, and use it.</p>
        <p style={{color:'#FFFFFF', textAlign: 'center', padding:'2%', fontSize: '0.5em'}}>We only collect the minimum necessary information—such as email addresses for newsletter subscriptions or contact forms—and we never sell or share your data with third parties without your explicit consent.</p>
        <p style={{color:'#FFFFFF', textAlign: 'center', padding:'2%', fontSize: '0.5em'}}>All data is stored securely and handled in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR).</p>
        <p style={{color:'#FFFFFF', textAlign: 'center', padding:'2%', fontSize: '0.5em'}}>You have the right to access, correct, or delete your personal information at any time. If you have questions or requests regarding your data, please contact us.</p>
        <p style={{color:'#FFFFFF', textAlign: 'center', padding:'2%', fontSize: '0.5em'}}>By using this site, you agree to the terms outlined in this policy. We may update this page periodically, so please check back for the latest version. 06052025</p>
        <div className='mapbuttoncontainer'>
        <Button 
            label="HOME" 
            route="/" 
        />
            </div>
    </div>
  );
};

export default DataPolicy;
