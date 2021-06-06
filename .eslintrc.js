module.exports = {
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
  },
  'plugins': [
    'promise',
    'vue',
    'html',
    'import',
    '@typescript-eslint',
    'promise',
  ],
  'rules': {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 },
    ],
    'vue/html-indent': [
      'error',
      2,
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        'singleline': 6,
        'multiline': {
          'max': 1,
          'allowFirstLine': false,
        },
      },
    ],
    'vue/attributes-order': [
      'off',
    ],
    'vue/require-default-prop': [
      'off',
    ],
    'vue/no-side-effects-in-computed-properties': [
      'off',
    ],
    'vue/component-name-in-template-casing': [
      'off',
    ],
    'vue/singleline-html-element-content-newline': [
      'off',
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-console': [
      'off',
    ],
    'no-case-declarations': [
      'off',
    ],
    'prefer-const': [
      'error',
    ],
    'arrow-parens': [
      'error',
      'as-needed',
    ],
    'no-undef': [
      'off',
    ],
    'promise/catch-or-return': 'error',
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
    'import/first': 'error',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/no-unresolved': 'off',
    'react/prop-types': 0,
    '@typescript-eslint/no-angle-bracket-type-assertion': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],
  },
  'overrides': [{
    'files': ['*.vue'],
    'rules': {
      'indent': 'off',
      'no-irregular-whitespace': 'off',
    },
  }],
};
