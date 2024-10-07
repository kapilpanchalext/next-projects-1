const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
    publicPath: ''
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
          }
        }
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env', '@babel/typescript', '@babel/preset-react' ],
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
      filename: 'hello-world.html',
      title: 'Hello world',
      description: 'Hello world',
      // template: 'src/page-template.hbs'
    }),
  ],
}
