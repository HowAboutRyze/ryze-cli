'use strict';

const EasyCLI = require('easywebpack-cli');

module.exports = class Action extends EasyCLI.Action {
  constructor(props) {
    super(props);
  }

  release(options) {
    const { branch, env } = options;
    console.log('[action]release get:', branch, env);
  }
}