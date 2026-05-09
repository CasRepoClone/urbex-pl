import React, { useState } from 'react';
import '../styles/App.scss';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateInput = () => {
    const usernameValid = /^[a-zA-Z0-9_]{3,20}$/.test(username);
    const passwordValid = password.length >= 6;

    if (!usernameValid) {
      alert('Invalid username format.');
      return false;
    }
    if (!passwordValid) {
      alert('Password must be at least 6 characters.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInput()) return;

    try {
      const sanitizeInput = (input: string) => {
        return input.replace(/[<>&"'`]/g, (char) => {
          const charMap: { [key: string]: string } = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;',
          };
          return charMap[char] || char;
        });
      };

      const sanitizedUsername = sanitizeInput(username.trim());
      const sanitizedPassword = sanitizeInput(password.trim());

      const response = await fetch('http://urbex-pl.com:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: sanitizedUsername,
          password: sanitizedPassword,
        }).toString(),
      });

      const result = await response.text();
      if (!response.ok) {
        alert(result || 'Login failed. Please check your credentials.');
        return;
      }

      sessionStorage.setItem('authToken', 'Logged-in');
      sessionStorage.setItem('username', sanitizedUsername);

      alert(result || 'Login successful!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting the form.');
    }
  };

  return (
    <div className="SignInPage">
      <section className="form-panel">
        <p className="form-kicker">Member access</p>
        <h2>Welcome back.</h2>
        <form className="signInForm" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="signin-username">Username</label>
            <input
              id="signin-username"
              type="text"
              className="inputbox-rec usernameInput_signin"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label htmlFor="signin-password">Password</label>
            <input
              id="signin-password"
              type="password"
              className="inputbox-rec passwordInput_signin"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-actions">
            <input type="submit" value="Sign in" className="UrlButton" />
            <button type="button" className="UrlButton secondary forgotPassword">Forgot password</button>
          </div>
        </form>
        <img alt="urbex-pl logo" src="/logo.png" />
      </section>
    </div>
  );
};

export default SignIn;
