module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Disabled these airbnb rules because TypeScript handles it properly
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
};
