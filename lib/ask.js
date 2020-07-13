'use strict';

const chalk = require('chalk');
exports.boilerplateChoice = [
  {
    name: `Create ${chalk.green('React')} ${chalk.yellow('Webpack')} Application`,
    value: 'easy-react-app-template',
    pkgName: 'easy-react-app-template',
    choices: ['name', 'description', 'npm']
  },
];