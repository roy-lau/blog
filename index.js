'use strict'

const App = require('./src/App.js')

/**
 * 创建应用
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
function createApp(options) {
    return new App(options)
}
/**
 * 开发
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
function dev(options) {
    console.log('dev start...')
    const app = createApp(options)
    app.dev()
}
/**
 * 构建
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
function build(options) {
    console.log('build start...')
    const app = createApp(options)
    app.build()
}
/**
 * 运行
 * @return {[type]} [description]
 * @todo:  待增加 options 配置
 *
 */
function run() {
    const ENV = process.argv.slice(2).join()
    if (ENV === 'dev') {
        dev()
    } else if (ENV === 'build') {
        build()
    }
}
run()

// async function build (options) {
//   const app = createApp(options)
//   await app.process()
//   return app.build()
// }