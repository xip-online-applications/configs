const sharedExtends = require('./shared/extends');
const sharedRules = require('./shared/rules');

module.exports = {
  root: true,
  extends: [...sharedExtends, 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    ...sharedRules,
    'dot-notation': 'off', // https://www.typescriptlang.org/tsconfig#noPropertyAccessFromIndexSignature
    'no-shadow': 'off', // https://typescript-eslint.io/rules/no-shadow/#how-to-use
  },
};
