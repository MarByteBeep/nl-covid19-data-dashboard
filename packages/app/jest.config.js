const baseConfig = require('../../jest.base');
module.exports = {
  ...baseConfig,
  displayName: 'App',
  rootDir: '../../',
  roots: ['./packages/app/'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/packages/app/tsconfig.json',
    },
  },
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '~/(.*)': '<rootDir>/packages/app/src/$1',
  },
};
