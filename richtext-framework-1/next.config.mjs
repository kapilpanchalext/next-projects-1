import path from 'path';
import { fileURLToPath } from 'url';

// Convert `import.meta.url` to `__dirname` equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
  // You can add custom webpack configurations here if needed
  webpack(config) {
    // Add rule to transpile modules inside `node_modules/richtext-framework-1`
    config.module.rules.push({
      test: /\.tsx?$/, // Add support for .ts/.tsx files
      include: [path.resolve(__dirname, 'node_modules/richtext-framework-1')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'], // Ensure Babel uses Next.js' default presets
        },
      },
    });

    return config;
  },
  output: 'standalone',
};

export default nextConfig;
