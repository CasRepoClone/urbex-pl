import React, { useState } from 'react';
import '../styles/App.scss';
import { useNavigate } from 'react-router-dom';

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
      alert('Invalid username. Use 3-20 letters, numbers or underscores.');
      return false;
    }
    if (!emailValid) {
      alert('Invalid email format.');
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
      const response = await fetch('http://urbex-pl.com:8080/users/create', {
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
      const result = await response.text();
      console.log('Response Body:', result);

      if (!response.ok) {
        alert(result || 'Error occurred during registration.');
        return;
      }
      navigate('/');
      alert(result || 'Registration submitted.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was a problem submitting the form.');
    }
  };

  return (
    <div className="RegisterPage">
      <section className="form-panel">
        <p className="form-kicker">Create account</p>
        <h2>Start scouting.</h2>
        <form className="registerForm" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="register-username">Username</label>
            <input
              id="register-username"
              type="text"
              className="inputbox-rec usernameInput_reg"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              type="email"
              className="inputbox-rec emailInput_reg"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field-group">
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              className="inputbox-rec passwordInput_reg"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="UrlButton">Send request</button>
        </form>
        <img alt="urbex-pl logo" src="/logo.png" />
      </section>
    </div>
  );
};

export default Register;
