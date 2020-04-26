const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '民宿_酒店_公寓_短租住宿预订平台_旅游攻略和体验 - Airbnb爱彼迎'
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
    config.resolve.alias.set('@', resolve('src')).set('components', resolve('src/components')).set('images', resolve('src/images')).set('styles', resolve('src/styles')).set('pages', resolve('src/pages')).end()
    config.module.rules.delete("svg").end()
    config.module.rule('svg-sprite-loader').test(/\.svg$/).include.add(resolve('src/icons')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' }).end()
  }
}