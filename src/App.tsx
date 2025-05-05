import React from 'react';
import './styles/App.scss';  // style sheet 

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="headerdiv">
      </header>
      <div className="logo-image-container">
        <img src="/logo.png" alt="In Production" className="logo-image" />
        <p>Site still in production, please come back later</p>
      </div>
    </div>
  );
}

export default App;