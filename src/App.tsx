// App.tsx
import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Your destination page
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
        </Routes>
        <HomePage />

      </div>
      <Footer />
    </Router>
  );
}

export default App;
