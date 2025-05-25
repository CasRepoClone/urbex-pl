import React, { useState, useContext } from 'react';
import '../styles/App.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';


const SignIn = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateInput = () => {
    const usernameValid = /^[a-zA-Z0-9_]{3,20}$/.test(username);
    const passwordValid = password.length >= 6;

    if (!usernameValid) {
      alert("Invalid username format.");
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

      const response = await fetch(`/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: sanitizedUsername,
          password: sanitizedPassword,
        }).toString(),
        credentials: 'include',
      });

      const result = await response.json();
      if (!response.ok) {
        alert(result.message || "Login failed. Please check your credentials.");
        return;
      }

      // Fetch subscription status from backend
      const subRes = await fetch(`/users/checkSubscription?email=${encodeURIComponent(result.email)}`, {
        credentials: 'include',
      });
      const subscribed = (await subRes.text()) === 'true';

      // Update context
      login({
        username: sanitizedUsername,
        email: result.email,
        subscribed,
      });

      sessionStorage.setItem('authToken', 'Logged-in');
      sessionStorage.setItem('username', sanitizedUsername);
      sessionStorage.setItem('email', result.email);

      alert(result.message || "Login successful!");
      navigate('/');
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
        <p>Username</p>
        <input
          type="text"
          className="inputbox-rec usernameInput_signin"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
