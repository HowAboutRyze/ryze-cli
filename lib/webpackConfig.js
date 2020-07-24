'use strict';

const EasyCLI = require('@easy-team/easywebpack-cli');

module.exports = (options) => {
  const { baseDir = process.cwd() } = options;
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