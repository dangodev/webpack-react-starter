const history = require('connect-history-api-fallback');
const convert = require('koa-connect');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  serve: {
    port: 8080,
    content: [__dirname],
    add: app => {
      app.use(convert(history({})));
    },
  },
});
