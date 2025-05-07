// HomePage.tsx
import React from 'react';
import '../styles/App.scss';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Subscriptions = () => {

    alert("this page is not yet implemented also there is a free tier, I just forgot to add it, sorry");
  return (
    <>
    <div className='SubPage'>
        <div className='centered-div'>
            <h1 className='tiersTitle'> Tiers (SELECT ONE)</h1>
            <div>
                <h1 className='tiersTitle sub' style={{color:'#FFEE00', WebkitTextStroke: '0.05px black'}}>&#x2022; PARTNER </h1>
                <p>One time payment of 500PLN
                unlimited spots + developer versions
                Secret + pro spots and view ratings
                Ability to request spots to be hidden
                </p>
            </div>
            <div>
                <h1 className='tiersTitle sub' style={{color:'#FF1216', WebkitTextStroke: '0.05px black'}}>&#x2022; S.T.A.L.K.E.R </h1>
                <p>monthly payment of 30pln
                Unlimited spots + preview images + secret spots
                Ability to add areas of interest
                </p>
            </div>
            <div>
                <h1 className='tiersTitle sub' style={{color:'#FF1216', WebkitTextStroke: '0.05px black'}}>&#x2022; WOLNOSC ENJOYER</h1>
                <p>Monthly payment of 10pln
                able to view spots without images
                able to add areas of interest. 
                </p>
            </div>
            <p style={{fontSize: '0.6rem'}}>I am sorry as a student that I have to even charge money, However I cannot afford to keep this site running for long without help </p>
        
        
        </div>
        
         
    </div>
     
    </>
  );
};

export default Subscriptions;
