# No.1 如何在 Vue CLI 3 项目中优雅地引入 .svg 文件？

我们在分析 Airbnb 时，发现网站中很多图标是以 <svg> 标签的方式引入的。为了与 Airbnb 的图标保持一致，我们也将采用 <svg> 标签的方式。

![airbnb-use-svg.png]()

为了能够在我们的项目中使用 Airbnb 上的 <svg> ，我们需要执行以下步骤：

1. 下载 Airbnb 上的所有 .svg 文件；
2. 在 Vue CLI 3 项目中使用 .svg 文件；

## 下载 .svg

chrome 网上应用店，搜索并安装 ==Export SVG with Style== 。

![export-svg-with-style.png]()

chrome 浏览器访问 https://www.airbnb.cn/ ，鼠标左键点击 Export SVG 插件，下载网站所有的 .svg 文件。

## Vue CLI 3 使用 .svg

1. 安装 ==svg-sprite-loader== 插件

   ```
   npm i svg-sprite-loader -D
   ```

   [svg-sprite-loader](https://github.com/JetBrains/svg-sprite-loader) ，Webpack loader for creating SVG sprites.

2. vue.config.js 配置 svg-sprite-loader

   - 删除默认配置中的 svg 规则；

   - 添加 svg-sprite-loader 规则，使用 svg-sprite-loader 处理 src/icons 下的 .svg 文件；

   - 注意：symbolId: 'icon-[name]' ，使用 .svg 文件名作为 symbolId ；

     ```js
     const path = require('path')
     const resolve = dir => path.join(__dirname, dir)
     
     module.exports = {
       chainWebpack: config => {
         config.module.rules.delete("svg").end()
         config.module.rule('svg-sprite-loader').test(/\.svg$/).include.add(resolve('src/icons')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' }).end()
       }
     }
     ```

     

3. 自动导入

   - 将 src/icons 下的 .svg 文件自动导入，在 src/icons 下创建 index.js

     ```js
     // requires and returns all modules that match
     const requireAll = requireContext => requireContext.keys().map(requireContext)
     // 导入 icons 目录下所有的 svg 文件
     const req = require.context('./', true, /\.svg$/)
     requireAll(req)
     ```

   - 在 main.js 中引入 src/icons/index.js

     ```js
     import '@/icons'
     ```

4. 创建 IconSvg 全局组件

   - 在 src/components 下创建并进入 global 文件夹，创建并进入 icon 文件夹，创建 icon-svg.vue

     ```vue
     <template>
       <svg :class="svgClass" aria-hidden="true">
         <use :xlink:href="svgName"></use>
       </svg>
     </template>
     
     <script>
     export default {
       name: 'IconSvg',
       props: {
         iconName: {
           type: String,
           required: true
         },
         className: {
           type: String
         }
       },
       computed: {
         svgName () {
           return `#icon-${this.iconName}`
         },
         svgClass () {
           if (this.className) {
             return `icon-svg ${this.className}`
           } else {
             return 'icon-svg'
           }
         }
       }
     }
     </script>
     
     <style lang="less" scoped>
       .icon-svg {
         width: 1em;
         height: 1em;
         vertical-align: -0.15em;
         fill: currentColor;
         overflow: hidden;
       }
     </style>
     ```

   - 修改 src/icons/index.js ，将 IconSvg 注册为全局组件

     ```js
     import Vue from 'vue'
     import IconSvg from 'components/global/icon/icon-svg'
     
     // 注册为全局组件
     Vue.component('IconSvg', IconSvg)
     
     // requires and returns all modules that match
     const requireAll = requireContext => requireContext.keys().map(requireContext)
     // 导入 icons 目录下所有的 svg 文件
     const req = require.context('./', true, /\.svg$/)
     requireAll(req)
     ```

   - 使用 IconSvg 全局组件

     ```html
     <IconSvg iconName="logo" className="icon-logo" />
     ```

**扩展阅读**

1. [SVG 图像入门教程 - 阮一峰](http://www.ruanyifeng.com/blog/2018/08/svg.html?utm_source=tuicool&utm_medium=referral)
2. [未来必热：SVG Sprites技术介绍 - 张鑫旭](https://www.zhangxinxu.com/wordpress/2014/07/introduce-svg-sprite-technology/)