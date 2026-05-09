import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Register from './pages/Register';
import SignIn from './pages/Login';
import About from './pages/About';
import DataPolicy from './pages/DataPolicy';
import Subscriptions from './pages/Subscriptions';
import ProfilePage from './pages/ProfilePage';
import Payment from './pages/Payment';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './security/AuthContext';
import AuthenticatedRoute from './security/AuthenticatedRoute';
import './styles/App.scss';

const authenticated = (element: React.ReactNode) => (
  <AuthenticatedRoute>{element}</AuthenticatedRoute>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/data-policy" element={<DataPolicy />} />
            <Route path="/profile" element={authenticated(<ProfilePage />)} />
            <Route path="/payment" element={authenticated(<Payment />)} />
            <Route path="/subscribe" element={authenticated(<Subscriptions />)} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
