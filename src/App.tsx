import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages 
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import SignIn from './pages/Login';
import About from './pages/About';
import DataPolicy from './pages/DataPolicy';
 // components 
import Header from './components/Header';
import Footer from './components/Footer';
// styles
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        {/* routes are here for the site*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/data-policy" element={<DataPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;