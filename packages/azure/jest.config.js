/*
 * © 2021 Thoughtworks, Inc.
 */

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageThreshold: {
    global: {
      statements: 96,
      branches: 91,
      functions: 97,
      lines: 96,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/fixtures'],
  modulePathIgnorePatterns: ['index.ts'],
}
