const path = require("path");
const loader = require("sass-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { fs } = require("fs");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/dashboard.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./dist"),
    publicPath: "http://localhost:9000/",
  },
  mode: "development",
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve("./dist"),
    },
    devMiddleware: {
      index: "dashboard.html",
      writeToDisk: true,
    },
    historyApiFallback: {
      index: "dashboard.html",
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024
          }
        }
      }, 
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ '@babel/env' ],
          }
        }
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].styles.css",
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "dashboard.html",
      title: 'Dashboard',
    }),
    new ModuleFederationPlugin({
      name: "App",
      remotes: {
        HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
        ImageFileApp: "ImageFileApp@http://localhost:9002/remoteEntry.js",
      }
    }),
  ]
}
