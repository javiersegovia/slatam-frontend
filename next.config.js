require('dotenv').config()
const withImages = require('next-images')

module.exports = withImages({
  cssModules: false,
  cssLoaderOptions: {
    url: false,
  },
  webpack(config, { dev }) {
    if (dev) config.devtool = 'cheap-module-source-map'
    return config
  },
  env: {
    DEV_GRAPHQL_API: process.env.DEV_GRAPHQL_API,
    DEV_GRAPHQL_WS: process.env.DEV_GRAPHQL_WS,
    CONTACT_PHONE: process.env.CONTACT_PHONE,
  },
  experimental: {
    scss: true,
  },
})
