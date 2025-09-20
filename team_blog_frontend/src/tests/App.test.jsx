import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Emerging Trends')).toBeInTheDocument();
  });
});