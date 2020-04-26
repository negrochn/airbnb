const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('components', resolve('src/components')).set('images', resolve('src/images')).set('styles', resolve('src/styles')).set('pages', resolve('src/pages'))
  }
}