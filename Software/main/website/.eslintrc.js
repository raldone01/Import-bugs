module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    // Remember to change in .editorconfig also, although am not sure if that file is even needed?
    'max-len': [
      'error',
      {
        code: 1024,
        ignoreComments: true,
        ignoreUrls: true
      }
    ],
    'curly': 'off',
    'no-inner-declarations': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': ['error', 'never'],
    'no-param-reassign': 'off',
    'comma-dangle': ['error', 'never'],
    'quote-props': 'off',
    'arrow-parens': 'off',
    'nonblock-statement-body-position': ['error', 'below'],
    // https://github.com/airbnb/javascript/issues/1271#issuecomment-548688952
    'no-restricted-syntax': [
      'error',
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none' }],
    'no-plusplus': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-underscore-dangle': 'off',
    'no-await-in-loop': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-loop-func': 'off',
    'import/no-cycle': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-continue': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off'
  }
}
