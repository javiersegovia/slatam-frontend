// const path = require('path')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withSass(
  withImages({
    cssModules: false,
    cssLoaderOptions: {
      url: false
    },
    webpack(config, { dev }) {
      if (dev) config.devtool = 'cheap-module-source-map'
      return config
    }
  })
)
