const path = require("path");
const loader = require("sass-loader");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // 'hello-World': "./src/hello-world.js",
    'image-file-1': "./src/image-file-main-1.js",
    // 'index': "./src/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
    publicPath: "/static/",
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 9002,
    },
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
      // {
      //   test: /\.txt$/,
      //   type: "asset/source",
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader, 'css-loader'
      //   ]
      // },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ '@babel/env' ],
            // plugins: [ "@babel/plugin-transform-class-properties" ]
          }
        }
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: ["handlebars-loader"]
      }
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   title: 'Hello World',
    //   chunks: ['index'],
    //   template: "src/page-template.hbs",
    //   description: 'Hello World',
    //   minify: false,
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'hello-World.html',
    //   title: 'Hello World',
    //   chunks: ['hello-World'],
    //   template: "src/page-template.hbs",
    //   description: 'Hello World',
    //   minify: false,
    // }),
    new HtmlWebpackPlugin({
      filename: "image-file-1.html",
      title: 'Image File 1',
      // chunks: ['image-file-1'],
      template: "src/page-template.hbs",
      description: 'Image File 1',
      minify: false,
    })
  ]
}
