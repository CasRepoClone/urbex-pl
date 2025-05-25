import React, { useContext, ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const SubscribedRoute = ({ children }: { children: ReactElement }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!user?.subscribed) {
    return <Navigate to="/subscribe" replace />;
  }
  return children;
};

export default SubscribedRoute;