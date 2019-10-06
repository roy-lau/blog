// https://segmentfault.com/a/1190000017547171#articleHeader0

const Config = require('webpack-chain'),
	path= require('path'),
	entry_dir = path.join(__dirname,'../../theme/index.js'),
	output_dir = path.join(__dirname,'../../blog/'),
    config = new Config();

console.log('======================',path.join(__dirname,'../../theme/index.js'))
// 用链式API改变配置
// 每个API的调用都会跟踪对存储配置的更改。
config
    .entry('theme')
    .add(entry_dir)
    .end()
    .entry('theme2')
    .add(entry_dir)
    .end()

    // 修改 output 配置
  .output
    .path(output_dir)
    .filename('[name].bundle.js')
    .end()

module.exports = config.toConfig();