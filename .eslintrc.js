// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    parser: {
      js: '@typescript-eslint/parser',
      ts: '@typescript-eslint/parser',
    },
  },
  plugins: ['html', 'vue'],
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
  ],
  globals: {
    wx: true,
    App: true,
    Page: true,
    Component: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    // Use kebab-case to introduce components in <teamplate>
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    // Component file name should match component name
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
        shouldMatchCase: false,
      },
    ],
    // Put multiple attrs in multiple lines
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/no-lone-template': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/no-v-html': 'off',
    // 取消airbnb规则中对for-of, for-in的限制
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    // 取消对数组强制解构
    'prefer-destructuring': ['error', { object: true, array: false }],

    // 部分变量允许使用下划线开头和结尾定义变量
    'no-underscore-dangle': [
      'error',
      {
        allow: [],
      },
    ],
    radix: 'off',

    'import/no-extraneous-dependencies': 'off',

    // 只有一个export的时候，必须使用 default，不实用，先停掉
    'import/prefer-default-export': 'off',

    // lf crlf换行符报错
    'linebreak-style': 'off',

    // 不禁用 ++ 自增
    'no-plusplus': 'off',

    // 仅在开发模式允许使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 仅在开发模式下允许使用alert
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    'no-unsafe-finally': 1,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'array-bracket-newline': [2, 'always'],
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
      },
    },
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-require-imports': 0,
      },
    },
  ],
};
