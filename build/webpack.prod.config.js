/**
 * @author lgf
 * @description prod
 */
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.config.js');
const generateEntry = require('./generateEntry');
const { entry, htmlWebpackPlugin } = generateEntry();
const config = require('./config');

module.exports = merge(common, {
  mode: 'production',
  entry: entry,
  output: {
    publicPath: config.build.publicPath,
    filename: 'js/[name].js',
    path: config.build.path,
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        exclude: /static/,
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin(), ...htmlWebpackPlugin],
});
