// const path = require('path')
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

module.exports = withSass(
  withImages(
    withCSS({
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
)
