import '@testing-library/jest-dom';

// Mock import.meta.env for Jest
if (typeof global.import === 'undefined') {
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
}