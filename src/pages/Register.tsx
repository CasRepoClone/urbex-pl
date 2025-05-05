import React, { useState } from 'react';
import '../styles/App.scss';
// regular expression input validation 
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    // modify this later on backend creation 
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }, // encoded data to parse on backend side (check docs)
        body: new URLSearchParams({
          username,
          email,
          password,
        }).toString(),
      }); // account creation validation by email can be done later 

      const result = await response.json();
      alert(result.message || "Registration submitted.");
    } catch (error) {
      console.error('Error submitting form:', error); // this will throw until backend is working 
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
