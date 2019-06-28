const { logger } = require('@vuepress/shared-utils')
const path = require('path')

// Theme API.
module.exports = (options, ctx) => ({
    alias() {
        const { themeConfig, siteConfig } = ctx
        // resolve algolia
        const isAlgoliaSearch = (
            themeConfig.algolia ||
            Object.keys(siteConfig.locales && themeConfig.locales || {})
            .some(base => themeConfig.locales[base].algolia)
        )
        return {
            '@AlgoliaSearchBox': isAlgoliaSearch ?
                path.resolve(__dirname, 'components/AlgoliaSearchBox.vue') : path.resolve(__dirname, 'noopModule.js')
        }
    },
    extendPageData($page) {
        const {
            _filePath, // 源文件的绝对路径
            _computed, // 在构建期访问全局的计算属性，如：_computed.$localePath.
            _content, // 源文件的原始内容字符串
            _strippedContent, // 源文件剔除掉 frontmatter 的内容字符串
            key, // 页面唯一的 hash key
            frontmatter, // 页面的 frontmatter 对象
            regularPath, // 当前页面遵循文件层次结构的默认链接
            path, // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
        } = $page
        // logger.warn($page)
    },
    ready() {
        const { themeConfig, siteConfig, pages } = ctx
        // logger.warn(options)
        // logger.info(themeConfig)
    },
    // 增加一个纯粹的路由
    additionalPages: [{
        path: '/home/',
        frontmatter: {
            layout: 'Home'
        }
    }, {
        path: '/files/',
        frontmatter: {
            layout: 'Files'
        }
    }, {
        path: '/tags/',
        frontmatter: {
            layout: 'Tags'
        }
    }, {
        path: '/timeline/',
        frontmatter: {
            layout: 'TimeLine'
        }
    }, {
        path: '/demo/',
        frontmatter: {
            layout: 'Demo'
        }
    }],
    // 使用到的插件
    plugins: [
        ['@vuepress/active-header-links', options.activeHeaderLinks],
        '@vuepress/search',
        '@vuepress/plugin-nprogress',
        // path.resolve(__dirname, 'plugins/pagination'),
        ['container', { type: 'tip' }],
        ['container', { type: 'warning' }],
        ['container', { type: 'danger' }]
    ]
})