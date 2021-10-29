const baseConfig = require('../../jest.base');
module.exports = {
  ...baseConfig,
  displayName: 'Common',
  rootDir: '../../',
  roots: ['./packages/common/'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/packages/common/tsconfig.json',
    },
  },
  moduleNameMapper: {
    ...baseConfig.moduleNameMapper,
    '~/(.*)': '<rootDir>/packages/common/src/$1',
  },
};
