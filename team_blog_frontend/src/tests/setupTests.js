// src/tests/setupTests.js

// ✅ Correctly define import.meta.env for Vite
Object.defineProperty(globalThis, 'import', {
  value: { meta: { env: { VITE_API_URL: 'http://localhost:3000' } } },
  writable: false,
});

beforeAll(() => {
  jest.useFakeTimers();
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => new Promise(resolve => setTimeout(() => resolve([]), 100)),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.useRealTimers();
});
