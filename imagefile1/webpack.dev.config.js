const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/image-file-main-1.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: 'http://localhost:9002/'
  },
  mode: 'development',
  devServer: {
    port: 9002,
    static: {
      directory: path.resolve('./dist'),
    },
    devMiddleware: {
      index: 'image-file-1.html',
      writeToDisk: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024
          }
        }
      },
      {
        test: /\.txt/,
        type: 'asset/source'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'image-file-1.html',
      title: 'Image File 1',
      description: 'Image File 1',
      template: 'src/page-template.hbs'
    }),
    new ModuleFederationPlugin({
      name: 'ImageFileApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ImageFilePage': './src/components/image-file-page/image-file-page.js'
      },
      remotes: {
        ImageCaptionApp: 'ImageCaptionApp@http://localhost:9003/remoteEntry.js'
      }
    })
  ]
};