import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="content-page">
      <section className="content-card">
        <img className="content-logo" alt="urbex-pl logo" src="/logo.png" />
        <p className="card-kicker">Field notes</p>
        <h2>Responsible discovery, digitally preserved.</h2>
        <p>
          Welcome to urbex-pl.com, a project dedicated to the discovery, documentation, and digital preservation of historical and abandoned places across Poland. Our mission is to raise awareness about the hidden stories and forgotten architecture that surround us—often just beyond everyday paths.
        </p>
        <p>
          Using AI, we gather and present visuals, data, and insights to shine a light on these fascinating locations. From decaying industrial sites to derelict manors, each entry helps capture the passage of time and the value of remembrance.
        </p>
        <p>
          We strongly do not promote or encourage trespassing. All content is shared for educational and cultural purposes. Always respect local laws and property rights—preservation starts with responsibility.
        </p>
        <div className="mapbuttoncontainer">
          <Button label="Home" route="/" />
        </div>
      </section>
    </div>
  );
};

export default About;
