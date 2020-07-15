'use strict';

const path = require('path');
const fs = require('fs');
const EasyCLI = require('@easy-team/easywebpack-cli');

module.exports = (options) => {
  const baseWebpackConfig = {
    module: {
      rules: [
        {
          stylus: true,
        },
        {
          less: true,
        },
      ],
    },
    plugins: []
  };
  return EasyCLI.merge(baseWebpackConfig, options);
}