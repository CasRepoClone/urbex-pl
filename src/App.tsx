// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages 
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import SignIn from './pages/Login';
import About from './pages/About';
import DataPolicy from './pages/DataPolicy';
import Subscriptions from './pages/Subscriptions';
import ProfilePage from './pages/ProfilePage'

// components 
import Header from './components/Header';
import Footer from './components/Footer';

// security (AuthContext, ProtectedRoute)
import { AuthProvider } from './security/AuthContext';  // Import AuthProvider
import ProtectedRoute from './security/ProtectedRoute';  // Using the capitalized "R"


// styles
import './styles/App.scss';

const App: React.FC = () => {
  return (
    <AuthProvider> {/* Wrap the entire app with AuthProvider */}
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/data-policy" element={<DataPolicy />} />

            {/* Protected Route for Subscriptions */}
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute>
                  <Subscriptions />
                </ProtectedRoute>
              }
            />

            {/* Protected Route for Profile Page */}
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
