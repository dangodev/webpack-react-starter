const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production';
  return {
    output: {
      path: path.resolve(__dirname, '..', 'dist'),
      publicPath: '/',
      filename: isProd ? '[name].[contenthash].js' : '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.tsx?$/i,
          use: 'ts-loader',
        },
        {
          test: /\.(gif|jpe?g|svg|png|woff2?)$/i,
          use: 'file-loader',
        },
        {
          test: /\.(graphql|svg)$/i,
          use: 'raw-loader',
        },
      ],
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
    optimization: {
      splitChunks: { chunks: 'all' },
    },
    resolve: {
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
    },
  };
};
