
'use strict'

const App = require('./src/App.js')

function createApp (options) {
  return new App(options)
}

function dev (options) {
  console.log('dev start...')
  const app = createApp(options)
  app.dev()
}

function build (options) {
  console.log('build start...')
  const app = createApp(options)
  app.build()
}
// build()
dev()

// async function build (options) {
//   const app = createApp(options)
//   await app.process()
//   return app.build()
// }

