// App.tsx
import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import HomePage from './pages/HomePage'; // Your destination page
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/pages/HomePage" element={<HomePage />} />
        </Routes>

        {/* Button that will navigate to /pages/HomePage */}
        <Button 
          label="HOMEPAGE" 
          route="/pages/HomePage" 
        />
      </div>
    </Router>
  );
}

export default App;
