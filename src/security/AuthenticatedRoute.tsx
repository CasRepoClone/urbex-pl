import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthenticatedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const username = sessionStorage.getItem('username'); // Check for username in sessionStorage
    return username ? <>{children}</> : <Navigate to="/login" replace />;
};

export default AuthenticatedRoute;