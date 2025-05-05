// Button.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Button.scss"

interface ButtonProps {
  label: string;
  route?: string; // Route to navigate to
  onClick?: () => void; // Optional onClick handler

}

const Button: React.FC<ButtonProps> = ({ label, route, onClick }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Handle button click and navigation
  const handleButtonClick = () => {
    if (route) {
      navigate(route); // Navigate to the specified route
    }
    if (onClick) {
      onClick(); // If there's an onClick function, call it
    }
  };

  return (
    <button onClick={handleButtonClick} className='UrlButton'>
      {label}
    </button>
  );
};

export default Button;
