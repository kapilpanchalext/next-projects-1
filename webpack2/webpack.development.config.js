const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve('./dist'),
  },
  mode: 'development',
  resolve: {
    extensions: [ '.js', '.jsx', '.ts', '.tsx' ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
            options: {
              esModule: true,
              modules: {
                namedExport: true,
                localIdentName: "[name]__[contenthash]__[local]",
              },
              importLoaders: 1,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader',
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
            options: {
              esModule: true,
              modules: {
                namedExport: true,
                localIdentName: "[name]__[contenthash]__[local]",    
              },
              importLoaders: 1,
            },
          },
          'sass-loader'
        ],
        include: /\.module\.scss$/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ],
        exclude: /\.module\.scss$/,
      },
      {
        test: /\.ts$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env', '@babel/typescript', '@babel/preset-react' ],
          }
        }
      },
      {
        test: /\.tsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env', '@babel/typescript', '@babel/preset-react' ],
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'HelloWorld Framework 3',
      description: 'HelloWorld Framework 3',
    })
  ],
}