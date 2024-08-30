/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['img.clerk.com', 'res.cloudinary.com'],
  },
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: `/_next/static/videos/`,
            outputPath: `${isServer ? '../' : ''}static/videos/`,
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
      return config;
    },
  };
  

export default nextConfig;
