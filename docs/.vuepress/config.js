module.exports = {
    // theme: 'material'
    base: "/blog/",
    name: "Roy Lau",
    email: "897379293@qq.com",
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