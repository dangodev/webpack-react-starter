const path = require('path');
const { readdirSync } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDirectory = 'src';
const pathToRoot = path.resolve(__dirname, '..', rootDirectory);

module.exports = {
  context: path.resolve(__dirname, '..', 'src'),
  entry: {
    main: './client',
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/i,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(gif|jpe?g|svg|png|woff2?)$/i,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './index.ejs',
      // Options
      appMountId: 'app',
      chunksSortMode: 'none',
      lang: 'en',
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { charset: 'utf-8' },
      ],
      title: 'Manifold',
    }),
  ],
  resolve: {
    alias: readdirSync(pathToRoot).reduce((obj, ref) => {
      const alias = ref.indexOf('.') > 0 ? ref.split('.')[0] : ref;
      obj[alias] = path.resolve(__dirname, '..', rootDirectory, ref);
      return obj;
    }, {}),
    extensions: ['.js', '.jsx'],
  },
  node: {
    fs: 'empty',
  },
};
