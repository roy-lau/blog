const {
    series,
    task,
    watch,
    src,
    dest
} = require('gulp'), {
    clean,
    mdRender,
    html,
    css,
    jsMd5
} = require('./packages')


task('clean', clean)
task('mdRender', mdRender)
task('build', series(clean, mdRender, html, css, jsMd5))