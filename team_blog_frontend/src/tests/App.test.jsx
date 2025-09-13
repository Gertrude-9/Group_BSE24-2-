import React from 'react';
/* eslint-env jest */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App.jsx';

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

    // Click the Team button using the data-testid
    const teamButton = await screen.findByTestId('team-btn'); // Use findByTestId to wait for it to appear
    fireEvent.click(teamButton);

    // Wait for Team page content to appear
    await waitFor(() => {
      expect(screen.getByText(/Meet Our Team/i)).toBeInTheDocument();
    });
  });
});