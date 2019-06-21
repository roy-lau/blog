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
    ready() {
        const { themeConfig, siteConfig } = ctx
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