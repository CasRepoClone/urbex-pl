import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  return (
    <div className="Homepage">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Poland field archive</p>
          <h2>Clean routes into forgotten places.</h2>
          <p>
            Discover documented abandoned locations with a calmer, map-first experience built for responsible urban exploration.
          </p>
          <div className="button-container">
            {username ? (
              <>
                <Button
                  label="Log out"
                  onClick={() => {
                    sessionStorage.removeItem('username');
                    setUsername(null);
                  }}
                />
                <Button
                  label="Account"
                  route="/profile"
                />
              </>
            ) : (
              <>
                <Button label="Sign in" route="/login" />
                <Button label="Sign up" route="/register" />
              </>
            )}
          </div>
          <div className="user-strip">
            <span className="status-label">Status</span>
            <Link to="/profile">{username ? username : 'Guest access'}</Link>
            <span className="tier-chip">Tier: Free</span>
          </div>
          <div className="mapbuttoncontainer">
            <Button label="Go to the map" route="/subscribe" />
          </div>
        </div>
        <div className="hero-art" aria-label="urbex-pl visual identity">
          <img alt="urbex-pl logo" src="/logo.png" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
