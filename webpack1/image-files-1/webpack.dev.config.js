const path = require("path");
const loader = require("sass-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { fs } = require("fs");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: {
    // 'hello-World': "./src/hello-world.js",
    'image-file-1': "./src/image-file-main-1.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./dist"),
    publicPath: "http://localhost:9002/",
    // clean: {
    //   dry: true,
    //   keep: /\.css/,
    // },
  },
  mode: "development",
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve("./dist"),
    },
    devMiddleware: {
      index: "image-file-1.html",
      writeToDisk: true,
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
    new MiniCssExtractPlugin({
      filename: "[name].styles.css",
    }),
    new CleanWebpackPlugin(),
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
      title: 'Hello World',
      // chunks: ['image-file-1'],
      template: "src/page-template.hbs",
      description: 'Image File 1',
      minify: false,
    }),
    new ModuleFederationPlugin({
      name: "ImageFileApp",
      filename: "remoteEntry.js",
      exposes: {
        "./ImageFileApp": "./src/components/image-file-page/image-file-page.js",
      },
      // remotes: {
      //   HelloWorldApp: "HelloWorldApp@http://localhost:9001/remoteEntry.js",
      // }
    }),
  ]
}

// {
//   cleanOnceBeforeBuildPatterns: ["**/*", 
//     path.join(process.cwd(), "build/**/*")
//   ],
// }