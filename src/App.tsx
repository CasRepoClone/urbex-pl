// App.tsx
import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // homepage
import Register from './pages/Register' // register page

// components
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        {/* Define Routes */}
        <Routes>
          <Route path="/pages/HomePage" element={<HomePage />} />
          <Route path="/pages/Register" element={<Register />} />
        </Routes>
        <Register />
       
      </div>
      <Footer />
    </Router>
  );
}

export default App;
