const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '度假屋、民宿、体验和攻略 - Airbnb 爱彼迎'
    }
  },
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