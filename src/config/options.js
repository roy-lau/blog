const path = require('path')

module.exports = {
    conf: {
        // 主机地址
        get host() {
            return 'localhost'
        },
        // 端口
        get port() {
            return 9000
        },
        // 原地址路径
        get sourceDir() {
            return path.join(__dirname, '../../theme/')
        },
        // 输出路径
        get outDir() {
            return path.join(__dirname, '../../blog/')
        },
        // node_modules 路径
        get nodeModulesPath() {
            return path.resolve(__dirname, '../../node_modules')
        },
        // 是否是生产模式
        get isProd() {
            const _nodeEnv = process.env.NODE_ENV
            if (_nodeEnv === undefined && _nodeEnv === 'production') {
                return true
            } else if (_nodeEnv === 'development') {
                return false
            }
        }
    },
    // webpack rule规则
    rule: {
        get inlineLimit() {
            return 10000
        }
    },
    // html 压缩配置
    htmlMinify: {
            //是否对大小写敏感，默认false
            caseSensitive: true,

            //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
            collapseBooleanAttributes: true,

            //是否去除空格，默认false
            collapseWhitespace: true,

            //是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
            minifyCSS: true,

            //是否压缩html里的js（使用uglify-js进行的压缩）
            minifyJS: true,

            //Prevents the escaping of the values of attributes
            preventAttributesEscaping: true,

            //是否移除属性的引号 默认false
            removeAttributeQuotes: true,

            //是否移除注释 默认false
            removeComments: true,

            //从脚本和样式删除的注释 默认false
            removeCommentsFromCDATA: true,

            //是否删除空属性，默认false
            removeEmptyAttributes: true,

            // 若开启此项，生成的html中没有 body 和 head，html也未闭合
            removeOptionalTags: false,

            //删除多余的属性
            removeRedundantAttributes: true,

            //删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
            removeScriptTypeAttributes: true,

            //删除style的类型属性， type="text/css" 同上
            removeStyleLinkTypeAttributes: true,

            //使用短的文档类型，默认false
            useShortDoctype: true,
        },
    // WebpackDevServer 配置
    serverConfig: {
        // https: true, // 是否使用https启动服务器
        open: true, // 服务器启动后自动打开浏览器  // 未生效
        stats: { colors: true },
        // contentBase 告诉服务器从哪里获取静态资源，也就是 index.html
        // 默认情况下 devserver 在项目根目录下寻找 index.html 文件
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
    }

}