import { render, screen, waitFor } from '@testing-library/react';
import App from '../App.jsx';

describe('App Component', () => {
  test('renders without crashing', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('Emerging Trends')).toBeInTheDocument();
    });
  });

  test('renders loading state initially', async () => {
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
      expect(screen.getByText('Our Team Blog')).toBeInTheDocument();
    });
  });
});