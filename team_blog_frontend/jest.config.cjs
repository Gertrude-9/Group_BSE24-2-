// jest.config.cjs
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'], // Update this path
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$))'
  ]
};