const webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./config')

module.exports = class App {
    constructor() {

    }
    dev() {

        // const serverConfig = {},
        //     compiler = webpack(config)
        // new WebpackDevServer(compiler, serverConfig)
    }
    build(){
    	webpack(config, (err, stats) => {
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
            if ( stats.hasWarnings()) {
                stats.toJson().warnings.forEach(warning => {
                    // console.warn(warning)
                })
            }
            // console.log(stats.toJson({ modules: false }))
            console.log("build ok")
        })
    }
}