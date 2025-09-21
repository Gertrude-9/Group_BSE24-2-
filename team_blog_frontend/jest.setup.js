import '@testing-library/jest-dom';

// Set environment variable
process.env.VITE_API_URL = 'http://127.0.0.1:8000';

// Mock import.meta.env for Jest
globalThis.importMeta = { env: { VITE_API_URL: 'http://127.0.0.1:8000' } };