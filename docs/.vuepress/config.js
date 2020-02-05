module.exports = {
    theme: require.resolve('../../'),
    base: "/blog/",
    name: "Roy Lau",
    email: "897379293@qq.com",
    head: [
        // ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    markdown: {
        lineNumbers: true //是否开启文章代码左边的行号显示
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