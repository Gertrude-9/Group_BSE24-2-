import { render, screen, waitFor } from '@testing-library/react';
import App from '../App.jsx';

describe('App Component', () => {
  beforeEach(() => {
    jest.useFakeTimers(); // Reset timers for each test
  });

  afterEach(() => {
    jest.clearAllTimers(); // Clear timers after each test
  });

  test('renders loading state initially', async () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    jest.advanceTimersByTime(100); // Advance time to simulate delay
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(screen.getByText('Our Team Blog')).toBeInTheDocument();
    });
  });

  test('renders without crashing', () => {
    render(<App />);
    jest.advanceTimersByTime(100); // Advance time to ensure rendering
    expect(screen.getByText('Emerging Trends')).toBeInTheDocument();
  });
});