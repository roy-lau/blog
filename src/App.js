const webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    { log } = require('./utils'),
    devConf = require('./config/dev'),
    buildConf = require('./config/build')

module.exports = class App {
    constructor() {

    }
    dev() {
        // https://zhuanlan.zhihu.com/p/37605083
        const { serverConfig, conf: { host, port } } = require('./config/options'),
            compiler = webpack(devConf),
            server = new WebpackDevServer(compiler, serverConfig)


        server.listen(port, host, err => {
            if (err) {
                log.error(err)
            } else {
                log.wait("启动成功", host, port);
            }
        })
    }
    build() {
        webpack(buildConf, (err, stats) => {
            if (err) {
                log.error(err)
            }
            if (stats.hasErrors()) {
                stats.toJson().errors.forEach(err => {
                    log.error(err)
                })
                log.error(new Error(`Failed to compile with errors.`))
                return
            }
            if (stats.hasWarnings()) {
                stats.toJson().warnings.forEach(warning => {
                    log.warn(warning)
                })
            }
            // log.info(stats.toJson({ modules: false }))
            log.success("build ok")
        })
    }
}