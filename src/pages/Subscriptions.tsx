import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

const endpoint = 'https://urbex-pl.com';

const Subscriptions = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [pendingPlanId, setPendingPlanId] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  }, []);

  const openEmailPopup = (planId: string) => {
    setPendingPlanId(planId);
    setShowEmailPopup(true);
  };

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
        window.location.href = data.url;
      } else {
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
      <div className="SubPage">
        <section className="subscription-panel">
          <p className="form-kicker">Access tiers</p>
          <h1>Choose your field kit.</h1>
          {username && <span className="tier-chip" aria-label="Signed-in username">Username: {username}</span>}
          <form>
            <div className="subscription-grid">
              <article className="subscription-card">
                <p className="price-line">30 PLN monthly</p>
                <h2>S.T.A.L.K.E.R (W.I.P)</h2>
                <p>
                  Unlimited spots, preview images, secret spots, and the ability to add areas of interest.
                </p>
                <button
                  type="button"
                  className="UrlButton"
                  disabled={loading}
                  onClick={() => openEmailPopup('2')}
                >
                  {loading ? 'Processing...' : 'Subscribe as S.T.A.L.K.E.R'}
                </button>
              </article>
              <article className="subscription-card">
                <p className="price-line">10 PLN monthly</p>
                <h2>Wolnosc Enjoyer</h2>
                <p>
                  View spots without images and add new areas of interest to support the archive.
                </p>
                <button
                  type="button"
                  className="UrlButton secondary"
                  disabled={loading}
                  onClick={() => openEmailPopup('1')}
                >
                  {loading ? 'Processing...' : 'Subscribe as Wolnosc Enjoyer'}
                </button>
              </article>
            </div>
          </form>
        </section>
      </div>
      {showEmailPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p className="form-kicker">Confirm checkout</p>
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
            <div className="form-actions">
              <button
                className="UrlButton"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Confirm & Continue'}
              </button>
              <button
                className="UrlButton secondary"
                onClick={() => setShowEmailPopup(false)}
                disabled={loading}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Subscriptions;
