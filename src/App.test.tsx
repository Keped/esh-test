import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('clicking on tabs swaps shown content', () => {
  render(<App />);
  const tab = screen.getByText(/Blog/i);
  fireEvent.click(tab);
  const content = screen.getByText(/List of Posts/i);

  expect(content).toBeInTheDocument();
});
