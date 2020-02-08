const { path, logger } = require('@vuepress/shared-utils'),
    moment = require('moment');

moment.locale('zh-cn')

/**
 * Theme API.
 *
 * @param  {Object} options .vuepress/config.js -> themeConfig
 * @param  {Object} ctx     https://vuepress.vuejs.org/zh/plugin/context-api.html#ctx-isprod
 * @return {Object}         [description]
 */
module.exports = (options, ctx) => {
    const { themeConfig, siteConfig } = ctx
    return {
        alias() {
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
        // 增加一个纯粹的路由
        additionalPages: [{
            title: '主页',
            path: '/home/',
            frontmatter: {
                type: 'page',
                layout: 'Home'
            }
        }, {
            title: '归档',
            path: '/files/',
            frontmatter: {
                type: 'page',
                layout: 'Files'
            }
        }, {
            title: '标签',
            path: '/tags/',
            frontmatter: {
                type: 'page',
                layout: 'Tags'
            }
        }, {
            title: '示例',
            path: '/demo/',
            frontmatter: {
                type: 'page',
                layout: 'Demo'
            }
        }],
        // 使用到的插件
        plugins: [
            '@vuepress/search',
            '@vuepress/plugin-nprogress',
            // '@vuepress/last-updated',
            [
                '@vuepress/last-updated',
                { transformer: (timestamp, lang) => { return moment(timestamp).format("YYYY MMMM Do, a h:mm:ss") } }
            ],
            // path.resolve(__dirname, 'plugins/pagination/index.js'),
            ['container', { type: 'tip' }],
            ['container', { type: 'warning' }],
            ['container', { type: 'danger' }],
            ['container', {
                type: 'details',
                before: info => `<details class="custom-block details">${info ? `<summary>${info}</summary>` : ''}\n`,
                after: () => '</details>\n'
            }],
        ],
        // 修改 $page 对象。每个页面都会执行一次
        extendPageData($page) {
            const {
                _filePath, // 源文件的绝对路径
                _computed, // 在构建期访问全局的计算属性，如：_computed.$localePath.
                _content, // 源文件的原始内容字符串
                _strippedContent, // 源文件剔除掉 frontmatter 的内容字符串
                key, // 页面唯一的 hash key
                lastUpdated, // 最后更新时间，需要 last-updated 插件
                frontmatter, // 页面的 frontmatter 对象
                regularPath, // 当前页面遵循文件层次结构的默认链接
                path, // 当前页面的实际链接（在 permalink 不存在时，使用 regularPath ）
            } = $page
            // logger.info($page)
            // 设置 type ，用来过滤文章
            frontmatter.type === 'page' ? null : $page.type = 'post'
            // 设置 type ，用来过滤文章
            $page.frontmatter.date = frontmatter.date && moment(frontmatter.date).format("YYYY MMMM Do, a h:mm:ss")
            /**
             * Generate summary. 生成摘要信息
             */
            if (!_strippedContent || $page.excerpt) {
                return
            } else {
                const excerptLength = 200
                $page.excerpt = (
                    _strippedContent
                    .trim()
                    .replace(/^#+\s+(.*)/, '')
                    .slice(0, excerptLength)
                ) + ' ...'
            }

            // logger.info($page.title)
            // logger.info($page.type)
        },
        ready() {
            // const { themeConfig, siteConfig, pages } = ctx
            // console.log(pages)
        },
        chainMarkdown(config) {
            // config
            //     // reference: https://www.npmjs.com/package/markdown-it-checkbox
            //     .plugin('checkbox')
            //     .use(require('markdown-it-checkbox'))
            //     // Move up one level, like .end() in jQuery.
            //     .end()
        }
    }
}