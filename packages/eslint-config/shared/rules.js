module.exports = {
  // Disabled these airbnb rules because TypeScript handles it properly
  'no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
  ],
  'import/prefer-default-export': 0,
  'import/no-unresolved': 0,
  'import/extensions': 0,
};
