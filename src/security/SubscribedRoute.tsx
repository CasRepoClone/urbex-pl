import React, { useContext, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const SubscribedRoute = ({ children }: { children: ReactNode }) => {
  const context = useContext(AuthContext);

  if (!context || !context.user) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (!context.user.subscribed) {
    // Not subscribed
    return <Navigate to="/subscribe" replace />;
  }

  // Subscribed user
  return children;
};

export default SubscribedRoute;