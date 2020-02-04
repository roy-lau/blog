const through = require('through2'),
    PluginError = require('plugin-error'),
    MarkdownIt = require('markdown-it')



const PLUGIN_NAME = 'gulp-md-it'

module.exports = options => {

    const stream = through.obj((file, encoding, cb) => {

        // 如果文件为空，不做任何操作，转入下一个操作，即下一个 .pipe()
        if (file.isNull()) {
            // this.push(file);
            return cb(null,file);
        }

        // 插件不支持对 Stream 对直接操作，跑出异常
        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }


        try {
            // markdown 配置和渲染
            // https://github.com/markdown-it/markdown-it
            // 中文 https://markdown-it.docschina.org/api/MarkdownIt.html
            const md = new MarkdownIt(options),
                data = md.render(file.contents.toString());

            file.contents = Buffer.from(data);
            file.extname = '.html';

            cb(null, file);
        } catch (error) {
            cb(new PluginError(PLUGIN_NAME, error, { fileName: file.path }));
        }

    });

    return stream;
};