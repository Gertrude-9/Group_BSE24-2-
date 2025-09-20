import '@testing-library/jest-dom';

// Mock import.meta.env for Jest
global.import = {
  meta: {
    env: {
      VITE_API_URL: 'http://127.0.0.1:8000'
    }
  }
};