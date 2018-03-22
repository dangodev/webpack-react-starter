const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const merge = require('webpack-merge');

const dev = require('./webpack.dev.js');

module.exports = merge(dev, {
  plugins: [new BundleAnalyzerPlugin()],
});
