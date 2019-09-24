module.exports = {
  extends: ['airbnb-base', 'plugin:jest/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  globals: {},
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    // Typescript issues
    'no-unused-vars': 'off',
    'lines-between-class-members': 'off',

    // Not our taste?
    'consistent-return': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Don't play nicely with Windows.
    'linebreak-style': 'off',
  },
};
