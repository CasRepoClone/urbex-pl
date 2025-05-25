import React, { createContext, useContext, useState, ReactNode } from 'react';

// AuthContext.tsx
interface User {
  username: string;
  email: string;
  subscribed: boolean;
  // ...other fields
}

interface AuthContextType {
  isAuthenticated: boolean;
  user?: User; // <-- Add this line
  login: (user: User) => void; // Accept user info on login
  logout: () => void;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  // login now accepts a User object
  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};