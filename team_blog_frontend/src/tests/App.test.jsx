// ✅ Mock Vite's import.meta.env globally in a Jest-friendly way
global.importMeta = { env: { VITE_API_URL: 'http://localhost:3000' } };

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.jsx';

describe('App Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();

    // ✅ Mock fetch to avoid network calls
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test('renders without crashing', () => {
    render(<App />);
    jest.advanceTimersByTime(100);
    expect(screen.getByText('Emerging Trends')).toBeInTheDocument();
  });

  test('renders main page content', () => {
    render(<App />);
    expect(screen.getByText('Our Team Blog')).toBeInTheDocument();
  });
});
