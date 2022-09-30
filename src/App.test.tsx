import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders proper title', () => {
  render(<App />);
  const linkElement = screen.getByText(/dev finder/i);
  expect(linkElement).toBeInTheDocument();
});
