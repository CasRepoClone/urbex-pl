import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

const Payment = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const endpoint = 'https://urbex-pl.com';
  const subscription_plan_id = "1"; // Set this to the correct plan ID for the user/selection

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${endpoint}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, username, subscription_plan_id }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error creating the checkout session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <form id="checkout-form" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {/* Optionally show the username if available */}
        {username && (
          <div>
            <label>Username: {username}</label>
          </div>
        )}
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Checkout'}
        </button>
      </form>
    </div>
  );
};

export default Payment;