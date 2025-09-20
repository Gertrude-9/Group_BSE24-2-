import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock import.meta.env before importing App
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_API_URL: 'http://127.0.0.1:8000'
      }
    }
  },
  writable: true,
  configurable: true
});

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

import App from '../App.jsx';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Emerging Trends')).toBeInTheDocument();
  });
});