import transpileModules from 'next-transpile-modules';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = transpileModules(['@kapilpanchal/helloworld-framework-4', 
  '@kapilpanchal/helloworld-framework-5'])({
  
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      ],
    });

    config.module.rules.push({
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
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader, 'css-loader',
      ],
      exclude: /\.module\.css$/,
    });

    config.module.rules.push({
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
    });

    config.module.rules.push({
      test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ],
        exclude: /\.module\.scss$/,
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash].css',
        chunkFilename: 'static/css/[id].[contenthash].css',
      })
    );
    return config;
  },
});

export default nextConfig;
