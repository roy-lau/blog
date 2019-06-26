/**
 * 扩展 VuePress 应用
 */
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vprism from 'vue-prism'

// 图标组件 icon
import 'material-design-icons-iconfont/dist/material-design-icons.css'
// 样式组件 css
import 'vuetify/dist/vuetify.min.css'
// import 'prismjs/themes/prism.css'
// import 'prismjs/themes/prism-coy.css'
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism-funky.css'
// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/themes/prism-solarizedlight.css'
// import 'prismjs/themes/prism-tomorrow.css'
// import 'prismjs/themes/prism-twilight.css'
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    // ...做一些其他的应用级别的优化
    Vue.use(Vuetify)
    Vue.use(Vprism)

}