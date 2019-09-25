module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
  plugins: ['import'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  globals: {},
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'consistent-return': 'off', // Not our taste?
    'linebreak-style': 'off', // Don't play nicely with Windows.
    'no-plusplus': 'off', // Not our taste?
  },
};
