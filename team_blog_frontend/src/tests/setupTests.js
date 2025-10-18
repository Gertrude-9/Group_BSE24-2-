// src/tests/setupTests.js
// Mock fetch to simulate API calls with a delay
beforeAll(() => {
  jest.useFakeTimers(); // Use fake timers for controlled delays
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => new Promise(resolve => setTimeout(() => resolve([]), 100)) // 100ms delay
    })
  );
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
});