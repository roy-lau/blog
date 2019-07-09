const { path } = require('@vuepress/shared-utils')
const { getIntervallers, stringifyFunction } = require('../../utils')

module.exports = (options, ctx) => ({
    name:'pagination',
    enhanceAppFiles: [
        path.resolve(__dirname, 'clientPlugin.js')
    ],

    ready() {
        const { postsFilter, postsSorter } = options
        ctx.postsFilter = postsFilter || (({ type }) => type === 'post')
        ctx.postsSorter = postsSorter || ((prev, next) => {
            const prevTime = new Date(prev.frontmatter.date).getTime()
            const nextTime = new Date(next.frontmatter.date).getTime()
            return prevTime - nextTime > 0 ? -1 : 1
        })

        const { pages } = ctx
        const posts = pages.filter(ctx.postsFilter)
        const {
            perPagePosts = 10,
                paginationDir = 'page',
                firstPagePath = '/',
                layout = 'Layout'
        } = options

        const intervallers = getIntervallers(posts.length, perPagePosts)
        ctx.paginationPages = intervallers.map((interval, index) => {
            const path = index === 0 ?
                firstPagePath :
                `/${paginationDir}/${index + 1}/`
            return { path, interval }
        })
    logger.info(ctx.paginationPages)

        ctx.paginationPages.forEach(({ path }, index) => {
            if (path === '/') {
                return
            }
            ctx.addPage({
                permalink: path,
                frontmatter: {
                    layout,
                    title: `Page ${index + 1}`
                }
            })
        })
    },

    async clientDynamicModules() {
        return {
            name: 'pagination.js',
            content: `\
export const paginationPages = ${JSON.stringify(ctx.paginationPages, null, 2)}
export const postsFilter = ${stringifyFunction(ctx.postsFilter)}
export const postsSorter = ${stringifyFunction(ctx.postsSorter)}`
        }
    }
})