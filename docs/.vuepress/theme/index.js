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
        logger.warn(options)
        const { themeConfig, siteConfig } = ctx
        logger.info(themeConfig)
    },
    // 增加一个纯粹的路由
    additionalPages: [{
        path: '/timeline/',
        frontmatter: {
            layout: 'TimeLine'
        }
    },{
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
        ['container', {
            type: 'tip',
            defaultTitle: {
                '/zh/': '提示'
            }
        }],
        ['container', {
            type: 'warning',
            defaultTitle: {
                '/zh/': '注意'
            }
        }],
        ['container', {
            type: 'danger',
            defaultTitle: {
                '/zh/': '警告'
            }
        }]
    ]
})