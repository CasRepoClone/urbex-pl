import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

const Payment = () => {
  const [paymentLink, setPaymentLink] = useState('');

  useEffect(() => {
    // Fetch the payment link from your server
    fetch('/get-payment-link')
      .then((res) => res.json())
      .then((data) => setPaymentLink(data.url));
  }, []);

  return (
    <div className='PaymentPage'>
      <h1>Payment</h1>
      {paymentLink ? (
        <a href={paymentLink} className="payment-button">
          Pay Now
        </a>
      ) : (
        <p>Loading payment link...</p>
      )}
    </div>
  );
};

export default Payment;