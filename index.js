module.exports = {
  parser: "babel-eslint",
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  plugins: ['jest', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    'jest/globals': true,
    'shared-node-browser': true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "max-len": 120,
    "no-alert": 0,
    "no-console": 0,
    "no-plusplus": 0,
    "global-require": 0,
    "semi": [2, "never"],
    "no-await-in-loop": 0,
    "no-confusing-arrow": 0,
    "no-debugger": ["warn"],
    "object-curly-newline": 0,
    "no-underscore-dangle": 2,
    "jsx-a11y/href-no-hash": 0,
    "function-paren-newline": 0,
    "prettier/prettier": "error",
    "import/prefer-default-export": 0,
    "arrow-body-style": [2, "as-needed"],
    "no-return-assign": ["error", "except-parens"],
    "no-unused-vars": [2, { argsIgnorePattern: "_" }],
    "import/imports-first": ["error", "absolute-first"],
    "generator-star-spacing": [2, { before: true, after: false }],
    "no-unused-expressions": [2, { allowShortCircuit: true }]
  },
  overrides: [
    {
      files: ['./src/**/*.test.js', './src/**/*.spec.js'],
      globals: {
        React: true,
      },
      rules: {
        'no-console': 0,
        'global-require': 0,
      },
    },
  ],
};
