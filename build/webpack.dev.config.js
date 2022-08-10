/**
 * @author lgf
 * @description dev
 */
const config = require('./config');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const generateEntry = require('./generateEntry');
const { entry, htmlWebpackPlugin } = generateEntry();

module.exports = merge(common, {
  mode: 'development',
  entry,
  output: {
    publicPath: config.dev.publicPath,
  },
  plugins: [...htmlWebpackPlugin],
});
