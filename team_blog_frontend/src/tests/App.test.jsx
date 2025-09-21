import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

// Mock global fetch within the test suite to avoid global pollution
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  );
});

describe('App Component', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Emerging Trends')).toBeInTheDocument();
  });

  // Optional: Add more tests as needed
  test('renders loading state initially', () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
