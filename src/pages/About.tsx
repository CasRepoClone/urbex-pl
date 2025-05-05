// HomePage.tsx
import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
const About = () => {
  return (
    <div className='Homepage'>
        <img alt='logo' src='/logo.png'></img>
        <p style={{color:'#FFFFFF', textAlign: 'center', padding:'2%'}}>Welcome to urbex-pl.com, a project dedicated to the discovery, documentation, and digital preservation of historical and abandoned places across Poland. Our mission is to raise awareness about the hidden stories and forgotten architecture that surround us—often just beyond everyday paths.
        Using AI, we gather and present visuals, data, and insights to shine a light on these fascinating locations. From decaying industrial sites to derelict manors, each entry helps capture the passage of time and the value of remembrance.</p>
        <p style={{color:'#FFFFFF', textAlign: 'center', padding:'2%'}}>We strongly do not promote or encourage trespassing. All content is shared for educational and cultural purposes. Always respect local laws and property rights—preservation starts with responsibility.</p>
        <div className='mapbuttoncontainer'>
        <Button 
            label="HOME" 
            route="/" 
        />
      </div>
    </div>
  );
};

export default About;
