module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@/plugins(.*)$": "<rootDir>/plugins$1"
  }
};