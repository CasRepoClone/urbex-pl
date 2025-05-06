import React, { useState } from 'react';
import '../styles/App.scss';
import { Link } from 'react-router-dom';

// Sign In Component
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateInput = () => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 6;

    if (!emailValid) {
      alert("Invalid email format.");
      return false;
    }
    if (!passwordValid) {
      alert("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInput()) return;
    // LOGIN API POST 
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email,
          password,
        }).toString(),
      });

      const result = await response.json();
      alert(result.message || "Sign-in submitted.");
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <div className='SignInPage'>
      <div>
        <p>Welcome Back</p>
        <br />
      </div>
      <form className='signInForm' onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          type="text"
          className="inputbox-rec emailInput_signin"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          className="inputbox-rec passwordInput_signin"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Sign In" className="UrlButton" />
      </form>
      <br></br>
      <button className='UrlButton forgotPassword'>FORGOT PASSWORD</button>
      <img alt='logo' src='/logo.png' />
    </div>
  );
};

export default SignIn;
