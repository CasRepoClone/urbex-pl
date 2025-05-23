import React, { useState } from 'react';
import '../styles/App.scss';
import { Link, useNavigate } from 'react-router-dom';

// Sign In Component
const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // hostname for dev/testing changes 
  const siteUrl = process.env.REACT_APP_API_URL;

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

        const response = await fetch(`${siteUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: sanitizedUsername, // Assuming "username" is used as the identifier
                password: sanitizedPassword,
            }).toString(),
        });

        const result = await response.text(); // Parse the response as plain text
        if (!response.ok) {
            alert(result || "Login failed. Please check your credentials.");
            return;
        }

        // Store the session token and username in sessionStorage
        sessionStorage.setItem('authToken', 'Logged-in'); // Replace 'Logged-in' with actual token if backend provides it
        sessionStorage.setItem('username', sanitizedUsername);


        alert(result || "Login successful!");
        navigate('/'); // Redirect to the desired page after successful login
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
