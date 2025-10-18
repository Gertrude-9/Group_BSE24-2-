// jest.polyfill.js
if (typeof TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Mock VITE_API_URL to align with the app
global.importMeta = { env: { VITE_API_URL: '' } };