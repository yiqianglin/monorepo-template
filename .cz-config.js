const packageJson = require('./package.json');
const workspaces = packageJson.workspaces;
process.env.GITMOJI_PATH = '.gitmoji.json';

module.exports = {
  types: [
    // types内emoji与类型之间存在空格
    { value: '✨ feat', name: '✨ feat:	新增需求、需求迭代、新功能等相关的提交' },
    { value: '🐛 fix', name: '🐛 fix:	BUG修复提交' },
    { value: '📝 docs', name: '📝 docs:	新增或修改文档，不涉及代码' },
    { value: '💄 style', name: '💄 style:	代码样式调整，不涉及功能改动' },
    { value: '🚧 refactor', name: '🚧 refactor:	代码重构，不涉及功能改动' },
    { value: '🚀 perf', name: '🚀 perf:	性能优化相关的提交' },
    { value: '✅ test', name: '✅ test:	测试相关的改动' },
    { value: '🔧 build', name: '🔧 build:	开发工具变动(构建、脚手架工具等)' },
    { value: '🔧 ci', name: '🔧 ci:	修改CI配置文件或部署脚本' },
    { value: '🔖 chore', name: '🔖 chore:	代码维护相关的小改动' },
    { value: '🚨 revert', name: '🚨 revert:	代码回退' },
  ],
  // scopes: [
  //   { name: 'baike_mini' }, { name: 'Build' }, { name: 'Config' },
  // ],
  scopes: [
    ...workspaces.map(workspace => {
      return { name: workspace.replace('packages/', '').replace('*', 'all') };
    }),
    { name: 'Build' },
    { name: 'Config' },
  ],
  // it needs to match the value for field type. Eg.: 'fix'
  /*  scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?(yes/no)',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100,
};
