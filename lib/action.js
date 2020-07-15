'use strict';

const EasyCLI = require('@easy-team/easywebpack-cli');
const WebpackConfig = require('./webpackConfig');

module.exports = class Action extends EasyCLI.Action {
  constructor(command) {
    super(command);
  }

  // support external set wepback config
  initCustomizeConfig(options) {
    return WebpackConfig(options);
  }

  release(options) {
    const { branch = 'master' } = options;
    this.command.tool.exec(`ryze build && git add . && git commit -m 'publish' && git push origin ${branch}`);
  }
}