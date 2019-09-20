module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['import'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  globals: {
    BigInt: true,
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    // Not our taste?
    'arrow-parens': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'linebreak-style': 'off', // Don't play nicely with Windows.
  },
};
