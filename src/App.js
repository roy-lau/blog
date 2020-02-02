const webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    path = require('path'),
    devConf = require('./config/dev'),
    buildConf = require('./config/build')

module.exports = class App {
    constructor() {

    }
    dev() {
        // https://zhuanlan.zhihu.com/p/37605083
        const serverConfig = {
                // https: true, // 是否使用https启动服务器
                open: true, // 服务器启动后自动打开浏览器  // 未生效
                stats: { colors: true },
                // contentBase告诉服务器从哪里获取静态资源，也就是index.html
                // 默认情况下devserver在项目根目录下寻找index.html文件
                contentBase: path.join(__dirname, "../blog"),
                // 默认情况下publicPath值为"/",表示devServer构建出来的文件保存在内存中的路径(devServer
                // 会忽略output中的path属性)。
                // 设置后需要将index.html中js文件的引入路径修改为/assets/xx.js
                // publicPath: "/assets/",
                watchContentBase: true,
                // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台
                quiet: false,
                // compress 设置为true的时候对所有的服务器资源采用gzip压缩
                // 采用gzip压缩的优点和缺点：
                // 优点：对JS，CSS资源的压缩率很高，可以极大得提高文件传输的速率，从而提升web性能
                // 缺点：服务端要对文件进行压缩，而客户端要进行解压，增加了两边的负载
                compress: true,
                // overlay 属性用来在编译出错的时候，在浏览器页面上显示错误，默认是 false
                overlay: true, // 未生效
                // stats 属性用来控制编译的时候shell上的输出内容
                stats: "errors-only",

                // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败。
                // 在 webpack.config.js 中配置生效，当前 nodejs api 配置无效
                // hot: true,
                // hotOnly: false
            },
            compiler = webpack(devConf),
            server = new WebpackDevServer(compiler, serverConfig)

        server.listen('9000', 'localhost', err => {
            if (err) {
                console.error(err)
            } else {
                console.log("启动成功");
            }
        })
    }
    build() {
        webpack(buildConf, (err, stats) => {
            if (err) {
                console.error(err)
            }
            if (stats.hasErrors()) {
                stats.toJson().errors.forEach(err => {
                    console.error(err)
                })
                console.error(new Error(`Failed to compile with errors.`))
                return
            }
            if (stats.hasWarnings()) {
                stats.toJson().warnings.forEach(warning => {
                    console.warn(warning)
                })
            }
            // console.log(stats.toJson({ modules: false }))
            console.log("build ok")
        })
    }
}