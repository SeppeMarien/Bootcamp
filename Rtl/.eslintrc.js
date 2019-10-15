module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:jest/recommended', 'prettier', 'prettier/react'],
  plugins: ['import'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  globals: {},
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  rules: {
    'linebreak-style': 'off', // Don't play nicely with Windows.
    'consistent-return': 'off', // Not our taste?
    'no-plusplus': 'off', // Not our taste?
    'import/no-named-as-default': 'off',
    'react/forbid-prop-types': 'off',
    'jest/no-focused-tests': 'error',
    'jsx-a11y/label-has-associated-control': [
      // airbnb require both nesting and htmlFor
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'either',
        depth: 25,
      },
    ],
  },
};
