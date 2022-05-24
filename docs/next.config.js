/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.devServer = {
      proxy: {
        '/apis': {
          target: 'http://127.0.0.1:8080',
          pathRewrite: { '^/apis': '' }
        }
      }
    }

    return config
  }
}