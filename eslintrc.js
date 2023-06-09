module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'google',
    'next/core-web-vitals',
    'prettier',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'import',
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'semi': ['error', 'never'],
    'require-jsdoc': ['off'],
    'import/order': ['error', {
      'newlines-between': 'always', 
      'alphabetize': {
        'order': 'asc', 
      },
    }],
 
  },
 };