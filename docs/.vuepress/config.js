module.exports = {
    // theme: 'material'
    base: "/blog/",
    name: "Roy Lau",
    email: "897379293@qq.com",
    markdown: {
        lineNumbers: true, //是否开启文章代码左边的行号显示
        config: md => {
            md.set({ breaks: true })
            // https://www.npmjs.com/package/markdown-it-checkbox
            md.use(require('markdown-it-checkbox'))
        }
    },
    themeConfig: {
        sidebar: {
            '/home/': [
                'one', /* /home/one.html */
                'two' /* /home/two.html */
            ],

            '/bar/': [
                '', /* /bar/ */
                'three', /* /bar/three.html */
                'four' /* /bar/four.html */
            ],
            // fallback
            '/': [
                '', /* / */
                'home', /* /home.html */
                'about' /* /about.html */
            ]
        }
    }
}