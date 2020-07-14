'use strict';

const EasyCLI = require('@easy-team/easywebpack-cli');

module.exports = class Action extends EasyCLI.Action {
  constructor(command) {
    super(command);
  }

  release(options) {
    const { branch = 'master' } = options;
    this.command.tool.exec(`ryze build && git add . && git commit -m 'publish' && git push origin ${branch}`);
  }
}