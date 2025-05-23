// HomePage.tsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import '../styles/App.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


const HomePage = () => {

  const [username, setUsername] = useState<string | null>(null);

  // Retrieve the username from sessionStorage on component load
  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    setUsername(storedUsername);
  }, []);


  return (
    <div className='Homepage'>
      <div className='button-container'>
        {username ? (
          // If the user is logged in, show a "Log out" button and an "Account" button
          <>
            <Button
              label="Log out"
              onClick={() => {
                sessionStorage.removeItem('username'); // Remove username from sessionStorage
                setUsername(null); // Clear the username state
              }}
            />
            <Button
              label="Account"
              // route="/account" // Route to the account page
              route="/ProfilePage"
            />
          </>
        ) : (
          // If the user is not logged in, show "Sign in" and "Sign up" buttons
          <>
            <Button
              label="Sign in"
              route="/login" // Route to the login page
            />
            <Button
              label="Sign up"
              route="/register" // Route to the registration page
            />
          </>
        )}
      </div>
      <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h2>
          <span style={{ color: 'red' }}>{username ? username : 'NOT LOGGED IN!'}</span>
        </h2>
      </Link>
      <h3>Tier: Free</h3>
      <img alt='logo' src='/logo.png'></img>

      {/*need to validate user is logged in first */}
      <div className='mapbuttoncontainer'>
        <Button
          label="GO TO THE MAP"
          route="/subscribe"
        />
      </div>
    </div>
  );
};

export default HomePage;

