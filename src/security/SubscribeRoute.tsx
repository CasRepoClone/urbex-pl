import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const SubscribeRoute = ({ children }: { children: ReactElement }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (user?.subscribed) {
    return <Navigate to="/map" replace />;
  }
  return children;
};

export default SubscribeRoute;