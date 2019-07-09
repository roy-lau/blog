export const hashRE = /#.*$/
export const extRE = /\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^(https?:|mailto:|tel:)/

export function normalize (path) {
  return decodeURI(path)
    .replace(hashRE, '')
    .replace(extRE, '')
}

export function getHash (path) {
  const match = path.match(hashRE)
  if (match) {
    return match[0]
  }
}

export function isExternal (path) {
  return outboundRE.test(path)
}

export function isMailto (path) {
  return /^mailto:/.test(path)
}

export function isTel (path) {
  return /^tel:/.test(path)
}

export function ensureExt (path) {
  if (isExternal(path)) {
    return path
  }
  const hashMatch = path.match(hashRE)
  const hash = hashMatch ? hashMatch[0] : ''
  const normalized = normalize(path)

  if (endingSlashRE.test(normalized)) {
    return path
  }
  return normalized + '.html' + hash
}


/**
 * 处理页面站点数据，
 * @param  {[type]} pages   [description]
 * @param  {[type]} rawPath [description]
 * @param  {[type]} base    [description]
 * @return {[type]}         [description]
 */
export function resolvePage (pages, rawPath, base) {
  if (isExternal(rawPath)) {
    return {
      type: 'external',
      path: rawPath
    }
  }
  if (base) {
    rawPath = resolvePath(rawPath, base)
  }
  const path = normalize(rawPath)
  for (let i = 0; i < pages.length; i++) {
    if (normalize(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(pages[i].path)
      })
    }
  }
  console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`)
  return {}
}

function resolvePath (relative, base, append) {
  const firstChar = relative.charAt(0)
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  const stack = base.split('/')

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop()
  }

  // resolve relative path
  const segments = relative.replace(/^\//, '').split('/')
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === '..') {
      stack.pop()
    } else if (segment !== '.') {
      stack.push(segment)
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('')
  }

  return stack.join('/')
}

/**
 * 获取 开始页 和 结束页。间隔
 * @param  {Number} max      一共多少个 post 页面
 * @param  {Number} interval 每 interval 个 post 为一页
 * @return {Array}          二维数组，列： [ [ 0, 4 ] ]
 */
export function getIntervallers (max, interval) {
  const count = max % interval === 0 ? Math.floor(max / interval) : Math.floor(max / interval) + 1
  const arr = [...Array(count)]
  return arr.map((v, index) => {
    const start = index * interval
    const end = (index + 1) * interval
    return [start, end > max ? max : end]
  })
}

export function stringifyFunction (input) {
  let output = String(input)
  if (!/^(function\b|\()/.test(output)) {
    /**
     * fix edge case:
     * ```js
     * const foo = { bar () {} }
     * stringifyFunction(foo.bar)
     * ```
     */
    output = output.replace(/^[^(]+/, 'function')
  }
  return output
}

 /**
  * 获取滚动条当前所在的位置
  * @return {[type]} 滚动条位置
  */
 export function getScrollTop() {
     if (typeof window === "undefined") return;
     var scrollPos;
     if (window.pageYOffset) {
         scrollPos = window.pageYOffset;
     } else if (document.compatMode && document.compatMode != "BackCompat") {
         scrollPos = document.documentElement.scrollTop;
     } else if (document.body) {
         scrollPos = document.body.scrollTop;
     }
     return scrollPos;
 }