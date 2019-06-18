module.exports = {
    // theme: 'material'
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