import React, { useState } from 'react';
import '../styles/App.scss';
import { Link, useNavigate } from 'react-router-dom';

// regular expression input validation 
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const validateInput = () => {
    const usernameValid = /^[a-zA-Z0-9_]{3,20}$/.test(username);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 6;

    if (!usernameValid) {
      alert("Invalid username. Use 3-20 letters, numbers or underscores.");
      return false;
    }
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
  // handle frontend data submission to backend 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInput()) return;

    try {
      const response = await fetch('http://localhost:8080/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          hashPwd: password,
        }),
      });

      console.log('Response Status:', response.status);

      // Handle plain text response
      const result = await response.text();
      console.log('Response Body:', result);

      if (!response.ok) {
        alert(result || "Error occurred during registration.");
        return;
      }
      navigate('/'); // Redirect to the desired page after successful login
      alert(result || "Registration submitted.");
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was a problem submitting the form.");
    }
  };

  return (
    <div className='RegisterPage'>
      <div>
        <p>User: _____</p>
        <br />
      </div>
      <form className='registerForm' onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          type="text"
          className="inputbox-rec usernameInput_reg"
          placeholder="Enter text here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>Email</p>
        <input
          type="text"
          className="inputbox-rec emailInput_reg"
          placeholder="Enter text here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          className="inputbox-rec passwordInput_reg"
          placeholder="Enter text here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Send Request" className="UrlButton" />
      </form>

      <img alt='logo' src='/logo.png' />
    </div>
  );
};

export default Register;
