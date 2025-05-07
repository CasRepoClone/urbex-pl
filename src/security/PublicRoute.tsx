import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const username = sessionStorage.getItem('username'); // Check for username in sessionStorage
    console.log('Username in sessionStorage:', username);

    // If the user is NOT logged in (no username), redirect to the login page
    return username ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PublicRoute;