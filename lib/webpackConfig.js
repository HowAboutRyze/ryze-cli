'use strict';

const path = require('path');
const fs = require('fs');
const EasyCLI = require('@easy-team/easywebpack-cli');
const HtmlWebpackAlterPlugin = require('html-webpack-alter-plugin');

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
  const projectConfig = path.join(baseDir, 'project.config.js');
  if (fs.existsSync(projectConfig)) {
    const projectData = require(projectConfig);
    baseWebpackConfig.plugins.push(new HtmlWebpackAlterPlugin({
      position: 'head',
      content: [{
        type: 'script',
        data: JSON.stringify(projectData),
      }]
    }));
  }
  return EasyCLI.merge(baseWebpackConfig, options);
}