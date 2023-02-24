process.env.GITMOJI_PATH = '.gitmoji.json';

module.exports = {
  extends: [
    './node_modules/commitlint-config-gitmoji',
    'cz',
  ],
  rules: {
    'body-leading-blank': [
      1, 'always',
    ],
    'body-max-line-length': [
      2, 'always', 100,
    ],
    'footer-leading-blank': [
      1, 'always',
    ],
    'footer-max-line-length': [
      2, 'always', 100,
    ],
    'header-max-length': [
      2, 'always', 100,
    ],
    'scope-case': [
      2, 'never',
    ],
    'scope-empty': [
      2, 'never',
    ],
    'subject-case': [
      2,
      'never',
      [
        'sentence-case', 'start-case', 'pascal-case', 'upper-case',
      ],
    ],
    'subject-empty': [
      2, 'never',
    ],
    'subject-full-stop': [
      2, 'never', '.',
    ],
    'type-empty': [
      2, 'never',
    ],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'build',
        'pref',
        'refactor',
        'style',
        'test',
        'revert',
      ],
    ],
    // 校验提交是否带上tapd
    // 'tapd-reference': [2, 'always', {
    //   allowOther: false,
    // }],
  },
};
