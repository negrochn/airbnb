import Vue from 'vue'
import IconSvg from 'components/icon/icon-svg'

// 注册为全局组件
Vue.component('IconSvg', IconSvg)

// requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext)
// 导入 icons 目录下所有的 svg 文件
const req = require.context('./', true, /\.svg$/)
requireAll(req)
