import transpileModules from 'next-transpile-modules';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = transpileModules(['@kapilpanchal/helloworld-framework-4'])({
  
  webpack: (config) => {
    // Add custom loader for .tsx files
    config.module.rules.push({
      test: /\.tsx?$/, // For .ts and .tsx files
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'], // Use Next.js Babel preset
          },
        },
      ],
    });

    // Add custom loader for .scss files
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

    // Add MiniCssExtractPlugin to the Webpack plugins array
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
