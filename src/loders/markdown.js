const markdown = require('markdown-it')

module.exports = function(src) {
  const html = markdown().render(src)
  return `<div class="markdown">${html}</div>`
}