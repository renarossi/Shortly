import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App initial state', () => {
  render(<App />);
  const heroHeader = screen.getByText('Shortly');
  expect(heroHeader).toBeInTheDocument();
});
