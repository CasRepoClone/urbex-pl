import React, { useState, useEffect } from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const endpoint = process.env.REACT_APP_API_URL;

const Subscriptions = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [pendingPlanId, setPendingPlanId] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  }, []);

  // Show popup and store which plan user is subscribing to
  const openEmailPopup = (planId: string, event: React.FormEvent) => {
    event.preventDefault();
    setPendingPlanId(planId);
    setShowEmailPopup(true);
  };

  // Handle actual subscription after email confirmation
  const handleSubscribe = async () => {
    if (!email || !confirmEmail) {
      alert('Please enter and confirm your email.');
      return;
    }
    if (email !== confirmEmail) {
      alert('Emails do not match.');
      return;
    }

    if (!pendingPlanId) {
      alert('No subscription plan selected.');
      return;
    }

    setLoading(true);
    setShowEmailPopup(false);

    try {
      const response = await fetch(`${endpoint}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, subscription_plan_id: pendingPlanId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert('please double check your email');
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error creating the checkout session. Please try again.');
    } finally {
      setLoading(false);
      setEmail('');
      setConfirmEmail('');
      setPendingPlanId(null);
    }
  };

  return (
    <>
      <div className='SubPage'>
        <div className='centered-div'>
          <h1 className='tiersTitle'> Tiers (SELECT ONE)</h1>
          <form>
            {username && (
              <div style={{ marginBottom: '10px' }}>
                <label>Username: {username}</label>
              </div>
            )}
            <div>
              <h1 className='tiersTitle sub' style={{ color: '#FF1216', WebkitTextStroke: '0.05px black' }}>&#x2022; S.T.A.L.K.E.R (W.I.P) </h1>
              <p>monthly payment of 30pln
                Unlimited spots + preview images + secret spots
                Ability to add areas of interest
                This is not added yet, but will be in the future
              </p>
              <button
                className='inputbox-rec'
                disabled={loading}
                onClick={(e) => openEmailPopup("2", e)} // Example plan ID for S.T.A.L.K.E.R
              >
                {loading ? 'Processing...' : 'Subscribe as S.T.A.L.K.E.R'}
              </button>
            </div>
            <div>
              <h1 className='tiersTitle sub' style={{ color: '#FF1216', WebkitTextStroke: '0.05px black' }}>&#x2022; WOLNOSC ENJOYER</h1>
              <p>Monthly payment of 10pln
                able to view spots without images
                able to add areas of interest.
              </p>
              <button
                className='inputbox-rec'
                disabled={loading}
                onClick={(e) => openEmailPopup("1", e)} // Example plan ID for WOLNOSC ENJOYER
              >
                {loading ? 'Processing...' : 'Subscribe as WOLNOSC ENJOYER'}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Email confirmation popup */}
      {showEmailPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Enter your email</h2>
            <input
              type="email"
              className="inputbox-rec"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="email"
              className="inputbox-rec"
              placeholder="Confirm your email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
              required
            />
            <div style={{ marginTop: '10px' }}>
              <button
                className="inputbox-rec"
                onClick={handleSubscribe}
                disabled={loading}
                style={{color: 'black', border: 'none', borderRadius: '5px'}}

              >
                {loading ? 'Processing...' : 'Confirm & Continue'}
              </button>
              
              <button
                className="inputbox-rec"
                onClick={() => setShowEmailPopup(false)}
                disabled={loading}
                style={{marginTop: '10px', color: 'black', border: 'none', borderRadius: '5px'}}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Simple popup styling */}
      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          padding: 10px;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .popup-content {
          background: #fff;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          min-width: 300px;
          text-align: center;
        }
        .popup-content input {
          margin-bottom: 10px;
        }

      `}</style>
    </>
  );
};

export default Subscriptions;