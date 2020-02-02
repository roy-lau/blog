const config = require('./base')


// devServer: {
//   contentBase: path.join(__dirname, "dist"),
//   compress: true,
//   port: 9000
// }

config
    .devServer
    .hot(true)

module.exports = config.toConfig();