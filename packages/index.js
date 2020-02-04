const { src, dest } = require('gulp'),
    gulpif = require('gulp-if'),
    babel = require('gulp-babel'), //
    uglify = require('gulp-uglify'), // 压缩 js
    cleanCSS = require('gulp-clean-css'), // 压缩 css
    md5 = require("gulp-md5-plus"),
    del = require('del'),
    markdown = require('./markdown')



function isJavaScript(file) {
    // 判断文件的扩展名是否是 '.js'
    return file.extname === '.js';
}

module.exports = {
    clean(cb) {
        // 直接使用 `delete` 模块，避免使用 gulp-rimraf 插件
        // del(['dist/','多个'], cb);
        del.sync(['dist']);
        cb()
    },
    mdRender() {
        return src('./src/*.md') // 以执行文件位置为准 gulpfile.js task()
            .pipe(markdown())
            .pipe(dest('dist/md'))
    },
    html() {
        return src('./src/*.html')
            .pipe(dest('dist/html'))
    },
    js() { // 在同一个管道（pipeline）上处理 JavaScript 和 CSS 文件
        return src(['src/*.js', 'src/*.css'])
            // 只对 JavaScript 文件应用 gulp-uglify 插件
            .pipe(gulpif(isJavaScript, uglify()))
            .pipe(dest('dist/js', { sourcemaps: true }));
    },
    jsMd5() {
        return src('src/js/*.js')
            .pipe(md5(10, 'dist/html/*.html', {
                mappingFile: 'manifest.json'
            }))
            .pipe(babel())
            .pipe(uglify())
            .pipe(dest('dist/js', { sourcemaps: true }));
    },
    css() {
        return src("./src/css/*.css")
            .pipe(md5(10, 'dist/html/*.html', {
                mappingFile: 'manifest.json'
            }))
            .pipe(cleanCSS())
            .pipe(dest("dist/css"));
    },
    imgs() {
        return src('./src/img/**/*')
            .pipe(md5(10, 'dist/css/*.css', {
                dirLevel: 1,
                mappingFile: 'manifest.json',
                connector: '.'
            }))
            .pipe(dest('dist/img'));
    }
};