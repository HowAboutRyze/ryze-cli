'use strict';

const EasyCLI = require('easywebpack-cli');
const Action = require('./action');

module.exports = class Command extends EasyCLI.Command {
  constructor(command) {
    super(command);
    this.action = new Action(this);
  }

  init() {
    this.program
      .command('init')
      .option('-r, --registry [url]', 'npm registry, default https://registry.npmjs.org, you can taobao registry: https://registry.npm.taobao.org')
      .description('初始化模板项目')
      .action(options => {
        this.action.init(require('./ask'), options);
      });
  }

  release() {
    this.program
      .command('release')
      .option('--branch [branch]', 'release branch')
      .option('--env [env]', 'release env')
      .description('release 项目哦')
      .action(options => {
        this.action.release(options);
      });
  }

  command() {
    this.register('release');
    super.command();
  }
}