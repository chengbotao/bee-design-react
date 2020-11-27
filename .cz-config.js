/*
 * @Description: 
 * @version: 
 * @Author: Chengbotao
 * @Date: 2020-08-23 00:03:45
 * @LastEditors: Chengbotao
 * @LastEditTime: 2020-11-04 14:34:24
 * @FilePath: \bee-design-react\.cz-config.js
 */
module.exports = {
  types: [
    { value: 'feat', name: 'feat(新功能):     A new feature' },
    { value: 'fix', name: 'fix(修复):      A bug fix' },
    { value: 'docs', name: 'docs(文档):     Documentation only changes' },
    {
      value: 'style(样式)',
      name:
        'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor(重构)',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf(性能)',
      name: 'perf:     A code change that improves performance',
    },
    { value: 'test(测试)', name: 'test:     Adding missing tests' },
    {
      value: 'chore(构建过程或辅助工具的变动)',
      name:
        'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    },
    { value: 'revert(回退)', name: 'revert:   Revert to a commit' },
    { value: 'WIP(物料)', name: 'WIP:      Work in progress' },
  ],

  scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};