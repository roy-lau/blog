// https://segmentfault.com/a/1190000017547171#articleHeader0

const Config = require('webpack-chain'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    {
        conf: { isProd, sourceDir, outDir },
        htmlMinify,
        rule: { inlineLimit }
    } = require('./options'),
    config = new Config();


// 用链式API改变配置
// 每个API的调用都会跟踪对存储配置的更改。
config
    .mode(isProd ? 'production' : 'development')
    .devtool('source-map')

    .entry('app')
    .add(sourceDir + 'js/index.js')
    .end()

    // .entry('head')
    // .add(sourceDir + 'js/head.js')
    // .end()

    // 修改 output 配置
    .output
    .path(outDir)
    .filename('js/[name]-[hash:5].js')
    .publicPath('/')

config.resolve
    .set('symlinks', true)
    .alias
    .set('@theme', outDir)
    .end()
    .extensions
    .merge(['.js', '.jsx', '.vue', '.json', '.styl'])
    .end()
    .modules
    // prioritize our own
    .add(path.resolve(__dirname, '../../node_modules'))
    .add('node_modules')


// HTML 插件
config
    .plugin('html')
    .use(HtmlWebpackPlugin, [{
        title: 'blog theme home',
        showErrors: true,
        filename: 'index.html',
        template: sourceDir + 'index.html',
        htmlMinify
    }])
    .end()
    .plugin('head')
    .use(HtmlWebpackPlugin, [{
        title: 'blog theme tag',
        showErrors: true,
        filename: 'view/tag-[hash:5].html',
        template: sourceDir + 'tpl/tag.html',
    }])


// if (!siteConfig.evergreen) {
/*if (false) {
    const libDir = path.join(__dirname, '..')
    config.module
        .rule('js')
        .test(/\.js$/)
        .exclude.add(filepath => {
            // Always transpile lib directory
            if (filepath.startsWith(libDir)) {
                return false
            }
            // always transpile js in vue files
            if (/\.vue\.js$/.test(filepath)) {
                return false
            }
            // Don't transpile node_modules
            return /node_modules/.test(filepath)
        }).end()
        .use('cache-loader')
        .loader('cache-loader')
        .options({
            cacheDirectory,
            cacheIdentifier
        })
        .end()
        .use('babel-loader')
        .loader('babel-loader')
        .options({
            // do not pick local project babel config
            babelrc: false,
            presets: [
                require.resolve('@vue/babel-preset-app')
            ]
        })
}


config.module
    .rule('pug')
    .test(/\.pug$/)
    .use('pug-plain-loader')
    .loader('pug-plain-loader')
    .end()

    .rule('imgs')
    .test(/\.(png|jpe?g|gif)(\?.*)?$/)
    .use('url-loader')
    .loader('url-loader')
    .options({
        limit: inlineLimit,
        name: `assets/img/[name].[hash:8].[ext]`
    })
    .end()

    // do not base64-inline SVGs.
    // https://github.com/facebookincubator/create-react-app/pull/1180
    .rule('svg')
    .test(/\.(svg)(\?.*)?$/)
    .use('file-loader')
    .loader('file-loader')
    .options({
        name: `assets/img/[name].[hash:8].[ext]`
    })
    .end()

    .rule('media')
    .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
    .use('url-loader')
    .loader('url-loader')
    .options({
        limit: inlineLimit,
        name: `assets/media/[name].[hash:8].[ext]`
    })
    .end()

    .rule('fonts')
    .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
    .use('url-loader')
    .loader('url-loader')
    .options({
        limit: inlineLimit,
        name: `assets/fonts/[name].[hash:8].[ext]`
    })*/



module.exports = config