const path = require("path");
const webpack = require("webpack");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");

const files = require("../dist/manifest.json");

const routes = ["/", "/about"];

module.exports = {
  context: path.resolve(__dirname, "..", "src"),
  entry: {
    server: "./server.js" // SSR 💀
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js",
    libraryTarget: "umd"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new StaticSiteGeneratorPlugin({
      paths: routes
    })
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: ["raw-loader"]
      },
      {
        test: /\.(gif|jpe?g|png)$/i,
        use: {
          loader: "file-loader",
          options: { emitFile: false }
        }
      },
      {
        test: /\.(ico|mp4|svg|woff2?)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: filename => "[name].[ext]",
            emitFile: false
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "..", "src"), "node_modules"]
  },
  target: "node"
};
