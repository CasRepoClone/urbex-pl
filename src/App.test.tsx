import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Routes: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Route: ({ element }: { element: React.ReactNode }) => <>{element}</>,
  Link: ({ children, to, className }: { children: React.ReactNode; to: string; className?: string }) => (
    <a href={to} className={className}>{children}</a>
  ),
  Navigate: ({ to }: { to: string }) => <span>Navigate to {to}</span>,
  useNavigate: () => jest.fn(),
}), { virtual: true });

test('renders redesigned urbex-pl brand', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/urbex-pl/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
