// https://segmentfault.com/a/1190000017547171#articleHeader0

const Config = require('webpack-chain'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),


    entry_dir = path.join(__dirname, '../../theme/'),
    output_dir = path.join(__dirname, '../../blog/'),
    config = new Config();

// 用链式API改变配置
// 每个API的调用都会跟踪对存储配置的更改。
config
    .mode('development')
    .devtool('source-map')
    .entry('theme')
    .add(entry_dir + 'js/index.js')
    .end()


    .plugin('html')
        .use(HtmlWebpackPlugin)
        // .tap(options => {
        //     options.title = 'tpl title'
        //     options.filename = 'test.html'
        //     options.template = entry_dir + 'index.html'
        //     return options
        // })
    .end()


    // 修改 output 配置
    .output
        .path(output_dir)
        .filename('[name]-[hash].js')

module.exports = config