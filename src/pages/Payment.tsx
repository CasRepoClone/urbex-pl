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
  const subscriptionPlanId = '1';

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${endpoint}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, username, subscription_plan_id: subscriptionPlanId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
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
      <section className="payment-panel">
        <p className="form-kicker">Checkout</p>
        <h2>Finish access.</h2>
        <p>Confirm your details before moving to secure Stripe checkout.</p>
        <form id="checkout-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {username && <span className="user-chip">Username: {username}</span>}
          <button className="UrlButton" type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Checkout'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Payment;
