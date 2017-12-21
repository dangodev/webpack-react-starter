const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].[chunkhash].js"
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: require("html-webpack-template"),
      // Options
      appMountId: "app",
      lang: "en",
      meta: [
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { charset: "utf-8" }
      ],
      title: "Production Site"
    })
  ]
});
