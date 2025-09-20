import React from 'react';
/* eslint-env jest */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App.jsx';

// Mock import.meta.env before importing App
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        VITE_API_URL: 'http://127.0.0.1:8000'
      }
    }
  },
  writable: true
});

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  })
);

describe('App Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('navigates to Team page when Team button clicked', async () => {
    render(<App />);

    // Click the Team button
    const teamButton = screen.getByText('Team');
    fireEvent.click(teamButton);

    // Wait for Team page content to appear
    await waitFor(() => {
      expect(screen.getByText(/Meet Our Team/i)).toBeInTheDocument();
    });
  });
});